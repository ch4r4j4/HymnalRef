import { View, Text, ScrollView, StyleSheet, StatusBar, TouchableOpacity, ActivityIndicator, PanResponder } from 'react-native';
import { useLocalSearchParams, Stack, router } from 'expo-router';
import { SafeAreaView } from 'react-native-safe-area-context';
import { hymns } from '@/constants/hymns';
import { useSettings } from '@/contexts/SettingsContext';
import { useFavorites } from '@/contexts/FavoritesContext';
import { lightTheme, darkTheme, fontSizes } from '@/constants/theme';
import { Play, Pause, Download, Heart, FileMusic } from 'lucide-react-native';
import { Audio } from 'expo-av';
import { useState, useEffect, useRef } from 'react';

export default function HymnScreen() {
  const { id } = useLocalSearchParams();
  const { settings, effectiveTheme } = useSettings();
  const { toggleFavorite, isFavorite } = useFavorites();
  const theme = effectiveTheme === 'dark' ? darkTheme : lightTheme;
  const fonts = fontSizes[settings.fontSize];

  const [sound, setSound] = useState<Audio.Sound | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const hymn = hymns.find(h => h.id === Number(id));
  const currentIndex = hymns.findIndex(h => h.id === Number(id));

  const panResponder = useRef(
    PanResponder.create({
      onMoveShouldSetPanResponder: (_, gestureState) => {
        return Math.abs(gestureState.dx) > 50 && Math.abs(gestureState.dy) < 50;
      },
      onPanResponderRelease: (_, gestureState) => {
        if (gestureState.dx > 100) {
          if (currentIndex > 0) {
            const prevHymn = hymns[currentIndex - 1];
            router.replace(`/hymn/${prevHymn.id}`);
          }
        } else if (gestureState.dx < -100) {
          if (currentIndex < hymns.length - 1) {
            const nextHymn = hymns[currentIndex + 1];
            router.replace(`/hymn/${nextHymn.id}`);
          }
        }
      },
    })
  ).current;

  useEffect(() => {
    return () => {
      if (sound) {
        sound.unloadAsync();
      }
    };
  }, [sound]);

  const handlePlayPause = async () => {
    if (!hymn?.audio.url) return;

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
        setIsLoading(true);
        const { sound: newSound } = await Audio.Sound.createAsync(
          { uri: hymn.audio.url },
          { shouldPlay: true }
        );
        setSound(newSound);
        setIsPlaying(true);
        setIsLoading(false);

        newSound.setOnPlaybackStatusUpdate((status) => {
          if (status.isLoaded && status.didJustFinish) {
            setIsPlaying(false);
          }
        });
      }
    } catch (error) {
      console.error('Error playing audio:', error);
      setIsLoading(false);
    }
  };

  const handleDownloadPDF = () => {
    console.log('Download PDF with musical notes for hymn:', hymn?.numero);
  };

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

  return (
    <>
      <Stack.Screen
        options={{
          title: `#${hymn.numero}`,
          headerStyle: { backgroundColor: theme.cardBackground },
          headerTintColor: theme.primary,
          headerShadowVisible: false,
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
      <View style={[styles.container, { backgroundColor: theme.background }]} {...panResponder.panHandlers}>
        <StatusBar barStyle={effectiveTheme === 'dark' ? 'light-content' : 'dark-content'} />
        <ScrollView
          contentContainerStyle={styles.scrollContent}
          showsVerticalScrollIndicator={false}
        >
          <SafeAreaView edges={['bottom']} style={styles.safeArea}>
            <View style={styles.header}>
              <Text style={[styles.hymnNumber, { color: theme.primary, fontSize: fonts.hymnNumber }]}>
                {hymn.numero}
              </Text>
              <Text style={[styles.hymnTitle, { color: theme.text, fontSize: fonts.title }]}>
                {hymnData.titulo}
              </Text>
              <Text style={[styles.hymnAuthor, { color: theme.textSecondary, fontSize: fonts.base }]}>
                {hymnData.autor_letra}
              </Text>
            </View>

            <View style={styles.controlsContainer}>
              <View style={[styles.audioContainer, { backgroundColor: theme.cardBackground, borderColor: theme.border }]}>
                <TouchableOpacity
                  style={[styles.playButton, { backgroundColor: hymn.audio.tiene_audio ? theme.primary : theme.border }]}
                  onPress={handlePlayPause}
                  disabled={isLoading || !hymn.audio.tiene_audio}
                >
                  {isLoading ? (
                    <ActivityIndicator color="#FFFFFF" size="small" />
                  ) : isPlaying ? (
                    <Pause color="#FFFFFF" size={24} fill="#FFFFFF" />
                  ) : (
                    <Play color="#FFFFFF" size={24} fill="#FFFFFF" />
                  )}
                </TouchableOpacity>
                <View style={styles.audioInfo}>
                  <Text style={[styles.audioTitle, { color: theme.text, fontSize: fonts.base }]}>
                    {settings.language === 'es' ? 'Pista de Audio' : 'Audio Track'}
                  </Text>
                  <Text style={[styles.audioStatus, { color: theme.textSecondary, fontSize: fonts.base }]}>
                    {hymn.audio.tiene_audio
                      ? (isPlaying 
                        ? (settings.language === 'es' ? 'Reproduciendo...' : 'Playing...') 
                        : (settings.language === 'es' ? 'Listo para reproducir' : 'Ready to play'))
                      : (settings.language === 'es' ? 'Próximamente' : 'Coming soon')}
                  </Text>
                </View>
                <TouchableOpacity
                  style={styles.downloadButton}
                  onPress={() => console.log('Download audio')}
                  disabled={!hymn.audio.tiene_audio}
                >
                  <Download color={hymn.audio.tiene_audio ? theme.primary : theme.textTertiary} size={20} />
                </TouchableOpacity>
              </View>

              <View style={[styles.pdfContainer, { backgroundColor: theme.cardBackground, borderColor: theme.border }]}>
                <View style={[styles.pdfIcon, { backgroundColor: theme.primary }]}>
                  <FileMusic color="#FFFFFF" size={24} />
                </View>
                <View style={styles.pdfInfo}>
                  <Text style={[styles.pdfTitle, { color: theme.text, fontSize: fonts.base }]}>
                    {settings.language === 'es' ? 'Partitura PDF' : 'Sheet Music PDF'}
                  </Text>
                  <Text style={[styles.pdfStatus, { color: theme.textSecondary, fontSize: fonts.base }]}>
                    {settings.language === 'es' ? 'Con notas musicales' : 'With musical notes'}
                  </Text>
                </View>
                <TouchableOpacity
                  style={styles.downloadButton}
                  onPress={handleDownloadPDF}
                >
                  <Download color={theme.primary} size={20} />
                </TouchableOpacity>
              </View>
            </View>

            <View style={styles.lyricsContainer}>
              {hymnData.versos.map((verso, index) => (
                <View key={index} style={styles.verseContainer}>
                  <Text style={[styles.verseText, { color: theme.text, fontSize: fonts.large, lineHeight: fonts.large * 1.6 }]}>
                    {verso}
                  </Text>
                </View>
              ))}

              {hymnData.coro && (
                <View style={[styles.chorusContainer, { backgroundColor: theme.border }]}>
                  <Text style={[styles.chorusLabel, { color: theme.primary, fontSize: fonts.base }]}>
                    {settings.language === 'es' ? 'CORO' : 'CHORUS'}
                  </Text>
                  <Text style={[styles.chorusText, { color: theme.text, fontSize: fonts.large, lineHeight: fonts.large * 1.6 }]}>
                    {hymnData.coro}
                  </Text>
                </View>
              )}
            </View>

            <View style={styles.footer}>
              <Text style={[styles.footerText, { color: theme.textTertiary, fontSize: fonts.base }]}>
                {settings.language === 'es' ? 'Música' : 'Music'}: {hymnData.autor_musica}
              </Text>
            </View>
          </SafeAreaView>
        </ScrollView>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  safeArea: {
    flex: 1,
  },
  scrollContent: {
    paddingHorizontal: 24,
    paddingTop: 24,
  },
  header: {
    alignItems: 'center' as const,
    marginBottom: 32,
  },
  hymnNumber: {
    fontWeight: '700' as const,
    marginBottom: 12,
  },
  hymnTitle: {
    fontWeight: '700' as const,
    textAlign: 'center' as const,
    marginBottom: 8,
    letterSpacing: -0.5,
  },
  hymnAuthor: {
    fontWeight: '400' as const,
    textAlign: 'center' as const,
  },
  lyricsContainer: {
    marginBottom: 32,
  },
  verseContainer: {
    marginBottom: 24,
  },
  verseText: {
    fontWeight: '400' as const,
  },
  chorusContainer: {
    padding: 20,
    borderRadius: 12,
    marginTop: 8,
    marginBottom: 24,
  },
  chorusLabel: {
    fontWeight: '700' as const,
    marginBottom: 12,
    letterSpacing: 1,
  },
  chorusText: {
    fontWeight: '500' as const,
  },
  footer: {
    paddingBottom: 48,
    alignItems: 'center' as const,
  },
  footerText: {
    fontWeight: '400' as const,
    fontStyle: 'italic' as const,
  },
  controlsContainer: {
    marginBottom: 32,
    gap: 12,
  },
  audioContainer: {
    flexDirection: 'row' as const,
    alignItems: 'center' as const,
    padding: 16,
    borderRadius: 16,
    borderWidth: 1,
  },
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
  pdfInfo: {
    flex: 1,
  },
  pdfTitle: {
    fontWeight: '600' as const,
    marginBottom: 4,
  },
  pdfStatus: {
    fontWeight: '400' as const,
  },
  playButton: {
    width: 48,
    height: 48,
    borderRadius: 24,
    alignItems: 'center' as const,
    justifyContent: 'center' as const,
    marginRight: 16,
  },
  audioInfo: {
    flex: 1,
  },
  audioTitle: {
    fontWeight: '600' as const,
    marginBottom: 4,
  },
  audioStatus: {
    fontWeight: '400' as const,
  },
  downloadButton: {
    width: 40,
    height: 40,
    alignItems: 'center' as const,
    justifyContent: 'center' as const,
  },
});
