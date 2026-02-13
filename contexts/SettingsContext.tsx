import React, { createContext, useContext, useState, useEffect, useMemo } from 'react';
import { useColorScheme } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

type ThemeMode = 'light' | 'dark' | 'system';
type FontSize = 'small' | 'medium' | 'large' | 'xlarge';

interface Settings {
  themeMode: ThemeMode;
  fontSize: FontSize;
}

interface SettingsContextValue {
  settings: Settings & { language: 'es' }; // always 'es', kept for compatibility
  effectiveTheme: 'light' | 'dark';
  updateThemeMode: (mode: ThemeMode) => void;
  updateFontSize: (size: FontSize) => void;
  isLoading: boolean;
}

const SETTINGS_KEY = '@himnario_settings';

const DEFAULT_SETTINGS: Settings = {
  themeMode: 'system',
  fontSize: 'medium',
};

const SettingsContext = createContext<SettingsContextValue | undefined>(undefined);

export function SettingsProvider({ children }: { children: React.ReactNode }) {
  const systemTheme = useColorScheme();
  const [settings, setSettings] = useState<Settings>(DEFAULT_SETTINGS);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    loadSettings();
  }, []);

  const loadSettings = async () => {
    try {
      const stored = await AsyncStorage.getItem(SETTINGS_KEY);
      if (stored) {
        const parsed = JSON.parse(stored);
        // Strip old language field if present
        const { language, ...rest } = parsed;
        setSettings({ ...DEFAULT_SETTINGS, ...rest });
      }
    } catch (error) {
      console.error('Error loading settings:', error);
    } finally {
      setIsLoading(false);
    }
  };

  const saveSettings = async (newSettings: Settings) => {
    try {
      await AsyncStorage.setItem(SETTINGS_KEY, JSON.stringify(newSettings));
      setSettings(newSettings);
    } catch (error) {
      console.error('Error saving settings:', error);
    }
  };

  const effectiveTheme = useMemo(() => {
    if (settings.themeMode === 'system') {
      return systemTheme === 'dark' ? 'dark' : 'light';
    }
    return settings.themeMode;
  }, [settings.themeMode, systemTheme]);

  const updateThemeMode = (mode: ThemeMode) => {
    saveSettings({ ...settings, themeMode: mode });
  };

  const updateFontSize = (size: FontSize) => {
    saveSettings({ ...settings, fontSize: size });
  };

  return (
    <SettingsContext.Provider
      value={{
        settings: { ...settings, language: 'es' },
        effectiveTheme,
        updateThemeMode,
        updateFontSize,
        isLoading,
      }}
    >
      {children}
    </SettingsContext.Provider>
  );
}

export function useSettings(): SettingsContextValue {
  const context = useContext(SettingsContext);
  if (!context) {
    throw new Error('useSettings must be used within a SettingsProvider');
  }
  return context;
}