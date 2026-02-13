import { View, Text, FlatList, TouchableOpacity, StyleSheet, TextInput, StatusBar, PanResponder } from 'react-native';
import { useState, useMemo, useRef } from 'react';
import { useRouter } from 'expo-router';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Search, X } from 'lucide-react-native';
import { hymns, searchHymns, SearchMatch } from '@/constants/hymns';
import { useSettings } from '@/contexts/SettingsContext';
import { lightTheme, darkTheme, fontSizes } from '@/constants/theme';

// Renders text with the matched query word highlighted in primary color
function HighlightedText({
  text,
  highlight,
  baseStyle,
  highlightColor,
}: {
  text: string;
  highlight: string;
  baseStyle: object;
  highlightColor: string;
}) {
  if (!highlight.trim()) {
    return <Text style={baseStyle}>{text}</Text>;
  }

  // Case-insensitive split keeping the delimiter
  const regex = new RegExp(`(${highlight.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')})`, 'gi');
  const parts = text.split(regex);

  return (
    <Text style={baseStyle}>
      {parts.map((part, i) =>
        part.toLowerCase() === highlight.toLowerCase() ? (
          <Text key={i} style={{ color: highlightColor, fontWeight: '700' as const }}>
            {part}
          </Text>
        ) : (
          <Text key={i}>{part}</Text>
        )
      )}
    </Text>
  );
}

export default function HomeScreen() {
  const router = useRouter();
  const { settings, effectiveTheme } = useSettings();
  const theme = effectiveTheme === 'dark' ? darkTheme : lightTheme;
  const fonts = fontSizes[settings.fontSize];

  const [searchQuery, setSearchQuery] = useState('');

  const searchResults = useMemo(() => {
    return searchHymns(searchQuery);
  }, [searchQuery]);

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

  const renderHymnItem = ({ item }: { item: SearchMatch }) => {
    const { hymn, snippet, matchWord } = item;
    const firstLine = hymn.versos[0]?.split('\n')[0] ?? '';

    return (
      <TouchableOpacity
        style={[styles.hymnCard, { backgroundColor: theme.cardBackground, borderColor: theme.border }]}
        onPress={() => router.push(`/hymn/${hymn.id}`)}
        activeOpacity={0.7}
      >
        <View style={styles.hymnNumber}>
          <Text style={[styles.numberText, { color: theme.primary, fontSize: fonts.title }]}>
            {hymn.numero}
          </Text>
        </View>
        <View style={styles.hymnInfo}>
          <Text
            style={[styles.hymnTitle, { color: theme.text, fontSize: fonts.large }]}
            numberOfLines={1}
          >
            {hymn.titulo}
          </Text>

          {snippet && matchWord ? (
            <HighlightedText
              text={snippet}
              highlight={matchWord}
              baseStyle={[styles.snippet, { color: theme.textSecondary, fontSize: fonts.base }]}
              highlightColor={theme.primary}
            />
          ) : (
            <Text
              style={[styles.versePreview, { color: theme.textSecondary, fontSize: fonts.base }]}
              numberOfLines={1}
            >
              {firstLine}
            </Text>
          )}
        </View>
      </TouchableOpacity>
    );
  };

  return (
    <View style={[styles.container, { backgroundColor: theme.background }]} {...panResponder.panHandlers}>
      <StatusBar barStyle={effectiveTheme === 'dark' ? 'light-content' : 'dark-content'} />
      <SafeAreaView edges={['top']} style={styles.safeArea}>
         <View style={styles.header}>
          <Text style={[styles.headerSubtitle, { color: theme.textSecondary, fontSize: fonts.base }]}>
            {'Loores al Rey'} {searchResults.length} {'himnos'}
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
          data={searchResults}
          renderItem={renderHymnItem}
          keyExtractor={(item) => item.hymn.id.toString()}
          contentContainerStyle={styles.listContent}
          showsVerticalScrollIndicator={false}
        />
      </SafeAreaView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1 },
  safeArea: { flex: 1 },
  header: {
    paddingHorizontal: 24,
    paddingTop: 8,
    paddingBottom: 2,
  },
  headerSubtitle: {
    fontWeight: '400' as const,
  },
  searchContainer: {
    flexDirection: 'row' as const,
    alignItems: 'center' as const,
    marginHorizontal: 12,
    marginTop: 8,
    marginBottom: 8,
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
    paddingHorizontal: 8,
    paddingBottom: 24,
  },
  hymnCard: {
    flexDirection: 'row' as const,
    alignItems: 'center' as const,
    padding: 10,
    borderRadius: 12,
    marginBottom: 4,
    borderWidth: 1,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.05,
    shadowRadius: 2,
    elevation: 1,
  },
  hymnNumber: {
    width: 48,
    height: 48,
    borderRadius: 10,
    justifyContent: 'center' as const,
    alignItems: 'center' as const,
    marginRight: 12,
  },
  numberText: {
    fontWeight: '700' as const,
  },
  hymnInfo: {
    flex: 1,
  },
  hymnTitle: {
    fontWeight: '600' as const,
    marginBottom: 2,
    lineHeight: 22,
  },
  versePreview: {
    fontWeight: '400' as const,
  },
  snippet: {
    fontWeight: '400' as const,
    lineHeight: 18,
  },
});