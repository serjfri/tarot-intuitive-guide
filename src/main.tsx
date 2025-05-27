import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './index.css'

createRoot(document.getElementById("root")!).render(<App />);

// Registrar Service Worker para PWA
if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    // MODIFICACIÓN CLAVE AQUÍ: Usar import.meta.env.BASE_URL
    // Esto asegura que el Service Worker se registre en la ruta correcta
    // (ej. /tarot-intuitive-guide/sw.js en producción)
    navigator.serviceWorker.register(`${import.meta.env.BASE_URL}sw.js`)
      .then((registration) => {
        console.log('Service Worker registrado con éxito. Scope:', registration.scope);
      })
      .catch((registrationError) => {
        console.error('Fallo el registro del Service Worker:', registrationError);
      });
  });
}