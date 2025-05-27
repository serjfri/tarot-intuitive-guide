
import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { ChevronLeft, Copy, Trash, Undo2 } from "lucide-react";
import { Tirada, CartaSeleccionada } from '@/pages/Index';
import { useToast } from "@/hooks/use-toast";

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
  modoLibre
}) => {
  const [posicionActual, setPosicionActual] = useState(1);
  const [categoriaSeleccionada, setCategoriaSeleccionada] = useState<'mayores' | 'menores' | null>(null);
  const [letraSeleccionada, setLetraSeleccionada] = useState<string>('');
  const [paloSeleccionado, setPaloSeleccionado] = useState<string>('');
  const { toast } = useToast();

  // Datos para Tarot Tradicional
  const arcanosMayores = [
    'Loco', 'Mago', 'Sacerdotisa', 'Emperatriz', 'Emperador',
    'Hierofante', 'Amantes', 'Carro', 'Justicia', 'Ermitaño',
    'Rueda de la Fortuna', 'Fuerza', 'Colgado', 'Muerte',
    'Templanza', 'Diablo', 'Torre', 'Estrella', 'Luna',
    'Sol', 'Juicio', 'Mundo'
  ];

  const palos = ['Bastos', 'Copas', 'Espadas', 'Oros'];
  const cartasPorPalo = ['As', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'Sota', 'Caballo', 'Reina', 'Rey'];

  // Datos para Tarot de Osho 
  const cartasOsho = [
    'Abundancia', 'Agotamiento', 'Aislamiento', 'Apego al Pasado', 'Armonía', 'Aventura', 
    'Avance', 'Cambio', 'Celebración', 'Comparación', 'Compartir', 'Compasión', 'Consciencia', 'Conclusión', 
    'Condicionamientos', 'Confianza', 'Control', 'Creatividad', 'Culpa', 'Curación', 'Darse Cuenta', 'Desapego', 'Despacio', 'El Avaro', 
    'El Creador', 'El Extraño', 'El Loco', 'El Maestro', 'El rayo', 'El Rebelde', 'Esquizofrenia', 'Estrés', 'Existencia', 'Éxito',
    'Experimentar', 'Fluidez', 'Fluir', 'Florecimiento', 'Guía', 'Hacia Dentro', 'Inocencia', 'Integración', 'Intensidad', 
    'Juego', 'La Fuente', 'Las Cargas', 'Lo simple y ordinario', 'Los Amantes', 'Lucha', 'Madurez', 'Materialización', 'Mente', 'Momento a Momento', 'Moralidad', 
    'Más Allá de la Ilusión', 'Nueva Visión', 'Participación', 'Paciencia', 'Pena', 'Pereza', 'Plenitud', 'Política', 
    'Posibilidades', 'Postergación', 'Proyecciones', 'Receptividad', 'Renacer', 'Represión', 'Silencio', 'Soledad', 
    'Soltar', 'Somos el mundo', 'Sueños', 'Totalidad', 'Transformación', 'Transigencia', 'Vacío', 'Valor', 'Viajando', 'Vidas Pasadas', 'Voz Interior'
  ];

  const getLetrasArcanosMayores = () => {
    const letras = new Set<string>();
    arcanosMayores.forEach(carta => {
      letras.add(carta.charAt(0));
    });
    return Array.from(letras).sort();
  };

  const getLetrasOsho = () => {
    const letras = new Set<string>();
    cartasOsho.forEach(carta => {
      if (carta === 'Éxito') {
        letras.add('E');
      } else {
        letras.add(carta.charAt(0));
      }
    });
    return Array.from(letras).sort();
  };

  const filtrarCartasPorLetra = (letra: string) => {
    if (baraja === 'osho') {
      return cartasOsho.filter(carta => {
        if (letra === 'E' && carta === 'Éxito') return true;
        return carta.charAt(0) === letra;
      }).sort();
    } else if (categoriaSeleccionada === 'mayores') {
      return arcanosMayores.filter(carta => carta.charAt(0) === letra).sort();
    }
    return [];
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
    const posicion = obtenerSiguientePosicion();
    const nuevaCarta: CartaSeleccionada = {
      posicion: posicion,
      carta: nombreCarta,
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
    if (baraja === 'tradicional') {
      onCartaToggle(posicion);
    }
  };

  const copiarListaCartas = async () => {
    const lista = cartasSeleccionadas
      .sort((a, b) => a.posicion - b.posicion)
      .map((carta, index) => {
        const posicionData = tirada.posiciones.find(p => p.numero === carta.posicion);
        return `${index + 1}. ${posicionData?.nombre || `Carta ${carta.posicion}`}: ${carta.carta}${carta.invertida ? ' (Invertida)' : ''}`;
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
                    onClick={() => {
                      // Cambiar baraja y resetear selecciones
                      setCategoriaSeleccionada(null);
                      setLetraSeleccionada('');
                      setPaloSeleccionado('');
                    }}
                  >
                    Tarot Tradicional
                  </Button>
                  <Button
                    variant={baraja === 'osho' ? "default" : "outline"}
                    className="h-12"
                    onClick={() => {
                      // Cambiar baraja y resetear selecciones
                      setCategoriaSeleccionada(null);
                      setLetraSeleccionada('');
                      setPaloSeleccionado('');
                    }}
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
                    {/* Cartas por letra */}
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
                    
                    {/* Cartas por palo */}
                    {paloSeleccionado && categoriaSeleccionada === 'menores' &&
                      cartasPorPalo.map((carta) => (
                        <Button
                          key={carta}
                          variant="outline"
                          className="h-auto p-3 text-center hover:bg-emerald-50 hover:border-emerald-400 text-sm"
                          onClick={() => handleCartaSelect(`${carta} de ${paloSeleccionado}`)}
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
                            {carta.carta}
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
