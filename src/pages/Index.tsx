import React, { useState } from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { CreditCard, Layers } from "lucide-react";
import CartaSelector from '@/components/CartaSelector';
import TiradaSelector from '@/components/TiradaSelector';
import InterpretacionCartas from '@/components/InterpretacionCartas';
// Ya NO se importa BackButton aquí, lo hemos eliminado para evitar duplicidad

// MODIFICACIÓN CLAVE AQUÍ: x e y son OPCIONALES
export interface Posicion {
  numero: number;
  nombre: string;
  descripcion: string;
  x?: number; // Propiedad 'x' ahora es opcional
  y?: number; // Propiedad 'y' ahora es opcional
}

export interface Tirada {
  id: string;
  nombre: string;
  descripcion: string;
  numeroCartas: number;
  posiciones: Posicion[]; // Usa la interfaz Posicion modificada
}

export interface CartaSeleccionada {
  posicion: number;
  carta: string;
  invertida: boolean;
  baraja: 'tradicional' | 'osho';
}

// Tirada por defecto para selección libre
// También se modifican las posiciones aquí para eliminar x e y
const tiradaLibre: Tirada = {
  id: 'libre',
  nombre: 'Selección Libre',
  descripcion: 'Selecciona las cartas que desees sin un patrón específico',
  numeroCartas: 1, // Se ajustará dinámicamente
  posiciones: [
    {
      numero: 1,
      nombre: 'Carta',
      descripcion: 'Selecciona una carta',
      // x e y eliminadas aquí también, ya no son obligatorias
    }
  ]
};

const Index = () => {
  const [vistaActual, setVistaActual] = useState<'inicio' | 'seleccionLibre' | 'tiradas' | 'cartas' | 'interpretacion'>('inicio');
  const [tiradaSeleccionada, setTiradaSeleccionada] = useState<Tirada | null>(null);
  const [barajaSeleccionada, setBarajaSeleccionada] = useState<'tradicional' | 'osho'>('tradicional');
  const [cartasSeleccionadas, setCartasSeleccionadas] = useState<CartaSeleccionada[]>([]);
  const [modoLibre, setModoLibre] = useState(false);

  const handleSeleccionLibre = () => {
    setModoLibre(true);
    // Para modo libre, inicializamos con una "tirada" que crecerá dinámicamente
    setTiradaSeleccionada({ ...tiradaLibre, numeroCartas: 1, posiciones: [{ numero: 1, nombre: 'Carta', descripcion: 'Selecciona una carta' }] });
    setCartasSeleccionadas([]);
    setBarajaSeleccionada('tradicional'); // Reset to default
    setVistaActual('cartas');
  };

  const handleSeleccionTiradas = () => {
    setModoLibre(false);
    setVistaActual('tiradas');
  };

  const handleTiradaSelect = (tirada: Tirada, baraja: 'tradicional' | 'osho') => {
    setTiradaSeleccionada(tirada);
    setBarajaSeleccionada(baraja);
    setCartasSeleccionadas([]);
    setVistaActual('cartas');
  };

  const handleCambiarBaraja = (baraja: 'tradicional' | 'osho') => {
    setBarajaSeleccionada(baraja);
    // Limpiar cartas al cambiar de baraja en modo libre (o cualquier modo, es una buena práctica)
    setCartasSeleccionadas([]);
    // Si estás en modo libre, ajusta la tirada para la siguiente carta
    if (modoLibre) {
      setTiradaSeleccionada({ ...tiradaLibre, numeroCartas: 1, posiciones: [{ numero: 1, nombre: 'Carta', descripcion: 'Selecciona una carta' }] });
    }
  };

  const handleCartaAdd = (carta: CartaSeleccionada) => {
    if (modoLibre) {
      // En modo libre, añadir cartas incrementalmente
      const nuevaPosicion = cartasSeleccionadas.length + 1;
      const nuevaCarta = { ...carta, posicion: nuevaPosicion };
      setCartasSeleccionadas([...cartasSeleccionadas, nuevaCarta]);
      
      // Actualizar la tirada libre para permitir más cartas (solo si hay más cartas para seleccionar)
      // La próxima "posición" que se mostrará en CartaSelector
      const proximaPosicionNum = nuevaPosicion + 1;
      const nuevaPosicionData = {
        numero: proximaPosicionNum,
        nombre: `Carta ${proximaPosicionNum}`,
        descripcion: 'Selecciona otra carta',
      };

      if (tiradaSeleccionada) {
        setTiradaSeleccionada(prevTirada => ({
          ...(prevTirada || tiradaLibre), // Usar prevTirada o tiradaLibre si es null
          numeroCartas: proximaPosicionNum, // Incrementa para la siguiente carta
          posiciones: [
            ...(prevTirada?.posiciones.filter(p => p.numero <= nuevaPosicion) || []), // Mantener las posiciones ya ocupadas
            nuevaPosicionData // Añadir la nueva posición para la siguiente selección
          ]
        }));
      }
    } else {
      // En modo tirada específica, si la carta ya existe en esa posición, la reemplazamos, si no, la añadimos
      setCartasSeleccionadas(prevCartas => {
        const existe = prevCartas.some(c => c.posicion === carta.posicion);
        if (existe) {
          return prevCartas.map(c => c.posicion === carta.posicion ? carta : c);
        } else {
          return [...prevCartas, carta];
        }
      });
    }
  };

  const handleCartaToggle = (posicion: number) => {
    setCartasSeleccionadas(cartasSeleccionadas.map(carta => 
      carta.posicion === posicion 
        ? { ...carta, invertida: !carta.invertida }
        : carta
    ));
  };

  const handleDeshacerUltimaCarta = () => {
    if (cartasSeleccionadas.length > 0) {
      const nuevasCartas = cartasSeleccionadas.slice(0, -1);
      setCartasSeleccionadas(nuevasCartas);

      if (modoLibre) {
        // En modo libre, ajustamos la "tirada" para reflejar el estado actual
        if (nuevasCartas.length === 0) {
          setTiradaSeleccionada(tiradaLibre);
        } else {
          const ultimaPosicionNum = nuevasCartas.length + 1;
          setTiradaSeleccionada(prevTirada => ({
            ...(prevTirada || tiradaLibre),
            numeroCartas: ultimaPosicionNum,
            posiciones: prevTirada?.posiciones.slice(0, ultimaPosicionNum) || tiradaLibre.posiciones.slice(0, ultimaPosicionNum)
          }));
        }
      } else {
        // En modo tirada específica, la carta que se deshace es la última añadida por el usuario
        // No es la de mayor posición, sino la última en el array antes de sortearse.
        // La lógica de "deshacer la última" en CartaSelector ya debería manejar esto si las cartas se añaden en orden.
        // Aquí solo la eliminamos del array.
      }
    }
  };

  const handleLimpiarCartas = () => {
    setCartasSeleccionadas([]);
    if (modoLibre) {
      setTiradaSeleccionada(tiradaLibre); // Restablecer a la tirada libre inicial
    }
  };

  // LÓGICA DEL BOTÓN VOLVER GLOBAL
  const handleVolver = () => {
    if (vistaActual === 'cartas') {
      if (modoLibre) {
        setVistaActual('inicio');
        setModoLibre(false);
        setTiradaSeleccionada(null);
        setCartasSeleccionadas([]);
      } else {
        setVistaActual('tiradas');
        // No limpiar tiradaSeleccionada aquí, TiradaSelector la necesita
      }
    } else if (vistaActual === 'interpretacion') {
      setVistaActual('cartas');
    } else { // Si estamos en 'tiradas' o 'seleccionLibre'
      setVistaActual('inicio');
    }
  };

  const handleInterpretarCartas = () => {
    setVistaActual('interpretacion');
  };

  const puedeIrAInterpretacion = () => {
    if (modoLibre) {
      return cartasSeleccionadas.length > 0;
    } else {
      return tiradaSeleccionada && cartasSeleccionadas.length === tiradaSeleccionada.numeroCartas;
    }
  };

  // El botón de volver global ahora solo existe dentro de los componentes CartaSelector y TiradaSelector
  // No hay un showBackButton global aquí.

  return (
    <div className="relative min-h-screen"> {/* Contenedor relativo para posicionar el botón de volver (en los hijos) */}
      {/* Ya NO se renderiza un BackButton aquí */}

      {vistaActual === 'interpretacion' && tiradaSeleccionada && (
        <InterpretacionCartas
          tirada={tiradaSeleccionada}
          cartasSeleccionadas={cartasSeleccionadas}
          onVolver={handleVolver}
          modoLibre={modoLibre}
          baraja={barajaSeleccionada} // Asegurarse de pasar la baraja a InterpretacionCartas
        />
      )}

      {vistaActual === 'cartas' && tiradaSeleccionada && (
        <CartaSelector
          tirada={tiradaSeleccionada}
          baraja={barajaSeleccionada}
          cartasSeleccionadas={cartasSeleccionadas}
          onCartaAdd={handleCartaAdd}
          onCartaToggle={handleCartaToggle}
          onVolver={handleVolver} // Se pasa la función de volver global
          onInterpretarCartas={handleInterpretarCartas}
          onLimpiarCartas={handleLimpiarCartas}
          onDeshacerUltimaCarta={handleDeshacerUltimaCarta}
          // Asegúrate de que puedeIrAInterpretacion se evalúe correctamente aquí
          puedeIrAInterpretacion={
            modoLibre ? cartasSeleccionadas.length > 0 : cartasSeleccionadas.length === tiradaSeleccionada.numeroCartas
          }
          modoLibre={modoLibre}
          onCambiarBaraja={handleCambiarBaraja}
        />
      )}

      {vistaActual === 'tiradas' && (
        <TiradaSelector
          onTiradaSelect={handleTiradaSelect}
          onVolver={handleVolver} // Se pasa la función de volver global
        />
      )}

      {vistaActual === 'inicio' && (
        <div className="min-h-screen bg-gradient-to-br from-amber-50 via-orange-50 to-amber-100">
          <div className="container mx-auto px-4 py-8">
            <div className="max-w-4xl mx-auto">
              {/* Encabezado */}
              <div className="text-center mb-12">
                <h1 className="text-5xl font-serif text-amber-900 mb-4">
                  Guía de Tarot
                </h1>
              </div>

              {/* Opciones principales */}
              <div className="grid md:grid-cols-2 gap-8 max-w-3xl mx-auto">
                {/* Seleccionar Cartas Directamente */}
                <Card 
                  className="group bg-white/80 backdrop-blur-sm border-amber-200 hover:border-amber-400 transition-all duration-300 cursor-pointer hover:shadow-xl hover:-translate-y-1"
                  onClick={handleSeleccionLibre}
                >
                  <CardContent className="p-8 text-center">
                    <div className="mb-6">
                      <div className="mx-auto w-16 h-16 bg-gradient-to-br from-amber-400 to-orange-500 rounded-full flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                        <CreditCard className="w-8 h-8 text-white" />
                      </div>
                      <h3 className="text-2xl font-serif text-amber-900 mb-3">
                        Seleccionar Cartas
                      </h3>
                    </div>
                    <Button 
                      size="lg" 
                      className="w-full bg-gradient-to-r from-amber-600 to-orange-600 hover:from-amber-700 hover:to-orange-700 text-white font-medium"
                    >
                      Comenzar Lectura
                    </Button>
                  </CardContent>
                </Card>

                {/* Seleccionar con Tiradas */}
                <Card 
                  className="group bg-white/80 backdrop-blur-sm border-amber-200 hover:border-amber-400 transition-all duration-300 cursor-pointer hover:shadow-xl hover:-translate-y-1"
                  onClick={handleSeleccionTiradas}
                >
                  <CardContent className="p-8 text-center">
                    <div className="mb-6">
                      <div className="mx-auto w-16 h-16 bg-gradient-to-br from-orange-400 to-red-500 rounded-full flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                        <Layers className="w-8 h-8 text-white" />
                      </div>
                      <h3 className="text-2xl font-serif text-amber-900 mb-3">
                        Seleccionar Tiradas
                      </h3>
                    </div>
                    <Button 
                      size="lg" 
                      className="w-full bg-gradient-to-r from-orange-600 to-red-600 hover:from-orange-700 hover:to-red-700 text-white font-medium"
                    >
                      Explorar Tiradas
                    </Button>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Index;