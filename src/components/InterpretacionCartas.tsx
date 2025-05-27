
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ChevronLeft } from "lucide-react";
import { Tirada, CartaSeleccionada } from '@/pages/Index';

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
  const getInterpretacionCarta = (carta: string, invertida: boolean, baraja: 'tradicional' | 'osho'): { significado: string; interpretacion: string } => {
    // Aquí deberías tener una base de datos completa de interpretaciones
    // Para el ejemplo, incluyo algunas cartas básicas
    
    const interpretacionesTradicional: Record<string, { normal: string; invertida: string; detalle: string }> = {
      'Loco': {
        normal: 'Nuevos comienzos, espontaneidad, aventura',
        invertida: 'Imprudencia, riesgo innecesario, falta de dirección',
        detalle: 'El Loco representa el inicio de un viaje espiritual y personal.'
      },
      'Mago': {
        normal: 'Manifestación, poder personal, acción',
        invertida: 'Manipulación, falta de voluntad, desperdicio de talentos',
        detalle: 'El Mago simboliza el poder de transformar ideas en realidad.'
      },
      'Sacerdotisa': {
        normal: 'Intuición, conocimiento oculto, misterio',
        invertida: 'Secretos revelados, falta de intuición, superficialidad',
        detalle: 'La Sacerdotisa representa la sabiduría interior y la intuición.'
      }
    };

    const interpretacionesOsho: Record<string, { significado: string; detalle: string }> = {
      'Abundancia': {
        significado: 'Plenitud, prosperidad, gratitud',
        detalle: 'La abundancia no es solo material, sino un estado de consciencia de plenitud.'
      },
      'Agotamiento': {
        significado: 'Necesidad de descanso, límites alcanzados',
        detalle: 'El agotamiento señala la importancia de parar y recuperar energías.'
      },
      'Consciencia': {
        significado: 'Despertar, claridad mental, presencia',
        detalle: 'La consciencia es el primer paso hacia la transformación personal.'
      }
    };

    if (baraja === 'tradicional') {
      const interp = interpretacionesTradicional[carta];
      if (interp) {
        return {
          significado: invertida ? interp.invertida : interp.normal,
          interpretacion: interp.detalle
        };
      }
    } else {
      const interp = interpretacionesOsho[carta];
      if (interp) {
        return {
          significado: interp.significado,
          interpretacion: interp.detalle
        };
      }
    }

    // Interpretación genérica si no se encuentra la carta específica
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
                            variant={carta.invertida ? "destructive" : "default"}
                            className="mb-1"
                          >
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

          {/* Mensaje general */}
          <Card className="bg-gradient-to-r from-purple-100 to-indigo-100 border-purple-200">
            <CardHeader>
              <CardTitle className="text-xl text-purple-900">
                Mensaje General
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-purple-800 leading-relaxed">
                Las cartas seleccionadas forman un mensaje único para ti. Reflexiona sobre cómo 
                estos significados se relacionan con tu situación actual y las preguntas que 
                tenías en mente. Recuerda que el tarot es una herramienta de autoconocimiento 
                y reflexión personal.
              </p>
            </CardContent>
          </Card>

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
