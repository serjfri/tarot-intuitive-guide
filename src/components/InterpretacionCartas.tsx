// src/components/InterpretacionCartas.tsx

import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ChevronLeft } from "lucide-react";
import { Tirada, CartaSeleccionada } from '@/pages/Index';

// Importar los significados de las cartas
import { oshoMeanings } from '@/data/oshoMeanings';
import { traditionalMeanings } from '@/data/traditionalMeanings';

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
  const getInterpretacionCarta = (cartaNombre: string, invertida: boolean, baraja: 'tradicional' | 'osho'): { significado: string; interpretacion: string; palabrasClave?: string[]; arquetipo?: string; elemento?: string } => {

    if (baraja === 'tradicional') {
      const interp = traditionalMeanings.find(c => c.nombre === cartaNombre); // Buscar en el array tradicional
      if (interp) {
        return {
          // Si está invertida, usa significadoInvertido; si no, usa significadoDerecho
          significado: invertida ? (interp.significadoInvertido || interp.significadoDerecho) : interp.significadoDerecho,
          interpretacion: interp.detalle || interp.significadoDerecho, // Si no hay detalle, usa el significado derecho
          palabrasClave: interp.palabrasClave,
          arquetipo: interp.arquetipo,
          elemento: interp.elemento
        };
      }
    } else if (baraja === 'osho') {
      const interp = oshoMeanings.find(c => c.nombre === cartaNombre); // Buscar en el array de Osho
      if (interp) {
        return {
          significado: interp.significado,
          // MODIFICACIÓN AQUÍ: Aseguramos que palabrasClave exista antes de llamar a .join()
          interpretacion: interp.afirmacion || (interp.palabrasClave && interp.palabrasClave.length > 0 ? interp.palabrasClave.join(', ') : interp.significado),
          palabrasClave: interp.palabrasClave, // Ya es opcional en la interfaz de retorno
          arquetipo: interp.arquetipo // Ya es opcional en la interfaz de retorno
          // Osho no tiene 'elemento', así que no lo incluimos
        };
      }
    }

    // Interpretación genérica si no se encuentra la carta específica en ninguno de los arrays
    return {
      significado: 'Carta con significado profundo y personal',
      interpretacion: 'Esta carta invita a la reflexión personal y al autoconocimiento.'
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
                const interpretacion = getInterpretacionCarta(carta.carta, carta.invertida, carta.baraja);

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
                            variant={carta.invertida && carta.baraja === 'tradicional' ? "destructive" : "default"}
                            className="mb-1"
                          >
                            {carta.carta}
                          </Badge>
                          {carta.invertida && carta.baraja === 'tradicional' && (
                            <div className="text-xs text-red-600">Invertida</div>
                          )}
                          {/* Mostrar el elemento si es tradicional */}
                          {carta.baraja === 'tradicional' && interpretacion.elemento && (
                            <div className="text-xs text-purple-500 mt-0.5">Elemento: {interpretacion.elemento}</div>
                          )}
                        </div>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-3">
                        <div>
                          <h4 className="font-medium text-purple-900 mb-1">Significado Principal:</h4>
                          <p className="text-purple-700">{interpretacion.significado}</p>
                        </div>
                        <div>
                          <h4 className="font-medium text-purple-900 mb-1">Interpretación Detallada:</h4>
                          <p className="text-purple-700">{interpretacion.interpretacion}</p>
                        </div>
                        {interpretacion.palabrasClave && interpretacion.palabrasClave.length > 0 && (
                          <div>
                            <h4 className="font-medium text-purple-900 mb-1">Palabras Clave:</h4>
                            <p className="text-purple-700">{interpretacion.palabrasClave.join(', ')}</p>
                          </div>
                        )}
                        {interpretacion.arquetipo && (
                          <div>
                            <h4 className="font-medium text-purple-900 mb-1">Arquetipo:</h4>
                            <p className="text-purple-700">{interpretacion.arquetipo}</p>
                          </div>
                        )}
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