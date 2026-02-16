import {
  View, Text, ScrollView, StyleSheet, StatusBar,
  TouchableOpacity, ActivityIndicator,
  Animated, Dimensions, PanResponder, Alert
} from 'react-native';
import { useLocalSearchParams, Stack, router } from 'expo-router';
import { SafeAreaView } from 'react-native-safe-area-context';
import { hymns } from '@/constants/hymns';
import { useSettings } from '@/contexts/SettingsContext';
import { useFavorites } from '@/contexts/FavoritesContext';
import { useAudio } from '@/contexts/AudioContext';
import { lightTheme, darkTheme, fontSizes } from '@/constants/theme';
import { Play, Pause, Download, Heart, FileMusic, CheckCircle } from 'lucide-react-native';
import { CircularProgress } from '@/components/Circularprogress';
import { useState, useEffect, useRef, useCallback } from 'react';
import NetInfo from '@react-native-community/netinfo';
import * as FileSystem from 'expo-file-system';
import { getPDFUrl, isMediaConfigured } from '@/constants/media-config';
import { SheetMusicViewer } from '@/components/Sheetmusicviewer';

const SCREEN_WIDTH = Dimensions.get('window').width;
const SWIPE_THRESHOLD = 80;
const SWIPE_VELOCITY = 0.3;

const getDocumentDirectory = () => {
  // @ts-ignore
  if (FileSystem.documentDirectory) return FileSystem.documentDirectory;
  // @ts-ignore
  if (FileSystem.default?.documentDirectory) return FileSystem.default.documentDirectory;
  return '';
};

const DOC_DIR = getDocumentDirectory();
const AUDIO_CACHE_DIR = DOC_DIR ? `${DOC_DIR}audio/` : '';
const PDF_CACHE_DIR = DOC_DIR ? `${DOC_DIR}pdfs/` : '';

const formatTime = (ms: number): string => {
  if (!ms || ms <= 0) return '0:00';
  const totalSeconds = Math.floor(ms / 1000);
  const minutes = Math.floor(totalSeconds / 60);
  const seconds = totalSeconds % 60;
  return `${minutes}:${seconds.toString().padStart(2, '0')}`;
};

