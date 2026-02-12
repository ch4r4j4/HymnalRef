export const lightTheme = {
  background: '#FDFBF7',
  cardBackground: '#FFFFFF',
  text: '#1A1A1A',
  textSecondary: '#666666',
  textTertiary: '#999999',
  border: '#E5E5E5',
  primary: '#8B4513',
  primaryLight: '#A0522D',
  accent: '#CD853F',
  shadow: '#000000',
  error: '#DC2626',
};

export const darkTheme = {
  background: '#0F0F0F',
  cardBackground: '#1A1A1A',
  text: '#F5F5F5',
  textSecondary: '#B3B3B3',
  textTertiary: '#808080',
  border: '#2A2A2A',
  primary: '#D4A574',
  primaryLight: '#E6C9A8',
  accent: '#B8956A',
  shadow: '#000000',
  error: '#EF4444',
};

export type Theme = typeof lightTheme;

export const fontSizes = {
  small: {
    base: 14,
    large: 16,
    xlarge: 18,
    title: 20,
    hymnNumber: 32,
  },
  medium: {
    base: 16,
    large: 18,
    xlarge: 20,
    title: 24,
    hymnNumber: 40,
  },
  large: {
    base: 18,
    large: 20,
    xlarge: 24,
    title: 28,
    hymnNumber: 48,
  },
  xlarge: {
    base: 20,
    large: 24,
    xlarge: 28,
    title: 32,
    hymnNumber: 56,
  },
};
