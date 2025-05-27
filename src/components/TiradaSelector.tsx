
import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ChevronLeft } from "lucide-react";
import { Tirada } from '@/pages/Index';

interface TiradaSelectorProps {
  onTiradaSelect: (tirada: Tirada, baraja: 'tradicional' | 'osho') => void;
  onVolver: () => void;
}

const TiradaSelector: React.FC<TiradaSelectorProps> = ({
  onTiradaSelect,
  onVolver
}) => {
  const [barajaSeleccionada, setBarajaSeleccionada] = useState<'tradicional' | 'osho'>('tradicional');

  const tiradas: Tirada[] = [
    {
      id: 'cruz-celta',
      nombre: 'Cruz Celta',
      descripcion: 'Tirada completa para análisis profundo de situaciones',
      numeroCartas: 10,
      posiciones: [
        { numero: 1, nombre: 'Situación presente', descripcion: 'La situación actual', x: 50, y: 50 },
        { numero: 2, nombre: 'Desafío/Cruz', descripcion: 'Lo que cruza o desafía', x: 50, y: 30 },
        { numero: 3, nombre: 'Pasado distante', descripcion: 'Fundamentos del pasado', x: 30, y: 50 },
        { numero: 4, nombre: 'Futuro posible', descripcion: 'Posible resultado futuro', x: 70, y: 50 },
        { numero: 5, nombre: 'Corona', descripcion: 'Objetivo o meta consciente', x: 50, y: 10 },
        { numero: 6, nombre: 'Pasado reciente', descripcion: 'Influencias del pasado reciente', x: 50, y: 70 },
        { numero: 7, nombre: 'Tu enfoque', descripcion: 'Tu punto de vista actual', x: 85, y: 70 },
        { numero: 8, nombre: 'Influencias externas', descripcion: 'Factores externos', x: 85, y: 50 },
        { numero: 9, nombre: 'Esperanzas y miedos', descripcion: 'Tus esperanzas y temores', x: 85, y: 30 },
        { numero: 10, nombre: 'Resultado final', descripcion: 'El resultado final', x: 85, y: 10 }
      ]
    },
    {
      id: 'tres-cartas',
      nombre: 'Tres Cartas',
      descripcion: 'Pasado, presente y futuro',
      numeroCartas: 3,
      posiciones: [
        { numero: 1, nombre: 'Pasado', descripcion: 'Influencias del pasado', x: 25, y: 50 },
        { numero: 2, nombre: 'Presente', descripcion: 'Situación actual', x: 50, y: 50 },
        { numero: 3, nombre: 'Futuro', descripcion: 'Tendencias futuras', x: 75, y: 50 }
      ]
    },
    {
      id: 'herradura',
      nombre: 'Herradura',
      descripcion: 'Análisis de situación con consejos',
      numeroCartas: 7,
      posiciones: [
        { numero: 1, nombre: 'Pasado', descripcion: 'Influencias pasadas', x: 20, y: 70 },
        { numero: 2, nombre: 'Presente', descripcion: 'Situación actual', x: 30, y: 40 },
        { numero: 3, nombre: 'Futuro', descripcion: 'Lo que viene', x: 50, y: 20 },
        { numero: 4, nombre: 'Acción', descripcion: 'Qué hacer', x: 70, y: 40 },
        { numero: 5, nombre: 'Influencias externas', descripcion: 'Factores externos', x: 80, y: 70 },
        { numero: 6, nombre: 'Obstáculos', descripcion: 'Desafíos a superar', x: 50, y: 80 },
        { numero: 7, nombre: 'Resultado', descripcion: 'Resultado probable', x: 50, y: 50 }
      ]
    },
    {
      id: 'una-carta',
      nombre: 'Una Carta',
      descripcion: 'Respuesta directa y simple',
      numeroCartas: 1,
      posiciones: [
        { numero: 1, nombre: 'Respuesta', descripcion: 'La respuesta a tu pregunta', x: 50, y: 50 }
      ]
    },
    {
      id: 'relacion',
      nombre: 'Tirada de Relación',
      descripcion: 'Análisis de relaciones entre dos personas',
      numeroCartas: 6,
      posiciones: [
        { numero: 1, nombre: 'Tu posición', descripcion: 'Tu perspectiva', x: 25, y: 30 },
        { numero: 2, nombre: 'Su posición', descripcion: 'Su perspectiva', x: 75, y: 30 },
        { numero: 3, nombre: 'Lo que te une', descripcion: 'Factores de unión', x: 50, y: 20 },
        { numero: 4, nombre: 'Lo que los separa', descripcion: 'Factores de separación', x: 50, y: 80 },
        { numero: 5, nombre: 'Futuro cercano', descripcion: 'Tendencia a corto plazo', x: 25, y: 70 },
        { numero: 6, nombre: 'Futuro lejano', descripcion: 'Tendencia a largo plazo', x: 75, y: 70 }
      ]
    }
  ];

  const handleTiradaClick = (tirada: Tirada) => {
    onTiradaSelect(tirada, barajaSeleccionada);
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

          {/* Lista de tiradas */}
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {tiradas.map((tirada) => (
              <Card 
                key={tirada.id}
                className="group bg-white/80 backdrop-blur-sm border-orange-200 hover:border-orange-400 transition-all duration-300 cursor-pointer hover:shadow-lg hover:-translate-y-1"
                onClick={() => handleTiradaClick(tirada)}
              >
                <CardHeader className="pb-3">
                  <CardTitle className="text-lg text-orange-900 group-hover:text-orange-700">
                    {tirada.nombre}
                  </CardTitle>
                  <div className="flex justify-between items-center">
                    <Badge variant="outline" className="bg-orange-100">
                      {tirada.numeroCartas} {tirada.numeroCartas === 1 ? 'carta' : 'cartas'}
                    </Badge>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-orange-700 text-sm leading-relaxed">
                    {tirada.descripcion}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Botón volver */}
          <div className="flex justify-center">
            <Button
              variant="outline"
              className="text-orange-700 border-orange-300 hover:bg-orange-50"
              onClick={onVolver}
            >
              <ChevronLeft className="w-4 h-4 mr-2" />
              Volver al Inicio
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TiradaSelector;
