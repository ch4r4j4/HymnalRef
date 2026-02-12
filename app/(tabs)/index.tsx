import { View, Text, FlatList, TouchableOpacity, StyleSheet, TextInput, StatusBar, PanResponder } from 'react-native';
import { useState, useMemo, useRef } from 'react';
import { useRouter } from 'expo-router';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Search, X } from 'lucide-react-native';
import { hymns, searchHymns } from '@/constants/hymns';
import { useSettings } from '@/contexts/SettingsContext';
import { lightTheme, darkTheme, fontSizes } from '@/constants/theme';

export default function HomeScreen() {
  const router = useRouter();
  const { settings, effectiveTheme } = useSettings();
  const theme = effectiveTheme === 'dark' ? darkTheme : lightTheme;
  const fonts = fontSizes[settings.fontSize];
  
  const [searchQuery, setSearchQuery] = useState('');

  const filteredHymns = useMemo(() => {
    return searchHymns(searchQuery, settings.language);
  }, [searchQuery, settings.language]);

  const panResponder = useRef(
    PanResponder.create({
      onMoveShouldSetPanResponder: (_, gestureState) => {
        return Math.abs(gestureState.dx) > 30 && Math.abs(gestureState.dy) < 80;
      },
      onPanResponderRelease: (_, gestureState) => {
        if (gestureState.dx < -100) {
          router.push('/favorites');
        }
      },
    })
  ).current;

  const renderHymnItem = ({ item }: { item: typeof hymns[0] }) => {
    const hymnData = item.idiomas[settings.language];
    
    return (
      <TouchableOpacity
        style={[styles.hymnCard, { backgroundColor: theme.cardBackground, borderColor: theme.border }]}
        onPress={() => router.push(`/hymn/${item.id}`)}
        activeOpacity={0.7}
      >
        <View style={styles.hymnNumber}>
          <Text style={[styles.numberText, { color: theme.primary, fontSize: fonts.title }]}>
            {item.numero}
          </Text>
        </View>
        <View style={styles.hymnInfo}>
          <Text style={[styles.hymnTitle, { color: theme.text, fontSize: fonts.large }]} numberOfLines={2}>
            {hymnData.titulo}
          </Text>
          <Text style={[styles.hymnAuthor, { color: theme.textSecondary, fontSize: fonts.base }]} numberOfLines={1}>
            {hymnData.autor_letra}
          </Text>
        </View>
      </TouchableOpacity>
    );
  };

  return (
    <View style={[styles.container, { backgroundColor: theme.background }]} {...panResponder.panHandlers}>
      <StatusBar barStyle={effectiveTheme === 'dark' ? 'light-content' : 'dark-content'} />
      <SafeAreaView edges={['top']} style={styles.safeArea}>
        <View style={styles.header}>
          <Text style={[styles.headerTitle, { color: theme.text, fontSize: fonts.title }]}>
            Loores al Rey
          </Text>
          <Text style={[styles.headerSubtitle, { color: theme.textSecondary, fontSize: fonts.base }]}>
            {filteredHymns.length} {settings.language === 'es' ? 'himnos' : 'hymns'}
          </Text>
        </View>

        <View style={[styles.searchContainer, { backgroundColor: theme.cardBackground, borderColor: theme.border }]}>
          <Search size={20} color={theme.textSecondary} />
          <TextInput
            style={[styles.searchInput, { color: theme.text, fontSize: fonts.base }]}
            placeholder={settings.language === 'es' ? 'Buscar himno...' : 'Search hymn...'}
            placeholderTextColor={theme.textTertiary}
            value={searchQuery}
            onChangeText={setSearchQuery}
          />
          {searchQuery.length > 0 && (
            <TouchableOpacity onPress={() => setSearchQuery('')} activeOpacity={0.7}>
              <X size={20} color={theme.textSecondary} />
            </TouchableOpacity>
          )}
        </View>

        <FlatList
          data={filteredHymns}
          renderItem={renderHymnItem}
          keyExtractor={(item) => item.id.toString()}
          contentContainerStyle={styles.listContent}
          showsVerticalScrollIndicator={false}
        />
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
  header: {
    paddingHorizontal: 24,
    paddingTop: 16,
    paddingBottom: 8,
  },
  headerTitle: {
    fontWeight: '700' as const,
    marginBottom: 4,
    letterSpacing: -0.5,
  },
  headerSubtitle: {
    fontWeight: '400' as const,
  },
  searchContainer: {
    flexDirection: 'row' as const,
    alignItems: 'center' as const,
    marginHorizontal: 24,
    marginTop: 16,
    marginBottom: 16,
    paddingHorizontal: 16,
    height: 48,
    borderRadius: 12,
    borderWidth: 1,
  },
  searchInput: {
    flex: 1,
    marginLeft: 12,
    fontWeight: '400' as const,
  },
  listContent: {
    paddingHorizontal: 24,
    paddingBottom: 24,
  },
  hymnCard: {
    flexDirection: 'row' as const,
    alignItems: 'center' as const,
    padding: 16,
    borderRadius: 12,
    marginBottom: 12,
    borderWidth: 1,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.05,
    shadowRadius: 2,
    elevation: 1,
  },
  hymnNumber: {
    width: 64,
    height: 64,
    borderRadius: 12,
    justifyContent: 'center' as const,
    alignItems: 'center' as const,
    marginRight: 16,
  },
  numberText: {
    fontWeight: '700' as const,
  },
  hymnInfo: {
    flex: 1,
  },
  hymnTitle: {
    fontWeight: '600' as const,
    marginBottom: 4,
    lineHeight: 24,
  },
  hymnAuthor: {
    fontWeight: '400' as const,
  },
});
