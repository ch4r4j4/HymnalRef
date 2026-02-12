import { View, Text, FlatList, TouchableOpacity, StyleSheet, StatusBar, PanResponder } from 'react-native';
import { useRouter } from 'expo-router';
import { useRef } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Heart, HeartOff } from 'lucide-react-native';
import { hymns } from '@/constants/hymns';
import { useSettings } from '@/contexts/SettingsContext';
import { useFavorites } from '@/contexts/FavoritesContext';
import { lightTheme, darkTheme, fontSizes } from '@/constants/theme';

export default function FavoritesScreen() {
  const router = useRouter();
  const { settings, effectiveTheme } = useSettings();
  const { favorites, toggleFavorite } = useFavorites();
  const theme = effectiveTheme === 'dark' ? darkTheme : lightTheme;
  const fonts = fontSizes[settings.fontSize];

  const favoriteHymns = hymns.filter(hymn => favorites.includes(hymn.id));

  const panResponder = useRef(
    PanResponder.create({
      onMoveShouldSetPanResponder: (_, gestureState) => {
        return Math.abs(gestureState.dx) > 30 && Math.abs(gestureState.dy) < 80;
      },
      onPanResponderRelease: (_, gestureState) => {
        if (gestureState.dx > 100) {
          router.push('/');
        } else if (gestureState.dx < -100) {
          router.push('/support');
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
        <TouchableOpacity 
          onPress={() => toggleFavorite(item.id)}
          style={styles.favoriteButton}
          activeOpacity={0.7}
        >
          <Heart size={24} color={theme.error} fill={theme.error} />
        </TouchableOpacity>
      </TouchableOpacity>
    );
  };

  const renderEmpty = () => (
    <View style={styles.emptyContainer}>
      <HeartOff size={64} color={theme.textTertiary} strokeWidth={1.5} />
      <Text style={[styles.emptyTitle, { color: theme.text, fontSize: fonts.large }]}>
        {settings.language === 'es' ? 'Sin favoritos' : 'No favorites'}
      </Text>
      <Text style={[styles.emptyText, { color: theme.textSecondary, fontSize: fonts.base }]}>
        {settings.language === 'es' 
          ? 'Marca himnos como favoritos para acceder a ellos rápidamente'
          : 'Mark hymns as favorites to access them quickly'}
      </Text>
    </View>
  );

  return (
    <View style={[styles.container, { backgroundColor: theme.background }]} {...panResponder.panHandlers}>
      <StatusBar barStyle={effectiveTheme === 'dark' ? 'light-content' : 'dark-content'} />
      <SafeAreaView edges={['top']} style={styles.safeArea}>
        <View style={styles.header}>
          <Text style={[styles.headerTitle, { color: theme.text, fontSize: fonts.title }]}>
            {settings.language === 'es' ? 'Favoritos' : 'Favorites'}
          </Text>
          <Text style={[styles.headerSubtitle, { color: theme.textSecondary, fontSize: fonts.base }]}>
            {favoriteHymns.length} {settings.language === 'es' ? 'himnos' : 'hymns'}
          </Text>
        </View>

        <FlatList
          data={favoriteHymns}
          renderItem={renderHymnItem}
          keyExtractor={(item) => item.id.toString()}
          contentContainerStyle={[
            styles.listContent,
            favoriteHymns.length === 0 && styles.listContentCentered
          ]}
          ListEmptyComponent={renderEmpty}
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
  listContent: {
    paddingHorizontal: 24,
    paddingTop: 16,
    paddingBottom: 24,
  },
  listContentCentered: {
    flexGrow: 1,
    justifyContent: 'center' as const,
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
  favoriteButton: {
    padding: 8,
    marginLeft: 8,
  },
  emptyContainer: {
    alignItems: 'center' as const,
    paddingHorizontal: 48,
  },
  emptyTitle: {
    fontWeight: '600' as const,
    marginTop: 24,
    marginBottom: 8,
  },
  emptyText: {
    textAlign: 'center' as const,
    lineHeight: 22,
  },
});
