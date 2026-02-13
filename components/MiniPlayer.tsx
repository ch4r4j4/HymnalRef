import React, { useCallback } from 'react';
import {
  View, Text, TouchableOpacity, StyleSheet,
  Animated, Pressable, Platform,
} from 'react-native';
import { useAudio } from '@/contexts/AudioContext';
import { useSettings } from '@/contexts/SettingsContext';
import { lightTheme, darkTheme } from '@/constants/theme';
import { Play, Pause, SkipBack, SkipForward, X } from 'lucide-react-native';
import { router } from 'expo-router';
import { hymns } from '@/constants/hymns';

const formatTime = (ms: number): string => {
  if (!ms || ms <= 0) return '0:00';
  const totalSeconds = Math.floor(ms / 1000);
  const minutes = Math.floor(totalSeconds / 60);
  const seconds = totalSeconds % 60;
  return `${minutes}:${seconds.toString().padStart(2, '0')}`;
};

export function MiniPlayer() {
  const {
    playingHymn,
    isPlaying,
    isLoading,
    position,
    duration,
    togglePlayPause,
    stopAndClose,
    skipBackward,
    skipForward,
  } = useAudio();

  const { effectiveTheme, settings } = useSettings();
  const theme = effectiveTheme === 'dark' ? darkTheme : lightTheme;

  if (!playingHymn) return null;

  const progress = duration > 0 ? position / duration : 0;
  const currentIndex = hymns.findIndex(h => h.id === playingHymn.id);
  const hasPrev = currentIndex > 0;
  const hasNext = currentIndex < hymns.length - 1;

  const handleTap = () => {
    router.push(`/hymn/${playingHymn.id}`);
  };

  return (
    <View style={[styles.wrapper, {
      backgroundColor: theme.cardBackground,
      borderTopWidth: 1,
      borderTopColor: theme.border,
    }]}>
      {/* Progress bar at top */}
      <View style={[styles.progressTrack, { backgroundColor: theme.border }]}>
        <View
          style={[
            styles.progressFill,
            { backgroundColor: theme.primary, width: `${progress * 100}%` }
          ]}
        />
      </View>

      <Pressable onPress={handleTap} style={styles.content}>
        {/* Hymn info */}
        <View style={styles.info}>
          <Text style={[styles.number, { color: theme.primary }]}>
            #{playingHymn.numero}
          </Text>
          <View style={styles.titleRow}>
            <Text
              style={[styles.title, { color: theme.text }]}
              numberOfLines={1}
              ellipsizeMode="tail"
            >
              {playingHymn.titulo}
            </Text>
            <Text style={[styles.time, { color: theme.textSecondary }]}>
              {formatTime(position)} / {formatTime(duration)}
            </Text>
          </View>
        </View>

        {/* Controls */}
        <View style={styles.controls}>
          <TouchableOpacity
            onPress={(e) => { e.stopPropagation?.(); skipBackward(); }}
            disabled={!hasPrev}
            style={styles.controlBtn}
            hitSlop={{ top: 8, bottom: 8, left: 8, right: 8 }}
          >
            <SkipBack
              size={20}
              color={hasPrev ? theme.text : theme.textTertiary}
              fill={hasPrev ? theme.text : theme.textTertiary}
            />
          </TouchableOpacity>

          <TouchableOpacity
            onPress={(e) => { e.stopPropagation?.(); togglePlayPause(); }}
            style={[styles.playBtn, { backgroundColor: theme.primary }]}
            hitSlop={{ top: 4, bottom: 4, left: 4, right: 4 }}
          >
            {isLoading ? (
              <View style={styles.loadingDot} />
            ) : isPlaying ? (
              <Pause size={18} color="#FFFFFF" fill="#FFFFFF" />
            ) : (
              <Play size={18} color="#FFFFFF" fill="#FFFFFF" />
            )}
          </TouchableOpacity>

          <TouchableOpacity
            onPress={(e) => { e.stopPropagation?.(); skipForward(); }}
            disabled={!hasNext}
            style={styles.controlBtn}
            hitSlop={{ top: 8, bottom: 8, left: 8, right: 8 }}
          >
            <SkipForward
              size={20}
              color={hasNext ? theme.text : theme.textTertiary}
              fill={hasNext ? theme.text : theme.textTertiary}
            />
          </TouchableOpacity>

          <TouchableOpacity
            onPress={(e) => { e.stopPropagation?.(); stopAndClose(); }}
            style={styles.closeBtn}
            hitSlop={{ top: 8, bottom: 8, left: 8, right: 8 }}
          >
            <X size={18} color={theme.textSecondary} />
          </TouchableOpacity>
        </View>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    // No absolute positioning — sits in normal flow inside CustomTabBar
    shadowOffset: { width: 0, height: -2 },
    shadowOpacity: 0.08,
    shadowRadius: 4,
    elevation: 8,
  },
  progressTrack: {
    height: 2,
    width: '100%',
  },
  progressFill: {
    height: 2,
  },
  content: {
    flexDirection: 'row' as const,
    alignItems: 'center' as const,
    paddingHorizontal: 16,
    paddingVertical: 10,
    gap: 12,
  },
  info: {
    flex: 1,
    minWidth: 0,
  },
  number: {
    fontSize: 11,
    fontWeight: '700' as const,
    letterSpacing: 0.5,
    marginBottom: 2,
  },
  titleRow: {
    flexDirection: 'row' as const,
    alignItems: 'center' as const,
    gap: 8,
  },
  title: {
    fontSize: 13,
    fontWeight: '600' as const,
    flex: 1,
  },
  time: {
    fontSize: 11,
    fontWeight: '400' as const,
    flexShrink: 0,
  },
  controls: {
    flexDirection: 'row' as const,
    alignItems: 'center' as const,
    gap: 6,
  },
  controlBtn: {
    width: 36,
    height: 36,
    alignItems: 'center' as const,
    justifyContent: 'center' as const,
  },
  playBtn: {
    width: 38,
    height: 38,
    borderRadius: 19,
    alignItems: 'center' as const,
    justifyContent: 'center' as const,
  },
  closeBtn: {
    width: 32,
    height: 32,
    alignItems: 'center' as const,
    justifyContent: 'center' as const,
    marginLeft: 2,
  },
  loadingDot: {
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: '#FFFFFF',
    opacity: 0.8,
  },
});