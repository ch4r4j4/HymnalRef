import { Tabs } from "expo-router";
import { Book, Settings, Heart, HandHeart } from "lucide-react-native";
import React from 'react';
import { useSettings } from "@/contexts/SettingsContext";
import { lightTheme, darkTheme } from "@/constants/theme";

export default function TabLayout() {
  const { effectiveTheme, settings } = useSettings();
  const theme = effectiveTheme === 'dark' ? darkTheme : lightTheme;

  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: theme.primary,
        tabBarInactiveTintColor: theme.textTertiary,
        tabBarStyle: {
          backgroundColor: theme.cardBackground,
          borderTopColor: theme.border,
          borderTopWidth: 1,
        },
        headerShown: false,
        tabBarLabelStyle: {
          fontSize: 12,
          fontWeight: '600' as const,
        },
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: settings.language === 'es' ? 'Himnos' : 'Hymns',
          tabBarIcon: ({ color, size }) => <Book size={size} color={color} />,
        }}
      />
      <Tabs.Screen
        name="favorites"
        options={{
          title: settings.language === 'es' ? 'Favoritos' : 'Favorites',
          tabBarIcon: ({ color, size }) => <Heart size={size} color={color} />,
        }}
      />
      <Tabs.Screen
        name="support"
        options={{
          title: settings.language === 'es' ? 'Apoyo' : 'Support',
          tabBarIcon: ({ color, size }) => <HandHeart size={size} color={color} />,
        }}
      />
      <Tabs.Screen
        name="settings"
        options={{
          title: settings.language === 'es' ? 'Ajustes' : 'Settings',
          tabBarIcon: ({ color, size }) => <Settings size={size} color={color} />,
        }}
      />
      {/* hymn/[id] vive dentro de tabs pero oculto del tab bar */}
      <Tabs.Screen
        name="hymn/[id]"
        options={{
          href: null,
          headerShown: false,
        }}
      />
    </Tabs>
  );
}