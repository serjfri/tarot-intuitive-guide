const CACHE_NAME = 'tarot-pwa-v2'; // Incrementa la versión para forzar una actualización
const BASE_URL = self.location.origin + '/tarot-intuitive-guide/'; // Asegúrate de que coincida con tu base en vite.config.js

const urlsToCache = [
  BASE_URL, // La URL base de tu aplicación
  BASE_URL + 'index.html', // La página principal
  // Aquí necesitarás poner las rutas correctas de tus assets generados por Vite.
  // Los nombres como 'index-CDDknNLf.js' cambian con cada build.
  // Te daré una solución más robusta para esto en el siguiente paso.
  // Por ahora, para que el SW se registre, podemos poner solo la base.
  // BASE_URL + 'assets/index-CDDknNLf.js', // Ejemplo (este nombre cambia)
  // BASE_URL + 'assets/style-XXXXXXXX.css', // Ejemplo (este nombre cambia)
  BASE_URL + 'manifest.json',
  BASE_URL + 'assets/icon-192x192.png', // Asegúrate de que estos iconos estén en la carpeta 'assets' o 'public'
  BASE_URL + 'assets/icon-512x512.png'
];

self.addEventListener('install', (event) => {
  console.log('Service Worker: Instalando...');
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then((cache) => {
        console.log('Service Worker: Cache abierto, añadiendo URLs:', urlsToCache);
        return cache.addAll(urlsToCache).catch(error => {
          console.error('Service Worker: Error al añadir URLs a la caché:', error);
        });
      })
      .catch(error => {
        console.error('Service Worker: Error al abrir la caché:', error);
      })
  );
});

self.addEventListener('fetch', (event) => {
  event.respondWith(
    caches.match(event.request)
      .then((response) => {
        if (response) {
          return response;
        }
        return fetch(event.request).catch(error => {
          console.error('Service Worker: Fetch fallido para', event.request.url, error);
        });
      })
  );
});

self.addEventListener('activate', (event) => {
  console.log('Service Worker: Activando...');
  event.waitUntil(
    caches.keys().then((cacheNames) => {
      return Promise.all(
        cacheNames.map((cacheName) => {
          if (cacheName !== CACHE_NAME) {
            console.log('Service Worker: Borrando caché antiguo', cacheName);
            return caches.delete(cacheName);
          }
          return Promise.resolve();
        })
      );
    })
  );
});