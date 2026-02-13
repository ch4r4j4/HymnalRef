import { View, Text, StyleSheet, TouchableOpacity, ScrollView, StatusBar, PanResponder } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Moon, Sun, Monitor, Type } from 'lucide-react-native';
import { useSettings } from '@/contexts/SettingsContext';
import { useRouter } from 'expo-router';
import { useRef } from 'react';
import { lightTheme, darkTheme, fontSizes } from '@/constants/theme';

export default function SettingsScreen() {
  const router = useRouter();
  const { settings, effectiveTheme, updateThemeMode, updateFontSize } = useSettings();
  const theme = effectiveTheme === 'dark' ? darkTheme : lightTheme;
  const fonts = fontSizes[settings.fontSize];

  const panResponder = useRef(
    PanResponder.create({
      onMoveShouldSetPanResponder: (_, gestureState) => {
        return Math.abs(gestureState.dx) > 30 && Math.abs(gestureState.dy) < 80;
      },
      onPanResponderRelease: (_, gestureState) => {
        if (gestureState.dx > 100) {
          router.push('/support');
        }
      },
    })
  ).current;

  const themeOptions = [
    { value: 'light' as const, label: 'Claro', icon: Sun },
    { value: 'dark' as const, label: 'Oscuro', icon: Moon },
    { value: 'system' as const, label: 'Sistema', icon: Monitor },
  ];

  const fontSizeOptions = [
    { value: 'small' as const, label: 'Pequeño' },
    { value: 'medium' as const, label: 'Mediano' },
    { value: 'large' as const, label: 'Grande' },
    { value: 'xlarge' as const, label: 'Muy Grande' },
  ];

  return (
    <View style={[styles.container, { backgroundColor: theme.background }]} {...panResponder.panHandlers}>
      <StatusBar barStyle={effectiveTheme === 'dark' ? 'light-content' : 'dark-content'} />
      <SafeAreaView edges={['top']} style={styles.safeArea}>
        <View style={styles.header}>
          <Text style={[styles.headerTitle, { color: theme.text, fontSize: fonts.title }]}>
            Ajustes
          </Text>
        </View>

        <ScrollView contentContainerStyle={styles.scrollContent} showsVerticalScrollIndicator={false}>

          {/* Tema */}
          <View style={styles.section}>
            <View style={styles.sectionHeader}>
              <Moon size={20} color={theme.primary} />
              <Text style={[styles.sectionTitle, { color: theme.text, fontSize: fonts.large }]}>
                Tema
              </Text>
            </View>
            <View style={[styles.optionsContainer, { backgroundColor: theme.cardBackground, borderColor: theme.border }]}>
              {themeOptions.map((option, index) => {
                const Icon = option.icon;
                const isSelected = settings.themeMode === option.value;
                return (
                  <TouchableOpacity
                    key={option.value}
                    style={[
                      styles.option,
                      index < themeOptions.length - 1 && { borderBottomWidth: 1, borderBottomColor: theme.border }
                    ]}
                    onPress={() => updateThemeMode(option.value)}
                    activeOpacity={0.7}
                  >
                    <View style={styles.optionLeft}>
                      <Icon size={22} color={isSelected ? theme.primary : theme.textSecondary} />
                      <Text style={[
                        styles.optionLabel,
                        { color: isSelected ? theme.primary : theme.text, fontSize: fonts.base }
                      ]}>
                        {option.label}
                      </Text>
                    </View>
                    {isSelected && (
                      <View style={[styles.checkmark, { backgroundColor: theme.primary }]} />
                    )}
                  </TouchableOpacity>
                );
              })}
            </View>
          </View>

          {/* Tamaño de letra */}
          <View style={styles.section}>
            <View style={styles.sectionHeader}>
              <Type size={20} color={theme.primary} />
              <Text style={[styles.sectionTitle, { color: theme.text, fontSize: fonts.large }]}>
                Tamaño de Letra
              </Text>
            </View>
            <View style={[styles.optionsContainer, { backgroundColor: theme.cardBackground, borderColor: theme.border }]}>
              {fontSizeOptions.map((option, index) => {
                const isSelected = settings.fontSize === option.value;
                return (
                  <TouchableOpacity
                    key={option.value}
                    style={[
                      styles.option,
                      index < fontSizeOptions.length - 1 && { borderBottomWidth: 1, borderBottomColor: theme.border }
                    ]}
                    onPress={() => updateFontSize(option.value)}
                    activeOpacity={0.7}
                  >
                    <Text style={[
                      styles.optionLabel,
                      { color: isSelected ? theme.primary : theme.text, fontSize: fonts.base }
                    ]}>
                      {option.label}
                    </Text>
                    {isSelected && (
                      <View style={[styles.checkmark, { backgroundColor: theme.primary }]} />
                    )}
                  </TouchableOpacity>
                );
              })}
            </View>
          </View>

          <View style={styles.footer}>
            <Text style={[styles.footerText, { color: theme.textTertiary, fontSize: fonts.base }]}>
              Himnario Loores al Rey
            </Text>
            <Text style={[styles.footerVersion, { color: theme.textTertiary, fontSize: fonts.base }]}>
              Versión 1.0
            </Text>
          </View>

        </ScrollView>
      </SafeAreaView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1 },
  safeArea: { flex: 1 },
  header: {
    paddingHorizontal: 24,
    paddingTop: 16,
    paddingBottom: 16,
  },
  headerTitle: {
    fontWeight: '700' as const,
    letterSpacing: -0.5,
  },
  scrollContent: {
    paddingHorizontal: 24,
    paddingBottom: 48,
  },
  section: {
    marginBottom: 32,
  },
  sectionHeader: {
    flexDirection: 'row' as const,
    alignItems: 'center' as const,
    marginBottom: 12,
  },
  sectionTitle: {
    fontWeight: '600' as const,
    marginLeft: 8,
  },
  optionsContainer: {
    borderRadius: 12,
    overflow: 'hidden' as const,
    borderWidth: 1,
  },
  option: {
    flexDirection: 'row' as const,
    alignItems: 'center' as const,
    justifyContent: 'space-between' as const,
    paddingVertical: 16,
    paddingHorizontal: 16,
  },
  optionLeft: {
    flexDirection: 'row' as const,
    alignItems: 'center' as const,
  },
  optionLabel: {
    fontWeight: '500' as const,
    marginLeft: 12,
  },
  checkmark: {
    width: 20,
    height: 20,
    borderRadius: 10,
  },
  footer: {
    marginTop: 32,
    alignItems: 'center' as const,
  },
  footerText: {
    fontWeight: '600' as const,
    marginBottom: 4,
  },
  footerVersion: {
    fontWeight: '400' as const,
  },
});