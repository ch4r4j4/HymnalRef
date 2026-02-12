import { Link, Stack } from "expo-router";
import { StyleSheet, Text, View } from "react-native";
import { useSettings } from "@/contexts/SettingsContext";
import { lightTheme, darkTheme, fontSizes } from "@/constants/theme";

export default function NotFoundScreen() {
  const { settings, effectiveTheme } = useSettings();
  const theme = effectiveTheme === 'dark' ? darkTheme : lightTheme;
  const fonts = fontSizes[settings.fontSize];

  return (
    <>
      <Stack.Screen options={{ title: "Oops!", headerStyle: { backgroundColor: theme.cardBackground }, headerTintColor: theme.primary }} />
      <View style={[styles.container, { backgroundColor: theme.background }]}>
        <Text style={[styles.title, { color: theme.text, fontSize: fonts.title }]}>
          {settings.language === 'es' ? 'Esta página no existe' : 'This screen doesn\'t exist'}
        </Text>

        <Link href="/" style={styles.link}>
          <Text style={[styles.linkText, { color: theme.primary, fontSize: fonts.base }]}>
            {settings.language === 'es' ? 'Ir al inicio' : 'Go to home screen'}
          </Text>
        </Link>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center" as const,
    justifyContent: "center" as const,
    padding: 20,
  },
  title: {
    fontWeight: "bold" as const,
    textAlign: "center" as const,
  },
  link: {
    marginTop: 15,
    paddingVertical: 15,
  },
  linkText: {
    fontWeight: "600" as const,
  },
});
