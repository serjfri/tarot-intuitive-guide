import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
// FIX THIS LINE: Import Badge from your UI components, not lucide-react
import { Badge } from "@/components/ui/badge"; // <--- CHANGE THIS LINE
import { ChevronLeft, X } from "lucide-react"; // X is for the close button, ChevronLeft for back
import { Tirada } from '@/pages/Index';
import tiradas from '@/data/tiradas'; // Importa las tiradas desde el archivo externo

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

  const handleTiradaClick = (tirada: Tirada) => {
    setTiradaSeleccionada(tirada); // Muestra la vista previa
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

      {/* Vista previa de la tirada */}
      {tiradaSeleccionada && (
        <div className="fixed top-0 left-0 w-full h-full bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center">
          <Card className="max-w-2xl w-full bg-white/90 border-orange-200">
            <CardHeader className="flex justify-between items-center">
              <CardTitle className="text-2xl text-orange-900">
                {tiradaSeleccionada.nombre}
              </CardTitle>
              <Button variant="ghost" size="icon" onClick={handleCerrarVistaPrevia}>
                <X className="h-6 w-6" />
              </Button>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-orange-700">{tiradaSeleccionada.descripcion}</p>
              <h3 className="text-lg text-orange-900">Posiciones:</h3>
              <ul className="list-disc pl-5 space-y-2">
                {tiradaSeleccionada.posiciones.map((posicion) => (
                  <li key={posicion.numero} className="text-orange-700">
                    <strong>{posicion.nombre}:</strong> {posicion.descripcion}
                  </li>
                ))}
              </ul>
            </CardContent>
            <CardContent className="flex justify-end pt-6">
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