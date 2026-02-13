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
import { lightTheme, darkTheme, fontSizes } from '@/constants/theme';
import { Play, Pause, Download, Heart, FileMusic, WifiOff, CheckCircle } from 'lucide-react-native';
import { Audio } from 'expo-av';
import { useState, useEffect, useRef } from 'react';
import NetInfo from '@react-native-community/netinfo';
import * as FileSystem from 'expo-file-system';
// 👇 Importa la configuración de URLs
import { getPDFUrl, isMediaConfigured } from '@/constants/media-config';

const SCREEN_WIDTH = Dimensions.get('window').width;
const SWIPE_THRESHOLD = 80;
const SWIPE_VELOCITY = 0.3;

// Función helper para obtener el directorio de documentos de forma segura
const getDocumentDirectory = () => {
  // @ts-ignore - documentDirectory existe en expo-file-system 19.x pero TypeScript no lo detecta correctamente
  if (FileSystem.documentDirectory) {
    // @ts-ignore
    return FileSystem.documentDirectory;
  }
  // @ts-ignore - Para versiones que lo exportan diferente
  if (FileSystem.default?.documentDirectory) {
    // @ts-ignore
    return FileSystem.default.documentDirectory;
  }
  return '';
};

// Directorios de cache
const DOC_DIR = getDocumentDirectory();
const AUDIO_CACHE_DIR = DOC_DIR ? `${DOC_DIR}audio/` : '';
const PDF_CACHE_DIR = DOC_DIR ? `${DOC_DIR}pdfs/` : '';

