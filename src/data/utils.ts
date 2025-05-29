// src/data/utils.ts
export const getFirstLetterForSorting = (name: string): string => {
  // Tu lógica para obtener la primera letra para el ordenamiento
  // Ejemplo simple:
  return name.charAt(0).toUpperCase();

  // Si necesitas una lógica más avanzada para ignorar "El", "La", "Los":
  /*
  const lowerName = name.toLowerCase();
  if (lowerName.startsWith('el ')) return name.charAt(3).toUpperCase();
  if (lowerName.startsWith('la ')) return name.charAt(3).toUpperCase();
  if (lowerName.startsWith('los ')) return name.charAt(4).toUpperCase();
  // etc.
  return name.charAt(0).toUpperCase();
  */
};