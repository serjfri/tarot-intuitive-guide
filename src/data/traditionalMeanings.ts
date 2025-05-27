export interface TraditionalCardMeaning {
  id: string;
  nombre: string;
  significadoDerecho: string;
  significadoInvertido: string;
  detalle: string;
  elemento?: string;
  palabrasClave?: string[];
  arquetipo?: string; // Mantengo por si decides usarlo en alguna tradicional
}

export const traditionalMeanings: TraditionalCardMeaning[] = [
  // ARCANOS MAYORES
  {
    id: 'EL_LOCO',
    nombre: 'El Loco',
    significadoDerecho: 'Nuevos comienzos, espontaneidad, espíritu libre, fe en el futuro, inexperiencia.',
    significadoInvertido: 'Imprudencia, insensatez, temeridad, falta de dirección, riesgo innecesario.',
    detalle: 'El Loco representa el comienzo de un nuevo viaje. Es el espíritu libre que se lanza a lo desconocido con optimismo, a veces con ingenuidad. Invita a la espontaneidad y a la confianza en el camino, pero también advierte sobre la imprudencia.',
    elemento: 'Aire',
    palabrasClave: ['Comienzos', 'Libertad', 'Aventura', 'Inocencia', 'Riesgo']
  },
  {
    id: 'EL_MAGO',
    nombre: 'El Mago',
    significadoDerecho: 'Iniciativa, poder personal, habilidad, manifestación, concentración, recursos.',
    significadoInvertido: 'Manipulación, engaño, falta de poder, indecisión, habilidades no utilizadas.',
    detalle: 'El Mago simboliza la capacidad de manifestar los deseos a través de la voluntad, la habilidad y la concentración. Representa el dominio de los recursos disponibles y la iniciativa para crear la realidad propia.',
    elemento: 'Aire',
    palabrasClave: ['Creación', 'Poder', 'Habilidad', 'Concentración', 'Iniciativa']
  },
  {
    id: 'LA_SACERDOTISA',
    nombre: 'La Sacerdotisa',
    significadoDerecho: 'Intuición, misterio, sabiduría interior, subconsciente, conocimiento oculto.',
    significadoInvertido: 'Secretos revelados, superficialidad, ignorancia, represión de la intuición.',
    detalle: 'La Sacerdotisa es el arquetipo de la sabiduría oculta y la intuición. Invita a escuchar la voz interior, a confiar en los presentimientos y a explorar los misterios del subconsciente. Representa lo que está por desvelarse.',
    elemento: 'Agua',
    palabrasClave: ['Intuición', 'Misterio', 'Sabiduría', 'Subconsciente', 'Secretos']
  },
  {
    id: 'LA_EMPERATRIZ',
    nombre: 'La Emperatriz',
    significadoDerecho: 'Fertilidad, maternidad, creatividad, abundancia, naturaleza, sensualidad.',
    significadoInvertido: 'Bloqueos creativos, dependencia, infertilidad, negligencia, falta de armonía.',
    detalle: 'La Emperatriz simboliza la abundancia en todas sus formas: fertilidad (literal o creativa), crecimiento, belleza y conexión con la naturaleza. Es una figura nutricia que invita a disfrutar de los placeres de la vida y a manifestar la creatividad.',
    elemento: 'Tierra',
    palabrasClave: ['Abundancia', 'Fertilidad', 'Creatividad', 'Naturaleza', 'Maternidad']
  },
  {
    id: 'EL_EMPERADOR',
    nombre: 'El Emperador',
    significadoDerecho: 'Autoridad, estructura, control, liderazgo, estabilidad, paternidad, orden.',
    significadoInvertido: 'Tiranía, control excesivo, rigidez, abuso de poder, falta de disciplina, caos.',
    detalle: 'El Emperador representa el orden, la autoridad y el control. Simboliza la figura paterna, la ley y la estructura que proporciona estabilidad y seguridad. Invita a tomar las riendas y a establecer límites claros.',
    elemento: 'Fuego',
    palabrasClave: ['Autoridad', 'Estructura', 'Control', 'Liderazgo', 'Orden']
  },
  {
    id: 'EL_SUMO_SACERDOTE',
    nombre: 'El Sumo Sacerdote',
    significadoDerecho: 'Espiritualidad, tradición, conformidad, guía, moralidad, enseñanza, mentoría.',
    significadoInvertido: 'Rebelión, no conformidad, valores personales, dogmatismo, instituciones represivas.',
    detalle: 'El Sumo Sacerdote representa las instituciones, las tradiciones y la búsqueda de conocimiento espiritual o moral. Es un guía, un mentor, que ofrece sabiduría y estructura. Invita a seguir el camino establecido o a buscar un maestro.',
    elemento: 'Tierra',
    palabrasClave: ['Tradición', 'Guía', 'Espiritualidad', 'Moralidad', 'Enseñanza']
  },
  {
    id: 'LOS_ENAMORADOS',
    nombre: 'Los Enamorados',
    significadoDerecho: 'Elecciones, uniones, relaciones, valores, amor, armonía, alineación.',
    significadoInvertido: 'Desarmonía, conflicto, malas elecciones, indecisión, separación.',
    detalle: 'Los Enamorados simbolizan una elección crucial, a menudo relacionada con el amor o las relaciones, pero también con los valores personales. Representa la necesidad de tomar una decisión que resuene con el corazón y el espíritu.',
    elemento: 'Aire',
    palabrasClave: ['Elección', 'Amor', 'Relación', 'Armonía', 'Valores']
  },
  {
    id: 'EL_CARRO',
    nombre: 'El Carro',
    significadoDerecho: 'Victoria, control, determinación, voluntad, dirección, progreso.',
    significadoInvertido: 'Falta de control, derrota, dirección errónea, agresividad, obstáculos.',
    detalle: 'El Carro es la carta del triunfo y la determinación. Simboliza el avance a través de la fuerza de voluntad y el control de las pasiones. Invita a tomar las riendas y a seguir adelante con confianza hacia el objetivo.',
    elemento: 'Agua',
    palabrasClave: ['Victoria', 'Control', 'Determinación', 'Voluntad', 'Progreso']
  },
  {
    id: 'LA_JUSTICIA',
    nombre: 'La Justicia',
    significadoDerecho: 'Justicia, equilibrio, verdad, ley, causa y efecto, objetividad.',
    significadoInvertido: 'Injusticia, desequilibrio, prejuicio, corrupción, legalismos.',
    detalle: 'La Justicia representa el equilibrio, la verdad y la equidad. Simboliza las consecuencias de las acciones y la necesidad de tomar decisiones imparciales. Invita a la responsabilidad y a la rendición de cuentas.',
    elemento: 'Aire',
    palabrasClave: ['Equilibrio', 'Verdad', 'Justicia', 'Responsabilidad', 'Ley']
  },
  {
    id: 'EL_ERMITAÑO',
    nombre: 'El Ermitaño',
    significadoDerecho: 'Introspección, soledad, guía interior, sabiduría, búsqueda de la verdad.',
    significadoInvertido: 'Aislamiento, soledad, retirada, terquedad, rechazo a la ayuda.',
    detalle: 'El Ermitaño simboliza la búsqueda interior, la introspección y la sabiduría. Invita a retirarse del bullicio externo para encontrar respuestas dentro de uno mismo. Representa la guía y la iluminación personal.',
    elemento: 'Tierra',
    palabrasClave: ['Introspección', 'Soledad', 'Sabiduría', 'Búsqueda', 'Guía']
  },
  {
    id: 'LA_RUEDA_DE_LA_FORTUNA',
    nombre: 'La Rueda de la Fortuna',
    significadoDerecho: 'Cambio, ciclos, suerte, destino, punto de inflexión, oportunidades.',
    significadoInvertido: 'Mala suerte, ciclos descendentes, resistencia al cambio, estancamiento.',
    detalle: 'La Rueda de la Fortuna representa los ciclos de la vida, el cambio y el destino. Simboliza los altibajos y las oportunidades que se presentan. Invita a adaptarse al flujo de la vida y a reconocer el momento oportuno.',
    elemento: 'Fuego',
    palabrasClave: ['Cambio', 'Destino', 'Suerte', 'Oportunidades', 'Ciclos']
  },
  {
    id: 'LA_FUERZA',
    nombre: 'La Fuerza',
    significadoDerecho: 'Fuerza interior, coraje, compasión, autocontrol, dominio, paciencia.',
    significadoInvertido: 'Debilidad, falta de control, miedo, agresividad, duda, auto-duda.',
    detalle: 'La Fuerza simboliza la fortaleza interior, el coraje y la capacidad de dominar las pasiones a través de la compasión y el autocontrol. Invita a enfrentar los desafíos con valentía y a confiar en la propia resistencia.',
    elemento: 'Fuego',
    palabrasClave: ['Coraje', 'Fuerza interior', 'Autocontrol', 'Paciencia', 'Compasión']
  },
  {
    id: 'EL_COLGADO',
    nombre: 'El Colgado',
    significadoDerecho: 'Perspectiva, sacrificio, suspensión, nuevas visiones, entrega, introspección.',
    significadoInvertido: 'Estancamiento, martirio, resistencia al sacrificio, indecisión.',
    detalle: 'El Colgado representa una pausa necesaria para obtener una nueva perspectiva. Simboliza el sacrificio voluntario y la entrega para ver las cosas desde un ángulo diferente. Invita a la reflexión y a soltar el control.',
    elemento: 'Agua',
    palabrasClave: ['Perspectiva', 'Sacrificio', 'Pausa', 'Entrega', 'Visión']
  },
  {
    id: 'LA_MUERTE',
    nombre: 'La Muerte',
    significadoDerecho: 'Fin de un ciclo, transformación, cambio radical, liberación, renacimiento.',
    significadoInvertido: 'Resistencia al cambio, estancamiento, miedo a lo desconocido, final doloroso.',
    detalle: 'La Muerte simboliza el fin inevitable de un ciclo y el comienzo de otro. Representa la transformación profunda, la liberación de lo viejo para dar paso a lo nuevo. Invita a aceptar el cambio y a soltar lo que ya no sirve.',
    elemento: 'Agua',
    palabrasClave: ['Transformación', 'Cambio', 'Final', 'Renacimiento', 'Liberación']
  },
  {
    id: 'LA_TEMPLANZA',
    nombre: 'La Templanza',
    significadoDerecho: 'Equilibrio, moderación, armonía, paciencia, fusión, sanación.',
    significadoInvertido: 'Desequilibrio, exceso, falta de moderación, impaciencia, desarmonía.',
    detalle: 'La Templanza representa el equilibrio, la moderación y la armonía. Simboliza la capacidad de integrar diferentes aspectos y encontrar el punto medio. Invita a la paciencia, la adaptación y la sanación interna.',
    elemento: 'Fuego',
    palabrasClave: ['Equilibrio', 'Moderación', 'Armonía', 'Paciencia', 'Sanación']
  },
  {
    id: 'EL_DIABLO',
    nombre: 'El Diablo',
    significadoDerecho: 'Sombra, adicción, materialismo, tentación, esclavitud, obsesión.',
    significadoInvertido: 'Liberación, desapego, superación de adicciones, despertar, control.',
    detalle: 'El Diablo representa las ataduras, las adicciones, el materialismo y las tentaciones. Simboliza la sombra y los aspectos oscuros de la psique. Invita a reconocer las cadenas que uno mismo ha creado y a buscar la liberación.',
    elemento: 'Tierra',
    palabrasClave: ['Adicción', 'Sombra', 'Materialismo', 'Tentación', 'Liberación']
  },
  {
    id: 'LA_TORRE',
    nombre: 'La Torre',
    significadoDerecho: 'Destrucción, cambio repentino, revelación, colapso, liberación, despertar.',
    significadoInvertido: 'Desastre evitado, resistencia al cambio, destrucción incompleta, caos continuo.',
    detalle: 'La Torre simboliza la destrucción repentina de estructuras falsas o ilusiones. Representa una liberación abrupta que, aunque dolorosa, es necesaria para la verdad. Invita a reconstruir sobre cimientos sólidos.',
    elemento: 'Fuego',
    palabrasClave: ['Destrucción', 'Cambio repentino', 'Colapso', 'Liberación', 'Revelación']
  },
  {
    id: 'LA_ESTRELLA',
    nombre: 'La Estrella',
    significadoDerecho: 'Esperanza, inspiración, serenidad, renovación, guía espiritual, sanación.',
    significadoInvertido: 'Desesperanza, desilusión, falta de inspiración, pesimismo, desconexión.',
    detalle: 'La Estrella representa la esperanza, la inspiración y la serenidad. Simboliza la guía divina y la renovación después de tiempos difíciles. Invita a la fe, a la curación y a la conexión con el universo.',
    elemento: 'Aire',
    palabrasClave: ['Esperanza', 'Inspiración', 'Serenidad', 'Renovación', 'Guía']
  },
  {
    id: 'LA_LUNA',
    nombre: 'La Luna',
    significadoDerecho: 'Intuición, ilusión, subconsciente, misterio, sueños, miedo, engaño.',
    significadoInvertido: 'Confusión, claridad parcial, miedo superado, verdades ocultas, engaño revelado.',
    detalle: 'La Luna simboliza el reino del subconsciente, los sueños, las ilusiones y los miedos. Representa la intuición y los misterios. Invita a explorar las profundidades del ser y a discernir entre la realidad y la fantasía.',
    elemento: 'Agua',
    palabrasClave: ['Intuición', 'Ilusión', 'Misterio', 'Miedo', 'Sueños']
  },
  {
    id: 'EL_SOL',
    nombre: 'El Sol',
    significadoDerecho: 'Alegría, éxito, vitalidad, iluminación, verdad, optimismo, celebración.',
    significadoInvertido: 'Falta de claridad, pesimismo, infelicidad, éxito pospuesto, ego.',
    detalle: 'El Sol representa la alegría, el éxito, la vitalidad y la iluminación. Simboliza la verdad, la claridad y el optimismo. Invita a celebrar la vida, a compartir la felicidad y a brillar con luz propia.',
    elemento: 'Fuego',
    palabrasClave: ['Alegría', 'Éxito', 'Vitalidad', 'Iluminación', 'Optimismo']
  },
  {
    id: 'EL_JUICIO',
    nombre: 'El Juicio',
    significadoDerecho: 'Juicio, despertar, renacimiento, absolución, llamado, evaluación.',
    significadoInvertido: 'Auto-duda, no aceptar el juicio, remordimiento, evadir responsabilidades.',
    detalle: 'El Juicio simboliza un despertar, una evaluación o una llamada a la acción. Representa la absolución y el renacimiento espiritual. Invita a reflexionar sobre el pasado y a avanzar con una nueva comprensión.',
    elemento: 'Fuego',
    palabrasClave: ['Despertar', 'Juicio', 'Renacimiento', 'Absolución', 'Llamada']
  },
  {
    id: 'EL_MUNDO',
    nombre: 'El Mundo',
    significadoDerecho: 'Culminación, éxito, plenitud, integración, logro, realización, cierre de ciclo.',
    significadoInvertido: 'Incompletitud, retrasos, falta de cierre, atajos, frustración.',
    detalle: 'El Mundo representa la culminación, el éxito y la plenitud. Simboliza la realización de un ciclo y la integración de todas las partes. Invita a celebrar los logros y a reconocer la propia perfección.',
    elemento: 'Tierra', // Aunque algunos lo asocian con todos los elementos al ser la culminación
    palabrasClave: ['Culminación', 'Éxito', 'Plenitud', 'Logro', 'Integración']
  },

  // ARCANOS MENORES - BASTOS
  {
    id: 'AS_DE_BASTOS',
    nombre: 'As de Bastos',
    significadoDerecho: 'Inspiración, nuevos comienzos, creatividad, potencial, entusiasmo, aventura.',
    significadoInvertido: 'Falta de inspiración, indecisión, oportunidades perdidas, frustración, retrasos.',
    detalle: 'Representa una chispa de inspiración, un nuevo comienzo lleno de energía y entusiasmo. Sugiere el inicio de un proyecto creativo o una aventura emocionante.',
    elemento: 'Fuego',
    palabrasClave: ['Inspiración', 'Comienzo', 'Creatividad', 'Potencial', 'Entusiasmo']
  },
  {
    id: 'DOS_DE_BASTOS',
    nombre: 'Dos de Bastos',
    significadoDerecho: 'Planificación, decisiones futuras, progreso, visión, atrevimiento.',
    significadoInvertido: 'Miedo al cambio, indecisión, falta de planificación, permanecer en la zona de confort.',
    detalle: 'Simboliza la fase de planificación antes de dar el siguiente gran paso. Invita a la reflexión estratégica sobre el futuro y a considerar nuevas oportunidades.',
    elemento: 'Fuego',
    palabrasClave: ['Planificación', 'Visión', 'Decisión', 'Progreso', 'Opciones']
  },
  {
    id: 'TRES_DE_BASTOS',
    nombre: 'Tres de Bastos',
    significadoDerecho: 'Expansión, visión a largo plazo, colaboración, esperar resultados, emprendimiento.',
    significadoInvertido: 'Demoras, frustración, falta de crecimiento, traición, expectativas irrealistas.',
    detalle: 'Representa el momento en que se empiezan a ver los frutos de un esfuerzo inicial. Sugiere expansión, colaboración y la visión de un futuro prometedor, a menudo con viajes o comercio.',
    elemento: 'Fuego',
    palabrasClave: ['Expansión', 'Colaboración', 'Resultados', 'Visión', 'Viajes']
  },
  {
    id: 'CUATRO_DE_BASTOS',
    nombre: 'Cuatro de Bastos',
    significadoDerecho: 'Celebración, armonía, hogar, comunidad, estabilidad, seguridad, reencuentro.',
    significadoInvertido: 'Inestabilidad, falta de armonía, transiciones, seguridad cuestionada, conflicto.',
    detalle: 'Una carta de alegría, celebración y estabilidad en el hogar o la comunidad. Simboliza la finalización exitosa de un proyecto o el disfrute de la paz y la seguridad.',
    elemento: 'Fuego',
    palabrasClave: ['Celebración', 'Hogar', 'Estabilidad', 'Armonía', 'Comunidad']
  },
  {
    id: 'CINCO_DE_BASTOS',
    nombre: 'Cinco de Bastos',
    significadoDerecho: 'Conflicto, competencia, desacuerdo, rivalidad, desafíos, aprendizaje.',
    significadoInvertido: 'Evitar el conflicto, resolución, conformidad, lucha interna, tensión disipada.',
    detalle: 'Representa un conflicto o competencia. Sugiere desacuerdos, pero también la oportunidad de aprender y crecer a través de la confrontación constructiva. Es una lucha que no necesariamente es negativa.',
    elemento: 'Fuego',
    palabrasClave: ['Conflicto', 'Competencia', 'Desacuerdo', 'Desafíos', 'Lucha']
  },
  {
    id: 'SEIS_DE_BASTOS',
    nombre: 'Seis de Bastos',
    significadoDerecho: 'Victoria, reconocimiento, progreso, confianza, éxito público.',
    significadoInvertido: 'Fracaso, falta de reconocimiento, orgullo, arrogancia, metas inalcanzables.',
    detalle: 'Simboliza el triunfo y el reconocimiento público. Es una carta de confianza y autoestima elevada, que indica que se han superado los desafíos y se está disfrutando del éxito.',
    elemento: 'Fuego',
    palabrasClave: ['Victoria', 'Reconocimiento', 'Progreso', 'Confianza', 'Éxito']
  },
  {
    id: 'SIETE_DE_BASTOS',
    nombre: 'Siete de Bastos',
    significadoDerecho: 'Defensa, valentía, desafío, protección, perseverancia, posición fuerte.',
    significadoInvertido: 'Ceder, rendirse, miedo, debilidad, indecisión, sentirse abrumado.',
    detalle: 'Representa la necesidad de defender una posición o un principio. Sugiere que se está enfrentando un desafío y se necesita valentía y perseverancia para mantener la postura.',
    elemento: 'Fuego',
    palabrasClave: ['Defensa', 'Valentía', 'Desafío', 'Perseverancia', 'Protección']
  },
  {
    id: 'OCHO_DE_BASTOS',
    nombre: 'Ocho de Bastos',
    significadoDerecho: 'Rapidez, acción, movimiento, noticias, comunicación, viaje, progreso acelerado.',
    significadoInvertido: 'Retrasos, estancamiento, lentitud, falta de comunicación, confusión.',
    detalle: 'Indica movimiento rápido, noticias y acción. Sugiere que los eventos se están desarrollando a gran velocidad y que las cosas están progresando sin impedimentos.',
    elemento: 'Fuego',
    palabrasClave: ['Rapidez', 'Movimiento', 'Noticias', 'Acción', 'Viajes']
  },
  {
    id: 'NUEVE_DE_BASTOS',
    nombre: 'Nueve de Bastos',
    significadoDerecho: 'Resistencia, perseverancia, resiliencia, valentía, cautela, agotamiento.',
    significadoInvertido: 'Paranoia, miedo, agotamiento, terquedad, falta de resistencia, rendición.',
    detalle: 'Simboliza la resistencia y la resiliencia después de un largo período de lucha. Sugiere que se está agotado, pero se tiene la fuerza para soportar un último desafío.',
    elemento: 'Fuego',
    palabrasClave: ['Resistencia', 'Perseverancia', 'Resiliencia', 'Valentía', 'Cansancio']
  },
  {
    id: 'DIEZ_DE_BASTOS',
    nombre: 'Diez de Bastos',
    significadoDerecho: 'Carga, responsabilidad, agotamiento, deber, agobio, fin de un ciclo pesado.',
    significadoInvertido: 'Alivio, delegación, liberación de cargas, sobrecarga continua, agotamiento.',
    detalle: 'Representa una carga pesada, responsabilidades abrumadoras o el agotamiento. Sugiere que se está llevando demasiado peso, pero que el final del esfuerzo está cerca.',
    elemento: 'Fuego',
    palabrasClave: ['Carga', 'Responsabilidad', 'Agotamiento', 'Deber', 'Agobio']
  },
  {
    id: 'SOTA_DE_BASTOS',
    nombre: 'Sota de Bastos',
    significadoDerecho: 'Nuevas ideas, inspiración, entusiasmo, mensajes, creatividad, aventura.',
    significadoInvertido: 'Falta de entusiasmo, indecisión, inmadurez, mala noticia, retraso.',
    detalle: 'La Sota de Bastos es un mensajero de nuevas ideas y oportunidades. Representa la energía juvenil, la curiosidad y la chispa para iniciar algo nuevo. Puede ser una persona entusiasta.',
    elemento: 'Fuego',
    palabrasClave: ['Mensaje', 'Novedad', 'Entusiasmo', 'Creatividad', 'Aventura']
  },
  {
    id: 'CABALLO_DE_BASTOS',
    nombre: 'Caballo de Bastos',
    significadoDerecho: 'Acción, aventura, pasión, viaje, impetuosidad, energía, avance rápido.',
    significadoInvertido: 'Retrasos, impulsividad, frustración, falta de dirección, escapismo.',
    detalle: 'El Caballo de Bastos simboliza la acción, la aventura y la pasión. Representa un viaje o un avance rápido, a menudo con una energía impetuosa. Puede ser una persona audaz y aventurera.',
    elemento: 'Fuego',
    palabrasClave: ['Acción', 'Aventura', 'Pasión', 'Viaje', 'Impulsividad']
  },
  {
    id: 'REINA_DE_BASTOS',
    nombre: 'Reina de Bastos',
    significadoDerecho: 'Creatividad, confianza, independencia, carisma, optimismo, vitalidad.',
    significadoInvertido: 'Egoísmo, celos, arrogancia, dominancia, superficialidad, falta de confianza.',
    detalle: 'La Reina de Bastos encarna la creatividad, la confianza y la independencia. Es una persona carismática y optimista que irradia vitalidad y alegría. Invita a tomar las riendas de la propia vida con pasión.',
    elemento: 'Fuego',
    palabrasClave: ['Creatividad', 'Confianza', 'Independencia', 'Carisma', 'Optimismo']
  },
  {
    id: 'REY_DE_BASTOS',
    nombre: 'Rey de Bastos',
    significadoDerecho: 'Liderazgo, visión, autoridad, inspiración, carisma, honor, emprendedor.',
    significadoInvertido: 'Tiranía, impulsividad, autoritarismo, falta de visión, arrogancia, ira.',
    detalle: 'El Rey de Bastos representa un líder visionario, carismático y con autoridad. Simboliza la inspiración y la capacidad de guiar a otros con honor y pasión. Invita a tomar un rol de liderazgo.',
    elemento: 'Fuego',
    palabrasClave: ['Liderazgo', 'Visión', 'Autoridad', 'Inspiración', 'Emprendedor']
  },

  // ARCANOS MENORES - COPAS
  {
    id: 'AS_DE_COPAS',
    nombre: 'As de Copas',
    significadoDerecho: 'Nuevas emociones, amor, intuición, compasión, alegría, creatividad emocional.',
    significadoInvertido: 'Emociones reprimidas, amor no correspondido, infelicidad, creatividad bloqueada.',
    detalle: 'Representa el comienzo de una nueva emoción, un nuevo amor o una explosión de alegría y creatividad. Simboliza la apertura del corazón y la abundancia emocional.',
    elemento: 'Agua',
    palabrasClave: ['Amor', 'Emoción', 'Alegría', 'Intuición', 'Comienzo']
  },
  {
    id: 'DOS_DE_COPAS',
    nombre: 'Dos de Copas',
    significadoDerecho: 'Unión, amor, asociación, armonía, conexión, alma gemela, respeto mutuo.',
    significadoInvertido: 'Desarmonía, ruptura, desequilibrio, desconfianza, separación, conflicto.',
    detalle: 'Simboliza una unión armoniosa, ya sea en el amor, la amistad o los negocios. Representa el respeto mutuo, la conexión profunda y la reciprocidad en las relaciones.',
    elemento: 'Agua',
    palabrasClave: ['Unión', 'Amor', 'Armonía', 'Conexión', 'Asociación']
  },
  {
    id: 'TRES_DE_COPAS',
    nombre: 'Tres de Copas',
    significadoDerecho: 'Celebración, amistad, comunidad, reunión, alegría, trabajo en equipo.',
    significadoInvertido: 'Exceso, chismes, aislamiento, fin de la amistad, sobreindulgencia.',
    detalle: 'Una carta de celebración, alegría y amistad. Representa reuniones sociales, bodas o cualquier evento donde la comunidad y la felicidad compartida son el centro.',
    elemento: 'Agua',
    palabrasClave: ['Celebración', 'Amistad', 'Comunidad', 'Alegría', 'Reunión']
  },
  {
    id: 'CUATRO_DE_COPAS',
    nombre: 'Cuatro de Copas',
    significadoDerecho: 'Apatía, aburrimiento, reevaluación, oportunidades perdidas, introspección.',
    significadoInvertido: 'Nuevas oportunidades, aburrimiento superado, elección, motivación.',
    detalle: 'Simboliza la apatía o el aburrimiento, a menudo por no apreciar lo que se tiene o por estar demasiado absorto en uno mismo. Advierte sobre oportunidades que se están ignorando.',
    elemento: 'Agua',
    palabrasClave: ['Apatía', 'Aburrimiento', 'Reevaluación', 'Ignorancia', 'Oportunidades']
  },
  {
    id: 'CINCO_DE_COPAS',
    nombre: 'Cinco de Copas',
    significadoDerecho: 'Pérdida, arrepentimiento, dolor, duelo, desilusión, enfoque en lo negativo.',
    significadoInvertido: 'Aceptación, superación de la pérdida, esperanza, perdón, seguir adelante.',
    detalle: 'Representa la tristeza y el dolor por una pérdida, a menudo enfocándose en lo que se ha perdido en lugar de lo que aún queda. Es una carta de duelo y desilusión.',
    elemento: 'Agua',
    palabrasClave: ['Pérdida', 'Duelo', 'Arrepentimiento', 'Desilusión', 'Tristeza']
  },
  {
    id: 'SEIS_DE_COPAS',
    nombre: 'Seis de Copas',
    significadoDerecho: 'Nostalgia, recuerdos, infancia, pasado, inocencia, reencuentros.',
    significadoInvertido: 'Vivir en el pasado, estancamiento, inmadurez, aferrarse a lo viejo.',
    detalle: 'Simboliza la nostalgia, los recuerdos de la infancia y la inocencia. Puede indicar un reencuentro con alguien del pasado o un momento de reflexión sobre las raíces.',
    elemento: 'Agua',
    palabrasClave: ['Nostalgia', 'Infancia', 'Recuerdos', 'Reencuentro', 'Inocencia']
  },
  {
    id: 'SIETE_DE_COPAS',
    nombre: 'Siete de Copas',
    significadoDerecho: 'Elecciones, ilusiones, fantasía, sueños, indecisión, muchas opciones.',
    significadoInvertido: 'Claridad, decisión, tentación, exceso de realidad, enfoque.',
    detalle: 'Representa la abundancia de opciones, a menudo ilusorias o confusas. Advierte sobre la fantasía y la indecisión. Invita a la claridad y a elegir con sabiduría entre las posibilidades.',
    elemento: 'Agua',
    palabrasClave: ['Opciones', 'Ilusión', 'Fantasía', 'Indecisión', 'Sueños']
  },
  {
    id: 'OCHO_DE_COPAS',
    nombre: 'Ocho de Copas',
    significadoDerecho: 'Abandono, búsqueda, viaje espiritual, dejar atrás, insatisfacción, cambio.',
    significadoInvertido: 'Miedo al cambio, aferrarse, estancamiento, regreso, seguir adelante.',
    detalle: 'Simboliza el acto de dejar atrás una situación que ya no satisface, a menudo por una búsqueda espiritual o emocional más profunda. Es un viaje de desapego y búsqueda de un nuevo propósito.',
    elemento: 'Agua',
    palabrasClave: ['Abandono', 'Búsqueda', 'Desapego', 'Viaje', 'Insatisfacción']
  },
  {
    id: 'NUEVE_DE_COPAS',
    nombre: 'Nueve de Copas',
    significadoDerecho: 'Satisfacción, deseos cumplidos, bienestar, indulgencia, autocomplacencia.',
    significadoInvertido: 'Insatisfacción, deseos no cumplidos, materialismo, autocomplacencia excesiva.',
    detalle: 'La carta de los deseos cumplidos y la satisfacción personal. Representa la alegría de haber logrado lo que se anhelaba y el disfrute de los placeres de la vida.',
    elemento: 'Agua',
    palabrasClave: ['Satisfacción', 'Deseos cumplidos', 'Bienestar', 'Alegría', 'Indulgencia']
  },
  {
    id: 'DIEZ_DE_COPAS',
    nombre: 'Diez de Copas',
    significadoDerecho: 'Felicidad, plenitud, armonía familiar, alegría, hogar, paz emocional.',
    significadoInvertido: 'Familia disfuncional, falta de armonía, tristeza, ruptura, alienación.',
    detalle: 'Simboliza la máxima felicidad y plenitud emocional. Representa la armonía en el hogar, la familia y las relaciones. Es una carta de paz duradera y realización emocional.',
    elemento: 'Agua',
    palabrasClave: ['Felicidad', 'Plenitud', 'Familia', 'Armonía', 'Paz']
  },
  {
    id: 'SOTA_DE_COPAS',
    nombre: 'Sota de Copas',
    significadoDerecho: 'Mensajes emocionales, creatividad, intuición, sensibilidad, nuevos sentimientos.',
    significadoInvertido: 'Inmadurez emocional, fantasía, engaño, sensibilidad excesiva, manipulación.',
    detalle: 'La Sota de Copas trae mensajes relacionados con las emociones, el amor o la creatividad. Representa una persona sensible, intuitiva y con nuevas ideas artísticas o emocionales.',
    elemento: 'Agua',
    palabrasClave: ['Mensaje', 'Emoción', 'Creatividad', 'Sensibilidad', 'Intuición']
  },
  {
    id: 'CABALLO_DE_COPAS',
    nombre: 'Caballo de Copas',
    significadoDerecho: 'Propuestas, invitaciones, romance, idealismo, encanto, mensajero.',
    significadoInvertido: 'Propuestas fallidas, desilusión, superficialidad, celos, engaño, inmadurez.',
    detalle: 'El Caballo de Copas es un mensajero de propuestas, invitaciones o romance. Representa el idealismo y el encanto, a menudo relacionado con un enfoque emocional o artístico.',
    elemento: 'Agua',
    palabrasClave: ['Propuesta', 'Invitación', 'Romance', 'Idealismo', 'Mensajero']
  },
  {
    id: 'REINA_DE_COPAS',
    nombre: 'Reina de Copas',
    significadoDerecho: 'Intuición, compasión, empatía, amor, sanación, emocionalidad, sensibilidad.',
    significadoInvertido: 'Inseguridad, co-dependencia, emocionalidad excesiva, manipulación, inestabilidad.',
    detalle: 'La Reina de Copas encarna la intuición, la compasión y el amor incondicional. Es una persona empática, sanadora y profundamente conectada con sus emociones y las de los demás. Invita a escuchar el corazón.',
    elemento: 'Agua',
    palabrasClave: ['Intuición', 'Compasión', 'Empatía', 'Amor', 'Sanación']
  },
  {
    id: 'REY_DE_COPAS',
    nombre: 'Rey de Copas',
    significadoDerecho: 'Equilibrio emocional, compasión, sabiduría, diplomacia, control de emociones.',
    significadoInvertido: 'Inestabilidad emocional, manipulación, frialdad, adicción, represión.',
    detalle: 'El Rey de Copas representa el equilibrio emocional, la compasión y la sabiduría. Es una persona que domina sus emociones y puede ofrecer apoyo y consejo de forma diplomática y madura. Invita a la calma y la comprensión.',
    elemento: 'Agua',
    palabrasClave: ['Equilibrio', 'Compasión', 'Sabiduría', 'Diplomacia', 'Control']
  },

  // ARCANOS MENORES - ESPADAS
  {
    id: 'AS_DE_ESPADAS',
    nombre: 'As de Espadas',
    significadoDerecho: 'Claridad mental, verdad, nueva idea, avance, victoria, justicia, decisón.',
    significadoInvertido: 'Confusión, caos, idea destructiva, injusticia, tiranía, malas decisiones.',
    detalle: 'Representa una nueva idea brillante, una revelación o un momento de claridad mental. Simboliza el poder del intelecto y la capacidad de cortar la confusión para encontrar la verdad.',
    elemento: 'Aire',
    palabrasClave: ['Claridad', 'Verdad', 'Idea', 'Decisión', 'Victoria']
  },
  {
    id: 'DOS_DE_ESPADAS',
    nombre: 'Dos de Espadas',
    significadoDerecho: 'Indecisión, punto muerto, equilibrio, evitar la verdad, tregua.',
    significadoInvertido: 'Engaño, doblez, indecisión superada, liberación de la tensión, verdad.',
    detalle: 'Simboliza la indecisión y un punto muerto. Representa la necesidad de tomar una decisión importante, a menudo porque se está evitando una verdad o un conflicto. Invita a la objetividad.',
    elemento: 'Aire',
    palabrasClave: ['Indecisión', 'Punto muerto', 'Equilibrio', 'Evitación', 'Elección']
  },
  {
    id: 'TRES_DE_ESPADAS',
    nombre: 'Tres de Espadas',
    significadoDerecho: 'Dolor, pena, desamor, separación, traición, duelo, tristeza.',
    significadoInvertido: 'Superar el dolor, perdón, reconciliación, recuperación, alivio.',
    detalle: 'Una carta de dolor, pena y desilusión, a menudo por un desamor o una traición. Representa el impacto emocional de la verdad o una situación difícil, invitando a procesar el duelo.',
    elemento: 'Aire',
    palabrasClave: ['Dolor', 'Pena', 'Desamor', 'Separación', 'Duelo']
  },
  {
    id: 'CUATRO_DE_ESPADAS',
    nombre: 'Cuatro de Espadas',
    significadoDerecho: 'Descanso, recuperación, meditación, retiro, paz, contemplación, sanación.',
    significadoInvertido: 'Inquietud, agotamiento, estancamiento, reincorporación, falta de descanso.',
    detalle: 'Simboliza la necesidad de descanso y recuperación. Representa un retiro temporal para la meditación y la sanación después de un período de estrés. Invita a recargar energías.',
    elemento: 'Aire',
    palabrasClave: ['Descanso', 'Recuperación', 'Meditación', 'Paz', 'Retiro']
  },
  {
    id: 'CINCO_DE_ESPADAS',
    nombre: 'Cinco de Espadas',
    significadoDerecho: 'Derrota, humillación, conflicto, auto-sabotaje, pérdida, engaño, victoria pírrica.',
    significadoInvertido: 'Reconciliación, aceptación, remordimiento, ganar a cualquier costo, conflicto inevitable.',
    detalle: 'Representa la derrota, la humillación o un conflicto donde no hay verdaderos ganadores. Sugiere el egoísmo, la falta de honor y las consecuencias de ganar a cualquier costo.',
    elemento: 'Aire',
    palabrasClave: ['Derrota', 'Conflicto', 'Humillación', 'Pérdida', 'Traición']
  },
  {
    id: 'SEIS_DE_ESPADAS',
    nombre: 'Seis de Espadas',
    significadoDerecho: 'Transición, cambio, superar dificultades, viaje, dejar atrás, sanación.',
    significadoInvertido: 'Estancamiento, resistencia al cambio, viaje fallido, dificultades persistentes.',
    detalle: 'Simboliza la transición y el dejar atrás un pasado difícil para avanzar hacia un futuro más tranquilo. Representa un viaje (físico o emocional) hacia la sanación y la paz.',
    elemento: 'Aire',
    palabrasClave: ['Transición', 'Cambio', 'Superación', 'Viaje', 'Dejar atrás']
  },
  {
    id: 'SIETE_DE_ESPADAS',
    nombre: 'Siete de Espadas',
    significadoDerecho: 'Engaño, estrategias, sigilo, mentira, escapismo, falta de honor.',
    significadoInvertido: 'Confesión, verdad, honestidad, arrepentimiento, exposición, revelación.',
    detalle: 'Representa el engaño, las estrategias astutas o el escapismo. Sugiere que alguien está siendo deshonesto o intentando salirse con la suya de forma sigilosa. Advierte sobre la necesidad de ser astuto o de evitar ser engañado.',
    elemento: 'Aire',
    palabrasClave: ['Engaño', 'Estrategia', 'Sigilo', 'Mentira', 'Escapismo']
  },
  {
    id: 'OCHO_DE_ESPADAS',
    nombre: 'Ocho de Espadas',
    significadoDerecho: 'Restricción, limitación, miedo, indefensión, auto-encarcelamiento, perspectiva limitada.',
    significadoInvertido: 'Liberación, auto-aceptación, romper barreras, encontrar soluciones, libertad.',
    detalle: 'Simboliza la sensación de estar atrapado o limitado, a menudo por miedos autoimpuestos o una perspectiva limitada. Invita a reconocer las barreras y a encontrar la salida.',
    elemento: 'Aire',
    palabrasClave: ['Restricción', 'Miedo', 'Limitación', 'Atrapado', 'Auto-sabotaje']
  },
  {
    id: 'NUEVE_DE_ESPADAS',
    nombre: 'Nueve de Espadas',
    significadoDerecho: 'Ansiedad, pesadillas, preocupación, culpa, depresión, miedo, tormento mental.',
    significadoInvertido: 'Esperanza, liberación de la ansiedad, fe, confrontar los miedos, recuperación.',
    detalle: 'Una carta de angustia mental, ansiedad y preocupación. Representa pesadillas, culpa o la sensación de estar abrumado por los pensamientos negativos. Invita a buscar ayuda y a enfrentar los miedos.',
    elemento: 'Aire',
    palabrasClave: ['Ansiedad', 'Preocupación', 'Pesadilla', 'Culpa', 'Tormento']
  },
  {
    id: 'DIEZ_DE_ESPADAS',
    nombre: 'Diez de Espadas',
    significadoDerecho: 'Final, ruina, colapso, derrota, final doloroso, rock bottom, aceptación.',
    significadoInvertido: 'Evitar el final, recuperación, mejora, resurgimiento, esperanza.',
    detalle: 'Simboliza el final definitivo y doloroso de una situación. Representa la ruina o el colapso, pero también la aceptación de que lo peor ha pasado y se puede empezar de nuevo. Es el punto más bajo antes del resurgir.',
    elemento: 'Aire',
    palabrasClave: ['Final', 'Derrota', 'Colapso', 'Ruina', 'Aceptación']
  },
  {
    id: 'SOTA_DE_ESPADAS',
    nombre: 'Sota de Espadas',
    significadoDerecho: 'Curiosidad, verdad, comunicación, espionaje, vigilante, nuevas ideas.',
    significadoInvertido: 'Chismes, información falsa, imprudencia, espionaje, falta de claridad.',
    detalle: 'La Sota de Espadas representa la curiosidad, la búsqueda de la verdad y la comunicación directa. Puede indicar un mensaje o una persona joven y perspicaz, a veces con tendencia a la imprudencia verbal.',
    elemento: 'Aire',
    palabrasClave: ['Curiosidad', 'Verdad', 'Comunicación', 'Espionaje', 'Vigilancia']
  },
  {
    id: 'CABALLO_DE_ESPADAS',
    nombre: 'Caballo de Espadas',
    significadoDerecho: 'Ambición, acción rápida, confrontación, impetuosidad, valentía, verdad sin tacto.',
    significadoInvertido: 'Agresividad, tiranía, falta de tacto, precipitación, dirección errónea, conflicto.',
    detalle: 'El Caballo de Espadas simboliza la acción rápida y la ambición, a menudo con una tendencia a la confrontación. Representa la valentía para decir la verdad, incluso si carece de tacto.',
    elemento: 'Aire',
    palabrasClave: ['Acción', 'Ambición', 'Confrontación', 'Impetuosidad', 'Valentía']
  },
  {
    id: 'REINA_DE_ESPADAS',
    nombre: 'Reina de Espadas',
    significadoDerecho: 'Independencia, intelecto, honestidad, perspicacia, verdad, independencia emocional.',
    significadoInvertido: 'Amargura, frialdad, crueldad, manipulación, emocionalidad reprimida.',
    detalle: 'La Reina de Espadas encarna la independencia, el intelecto agudo y la honestidad brutal. Es una persona perspicaz y directa, que valora la verdad por encima de todo, a veces con frialdad emocional.',
    elemento: 'Aire',
    palabrasClave: ['Intelecto', 'Independencia', 'Honestidad', 'Perspicacia', 'Verdad']
  },
  {
    id: 'REY_DE_ESPADAS',
    nombre: 'Rey de Espadas',
    significadoDerecho: 'Autoridad, intelecto, lógica, verdad, justicia, disciplina, claridad mental.',
    significadoInvertido: 'Tiranía, crueldad, manipulación, falta de lógica, autoritarismo, frialdad.',
    detalle: 'El Rey de Espadas representa la autoridad intelectual, la lógica y la justicia. Es una persona con gran claridad mental, disciplina y la capacidad de tomar decisiones imparciales. Invita a la razón y la verdad.',
    elemento: 'Aire',
    palabrasClave: ['Autoridad', 'Intelecto', 'Lógica', 'Justicia', 'Claridad']
  },

  // ARCANOS MENORES - OROS/PENTÁCULOS
  {
    id: 'AS_DE_OROS',
    nombre: 'As de Oros',
    significadoDerecho: 'Nuevas oportunidades, prosperidad, seguridad, manifestación, inicio material.',
    significadoInvertido: 'Oportunidades perdidas, inestabilidad financiera, falta de planificación, materialismo.',
    detalle: 'Representa una nueva oportunidad material, financiera o de carrera. Simboliza el inicio de algo concreto y la semilla para la prosperidad y la seguridad.',
    elemento: 'Tierra',
    palabrasClave: ['Oportunidad', 'Prosperidad', 'Seguridad', 'Inicio', 'Manifestación']
  },
  {
    id: 'DOS_DE_OROS',
    nombre: 'Dos de Oros',
    significadoDerecho: 'Equilibrio, adaptación, malabarismo, flexibilidad, gestión de prioridades.',
    significadoInvertido: 'Desequilibrio, desorganización, problemas financieros, falta de adaptación.',
    detalle: 'Simboliza la necesidad de equilibrar múltiples prioridades o de adaptarse a los cambios. Representa el malabarismo entre diferentes áreas de la vida, a menudo financieras.',
    elemento: 'Tierra',
    palabrasClave: ['Equilibrio', 'Adaptación', 'Malabarismo', 'Flexibilidad', 'Prioridades']
  },
  {
    id: 'TRES_DE_OROS',
    nombre: 'Tres de Oros',
    significadoDerecho: 'Trabajo en equipo, colaboración, aprendizaje, maestría, reconocimiento, éxito.',
    significadoInvertido: 'Falta de trabajo en equipo, falta de habilidad, mediocridad, egoísmo, desinterés.',
    detalle: 'Representa el trabajo en equipo, la colaboración y el aprendizaje de habilidades. Sugiere que el éxito se logra a través de la cooperación y el dominio de un oficio o proyecto.',
    elemento: 'Tierra',
    palabrasClave: ['Colaboración', 'Trabajo en equipo', 'Aprendizaje', 'Habilidad', 'Reconocimiento']
  },
  {
    id: 'CUATRO_DE_OROS',
    nombre: 'Cuatro de Oros',
    significadoDerecho: 'Seguridad, posesiones, control, estabilidad, avaricia, acumulación.',
    significadoInvertido: 'Inseguridad, generosidad, desapego, pérdidas, resistencia al cambio, materialismo excesivo.',
    detalle: 'Simboliza la seguridad material y la necesidad de aferrarse a las posesiones o al control. Puede indicar estabilidad, pero también avaricia o miedo a la pérdida.',
    elemento: 'Tierra',
    palabrasClave: ['Seguridad', 'Posesiones', 'Control', 'Avaricia', 'Estabilidad']
  },
  {
    id: 'CINCO_DE_OROS',
    nombre: 'Cinco de Oros',
    significadoDerecho: 'Pérdida, pobreza, enfermedad, adversidad, exclusión, crisis, falta de apoyo.',
    significadoInvertido: 'Recuperación, superación de la adversidad, encontrar ayuda, esperanza, mejoras.',
    detalle: 'Una carta de dificultad, pérdida y adversidad. Representa la sensación de exclusión o de estar en una situación de escasez, a menudo material o de apoyo. Invita a buscar ayuda.',
    elemento: 'Tierra',
    palabrasClave: ['Pérdida', 'Pobreza', 'Adversidad', 'Crisis', 'Exclusión']
  },
  {
    id: 'SEIS_DE_OROS',
    nombre: 'Seis de Oros',
    significadoDerecho: 'Generosidad, caridad, dar y recibir, equilibrio, ayuda mutua, compartición.',
    significadoInvertido: 'Deuda, egoísmo, desequilibrio, caridad forzada, manipulación, codicia.',
    detalle: 'Simboliza la generosidad y el equilibrio en el dar y recibir. Representa la caridad, la ayuda mutua y la importancia de compartir los recursos con los demás.',
    elemento: 'Tierra',
    palabrasClave: ['Generosidad', 'Dar y recibir', 'Equilibrio', 'Caridad', 'Compartir']
  },
  {
    id: 'SIETE_DE_OROS',
    nombre: 'Siete de Oros',
    significadoDerecho: 'Paciencia, inversión, evaluación, crecimiento lento, espera, resultados.',
    significadoInvertido: 'Impaciencia, fracaso, pérdidas, falta de progreso, malas inversiones.',
    detalle: 'Representa la paciencia y la necesidad de esperar los resultados de una inversión o un esfuerzo. Sugiere una fase de evaluación del progreso, reconociendo que el crecimiento es lento pero constante.',
    elemento: 'Tierra',
    palabrasClave: ['Paciencia', 'Inversión', 'Espera', 'Resultados', 'Crecimiento']
  },
  {
    id: 'OCHO_DE_OROS',
    nombre: 'Ocho de Oros',
    significadoDerecho: 'Maestría, habilidad, dedicación, artesanía, aprendizaje, perfeccionamiento.',
    significadoInvertido: 'Perfeccionismo, mediocridad, falta de concentración, aprendiz descuidado, obsesión.',
    detalle: 'Simboliza la dedicación, la maestría y el perfeccionamiento de una habilidad. Representa el trabajo arduo y la atención al detalle, lo que lleva al dominio de un oficio o tarea.',
    elemento: 'Tierra',
    palabrasClave: ['Maestría', 'Habilidad', 'Dedicación', 'Perfeccionamiento', 'Trabajo']
  },
  {
    id: 'NUEVE_DE_OROS',
    nombre: 'Nueve de Oros',
    significadoDerecho: 'Independencia, autosuficiencia, lujo, éxito, disfrute de la riqueza, gracia.',
    significadoInvertido: 'Pérdida, inseguridad, robo, materialismo excesivo, dependencia, fraude.',
    detalle: 'La carta de la independencia, la autosuficiencia y el disfrute de la riqueza. Representa la gratificación personal por el esfuerzo y el éxito alcanzado, permitiendo el lujo y la comodidad.',
    elemento: 'Tierra',
    palabrasClave: ['Independencia', 'Autosuficiencia', 'Lujo', 'Éxito', 'Riqueza']
  },
  {
    id: 'DIEZ_DE_OROS',
    nombre: 'Diez de Oros',
    significadoDerecho: 'Riqueza, herencia, familia, tradición, seguridad, legado, culminación material.',
    significadoInvertido: 'Pérdida de herencia, inestabilidad familiar, fracaso, ruptura, nuevos valores.',
    detalle: 'Simboliza la riqueza, la seguridad y la herencia familiar. Representa la culminación material y la prosperidad que se transmite a través de las generaciones. Es una carta de legado y estabilidad duradera.',
    elemento: 'Tierra',
    palabrasClave: ['Riqueza', 'Herencia', 'Familia', 'Seguridad', 'Legado']
  },
  {
    id: 'SOTA_DE_OROS',
    nombre: 'Sota de Oros',
    significadoDerecho: 'Nuevas oportunidades, estudio, aprendizaje, concentración, manifestación, mensajes.',
    significadoInvertido: 'Falta de disciplina, pereza, malas noticias financieras, irrealismo, desperdicio.',
    detalle: 'La Sota de Oros es un mensajero de nuevas oportunidades en el ámbito material o educativo. Representa la curiosidad por el aprendizaje y la concentración para manifestar ideas en la realidad.',
    elemento: 'Tierra',
    palabrasClave: ['Oportunidad', 'Estudio', 'Aprendizaje', 'Concentración', 'Mensaje']
  },
  {
    id: 'CABALLO_DE_OROS',
    nombre: 'Caballo de Oros',
    significadoDerecho: 'Diligencia, trabajo duro, paciencia, responsabilidad, fiabilidad, avance lento.',
    significadoInvertido: 'Pereza, irresponsabilidad, estancamiento, ineficacia, falta de ambición.',
    detalle: 'El Caballo de Oros simboliza la diligencia, el trabajo duro y la paciencia. Representa un avance lento pero constante y una persona fiable y responsable en asuntos materiales.',
    elemento: 'Tierra',
    palabrasClave: ['Diligencia', 'Trabajo duro', 'Paciencia', 'Responsabilidad', 'Avance lento']
  },
  {
    id: 'REINA_DE_OROS',
    nombre: 'Reina de Oros',
    significadoDerecho: 'Practicidad, nutrición, abundancia, seguridad, estabilidad, realismo, maternidad.',
    significadoInvertido: 'Inseguridad, materialismo, superficialidad, negligencia, desorden, egoísmo.',
    detalle: 'La Reina de Oros encarna la practicidad, la nutrición y la abundancia. Es una persona que crea un ambiente seguro y estable, y que valora los placeres de la vida de forma realista y generosa.',
    elemento: 'Tierra',
    palabrasClave: ['Practicidad', 'Nutrición', 'Abundancia', 'Seguridad', 'Estabilidad']
  },
  {
    id: 'REY_DE_OROS',
    nombre: 'Rey de Oros',
    significadoDerecho: 'Estabilidad, seguridad, éxito, materialismo, prosperidad, liderazgo práctico.',
    significadoInvertido: 'Codicia, corrupción, tiranía, materialismo excesivo, fracaso, rigidez.',
    detalle: 'El Rey de Oros representa la estabilidad, la seguridad y el éxito material. Es una persona que domina el mundo material, creando prosperidad y ofreciendo una base sólida. Invita a la gestión sabia de los recursos.',
    elemento: 'Tierra',
    palabrasClave: ['Estabilidad', 'Seguridad', 'Éxito', 'Prosperidad', 'Liderazgo']
  }
];