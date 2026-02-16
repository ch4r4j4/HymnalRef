# Loores al Rey - Himnario Digital

Aplicación móvil nativa de himnario con reproducción de audio, visualización de partituras y funcionalidad offline.

## Tecnologías

- **React Native** - Framework multiplataforma para desarrollo móvil nativo
- **Expo Router** - Sistema de navegación basado en archivos
- **TypeScript** - JavaScript con tipado estático
- **Expo File System** - Almacenamiento local y caché offline
- **Lucide React Native** - Iconos

## Características

- ✅ **791 himnos** con letra completa
- 🎵 **Reproductor de audio** integrado con pistas instrumentales
- 📄 **Visualización de partituras** en PNG con zoom y scroll
- 📴 **Modo offline** - descarga audios y partituras para uso sin conexión
- ⭐ **Favoritos** - marca tus himnos preferidos
- 🔍 **Búsqueda avanzada** - por título, número, letra o palabras clave
- 🌓 **Tema oscuro/claro** automático según sistema
- 📱 **Soporte de rotación** - visualización en horizontal y vertical
- 🎨 **Tamaño de fuente ajustable** para mejor lectura

## Estructura del Proyecto

```
├── app/                      # Pantallas (Expo Router)
│   ├── (tabs)/              # Navegación por pestañas
│   │   ├── index.tsx        # Inicio - lista de himnos
│   │   ├── hymn/[id].tsx    # Detalle del himno
│   │   ├── favorites.tsx    # Himnos favoritos
│   │   └── settings.tsx     # Ajustes
│   └── _layout.tsx          # Layout raíz
├── components/              # Componentes reutilizables
│   ├── MiniPlayer.tsx       # Reproductor flotante
│   ├── SheetMusicViewer.tsx # Visor de partituras
│   └── CircularProgress.tsx # Indicador de progreso
├── contexts/                # Contextos de React
│   ├── AudioContext.tsx     # Estado global del reproductor
│   ├── FavoritesContext.tsx # Gestión de favoritos
│   └── SettingsContext.tsx  # Preferencias de usuario
├── constants/               # Configuración y datos
│   ├── hymns.ts            # Base de datos de himnos
│   ├── theme.ts            # Temas y estilos
│   └── media-config.ts     # URLs de R2/Cloudflare
└── assets/                 # Recursos estáticos

```

## Instalación Local

### Requisitos

- Node.js 18+ ([instalar con nvm](https://github.com/nvm-sh/nvm))
- Bun ([instalar](https://bun.sh/docs/installation))

### Pasos

```bash
# 1. Clonar el repositorio
git clone <URL_DEL_REPO>
cd <NOMBRE_PROYECTO>

# 2. Instalar dependencias
bun install

# 3. Iniciar servidor de desarrollo
bun start

# 4. Probar en dispositivo
# iOS: Escanear QR con Expo Go desde App Store
# Android: Escanear QR con Expo Go desde Play Store
```

## Desarrollo

### Probar en navegador web
```bash
bun start-web
```
Nota: Algunas funciones nativas (caché offline, permisos) no funcionan en web.

### Probar en simuladores

```bash
# iOS Simulator (requiere macOS + Xcode)
bun start -- --ios

# Android Emulator (requiere Android Studio)
bun start -- --android
```

### Limpiar caché

```bash
bunx expo start --clear
```

## Arquitectura de Datos

### Himnos (`constants/hymns.ts`)
```typescript
interface Hymn {
  id: number;
  numero: number;
  titulo: string;
  versos: string[];
  coro: string | null;
  posicion_coro: number | null;  // 0=antes, 1=después 1er verso, null=al final
  audio: {
    tiene_audio: boolean;
    url: string | null;           // Cloudflare R2
  };
  temas: string[];
  palabras_clave: string[];
}
```

### Almacenamiento Offline

**Audios**: `FileSystem.documentDirectory/audio/hymn_X.mp3`
**Partituras**: `FileSystem.documentDirectory/partituras/hymn_X.png`
**Favoritos**: AsyncStorage (`@favorites`)
**Configuración**: AsyncStorage (`@settings`)

### URLs de Recursos (R2/Cloudflare)

```
Audio:      https://pub-xxxxx.r2.dev/audio/hymn_X.mp3
Partitura:  https://pub-xxxxx.r2.dev/partituraspng/hymn_X.png
```

Configuradas en `constants/media-config.ts`

## Scripts Auxiliares (Python)

Scripts utilizados para procesar recursos antes de subirlos a R2:

### `renombrar_audios.py`
Renombra `Instr._168_nombre.mp3` → `hymn_168.mp3`

### `renombrar_partituras.py`
Renombra `Partitura_03_nombre.pdf` → `hymn_3.pdf`

### `convertir_pdf_a_png.py`
Convierte PDFs a PNG optimizados (150 DPI, escala de grises)
```bash
pip install pymupdf
python convertir_pdf_a_png.py
```

### `unir_paginas_png.py`
Une partituras de múltiples páginas (`hymn_X_p1.png` + `hymn_X_p2.png` → `hymn_X.png`)
```bash
pip install pillow
python unir_paginas_png.py
```

### `comprimir_audios.py`
Reduce tamaño de audios a 96kbps mono (~60-70% menos peso)
```bash
pip install imageio-ffmpeg
python comprimir_audios.py
```

### `actualizar_audio_hymns.py`
Actualiza automáticamente el campo `audio.url` en `hymns.ts` para himnos del 1-751

### `descargar_himnos.py` / `descargar_partituras.py`
Scripts Pyrogram para descargar recursos del bot de Telegram
```bash
pip install pyrogram
python descargar_himnos.py
```

## Publicación

### App Store (iOS)

```bash
# Instalar EAS CLI
bun i -g @expo/eas-cli

# Configurar proyecto
eas build:configure

# Crear build de producción
eas build --platform ios

# Enviar a App Store
eas submit --platform ios
```

### Google Play (Android)

```bash
# Crear build de producción
eas build --platform android

# Enviar a Google Play
eas submit --platform android
```

Más info: [Guía de publicación de Expo](https://docs.expo.dev/submit/introduction/)

## Recursos Externos

- **Cloudflare R2**: Almacenamiento de audios y partituras
- **Expo**: Plataforma de desarrollo y builds
- **Telegram Bot**: Fuente original de contenido (himnos, audios, partituras)

## Créditos

Contenido musical: [www.reformaperu.org](https://www.reformaperu.org)
Himnario: Loores al Rey

## Licencia

El contenido musical y las partituras pertenecen a sus respectivos autores.
El código de la aplicación está disponible bajo licencia MIT.