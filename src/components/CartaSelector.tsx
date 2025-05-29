// src/components/CartaSelector.tsx
import React, { useState, useEffect, useMemo } from 'react';
import { Button } from "@/components/ui/button";
import { ChevronLeft, Check, X, Shuffle, ArrowRightCircle, Sparkles, Filter, RefreshCcw } from "lucide-react";
import { Badge } from "@/components/ui/badge";
// Asumo que estos imports son correctos para tu setup de shadcn/ui
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Card, CardContent } from "@/components/ui/card";
// REMOVIDO: import Image from 'next/image'; // Ya no se usa para imágenes

// Asegúrate de que estas rutas sean correctas para tu proyecto
import { Tirada, CartaSeleccionada } from '@/pages/Index';
import { traditionalMeanings, TraditionalCardMeaning } from '@/data/traditionalMeanings';
import { oshoMeanings, OshoCardMeaning } from '@/data/oshoMeanings';

// Define un tipo unión para las cartas disponibles
type AvailableCard = TraditionalCardMeaning | OshoCardMeaning;

interface CartaSelectorProps {
  tirada: Tirada;
  baraja: 'tradicional' | 'osho';
  cartasSeleccionadas: CartaSeleccionada[];
  onCartaAdd: (carta: CartaSeleccionada) => void;
  onCartaToggle: (posicion: number) => void;
  onVolver: () => void;
  onInterpretarCartas: () => void;
  onLimpiarCartas: () => void;
  onDeshacerUltimaCarta: () => void;
  puedeIrAInterpretacion: boolean;
  modoLibre: boolean;
  onCambiarBaraja: (baraja: 'tradicional' | 'osho') => void;
}

