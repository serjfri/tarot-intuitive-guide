// src/components/ui/back-button.tsx
import React from 'react';
import { Button } from "@/components/ui/button";
import { ChevronLeft } from "lucide-react";

interface BackButtonProps {
  onClick: () => void;
  label?: string; // Opcional: permite cambiar el texto del botón
}

const BackButton: React.FC<BackButtonProps> = ({ onClick, label = "Volver" }) => {
  return (
    <Button
      variant="outline" // Cambiamos a "outline" para un borde visible
      // Eliminamos size="icon" para permitir un tamaño más grande y texto
      className="absolute top-4 left-4 z-50
                 bg-white/80 backdrop-blur-sm border-orange-300 text-orange-700
                 hover:bg-orange-50 hover:border-orange-400
                 px-4 py-2 rounded-md
                 flex items-center space-x-2
                 shadow-md" // Añadimos una sombra para que resalte
      onClick={onClick}
    >
      <ChevronLeft className="w-5 h-5" /> {/* Mantenemos el tamaño del icono o lo aumentamos */}
      <span className="font-medium">{label}</span> {/* Hacemos el texto visible y negrita */}
    </Button>
  );
};

export default BackButton;