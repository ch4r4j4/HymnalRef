import React, { createContext, useContext, useState, useEffect } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

interface FavoritesContextValue {
  favorites: number[];
  toggleFavorite: (hymnId: number) => void;
  isFavorite: (hymnId: number) => boolean;
  isLoading: boolean;
}

const FAVORITES_KEY = '@himnario_favorites';

const FavoritesContext = createContext<FavoritesContextValue | undefined>(undefined);

export function FavoritesProvider({ children }: { children: React.ReactNode }) {
  const [favorites, setFavorites] = useState<number[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    loadFavorites();
  }, []);

  const loadFavorites = async () => {
    try {
      const stored = await AsyncStorage.getItem(FAVORITES_KEY);
      if (stored) {
        setFavorites(JSON.parse(stored));
      }
    } catch (error) {
      console.error('Error loading favorites:', error);
    } finally {
      setIsLoading(false);
    }
  };

  const saveFavorites = async (newFavorites: number[]) => {
    try {
      await AsyncStorage.setItem(FAVORITES_KEY, JSON.stringify(newFavorites));
      setFavorites(newFavorites);
    } catch (error) {
      console.error('Error saving favorites:', error);
    }
  };

  const toggleFavorite = (hymnId: number) => {
    const newFavorites = favorites.includes(hymnId)
      ? favorites.filter((id) => id !== hymnId)
      : [...favorites, hymnId];
    saveFavorites(newFavorites);
  };

  const isFavorite = (hymnId: number) => {
    return favorites.includes(hymnId);
  };

  return (
    <FavoritesContext.Provider
      value={{
        favorites,
        toggleFavorite,
        isFavorite,
        isLoading,
      }}
    >
      {children}
    </FavoritesContext.Provider>
  );
}

export function useFavorites(): FavoritesContextValue {
  const context = useContext(FavoritesContext);
  if (!context) {
    throw new Error('useFavorites must be used within a FavoritesProvider');
  }
  return context;
}