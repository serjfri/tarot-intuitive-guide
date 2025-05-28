import React, { useState, useMemo } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ChevronLeft, X } from "lucide-react";
import { Tirada } from '@/pages/Index';
import tiradasData from '@/data/tiradas'; // Renombrado para evitar conflicto con la variable 'tiradas' local

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

  // Ordenar las tiradas por el número de cartas y agruparlas
  const orderedAndGroupedTiradas = useMemo(() => {
    const sortedTiradas = [...tiradasData].sort((a, b) => a.numeroCartas - b.numeroCartas);
    
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

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 via-amber-50 to-orange-100">
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

          {/* Lista de tiradas ordenadas y agrupadas */}
          {Object.entries(orderedAndGroupedTiradas).map(([numeroCartas, tiradasPorNumero]) => (
            <div key={numeroCartas} className="mb-8">
              <h3 className="text-xl font-serif text-orange-800 mb-4 mt-6">
                Tiradas de {numeroCartas} {parseInt(numeroCartas) === 1 ? 'carta' : 'cartas'}
              </h3>
              <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                {tiradasPorNumero.map((tirada) => (
                  <Card
                    key={tirada.id}
                    className="group bg-white/80 backdrop-blur-sm border-orange-200 hover:border-orange-400 transition-all duration-300 cursor-pointer hover:shadow-lg hover:-translate-y-1"
                    onClick={() => handleTiradaClick(tirada)}
                  >
                    <CardHeader className="pb-3">
                      <CardTitle className="text-lg text-orange-900 group-hover:text-orange-700">
                        {tirada.nombre}
                      </CardTitle>
                      <Badge variant="outline" className="bg-orange-100">
                        {tirada.numeroCartas} {tirada.numeroCartas === 1 ? 'carta' : 'cartas'}
                      </Badge>
                    </CardHeader>
                    <CardContent>
                      <p className="text-orange-700 text-sm leading-relaxed line-clamp-3"> {/* line-clamp para hacer más compacto */}
                        {tirada.descripcion}
                      </p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          ))}
        </div>
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
            <CardContent className="flex justify-end pt-6 shrink-0">
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