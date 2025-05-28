import { Tirada } from '@/pages/Index';

export const tiradas: Tirada[] = [
  {
    id: 'cruz-celta',
    nombre: 'Cruz Celta',
    descripcion: 'Una tirada clásica para una visión completa de un problema o situación.',
    numeroCartas: 10,
    posiciones: [
      { numero: 1, nombre: 'El consultante', descripcion: 'El corazón del asunto, la situación actual del consultante.' },
      { numero: 2, nombre: 'El obstáculo', descripcion: 'Lo que cruza al consultante, el principal desafío o influencia opuesta.' },
      { numero: 3, nombre: 'Las raíces', descripcion: 'La base de la situación, lo que la originó o las influencias subyacentes.' },
      { numero: 4, nombre: 'El pasado', descripcion: 'Influencias recientes o pasadas que afectan la situación.' },
      { numero: 5, nombre: 'El objetivo', descripcion: 'El posible resultado futuro si la situación sigue su curso actual.' },
      { numero: 6, nombre: 'El futuro cercano', descripcion: 'Influencias o eventos que se manifestarán en un futuro próximo.' },
      { numero: 7, nombre: 'El consultante (perspectiva)', descripcion: 'La posición del consultante en la situación, sus miedos y esperanzas.' },
      { numero: 8, nombre: 'Factores externos', descripcion: 'Influencias de otras personas o del entorno sobre la situación.' },
      { numero: 9, nombre: 'Esperanzas y miedos', descripcion: 'Las esperanzas, miedos o expectativas ocultas del consultante.' },
      { numero: 10, nombre: 'El resultado', descripcion: 'El resultado final de la situación o el consejo general.' },
    ],
  },
  {
    id: 'herradura',
    nombre: 'Herradura',
    descripcion: 'Ideal para problemas específicos, ofreciendo una visión de pasado, presente y futuro.',
    numeroCartas: 7,
    posiciones: [
      { numero: 1, nombre: 'Pasado', descripcion: 'Eventos pasados que afectan la situación actual.' },
      { numero: 2, nombre: 'Presente', descripcion: 'La situación actual y las energías que la rodean.' },
      { numero: 3, nombre: 'Futuro cercano', descripcion: 'Eventos o influencias que se manifestarán en un futuro próximo.' },
      { numero: 4, nombre: 'Obstáculos', descripcion: 'Desafíos o bloqueos que podrías enfrentar.' },
      { numero: 5, nombre: 'Influencias externas', descripcion: 'Factores externos o personas que influyen en la situación.' },
      { numero: 6, nombre: 'Consejo', descripcion: 'Qué acción tomar o qué actitud adoptar.' },
      { numero: 7, nombre: 'Resultado', descripcion: 'El posible resultado de la situación.' },
    ],
  },
  {
    id: 'si-o-no',
    nombre: 'Sí o No',
    descripcion: 'Una tirada rápida para obtener una respuesta directa a una pregunta.',
    numeroCartas: 3,
    posiciones: [
      { numero: 1, nombre: 'Energía principal', descripcion: 'La energía dominante que rodea la pregunta.' },
      { numero: 2, nombre: 'Influencia a favor/en contra', descripcion: 'Factores que apoyan o se oponen a la respuesta.' },
      { numero: 3, nombre: 'Resultado final (Sí/No)', descripcion: 'La respuesta directa a la pregunta.' },
    ],
  },
  {
    id: 'tres-cartas',
    nombre: 'Tres Cartas (Pasado, Presente, Futuro)',
    descripcion: 'Una tirada simple para una visión general de la evolución de una situación.',
    numeroCartas: 3,
    posiciones: [
      { numero: 1, nombre: 'Pasado', descripcion: 'Lo que llevó a la situación actual.' },
      { numero: 2, nombre: 'Presente', descripcion: 'La situación actual y lo que necesitas saber ahora.' },
      { numero: 3, nombre: 'Futuro', descripcion: 'Hacia dónde se dirige la situación si todo sigue igual.' },
    ],
  },
  {
    id: 'relacion',
    nombre: 'Relación',
    descripcion: 'Explora la dinámica entre dos personas en cualquier tipo de relación.',
    numeroCartas: 3,
    posiciones: [
      { numero: 1, nombre: 'Tú', descripcion: 'Tu perspectiva y rol en la relación.' },
      { numero: 2, nombre: 'La otra persona', descripcion: 'La perspectiva y rol de la otra persona en la relación.' },
      { numero: 3, nombre: 'La relación', descripcion: 'La dinámica general, los desafíos y el potencial de la relación.' },
    ],
  },
  {
    id: 'caminos-alternativos',
    nombre: 'Caminos Alternativos',
    descripcion: 'Ayuda a elegir entre dos opciones, mostrando los resultados de cada camino.',
    numeroCartas: 5,
    posiciones: [
      { numero: 1, nombre: 'La situación actual', descripcion: 'Donde te encuentras ahora.' },
      { numero: 2, nombre: 'Camino A (Ventajas)', descripcion: 'Beneficios y puntos fuertes de la Opción A.' },
      { numero: 3, nombre: 'Camino A (Desafíos)', descripcion: 'Obstáculos y puntos débiles de la Opción A.' },
      { numero: 4, nombre: 'Camino B (Ventajas)', descripcion: 'Beneficios y puntos fuertes de la Opción B.' },
      { numero: 5, nombre: 'Camino B (Desafíos)', descripcion: 'Obstáculos y puntos débiles de la Opción B.' },
    ],
  },
  {
    id: 'espejo-del-alma',
    nombre: 'Espejo del Alma',
    descripcion: 'Una tirada para la introspección y el autoconocimiento.',
    numeroCartas: 4,
    posiciones: [
      { numero: 1, nombre: 'Yo interior', descripcion: 'Tu verdadero ser, tu esencia.' },
      { numero: 2, nombre: 'Yo exterior', descripcion: 'Cómo te presentas al mundo.' },
      { numero: 3, nombre: 'Lo que necesitas reconocer', descripcion: 'Un aspecto de ti mismo que necesita atención.' },
      { numero: 4, nombre: 'Potencial de crecimiento', descripcion: 'Hacia dónde puedes crecer y evolucionar.' },
    ],
  },
  {
    id: 'proposito-vida',
    nombre: 'Encontrando el Propósito de tu Vida',
    descripcion: 'Una tirada para descubrir y entender el propósito de tu vida',
    numeroCartas: 8,
    posiciones: [
      { numero: 1, nombre: 'Una carta para describir mi propósito', descripcion: 'La esencia de tu propósito.' },
      { numero: 2, nombre: 'Cómo se ve esto día a día', descripcion: 'Cómo se manifiesta tu propósito en la vida cotidiana.' },
      { numero: 3, nombre: 'Cómo se ve esto al final de mi vida', descripcion: 'La visión a largo plazo de tu propósito cumplido.' },
      { numero: 4, nombre: 'Cómo otros ven mi propósito de vida', descripcion: 'La percepción externa de tu misión.' },
      { numero: 5, nombre: 'Paso 1 para realizar mi propósito', descripcion: 'Primer paso concreto para manifestar tu propósito.' },
      { numero: 6, nombre: 'Paso 2 para realizar mi propósito', descripcion: 'Segundo paso concreto para manifestar tu propósito.' },
      { numero: 7, nombre: 'Paso 3 para realizar mi propósito', descripcion: 'Tercer paso concreto para manifestar tu propósito.' },
      { numero: 8, nombre: 'Cómo puedo sacar el máximo provecho de esta vida', descripcion: 'Consejos para aprovechar al máximo tu existencia.' }
    ]
  },
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
  },
  {
    id: 'trabajando-con-sombra',
    nombre: 'Trabajando con tu Sombra',
    descripcion: 'Una tirada para explorar y entender aspectos ocultos de uno mismo.',
    numeroCartas: 6,
    posiciones: [
      { numero: 1, nombre: '¿Qué necesito aceptar?', descripcion: 'Un aspecto de ti mismo que necesita ser reconocido y aceptado.' },
      { numero: 2, nombre: '¿Qué necesito perdonar?', descripcion: 'Algo que necesitas perdonar, ya sea a ti mismo o a otros.' },
      { numero: 3, nombre: '¿Qué necesito liberar?', descripcion: 'Hábitos, miedos o creencias que te retienen.' },
      { numero: 4, nombre: '¿Qué puedo aprender?', descripcion: 'Lecciones valiosas que puedes extraer de esta exploración.' },
      { numero: 5, nombre: '¿Dónde puedo buscar sanación y recuperación?', descripcion: 'Fuentes de apoyo y curación.' },
      { numero: 6, nombre: '¿Dónde puedo obtener ayuda?', descripcion: 'Personas o recursos que te pueden asistir en este proceso.' }
    ]
  },
  {
    id: 'arbol-proteccion',
    nombre: 'Tirada del Árbol de la Protección',
    descripcion: 'Un tendido para explorar la protección en tu vida y cómo mantenerla.',
    numeroCartas: 11,
    posiciones: [
      { numero: 1, nombre: 'Tú, en tu situación', descripcion: 'Tu posición actual en la situación.' },
      { numero: 2, nombre: 'Rama fuerte', descripcion: 'Algo o alguien que te hace fuerte en tu situación.' },
      { numero: 3, nombre: 'Rama débil', descripcion: 'Algo o alguien que te debilita en tu situación.' },
      { numero: 4, nombre: 'Protección emocional', descripcion: 'Dónde puedes encontrar apoyo y fuerza emocional en tu situación.' },
      { numero: 5, nombre: 'Protección emocional', descripcion: 'Dónde puedes encontrar apoyo y fuerza emocional en tu situación.' },
      { numero: 6, nombre: 'Protección física', descripcion: 'Las posibilidades que tienes para la protección en el aspecto físico de tu situación.' },
      { numero: 7, nombre: 'Protección física', descripcion: 'Las posibilidades que tienes para la protección en el aspecto físico de tu situación.' },
      { numero: 8, nombre: 'Protección espiritual', descripcion: 'Los caminos que tu espíritu puede seguir para la protección en tu situación.' },
      { numero: 9, nombre: 'Protección espiritual', descripcion: 'Los caminos que tu espíritu puede seguir para la protección en tu situación.' },
      { numero: 10, nombre: 'El punto del hacha', descripcion: 'Algo o alguien que deberías evitar para ganar o mantener tu protección.' },
      { numero: 11, nombre: 'Raíces', descripcion: 'Algo que debes hacer para asegurarte de permanecer protegido.' }
    ]
  },
  {
    id: 'que-estas-atrayendo',
    nombre: '¿Qué estás Atrayendo?',
    descripcion: 'Una tirada de tarot para entender las energías y experiencias que estás manifestando en tu vida.',
    numeroCartas: 6,
    posiciones: [
      { numero: 1, nombre: 'Mensaje de tus guías sobre lo que está disponible', descripcion: 'Información y oportunidades que tus guías quieren que sepas que están a tu alcance.' },
      { numero: 2, nombre: 'Cuál es el tema principal de lo que viene', descripcion: 'El mensaje central o la energía dominante de los próximos acontecimientos.' },
      { numero: 3, nombre: 'Que viene en amor y parejas', descripcion: 'Tendencias y eventos relacionados con tus relaciones sentimentales.' },
      { numero: 4, nombre: 'Que viene en estudio/trabajo y dinero', descripcion: 'Desarrollos en tu ámbito profesional, académico y financiero.' },
      { numero: 5, nombre: 'Que experiencias atraes para tu evolución', descripcion: 'Lecciones y situaciones que se presentarán para tu crecimiento personal.' },
      { numero: 6, nombre: 'Mensaje Final', descripcion: 'Un consejo o resumen importante para ti.' }
    ]
  },
  {
    id: 'guias-espirituales',
    nombre: 'Tirada para conectar con tus Guías Espirituales',
    descripcion: 'Un tendido para ayudarte a establecer una conexión más profunda y clara con tus guías espirituales.',
    numeroCartas: 6,
    posiciones: [
      { numero: 1, nombre: 'Tu Guía', descripcion: 'Representa a uno de tus guías espirituales principales o el tipo de energía que te guía.' },
      { numero: 2, nombre: 'Lo que tu guía quiere que sepas', descripcion: 'Un mensaje crucial o una lección que tus guías desean comunicarte.' },
      { numero: 3, nombre: 'Qué te ayudará a conectar mejor con tu guía', descripcion: 'Acciones o prácticas que fortalecerán tu conexión espiritual.' },
      { numero: 4, nombre: 'La misión de tu guía al ayudarte', descripcion: 'El propósito o la razón por la cual este guía está contigo.' },
      { numero: 5, nombre: 'Lo que ha estado oculto hasta ahora', descripcion: 'Aspectos de tu camino o de la influencia de tus guías que no habías percibido.' },
      { numero: 6, nombre: 'Qué señal usará tu guía espiritual para captar tu atención', descripcion: 'Cómo tus guías intentarán comunicarse contigo o enviarte señales.' }
    ]
  },
  {
    id: 'relacion-sentimental',
    nombre: 'Lectura de la relación sentimental',
    descripcion: 'Una tirada detallada para analizar la dinámica de una relación de pareja.',
    numeroCartas: 16,
    posiciones: [
      { numero: 1, nombre: 'Él (Su esencia)', descripcion: 'La esencia de la persona masculina en la relación.' },
      { numero: 2, nombre: 'Ella (Su esencia)', descripcion: 'La esencia de la persona femenina en la relación.' },
      { numero: 3, nombre: 'Comunicación (Él)', descripcion: 'La forma en que él se comunica en la relación.' },
      { numero: 4, nombre: 'Comunicación (Ella)', descripcion: 'La forma en que ella se comunica en la relación.' },
      { numero: 5, nombre: 'Sentimientos (Él)', descripcion: 'Los sentimientos profundos de él hacia la relación.' },
      { numero: 6, nombre: 'Sentimientos (Ella)', descripcion: 'Los sentimientos profundos de ella hacia la relación.' },
      { numero: 7, nombre: 'Virtudes (Él)', descripcion: 'Las cualidades positivas de él en la relación.' },
      { numero: 8, nombre: 'Defectos (Él)', descripcion: 'Los aspectos negativos o desafíos de él en la relación.' },
      { numero: 9, nombre: 'Virtudes (Ella)', descripcion: 'Las cualidades positivas de ella en la relación.' },
      { numero: 10, nombre: 'Defectos (Ella)', descripcion: 'Los aspectos negativos o desafíos de ella en la relación.' },
      { numero: 11, nombre: 'Pasado', descripcion: 'Influencias y eventos del pasado que afectan la relación.' },
      { numero: 12, nombre: 'Pasado', descripcion: 'Influencias y eventos del pasado que afectan la relación.' },
      { numero: 13, nombre: 'Presente', descripcion: 'La situación actual y las energías presentes en la relación.' },
      { numero: 14, nombre: 'Presente', descripcion: 'La situación actual y las energías presentes en la relación.' },
      { numero: 15, nombre: 'Futuro', descripcion: 'Las tendencias y el posible resultado futuro de la relación.' },
      { numero: 16, nombre: 'Futuro', descripcion: 'Las tendencias y el posible resultado futuro de la relación.' }
    ]
  },
  {
    id: 'posibilidad-nueva-relacion-amorosa',
    nombre: 'Posibilidad de una Nueva Relación Amorosa',
    descripcion: 'Una tirada para explorar el potencial de una nueva relación amorosa y sus factores influyentes.',
    numeroCartas: 7,
    posiciones: [
      { numero: 1, nombre: 'Tu estado emocional actual', descripcion: 'Cómo te sientes actualmente en relación al amor.' },
      { numero: 2, nombre: 'Bloqueos internos', descripcion: 'Miedos, inseguridades o patrones que impiden una nueva relación.' },
      { numero: 3, nombre: 'Lo que atraes', descripcion: 'El tipo de energía o personas que estás atrayendo en este momento.' },
      { numero: 4, nombre: 'Lo que necesitas aprender', descripcion: 'Lecciones importantes para tu crecimiento en el amor.' },
      { numero: 5, nombre: 'Influencias externas', descripcion: 'Factores o personas de tu entorno que afectan tus posibilidades.' },
      { numero: 6, nombre: 'Acciones recomendadas', descripcion: 'Pasos prácticos para abrirte a una nueva relación.' },
      { numero: 7, nombre: 'Posible futuro en el amor', descripcion: 'El panorama general de tu vida amorosa en el futuro cercano.' }
    ]
  },
  {
    id: 'unlock-yourself',
    nombre: 'Libera tu Potencial (Unlock Yourself)',
    descripcion: 'Una tirada para descubrir tu verdadero ser y tus capacidades.',
    numeroCartas: 6,
    posiciones: [
      { numero: 1, nombre: 'Tu verdadero yo', descripcion: 'La esencia de quién eres realmente.' },
      { numero: 2, nombre: 'Tu corazón', descripcion: 'Lo que tu corazón desea o siente profundamente.' },
      { numero: 3, nombre: 'Tu mente', descripcion: 'Tus pensamientos, creencias y patrones mentales.' },
      { numero: 4, nombre: 'Tu espiritualidad', descripcion: 'Tu conexión con lo trascendente y tu propósito espiritual.' },
      { numero: 5, nombre: 'Fortalezas', descripcion: 'Tus talentos, habilidades y cualidades positivas.' },
      { numero: 6, nombre: 'Debilidades', descripcion: 'Áreas donde puedes mejorar o desafíos a superar.' }
    ]
  },
  {
    id: 'tirada-anual-cumpleanos',
    nombre: 'Tirada Anual de Cumpleaños',
    descripcion: 'Una tirada para el año personal, desde un cumpleaños hasta el siguiente.',
    numeroCartas: 17,
    posiciones: [
      { numero: 1, nombre: 'Arcano Personal', descripcion: 'La energía dominante o el arquetipo que te acompañará este año.' },
      { numero: 2, nombre: 'Arcano Anual', descripcion: 'El tema general o la lección principal para este año.' },
      { numero: 3, nombre: 'Qué dejar ir', descripcion: 'Hábitos, creencias o situaciones que ya no te sirven y debes soltar.' },
      { numero: 4, nombre: 'Qué integrar', descripcion: 'Nuevas ideas, cualidades o experiencias que debes incorporar a tu vida.' },
      { numero: 5, nombre: 'Energía del presente', descripcion: 'La vibración actual y lo que está manifestándose en tu vida.' },
      { numero: 6, nombre: 'Enero', descripcion: 'Energías y eventos clave para el mes de Enero.' },
      { numero: 7, nombre: 'Febrero', descripcion: 'Energías y eventos clave para el mes de Febrero.' },
      { numero: 8, nombre: 'Marzo', descripcion: 'Energías y eventos clave para el mes de Marzo.' },
      { numero: 9, nombre: 'Abril', descripcion: 'Energías y eventos clave para el mes de Abril.' },
      { numero: 10, nombre: 'Mayo', descripcion: 'Energías y eventos clave para el mes de Mayo.' },
      { numero: 11, nombre: 'Junio', descripcion: 'Energías y eventos clave para el mes de Junio.' },
      { numero: 12, nombre: 'Julio', descripcion: 'Energías y eventos clave para el mes de Julio.' },
      { numero: 13, nombre: 'Agosto', descripcion: 'Energías y eventos clave para el mes de Agosto.' },
      { numero: 14, nombre: 'Septiembre', descripcion: 'Energías y eventos clave para el mes de Septiembre.' },
      { numero: 15, nombre: 'Octubre', descripcion: 'Energías y eventos clave para el mes de Octubre.' },
      { numero: 16, nombre: 'Noviembre', descripcion: 'Energías y eventos clave para el mes de Noviembre.' },
      { numero: 17, nombre: 'Diciembre', descripcion: 'Energías y eventos clave para el mes de Diciembre.' }
    ]
  },
  {
    id: 'desbloqueando-creatividad',
    nombre: 'Desbloqueando tu Creatividad',
    descripcion: 'Una tirada para entender y liberar tu potencial creativo.',
    numeroCartas: 6,
    posiciones: [
      { numero: 1, nombre: 'Tu espíritu creativo', descripcion: 'La esencia de tu creatividad innata.' },
      { numero: 2, nombre: 'Bloqueo 1', descripcion: 'Un obstáculo importante que te impide ser creativo.' },
      { numero: 3, nombre: 'Bloqueo 2', descripcion: 'Otro bloqueo que afecta tu flujo creativo.' },
      { numero: 4, nombre: 'Cómo superarlo', descripcion: 'Consejos para superar el primer bloqueo.' },
      { numero: 5, nombre: 'Cómo superarlo', descripcion: 'Consejos para superar el segundo bloqueo.' },
      { numero: 6, nombre: 'Mensaje final', descripcion: 'Un mensaje inspirador o de cierre para tu viaje creativo.' }
    ]
  },
  {
    id: 'tirada-general-21-cartas',
    nombre: 'Tirada General (21 Cartas)',
    descripcion: 'Una tirada extensa para una visión profunda de diversas áreas de la vida, incluyendo lo espiritual, físico y emocional.',
    numeroCartas: 21,
    posiciones: [
      { numero: 1, nombre: 'Corona', descripcion: '¿Cuál es el propósito de tu vida? ¿Quién eres? ¿La mayor aspiración a lograr en la vida.' },
      { numero: 2, nombre: 'Físico (Meta/Acción)', descripcion: '¿Qué estás obteniendo?' },
      { numero: 3, nombre: 'Físico (Meta/Acción)', descripcion: '¿Qué hacer para obtenerlo?' },
      { numero: 4, nombre: 'Sueños profundos, realizaciones y pasiones.', descripcion: 'Descripción de sueños, realizaciones y pasiones.' }, // Added description
      { numero: 5, nombre: 'Emocional (Meta/Acción)', descripcion: 'Resultados, resultados y mensajes cósmicos para problemas.' },
      { numero: 6, nombre: 'Emocional (Meta/Acción)', descripcion: '¿Qué estás haciendo para arreglar las cosas?' },
      { numero: 7, nombre: 'Garganta', descripcion: '¿Qué estás expresando?' },
      { numero: 8, nombre: '¿Qué estás diciendo/sintiendo?', descripcion: 'Descripción de lo que estás diciendo o sintiendo.' }, // Added description
      { numero: 9, nombre: 'Resultados, resultados y mensajes cósmicos para problemas.', descripcion: 'Descripción de resultados y mensajes cósmicos.' }, // Added description
      { numero: 10, nombre: 'Conciencia de la Sombra', descripcion: '¿Qué pueden hacer los demás/decirte para ayudarte? ¿Estás solo?' },
      { numero: 11, nombre: 'Inacción', descripcion: 'Malos hábitos y adicciones, ¿cómo lidiar con el dolor?' },
      { numero: 12, nombre: 'Extraversión', descripcion: 'Dolor en lo externo/afuera, ¿qué estás mostrando?' },
      { numero: 13, nombre: 'Corazón', descripcion: '¿Cómo estás tratando a los demás/a ti mismo? Sufrimiento.' },
      { numero: 14, nombre: 'Introversión', descripcion: 'Dolor en lo interno/adentro, ¿qué estás interiorizando?' },
      { numero: 15, nombre: 'Inacción', descripcion: '¿Estás deprimido? ¿Qué te falta/echas de menos?' },
      { numero: 16, nombre: 'Autoconciencia', descripcion: '¿Por qué te estás enfocando en el dolor? ¿Dónde está el bien?' },
      { numero: 17, nombre: 'Plexo Solar', descripcion: '¿De dónde derivar energía para la acción?' },
      { numero: 18, nombre: 'Ombligo', descripcion: '¿Estás motivado para cambiar o empezar?' },
      { numero: 19, nombre: 'Raíz', descripcion: '¿Estás sano? ¿Desconectado del propósito?' },
      { numero: 20, nombre: '¿Cuándo empezó el 12? ¿Dónde empezó el dolor?', descripcion: 'Descripción del inicio del dolor externo.' }, // Added description
      { numero: 21, nombre: '¿Cuándo empezó el 14? ¿Dónde empezó el dolor?', descripcion: 'Descripción del inicio del dolor interno.' } // Added description
    ]
  },
  {
    id: 'vida-pasada',
    nombre: 'Vida Pasada',
    descripcion: 'Una tirada para explorar la influencia de vidas pasadas en tu presente.',
    numeroCartas: 6,
    posiciones: [
      { numero: 1, nombre: 'Quién fuiste', descripcion: 'Una descripción de tu identidad o rol en una vida pasada.' },
      { numero: 2, nombre: 'Lo que hiciste', descripcion: 'Acciones o eventos significativos de esa vida.' },
      { numero: 3, nombre: 'Lección aprendida', descripcion: 'La lección kármica o el aprendizaje clave de esa vida.' },
      { numero: 4, nombre: 'Cómo te afecta ahora', descripcion: 'La influencia de esa vida pasada en tu situación actual.' },
      { numero: 5, nombre: 'Liberación', descripcion: 'Cómo puedes liberarte de patrones negativos de esa vida.' },
      { numero: 6, nombre: 'Regalo', descripcion: 'Un talento, sabiduría o regalo que traes de esa vida pasada.' }
    ]
  },
  {
    id: 'nuevos-comienzos',
    nombre: 'Nuevos Comienzos',
    descripcion: 'Una tirada para iniciar un nuevo capítulo, explorando el potencial y los desafíos.',
    numeroCartas: 5,
    posiciones: [
      { numero: 1, nombre: 'Dónde estás ahora', descripcion: 'Tu situación actual al borde de un nuevo comienzo.' },
      { numero: 2, nombre: 'Lo que dejas atrás', descripcion: 'Aspectos, situaciones o energías que necesitas soltar.' },
      { numero: 3, nombre: 'El camino a seguir', descripcion: 'La dirección general o los pasos iniciales para tu nuevo comienzo.' },
      { numero: 4, nombre: 'Potencial', descripcion: 'Lo que puedes lograr o manifestar en este nuevo ciclo.' },
      { numero: 5, nombre: 'Desafíos', descripcion: 'Obstáculos o dificultades que podrías enfrentar en el camino.' }
    ]
  },
  {
    id: 'sanacion-emocional',
    nombre: 'Sanación Emocional',
    descripcion: 'Una tirada para abordar y sanar heridas emocionales.',
    numeroCartas: 5,
    posiciones: [
      { numero: 1, nombre: 'La herida', descripcion: 'La naturaleza de la herida emocional que necesita sanación.' },
      { numero: 2, nombre: 'Origen', descripcion: 'La causa o el momento en que se originó la herida.' },
      { numero: 3, nombre: 'Impacto actual', descripcion: 'Cómo la herida está afectando tu vida en el presente.' },
      { numero: 4, nombre: 'Qué necesitas para sanar', descripcion: 'Acciones, actitudes o apoyos necesarios para la curación.' },
      { numero: 5, nombre: 'Resultado de la sanación', descripcion: 'El posible estado después de que la herida haya sanado.' }
    ]
  },
  {
    id: 'decision-importante',
    nombre: 'Decisión Importante',
    descripcion: 'Una tirada para ayudarte a tomar una decisión crucial en tu vida.',
    numeroCartas: 5,
    posiciones: [
      { numero: 1, nombre: 'La decisión', descripcion: 'El corazón de la decisión que necesitas tomar.' },
      { numero: 2, nombre: 'Pros', descripcion: 'Los beneficios o ventajas de tomar esta decisión.' },
      { numero: 3, nombre: 'Contras', descripcion: 'Los desafíos o desventajas de tomar esta decisión.' },
      { numero: 4, nombre: 'Influencias ocultas', descripcion: 'Factores subyacentes o inconscientes que afectan la decisión.' },
      { numero: 5, nombre: 'Consejo final', descripcion: 'Una guía o recomendación clara para ayudarte a decidir.' }
    ]
  },
  {
    id: 'trabajo-carrera',
    nombre: 'Trabajo y Carrera',
    descripcion: 'Una tirada para explorar tu camino profesional y encontrar claridad en tu carrera.',
    numeroCartas: 6,
    posiciones: [
      { numero: 1, nombre: 'Situación actual', descripcion: 'Tu situación actual en el ámbito laboral o profesional.' },
      { numero: 2, nombre: 'Desafíos', descripcion: 'Obstáculos o problemas que enfrentas en tu carrera.' },
      { numero: 3, nombre: 'Fortalezas', descripcion: 'Tus habilidades, talentos y cualidades positivas.' },
      { numero: 4, nombre: 'Oportunidades', descripcion: 'Posibles caminos o aperturas para tu crecimiento profesional.' },
      { numero: 5, nombre: 'Consejo', descripcion: 'Qué acción tomar o qué actitud adoptar para mejorar tu carrera.' },
      { numero: 6, nombre: 'Resultado futuro', descripcion: 'El posible resultado si sigues el consejo dado.' }
    ]
  },
  {
    id: 'finanzas-abundancia',
    nombre: 'Finanzas y Abundancia',
    descripcion: 'Una tirada para entender tu situación financiera y atraer más abundancia.',
    numeroCartas: 5,
    posiciones: [
      { numero: 1, nombre: 'Estado actual', descripcion: 'Tu situación financiera actual.' },
      { numero: 2, nombre: 'Bloqueos', descripcion: 'Creencias o hábitos que impiden tu flujo de abundancia.' },
      { numero: 3, nombre: 'Potencial', descripcion: 'Tu capacidad para atraer dinero y prosperidad.' },
      { numero: 4, nombre: 'Acción', descripcion: 'Pasos prácticos para mejorar tus finanzas.' },
      { numero: 5, nombre: 'Resultado', descripcion: 'El posible resultado de seguir las acciones recomendadas.' }
    ]
  },
  {
    id: 'salud-bienestar',
    nombre: 'Salud y Bienestar',
    descripcion: 'Una tirada para explorar tu estado de salud y obtener orientación para el bienestar.',
    numeroCartas: 5,
    posiciones: [
      { numero: 1, nombre: 'Estado general', descripcion: 'Tu estado de salud y bienestar actual.' },
      { numero: 2, nombre: 'Área de enfoque', descripcion: 'Un área específica de tu salud que necesita atención.' },
      { numero: 3, nombre: 'Causa subyacente', descripcion: 'Posibles orígenes de cualquier desequilibrio.' },
      { numero: 4, nombre: 'Acción recomendada', descripcion: 'Pasos para mejorar tu salud física o mental.' },
      { numero: 5, nombre: 'Resultado', descripcion: 'El posible resultado de seguir las recomendaciones.' }
    ]
  }
];