const CartaSelector: React.FC<CartaSelectorProps> = ({
  tirada,
  baraja,
  cartasSeleccionadas,
  onCartaAdd,
  onCartaToggle,
  onVolver,
  onInterpretarCartas,
  onLimpiarCartas,
  onDeshacerUltimaCarta,
  puedeIrAInterpretacion,
  modoLibre,
  onCambiarBaraja,
}) => {
  // Estado para el filtro de arcanos en baraja tradicional (botones de letras)
  const [filtroArcano, setFiltroArcano] = useState<'all' | 'major' | 'minor' | 'oros' | 'copas' | 'espadas' | 'bastos'>('all');
  
  // Estado para el mazo barajado y la carta aleatoria actual
  const [mazoAleatorio, setMazoAleatorio] = useState<string[]>([]);
  const [cartaActualAleatoria, setCartaActualAleatoria] = useState<string | null>(null);

  // Efecto para barajar el mazo y resetear el filtro cuando la baraja cambia
  useEffect(() => {
    handleBarajarMazo();
    setFiltroArcano('all'); // Resetea el filtro al cambiar de baraja
  }, [baraja]);

  // Función para barajar el mazo
  const handleBarajarMazo = () => {
    const allCardIds = baraja === 'tradicional'
      ? traditionalMeanings.map(c => c.id)
      : oshoMeanings.map(c => c.id);

    const shuffled = [...allCardIds].sort(() => Math.random() - 0.5);
    setMazoAleatorio(shuffled);
    setCartaActualAleatoria(null); // Reinicia la carta aleatoria mostrada
  };

  // Función para sacar una carta aleatoria del mazo barajado
  const handleSacarCartaAleatoria = () => {
    if (mazoAleatorio.length > 0) {
      const nextCardId = mazoAleatorio.shift(); // Saca la primera carta del mazo
      if (nextCardId) {
        setCartaActualAleatoria(nextCardId);
      }
      setMazoAleatorio([...mazoAleatorio]); // Actualiza el estado para re-renderizar
    } else {
      alert('El mazo se ha agotado. Barajando de nuevo.');
      handleBarajarMazo();
    }
  };

  // Memoización de las cartas disponibles según la baraja y el filtro
  const availableCards: AvailableCard[] = useMemo(() => {
    let cards: AvailableCard[] = baraja === 'tradicional' ? traditionalMeanings : oshoMeanings;

    if (baraja === 'tradicional' && filtroArcano !== 'all') {
      if (filtroArcano === 'major') {
        cards = cards.filter(c => (c as TraditionalCardMeaning).arcano === 'Mayor');
      } else if (filtroArcano === 'minor') {
        cards = cards.filter(c => (c as TraditionalCardMeaning).arcano === 'Menor');
      } else if (['oros', 'copas', 'espadas', 'bastos'].includes(filtroArcano)) {
        cards = cards.filter(c => (c as TraditionalCardMeaning).elemento?.toLowerCase() === filtroArcano);
      }
    }
    return cards;
  }, [baraja, filtroArcano]);

  const totalCartasNecesarias = tirada.numeroCartas;
  const cartasFaltantes = totalCartasNecesarias - cartasSeleccionadas.length;
  const mostrarBotonInterpretar = puedeIrAInterpretacion;

  // Función auxiliar para obtener el nombre de la carta para visualización
  const getCardNameForDisplay = (cardId: string, currentBaraja: 'tradicional' | 'osho') => {
    const cardData = currentBaraja === 'tradicional'
      ? traditionalMeanings.find(c => c.id === cardId)
      : oshoMeanings.find(c => c.id === cardId);
    return cardData?.nombre || cardId;
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-yellow-50 via-green-50 to-teal-100 relative py-8">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto space-y-6">
          {/* Encabezado y selector de baraja - Botón Volver YA NO ESTÁ AQUÍ */}
          <div className="flex items-center justify-center mb-6">
            <h2 className="text-3xl font-serif text-green-900 text-center">
              Selección de Cartas
            </h2>
          </div>

          <div className="flex justify-center mb-4 space-x-4">
            <Button
              variant={baraja === 'tradicional' ? 'default' : 'outline'}
              onClick={() => onCambiarBaraja('tradicional')}
              className={baraja === 'tradicional' ? 'bg-green-600 hover:bg-green-700 text-white' : 'text-green-700 border-green-300 hover:bg-green-50'}
            >
              Tarot Tradicional
            </Button>
            <Button
              variant={baraja === 'osho' ? 'default' : 'outline'}
              onClick={() => onCambiarBaraja('osho')}
              className={baraja === 'osho' ? 'bg-green-600 hover:bg-green-700 text-white' : 'text-green-700 border-green-300 hover:bg-green-50'}
            >
              Tarot Osho Zen
            </Button>
          </div>

          <p className="text-center text-green-700 mb-4">
            {modoLibre ? (
              `Selecciona ${cartasSeleccionadas.length > 0 ? 'más cartas o ' : ''}tu primera carta.`
            ) : (
              `Selecciona ${cartasFaltantes} de ${totalCartasNecesarias} cartas para la tirada de "${tirada.nombre}"`
            )}
          </p>

          {/* Botones de acción */}
          <div className="flex flex-wrap justify-center gap-3 mb-6">
            <Button
              onClick={handleBarajarMazo}
              variant="outline"
              className="text-blue-700 border-blue-300 hover:bg-blue-50"
            >
              <Shuffle className="w-4 h-4 mr-2" /> Barajar Mazo
            </Button>
            <Button
              onClick={handleSacarCartaAleatoria}
              variant="outline"
              className="text-purple-700 border-purple-300 hover:bg-purple-50"
            >
              <Sparkles className="w-4 h-4 mr-2" /> Sacar Carta Aleatoria
            </Button>
            {modoLibre && cartasSeleccionadas.length > 0 && (
              <Button
                onClick={onDeshacerUltimaCarta}
                variant="outline"
                className="text-orange-700 border-orange-300 hover:bg-orange-50"
              >
                <RefreshCcw className="w-4 h-4 mr-2" /> Deshacer Última
              </Button>
            )}
            {cartasSeleccionadas.length > 0 && (
              <Button
                onClick={onLimpiarCartas}
                variant="outline"
                className="text-red-700 border-red-300 hover:bg-red-50"
              >
                <X className="w-4 h-4 mr-2" /> Limpiar Selección
              </Button>
            )}
            <Button
              onClick={onInterpretarCartas}
              disabled={!mostrarBotonInterpretar}
              className={`bg-green-600 hover:bg-green-700 text-white font-medium ${!mostrarBotonInterpretar ? 'opacity-50 cursor-not-allowed' : ''}`}
            >
              Interpretar Cartas <ArrowRightCircle className="w-4 h-4 ml-2" />
            </Button>
          </div>

          {/* Carta Aleatoria Mostrada (sin imagen) */}
          {cartaActualAleatoria && (
            <div className="text-center mb-6">
              <h3 className="text-xl font-semibold text-green-800 mb-2">Carta Sacada del Mazo:</h3>
              <div className="inline-block relative w-32 h-56 border-2 border-yellow-500 rounded-lg overflow-hidden shadow-lg flex items-center justify-center bg-gray-100 p-2">
                <p className="text-center text-lg font-bold text-green-900 leading-tight">
                  {getCardNameForDisplay(cartaActualAleatoria, baraja)}
                </p>
              </div>
              <Button
                onClick={() => {
                  const posicionAsignada = modoLibre
                    ? cartasSeleccionadas.length + 1
                    : tirada.posiciones.find(p => !cartasSeleccionadas.some(sc => sc.posicion === p.numero))?.numero || 1;

                  onCartaAdd({
                    posicion: posicionAsignada,
                    carta: cartaActualAleatoria,
                    invertida: Math.random() < 0.5 && baraja === 'tradicional',
                    baraja: baraja,
                  });
                  setCartaActualAleatoria(null);
                }}
                className="mt-4 bg-yellow-500 hover:bg-yellow-600 text-white"
              >
                <Check className="w-4 h-4 mr-2" /> Añadir esta Carta a la Lectura
              </Button>
            </div>
          )}

          {/* BOTONES DE FILTRO POR LETRA (para baraja tradicional) */}
          {baraja === 'tradicional' && (
            <div className="flex flex-wrap justify-center items-center gap-2 mb-6 p-4 bg-white/70 rounded-lg shadow-inner border border-green-200">
              <span className="text-green-800 font-medium self-center mr-2">Filtrar por:</span>
              <Button
                variant={filtroArcano === 'all' ? 'default' : 'outline'}
                onClick={() => setFiltroArcano('all')}
                className={filtroArcano === 'all' ? 'bg-green-600 text-white' : 'text-green-700 border-green-300'}
              >
                Todas
              </Button>
              <Button
                variant={filtroArcano === 'major' ? 'default' : 'outline'}
                onClick={() => setFiltroArcano('major')}
                className={filtroArcano === 'major' ? 'bg-green-600 text-white' : 'text-green-700 border-green-300'}
              >
                Arcanos Mayores
              </Button>
              <Button
                variant={filtroArcano === 'minor' ? 'default' : 'outline'}
                onClick={() => setFiltroArcano('minor')}
                className={filtroArcano === 'minor' ? 'bg-green-600 text-white' : 'text-green-700 border-green-300'}
              >
                Arcanos Menores
              </Button>
              <Button
                variant={filtroArcano === 'oros' ? 'default' : 'outline'}
                onClick={() => setFiltroArcano('oros')}
                className={filtroArcano === 'oros' ? 'bg-green-600 text-white' : 'text-green-700 border-green-300'}
              >
                Oros
              </Button>
              <Button
                variant={filtroArcano === 'copas' ? 'default' : 'outline'}
                onClick={() => setFiltroArcano('copas')}
                className={filtroArcano === 'copas' ? 'bg-green-600 text-white' : 'text-green-700 border-green-300'}
              >
                Copas
              </Button>
              <Button
                variant={filtroArcano === 'espadas' ? 'default' : 'outline'}
                onClick={() => setFiltroArcano('espadas')}
                className={filtroArcano === 'espadas' ? 'bg-green-600 text-white' : 'text-green-700 border-green-300'}
              >
                Espadas
              </Button>
              <Button
                variant={filtroArcano === 'bastos' ? 'default' : 'outline'}
                onClick={() => setFiltroArcano('bastos')}
                className={filtroArcano === 'bastos' ? 'bg-green-600 text-white' : 'text-green-700 border-green-300'}
              >
                Bastos
              </Button>
            </div>
          )}
          {/* FIN BOTONES DE FILTRO */}

          {/* Display de las cartas disponibles (sin imagen) */}
          <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 xl:grid-cols-7 gap-4">
            {availableCards.map((cardData) => {
              const isSelected = cartasSeleccionadas.some(
                (sc) => sc.carta === cardData.id && sc.baraja === baraja
              );

              return (
                <Card
                  key={cardData.id}
                  className={`relative cursor-pointer transition-all duration-200
                    ${isSelected ? 'border-4 border-green-500 shadow-xl scale-105' : 'border-green-200 hover:border-green-400 hover:shadow-lg'}
                    ${!modoLibre && cartasSeleccionadas.length >= totalCartasNecesarias && !isSelected ? 'opacity-50 pointer-events-none' : ''}
                  `}
                  onClick={() => {
                    if (modoLibre || cartasSeleccionadas.length < totalCartasNecesarias || isSelected) {
                      const posicionAsignada = modoLibre
                        ? cartasSeleccionadas.length + 1
                        : tirada.posiciones.find(p => !cartasSeleccionadas.some(sc => sc.posicion === p.numero))?.numero ||
                          (cartasSeleccionadas.length > 0 ? Math.max(...cartasSeleccionadas.map(c => c.posicion)) + 1 : 1);

                      onCartaAdd({
                        posicion: posicionAsignada,
                        carta: cardData.id,
                        invertida: Math.random() < 0.5 && baraja === 'tradicional',
                        baraja: baraja,
                      });
                    }
                  }}
                >
                  <CardContent className="p-2 flex flex-col items-center justify-center h-full">
                    {/* Placeholder para la imagen: solo el nombre de la carta */}
                    <div className="relative w-full h-32 md:h-40 lg:h-48 rounded-md overflow-hidden mb-2 flex items-center justify-center bg-gray-100 p-2 text-center">
                      <p className="text-sm font-semibold text-green-800 line-clamp-3">
                        {cardData.nombre}
                      </p>
                    </div>
                    <p className="text-xs text-center font-medium text-green-800 line-clamp-2">
                      {cardData.nombre}
                    </p>
                    {isSelected && (
                      <Badge className="mt-1 bg-green-500 text-white">
                        Seleccionada
                      </Badge>
                    )}
                  </CardContent>
                </Card>
              );
            })}
          </div>

          {/* Cartas Seleccionadas para la Tirada (Visor - sin imagen) */}
          <h3 className="text-2xl font-serif text-green-900 mt-8 mb-4 text-center">
            Cartas en tu Lectura ({cartasSeleccionadas.length}/{modoLibre ? '∞' : totalCartasNecesarias})
          </h3>
          <div className="flex flex-wrap justify-center gap-4 p-4 bg-white/70 rounded-lg shadow-inner border border-green-200">
            {cartasSeleccionadas
              .sort((a, b) => a.posicion - b.posicion)
              .map((cartaSeleccionada) => {
                const currentCardData = cartaSeleccionada.baraja === 'tradicional'
                  ? traditionalMeanings.find(c => c.id === cartaSeleccionada.carta)
                  : oshoMeanings.find(c => c.id === cartaSeleccionada.carta);

                const posicionNombre = tirada.posiciones.find(p => p.numero === cartaSeleccionada.posicion)?.nombre || `Carta ${cartaSeleccionada.posicion}`;

                return (
                  <div key={cartaSeleccionada.posicion} className="relative w-32 md:w-36 lg:w-40 flex flex-col items-center">
                    {/* Placeholder para la imagen: solo el nombre de la carta */}
                    <div className="relative w-full h-48 md:h-56 lg:h-64 rounded-md overflow-hidden shadow-lg border border-green-300 flex items-center justify-center bg-gray-100 p-2 text-center">
                      <p className={`text-lg font-bold text-green-900 leading-tight ${cartaSeleccionada.invertida ? 'rotate-180' : ''}`}>
                        {currentCardData?.nombre || 'Carta'}
                      </p>
                    </div>
                    <p className="mt-2 text-sm text-center font-semibold text-green-900">
                      {posicionNombre}
                    </p>
                    <p className="text-xs text-center text-green-700">
                      {currentCardData?.nombre}
                    </p>
                    {cartaSeleccionada.baraja === 'tradicional' && (
                      <Button
                        size="sm"
                        variant="ghost"
                        className="mt-1 text-xs text-blue-600 hover:text-blue-800"
                        onClick={() => onCartaToggle(cartaSeleccionada.posicion)}
                      >
                        {cartaSeleccionada.invertida ? 'Derecha' : 'Invertir'}
                      </Button>
                    )}
                  </div>
                );
              })}
            {cartasSeleccionadas.length === 0 && (
              <p className="text-center text-green-600 italic">
                Aún no has seleccionado ninguna carta.
              </p>
            )}
          </div>

          {/* BOTÓN VOLVER (movido a la parte inferior) */}
          <div className="flex justify-center mt-8 pb-4">
            <Button
              variant="outline"
              className="text-green-700 border-green-300 hover:bg-green-50"
              onClick={onVolver}
            >
              <ChevronLeft className="w-4 h-4 mr-2" />
              Volver
            </Button>
          </div>

        </div>
      </div>
    </div>
  );
};

export default CartaSelector;