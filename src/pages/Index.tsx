// src/pages/Index.tsx
import React, { useState, useEffect } from 'react'; // Asegúrate de importar useEffect
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { CreditCard, Layers } from "lucide-react";
import CartaSelector from '@/components/CartaSelector'; // Importa directamente como CartaSelector
import TiradaSelector from '@/components/TiradaSelector';
import InterpretacionCartas from '@/components/InterpretacionCartas';

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
  posicion: number; // Esto será el índice basado en 0 o el número de la posición de la tirada
  carta: string; // id de la carta
  invertida: boolean;
  baraja: 'tradicional' | 'osho';
}

// Tirada por defecto para selección libre
const tiradaLibreBase: Tirada = { // Renombrado para evitar conflicto con la variable tiradaLibre del estado
  id: 'libre',
  nombre: 'Selección Libre',
  descripcion: 'Selecciona las cartas que desees sin un patrón específico',
  numeroCartas: 1, // Se ajustará dinámicamente
  posiciones: [
    {
      numero: 1,
      nombre: 'Carta 1', // Nombre por defecto para la primera carta libre
      descripcion: 'Selecciona la primera carta libre',
    }
  ]
};

const Index = () => {
  const [vistaActual, setVistaActual] = useState<'inicio' | 'seleccionLibre' | 'tiradas' | 'cartas' | 'interpretacion'>('inicio');
  const [tiradaSeleccionada, setTiradaSeleccionada] = useState<Tirada | null>(null);
  const [barajaSeleccionada, setBarajaSeleccionada] = useState<'tradicional' | 'osho'>('tradicional');
  const [cartasSeleccionadas, setCartasSeleccionadas] = useState<CartaSeleccionada[]>([]);
  const [modoLibre, setModoLibre] = useState(false);

  // Estado para la posición actual que se está seleccionando en la tirada
  // Este es el que pasaremos como `posicionInicial` al CartaSelector
  // ¡Este estado ya NO es necesario pasarlo como prop a CartaSelector para su lógica interna de avance,
  // pero sí para otras comprobaciones o visualizaciones si las tuviera!
  // Lo mantenemos aquí para otras lógicas de Index.tsx si es necesario.
  const [posicionActualParaSelector, setPosicionActualParaSelector] = useState(0); // Basado en índice 0

  // Efecto para resetear la posición cuando la tirada o el modo cambian significativamente
  useEffect(() => {
    if (vistaActual === 'cartas' && !modoLibre && tiradaSeleccionada) {
      // Si entramos en modo tirada específica, la posición inicial es 0 (primera carta de la tirada)
      setPosicionActualParaSelector(0);
    } else if (vistaActual === 'cartas' && modoLibre) {
      // En modo libre, la posición inicial es el número de cartas ya seleccionadas
      setPosicionActualParaSelector(cartasSeleccionadas.length);
    }
    // Cuando se vuelve a 'inicio' o se limpia, la posición se reseteará implícitamente al salir de 'cartas'
  }, [vistaActual, modoLibre, tiradaSeleccionada, cartasSeleccionadas.length]);


  const handleSeleccionLibre = () => {
    setModoLibre(true);
    // Para modo libre, inicializamos con una "tirada" que crecerá dinámicamente
    setTiradaSeleccionada({ ...tiradaLibreBase, numeroCartas: 1 }); // Empezar con 1 carta
    setCartasSeleccionadas([]);
    setBarajaSeleccionada('tradicional'); // Reset to default
    setVistaActual('cartas');
    setPosicionActualParaSelector(0); // La primera carta en modo libre es la posición 0 (o 1 en UI)
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
    setPosicionActualParaSelector(0); // Siempre comienza en la posición 0 para una nueva tirada
  };

  const handleCambiarBaraja = (nuevaBaraja: 'tradicional' | 'osho') => {
    setBarajaSeleccionada(nuevaBaraja);
    setCartasSeleccionadas([]); // Limpiar cartas al cambiar de baraja
    if (modoLibre) {
      // Resetear la "tirada" libre al estado inicial (solo la primera posición)
      setTiradaSeleccionada({ ...tiradaLibreBase, numeroCartas: 1 });
      setPosicionActualParaSelector(0);
    } else if (tiradaSeleccionada) {
        // En tirada específica, la baraja cambia pero la tirada y posiciones se mantienen
        // Se resetea solo la selección de cartas, la posición vuelve a 0
        setPosicionActualParaSelector(0);
    }
  };

  const handleCartaAdd = (carta: CartaSeleccionada) => {
    if (modoLibre) {
      // En modo libre, la 'posicion' de la carta es el índice actual + 1
      const nuevaCartaConPosicion = { ...carta, posicion: cartasSeleccionadas.length + 1 };
      setCartasSeleccionadas(prevCartas => [...prevCartas, nuevaCartaConPosicion]);

      // Actualizar la "tirada libre" para indicar que hay una nueva posición disponible
      // La "siguiente posición" que debe seleccionar el CartaSelector es la longitud actual de `cartasSeleccionadas` (después de añadir)
      setTiradaSeleccionada(prevTirada => {
        const currentNumCartas = prevTirada?.numeroCartas || 0;
        const nextNumCartas = currentNumCartas + 1; // Incrementamos para la siguiente carta
        const newPosicionData = {
          numero: nextNumCartas,
          nombre: `Carta ${nextNumCartas}`,
          descripcion: 'Selecciona otra carta',
        };
        return {
          ...(prevTirada || tiradaLibreBase),
          numeroCartas: nextNumCartas,
          posiciones: [...(prevTirada?.posiciones || tiradaLibreBase.posiciones), newPosicionData]
        };
      });
      // Actualizar la posición para el CartaSelector en la próxima renderización
      setPosicionActualParaSelector(prevPos => prevPos + 1);

    } else {
      // En modo tirada específica, la `carta.posicion` ya viene definida por el CartaSelector
      setCartasSeleccionadas(prevCartas => {
        // Si ya existe una carta en esa posición, la reemplazamos
        const existe = prevCartas.some(c => c.posicion === carta.posicion);
        if (existe) {
          return prevCartas.map(c => c.posicion === carta.posicion ? carta : c);
        } else {
          return [...prevCartas, carta];
        }
      });
      // Avanzar la posición en el selector si no hemos alcanzado el número de cartas de la tirada
      if (tiradaSeleccionada && (posicionActualParaSelector + 1) < tiradaSeleccionada.numeroCartas) {
        setPosicionActualParaSelector(prevPos => prevPos + 1);
      } else if (tiradaSeleccionada && (posicionActualParaSelector + 1) === tiradaSeleccionada.numeroCartas) {
        // Esto significa que hemos seleccionado la última carta de la tirada.
        // Aquí podríamos ir directamente a la interpretación si quisiéramos.
        // Por ahora, simplemente actualizamos la posición para indicar que se han completado.
        setPosicionActualParaSelector(prevPos => prevPos + 1);
      }
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
        // En modo libre, ajustamos la "tirada" y la posición
        if (nuevasCartas.length === 0) {
          setTiradaSeleccionada(tiradaLibreBase);
          setPosicionActualParaSelector(0);
        } else {
          const ultimaPosicionNum = nuevasCartas.length; // La última carta ahora es la que tiene este número de posición
          setTiradaSeleccionada(prevTirada => ({
            ...(prevTirada || tiradaLibreBase),
            numeroCartas: ultimaPosicionNum,
            // Ajustar las posiciones para eliminar la última
            posiciones: prevTirada?.posiciones.slice(0, ultimaPosicionNum) || tiradaLibreBase.posiciones.slice(0, ultimaPosicionNum)
          }));
          setPosicionActualParaSelector(ultimaPosicionNum);
        }
      } else {
        // En modo tirada específica, la posición actual debe retroceder para permitir re-seleccionar la última carta
        if (posicionActualParaSelector > 0) {
            setPosicionActualParaSelector(prevPos => prevPos - 1);
        } else {
            // Si ya estamos en la primera posición y deshacemos, simplemente queda en 0
            setPosicionActualParaSelector(0);
        }
      }
    } else {
        // Si no hay cartas, asegurar que la posición actual sea 0
        setPosicionActualParaSelector(0);
    }
  };

  const handleLimpiarCartas = () => {
    setCartasSeleccionadas([]);
    if (modoLibre) {
      setTiradaSeleccionada(tiradaLibreBase); // Restablecer a la tirada libre inicial
      setPosicionActualParaSelector(0);
    } else {
        // En modo tirada específica, al limpiar, volvemos a la primera posición
        setPosicionActualParaSelector(0);
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
        setPosicionActualParaSelector(0); // Resetear al volver a inicio
      } else {
        setVistaActual('tiradas');
        // No limpiar tiradaSeleccionada aquí, TiradaSelector la necesita
        setCartasSeleccionadas([]); // Limpiar cartas al volver a selector de tiradas
        setPosicionActualParaSelector(0); // Resetear al volver a selector de tiradas
      }
    } else if (vistaActual === 'interpretacion') {
      setVistaActual('cartas');
      // No reseteamos cartas ni posición al volver de interpretación, queremos mantenerlas
    } else { // Si estamos en 'tiradas'
      setVistaActual('inicio');
      setTiradaSeleccionada(null); // Asegurarse de limpiar la tirada seleccionada
      setCartasSeleccionadas([]);
      setPosicionActualParaSelector(0); // Resetear al volver a inicio
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

  return (
    <div className="relative min-h-screen">
      {vistaActual === 'interpretacion' && tiradaSeleccionada && (
        <InterpretacionCartas
          tirada={tiradaSeleccionada}
          cartasSeleccionadas={cartasSeleccionadas}
          onVolver={handleVolver}
          modoLibre={modoLibre}
          baraja={barajaSeleccionada}
        />
      )}

      {vistaActual === 'cartas' && tiradaSeleccionada && (
        <CartaSelector // <--- Asegúrate de que este es el nombre del componente
          tirada={tiradaSeleccionada}
          baraja={barajaSeleccionada}
          cartasSeleccionadas={cartasSeleccionadas} // <--- AÑADE/DESCOMENTA ESTA LÍNEA
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
      )}

      {vistaActual === 'tiradas' && (
        <TiradaSelector
          onTiradaSelect={handleTiradaSelect}
          onVolver={handleVolver}
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