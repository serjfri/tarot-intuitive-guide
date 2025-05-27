
# Guía de Tarot

Una PWA elegante para interpretación de tiradas de tarot tradicional y de Osho.

## Características

- **Selección de Cartas**: Elige cartas directamente para una lectura libre con ambas barajas (Tradicional y Osho)
- **Tiradas Estructuradas**: Selecciona entre varias tiradas tradicionales como Cruz Celta, Tres Cartas, etc.
- **Dos Tipos de Baraja**: Tarot Tradicional (con cartas invertidas) y Tarot de Osho
- **Interfaz Intuitiva**: Navegación sencilla con menús cascada para selección de cartas organizadas alfabéticamente
- **PWA**: Funciona offline y se puede instalar como aplicación nativa

## Tecnologías Utilizadas

- React 18 con TypeScript
- Vite para desarrollo y construcción
- Tailwind CSS para estilos
- Radix UI Components para componentes de interfaz
- Lucide Icons para iconografía
- Service Worker para funcionalidad PWA

## Funcionalidades PWA

- ✅ Instalable como aplicación nativa
- ✅ Funciona offline una vez cargada
- ✅ Iconos optimizados para diferentes tamaños de pantalla
- ✅ Manifiesto web configurado
- ✅ Service Worker registrado

## Desarrollo Local

```bash
# Instalar dependencias
npm install

# Ejecutar en modo desarrollo
npm run dev

# Construir para producción
npm run build

# Previsualizar build de producción
npm run preview
```

## Despliegue en GitHub Pages

La aplicación está configurada para desplegarse automáticamente en GitHub Pages:

1. **Configuración automática**: El workflow `.github/workflows/deploy.yml` se ejecuta automáticamente en cada push a la rama `main`
2. **Build optimizado**: Se genera una build optimizada con todos los assets necesarios
3. **PWA funcional**: Todos los archivos necesarios para PWA están incluidos:
   - `manifest.json` configurado
   - Service Worker (`sw.js`) 
   - Iconos en múltiples tamaños
4. **Base path configurado**: La aplicación funciona correctamente en el subdominio de GitHub Pages

### Pasos para el despliegue:

1. Hacer push del código a la rama `main`
2. GitHub Actions construirá automáticamente la aplicación
3. Los archivos se desplegarán en GitHub Pages
4. La aplicación estará disponible en `https://tu-usuario.github.io/nombre-repositorio/`

### Verificación post-despliegue:

- ✅ La aplicación carga correctamente
- ✅ Ambas barajas (Tradicional y Osho) funcionan en modo libre
- ✅ Las tiradas estructuradas funcionan correctamente
- ✅ La PWA es instalable desde el navegador
- ✅ Funciona offline después de la primera carga

## Estructura del Proyecto

```
src/
├── components/        # Componentes React
│   ├── CartaSelector.tsx       # Selector de cartas con menús cascada
│   ├── TiradaSelector.tsx      # Selector de tiradas predefinidas
│   ├── InterpretacionCartas.tsx # Vista de interpretación
│   └── ui/                     # Componentes de interfaz (shadcn/ui)
├── pages/            # Páginas principales
│   ├── Index.tsx     # Página principal con navegación
│   └── NotFound.tsx  # Página 404
├── hooks/            # Hooks personalizados
└── lib/              # Utilidades
```

## Uso de la Aplicación

### Modo Libre
1. Selecciona "Seleccionar Cartas" desde la página principal
2. Elige entre Tarot Tradicional o Tarot de Osho
3. Navega por las cartas organizadas alfabéticamente
4. Añade tantas cartas como desees
5. Interpreta tu lectura personalizada

### Modo Tiradas
1. Selecciona "Seleccionar Tiradas" desde la página principal
2. Elige una tirada predefinida y tipo de baraja
3. Selecciona cartas siguiendo las posiciones de la tirada
4. Recibe interpretaciones específicas para cada posición

## Contribuciones

Las contribuciones son bienvenidas. Por favor:

1. Fork el repositorio
2. Crea una rama para tu feature (`git checkout -b feature/nueva-funcionalidad`)
3. Commit tus cambios (`git commit -am 'Añade nueva funcionalidad'`)
4. Push a la rama (`git push origin feature/nueva-funcionalidad`)
5. Abre un Pull Request

## Licencia

MIT - Ver archivo LICENSE para más detalles.

## Soporte

Para reportar bugs o solicitar nuevas funcionalidades, por favor abre un issue en GitHub.
