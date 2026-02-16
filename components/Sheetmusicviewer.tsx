import {
  View, Text, Image, Modal, TouchableOpacity,
  ActivityIndicator, StyleSheet, Dimensions, StatusBar,
  Alert, Platform, ScrollView
} from 'react-native';
import { useState, useEffect, useRef } from 'react';
import { X, Download, CheckCircle } from 'lucide-react-native';
import { useSettings } from '@/contexts/SettingsContext';
import { lightTheme, darkTheme } from '@/constants/theme';
import { getPNGUrl } from '@/constants/media-config';

let FileSystem: any = null;
let PNG_CACHE_DIR = '';

if (Platform.OS !== 'web') {
  FileSystem = require('expo-file-system');
  PNG_CACHE_DIR = FileSystem?.documentDirectory
    ? `${FileSystem.documentDirectory}partituras/`
    : '';
}

const { width: SCREEN_WIDTH } = Dimensions.get('window');

interface Props {
  visible: boolean;
  onClose: () => void;
  hymnNumber: number;
  isOnline: boolean;
}

export function SheetMusicViewer({ visible, onClose, hymnNumber, isOnline }: Props) {
  const { effectiveTheme } = useSettings();
  const theme = effectiveTheme === 'dark' ? darkTheme : lightTheme;

  const [imageUri, setImageUri]           = useState<string | null>(null);
  const [isLoading, setIsLoading]         = useState(false);
  const [isDownloading, setIsDownloading] = useState(false);
  const [isCached, setIsCached]           = useState(false);
  const [error, setError]                 = useState<string | null>(null);
  const [screenWidth, setScreenWidth]     = useState(Dimensions.get('window').width);
  const [imageSize, setImageSize]         = useState({ width: screenWidth, height: screenWidth * 1.4 });

  const cachedPath = PNG_CACHE_DIR ? `${PNG_CACHE_DIR}hymn_${hymnNumber}.png` : '';
  const remoteUrl  = getPNGUrl(hymnNumber);

  // Escuchar cambios de orientación
  useEffect(() => {
    const subscription = Dimensions.addEventListener('change', ({ window }) => {
      setScreenWidth(window.width);
      // Recalcular tamaño de imagen si ya está cargada
      if (imageSize.height > 0) {
        const ratio = imageSize.height / imageSize.width;
        setImageSize({ width: window.width, height: window.width * ratio });
      }
    });
    return () => subscription?.remove();
  }, [imageSize]);

  useEffect(() => {
    if (visible) {
      loadImage();
    } else {
      setImageUri(null);
      setError(null);
    }
  }, [visible, hymnNumber]);

  const ensureDir = async () => {
    if (!PNG_CACHE_DIR || !FileSystem || Platform.OS === 'web') return;
    const info = await FileSystem.getInfoAsync(PNG_CACHE_DIR);
    if (!info.exists) {
      await FileSystem.makeDirectoryAsync(PNG_CACHE_DIR, { intermediates: true });
    }
  };

  const loadImage = async () => {
    setIsLoading(true);
    setError(null);
    try {
      if (Platform.OS === 'web' || !FileSystem || !cachedPath) {
        setImageUri(remoteUrl);
        setIsCached(false);
        setIsLoading(false);
        return;
      }
      const info = await FileSystem.getInfoAsync(cachedPath);
      if (info.exists) {
        setImageUri(cachedPath);
        setIsCached(true);
        setIsLoading(false);
        return;
      }
      if (!isOnline) {
        setError('Sin conexión. Descarga la partitura primero.');
        setIsLoading(false);
        return;
      }
      setImageUri(remoteUrl);
      setIsCached(false);
    } catch (e) {
      setError('No se pudo cargar la partitura.');
    } finally {
      setIsLoading(false);
    }
  };

  const downloadAndCache = async () => {
    if (Platform.OS === 'web') {
      Alert.alert('Info', 'La descarga offline solo está disponible en la app móvil.');
      return;
    }
    if (!isOnline) {
      Alert.alert('Sin conexión', 'Necesitas internet para descargar.');
      return;
    }
    if (!cachedPath || !FileSystem) return;
    try {
      setIsDownloading(true);
      await ensureDir();
      const result = await FileSystem.downloadAsync(remoteUrl, cachedPath);
      if (result.status === 200) {
        setImageUri(cachedPath);
        setIsCached(true);
        Alert.alert('✓ Guardado', 'Partitura disponible offline.');
      }
    } catch (e) {
      Alert.alert('Error', 'No se pudo descargar la partitura.');
    } finally {
      setIsDownloading(false);
    }
  };

  // Cuando la imagen carga, obtener sus dimensiones reales
  const handleImageLoad = (e: any) => {
    // En móvil: e.nativeEvent.source.{width, height}
    // En web: e.nativeEvent.target.naturalWidth / naturalHeight
    const width = e.nativeEvent?.source?.width || e.nativeEvent?.target?.naturalWidth;
    const height = e.nativeEvent?.source?.height || e.nativeEvent?.target?.naturalHeight;
    
    if (width && height) {
      // Escalar al ancho de pantalla manteniendo proporción
      const ratio = height / width;
      setImageSize({ width: screenWidth, height: screenWidth * ratio });
    }
  };

  return (
    <Modal
      visible={visible}
      animationType="slide"
      presentationStyle="fullScreen"
      onRequestClose={onClose}
    >
      <StatusBar barStyle="light-content" backgroundColor="#000" />
      <View style={styles.container}>

        {/* Header */}
        <View style={[styles.header, { backgroundColor: theme.cardBackground }]}>
          <TouchableOpacity onPress={onClose} style={styles.headerBtn} activeOpacity={0.7}>
            <X color={theme.text} size={22} />
          </TouchableOpacity>
          <Text style={[styles.headerTitle, { color: theme.text }]}>
            Partitura #{hymnNumber}
          </Text>
          <TouchableOpacity
            onPress={downloadAndCache}
            style={styles.headerBtn}
            activeOpacity={0.7}
            disabled={isCached || isDownloading}
          >
            {isDownloading ? (
              <ActivityIndicator color={theme.primary} size="small" />
            ) : isCached ? (
              <CheckCircle color={theme.primary} size={22} fill={theme.primary} />
            ) : (
              <Download color={theme.primary} size={22} />
            )}
          </TouchableOpacity>
        </View>

        {/* Contenido */}
        <View style={[styles.content, { backgroundColor: theme.background }]}>
          {isLoading ? (
            <ActivityIndicator color={theme.primary} size="large" />

          ) : error ? (
            <View style={styles.errorContainer}>
              <Text style={[styles.errorText, { color: theme.textSecondary }]}>{error}</Text>
              {isOnline && (
                <TouchableOpacity
                  style={[styles.retryBtn, { backgroundColor: theme.primary }]}
                  onPress={loadImage}
                >
                  <Text style={styles.retryText}>Reintentar</Text>
                </TouchableOpacity>
              )}
            </View>

          ) : imageUri ? (
            <ScrollView
              style={{ flex: 1 }}
              contentContainerStyle={styles.scrollContent}
              showsVerticalScrollIndicator={false}
              maximumZoomScale={3}    // pellizcar para acercar hasta 3x
              minimumZoomScale={1}
              bouncesZoom={true}
              centerContent={true}
            >
              <Image
                source={{ uri: imageUri }}
                style={{ width: imageSize.width, height: imageSize.height }}
                resizeMode="contain"
                onLoad={handleImageLoad}
                onError={() => setError('No se encontró la partitura para este himno.')}
              />
            </ScrollView>

          ) : null}
        </View>

      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 8,
    paddingVertical: 12,
    paddingTop: 48,
  },
  headerBtn: {
    width: 44,
    height: 44,
    alignItems: 'center',
    justifyContent: 'center',
  },
  headerTitle: {
    fontSize: 16,
    fontWeight: '600',
  },
  content: {
    flex: 1,
  },
  scrollContent: {
    flexGrow: 1,
    alignItems: 'center',
    paddingVertical: 8,
  },
  errorContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 32,
    gap: 16,
  },
  errorText: {
    fontSize: 15,
    textAlign: 'center',
  },
  retryBtn: {
    paddingHorizontal: 24,
    paddingVertical: 10,
    borderRadius: 8,
  },
  retryText: {
    color: '#fff',
    fontWeight: '600',
  },
});