export default function HymnScreen() {
  const { id } = useLocalSearchParams();
  const { settings, effectiveTheme } = useSettings();
  const { toggleFavorite, isFavorite } = useFavorites();
  const theme = effectiveTheme === 'dark' ? darkTheme : lightTheme;
  const fonts = fontSizes[settings.fontSize];

  const [sound, setSound] = useState<Audio.Sound | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isLoadingAudio, setIsLoadingAudio] = useState(false);
  const [isDownloadingAudio, setIsDownloadingAudio] = useState(false);
  const [isDownloadingPDF, setIsDownloadingPDF] = useState(false);
  const [isOnline, setIsOnline] = useState(true);
  const [audioDownloaded, setAudioDownloaded] = useState(false);
  const [pdfDownloaded, setPdfDownloaded] = useState(false);
  const [downloadProgress, setDownloadProgress] = useState({ audio: 0, pdf: 0 });

  const hymn = hymns.find(h => h.id === Number(id));
  const currentIndex = hymns.findIndex(h => h.id === Number(id));

  const translateX = useRef(new Animated.Value(0)).current;
  const isAnimating = useRef(false);

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
    if (!hymn?.audio.url || !isOnline) {
      Alert.alert(
        settings.language === 'es' ? 'Sin conexión' : 'No connection',
        settings.language === 'es' 
          ? 'Necesitas conexión a internet para descargar el audio.'
          : 'You need an internet connection to download the audio.'
      );
      return;
    }

    if (!AUDIO_CACHE_DIR) {
      Alert.alert(
        settings.language === 'es' ? 'Error' : 'Error',
        settings.language === 'es' 
          ? 'No se puede acceder al almacenamiento del dispositivo.'
          : 'Cannot access device storage.'
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
        (downloadProgress) => {
          const progress = downloadProgress.totalBytesWritten / downloadProgress.totalBytesExpectedToWrite;
          setDownloadProgress(prev => ({ ...prev, audio: progress }));
        }
      );

      const result = await downloadResumable.downloadAsync();
      
      if (result) {
        setAudioDownloaded(true);
        Alert.alert(
          settings.language === 'es' ? '✓ Descargado' : '✓ Downloaded',
          settings.language === 'es' 
            ? 'El audio está disponible offline.'
            : 'Audio is available offline.'
        );
      }
    } catch (error) {
      console.error('Error downloading audio:', error);
      Alert.alert(
        settings.language === 'es' ? 'Error' : 'Error',
        settings.language === 'es' 
          ? 'No se pudo descargar el audio.'
          : 'Could not download audio.'
      );
    } finally {
      setIsDownloadingAudio(false);
      setDownloadProgress(prev => ({ ...prev, audio: 0 }));
    }
  };

  const downloadPDF = async () => {
    // 🔍 Verificar si las URLs están configuradas
    if (!isMediaConfigured()) {
      Alert.alert(
        settings.language === 'es' ? '⚠️ Configuración pendiente' : '⚠️ Configuration needed',
        settings.language === 'es' 
          ? 'Las URLs de descarga aún no están configuradas. Por favor contacta al desarrollador.'
          : 'Download URLs are not configured yet. Please contact the developer.'
      );
      return;
    }

    if (!isOnline) {
      Alert.alert(
        settings.language === 'es' ? 'Sin conexión' : 'No connection',
        settings.language === 'es' 
          ? 'Necesitas conexión a internet para descargar el PDF.'
          : 'You need an internet connection to download the PDF.'
      );
      return;
    }

    if (!hymn || !PDF_CACHE_DIR) return;

    // 👇 Usa la URL configurada
    const pdfUrl = getPDFUrl(hymn.numero);

    try {
      setIsDownloadingPDF(true);
      await ensureDirectoryExists(PDF_CACHE_DIR);

      const pdfPath = `${PDF_CACHE_DIR}hymn_${hymn.numero}.pdf`;
      
      const downloadResumable = FileSystem.createDownloadResumable(
        pdfUrl,
        pdfPath,
        {},
        (downloadProgress) => {
          const progress = downloadProgress.totalBytesWritten / downloadProgress.totalBytesExpectedToWrite;
          setDownloadProgress(prev => ({ ...prev, pdf: progress }));
        }
      );

      const result = await downloadResumable.downloadAsync();
      
      if (result) {
        setPdfDownloaded(true);
        Alert.alert(
          settings.language === 'es' ? '✓ Descargado' : '✓ Downloaded',
          settings.language === 'es' 
            ? 'El PDF está disponible offline.'
            : 'PDF is available offline.'
        );
      }
    } catch (error) {
      console.error('Error downloading PDF:', error);
      Alert.alert(
        settings.language === 'es' ? 'Error' : 'Error',
        settings.language === 'es' 
          ? 'No se pudo descargar el PDF. Verifica que el archivo exista en el servidor.'
          : 'Could not download PDF. Verify the file exists on the server.'
      );
    } finally {
      setIsDownloadingPDF(false);
      setDownloadProgress(prev => ({ ...prev, pdf: 0 }));
    }
  };

  const handlePlayPause = async () => {
    if (!hymn) return;
    if (!hymn.audio.url && !audioDownloaded) return;

    try {
      if (sound) {
        const status = await sound.getStatusAsync();
        if (status.isLoaded) {
          if (isPlaying) {
            await sound.pauseAsync();
            setIsPlaying(false);
          } else {
            await sound.playAsync();
            setIsPlaying(true);
          }
        }
      } else {
        setIsLoadingAudio(true);
        
        let audioUri: string;
        if (audioDownloaded && AUDIO_CACHE_DIR) {
          audioUri = `${AUDIO_CACHE_DIR}hymn_${hymn.numero}.mp3`;
        } else if (!isOnline) {
          Alert.alert(
            settings.language === 'es' ? 'Sin conexión' : 'No connection',
            settings.language === 'es' 
              ? 'Descarga el audio primero para escucharlo offline.'
              : 'Download the audio first to listen offline.'
          );
          setIsLoadingAudio(false);
          return;
        } else if (!hymn.audio.url) {
          setIsLoadingAudio(false);
          return;
        } else {
          audioUri = hymn.audio.url;
        }

        const { sound: newSound } = await Audio.Sound.createAsync(
          { uri: audioUri },
          { shouldPlay: true }
        );
        setSound(newSound);
        setIsPlaying(true);
        setIsLoadingAudio(false);
        newSound.setOnPlaybackStatusUpdate((status) => {
          if (status.isLoaded && status.didJustFinish) setIsPlaying(false);
        });
      }
    } catch (error) {
      console.error('Error playing audio:', error);
      setIsLoadingAudio(false);
      Alert.alert(
        settings.language === 'es' ? 'Error' : 'Error',
        settings.language === 'es' 
          ? 'No se pudo reproducir el audio.'
          : 'Could not play audio.'
      );
    }
  };

  const openPDF = async () => {
    if (!pdfDownloaded && !isOnline) {
      Alert.alert(
        settings.language === 'es' ? 'Sin conexión' : 'No connection',
        settings.language === 'es' 
          ? 'Descarga el PDF primero para verlo offline.'
          : 'Download the PDF first to view offline.'
      );
      return;
    }

    // TODO: Implementar visor de PDF
    Alert.alert(
      settings.language === 'es' ? 'Abrir PDF' : 'Open PDF',
      settings.language === 'es' 
        ? `PDF del himno #${hymn?.numero} - Próximamente se implementará el visor`
        : `Hymn #${hymn?.numero} PDF - Viewer coming soon`
    );
  };

  const navigateToHymn = (direction: 'prev' | 'next') => {
    if (isAnimating.current) return;

    const targetIndex = direction === 'prev' ? currentIndex - 1 : currentIndex + 1;

    if (targetIndex < 0 || targetIndex >= hymns.length) {
      Animated.spring(translateX, {
        toValue: 0,
        useNativeDriver: true,
        tension: 200,
        friction: 15,
      }).start();
      return;
    }

    isAnimating.current = true;
    const toValue = direction === 'prev' ? SCREEN_WIDTH : -SCREEN_WIDTH;

    Animated.timing(translateX, {
      toValue,
      duration: 250,
      useNativeDriver: true,
    }).start(() => {
      translateX.setValue(0);
      isAnimating.current = false;
      router.replace(`/hymn/${hymns[targetIndex].id}`);
    });
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

  useEffect(() => {
    return () => {
      if (sound) sound.unloadAsync();
    };
  }, [sound]);

  if (!hymn) {
    return (
      <View style={[styles.container, { backgroundColor: theme.background }]}>
        <Text style={{ color: theme.text }}>
          {settings.language === 'es' ? 'Himno no encontrado' : 'Hymn not found'}
        </Text>
      </View>
    );
  }

  const hymnData = hymn.idiomas[settings.language];
  const hymnIsFavorite = isFavorite(hymn.id);

  const getAudioStatus = () => {
    if (isDownloadingAudio) {
      return settings.language === 'es' 
        ? `Descargando... ${Math.round(downloadProgress.audio * 100)}%`
        : `Downloading... ${Math.round(downloadProgress.audio * 100)}%`;
    }
    if (audioDownloaded) return settings.language === 'es' ? 'Disponible offline' : 'Available offline';
    if (!hymn.audio.tiene_audio) return settings.language === 'es' ? 'Próximamente' : 'Coming soon';
    if (!isOnline) return settings.language === 'es' ? 'Sin conexión' : 'No connection';
    if (isPlaying) return settings.language === 'es' ? 'Reproduciendo...' : 'Playing...';
    return settings.language === 'es' ? 'Toca para reproducir' : 'Tap to play';
  };

  const getPDFStatus = () => {
    if (isDownloadingPDF) {
      return settings.language === 'es' 
        ? `Descargando... ${Math.round(downloadProgress.pdf * 100)}%`
        : `Downloading... ${Math.round(downloadProgress.pdf * 100)}%`;
    }
    if (pdfDownloaded) return settings.language === 'es' ? 'Disponible offline' : 'Available offline';
    if (!isOnline) return settings.language === 'es' ? 'Sin conexión' : 'No connection';
    return settings.language === 'es' ? 'Toca para descargar' : 'Tap to download';
  };

  return (
    <>
      <Stack.Screen
        options={{
          title: `#${hymn.numero}`,
          headerShown: true,
          headerStyle: { backgroundColor: theme.cardBackground },
          headerTintColor: theme.primary,
          headerShadowVisible: false,
          headerRight: () => (
            <View style={{ flexDirection: 'row', alignItems: 'center', gap: 8 }}>
              {!isOnline && <WifiOff size={20} color={theme.error} />}
              <TouchableOpacity onPress={() => toggleFavorite(hymn.id)} style={{ marginRight: 8, padding: 8 }} activeOpacity={0.7}>
                <Heart size={24} color={hymnIsFavorite ? theme.error : theme.primary} fill={hymnIsFavorite ? theme.error : 'transparent'} />
              </TouchableOpacity>
            </View>
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

        <Animated.View style={[styles.animatedContainer, { transform: [{ translateX }] }]} {...panResponder.panHandlers}>
          <ScrollView contentContainerStyle={styles.scrollContent} showsVerticalScrollIndicator={false}>
            <SafeAreaView edges={['bottom']} style={styles.safeArea}>
              <View style={styles.header}>
                <Text style={[styles.hymnNumber, { color: theme.primary, fontSize: fonts.hymnNumber }]}>{hymn.numero}</Text>
                <Text style={[styles.hymnTitle, { color: theme.text, fontSize: fonts.title }]}>{hymnData.titulo}</Text>
                <Text style={[styles.hymnAuthor, { color: theme.textSecondary, fontSize: fonts.base }]}>{hymnData.autor_letra}</Text>
              </View>

              <View style={styles.lyricsContainer}>
                {hymnData.versos.map((verso, index) => (
                  <View key={index} style={styles.verseContainer}>
                    <Text style={[styles.verseText, { color: theme.text, fontSize: fonts.large, lineHeight: fonts.large * 1.6 }]}>{verso}</Text>
                  </View>
                ))}
                {hymnData.coro && (
                  <View style={[styles.chorusContainer, { backgroundColor: theme.border }]}>
                    <Text style={[styles.chorusLabel, { color: theme.primary, fontSize: fonts.base }]}>
                      {settings.language === 'es' ? 'CORO' : 'CHORUS'}
                    </Text>
                    <Text style={[styles.chorusText, { color: theme.text, fontSize: fonts.large, lineHeight: fonts.large * 1.6 }]}>{hymnData.coro}</Text>
                  </View>
                )}
              </View>

              <View style={styles.controlsContainer}>
                <View style={[styles.audioContainer, { backgroundColor: theme.cardBackground, borderColor: !isOnline && !audioDownloaded ? theme.error : theme.border }]}>
                  <TouchableOpacity
                    style={[styles.playButton, { backgroundColor: hymn.audio.tiene_audio && (isOnline || audioDownloaded) ? theme.primary : theme.border }]}
                    onPress={handlePlayPause}
                    disabled={isLoadingAudio || (!hymn.audio.tiene_audio && !audioDownloaded)}
                  >
                    {isLoadingAudio ? <ActivityIndicator color="#FFFFFF" size="small" /> : isPlaying ? <Pause color="#FFFFFF" size={24} fill="#FFFFFF" /> : <Play color="#FFFFFF" size={24} fill="#FFFFFF" />}
                  </TouchableOpacity>
                  <View style={styles.audioInfo}>
                    <Text style={[styles.audioTitle, { color: theme.text, fontSize: fonts.base }]}>
                      {settings.language === 'es' ? 'Pista de Audio' : 'Audio Track'}
                    </Text>
                    <Text style={[styles.audioStatus, { color: !isOnline && !audioDownloaded ? theme.error : theme.textSecondary, fontSize: fonts.base }]}>
                      {getAudioStatus()}
                    </Text>
                  </View>
                  <TouchableOpacity style={styles.downloadButton} onPress={downloadAudio} disabled={!hymn.audio.tiene_audio || audioDownloaded || isDownloadingAudio || !isOnline}>
                    {isDownloadingAudio ? <ActivityIndicator color={theme.primary} size="small" /> : audioDownloaded ? <CheckCircle color={theme.primary} size={20} fill={theme.primary} /> : <Download color={hymn.audio.tiene_audio && isOnline ? theme.primary : theme.textTertiary} size={20} />}
                  </TouchableOpacity>
                </View>

                <TouchableOpacity style={[styles.pdfContainer, { backgroundColor: theme.cardBackground, borderColor: !isOnline && !pdfDownloaded ? theme.error : theme.border }]} onPress={pdfDownloaded ? openPDF : downloadPDF} activeOpacity={0.7} disabled={isDownloadingPDF || (!isOnline && !pdfDownloaded)}>
                  <View style={[styles.pdfIcon, { backgroundColor: theme.primary }]}>
                    <FileMusic color="#FFFFFF" size={24} />
                  </View>
                  <View style={styles.pdfInfo}>
                    <Text style={[styles.pdfTitle, { color: theme.text, fontSize: fonts.base }]}>
                      {settings.language === 'es' ? 'Partitura PDF' : 'Sheet Music PDF'}
                    </Text>
                    <Text style={[styles.pdfStatus, { color: !isOnline && !pdfDownloaded ? theme.error : theme.textSecondary, fontSize: fonts.base }]}>
                      {getPDFStatus()}
                    </Text>
                  </View>
                  {isDownloadingPDF ? <ActivityIndicator color={theme.primary} size="small" /> : pdfDownloaded ? <CheckCircle color={theme.primary} size={20} fill={theme.primary} /> : <Download color={isOnline ? theme.primary : theme.textTertiary} size={20} />}
                </TouchableOpacity>
              </View>

              <View style={styles.footer}>
                <Text style={[styles.footerText, { color: theme.textTertiary, fontSize: fonts.base }]}>
                  {settings.language === 'es' ? 'Música' : 'Music'}: {hymnData.autor_musica}
                </Text>
              </View>
            </SafeAreaView>
          </ScrollView>
        </Animated.View>
      </View>
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
  chorusContainer: { padding: 20, borderRadius: 12, marginTop: 8, marginBottom: 24 },
  chorusLabel: { fontWeight: '700' as const, marginBottom: 12, letterSpacing: 1 },
  chorusText: { fontWeight: '500' as const },
  controlsContainer: { marginBottom: 24, gap: 12 },
  audioContainer: { flexDirection: 'row' as const, alignItems: 'center' as const, padding: 16, borderRadius: 16, borderWidth: 1 },
  playButton: { width: 48, height: 48, borderRadius: 24, alignItems: 'center' as const, justifyContent: 'center' as const, marginRight: 16 },
  audioInfo: { flex: 1 },
  audioTitle: { fontWeight: '600' as const, marginBottom: 4 },
  audioStatus: { fontWeight: '400' as const },
  downloadButton: { width: 40, height: 40, alignItems: 'center' as const, justifyContent: 'center' as const },
  pdfContainer: { flexDirection: 'row' as const, alignItems: 'center' as const, padding: 16, borderRadius: 16, borderWidth: 1 },
  pdfIcon: { width: 48, height: 48, borderRadius: 24, alignItems: 'center' as const, justifyContent: 'center' as const, marginRight: 16 },
  pdfInfo: { flex: 1 },
  pdfTitle: { fontWeight: '600' as const, marginBottom: 4 },
  pdfStatus: { fontWeight: '400' as const },
  footer: { paddingBottom: 48, alignItems: 'center' as const },
  footerText: { fontWeight: '400' as const, fontStyle: 'italic' as const },
});