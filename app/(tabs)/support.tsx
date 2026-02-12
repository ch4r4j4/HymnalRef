import { View, Text, StyleSheet, TouchableOpacity, StatusBar, ScrollView, PanResponder } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Heart, Coffee, Play } from 'lucide-react-native';
import { useSettings } from '@/contexts/SettingsContext';
import { useRouter } from 'expo-router';
import { useRef } from 'react';
import { lightTheme, darkTheme, fontSizes } from '@/constants/theme';

export default function SupportScreen() {
  const router = useRouter();
  const { settings, effectiveTheme } = useSettings();
  const theme = effectiveTheme === 'dark' ? darkTheme : lightTheme;
  const fonts = fontSizes[settings.fontSize];

  const panResponder = useRef(
    PanResponder.create({
      onMoveShouldSetPanResponder: (_, gestureState) => {
        return Math.abs(gestureState.dx) > 30 && Math.abs(gestureState.dy) < 80;
      },
      onPanResponderRelease: (_, gestureState) => {
        if (gestureState.dx > 100) {
          router.push('/favorites');
        } else if (gestureState.dx < -100) {
          router.push('/settings');
        }
      },
    })
  ).current;

  const handleWatchAd = () => {
    console.log('Watch ad to support');
  };

  return (
    <View style={[styles.container, { backgroundColor: theme.background }]} {...panResponder.panHandlers}>
      <StatusBar barStyle={effectiveTheme === 'dark' ? 'light-content' : 'dark-content'} />
      <SafeAreaView edges={['top']} style={styles.safeArea}>
        <ScrollView contentContainerStyle={styles.scrollContent} showsVerticalScrollIndicator={false}>
          <View style={styles.header}>
            <View style={[styles.iconContainer, { backgroundColor: theme.primary + '20' }]}>
              <Heart size={48} color={theme.primary} fill={theme.primary} />
            </View>
            <Text style={[styles.headerTitle, { color: theme.text, fontSize: fonts.title }]}>
              {settings.language === 'es' ? '¡Gracias por tu apoyo!' : 'Thank you for your support!'}
            </Text>
            <Text style={[styles.headerSubtitle, { color: theme.textSecondary, fontSize: fonts.base }]}>
              {settings.language === 'es' 
                ? 'Tu apoyo nos ayuda a mantener esta aplicación gratuita y sin publicidad invasiva'
                : 'Your support helps us keep this app free and without intrusive ads'}
            </Text>
          </View>

          <View style={styles.section}>
            <View style={[styles.card, { backgroundColor: theme.cardBackground, borderColor: theme.border }]}>
              <View style={styles.cardHeader}>
                <View style={[styles.cardIconContainer, { backgroundColor: theme.primary + '15' }]}>
                  <Play size={24} color={theme.primary} />
                </View>
                <View style={styles.cardHeaderText}>
                  <Text style={[styles.cardTitle, { color: theme.text, fontSize: fonts.large }]}>
                    {settings.language === 'es' ? 'Ver un anuncio' : 'Watch an ad'}
                  </Text>
                  <Text style={[styles.cardSubtitle, { color: theme.textSecondary, fontSize: fonts.base }]}>
                    {settings.language === 'es' 
                      ? 'Apóyanos viendo un anuncio corto'
                      : 'Support us by watching a short ad'}
                  </Text>
                </View>
              </View>
              <TouchableOpacity
                style={[styles.adButton, { backgroundColor: theme.primary }]}
                onPress={handleWatchAd}
                activeOpacity={0.8}
              >
                <Play size={20} color="#FFFFFF" fill="#FFFFFF" />
                <Text style={[styles.adButtonText, { fontSize: fonts.base }]}>
                  {settings.language === 'es' ? 'Ver Anuncio' : 'Watch Ad'}
                </Text>
              </TouchableOpacity>
            </View>
          </View>

          <View style={styles.infoSection}>
            <Text style={[styles.infoTitle, { color: theme.text, fontSize: fonts.large }]}>
              {settings.language === 'es' ? '¿Por qué tu apoyo es importante?' : 'Why is your support important?'}
            </Text>
            
            <View style={styles.infoItem}>
              <View style={[styles.infoBullet, { backgroundColor: theme.primary }]} />
              <Text style={[styles.infoText, { color: theme.textSecondary, fontSize: fonts.base }]}>
                {settings.language === 'es' 
                  ? 'Mantiene la app gratuita para todos'
                  : 'Keeps the app free for everyone'}
              </Text>
            </View>

            <View style={styles.infoItem}>
              <View style={[styles.infoBullet, { backgroundColor: theme.primary }]} />
              <Text style={[styles.infoText, { color: theme.textSecondary, fontSize: fonts.base }]}>
                {settings.language === 'es' 
                  ? 'Permite agregar más himnos y funcionalidades'
                  : 'Allows us to add more hymns and features'}
              </Text>
            </View>

            <View style={styles.infoItem}>
              <View style={[styles.infoBullet, { backgroundColor: theme.primary }]} />
              <Text style={[styles.infoText, { color: theme.textSecondary, fontSize: fonts.base }]}>
                {settings.language === 'es' 
                  ? 'Ayuda a mantener los servidores activos'
                  : 'Helps maintain active servers'}
              </Text>
            </View>

            <View style={styles.infoItem}>
              <View style={[styles.infoBullet, { backgroundColor: theme.primary }]} />
              <Text style={[styles.infoText, { color: theme.textSecondary, fontSize: fonts.base }]}>
                {settings.language === 'es' 
                  ? 'Apoya el desarrollo continuo de la app'
                  : 'Supports continuous app development'}
              </Text>
            </View>
          </View>

          <View style={[styles.thankYouCard, { backgroundColor: theme.primary + '10', borderColor: theme.primary + '30' }]}>
            <Coffee size={32} color={theme.primary} />
            <Text style={[styles.thankYouText, { color: theme.text, fontSize: fonts.base }]}>
              {settings.language === 'es' 
                ? '¡Cada anuncio visto equivale a una taza de café para el equipo! ☕'
                : 'Every ad watched equals a cup of coffee for the team! ☕'}
            </Text>
          </View>
        </ScrollView>
      </SafeAreaView>
    </View>
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
    paddingBottom: 48,
  },
  header: {
    alignItems: 'center' as const,
    marginBottom: 32,
  },
  iconContainer: {
    width: 96,
    height: 96,
    borderRadius: 48,
    justifyContent: 'center' as const,
    alignItems: 'center' as const,
    marginBottom: 16,
  },
  headerTitle: {
    fontWeight: '700' as const,
    marginBottom: 8,
    textAlign: 'center' as const,
    letterSpacing: -0.5,
  },
  headerSubtitle: {
    fontWeight: '400' as const,
    textAlign: 'center' as const,
    lineHeight: 22,
    paddingHorizontal: 16,
  },
  section: {
    marginBottom: 32,
  },
  card: {
    borderRadius: 16,
    padding: 20,
    borderWidth: 1,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 3,
  },
  cardHeader: {
    flexDirection: 'row' as const,
    alignItems: 'center' as const,
    marginBottom: 16,
  },
  cardIconContainer: {
    width: 48,
    height: 48,
    borderRadius: 12,
    justifyContent: 'center' as const,
    alignItems: 'center' as const,
    marginRight: 12,
  },
  cardHeaderText: {
    flex: 1,
  },
  cardTitle: {
    fontWeight: '600' as const,
    marginBottom: 4,
  },
  cardSubtitle: {
    fontWeight: '400' as const,
    lineHeight: 20,
  },
  adButton: {
    flexDirection: 'row' as const,
    alignItems: 'center' as const,
    justifyContent: 'center' as const,
    paddingVertical: 14,
    paddingHorizontal: 24,
    borderRadius: 12,
    gap: 8,
  },
  adButtonText: {
    color: '#FFFFFF',
    fontWeight: '600' as const,
  },
  infoSection: {
    marginBottom: 24,
  },
  infoTitle: {
    fontWeight: '600' as const,
    marginBottom: 16,
  },
  infoItem: {
    flexDirection: 'row' as const,
    alignItems: 'flex-start' as const,
    marginBottom: 12,
  },
  infoBullet: {
    width: 6,
    height: 6,
    borderRadius: 3,
    marginTop: 8,
    marginRight: 12,
  },
  infoText: {
    flex: 1,
    lineHeight: 22,
  },
  thankYouCard: {
    flexDirection: 'row' as const,
    alignItems: 'center' as const,
    padding: 16,
    borderRadius: 12,
    borderWidth: 1,
    gap: 12,
  },
  thankYouText: {
    flex: 1,
    fontWeight: '500' as const,
    lineHeight: 22,
  },
});
