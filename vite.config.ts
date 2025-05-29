import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { VitePWA } from 'vite-plugin-pwa';
import path from 'path';

const BASE_URL = '/lecturas/';

export default defineConfig({
  base: BASE_URL,

  plugins: [
    react(),
    VitePWA({
      registerType: 'autoUpdate',

      devOptions: {
        enabled: true,
        type: 'module',
        // Asegúrate de que navigateFallback use la BASE_URL correcta para el HTML
        navigateFallback: BASE_URL + 'index.html',
      },

      workbox: {
        // globPatterns: ['**/*.{js,css,html,ico,png,svg,json,webp}'], // Puedes simplificar esto si solo quieres los assets que Vite genera
        globPatterns: [
            '**/*.{js,css,html}', // Archivos principales
            'assets/**/*.{ico,png,svg,webp}', // Imágenes dentro de la carpeta assets
        ],
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

      // *** CAMBIOS IMPORTANTES AQUÍ ***
      includeAssets: [
        'favicon.ico',
        'apple-touch-icon.png',
        'masked-icon.svg',
        // Quita la carpeta 'assets/' de aquí si ya está en globPatterns o si tus assets ya están en la raíz de 'public'
        // Si tus assets (icon-192x192.png, etc.) están directamente en la carpeta 'public', la ruta es solo el nombre del archivo.
        // Si están en 'public/assets/', entonces la ruta es 'assets/icon-192x192.png'.
        // Asegúrate de que las rutas aquí reflejen la ubicación real en tu carpeta 'public'.
        // Basado en tus errores 404, es probable que estén en 'public/assets/' pero los estés buscando en la raíz.
        'assets/favicon-32x32.png', // Añadir estos si están ahí y no en la raíz
        'assets/favicon-16x16.png', // Añadir estos si están ahí y no en la raíz
        'assets/icon-192x192.png',
        'assets/icon-512x512.png',
        // Si tienes otros iconos como apple-touch-icon.png o masked-icon.svg en 'public/assets', ajusta aquí:
        // 'assets/apple-touch-icon.png',
        // 'assets/masked-icon.svg',
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
            // La URL dentro del manifest no debe incluir la BASE_URL
            // El navegador la resolverá correctamente si el manifest se sirve desde BASE_URL
            src: 'assets/icon-192x192.png', // <--- QUITA BASE_URL +
            sizes: '192x192',
            type: 'image/png',
            purpose: 'any maskable'
          },
          {
            src: 'assets/icon-512x512.png', // <--- QUITA BASE_URL +
            sizes: '512x512',
            type: 'image/png',
            purpose: 'any maskable'
          },
          // Si tienes favicons aquí en el manifest, también deben ser relativos
          // {
          //   src: 'assets/favicon-32x32.png',
          //   sizes: '32x32',
          //   type: 'image/png'
          // }
        ]
      }
    })
  ],

  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
});