export default function HymnScreen() {
  const { id } = useLocalSearchParams();
  const { settings, effectiveTheme } = useSettings();
  const { toggleFavorite, isFavorite } = useFavorites();
  const audio = useAudio();
  const theme = effectiveTheme === 'dark' ? darkTheme : lightTheme;
  const fonts = fontSizes[settings.fontSize];

  const [isDownloadingAudio, setIsDownloadingAudio] = useState(false);
  const [isDownloadingPDF, setIsDownloadingPDF] = useState(false);
  const [isOnline, setIsOnline] = useState(true);
  const [audioDownloaded, setAudioDownloaded] = useState(false);
  const [pdfDownloaded, setPdfDownloaded] = useState(false);
  const [downloadProgress, setDownloadProgress] = useState({ audio: 0, pdf: 0 });
  const [sheetMusicVisible, setSheetMusicVisible] = useState(false);

  const hymn = hymns.find(h => h.id === Number(id));
  const currentIndex = hymns.findIndex(h => h.id === Number(id));

  // Is THIS hymn currently playing in the global audio context?
  const isThisHymnActive = audio.playingHymn?.id === hymn?.id;
  const isPlaying = isThisHymnActive && audio.isPlaying;
  const isLoadingAudio = isThisHymnActive && audio.isLoading;
  const position = isThisHymnActive ? audio.position : 0;
  const duration = isThisHymnActive ? audio.duration : 0;

  const translateX = useRef(new Animated.Value(0)).current;
  const isAnimating = useRef(false);

  // Register navigation callbacks for the MiniPlayer skip buttons
  const navigateToHymn = useCallback((direction: 'prev' | 'next') => {
    if (isAnimating.current) return;
    const targetIndex = direction === 'prev' ? currentIndex - 1 : currentIndex + 1;
    if (targetIndex < 0 || targetIndex >= hymns.length) {
      Animated.spring(translateX, { toValue: 0, useNativeDriver: true, tension: 200, friction: 15 }).start();
      return;
    }
    isAnimating.current = true;
    const toValue = direction === 'prev' ? SCREEN_WIDTH : -SCREEN_WIDTH;
    Animated.timing(translateX, { toValue, duration: 250, useNativeDriver: true }).start(() => {
      translateX.setValue(0);
      isAnimating.current = false;
      router.replace(`/hymn/${hymns[targetIndex].id}`);
    });
  }, [currentIndex, translateX]);

  useEffect(() => {
    audio.setNavigationCallbacks(
      () => navigateToHymn('prev'),
      () => navigateToHymn('next'),
    );
  }, [navigateToHymn]);

  useEffect(() => {
    const unsubscribe = NetInfo.addEventListener(state => {
      setIsOnline(state.isConnected ?? false);
    });
    return () => unsubscribe();
  }, []);

  useEffect(() => {
    checkDownloadedFiles();
  }, [hymn]);

  const checkDownloadedFiles = async () => {
    if (!hymn || !AUDIO_CACHE_DIR) return;
    try {
      const audioPath = `${AUDIO_CACHE_DIR}hymn_${hymn.numero}.mp3`;
      const audioInfo = await FileSystem.getInfoAsync(audioPath);
      setAudioDownloaded(audioInfo.exists);

      const pdfPath = `${PDF_CACHE_DIR}hymn_${hymn.numero}.pdf`;
      const pdfInfo = await FileSystem.getInfoAsync(pdfPath);
      setPdfDownloaded(pdfInfo.exists);
    } catch (error) {
      console.error('Error checking files:', error);
    }
  };

  const ensureDirectoryExists = async (directory: string) => {
    if (!directory) return;
    try {
      const dirInfo = await FileSystem.getInfoAsync(directory);
      if (!dirInfo.exists) {
        await FileSystem.makeDirectoryAsync(directory, { intermediates: true });
      }
    } catch (error) {
      console.error('Error creating directory:', error);
    }
  };

  const downloadAudio = async () => {
    if (!hymn?.audio.url) return;

    if (!isOnline) {
      Alert.alert(
        'Sin conexión',
        'Necesitas conexión a internet para descargar el audio.'
      );
      return;
    }

    if (!AUDIO_CACHE_DIR) {
      Alert.alert(
        'Error',
        'No se puede acceder al almacenamiento del dispositivo.'
      );
      return;
    }

    try {
      setIsDownloadingAudio(true);
      await ensureDirectoryExists(AUDIO_CACHE_DIR);
      const audioPath = `${AUDIO_CACHE_DIR}hymn_${hymn.numero}.mp3`;

      const downloadResumable = FileSystem.createDownloadResumable(
        hymn.audio.url,
        audioPath,
        {},
        (dp) => {
          const p = dp.totalBytesExpectedToWrite > 0
            ? dp.totalBytesWritten / dp.totalBytesExpectedToWrite
            : 0;
          setDownloadProgress(prev => ({ ...prev, audio: p }));
        }
      );

      const result = await downloadResumable.downloadAsync();
      if (result) {
        setAudioDownloaded(true);
        Alert.alert(
          '✓ Descargado',
          'Audio disponible offline.'
        );
      }
    } catch (error) {
      console.error('Error downloading audio:', error);
      Alert.alert(
        'Error',
        'No se pudo descargar el audio.'
      );
    } finally {
      setIsDownloadingAudio(false);
      setDownloadProgress(prev => ({ ...prev, audio: 0 }));
    }
  };

  const downloadPDF = async () => {
    if (!isMediaConfigured()) {
      Alert.alert(
        '⚠️ Configuración pendiente',
        'Las URLs de descarga aún no están configuradas.'
      );
      return;
    }

    if (!isOnline) {
      Alert.alert(
        'Sin conexión',
        'Necesitas conexión a internet para descargar el PDF.'
      );
      return;
    }

    if (!hymn) return;

    // ✅ Fixed: show error instead of silent return
    if (!PDF_CACHE_DIR) {
      Alert.alert(
        'Error',
        'No se puede acceder al almacenamiento del dispositivo.'
      );
      return;
    }

    const pdfUrl = getPDFUrl(hymn.numero);

    try {
      setIsDownloadingPDF(true);
      await ensureDirectoryExists(PDF_CACHE_DIR);
      const pdfPath = `${PDF_CACHE_DIR}hymn_${hymn.numero}.pdf`;

      const downloadResumable = FileSystem.createDownloadResumable(
        pdfUrl,
        pdfPath,
        {},
        (dp) => {
          const p = dp.totalBytesExpectedToWrite > 0
            ? dp.totalBytesWritten / dp.totalBytesExpectedToWrite
            : 0;
          setDownloadProgress(prev => ({ ...prev, pdf: p }));
        }
      );

      const result = await downloadResumable.downloadAsync();
      if (result) {
        setPdfDownloaded(true);
        Alert.alert(
          '✓ Descargado',
          'PDF disponible offline.'
        );
      }
    } catch (error) {
      console.error('Error downloading PDF:', error);
      Alert.alert(
        'Error',
        'No se pudo descargar el PDF. Verifica que el archivo exista en el servidor.'
      );
    } finally {
      setIsDownloadingPDF(false);
      setDownloadProgress(prev => ({ ...prev, pdf: 0 }));
    }
  };

  const handlePlayPause = async () => {
    if (!hymn) return;

    // If this hymn is already in context, just toggle
    if (isThisHymnActive) {
      audio.togglePlayPause();
      return;
    }

    // Determine audio URI
    let audioUri: string | null = null;

    if (audioDownloaded && AUDIO_CACHE_DIR) {
      audioUri = `${AUDIO_CACHE_DIR}hymn_${hymn.numero}.mp3`;
    } else if (!isOnline) {
      Alert.alert(
        'Sin conexión',
        'Descarga el audio primero para escucharlo offline.'
      );
      return;
    } else if (hymn.audio.url) {
      audioUri = hymn.audio.url;
    }

    if (!audioUri) return;

    await audio.playHymn({
      id: hymn.id,
      numero: hymn.numero,
      titulo: hymn.titulo,
      audioUri,
    });
  };

  const openPDF = async () => {
    if (!pdfDownloaded && !isOnline) {
      Alert.alert(
        'Sin conexión',
        'Descarga el PDF primero para verlo offline.'
      );
      return;
    }
    Alert.alert(
      'Abrir PDF',
      `PDF del himno #${hymn?.numero} - Visor próximamente`
    );
  };

  const panResponder = useRef(
    PanResponder.create({
      onMoveShouldSetPanResponder: (_, g) =>
        Math.abs(g.dx) > 10 && Math.abs(g.dx) > Math.abs(g.dy) * 2,
      onPanResponderMove: (_, g) => {
        if (isAnimating.current) return;
        const atStart = currentIndex === 0 && g.dx > 0;
        const atEnd = currentIndex === hymns.length - 1 && g.dx < 0;
        translateX.setValue(g.dx * (atStart || atEnd ? 0.2 : 1));
      },
      onPanResponderRelease: (_, g) => {
        if (isAnimating.current) return;
        const shouldNav = Math.abs(g.dx) > SWIPE_THRESHOLD || Math.abs(g.vx) > SWIPE_VELOCITY;
        if (shouldNav) {
          navigateToHymn(g.dx > 0 ? 'prev' : 'next');
        } else {
          Animated.spring(translateX, { toValue: 0, useNativeDriver: true, tension: 150, friction: 12 }).start();
        }
      },
      onPanResponderTerminate: () => {
        Animated.spring(translateX, { toValue: 0, useNativeDriver: true }).start();
      },
    })
  ).current;

  if (!hymn) {
    return (
      <View style={[styles.container, { backgroundColor: theme.background }]}>
        <Text style={{ color: theme.text }}>Himno no encontrado</Text>
      </View>
    );
  }

  const hymnIsFavorite = isFavorite(hymn.id);

  const getAudioStatus = () => {
    if (isDownloadingAudio) return 'Descargando...';
    if (audioDownloaded) return 'Disponible offline';
    if (!hymn.audio.tiene_audio) return 'Próximamente';
    if (isPlaying) return 'Reproduciendo';
    return 'Toca para reproducir';
  };

  const getPDFStatus = () => {
    if (isDownloadingPDF) return 'Descargando...';
    if (pdfDownloaded) return 'Disponible offline';
    return 'Toca para descargar';
  };

  const progress = duration > 0 ? position / duration : 0;

  // Audio card border: only red if explicitly no audio available (not just offline)
  const audioBorderColor = theme.border;
  const pdfBorderColor = theme.border;

  return (
    <>
      <Stack.Screen
        options={{
          title: hymn.titulo,
          headerShown: true,
          headerStyle: { backgroundColor: theme.cardBackground },
          headerTintColor: theme.text,
          headerTitleStyle: { fontSize: 16, fontWeight: '600' as const },
          headerShadowVisible: false,
          headerLeft: () => (
            <View style={{ flexDirection: 'row', alignItems: 'center', marginLeft: 4 }}>
              <TouchableOpacity onPress={() => router.back()} style={{ padding: 8 }} activeOpacity={0.7}>
                <Text style={{ color: theme.primary, fontSize: 17 }}>‹</Text>
              </TouchableOpacity>
              <Text style={{ color: theme.primary, fontWeight: '700', fontSize: 16, marginLeft: 2 }}>
                #{hymn.numero}
              </Text>
            </View>
          ),
          headerRight: () => (
            <TouchableOpacity
              onPress={() => toggleFavorite(hymn.id)}
              style={{ marginRight: 8, padding: 8 }}
              activeOpacity={0.7}
            >
              <Heart
                size={24}
                color={hymnIsFavorite ? theme.error : theme.primary}
                fill={hymnIsFavorite ? theme.error : 'transparent'}
              />
            </TouchableOpacity>
          ),
        }}
      />

      <View style={[styles.container, { backgroundColor: theme.background }]}>
        <StatusBar barStyle={effectiveTheme === 'dark' ? 'light-content' : 'dark-content'} />

        {currentIndex > 0 && (
          <View style={[styles.swipeHint, styles.swipeHintLeft]}>
            <Text style={[styles.swipeHintText, { color: theme.textTertiary }]}>‹</Text>
          </View>
        )}
        {currentIndex < hymns.length - 1 && (
          <View style={[styles.swipeHint, styles.swipeHintRight]}>
            <Text style={[styles.swipeHintText, { color: theme.textTertiary }]}>›</Text>
          </View>
        )}

        <Animated.View
          style={[styles.animatedContainer, { transform: [{ translateX }] }]}
          {...panResponder.panHandlers}
        >
          <ScrollView contentContainerStyle={styles.scrollContent} showsVerticalScrollIndicator={false}>
            <SafeAreaView edges={['bottom']} style={styles.safeArea}>
              <View style={styles.header}>                
                <Text style={[styles.hymnTitle, { color: theme.text, fontSize: fonts.title }]}>
                  {hymn.titulo}
                </Text>
              </View>

              <View style={styles.lyricsContainer}>
                {/* CORO posicion 0 — va ANTES de todos los versos */}
                {hymn.coro && hymn.posicion_coro === 0 && (
                  <View style={[styles.chorusContainer, { backgroundColor: theme.cardBackground, borderColor: theme.border }]}>
                    <Text style={[styles.chorusLabel, { color: theme.primary, fontSize: fonts.base }]}>
                      CORO
                    </Text>
                    <Text style={[styles.verseText, { color: theme.text, fontSize: fonts.large, lineHeight: fonts.large * 1.6, fontStyle: 'italic' as const }]}>
                      {hymn.coro}
                    </Text>
                  </View>
                )}

                {hymn.versos.map((verso, index) => (
                  <View key={`verse-${index}`}>
                    <View style={styles.verseContainer}>
                      <Text style={[styles.verseText, { color: theme.text, fontSize: fonts.large, lineHeight: fonts.large * 1.6 }]}>
                        {verso}
                      </Text>
                    </View>
                    {/* CORO después del verso N (posicion_coro es 1-based) */}
                    {hymn.coro && hymn.posicion_coro === index + 1 && (
                      <View style={[styles.chorusContainer, { backgroundColor: theme.cardBackground, borderColor: theme.border }]}>
                        <Text style={[styles.chorusLabel, { color: theme.primary, fontSize: fonts.base }]}>
                          CORO
                        </Text>
                        <Text style={[styles.verseText, { color: theme.text, fontSize: fonts.large, lineHeight: fonts.large * 1.6, fontStyle: 'italic' as const }]}>
                          {hymn.coro}
                        </Text>
                      </View>
                    )}
                  </View>
                ))}

                {/* CORO posicion null — va al FINAL */}
                {hymn.coro && hymn.posicion_coro === null && (
                  <View style={[styles.chorusContainer, { backgroundColor: theme.cardBackground, borderColor: theme.border }]}>
                    <Text style={[styles.chorusLabel, { color: theme.primary, fontSize: fonts.base }]}>
                      CORO
                    </Text>
                    <Text style={[styles.verseText, { color: theme.text, fontSize: fonts.large, lineHeight: fonts.large * 1.6, fontStyle: 'italic' as const }]}>
                      {hymn.coro}
                    </Text>
                  </View>
                )}
              </View>

              {/* AUDIO CARD */}
              <View style={styles.controlsContainer}>
                <View style={[styles.audioContainer, { backgroundColor: theme.cardBackground, borderColor: audioBorderColor }]}>
                  <View style={styles.audioTopRow}>
                    <TouchableOpacity
                      style={[
                        styles.playButton,
                        { backgroundColor: hymn.audio.tiene_audio && (isOnline || audioDownloaded) ? theme.primary : theme.border }
                      ]}
                      onPress={handlePlayPause}
                      disabled={isLoadingAudio || (!hymn.audio.tiene_audio && !audioDownloaded)}
                    >
                      {isLoadingAudio
                        ? <ActivityIndicator color="#FFFFFF" size="small" />
                        : isPlaying
                          ? <Pause color="#FFFFFF" size={24} fill="#FFFFFF" />
                          : <Play color="#FFFFFF" size={24} fill="#FFFFFF" />
                      }
                    </TouchableOpacity>

                    <View style={styles.audioInfo}>
                      <Text style={[styles.audioTitle, { color: theme.text, fontSize: fonts.base }]}>
                        Pista de Audio
                      </Text>
                      <Text style={[styles.audioStatus, { color: theme.textSecondary, fontSize: fonts.base }]}>
                        {getAudioStatus()}
                      </Text>
                    </View>

                    {/* Download button with circular progress */}
                    <TouchableOpacity
                      style={styles.downloadButton}
                      onPress={downloadAudio}
                      disabled={!hymn.audio.tiene_audio || audioDownloaded || isDownloadingAudio || !isOnline}
                    >
                      {isDownloadingAudio ? (
                        <CircularProgress
                          progress={downloadProgress.audio}
                          size={28}
                          color={theme.primary}
                          backgroundColor={theme.border}
                        />
                      ) : audioDownloaded ? (
                        <CheckCircle color={theme.primary} size={22} fill={theme.primary} />
                      ) : (
                        <Download
                          color={hymn.audio.tiene_audio && isOnline ? theme.primary : theme.textTertiary}
                          size={22}
                        />
                      )}
                    </TouchableOpacity>
                  </View>

                  {/* Progress bar row — only shown when this hymn is active */}
                  {isThisHymnActive && (
                    <View style={styles.progressSection}>
                      <TouchableOpacity
                        style={styles.progressTrackContainer}
                        onPress={(e) => {
                          // Simple seek on tap: calculate position from tap X
                          // @ts-ignore
                          const { locationX, target } = e.nativeEvent;
                          // We'll use a ref for width; fallback to screen width - padding
                          const barWidth = SCREEN_WIDTH - 48 - 48 - 48 - 40 - 16 - 32;
                          const ratio = Math.max(0, Math.min(1, locationX / barWidth));
                          audio.seekTo(ratio * duration);
                        }}
                        activeOpacity={1}
                      >
                        <View style={[styles.progressTrack, { backgroundColor: theme.border }]}>
                          <View
                            style={[
                              styles.progressFill,
                              { backgroundColor: theme.primary, width: `${progress * 100}%` }
                            ]}
                          />
                          {/* Thumb */}
                          <View
                            style={[
                              styles.progressThumb,
                              { backgroundColor: theme.primary, left: `${progress * 100}%` }
                            ]}
                          />
                        </View>
                      </TouchableOpacity>
                      <View style={styles.timeRow}>
                        <Text style={[styles.timeText, { color: theme.textSecondary }]}>
                          {formatTime(position)}
                        </Text>
                        <Text style={[styles.timeText, { color: theme.textSecondary }]}>
                          {formatTime(duration)}
                        </Text>
                      </View>
                    </View>
                  )}
                </View>

                {/* SHEET MUSIC BUTTON */}
                <TouchableOpacity
                  style={[styles.pdfContainer, { backgroundColor: theme.cardBackground, borderColor: theme.border }]}
                  onPress={() => setSheetMusicVisible(true)}
                  activeOpacity={0.7}
                >
                  <View style={[styles.pdfIcon, { backgroundColor: theme.primary }]}>
                    <FileMusic color="#FFFFFF" size={24} />
                  </View>
                  <View style={styles.pdfInfo}>
                    <Text style={[styles.pdfTitle, { color: theme.text, fontSize: fonts.base }]}>
                      Partitura
                    </Text>
                    <Text style={[styles.pdfStatus, { color: theme.textSecondary, fontSize: fonts.base }]}>
                      Toca para ver
                    </Text>
                  </View>
                  <FileMusic color={theme.primary} size={20} />
                </TouchableOpacity>
              </View>
            </SafeAreaView>
          </ScrollView>
        </Animated.View>
      </View>

      {/* Sheet Music Viewer — renders as full-screen modal, sits above content but below tab bar */}
      <SheetMusicViewer
        visible={sheetMusicVisible}
        onClose={() => setSheetMusicVisible(false)}
        hymnNumber={hymn.numero}
        isOnline={isOnline}
      />
    </>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1 },
  animatedContainer: { flex: 1 },
  safeArea: { flex: 1 },
  scrollContent: { paddingHorizontal: 24, paddingTop: 24 },
  swipeHint: { position: 'absolute' as const, top: '45%', zIndex: 10, padding: 8 },
  swipeHintLeft: { left: 4 },
  swipeHintRight: { right: 4 },
  swipeHintText: { fontSize: 28, fontWeight: '300' as const },
  header: { alignItems: 'center' as const, marginBottom: 32 },
  hymnNumber: { fontWeight: '700' as const, marginBottom: 12 },
  hymnTitle: { fontWeight: '700' as const, textAlign: 'center' as const, marginBottom: 8, letterSpacing: -0.5 },
  hymnAuthor: { fontWeight: '400' as const, textAlign: 'center' as const },
  lyricsContainer: { marginBottom: 32 },
  verseContainer: { marginBottom: 24 },
  verseText: { fontWeight: '400' as const },
  chorusContainer: {
    padding: 16,
    borderRadius: 12,
    borderWidth: 1,
    marginBottom: 24,
  },
  chorusLabel: {
    fontWeight: '700' as const,
    marginBottom: 8,
    letterSpacing: 1.5,
  },
  chorusText: { fontWeight: '500' as const },
  controlsContainer: { marginBottom: 24, gap: 12 },

  // Audio card
  audioContainer: {
    borderRadius: 16,
    borderWidth: 1,
    overflow: 'hidden' as const,
  },
  audioTopRow: {
    flexDirection: 'row' as const,
    alignItems: 'center' as const,
    padding: 16,
  },
  playButton: {
    width: 48,
    height: 48,
    borderRadius: 24,
    alignItems: 'center' as const,
    justifyContent: 'center' as const,
    marginRight: 16,
  },
  audioInfo: { flex: 1 },
  audioTitle: { fontWeight: '600' as const, marginBottom: 4 },
  audioStatus: { fontWeight: '400' as const },
  downloadButton: {
    width: 40,
    height: 40,
    alignItems: 'center' as const,
    justifyContent: 'center' as const,
  },

  // Progress bar inside audio card
  progressSection: {
    paddingHorizontal: 16,
    paddingBottom: 14,
  },
  progressTrackContainer: {
    paddingVertical: 6,
  },
  progressTrack: {
    height: 3,
    borderRadius: 2,
    position: 'relative' as const,
    overflow: 'visible' as const,
  },
  progressFill: {
    height: 3,
    borderRadius: 2,
    maxWidth: '100%',
  },
  progressThumb: {
    position: 'absolute' as const,
    width: 12,
    height: 12,
    borderRadius: 6,
    top: -4.5,
    marginLeft: -6,
  },
  timeRow: {
    flexDirection: 'row' as const,
    justifyContent: 'space-between' as const,
    marginTop: 4,
  },
  timeText: {
    fontSize: 11,
    fontWeight: '400' as const,
  },

  // PDF card
  pdfContainer: {
    flexDirection: 'row' as const,
    alignItems: 'center' as const,
    padding: 16,
    borderRadius: 16,
    borderWidth: 1,
  },
  pdfIcon: {
    width: 48,
    height: 48,
    borderRadius: 24,
    alignItems: 'center' as const,
    justifyContent: 'center' as const,
    marginRight: 16,
  },
  pdfInfo: { flex: 1 },
  pdfTitle: { fontWeight: '600' as const, marginBottom: 4 },
  pdfStatus: { fontWeight: '400' as const },

  footer: { paddingBottom: 48, alignItems: 'center' as const },
  footerText: { fontWeight: '400' as const, fontStyle: 'italic' as const },
});