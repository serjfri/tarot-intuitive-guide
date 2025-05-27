import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ChevronLeft } from "lucide-react";
import { Tirada, CartaSeleccionada } from '@/pages/Index';

// Importa los datos de los significados que ya creamos
import { traditionalMeanings, TraditionalCardMeaning } from '@/data/traditionalMeanings';
import { oshoMeanings, OshoCardMeaning } from '@/data/oshoMeanings';

interface InterpretacionCartasProps {
  tirada: Tirada;
  cartasSeleccionadas: CartaSeleccionada[];
  onVolver: () => void;
  modoLibre: boolean;
}

const InterpretacionCartas: React.FC<InterpretacionCartasProps> = ({
  tirada,
  cartasSeleccionadas,
  onVolver,
  modoLibre
}) => {
  // Nueva función para obtener la interpretación, usando los datos importados
  const getInterpretacionCarta = (cartaId: string, invertida: boolean, baraja: 'tradicional' | 'osho'): { significado: string; interpretacion: string; detalle: string } => {
    if (baraja === 'tradicional') {
      const interp = (traditionalMeanings as TraditionalCardMeaning[]).find(c => c.id === cartaId);
      if (interp) {
        return {
          significado: invertida ? interp.significadoInvertido : interp.significadoDerecho,
          interpretacion: interp.detalle,
          detalle: interp.detalle // Puedes usar 'detalle' o 'interpretacion' según prefieras para la explicación extendida
        };
      }
    } else { // Baraja Osho
      const interp = (oshoMeanings as OshoCardMeaning[]).find(c => c.id === cartaId);
      if (interp) {
        return {
          significado: interp.significado,
          interpretacion: interp.detalle,
          detalle: interp.detalle
        };
      }
    }

    // Fallback si la carta no se encuentra (no debería pasar con IDs correctos)
    return {
      significado: 'Significado no encontrado',
      interpretacion: 'Detalle no encontrado',
      detalle: 'Detalle no encontrado'
    };
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-indigo-50 to-purple-100">
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto space-y-6">
          <div className="text-center">
            <h2 className="text-3xl font-serif text-purple-900 mb-2">
              Interpretación de Cartas
            </h2>
            <p className="text-purple-700">
              {tirada.nombre}
            </p>
            {modoLibre && (
              <Badge variant="outline" className="mt-2 bg-purple-100">
                Selección Libre
              </Badge>
            )}
          </div>

          {/* Resumen de la tirada */}
          <Card className="bg-white/80 backdrop-blur-sm border-purple-200">
            <CardHeader>
              <CardTitle className="text-xl text-purple-900">
                Resumen de la Lectura
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                <div className="text-center">
                  <div className="text-2xl font-bold text-purple-700">
                    {cartasSeleccionadas.length}
                  </div>
                  <div className="text-purple-600 text-sm">
                    {cartasSeleccionadas.length === 1 ? 'Carta' : 'Cartas'}
                  </div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-purple-700">
                    {cartasSeleccionadas[0]?.baraja === 'tradicional' ? 'Tradicional' : 'Osho'}
                  </div>
                  <div className="text-purple-600 text-sm">
                    Tipo de Baraja
                  </div>
                </div>
                {cartasSeleccionadas[0]?.baraja === 'tradicional' && (
                  <div className="text-center">
                    <div className="text-2xl font-bold text-purple-700">
                      {cartasSeleccionadas.filter(c => c.invertida).length}
                    </div>
                    <div className="text-purple-600 text-sm">
                      Cartas Invertidas
                    </div>
                  </div>
                )}
              </div>
            </CardContent>
          </Card>

          {/* Interpretación de cada carta */}
          <div className="space-y-4">
            {cartasSeleccionadas
              .sort((a, b) => a.posicion - b.posicion)
              .map((carta) => {
                const posicionData = tirada.posiciones.find(p => p.numero === carta.posicion);
                // Ahora pasamos carta.id en lugar de carta.carta (nombre de la carta)
                const interpretacion = getInterpretacionCarta(carta.id, carta.invertida, carta.baraja);
                
                return (
                  <Card key={carta.posicion} className="bg-white/80 backdrop-blur-sm border-purple-200">
                    <CardHeader>
                      <div className="flex justify-between items-start">
                        <div>
                          <CardTitle className="text-lg text-purple-900">
                            {posicionData?.nombre || `Carta ${carta.posicion}`}
                          </CardTitle>
                          <p className="text-purple-600 text-sm mt-1">
                            {posicionData?.descripcion}
                          </p>
                        </div>
                        <div className="text-right">
                          <Badge 
                            variant={carta.invertida ? "destructive" : "default"}
                            className="mb-1"
                          >
                            {/* Ahora mostramos carta.carta, que es el nombre de la carta */}
                            {carta.carta} 
                          </Badge>
                          {carta.invertida && (
                            <div className="text-xs text-red-600">Invertida</div>
                          )}
                        </div>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-3">
                        <div>
                          <h4 className="font-medium text-purple-900 mb-1">Significado:</h4>
                          <p className="text-purple-700">{interpretacion.significado}</p>
                        </div>
                        <div>
                          <h4 className="font-medium text-purple-900 mb-1">Interpretación:</h4>
                          <p className="text-purple-700">{interpretacion.interpretacion}</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                );
              })}
          </div>



          {/* Botón volver */}
          <div className="flex justify-center">
            <Button
              variant="outline"
              className="text-purple-700 border-purple-300 hover:bg-purple-50"
              onClick={onVolver}
            >
              <ChevronLeft className="w-4 h-4 mr-2" />
              Volver a Selección
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InterpretacionCartas;
