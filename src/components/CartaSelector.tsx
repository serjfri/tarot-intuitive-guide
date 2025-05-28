import React, { useState, useMemo } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { ChevronLeft, Copy, Trash, Undo2 } from "lucide-react";
import { Tirada, CartaSeleccionada } from '@/pages/Index';
import { useToast } from "@/hooks/use-toast";

// --- IMPORTACIONES DE DATOS DESDE cardNames.ts ---
import { cardNames } from '@/data/cardNames';
// --- FIN DE IMPORTACIONES DE DATOS ---

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
  onCambiarBaraja?: (baraja: 'tradicional' | 'osho') => void;
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
  onCambiarBaraja
}) => {
  const [posicionActual, setPosicionActual] = useState(1);
  const [categoriaSeleccionada, setCategoriaSeleccionada] = useState<'mayores' | 'menores' | null>(null);
  const [letraSeleccionada, setLetraSeleccionada] = useState<string>('');
  const [paloSeleccionado, setPaloSeleccionado] = useState<string>('');
  const { toast } = useToast();

  const arcanosMayores = useMemo(() => cardNames.filter(c => c.baraja === 'tradicional' && (c.id.startsWith('EL_') || c.id.startsWith('LA_') || c.id.startsWith('LOS_') || c.id === 'EL_LOCO')), []);
  const arcanosMenores = useMemo(() => cardNames.filter(c => c.baraja === 'tradicional' && (c.id.includes('_DE_BASTOS') || c.id.includes('_DE_COPAS') || c.id.includes('_DE_ESPADAS') || c.id.includes('_DE_OROS'))), []);
  const cartasOsho = useMemo(() => cardNames.filter(c => c.baraja === 'osho'), []);

  const palos = ['Bastos', 'Copas', 'Espadas', 'Oros'];

  // Normaliza caracteres acentuados para la primera letra
  const getFirstLetterForSorting = (name: string): string => {
    const cleanedName = name
      .replace(/^(El|La|Los|Las)\s+/i, '')
      .trim();
    return cleanedName.normalize("NFD").replace(/[\u0300-\u036f]/g, "").charAt(0).toUpperCase();
  };

  const getLetrasArcanosMayores = useMemo(() => {
    const letters = new Set<string>();
    arcanosMayores.forEach(carta => {
      letters.add(getFirstLetterForSorting(carta.name));
    });
    return Array.from(letters).sort();
  }, [arcanosMayores]);

  const getLetrasOsho = useMemo(() => {
    const letters = new Set<string>();
    cartasOsho.forEach(carta => {
      letters.add(getFirstLetterForSorting(carta.name));
    });
    return Array.from(letters).sort();
  }, [cartasOsho]);

  const filtrarCartasPorLetra = (letra: string, barajaActual: 'tradicional' | 'osho', categoria: 'mayores' | null) => {
    if (barajaActual === 'osho') {
      return cartasOsho
        .filter(carta => getFirstLetterForSorting(carta.name) === letra)
        .sort((a, b) => a.name.localeCompare(b.name));
    } else if (barajaActual === 'tradicional' && categoria === 'mayores') {
      return arcanosMayores
        .filter(carta => getFirstLetterForSorting(carta.name) === letra)
        .sort((a, b) => a.name.localeCompare(b.name));
    }
    return [];
  };

  // Función para obtener el display de la carta menor (As, 2, 3... Rey)
  const getCartaMenorDisplay = (name: string): string => {
    if (name.includes('As')) return 'As';
    if (name.includes('Dos')) return '2';
    if (name.includes('Tres')) return '3';
    if (name.includes('Cuatro')) return '4';
    if (name.includes('Cinco')) return '5';
    if (name.includes('Seis')) return '6';
    if (name.includes('Siete')) return '7';
    if (name.includes('Ocho')) return '8';
    if (name.includes('Nueve')) return '9';
    if (name.includes('Diez')) return '10';
    if (name.includes('Sota')) return 'Sota';
    if (name.includes('Caballo')) return 'Caballero'; // Cambiado a "Caballero"
    if (name.includes('Reina')) return 'Reina';
    if (name.includes('Rey')) return 'Rey';
    return name; // Fallback
  };


  const filtrarCartasPorPalo = (palo: string) => {
    const paloID = palo.toUpperCase();
    return arcanosMenores
      .filter(carta => carta.id.endsWith(`_DE_${paloID}`))
      .sort((a, b) => {
        const getSortValue = (name: string) => {
          if (name.includes('As')) return 1;
          if (name.includes('Dos')) return 2;
          if (name.includes('Tres')) return 3;
          if (name.includes('Cuatro')) return 4;
          if (name.includes('Cinco')) return 5;
          if (name.includes('Seis')) return 6;
          if (name.includes('Siete')) return 7;
          if (name.includes('Ocho')) return 8;
          if (name.includes('Nueve')) return 9;
          if (name.includes('Diez')) return 10;
          if (name.includes('Sota')) return 11;
          if (name.includes('Caballo')) return 12;
          if (name.includes('Reina')) return 13;
          if (name.includes('Rey')) return 14;
          return 99;
        };
        return getSortValue(a.name) - getSortValue(b.name);
      });
  };

  const obtenerSiguientePosicion = () => {
    if (modoLibre) {
      return cartasSeleccionadas.length + 1;
    } else {
      for (let i = 1; i <= tirada.numeroCartas; i++) {
        if (!cartasSeleccionadas.some(c => c.posicion === i)) {
          return i;
        }
      }
      return posicionActual;
    }
  };

  const handleCartaSelect = (idCarta: string) => {
    const posicion = obtenerSiguientePosicion();
    const nuevaCarta: CartaSeleccionada = {
      posicion: posicion,
      carta: idCarta,
      invertida: false,
      baraja: baraja
    };

    onCartaAdd(nuevaCarta);

    if (!modoLibre && posicion < tirada.numeroCartas) {
      setPosicionActual(posicion + 1);
    }

    setCategoriaSeleccionada(null); 
    setLetraSeleccionada('');
    setPaloSeleccionado('');
  };

  const handleDoubleClick = (posicion: number) => {
    if (baraja === 'tradicional') {
      onCartaToggle(posicion);
    }
  };

  const handleCambiarBaraja = (nuevaBaraja: 'tradicional' | 'osho') => {
    if (onCambiarBaraja) {
      onCambiarBaraja(nuevaBaraja);
    }
    setCategoriaSeleccionada(null);
    setLetraSeleccionada('');
    setPaloSeleccionado('');
  };

  const getCardNameById = (id: string) => {
    const card = cardNames.find(c => c.id === id);
    return card ? card.name : id;
  };

  const copiarListaCartas = async () => {
    const lista = cartasSeleccionadas
      .sort((a, b) => a.posicion - b.posicion)
      .map((carta, index) => {
        const nombreDisplay = getCardNameById(carta.carta);
        let prefix = '';

        if (modoLibre) {
          prefix = `${index + 1}. `;
        } else {
          const posicionData = tirada.posiciones.find(p => p.numero === carta.posicion);
          prefix = `${index + 1}. ${posicionData?.nombre || `Carta ${carta.posicion}`}: `;
        }
        
        return `${prefix}${nombreDisplay}${carta.invertida ? ' (Invertida)' : ''}`;
      })
      .join('\n');

    try {
      await navigator.clipboard.writeText(lista);
      toast({
        title: "Lista copiada",
        description: "La lista de cartas se ha copiado al portapapeles",
      });
    } catch (error) {
      toast({
        title: "Error",
        description: "No se pudo copiar la lista al portapapeles",
        variant: "destructive",
      });
    }
  };

  const posicionActualData = modoLibre
    ? { nombre: `Carta ${obtenerSiguientePosicion()}`, descripcion: 'Selecciona una carta' }
    : tirada.posiciones.find(p => p.numero === obtenerSiguientePosicion());

  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-50 via-teal-50 to-emerald-100">
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto space-y-6">
          <div className="text-center">
            <h2 className="text-3xl font-serif text-emerald-900 mb-2">
              Selecciona las Cartas
            </h2>
            <p className="text-emerald-700">
              {tirada.nombre}
            </p>
          </div>

          {/* Progreso de selección */}
          {!modoLibre && (
            <Card className="bg-emerald-50/50 border-emerald-200">
              <CardContent className="pt-6">
                <div className="flex justify-between items-center mb-4">
                  <span className="text-emerald-900 font-medium">
                    Progreso: {cartasSeleccionadas.length}/{tirada.numeroCartas} cartas
                  </span>
                </div>
                <div className="w-full bg-emerald-200 rounded-full h-2">
                  <div
                    className="bg-emerald-600 h-2 rounded-full transition-all duration-300"
                    style={{ width: `${(cartasSeleccionadas.length / tirada.numeroCartas) * 100}%` }}
                  />
                </div>
              </CardContent>
            </Card>
          )}

          {/* Posición actual */}
          {posicionActualData && (
            <Card className="bg-white/80 backdrop-blur-sm border-emerald-200">
              <CardHeader className="pb-4">
                <CardTitle className="text-xl text-emerald-900">
                  {posicionActualData.nombre}
                </CardTitle>
                <p className="text-emerald-600">{posicionActualData.descripcion}</p>
              </CardHeader>
            </Card>
          )}

          {/* Selección de baraja si es modo libre */}
          {modoLibre && (
            <Card className="bg-white/80 backdrop-blur-sm border-emerald-200">
              <CardHeader className="pb-4">
                <CardTitle className="text-lg text-emerald-900">Seleccionar Baraja</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid gap-3 md:grid-cols-2">
                  <Button
                    variant={baraja === 'tradicional' ? "default" : "outline"}
                    className="h-12"
                    onClick={() => handleCambiarBaraja('tradicional')}
                  >
                    Tarot Tradicional
                  </Button>
                  <Button
                    variant={baraja === 'osho' ? "default" : "outline"}
                    className="h-12"
                    onClick={() => handleCambiarBaraja('osho')}
                  >
                    Tarot de Osho
                  </Button>
                </div>
              </CardContent>
            </Card>
          )}

          {/* Selección de cartas */}
          <Card className="bg-white/80 backdrop-blur-sm border-emerald-200">
            <CardHeader className="pb-4">
              <CardTitle className="text-lg text-emerald-900">Seleccionar Carta</CardTitle>
              <div className="flex flex-wrap gap-2">
                {categoriaSeleccionada && (
                  <Badge variant="outline" className="bg-emerald-100">
                    {categoriaSeleccionada === 'mayores' ? 'Arcanos Mayores' : 'Arcanos Menores'}
                  </Badge>
                )}
                {letraSeleccionada && (
                  <Badge variant="outline" className="bg-emerald-100">
                    Letra {letraSeleccionada}
                  </Badge>
                )}
                {paloSeleccionado && (
                  <Badge variant="outline" className="bg-emerald-100">
                    Palo {paloSeleccionado}
                  </Badge>
                )}
              </div>
            </CardHeader>
            <CardContent className="space-y-4">
              {/* Selección para Tarot Tradicional */}
              {baraja === 'tradicional' && (
                <div className="space-y-4">
                  {/* Botones para seleccionar categoría (siempre visibles para tradicional) */}
                  <div className="grid gap-2 grid-cols-2">
                    <Button
                      variant={categoriaSeleccionada === 'mayores' ? "default" : "outline"}
                      className="h-10 text-sm"
                      onClick={() => {
                        setCategoriaSeleccionada('mayores');
                        setLetraSeleccionada('');
                        setPaloSeleccionado('');
                      }}
                    >
                      Arcanos Mayores
                    </Button>
                    <Button
                      variant={categoriaSeleccionada === 'menores' ? "default" : "outline"}
                      className="h-10 text-sm"
                      onClick={() => {
                        setCategoriaSeleccionada('menores');
                        setLetraSeleccionada('');
                        setPaloSeleccionado('');
                      }}
                    >
                      Arcanos Menores
                    </Button>
                  </div>

                  {/* Sección de Selección de Arcanos Mayores o Menores */}
                  {categoriaSeleccionada === 'mayores' && !letraSeleccionada && (
                    <>
                      <label className="block text-sm font-medium text-emerald-900 mb-2">
                        Primera letra
                      </label>
                      <div className="grid grid-cols-6 sm:grid-cols-8 md:grid-cols-10 lg:grid-cols-12 gap-1 justify-items-center">
                        {getLetrasArcanosMayores.map((letra) => (
                          <Button
                            key={letra}
                            variant="outline"
                            className="h-8 w-8 p-0 text-center text-xs flex items-center justify-center"
                            onClick={() => setLetraSeleccionada(letra)}
                          >
                            {letra}
                          </Button>
                        ))}
                      </div>
                    </>
                  )}

                  {/* Botones de palo para Arcanos Menores (siempre visibles si menores seleccionados) */}
                  {categoriaSeleccionada === 'menores' && (
                    <>
                      <label className="block text-sm font-medium text-emerald-900 mb-2">
                        Palo
                      </label>
                      <div className="grid gap-1 grid-cols-4">
                        {palos.map((palo) => (
                          <Button
                            key={palo}
                            variant={paloSeleccionado === palo ? "default" : "outline"}
                            className="h-9 text-sm p-1"
                            onClick={() => setPaloSeleccionado(palo)}
                          >
                            {palo}
                          </Button>
                        ))}
                      </div>
                    </>
                  )}
                </div>
              )}

              {/* Selección para Tarot de Osho (con botones de letra) */}
              {baraja === 'osho' && !letraSeleccionada && (
                <>
                  <label className="block text-sm font-medium text-emerald-900 mb-2">
                    Primera letra
                  </label>
                  <div className="grid grid-cols-6 sm:grid-cols-8 md:grid-cols-10 lg:grid-cols-12 gap-1 justify-items-center">
                    {getLetrasOsho.map((letra) => (
                      <Button
                        key={letra}
                        variant="outline"
                        className="h-8 w-8 p-0 text-center text-xs flex items-center justify-center"
                        onClick={() => setLetraSeleccionada(letra)}
                      >
                        {letra}
                      </Button>
                    ))}
                  </div>
                </>
              )}

              {/* Cartas filtradas por letra o palo */}
              {((baraja === 'tradicional' && categoriaSeleccionada === 'mayores' && letraSeleccionada) ||
                (baraja === 'tradicional' && categoriaSeleccionada === 'menores' && paloSeleccionado) ||
                (baraja === 'osho' && letraSeleccionada)) && (
                  <div>
                    <label className="block text-sm font-medium text-emerald-900 mb-2">
                      Cartas disponibles
                    </label>
                    {/* Contenedor flexible para Arcanos Menores para una distribución óptima */}
                    {baraja === 'tradicional' && categoriaSeleccionada === 'menores' && paloSeleccionado ? (
                       <div className="flex flex-wrap gap-1 justify-center"> {/* Flexbox para mejor distribución */}
                       {filtrarCartasPorPalo(paloSeleccionado).map((carta) => (
                         <Button
                           key={carta.id}
                           variant="outline"
                           className="h-14 w-[50px] p-0 text-center hover:bg-emerald-50 hover:border-emerald-400 flex flex-col items-center justify-center text-sm" // Más pequeño y uniforme
                           onClick={() => handleCartaSelect(carta.id)}
                         >
                           {/* Mostrar nombre de la carta menor */}
                           <span className="font-bold text-base">
                               {getCartaMenorDisplay(carta.name)}
                           </span>
                           {/* Icono del palo en lugar de texto */}
                           {paloSeleccionado === 'Bastos' && <span className="text-xl">♣</span>}
                           {paloSeleccionado === 'Copas' && <span className="text-xl">♥</span>}
                           {paloSeleccionado === 'Espadas' && <span className="text-xl">♠</span>}
                           {paloSeleccionado === 'Oros' && <span className="text-xl">♦</span>}
                         </Button>
                       ))}
                     </div>
                    ) : (
                      <div className="grid gap-1 grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 xl:grid-cols-7 justify-items-center">
                        {/* Cartas por letra (Mayores o Osho) */}
                        {(letraSeleccionada && (categoriaSeleccionada === 'mayores' || baraja === 'osho')) &&
                          filtrarCartasPorLetra(
                            letraSeleccionada,
                            baraja,
                            baraja === 'osho' ? null : categoriaSeleccionada as 'mayores' | null
                          ).map((carta) => (
                            <Button
                              key={carta.id}
                              variant="outline"
                              className="h-auto w-full max-w-[120px] p-1 text-center hover:bg-emerald-50 hover:border-emerald-400 text-xs truncate"
                              onClick={() => handleCartaSelect(carta.id)}
                            >
                              {carta.name}
                            </Button>
                          ))
                        }
                      </div>
                    )}
                  </div>
                )}

              {/* Botón para volver a la selección de letra/palo */}
              {(letraSeleccionada || paloSeleccionado) && (
                <Button
                  variant="ghost"
                  className="text-emerald-700 hover:bg-emerald-50"
                  onClick={() => {
                    if (paloSeleccionado) {
                      setPaloSeleccionado('');
                    } else if (letraSeleccionada) {
                      setLetraSeleccionada('');
                    }
                  }}
                >
                  <ChevronLeft className="w-4 h-4 mr-2" />
                  Volver a seleccionar
                </Button>
              )}
            </CardContent>
          </Card>

          {/* Cartas seleccionadas */}
          {cartasSeleccionadas.length > 0 && (
            <Card className="bg-white/80 backdrop-blur-sm border-emerald-200">
              <CardHeader className="pb-4">
                <CardTitle className="text-lg text-emerald-900">
                  Cartas Seleccionadas ({cartasSeleccionadas.length})
                </CardTitle>
                {baraja === 'tradicional' && (
                  <p className="text-sm text-emerald-600">
                    Doble click para invertir una carta
                  </p>
                )}
              </CardHeader>
              <CardContent>
                <div className="grid gap-3 md:grid-cols-2 lg:grid-cols-3">
                  {cartasSeleccionadas
                    .sort((a, b) => a.posicion - b.posicion)
                    .map((carta) => {
                      const posicionData = tirada.posiciones.find(p => p.numero === carta.posicion);
                      const displayPrefix = modoLibre 
                        ? `${carta.posicion}. `
                        : `${carta.posicion}. ${posicionData?.nombre || `Carta ${carta.posicion}`}: `;

                      return (
                        <div
                          key={carta.posicion}
                          className={`p-3 rounded border cursor-pointer transition-all ${
                            carta.invertida
                              ? 'bg-red-50 border-red-200'
                              : 'bg-green-50 border-green-200'
                          }`}
                          onDoubleClick={() => handleDoubleClick(carta.posicion)}
                        >
                          <div className="text-sm font-medium text-emerald-900">
                            {displayPrefix}
                            {getCardNameById(carta.carta)}
                          </div>
                          <div className="text-sm text-emerald-700">
                            {carta.invertida && ' (Invertida)'}
                          </div>
                        </div>
                      );
                    })}
                </div>
              </CardContent>
            </Card>
          )}

          {/* Botones de acción */}
          <div className="flex flex-wrap gap-4 justify-center">
            <Button
              variant="outline"
              className="text-emerald-700 border-emerald-300 hover:bg-emerald-50"
              onClick={onVolver}
            >
              <ChevronLeft className="w-4 h-4 mr-2" />
              Volver
            </Button>

            {cartasSeleccionadas.length > 0 && (
              <>
                <Button
                  variant="outline"
                  className="text-blue-700 border-blue-300 hover:bg-blue-50"
                  onClick={onDeshacerUltimaCarta}
                >
                  <Undo2 className="w-4 h-4 mr-2" />
                  Deshacer Última
                </Button>

                <Button
                  variant="outline"
                  className="text-emerald-700 border-emerald-300 hover:bg-emerald-50"
                  onClick={copiarListaCartas}
                >
                  <Copy className="w-4 h-4 mr-2" />
                  Copiar Lista
                </Button>

                <Button
                  variant="outline"
                  className="text-red-700 border-red-300 hover:bg-red-50"
                  onClick={onLimpiarCartas}
                >
                  <Trash className="w-4 h-4 mr-2" />
                  Limpiar
                </Button>
              </>
            )}

            {puedeIrAInterpretacion && (
              <Button
                size="lg"
                className="bg-emerald-600 hover:bg-emerald-700 text-white px-8 py-3"
                onClick={onInterpretarCartas}
              >
                Interpretar Cartas
              </Button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartaSelector;