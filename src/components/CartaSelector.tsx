import React, { useState } from 'react';
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

  // --- OBTENER DATOS DE cardNames.ts ---
  const arcanosMayores = cardNames.filter(c => c.baraja === 'tradicional' && c.id.startsWith('EL_') || c.id.startsWith('LA_') || c.id.startsWith('LOS_'));
  const arcanosMenores = cardNames.filter(c => c.baraja === 'tradicional' && (c.id.includes('_DE_BASTOS') || c.id.includes('_DE_COPAS') || c.id.includes('_DE_ESPADAS') || c.id.includes('_DE_OROS')));
  const cartasOsho = cardNames.filter(c => c.baraja === 'osho');

  const palos = ['Bastos', 'Copas', 'Espadas', 'Oros'];
  // No necesitamos cartasPorPalo explícitamente aquí, ya que los nombres completos están en cardNames.ts

  // Función auxiliar para obtener la primera letra significativa
  const getFirstLetterForSorting = (name: string): string => {
    // Eliminar artículos y espacios extra para obtener la primera letra real
    const cleanedName = name
        .replace(/^(El|La|Los|Las)\s+/i, '') // Eliminar artículos
        .trim();
    return cleanedName.charAt(0).toUpperCase();
  };

  const getLetrasArcanosMayores = () => {
    const letras = new Set<string>();
    arcanosMayores.forEach(carta => {
      letras.add(getFirstLetterForSorting(carta.name));
    });
    return Array.from(letras).sort();
  };

  const getLetrasOsho = () => {
    const letras = new Set<string>();
    cartasOsho.forEach(carta => {
      letras.add(getFirstLetterForSorting(carta.name));
    });
    return Array.from(letras).sort();
  };

  const filtrarCartasPorLetra = (letra: string) => {
    if (baraja === 'osho') {
      return cartasOsho
        .filter(carta => getFirstLetterForSorting(carta.name) === letra)
        .map(carta => carta.name)
        .sort();
    } else if (categoriaSeleccionada === 'mayores') {
      return arcanosMayores
        .filter(carta => getFirstLetterForSorting(carta.name) === letra)
        .map(carta => carta.name)
        .sort();
    }
    return [];
  };

  const filtrarCartasPorPalo = (palo: string) => {
      // Reconstruir el nombre esperado del ID para la búsqueda
      const paloID = palo.toUpperCase(); // Por ejemplo, 'BASTOS'
      return arcanosMenores
          .filter(carta => carta.id.endsWith(`_DE_${paloID}`))
          .map(carta => carta.name)
          .sort((a, b) => {
              // Ordenar numéricamente primero, luego por nombres de corte
              const getSortValue = (name: string) => {
                  if (name.includes('As')) return 1;
                  if (name.includes('Dos')) return 2; // Asegurarse de que "Dos" es el 2, etc.
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
                  return 99; // Para cualquier otro caso
              };
              return getSortValue(a) - getSortValue(b);
          });
  };

  const obtenerSiguientePosicion = () => {
    if (modoLibre) {
      return cartasSeleccionadas.length + 1;
    } else {
      // Buscar la primera posición vacía
      for (let i = 1; i <= tirada.numeroCartas; i++) {
        if (!cartasSeleccionadas.some(c => c.posicion === i)) {
          return i;
        }
      }
      return posicionActual;
    }
  };

  const handleCartaSelect = (nombreCarta: string) => {
    // Aquí necesitamos obtener el ID de la carta a partir de su nombre
    let cartaId = '';
    if (baraja === 'tradicional') {
        const foundCard = [...arcanosMayores, ...arcanosMenores].find(c => c.name === nombreCarta);
        if (foundCard) {
            cartaId = foundCard.id;
        }
    } else { // Osho
        const foundCard = cartasOsho.find(c => c.name === nombreCarta);
        if (foundCard) {
            cartaId = foundCard.id;
        }
    }

    if (!cartaId) {
        console.error(`Error: No se encontró el ID para la carta "${nombreCarta}" en la baraja "${baraja}"`);
        toast({
            title: "Error de selección",
            description: "No se pudo añadir la carta. Inténtalo de nuevo.",
            variant: "destructive",
        });
        return;
    }

    const posicion = obtenerSiguientePosicion();
    const nuevaCarta: CartaSeleccionada = {
      posicion: posicion,
      carta: cartaId, // Aquí es donde usamos el ID, no el nombre
      invertida: false,
      baraja: baraja
    };
    
    onCartaAdd(nuevaCarta);
    
    if (!modoLibre && posicion < tirada.numeroCartas) {
      setPosicionActual(posicion + 1);
    }
    
    // Resetear selecciones
    setCategoriaSeleccionada(null);
    setLetraSeleccionada('');
    setPaloSeleccionado('');
  };

  const handleDoubleClick = (posicion: number) => {
    if (baraja === 'tradicional') { // Solo para baraja tradicional
      onCartaToggle(posicion);
    }
  };

  const handleCambiarBaraja = (nuevaBaraja: 'tradicional' | 'osho') => {
    if (onCambiarBaraja) {
      onCambiarBaraja(nuevaBaraja);
    }
    // Resetear selecciones al cambiar de baraja
    setCategoriaSeleccionada(null);
    setLetraSeleccionada('');
    setPaloSeleccionado('');
  };

  const getCardNameById = (id: string) => {
      const card = cardNames.find(c => c.id === id);
      return card ? card.name : id; // Retorna el nombre o el ID si no se encuentra (fallback)
  };

  const copiarListaCartas = async () => {
    const lista = cartasSeleccionadas
      .sort((a, b) => a.posicion - b.posicion)
      .map((carta, index) => {
        const posicionData = tirada.posiciones.find(p => p.numero === carta.posicion);
        const nombreDisplay = getCardNameById(carta.carta); // Usamos la función para obtener el nombre
        return `${index + 1}. ${posicionData?.nombre || `Carta ${carta.posicion}`}: ${nombreDisplay}${carta.invertida ? ' (Invertida)' : ''}`;
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
                    {paloSeleccionado}
                  </Badge>
                )}
              </div>
            </CardHeader>
            <CardContent className="space-y-4">
              {/* Selección para Tarot Tradicional */}
              {baraja === 'tradicional' && (
                <div className="space-y-4">
                  {/* Selección de categoría */}
                  <div>
                    <label className="block text-sm font-medium text-emerald-900 mb-2">
                      Categoría
                    </label>
                    <Select 
                      value={categoriaSeleccionada || ''} 
                      onValueChange={(value) => {
                        setCategoriaSeleccionada(value as 'mayores' | 'menores');
                        setLetraSeleccionada('');
                        setPaloSeleccionado('');
                      }}
                    >
                      <SelectTrigger>
                        <SelectValue placeholder="Selecciona una categoría" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="mayores">Arcanos Mayores</SelectItem>
                        <SelectItem value="menores">Arcanos Menores</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  {/* Selección de letra para arcanos mayores */}
                  {categoriaSeleccionada === 'mayores' && (
                    <div>
                      <label className="block text-sm font-medium text-emerald-900 mb-2">
                        Primera letra
                      </label>
                      <Select 
                        value={letraSeleccionada} 
                        onValueChange={setLetraSeleccionada}
                      >
                        <SelectTrigger>
                          <SelectValue placeholder="Selecciona una letra" />
                        </SelectTrigger>
                        <SelectContent>
                          {getLetrasArcanosMayores().map((letra) => (
                            <SelectItem key={letra} value={letra}>{letra}</SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>
                  )}

                  {/* Selección de palo para arcanos menores */}
                  {categoriaSeleccionada === 'menores' && (
                    <div>
                      <label className="block text-sm font-medium text-emerald-900 mb-2">
                        Palo
                      </label>
                      <Select 
                        value={paloSeleccionado} 
                        onValueChange={setPaloSeleccionado}
                      >
                        <SelectTrigger>
                          <SelectValue placeholder="Selecciona un palo" />
                        </SelectTrigger>
                        <SelectContent>
                          {palos.map((palo) => (
                            <SelectItem key={palo} value={palo}>{palo}</SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>
                  )}
                </div>
              )}

              {/* Selección para Tarot de Osho */}
              {baraja === 'osho' && (
                <div>
                  <label className="block text-sm font-medium text-emerald-900 mb-2">
                    Primera letra
                  </label>
                  <Select 
                    value={letraSeleccionada} 
                    onValueChange={setLetraSeleccionada}
                  >
                    <SelectTrigger>
                      <SelectValue placeholder="Selecciona una letra" />
                    </SelectTrigger>
                    <SelectContent>
                      {getLetrasOsho().map((letra) => (
                        <SelectItem key={letra} value={letra}>{letra}</SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
              )}

              {/* Cartas filtradas */}
              {((baraja === 'tradicional' && categoriaSeleccionada === 'mayores' && letraSeleccionada) ||
                (baraja === 'tradicional' && categoriaSeleccionada === 'menores' && paloSeleccionado) ||
                (baraja === 'osho' && letraSeleccionada)) && (
                <div>
                  <label className="block text-sm font-medium text-emerald-900 mb-2">
                    Cartas disponibles
                  </label>
                  <div className="grid gap-2 md:grid-cols-2 lg:grid-cols-3">
                    {/* Cartas por letra (Mayores o Osho) */}
                    {letraSeleccionada && (categoriaSeleccionada === 'mayores' || baraja === 'osho') && 
                      filtrarCartasPorLetra(letraSeleccionada).map((carta) => (
                        <Button
                          key={carta}
                          variant="outline"
                          className="h-auto p-3 text-left hover:bg-emerald-50 hover:border-emerald-400 text-sm"
                          onClick={() => handleCartaSelect(carta)}
                        >
                          {carta}
                        </Button>
                      ))
                    }
                    
                    {/* Cartas por palo (Menores Tradicionales) */}
                    {paloSeleccionado && categoriaSeleccionada === 'menores' &&
                      filtrarCartasPorPalo(paloSeleccionado).map((carta) => (
                        <Button
                          key={carta}
                          variant="outline"
                          className="h-auto p-3 text-center hover:bg-emerald-50 hover:border-emerald-400 text-sm"
                          onClick={() => handleCartaSelect(carta)}
                        >
                          {carta}
                        </Button>
                      ))
                    }
                  </div>
                </div>
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
                            {posicionData?.nombre || `Carta ${carta.posicion}`}
                          </div>
                          <div className="text-sm text-emerald-700">
                            {getCardNameById(carta.carta)} {/* Usamos la función para obtener el nombre */}
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