import React, { useState } from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { CreditCard, Layers } from "lucide-react";
import CartaSelector from '@/components/CartaSelector';
import TiradaSelector from '@/components/TiradaSelector';
import InterpretacionCartas from '@/components/InterpretacionCartas';

export interface Tirada {
  id: string;
  nombre: string;
  descripcion: string;
  numeroCartas: number;
  posiciones: {
    numero: number;
    nombre: string;
    descripcion: string;
    x: number;
    y: number;
  }[];
}

export interface CartaSeleccionada {
  posicion: number;
  carta: string;
  invertida: boolean;
  baraja: 'tradicional' | 'osho';
}

// Tirada por defecto para selección libre
const tiradaLibre: Tirada = {
  id: 'libre',
  nombre: 'Selección Libre',
  descripcion: 'Selecciona las cartas que desees sin un patrón específico',
  numeroCartas: 1,
  posiciones: [
    {
      numero: 1,
      nombre: 'Carta',
      descripcion: 'Selecciona una carta',
      x: 50,
      y: 50
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
    setTiradaSeleccionada(tiradaLibre);
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
    // Limpiar cartas al cambiar de baraja en modo libre
    if (modoLibre) {
      setCartasSeleccionadas([]);
    }
  };

  const handleCartaAdd = (carta: CartaSeleccionada) => {
    if (modoLibre) {
      // En modo libre, añadir cartas incrementalmente
      const nuevaPosicion = cartasSeleccionadas.length + 1;
      const nuevaCarta = { ...carta, posicion: nuevaPosicion };
      setCartasSeleccionadas([...cartasSeleccionadas, nuevaCarta]);
      
      // Actualizar la tirada libre para permitir más cartas
      if (tiradaSeleccionada) {
        const nuevaTirada = {
          ...tiradaSeleccionada,
          numeroCartas: nuevaPosicion + 1,
          posiciones: [
            ...tiradaSeleccionada.posiciones,
            {
              numero: nuevaPosicion + 1,
              nombre: `Carta ${nuevaPosicion + 1}`,
              descripcion: 'Selecciona otra carta',
              x: 50,
              y: 50
            }
          ]
        };
        setTiradaSeleccionada(nuevaTirada);
      }
    } else {
      // En modo tirada específica, reemplazar carta en esa posición
      const cartasActualizadas = cartasSeleccionadas.filter(c => c.posicion !== carta.posicion);
      setCartasSeleccionadas([...cartasActualizadas, carta]);
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
      if (modoLibre) {
        // En modo libre, eliminar la última carta y ajustar la tirada
        const nuevasCartas = cartasSeleccionadas.slice(0, -1);
        setCartasSeleccionadas(nuevasCartas);
        
        if (tiradaSeleccionada && nuevasCartas.length > 0) {
          const nuevaTirada = {
            ...tiradaSeleccionada,
            numeroCartas: nuevasCartas.length + 1,
            posiciones: tiradaSeleccionada.posiciones.slice(0, nuevasCartas.length + 1)
          };
          setTiradaSeleccionada(nuevaTirada);
        } else if (nuevasCartas.length === 0) {
          setTiradaSeleccionada(tiradaLibre);
        }
      } else {
        // En modo tirada específica, eliminar la carta de mayor posición
        const cartaConMayorPosicion = cartasSeleccionadas.reduce((max, carta) => 
          carta.posicion > max.posicion ? carta : max
        );
        setCartasSeleccionadas(cartasSeleccionadas.filter(c => c.posicion !== cartaConMayorPosicion.posicion));
      }
    }
  };

  const handleLimpiarCartas = () => {
    setCartasSeleccionadas([]);
    if (modoLibre) {
      setTiradaSeleccionada(tiradaLibre);
    }
  };

  const handleVolver = () => {
    if (vistaActual === 'cartas') {
      if (modoLibre) {
        setVistaActual('inicio');
        setModoLibre(false);
        setTiradaSeleccionada(null);
        setCartasSeleccionadas([]);
      } else {
        setVistaActual('tiradas');
      }
    } else if (vistaActual === 'interpretacion') {
      setVistaActual('cartas');
    } else {
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

  if (vistaActual === 'interpretacion' && tiradaSeleccionada) {
    return (
      <InterpretacionCartas
        tirada={tiradaSeleccionada}
        cartasSeleccionadas={cartasSeleccionadas}
        onVolver={handleVolver}
        modoLibre={modoLibre}
      />
    );
  }

  if (vistaActual === 'cartas' && tiradaSeleccionada) {
    return (
      <CartaSelector
        tirada={tiradaSeleccionada}
        baraja={barajaSeleccionada}
        cartasSeleccionadas={cartasSeleccionadas}
        onCartaAdd={handleCartaAdd}
        onCartaToggle={handleCartaToggle}
        onVolver={handleVolver}
        onInterpretarCartas={handleInterpretarCartas}
        onLimpiarCartas={handleLimpiarCartas}
        onDeshacerUltimaCarta={handleDeshacerUltimaCarta}
        puedeIrAInterpretacion={puedeIrAInterpretacion()}
        modoLibre={modoLibre}
        onCambiarBaraja={handleCambiarBaraja}
      />
    );
  }

  if (vistaActual === 'tiradas') {
    return (
      <TiradaSelector
        onTiradaSelect={handleTiradaSelect}
        onVolver={handleVolver}
      />
    );
  }

  return (
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
  );
};

export default Index;
