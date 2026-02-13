import React, { createContext, useContext, useState, useRef, useCallback, useEffect } from 'react';
import { Audio } from 'expo-av';
import { Alert } from 'react-native';

export interface PlayingHymn {
  id: number;
  numero: number;
  titulo: string;
  audioUri: string;
}

interface AudioContextType {
  playingHymn: PlayingHymn | null;
  isPlaying: boolean;
  isLoading: boolean;
  position: number;       // ms
  duration: number;       // ms
  playHymn: (hymn: PlayingHymn) => Promise<void>;
  togglePlayPause: () => Promise<void>;
  seekTo: (positionMs: number) => Promise<void>;
  stopAndClose: () => Promise<void>;
  skipForward: () => void;   // navigate to next hymn — handled externally via callback
  skipBackward: () => void;  // navigate to prev hymn — handled externally via callback
  setNavigationCallbacks: (prev: () => void, next: () => void) => void;
}

const AudioContext = createContext<AudioContextType | null>(null);

export function AudioProvider({ children }: { children: React.ReactNode }) {
  const [playingHymn, setPlayingHymn] = useState<PlayingHymn | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [position, setPosition] = useState(0);
  const [duration, setDuration] = useState(0);

  const soundRef = useRef<Audio.Sound | null>(null);
  const prevCallbackRef = useRef<(() => void) | null>(null);
  const nextCallbackRef = useRef<(() => void) | null>(null);

  // Cleanup sound on unmount
  useEffect(() => {
    return () => {
      if (soundRef.current) {
        soundRef.current.unloadAsync();
      }
    };
  }, []);

  const setNavigationCallbacks = useCallback((prev: () => void, next: () => void) => {
    prevCallbackRef.current = prev;
    nextCallbackRef.current = next;
  }, []);

  const stopCurrent = async () => {
    if (soundRef.current) {
      try {
        await soundRef.current.stopAsync();
        await soundRef.current.unloadAsync();
      } catch (_) {}
      soundRef.current = null;
    }
    setIsPlaying(false);
    setPosition(0);
    setDuration(0);
  };

  const playHymn = useCallback(async (hymn: PlayingHymn) => {
    try {
      // If same hymn is already loaded, just toggle
      if (playingHymn?.id === hymn.id && soundRef.current) {
        const status = await soundRef.current.getStatusAsync();
        if (status.isLoaded) {
          if (status.isPlaying) {
            await soundRef.current.pauseAsync();
            setIsPlaying(false);
          } else {
            await soundRef.current.playAsync();
            setIsPlaying(true);
          }
          return;
        }
      }

      // Stop previous
      await stopCurrent();

      setIsLoading(true);
      setPlayingHymn(hymn);

      await Audio.setAudioModeAsync({
        playsInSilentModeIOS: true,
        staysActiveInBackground: true,
      });

      const { sound } = await Audio.Sound.createAsync(
        { uri: hymn.audioUri },
        { shouldPlay: true },
        (status) => {
          if (status.isLoaded) {
            setPosition(status.positionMillis ?? 0);
            setDuration(status.durationMillis ?? 0);
            setIsPlaying(status.isPlaying);
            if (status.didJustFinish) {
              setIsPlaying(false);
              setPosition(0);
            }
          }
        }
      );

      soundRef.current = sound;
      setIsPlaying(true);
      setIsLoading(false);
    } catch (error) {
      console.error('AudioContext playHymn error:', error);
      setIsLoading(false);
      setPlayingHymn(null);
      Alert.alert('Error', 'No se pudo reproducir el audio.');
    }
  }, [playingHymn]);

  const togglePlayPause = useCallback(async () => {
    if (!soundRef.current) return;
    try {
      const status = await soundRef.current.getStatusAsync();
      if (status.isLoaded) {
        if (status.isPlaying) {
          await soundRef.current.pauseAsync();
          setIsPlaying(false);
        } else {
          await soundRef.current.playAsync();
          setIsPlaying(true);
        }
      }
    } catch (error) {
      console.error('togglePlayPause error:', error);
    }
  }, []);

  const seekTo = useCallback(async (positionMs: number) => {
    if (!soundRef.current) return;
    try {
      await soundRef.current.setPositionAsync(positionMs);
      setPosition(positionMs);
    } catch (error) {
      console.error('seekTo error:', error);
    }
  }, []);

  const stopAndClose = useCallback(async () => {
    await stopCurrent();
    setPlayingHymn(null);
  }, []);

  const skipBackward = useCallback(async () => {
    // If more than 3 seconds in, restart current track
    if (soundRef.current) {
      try {
        const status = await soundRef.current.getStatusAsync();
        if (status.isLoaded && status.positionMillis > 3000) {
          await soundRef.current.setPositionAsync(0);
          await soundRef.current.playAsync();
          setPosition(0);
          setIsPlaying(true);
          return;
        }
      } catch (error) {
        console.error('skipBackward status error:', error);
      }
    }
    // Under 3 seconds — go to previous hymn if available, else restart
    if (prevCallbackRef.current) {
      prevCallbackRef.current();
    } else if (soundRef.current) {
      try {
        await soundRef.current.setPositionAsync(0);
        await soundRef.current.playAsync();
        setPosition(0);
        setIsPlaying(true);
      } catch (error) {
        console.error('skipBackward restart error:', error);
      }
    }
  }, []);

  const skipForward = useCallback(() => {
    nextCallbackRef.current?.();
  }, []);

  return (
    <AudioContext.Provider value={{
      playingHymn,
      isPlaying,
      isLoading,
      position,
      duration,
      playHymn,
      togglePlayPause,
      seekTo,
      stopAndClose,
      skipForward,
      skipBackward,
      setNavigationCallbacks,
    }}>
      {children}
    </AudioContext.Provider>
  );
}

export function useAudio() {
  const ctx = useContext(AudioContext);
  if (!ctx) throw new Error('useAudio must be used inside AudioProvider');
  return ctx;
}