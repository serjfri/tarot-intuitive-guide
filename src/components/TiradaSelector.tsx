import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge"; // Asegúrate de que esta importación sea correcta
import { ChevronLeft, X } from "lucide-react";
import { Tirada } from '@/pages/Index';
import tiradas from '@/data/tiradas'; // Importa las tiradas desde el archivo externo

interface TiradaSelectorProps {
  onTiradaSelect: (tirada: Tirada, baraja: 'tradicional' | 'osho') => void;
  onVolver: () => void; // Mantendremos este prop para la lógica interna si es necesario
}

const TiradaSelector: React.FC<TiradaSelectorProps> = ({
  onTiradaSelect,
  onVolver // Aunque la mayor parte de la lógica de "volver" se moverá al padre
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

          {/* El botón "Volver" a nivel de componente ahora se maneja en el componente padre */}
          {/* Este div ya no es necesario si se mueve al padre para ser global */}
          {/* <div className="flex justify-center">
            <Button
              variant="outline"
              className="text-orange-700 border-orange-300 hover:bg-orange-50"
              onClick={onVolver}
            >
              <ChevronLeft className="w-4 h-4 mr-2" />
              Volver al Inicio
            </Button>
          </div> */}

        </div>
      </div>

      {/* Vista previa de la tirada - MODIFICADO PARA SER SCROLLABLE */}
      {tiradaSeleccionada && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4"> {/* inset-0 para ocupar toda la pantalla */}
          <Card className="max-w-2xl w-full max-h-[90vh] flex flex-col bg-white/90 border-orange-200"> {/* max-h-[90vh] y flex-col */}
            <CardHeader className="flex justify-between items-center shrink-0"> {/* shrink-0 para que no se encoja */}
              <CardTitle className="text-2xl text-orange-900">
                {tiradaSeleccionada.nombre}
              </CardTitle>
              <Button variant="ghost" size="icon" onClick={handleCerrarVistaPrevia}>
                <X className="h-6 w-6" />
              </Button>
            </CardHeader>
            <CardContent className="flex-grow overflow-y-auto space-y-4 px-6 py-4"> {/* flex-grow y overflow-y-auto */}
              <p className="text-orange-700">{tiradaSeleccionada.descripcion}</p>
              <h3 className="text-lg text-orange-900 font-semibold">Posiciones:</h3>
              <ul className="list-decimal list-inside space-y-2"> {/* Cambiado a list-decimal para numeración */}
                {tiradaSeleccionada.posiciones.map((posicion) => (
                  <li key={posicion.numero} className="text-orange-700">
                    <strong className="font-medium">{posicion.nombre}:</strong> {posicion.descripcion}
                  </li>
                ))}
              </ul>
            </CardContent>
            <CardContent className="flex justify-end pt-6 shrink-0"> {/* shrink-0 */}
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