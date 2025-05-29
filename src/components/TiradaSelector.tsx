import React, { useState, useMemo } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ChevronLeft, X, Copy } from "lucide-react"; // Asegúrate de que X y Copy estén importados
import { Tirada } from '@/pages/Index';
import { tiradas } from '@/data/tiradas';
import { useToast } from "@/hooks/use-toast"; // Importar useToast para notificaciones

interface TiradaSelectorProps {
  onTiradaSelect: (tirada: Tirada, baraja: 'tradicional' | 'osho') => void;
  onVolver: () => void;
}

const TiradaSelector: React.FC<TiradaSelectorProps> = ({
  onTiradaSelect,
  onVolver
}) => {
  const [barajaSeleccionada, setBarajaSeleccionada] = useState<'tradicional' | 'osho'>('tradicional');
  const [tiradaSeleccionada, setTiradaSeleccionada] = useState<Tirada | null>(null);
  const { toast } = useToast();

  const orderedAndGroupedTiradas = useMemo(() => {
    const sortedTiradas = [...tiradas].sort((a, b) => a.numeroCartas - b.numeroCartas);

    const grouped: { [key: number]: Tirada[] } = {};
    sortedTiradas.forEach(tirada => {
      if (!grouped[tirada.numeroCartas]) {
        grouped[tirada.numeroCartas] = [];
      }
      grouped[tirada.numeroCartas].push(tirada);
    });

    return grouped;
  }, []);

  const handleTiradaClick = (tirada: Tirada) => {
    setTiradaSeleccionada(tirada);
  };

  const handleConfirmarTirada = () => {
    if (tiradaSeleccionada) {
      onTiradaSelect(tiradaSeleccionada, barajaSeleccionada);
    }
  };

  const handleCerrarVistaPrevia = () => {
    setTiradaSeleccionada(null);
  };

  const handleCopiarDetallesTirada = async () => {
    if (tiradaSeleccionada) {
      let textoParaCopiar = `Tirada: ${tiradaSeleccionada.nombre}\n`;
      textoParaCopiar += `Descripción: ${tiradaSeleccionada.descripcion}\n\n`;
      textoParaCopiar += 'Posiciones:\n';
      tiradaSeleccionada.posiciones.forEach((posicion, index) => {
        textoParaCopiar += `${index + 1}. ${posicion.nombre}: ${posicion.descripcion}\n`;
      });

      try {
        await navigator.clipboard.writeText(textoParaCopiar);
        toast({
          title: "¡Copiado!",
          description: "Los detalles de la tirada se han copiado al portapapeles.",
        });
      } catch (err) {
        toast({
          title: "Error al copiar",
          description: "No se pudo copiar los detalles de la tirada. Inténtalo de nuevo.",
          variant: "destructive",
        });
      }
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 via-amber-50 to-orange-100 pb-20"> {/* Añadir padding-bottom para el botón fijo */}
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto space-y-6">
          <div className="text-center">
            <h2 className="text-3xl font-serif text-orange-900 mb-2">
              Selecciona una Tirada
            </h2>
          </div>

          {/* Selección de baraja */}
          <Card className="bg-white/80 backdrop-blur-sm border-orange-200">
            <CardHeader className="pb-4">
              <CardTitle className="text-lg text-orange-900">Tipo de Baraja</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid gap-4 md:grid-cols-2">
                <Button
                  variant={barajaSeleccionada === 'tradicional' ? "default" : "outline"}
                  className="h-16 text-lg"
                  onClick={() => setBarajaSeleccionada('tradicional')}
                >
                  Tarot Tradicional
                </Button>
                <Button
                  variant={barajaSeleccionada === 'osho' ? "default" : "outline"}
                  className="h-16 text-lg"
                  onClick={() => setBarajaSeleccionada('osho')}
                >
                  Tarot de Osho
                </Button>
              </div>
            </CardContent>
          </Card>

          {/* Lista de tiradas agrupadas y más compactas */}
          {Object.entries(orderedAndGroupedTiradas).map(([numeroCartas, tiradasPorNumero]) => (
            <div key={numeroCartas} className="mb-6">
              <h3 className="text-xl font-serif text-orange-800 mb-3 mt-5">
                Tiradas de {numeroCartas} {parseInt(numeroCartas) === 1 ? 'carta' : 'cartas'}
              </h3>
              <div className="bg-white/80 backdrop-blur-sm border border-orange-200 rounded-lg overflow-hidden">
                {tiradasPorNumero.map((tirada) => (
                  <div
                    key={tirada.id}
                    className="flex justify-between items-center px-4 py-3 border-b border-orange-100 last:border-b-0 hover:bg-orange-50 transition-colors duration-200 cursor-pointer"
                    onClick={() => handleTiradaClick(tirada)}
                  >
                    <div>
                      <p className="font-semibold text-orange-900">{tirada.nombre}</p>
                      <p className="text-orange-700 text-sm line-clamp-1">{tirada.descripcion}</p>
                    </div>
                    <Button variant="ghost" size="sm" className="text-orange-600 hover:text-orange-800">Ver Detalles</Button>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Botón Volver fijo en la parte inferior */}
      <div className="fixed bottom-4 left-1/2 transform -translate-x-1/2 z-50">
        <Button
          variant="secondary"
          className="px-6 py-3 shadow-lg"
          onClick={onVolver}
        >
          <ChevronLeft className="w-5 h-5 mr-2" />
          Volver al Inicio
        </Button>
      </div>

      {/* Vista previa de la tirada */}
      {tiradaSeleccionada && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <Card className="max-w-2xl w-full max-h-[90vh] flex flex-col bg-white/90 border-orange-200">
            <CardHeader className="flex justify-between items-center shrink-0">
              <CardTitle className="text-2xl text-orange-900">
                {tiradaSeleccionada.nombre}
              </CardTitle>
              <Button variant="ghost" size="icon" onClick={handleCerrarVistaPrevia}>
                <X className="h-6 w-6" />
              </Button>
            </CardHeader>
            <CardContent className="flex-grow overflow-y-auto space-y-4 px-6 py-4">
              <p className="text-orange-700">{tiradaSeleccionada.descripcion}</p>
              <h3 className="text-lg text-orange-900 font-semibold">Posiciones:</h3>
              <ul className="list-decimal list-inside space-y-2">
                {tiradaSeleccionada.posiciones.map((posicion) => (
                  <li key={posicion.numero} className="text-orange-700">
                    <strong className="font-medium">{posicion.nombre}:</strong> {posicion.descripcion}
                  </li>
                ))}
              </ul>
            </CardContent>
            <CardContent className="flex justify-between items-center pt-6 shrink-0">
              <Button
                variant="outline"
                className="text-blue-700 border-blue-300 hover:bg-blue-50"
                onClick={handleCopiarDetallesTirada}
              >
                <Copy className="w-4 h-4 mr-2" />
                Copiar Detalles
              </Button>
              <Button onClick={handleConfirmarTirada}>
                Seleccionar Tirada
              </Button>
            </CardContent>
          </Card>
        </div>
      )}
    </div>
  );
};

export default TiradaSelector;