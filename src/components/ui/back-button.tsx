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
      variant="ghost" // Estilo discreto
      size="icon" // Botón pequeño (icono)
      className="absolute top-4 left-4 z-50 text-gray-600 hover:bg-gray-100" // Posición fija y estilos
      onClick={onClick}
    >
      <ChevronLeft className="w-5 h-5" />
      <span className="sr-only">{label}</span> {/* Texto para accesibilidad */}
      {/* Si quieres que el texto "Volver" sea visible, quita sr-only y añade el label */}
      {/* {label} */}
    </Button>
  );
};

export default BackButton;