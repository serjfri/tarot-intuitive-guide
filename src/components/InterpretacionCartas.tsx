import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ChevronLeft } from "lucide-react";
import { Tirada, CartaSeleccionada } from '@/pages/Index';

// --- IMPORTACIONES DE DATOS Y TIPOS DESDE LOS ARCHIVOS DE DATOS ---
import { traditionalMeanings, TraditionalCardMeaning } from '@/data/traditionalMeanings';
import { oshoMeanings, OshoCardMeaning } from '@/data/oshoMeanings';
// --- FIN DE IMPORTACIONES DE DATOS Y TIPOS ---


// Extiende el tipo de retorno para incluir las nuevas propiedades
// Este tipo ya está bien, solo necesitamos asegurarnos que TraditionalCardMeaning las provea.
interface InterpretacionCartaResult {
  nombre: string;
  significado: string;
  interpretacion: string;
  elemento?: string;
  palabrasClave?: string[];
  arquetipo?: string; // Confirmado que se usa
  meditacionReflexion?: { preguntas: string[] }; // Confirmado que se usa
  // Nuevas propiedades de información básica para mostrar
  arcano?: string;
  numero?: number;
  planeta?: string;
  signoAstrologico?: string;
  numerologia?: string;
  simbolismo?: string;
}

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
  const getInterpretacionCarta = (cartaId: string, invertida: boolean, baraja: 'tradicional' | 'osho'): InterpretacionCartaResult => {
    if (baraja === 'tradicional') {
      const interp = traditionalMeanings.find(c => c.id === cartaId) as TraditionalCardMeaning | undefined;
      // Añadido 'as TraditionalCardMeaning | undefined' para asegurar el tipo si 'find' no encuentra nada.
      // TypeScript ya infiere esto, pero lo hago explícito para claridad.

      if (interp) {
        return {
          nombre: interp.nombre,
          significado: invertida ? interp.significadoInvertido : interp.significadoDerecho,
          interpretacion: invertida ? interp.detalleInvertido : interp.detalleDerecho,
          elemento: interp.elemento,
          palabrasClave: invertida ? interp.palabrasClaveInvertidas : interp.palabrasClaveDerechas,
          arquetipo: interp.arquetipo, // Asegúrate de que existe en TraditionalCardMeaning
          meditacionReflexion: interp.meditacionReflexion, // Asegúrate de que existe en TraditionalCardMeaning
          arcano: interp.arcano,
          numero: interp.numero,
          planeta: interp.planeta,
          signoAstrologico: interp.signoAstrologico,
          numerologia: interp.numerologia,
          simbolismo: interp.simbolismo,
        };
      }
    } else { // Baraja Osho
      const interp = oshoMeanings.find(c => c.id === cartaId) as OshoCardMeaning | undefined;
      // Añadido 'as OshoCardMeaning | undefined' para asegurar el tipo si 'find' no encuentra nada.

      if (interp) {
        return {
          nombre: interp.nombre,
          significado: interp.significado,
          interpretacion: interp.detalle,
          // Para Osho, estas propiedades no existen, por lo tanto, son 'undefined'
          elemento: undefined,
          palabrasClave: undefined,
          arquetipo: undefined,
          meditacionReflexion: undefined,
          arcano: undefined,
          numero: undefined,
          planeta: undefined,
          signoAstrologico: undefined,
          numerologia: undefined,
          simbolismo: undefined,
        };
      }
    }

    // Caso de carta no encontrada
    return {
      nombre: 'Carta Desconocida',
      significado: 'Significado no encontrado',
      interpretacion: 'Detalle no encontrado para esta carta. Por favor, verifica los archivos de datos.',
      elemento: undefined,
      palabrasClave: undefined,
      arquetipo: undefined,
      meditacionReflexion: undefined,
      arcano: undefined,
      numero: undefined,
      planeta: undefined,
      signoAstrologico: undefined,
      numerologia: undefined,
      simbolismo: undefined,
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
                    {cartasSeleccionadas.length > 0 ? (cartasSeleccionadas[0].baraja === 'tradicional' ? 'Tradicional' : 'Osho') : 'N/A'}
                  </div>
                  <div className="text-purple-600 text-sm">
                    Tipo de Baraja
                  </div>
                </div>
                {cartasSeleccionadas.length > 0 && cartasSeleccionadas[0].baraja === 'tradicional' && (
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
                            <span className="block text-sm font-normal text-purple-500 mt-1">
                              {interpretacion.nombre}
                            </span>
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
                            {interpretacion.nombre}
                          </Badge>
                          {carta.invertida && carta.baraja === 'tradicional' && (
                            <div className="text-xs text-red-600">Invertida</div>
                          )}
                          {carta.baraja === 'tradicional' && interpretacion.elemento && (
                            <div className="text-xs text-purple-500 mt-0.5">
                              Elemento: {interpretacion.elemento}
                            </div>
                          )}
                        </div>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-3">
                        {/* Nueva sección: Información Básica */}
                        {carta.baraja === 'tradicional' && (interpretacion.arcano || interpretacion.numero !== undefined || interpretacion.elemento || interpretacion.planeta || interpretacion.signoAstrologico || interpretacion.numerologia) && (
                          <div>
                            <h4 className="font-medium text-purple-900 mb-1">Información Básica:</h4>
                            <ul className="text-purple-700 text-sm space-y-0.5">
                              {interpretacion.arcano && <li><strong>Arcano:</strong> {interpretacion.arcano}</li>}
                              {interpretacion.numero !== undefined && <li><strong>Número:</strong> {interpretacion.numero}</li>}
                              {interpretacion.elemento && <li><strong>Elemento:</strong> {interpretacion.elemento}</li>}
                              {interpretacion.planeta && <li><strong>Planeta:</strong> {interpretacion.planeta}</li>}
                              {interpretacion.signoAstrologico && <li><strong>Signo Astrológico:</strong> {interpretacion.signoAstrologico}</li>}
                              {interpretacion.numerologia && <li><strong>Numerología:</strong> {interpretacion.numerologia}</li>}
                            </ul>
                          </div>
                        )}

                        {/* Simbolismo */}
                        {carta.baraja === 'tradicional' && interpretacion.simbolismo && (
                          <div>
                            <h4 className="font-medium text-purple-900 mb-1">Simbolismo:</h4>
                            <p className="text-purple-700" dangerouslySetInnerHTML={{ __html: interpretacion.simbolismo }}></p>
                          </div>
                        )}

                        <div>
                          <h4 className="font-medium text-purple-900 mb-1">Significado Principal:</h4>
                          <p className="text-purple-700">{interpretacion.significado}</p>
                        </div>
                        <div>
                          <h4 className="font-medium text-purple-900 mb-1">Interpretación Detallada:</h4>
                          <p className="text-purple-700" dangerouslySetInnerHTML={{ __html: interpretacion.interpretacion }}></p>
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

                        {/* Sección de Meditación y Reflexión */}
                        {carta.baraja === 'tradicional' && interpretacion.meditacionReflexion && interpretacion.meditacionReflexion.preguntas.length > 0 && (
                          <div>
                            <h4 className="font-medium text-purple-900 mb-1">Meditación y Reflexión:</h4>
                            <ul className="list-disc list-inside text-purple-700 space-y-1">
                              {interpretacion.meditacionReflexion.preguntas.map((pregunta, index) => (
                                <li key={index}>{pregunta}</li>
                              ))}
                            </ul>
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