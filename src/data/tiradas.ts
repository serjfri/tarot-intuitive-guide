// src/data/tiradas.ts
import { Tirada } from '@/pages/Index';

const tiradas: Tirada[] = [
  {
    id: 'cruz-celta',
    nombre: 'Cruz Celta',
    descripcion: 'Tirada completa para análisis profundo de situaciones',
    numeroCartas: 10,
    posiciones: [
      { numero: 1, nombre: 'Situación presente', descripcion: 'La situación actual' },
      { numero: 2, nombre: 'Desafío/Cruz', descripcion: 'Lo que cruza o desafía' },
      { numero: 3, nombre: 'Pasado distante', descripcion: 'Fundamentos del pasado' },
      { numero: 4, nombre: 'Futuro posible', descripcion: 'Posible resultado futuro' },
      { numero: 5, nombre: 'Corona', descripcion: 'Objetivo o meta consciente' },
      { numero: 6, nombre: 'Pasado reciente', descripcion: 'Influencias del pasado reciente' },
      { numero: 7, nombre: 'Tu enfoque', descripcion: 'Tu punto de vista actual' },
      { numero: 8, nombre: 'Influencias externas', descripcion: 'Factores externos' },
      { numero: 9, nombre: 'Esperanzas y miedos', descripcion: 'Tus esperanzas y temores' },
      { numero: 10, nombre: 'Resultado final', descripcion: 'El resultado final' }
    ]
  },
  {
    id: 'tres-cartas',
    nombre: 'Tres Cartas',
    descripcion: 'Pasado, presente y futuro',
    numeroCartas: 3,
    posiciones: [
      { numero: 1, nombre: 'Pasado', descripcion: 'Influencias del pasado' },
      { numero: 2, nombre: 'Presente', descripcion: 'Situación actual' },
      { numero: 3, nombre: 'Futuro', descripcion: 'Tendencias futuras' }
    ]
  },
  {
    id: 'herradura',
    nombre: 'Herradura',
    descripcion: 'Análisis de situación con consejos',
    numeroCartas: 7,
    posiciones: [
      { numero: 1, nombre: 'Pasado', descripcion: 'Influencias pasadas' },
      { numero: 2, nombre: 'Presente', descripcion: 'Situación actual' },
      { numero: 3, nombre: 'Futuro', descripcion: 'Lo que viene' },
      { numero: 4, nombre: 'Acción', descripcion: 'Qué hacer' },
      { numero: 5, nombre: 'Influencias externas', descripcion: 'Factores externos' },
      { numero: 6, nombre: 'Obstáculos', descripcion: 'Desafíos a superar' },
      { numero: 7, nombre: 'Resultado', descripcion: 'Resultado probable' }
    ]
  },
  {
    id: 'una-carta',
    nombre: 'Una Carta',
    descripcion: 'Respuesta directa y simple',
    numeroCartas: 1,
    posiciones: [
      { numero: 1, nombre: 'Respuesta', descripcion: 'La respuesta a tu pregunta' }
    ]
  },
  {
    id: 'relacion',
    nombre: 'Tirada de Relación',
    descripcion: 'Análisis de relaciones entre dos personas',
    numeroCartas: 6,
    posiciones: [
      { numero: 1, nombre: 'Tu posición', descripcion: 'Tu perspectiva' },
      { numero: 2, nombre: 'Su posición', descripcion: 'Su perspectiva' },
      { numero: 3, nombre: 'Lo que te une', descripcion: 'Factores de unión' },
      { numero: 4, nombre: 'Lo que los separa', descripcion: 'Factores de separación' },
      { numero: 5, nombre: 'Futuro cercano', descripcion: 'Tendencia a corto plazo' },
      { numero: 6, nombre: 'Futuro lejano', descripcion: 'Tendencia a largo plazo' }
    ]
  },
  // Tirada "Sanando tu Niño Interior" añadida (sin coordenadas x, y)
  {
    id: 'sanando-tu-nino-interior',
    nombre: 'Sanando tu Niño Interior',
    descripcion: 'Un tendido de tarot para la sanación del niño interior',
    numeroCartas: 7,
    posiciones: [
      { numero: 1, nombre: 'Sentimientos actuales', descripcion: 'Cómo se siente mi niño interior actualmente' },
      { numero: 2, nombre: 'Lo que faltó', descripcion: 'Lo que me faltó de niño' },
      { numero: 3, nombre: 'Cicatríz', descripcion: 'Algo que dejó a mi niño interior marcado' },
      { numero: 4, nombre: 'Efecto actual', descripcion: 'Cómo me está afectando eso en mi vida ahora' },
      { numero: 5, nombre: 'Acción', descripcion: 'Algo que puedo hacer para sanar a mi niño interior' },
      { numero: 6, nombre: 'Apoyo', descripcion: 'Cómo puedo apoyar a mi niño interior' },
      { numero: 7, nombre: 'Mensaje', descripcion: 'Un mensaje de mi niño interior' }
    ]
  }
];

export default tiradas;