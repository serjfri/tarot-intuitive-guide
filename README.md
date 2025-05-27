
# Guía de Tarot - PWA

Una aplicación web progresiva (PWA) elegante para interpretación de tiradas de tarot tradicional y de Osho.

## Características

- ✨ Selección directa de cartas o por tiradas específicas
- 🎴 Soporte para Tarot Tradicional y Tarot de Osho
- 📱 PWA completa - funciona offline
- 🎨 Interfaz elegante y responsive
- 🔄 Función de deshacer última carta
- 📋 Copiar lista de cartas al portapapeles
- 🌟 Menús en cascada para selección eficiente

## Deployment en GitHub Pages

### Configuración Inicial

1. **Fork o clona este repositorio**
2. **Edita el archivo `vite.config.ts`:**
   ```typescript
   base: mode === 'production' ? '/nombre-de-tu-repositorio/' : '/',
   ```
   Reemplaza `nombre-de-tu-repositorio` con el nombre real de tu repositorio.

3. **Configura GitHub Pages:**
   - Ve a Settings → Pages en tu repositorio
   - Source: GitHub Actions
   - El workflow se ejecutará automáticamente

### Estructura del Proyecto

```
├── public/
│   ├── manifest.json          # Configuración PWA
│   ├── sw.js                  # Service Worker
│   ├── .nojekyll             # Configuración GitHub Pages
│   └── assets/               # Iconos y recursos
├── .github/
│   └── workflows/
│       └── deploy.yml        # GitHub Actions workflow
├── src/
│   ├── components/           # Componentes React
│   ├── pages/               # Páginas principales
│   └── hooks/               # Hooks personalizados
└── dist/                    # Build output (generado)
```

### Comandos Disponibles

```bash
# Desarrollo
npm run dev

# Build para producción
npm run build

# Preview del build
npm run preview

# Lint
npm run lint
```

### Personalización

#### Cambiar Iconos
Reemplaza los archivos en `public/assets/` con tus propios iconos:
- `icon-72x72.png` hasta `icon-512x512.png`
- `favicon-16x16.png` y `favicon-32x32.png`

#### Modificar Colores
Edita `src/index.css` para cambiar los colores del tema:
```css
:root {
  --primary: tu-color-principal;
  --background: tu-color-fondo;
}
```

#### Añadir Nuevas Tiradas
Edita `src/components/TiradaSelector.tsx` para añadir nuevas configuraciones de tiradas.

### PWA Features

- **Instalable:** Los usuarios pueden instalar la app en sus dispositivos
- **Offline:** Funciona sin conexión una vez cargada
- **App Shortcuts:** Accesos directos a funciones principales
- **Responsive:** Adapta a cualquier tamaño de pantalla

### Tecnologías Utilizadas

- React 18
- TypeScript
- Tailwind CSS
- Vite
- Radix UI (shadcn/ui)
- PWA capabilities

## Licencia

MIT License - ve el archivo LICENSE para más detalles.
