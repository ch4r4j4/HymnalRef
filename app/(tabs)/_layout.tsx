import { Tabs } from "expo-router";
import { BottomTabBar } from "@react-navigation/bottom-tabs";
import { Book, Settings, Heart, HandHeart } from "lucide-react-native";
import React from 'react';
import { View } from 'react-native';
import { useSettings } from "@/contexts/SettingsContext";
import { lightTheme, darkTheme } from "@/constants/theme";
import { MiniPlayer } from "@/components/MiniPlayer";

// Custom tab bar: MiniPlayer stacked on top of the real tab bar, no overlap
function CustomTabBar(props: React.ComponentProps<typeof BottomTabBar>) {
  const { effectiveTheme } = useSettings();
  const theme = effectiveTheme === 'dark' ? darkTheme : lightTheme;

  return (
    <View style={{ backgroundColor: theme.cardBackground }}>
      {/* MiniPlayer sits here, pushing the tab bar down — no overlap */}
      <MiniPlayer />
      <BottomTabBar {...props} />
    </View>
  );
}

export default function TabLayout() {
  const { effectiveTheme, settings } = useSettings();
  const theme = effectiveTheme === 'dark' ? darkTheme : lightTheme;

  return (
    <Tabs
      tabBar={(props) => <CustomTabBar {...props} />}
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