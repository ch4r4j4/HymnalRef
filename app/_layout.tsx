import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Stack } from "expo-router";
import * as SplashScreen from "expo-splash-screen";
import React, { useEffect } from "react";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { SettingsProvider } from "@/contexts/SettingsContext";
import { FavoritesProvider } from "@/contexts/FavoritesContext";
import { AudioProvider } from "@/contexts/AudioContext";

SplashScreen.preventAutoHideAsync();

const queryClient = new QueryClient();

export default function RootLayout() {
  useEffect(() => {
    SplashScreen.hideAsync();
  }, []);

  return (
    <QueryClientProvider client={queryClient}>
      <SettingsProvider>
        <FavoritesProvider>
          {/* AudioProvider wraps everything so MiniPlayer is accessible globally */}
          <AudioProvider>
            <GestureHandlerRootView style={{ flex: 1 }}>
              <Stack screenOptions={{ headerShown: false }}>
                <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
              </Stack>
            </GestureHandlerRootView>
          </AudioProvider>
        </FavoritesProvider>
      </SettingsProvider>
    </QueryClientProvider>
  );
}