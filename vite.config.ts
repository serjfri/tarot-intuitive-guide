import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react'; // Asegúrate de que esta línea esté así (plugin-react, no plugin-react-swc)
import { VitePWA } from 'vite-plugin-pwa';
import path from 'path'; // <--- IMPORTANTE: Añade esta línea

// Define la URL base de tu aplicación, crucial para GitHub Pages.
// Para https://serjfri.github.io/tarot-intuitive-guide/, la base es '/tarot-intuitive-guide/'
const BASE_URL = '/tarot-intuitive-guide/';

export default defineConfig({
  base: BASE_URL, // La base para el despliegue en GitHub Pages

  plugins: [
    react(),
    VitePWA({
      registerType: 'autoUpdate',
      
      devOptions: {
        enabled: true,
        type: 'module',
        navigateFallback: BASE_URL + 'index.html',
      },
      
      workbox: {
        globPatterns: ['**/*.{js,css,html,ico,png,svg,json,webp}'],
        runtimeCaching: [
          {
            urlPattern: new RegExp(`^${BASE_URL}.*`), // Coincide con cualquier URL bajo tu BASE_URL
            handler: 'NetworkFirst',
            options: {
              cacheName: 'api-cache',
              expiration: {
                maxEntries: 10,
                maxAgeSeconds: 60 * 60 * 24 * 30, // 30 días
              },
              cacheableResponse: {
                statuses: [0, 200],
              },
            },
          },
        ],
      },
      
      includeAssets: [
        'favicon.ico', 
        'apple-touch-icon.png', 
        'masked-icon.svg', 
        'assets/*.png', 
        'assets/icon-192x192.png', 
        'assets/icon-512x512.png'
      ], 

      manifest: {
        name: "Guía de Tarot",
        short_name: "Tarot",
        description: "PWA elegante para interpretación de tiradas de tarot tradicional y de Osho",
        theme_color: "#d97706",
        background_color: "#f97316",
        display: "standalone",
        orientation: "portrait",
        icons: [
          {
            src: BASE_URL + 'assets/icon-192x192.png',
            sizes: '192x192',
            type: 'image/png',
            purpose: 'any maskable'
          },
          {
            src: BASE_URL + 'assets/icon-512x512.png',
            sizes: '512x512',
            type: 'image/png',
            purpose: 'any maskable'
          }
        ]
      }
    })
  ],
  
  // <--- IMPORTANTE: AÑADE ESTO PARA RESOLVER ALIAS DE RUTAS
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"), // Resuelve "@/" a la carpeta "src"
    },
  },
});