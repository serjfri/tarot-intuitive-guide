export interface TraditionalCardMeaning {
  id: string;
  nombre: string;
  
  // Propiedades para la carta al derecho
  significadoDerecho: string;
  detalleDerecho: string;
  palabrasClaveDerechas: string[];

  // Propiedades para la carta invertida
  significadoInvertido: string;
  detalleInvertido: string;
  palabrasClaveInvertidas: string[];
  
  elemento?: string; // Sigue siendo opcional
  arquetipo?: string; // Sigue siendo opcional
}

export const traditionalMeanings: TraditionalCardMeaning[] = [
  // ARCANOS MAYORES
  {
    id: 'EL_LOCO',
    nombre: 'El Loco',
    significadoDerecho: 'Nuevos comienzos, espontaneidad, espíritu libre, fe en el futuro, inexperiencia.',
    significadoInvertido: 'Imprudencia, insensatez, temeridad, falta de dirección, riesgo innecesario.',
    detalleDerecho: 'El Loco representa el comienzo de un nuevo viaje. Es el espíritu libre que se lanza a lo desconocido con optimismo, a veces con ingenuidad. Invita a la espontaneidad y a la confianza en el camino, pero también advierte sobre la imprudencia.',
    detalleInvertido: 'Cuando El Loco aparece invertido, puede indicar imprudencia, decisiones precipitadas o una falta de dirección que lleva a riesgos innecesarios. Advierte sobre la necesidad de anclarse antes de saltar.',
    elemento: 'Aire',
    palabrasClaveDerechas: ['Comienzos', 'Libertad', 'Aventura', 'Inocencia', 'Espontaneidad'],
    palabrasClaveInvertidas: ['Imprudencia', 'Caos', 'Indecisión', 'Riesgo', 'Falta de dirección']
  },
  {
    id: 'EL_MAGO',
    nombre: 'El Mago',
    significadoDerecho: 'Iniciativa, poder personal, habilidad, manifestación, concentración, recursos.',
    significadoInvertido: 'Manipulación, engaño, falta de poder, indecisión, habilidades no utilizadas.',
    detalleDerecho: 'El Mago simboliza la capacidad de manifestar los deseos a través de la voluntad, la habilidad y la concentración. Representa el dominio de los recursos disponibles y la iniciativa para crear la realidad propia.',
    detalleInvertido: 'Invertido, El Mago puede señalar manipulación, engaño o el uso de habilidades para propósitos egoístas. También puede indicar indecisión, falta de concentración o el desaprovechamiento del propio potencial.',
    elemento: 'Aire',
    palabrasClaveDerechas: ['Creación', 'Poder', 'Habilidad', 'Concentración', 'Iniciativa'],
    palabrasClaveInvertidas: ['Manipulación', 'Engaño', 'Indecisión', 'Potencial bloqueado', 'Incompetencia']
  },
  {
    id: 'LA_SACERDOTISA',
    nombre: 'La Sacerdotisa',
    significadoDerecho: 'Intuición, misterio, sabiduría interior, subconsciente, conocimiento oculto.',
    significadoInvertido: 'Secretos revelados, superficialidad, ignorancia, represión de la intuición.',
    detalleDerecho: 'La Sacerdotisa es el arquetipo de la sabiduría oculta y la intuición. Invita a escuchar la voz interior, a confiar en los presentimientos y a explorar los misterios del subconsciente. Representa lo que está por desvelarse.',
    detalleInvertido: 'Invertida, La Sacerdotisa puede indicar secretos que salen a la luz, una superficialidad emocional o un bloqueo de la intuición. Advierte contra ignorar los mensajes del subconsciente o la necesidad de confrontar verdades ocultas.',
    elemento: 'Agua',
    palabrasClaveDerechas: ['Intuición', 'Misterio', 'Sabiduría', 'Subconsciente', 'Conocimiento oculto'],
    palabrasClaveInvertidas: ['Secretos expuestos', 'Superficialidad', 'Ignorancia', 'Intuición bloqueada', 'Desconexión']
  },
  {
    id: 'LA_EMPERATRIZ',
    nombre: 'La Emperatriz',
    significadoDerecho: 'Fertilidad, maternidad, creatividad, abundancia, naturaleza, sensualidad.',
    significadoInvertido: 'Bloqueos creativos, dependencia, infertilidad, negligencia, falta de armonía.',
    detalleDerecho: 'La Emperatriz simboliza la abundancia en todas sus formas: fertilidad (literal o creativa), crecimiento, belleza y conexión con la naturaleza. Es una figura nutricia que invita a disfrutar de los placeres de la vida y a manifestar la creatividad.',
    detalleInvertido: 'Invertida, La Emperatriz puede indicar bloqueos creativos, dependencia excesiva, o problemas relacionados con la fertilidad. También puede señalar negligencia en el cuidado personal o una desconexión con la naturaleza y la armonía.',
    elemento: 'Tierra',
    palabrasClaveDerechas: ['Abundancia', 'Fertilidad', 'Creatividad', 'Naturaleza', 'Maternidad'],
    palabrasClaveInvertidas: ['Bloqueo creativo', 'Dependencia', 'Infertilidad', 'Negligencia', 'Desarmonía']
  },
  {
    id: 'EL_EMPERADOR',
    nombre: 'El Emperador',
    significadoDerecho: 'Autoridad, estructura, control, liderazgo, estabilidad, paternidad, orden.',
    significadoInvertido: 'Tiranía, control excesivo, rigidez, abuso de poder, falta de disciplina, caos.',
    detalleDerecho: 'El Emperador representa el orden, la autoridad y el control. Simboliza la figura paterna, la ley y la estructura que proporciona estabilidad y seguridad. Invita a tomar las riendas y a establecer límites claros.',
    detalleInvertido: 'Invertido, El Emperador puede indicar tiranía, control excesivo, rigidez o abuso de poder. También puede señalar una falta de disciplina, caos o debilidad en el liderazgo, con problemas de autoridad.',
    elemento: 'Fuego',
    palabrasClaveDerechas: ['Autoridad', 'Estructura', 'Control', 'Liderazgo', 'Orden'],
    palabrasClaveInvertidas: ['Tiranía', 'Control excesivo', 'Caos', 'Abuso de poder', 'Falta de disciplina']
  },
  {
    id: 'EL_SUMO_SACERDOTE',
    nombre: 'El Sumo Sacerdote',
    significadoDerecho: 'Espiritualidad, tradición, conformidad, guía, moralidad, enseñanza, mentoría.',
    significadoInvertido: 'Rebelión, no conformidad, valores personales, dogmatismo, instituciones represivas.',
    detalleDerecho: 'El Sumo Sacerdote representa las instituciones, las tradiciones y la búsqueda de conocimiento espiritual o moral. Es un guía, un mentor, que ofrece sabiduría y estructura. Invita a seguir el camino establecido o a buscar un maestro.',
    detalleInvertido: 'Invertido, El Sumo Sacerdote puede sugerir rebelión contra la tradición, la necesidad de encontrar valores personales o un rechazo a la conformidad. También puede indicar dogmatismo, instituciones represivas o falsos guías.',
    elemento: 'Tierra',
    palabrasClaveDerechas: ['Tradición', 'Guía', 'Espiritualidad', 'Moralidad', 'Enseñanza'],
    palabrasClaveInvertidas: ['Rebelión', 'No conformidad', 'Dogmatismo', 'Falsos guías', 'Restricciones']
  },
  {
    id: 'LOS_ENAMORADOS',
    nombre: 'Los Enamorados',
    significadoDerecho: 'Elecciones, uniones, relaciones, valores, amor, armonía, alineación.',
    significadoInvertido: 'Desarmonía, conflicto, malas elecciones, indecisión, separación.',
    detalleDerecho: 'Los Enamorados simbolizan una elección crucial, a menudo relacionada con el amor o las relaciones, pero también con los valores personales. Representa la necesidad de tomar una decisión que resuene con el corazón y el espíritu.',
    detalleInvertido: 'Invertida, Los Enamorados pueden indicar desarmonía en las relaciones, conflictos internos o malas elecciones. También puede señalar indecisión prolongada o la inminente separación.',
    elemento: 'Aire',
    palabrasClaveDerechas: ['Elección', 'Amor', 'Relación', 'Armonía', 'Valores'],
    palabrasClaveInvertidas: ['Desarmonía', 'Conflicto', 'Malas elecciones', 'Indecisión', 'Separación']
  },
  {
    id: 'EL_CARRO',
    nombre: 'El Carro',
    significadoDerecho: 'Victoria, control, determinación, voluntad, dirección, progreso.',
    significadoInvertido: 'Falta de control, derrota, dirección errónea, agresividad, obstáculos.',
    detalleDerecho: 'El Carro es la carta del triunfo y la determinación. Simboliza el avance a través de la fuerza de voluntad y el control de las pasiones. Invita a tomar las riendas y a seguir adelante con confianza hacia el objetivo.',
    detalleInvertido: 'Invertido, El Carro puede indicar una falta de control, derrota o dirección errónea. También puede señalar agresividad descontrolada, obstáculos insuperables o la necesidad de reevaluar el camino.',
    elemento: 'Agua',
    palabrasClaveDerechas: ['Victoria', 'Control', 'Determinación', 'Voluntad', 'Progreso'],
    palabrasClaveInvertidas: ['Derrota', 'Falta de control', 'Dirección errónea', 'Agresividad', 'Obstáculos']
  },
  {
    id: 'LA_JUSTICIA',
    nombre: 'La Justicia',
    significadoDerecho: 'Justicia, equilibrio, verdad, ley, causa y efecto, objetividad.',
    significadoInvertido: 'Injusticia, desequilibrio, prejuicio, corrupción, legalismos.',
    detalleDerecho: 'La Justicia representa el equilibrio, la verdad y la equidad. Simboliza las consecuencias de las acciones y la necesidad de tomar decisiones imparciales. Invita a la responsabilidad y a la rendición de cuentas.',
    detalleInvertido: 'Invertida, La Justicia puede advertir sobre injusticia, desequilibrio o prejuicio. También puede señalar corrupción, legalismos excesivos o la necesidad de examinar decisiones pasadas que no fueron equitativas.',
    elemento: 'Aire',
    palabrasClaveDerechas: ['Equilibrio', 'Verdad', 'Justicia', 'Responsabilidad', 'Ley'],
    palabrasClaveInvertidas: ['Injusticia', 'Desequilibrio', 'Prejuicio', 'Corrupción', 'Sesgo']
  },
  {
    id: 'EL_ERMITAÑO',
    nombre: 'El Ermitaño',
    significadoDerecho: 'Introspección, soledad, guía interior, sabiduría, búsqueda de la verdad.',
    significadoInvertido: 'Aislamiento, soledad, retirada, terquedad, rechazo a la ayuda.',
    detalleDerecho: 'El Ermitaño simboliza la búsqueda interior, la introspección y la sabiduría. Invita a retirarse del bullicio externo para encontrar respuestas dentro de uno mismo. Representa la guía y la iluminación personal.',
    detalleInvertido: 'Invertido, El Ermitaño puede indicar aislamiento autoimpuesto, soledad forzada o una retirada excesiva. También puede señalar terquedad en los propios pensamientos o un rechazo a buscar ayuda externa.',
    elemento: 'Tierra',
    palabrasClaveDerechas: ['Introspección', 'Soledad', 'Sabiduría', 'Búsqueda', 'Guía interior'],
    palabrasClaveInvertidas: ['Aislamiento', 'Retraimiento', 'Terquedad', 'Miedo a la soledad', 'Rechazo a la ayuda']
  },
  {
    id: 'LA_RUEDA_DE_LA_FORTUNA',
    nombre: 'La Rueda de la Fortuna',
    significadoDerecho: 'Cambio, ciclos, suerte, destino, punto de inflexión, oportunidades.',
    significadoInvertido: 'Mala suerte, ciclos descendentes, resistencia al cambio, estancamiento.',
    detalleDerecho: 'La Rueda de la Fortuna representa los ciclos de la vida, el cambio y el destino. Simboliza los altibajos y las oportunidades que se presentan. Invita a adaptarse al flujo de la vida y a reconocer el momento oportuno.',
    detalleInvertido: 'Invertida, La Rueda de la Fortuna puede indicar mala suerte, ciclos descendentes o resistencia al cambio inevitable. También puede señalar estancamiento o la percepción de que la suerte está en contra.',
    elemento: 'Fuego',
    palabrasClaveDerechas: ['Cambio', 'Destino', 'Suerte', 'Oportunidades', 'Ciclos'],
    palabrasClaveInvertidas: ['Mala suerte', 'Estancamiento', 'Resistencia al cambio', 'Inflexibilidad', 'Adversidad']
  },
  {
    id: 'LA_FUERZA',
    nombre: 'La Fuerza',
    significadoDerecho: 'Fuerza interior, coraje, compasión, autocontrol, dominio, paciencia.',
    significadoInvertido: 'Debilidad, falta de control, miedo, agresividad, duda, auto-duda.',
    detalleDerecho: 'La Fuerza simboliza la fortaleza interior, el coraje y la capacidad de dominar las pasiones a través de la compasión y el autocontrol. Invita a enfrentar los desafíos con valentía y a confiar en la propia resistencia.',
    detalleInvertido: 'Invertida, La Fuerza puede indicar debilidad, falta de control sobre las emociones, miedo o agresividad. También puede señalar auto-duda, falta de confianza o la necesidad de recuperar el poder personal.',
    elemento: 'Fuego',
    palabrasClaveDerechas: ['Coraje', 'Fuerza interior', 'Autocontrol', 'Paciencia', 'Compasión'],
    palabrasClaveInvertidas: ['Debilidad', 'Falta de control', 'Miedo', 'Inseguridad', 'Agresividad']
  },
  {
    id: 'EL_COLGADO',
    nombre: 'El Colgado',
    significadoDerecho: 'Perspectiva, sacrificio, suspensión, nuevas visiones, entrega, introspección.',
    significadoInvertido: 'Estancamiento, martirio, resistencia al sacrificio, indecisión.',
    detalleDerecho: 'El Colgado representa una pausa necesaria para obtener una nueva perspectiva. Simboliza el sacrificio voluntario y la entrega para ver las cosas desde un ángulo diferente. Invita a la reflexión y a soltar el control.',
    detalleInvertido: 'Invertido, El Colgado puede indicar estancamiento, martirio autoimpuesto o una resistencia a hacer los sacrificios necesarios. También puede señalar indecisión prolongada o la incapacidad de cambiar de perspectiva.',
    elemento: 'Agua',
    palabrasClaveDerechas: ['Perspectiva', 'Sacrificio', 'Pausa', 'Entrega', 'Visión'],
    palabrasClaveInvertidas: ['Estancamiento', 'Martirio', 'Resistencia', 'Indecisión', 'Falta de sacrificio']
  },
  {
    id: 'LA_MUERTE',
    nombre: 'La Muerte',
    significadoDerecho: 'Fin de un ciclo, transformación, cambio radical, liberación, renacimiento.',
    significadoInvertido: 'Resistencia al cambio, estancamiento, miedo a lo desconocido, final doloroso.',
    detalleDerecho: 'La Muerte simboliza el fin inevitable de un ciclo y el comienzo de otro. Representa la transformación profunda, la liberación de lo viejo para dar paso a lo nuevo. Invita a aceptar el cambio y a soltar lo que ya no sirve.',
    detalleInvertido: 'Invertida, La Muerte puede indicar resistencia al cambio, estancamiento o un miedo profundo a lo desconocido. También puede señalar un final doloroso o la dificultad para dejar ir lo que ya no es funcional.',
    elemento: 'Agua',
    palabrasClaveDerechas: ['Transformación', 'Cambio', 'Final', 'Renacimiento', 'Liberación'],
    palabrasClaveInvertidas: ['Resistencia al cambio', 'Estancamiento', 'Miedo a lo desconocido', 'Bloqueo', 'Final prolongado']
  },
  {
    id: 'LA_TEMPLANZA',
    nombre: 'La Templanza',
    significadoDerecho: 'Equilibrio, moderación, armonía, paciencia, fusión, sanación.',
    significadoInvertido: 'Desequilibrio, exceso, falta de moderación, impaciencia, desarmonía.',
    detalleDerecho: 'La Templanza representa el equilibrio, la moderación y la armonía. Simboliza la capacidad de integrar diferentes aspectos y encontrar el punto medio. Invita a la paciencia, la adaptación y la sanación interna.',
    detalleInvertido: 'Invertida, La Templanza puede señalar desequilibrio, exceso o falta de moderación. También puede indicar impaciencia, desarmonía o la incapacidad para encontrar un punto de acuerdo.',
    elemento: 'Fuego',
    palabrasClaveDerechas: ['Equilibrio', 'Moderación', 'Armonía', 'Paciencia', 'Sanación'],
    palabrasClaveInvertidas: ['Desequilibrio', 'Exceso', 'Immoderación', 'Impaciencia', 'Desarmonía']
  },
  {
    id: 'EL_DIABLO',
    nombre: 'El Diablo',
    significadoDerecho: 'Sombra, adicción, materialismo, tentación, esclavitud, obsesión.',
    significadoInvertido: 'Liberación, desapego, superación de adicciones, despertar, control.',
    detalleDerecho: 'El Diablo representa las ataduras, las adicciones, el materialismo y las tentaciones. Simboliza la sombra y los aspectos oscuros de la psique. Invita a reconocer las cadenas que uno mismo ha creado y a buscar la liberación.',
    detalleInvertido: 'Invertido, El Diablo puede indicar liberación de adicciones, desapego material o la superación de obsesiones. Sugiere un despertar a la propia fuerza para romper cadenas y retomar el control.',
    elemento: 'Tierra',
    palabrasClaveDerechas: ['Adicción', 'Sombra', 'Materialismo', 'Tentación', 'Esclavitud'],
    palabrasClaveInvertidas: ['Liberación', 'Desapego', 'Superación', 'Despertar', 'Control recuperado']
  },
  {
    id: 'LA_TORRE',
    nombre: 'La Torre',
    significadoDerecho: 'Destrucción, cambio repentino, revelación, colapso, liberación, despertar.',
    significadoInvertido: 'Desastre evitado, resistencia al cambio, destrucción incompleta, caos continuo.',
    detalleDerecho: 'La Torre simboliza la destrucción repentina de estructuras falsas o ilusiones. Representa una liberación abrupta que, aunque dolorosa, es necesaria para la verdad. Invita a reconstruir sobre cimientos sólidos.',
    detalleInvertido: 'Invertida, La Torre puede indicar un desastre evitado o una resistencia persistente al cambio necesario. También puede señalar una destrucción incompleta, dejando un caos continuo, o la necesidad de prepararse para una revelación inevitable.',
    elemento: 'Fuego',
    palabrasClaveDerechas: ['Destrucción', 'Cambio repentino', 'Colapso', 'Liberación', 'Revelación'],
    palabrasClaveInvertidas: ['Desastre evitado', 'Resistencia', 'Caos prolongado', 'Destrucción parcial', 'Alerta']
  },
  {
    id: 'LA_ESTRELLA',
    nombre: 'La Estrella',
    significadoDerecho: 'Esperanza, inspiración, serenidad, renovación, guía espiritual, sanación.',
    significadoInvertido: 'Desesperanza, desilusión, falta de inspiración, pesimismo, desconexión.',
    detalleDerecho: 'La Estrella representa la esperanza, la inspiración y la serenidad. Simboliza la guía divina y la renovación después de tiempos difíciles. Invita a la fe, a la curación y a la conexión con el universo.',
    detalleInvertido: 'Invertida, La Estrella puede indicar desesperanza, desilusión o una falta de inspiración. También puede señalar pesimismo, desconexión espiritual o la necesidad de buscar la propia luz interior.',
    elemento: 'Aire',
    palabrasClaveDerechas: ['Esperanza', 'Inspiración', 'Serenidad', 'Renovación', 'Guía'],
    palabrasClaveInvertidas: ['Desesperanza', 'Desilusión', 'Falta de inspiración', 'Pesimismo', 'Desconexión']
  },
  {
    id: 'LA_LUNA',
    nombre: 'La Luna',
    significadoDerecho: 'Intuición, ilusión, subconsciente, misterio, sueños, miedo, engaño.',
    significadoInvertido: 'Confusión, claridad parcial, miedo superado, verdades ocultas, engaño revelado.',
    detalleDerecho: 'La Luna simboliza el reino del subconsciente, los sueños, las ilusiones y los miedos. Representa la intuición y los misterios. Invita a explorar las profundidades del ser y a discernir entre la realidad y la fantasía.',
    detalleInvertido: 'Invertida, La Luna puede indicar confusión, claridad parcial o miedos que están siendo superados. También puede señalar verdades ocultas que están por revelarse o engaños que salen a la luz, trayendo alivio o perturbación.',
    elemento: 'Agua',
    palabrasClaveDerechas: ['Intuición', 'Ilusión', 'Misterio', 'Miedo', 'Sueños'],
    palabrasClaveInvertidas: ['Confusión', 'Engaño revelado', 'Miedo superado', 'Claridad incipiente', 'Secretos desvelados']
  },
  {
    id: 'EL_SOL',
    nombre: 'El Sol',
    significadoDerecho: 'Alegría, éxito, vitalidad, iluminación, verdad, optimismo, celebración.',
    significadoInvertido: 'Falta de claridad, pesimismo, infelicidad, éxito pospuesto, ego.',
    detalleDerecho: 'El Sol representa la alegría, el éxito, la vitalidad y la iluminación. Simboliza la verdad, la claridad y el optimismo. Invita a celebrar la vida, a compartir la felicidad y a brillar con luz propia.',
    detalleInvertido: 'Invertido, El Sol puede indicar una falta de claridad, pesimismo o infelicidad. También puede señalar un éxito pospuesto, problemas con el ego o la necesidad de encontrar la luz interior.',
    elemento: 'Fuego',
    palabrasClaveDerechas: ['Alegría', 'Éxito', 'Vitalidad', 'Iluminación', 'Optimismo'],
    palabrasClaveInvertidas: ['Falta de claridad', 'Pesimismo', 'Infelicidad', 'Egoísmo', 'Retraso']
  },
  {
    id: 'EL_JUICIO',
    nombre: 'El Juicio',
    significadoDerecho: 'Juicio, despertar, renacimiento, absolución, llamado, evaluación.',
    significadoInvertido: 'Auto-duda, no aceptar el juicio, remordimiento, evadir responsabilidades.',
    detalleDerecho: 'El Juicio simboliza un despertar, una evaluación o una llamada a la acción. Representa la absolución y el renacimiento espiritual. Invita a reflexionar sobre el pasado y a avanzar con una nueva comprensión.',
    detalleInvertido: 'Invertido, El Juicio puede indicar auto-duda, la negación a aceptar un juicio o un remordimiento persistente. También puede señalar la evasión de responsabilidades o la dificultad para perdonarse a uno mismo o a otros.',
    elemento: 'Fuego',
    palabrasClaveDerechas: ['Despertar', 'Juicio', 'Renacimiento', 'Absolución', 'Llamada'],
    palabrasClaveInvertidas: ['Auto-duda', 'Remordimiento', 'Evasión', 'Culpabilidad', 'Miedo al juicio']
  },
  {
    id: 'EL_MUNDO',
    nombre: 'El Mundo',
    significadoDerecho: 'Culminación, éxito, plenitud, integración, logro, realización, cierre de ciclo.',
    significadoInvertido: 'Incompletitud, retrasos, falta de cierre, atajos, frustración.',
    detalleDerecho: 'El Mundo representa la culminación, el éxito y la plenitud. Simboliza la realización de un ciclo y la integración de todas las partes. Invita a celebrar los logros y a reconocer la propia perfección.',
    detalleInvertido: 'Invertido, El Mundo puede indicar incompletitud, retrasos en los proyectos o una falta de cierre. También puede señalar la toma de atajos o una sensación de frustración por no alcanzar la realización deseada.',
    elemento: 'Tierra', 
    palabrasClaveDerechas: ['Culminación', 'Éxito', 'Plenitud', 'Logro', 'Integración'],
    palabrasClaveInvertidas: ['Incompletitud', 'Retrasos', 'Falta de cierre', 'Frustración', 'Obstáculos']
  },

  // ARCANOS MENORES - BASTOS
  {
    id: 'AS_DE_BASTOS',
    nombre: 'As de Bastos',
    significadoDerecho: 'Inspiración, nuevos comienzos, creatividad, potencial, entusiasmo, aventura.',
    significadoInvertido: 'Falta de inspiración, indecisión, oportunidades perdidas, frustración, retrasos.',
    detalleDerecho: 'Representa una chispa de inspiración, un nuevo comienzo lleno de energía y entusiasmo. Sugiere el inicio de un proyecto creativo o una aventura emocionante.',
    detalleInvertido: 'Invertido, el As de Bastos puede indicar falta de inspiración, indecisión o la pérdida de oportunidades. Puede señalar frustración por el estancamiento o retrasos en el inicio de nuevos proyectos.',
    elemento: 'Fuego',
    palabrasClaveDerechas: ['Inspiración', 'Comienzo', 'Creatividad', 'Potencial', 'Entusiasmo'],
    palabrasClaveInvertidas: ['Falta de inspiración', 'Indecisión', 'Oportunidades perdidas', 'Frustración', 'Retrasos']
  },
  {
    id: 'DOS_DE_BASTOS',
    nombre: 'Dos de Bastos',
    significadoDerecho: 'Planificación, decisiones futuras, progreso, visión, atrevimiento.',
    significadoInvertido: 'Miedo al cambio, indecisión, falta de planificación, permanecer en la zona de confort.',
    detalleDerecho: 'Simboliza la fase de planificación antes de dar el siguiente gran paso. Invita a la reflexión estratégica sobre el futuro y a considerar nuevas oportunidades.',
    detalleInvertido: 'Invertido, el Dos de Bastos puede indicar miedo al cambio, indecisión prolongada o una falta de planificación. Sugiere permanecer en la zona de confort por temor a lo desconocido o una visión limitada del futuro.',
    elemento: 'Fuego',
    palabrasClaveDerechas: ['Planificación', 'Visión', 'Decisión', 'Progreso', 'Opciones'],
    palabrasClaveInvertidas: ['Miedo al cambio', 'Indecisión', 'Falta de planificación', 'Estancamiento', 'Zonificación']
  },
  {
    id: 'TRES_DE_BASTOS',
    nombre: 'Tres de Bastos',
    significadoDerecho: 'Expansión, visión a largo plazo, colaboración, esperar resultados, emprendimiento.',
    significadoInvertido: 'Demoras, frustración, falta de crecimiento, traición, expectativas irrealistas.',
    detalleDerecho: 'Representa el momento en que se empiezan a ver los frutos de un esfuerzo inicial. Sugiere expansión, colaboración y la visión de un futuro prometedor, a menudo con viajes o comercio.',
    detalleInvertido: 'Invertido, el Tres de Bastos puede señalar demoras, frustración o una falta de crecimiento. También puede advertir sobre traiciones o expectativas irrealistas que no se cumplirán, impidiendo el progreso.',
    elemento: 'Fuego',
    palabrasClaveDerechas: ['Expansión', 'Colaboración', 'Resultados', 'Visión', 'Emprendimiento'],
    palabrasClaveInvertidas: ['Demoras', 'Frustración', 'Falta de crecimiento', 'Traición', 'Expectativas irrealistas']
  },
  {
    id: 'CUATRO_DE_BASTOS',
    nombre: 'Cuatro de Bastos',
    significadoDerecho: 'Celebración, armonía, hogar, comunidad, estabilidad, seguridad, reencuentro.',
    significadoInvertido: 'Inestabilidad, falta de armonía, transiciones, seguridad cuestionada, conflicto.',
    detalleDerecho: 'Una carta de alegría, celebración y estabilidad en el hogar o la comunidad. Simboliza la finalización exitosa de un proyecto o el disfrute de la paz y la seguridad.',
    detalleInvertido: 'Invertido, el Cuatro de Bastos puede indicar inestabilidad, falta de armonía o transiciones difíciles en el hogar. También puede señalar que la seguridad está siendo cuestionada o la presencia de conflictos internos/externos.',
    elemento: 'Fuego',
    palabrasClaveDerechas: ['Celebración', 'Hogar', 'Estabilidad', 'Armonía', 'Comunidad'],
    palabrasClaveInvertidas: ['Inestabilidad', 'Desarmonía', 'Conflicto', 'Transición', 'Inseguridad']
  },
  {
    id: 'CINCO_DE_BASTOS',
    nombre: 'Cinco de Bastos',
    significadoDerecho: 'Conflicto, competencia, desacuerdo, rivalidad, desafíos, aprendizaje.',
    significadoInvertido: 'Evitar el conflicto, resolución, conformidad, lucha interna, tensión disipada.',
    detalleDerecho: 'Representa un conflicto o competencia. Sugiere desacuerdos, pero también la oportunidad de aprender y crecer a través de la confrontación constructiva. Es una lucha que no necesariamente es negativa.',
    detalleInvertido: 'Invertido, el Cinco de Bastos puede indicar el deseo de evitar el conflicto, la resolución de tensiones o una conformidad forzada. También puede señalar una lucha interna o la disipación de la tensión después de un período de conflicto.',
    elemento: 'Fuego',
    palabrasClaveDerechas: ['Conflicto', 'Competencia', 'Desacuerdo', 'Desafíos', 'Lucha'],
    palabrasClaveInvertidas: ['Evitar conflicto', 'Resolución', 'Conformidad', 'Lucha interna', 'Tensión disipada']
  },
  {
    id: 'SEIS_DE_BASTOS',
    nombre: 'Seis de Bastos',
    significadoDerecho: 'Victoria, reconocimiento, progreso, confianza, éxito público.',
    significadoInvertido: 'Fracaso, falta de reconocimiento, orgullo, arrogancia, metas inalcanzables.',
    detalleDerecho: 'Simboliza el triunfo y el reconocimiento público. Es una carta de confianza y autoestima elevada, que indica que se han superado los desafíos y se está disfrutando del éxito.',
    detalleInvertido: 'Invertido, el Seis de Bastos puede indicar fracaso, falta de reconocimiento o un orgullo excesivo que lleva a la arrogancia. También puede señalar la imposibilidad de alcanzar metas o la necesidad de reevaluar las expectativas.',
    elemento: 'Fuego',
    palabrasClaveDerechas: ['Victoria', 'Reconocimiento', 'Progreso', 'Confianza', 'Éxito'],
    palabrasClaveInvertidas: ['Fracaso', 'Falta de reconocimiento', 'Orgullo', 'Arrogancia', 'Metas inalcanzables']
  },
  {
    id: 'SIETE_DE_BASTOS',
    nombre: 'Siete de Bastos',
    significadoDerecho: 'Defensa, valentía, desafío, protección, perseverancia, posición fuerte.',
    significadoInvertido: 'Ceder, rendirse, miedo, debilidad, indecisión, sentirse abrumado.',
    detalleDerecho: 'Representa la necesidad de defender una posición o un principio. Sugiere que se está enfrentando un desafío y se necesita valentía y perseverancia para mantener la postura.',
    detalleInvertido: 'Invertido, el Siete de Bastos puede indicar ceder ante la presión, rendirse ante un desafío o una sensación de miedo y debilidad. También puede señalar indecisión o sentirse abrumado por la situación.',
    elemento: 'Fuego',
    palabrasClaveDerechas: ['Defensa', 'Valentía', 'Desafío', 'Perseverancia', 'Protección'],
    palabrasClaveInvertidas: ['Ceder', 'Rendirse', 'Miedo', 'Debilidad', 'Indecisión']
  },
  {
    id: 'OCHO_DE_BASTOS',
    nombre: 'Ocho de Bastos',
    significadoDerecho: 'Rapidez, acción, movimiento, noticias, comunicación, viaje, progreso acelerado.',
    significadoInvertido: 'Retrasos, estancamiento, lentitud, falta de comunicación, confusión.',
    detalleDerecho: 'Indica movimiento rápido, noticias y acción. Sugiere que los eventos se están desarrollando a gran velocidad y que las cosas están progresando sin impedimentos.',
    detalleInvertido: 'Invertido, el Ocho de Bastos puede señalar retrasos, estancamiento o lentitud en los acontecimientos. También puede indicar falta de comunicación, confusión o impedimentos en el progreso.',
    elemento: 'Fuego',
    palabrasClaveDerechas: ['Rapidez', 'Movimiento', 'Noticias', 'Acción', 'Progreso acelerado'],
    palabrasClaveInvertidas: ['Retrasos', 'Estancamiento', 'Lentitud', 'Falta de comunicación', 'Confusión']
  },
  {
    id: 'NUEVE_DE_BASTOS',
    nombre: 'Nueve de Bastos',
    significadoDerecho: 'Resistencia, perseverancia, resiliencia, valentía, cautela, agotamiento.',
    significadoInvertido: 'Paranoia, miedo, agotamiento, terquedad, falta de resistencia, rendición.',
    detalleDerecho: 'Simboliza la resistencia y la resiliencia después de un largo período de lucha. Sugiere que se está agotado, pero se tiene la fuerza para soportar un último desafío.',
    detalleInvertido: 'Invertido, el Nueve de Bastos puede indicar paranoia, miedo o un agotamiento extremo que lleva a la rendición. También puede señalar terquedad en una situación insostenible o una falta de resistencia ante las adversidades.',
    elemento: 'Fuego',
    palabrasClaveDerechas: ['Resistencia', 'Perseverancia', 'Resiliencia', 'Valentía', 'Cansancio'],
    palabrasClaveInvertidas: ['Paranoia', 'Miedo', 'Agotamiento', 'Terquedad', 'Rendición']
  },
  {
    id: 'DIEZ_DE_BASTOS',
    nombre: 'Diez de Bastos',
    significadoDerecho: 'Carga, responsabilidad, agotamiento, deber, agobio, fin de un ciclo pesado.',
    significadoInvertido: 'Alivio, delegación, liberación de cargas, sobrecarga continua, agotamiento.',
    detalleDerecho: 'Representa una carga pesada, responsabilidades abrumadoras o el agotamiento. Sugiere que se está llevando demasiado peso, pero que el final del esfuerzo está cerca.',
    detalleInvertido: 'Invertido, el Diez de Bastos puede indicar la necesidad de encontrar alivio, delegar responsabilidades o la liberación de cargas. También puede señalar una sobrecarga continua que lleva al agotamiento total, o la dificultad para soltar.',
    elemento: 'Fuego',
    palabrasClaveDerechas: ['Carga', 'Responsabilidad', 'Agotamiento', 'Deber', 'Agobio'],
    palabrasClaveInvertidas: ['Alivio', 'Delegación', 'Liberación', 'Sobrecarga', 'Colapso']
  },
  {
    id: 'SOTA_DE_BASTOS',
    nombre: 'Sota de Bastos',
    significadoDerecho: 'Nuevas ideas, inspiración, entusiasmo, mensajes, creatividad, aventura.',
    significadoInvertido: 'Falta de entusiasmo, indecisión, inmadurez, mala noticia, retraso.',
    detalleDerecho: 'La Sota de Bastos es un mensajero de nuevas ideas y oportunidades. Representa la energía juvenil, la curiosidad y la chispa para iniciar algo nuevo. Puede ser una persona entusiasta.',
    detalleInvertido: 'Invertida, la Sota de Bastos puede indicar falta de entusiasmo, indecisión o inmadurez en los nuevos proyectos. También puede señalar una mala noticia o retrasos inesperados que frustran el avance.',
    elemento: 'Fuego',
    palabrasClaveDerechas: ['Mensaje', 'Novedad', 'Entusiasmo', 'Creatividad', 'Aventura'],
    palabrasClaveInvertidas: ['Falta de entusiasmo', 'Indecisión', 'Inmadurez', 'Mala noticia', 'Retraso']
  },
  {
    id: 'CABALLO_DE_BASTOS',
    nombre: 'Caballo de Bastos',
    significadoDerecho: 'Acción, aventura, pasión, viaje, impetuosidad, energía, avance rápido.',
    significadoInvertido: 'Retrasos, impulsividad, frustración, falta de dirección, escapismo.',
    detalleDerecho: 'El Caballo de Bastos simboliza la acción, la aventura y la pasión. Representa un viaje o un avance rápido, a menudo con una energía impetuosa. Puede ser una persona audaz y aventurera.',
    detalleInvertido: 'Invertido, el Caballo de Bastos puede indicar retrasos, impulsividad que lleva a errores o frustración por la falta de progreso. También puede señalar una falta de dirección clara o una tendencia al escapismo.',
    elemento: 'Fuego',
    palabrasClaveDerechas: ['Acción', 'Aventura', 'Pasión', 'Viaje', 'Impulsividad'],
    palabrasClaveInvertidas: ['Retrasos', 'Impulsividad', 'Frustración', 'Falta de dirección', 'Escapismo']
  },
  {
    id: 'REINA_DE_BASTOS',
    nombre: 'Reina de Bastos',
    significadoDerecho: 'Creatividad, confianza, independencia, carisma, optimismo, vitalidad.',
    significadoInvertido: 'Egoísmo, celos, arrogancia, dominancia, superficialidad, falta de confianza.',
    detalleDerecho: 'La Reina de Bastos encarna la creatividad, la confianza y la independencia. Es una persona carismática y optimista que irradia vitalidad y alegría. Invita a tomar las riendas de la propia vida con pasión.',
    detalleInvertido: 'Invertida, la Reina de Bastos puede indicar egoísmo, celos, arrogancia o una tendencia a ser dominante. También puede señalar superficialidad o una falta de confianza en las propias capacidades.',
    elemento: 'Fuego',
    palabrasClaveDerechas: ['Creatividad', 'Confianza', 'Independencia', 'Carisma', 'Optimismo'],
    palabrasClaveInvertidas: ['Egoísmo', 'Celos', 'Arrogancia', 'Dominancia', 'Superficialidad']
  },
  {
    id: 'REY_DE_BASTOS',
    nombre: 'Rey de Bastos',
    significadoDerecho: 'Liderazgo, visión, autoridad, inspiración, carisma, honor, emprendedor.',
    significadoInvertido: 'Tiranía, impulsividad, autoritarismo, falta de visión, arrogancia, ira.',
    detalleDerecho: 'El Rey de Bastos representa un líder visionario, carismático y con autoridad. Simboliza la inspiración y la capacidad de guiar a otros con honor y pasión. Invita a tomar un rol de liderazgo.',
    detalleInvertido: 'Invertido, el Rey de Bastos puede indicar tiranía, impulsividad, autoritarismo o una falta de visión. También puede señalar arrogancia o ira descontrolada, afectando su liderazgo.',
    elemento: 'Fuego',
    palabrasClaveDerechas: ['Liderazgo', 'Visión', 'Autoridad', 'Inspiración', 'Emprendedor'],
    palabrasClaveInvertidas: ['Tiranía', 'Impulsividad', 'Autoritarismo', 'Falta de visión', 'Arrogancia']
  },

  // ARCANOS MENORES - COPAS
  {
    id: 'AS_DE_COPAS',
    nombre: 'As de Copas',
    significadoDerecho: 'Nuevas emociones, amor, intuición, compasión, alegría, creatividad emocional.',
    significadoInvertido: 'Emociones reprimidas, amor no correspondido, infelicidad, creatividad bloqueada.',
    detalleDerecho: 'Representa el comienzo de una nueva emoción, un nuevo amor o una explosión de alegría y creatividad. Simboliza la apertura del corazón y la abundancia emocional.',
    detalleInvertido: 'Invertido, el As de Copas puede indicar emociones reprimidas, amor no correspondido o una sensación de infelicidad. También puede señalar una creatividad emocional bloqueada o la dificultad para expresar los sentimientos.',
    elemento: 'Agua',
    palabrasClaveDerechas: ['Amor', 'Emoción', 'Alegría', 'Intuición', 'Comienzo'],
    palabrasClaveInvertidas: ['Emociones reprimidas', 'Amor no correspondido', 'Infelicidad', 'Creatividad bloqueada', 'Bloqueo emocional']
  },
  {
    id: 'DOS_DE_COPAS',
    nombre: 'Dos de Copas',
    significadoDerecho: 'Unión, amor, asociación, armonía, conexión, alma gemela, respeto mutuo.',
    significadoInvertido: 'Desarmonía, ruptura, desequilibrio, desconfianza, separación, conflicto.',
    detalleDerecho: 'Simboliza una unión armoniosa, ya sea en el amor, la amistad o los negocios. Representa el respeto mutuo, la conexión profunda y la reciprocidad en las relaciones.',
    detalleInvertido: 'Invertido, el Dos de Copas puede indicar desarmonía, ruptura en las relaciones o un desequilibrio. También puede señalar desconfianza, separación o conflictos que afectan la conexión.',
    elemento: 'Agua',
    palabrasClaveDerechas: ['Unión', 'Amor', 'Armonía', 'Conexión', 'Asociación'],
    palabrasClaveInvertidas: ['Desarmonía', 'Ruptura', 'Desequilibrio', 'Desconfianza', 'Conflicto']
  },
  {
    id: 'TRES_DE_COPAS',
    nombre: 'Tres de Copas',
    significadoDerecho: 'Celebración, amistad, comunidad, reunión, alegría, trabajo en equipo.',
    significadoInvertido: 'Exceso, chismes, aislamiento, fin de la amistad, sobreindulgencia.',
    detalleDerecho: 'Una carta de celebración, alegría y amistad. Representa reuniones sociales, bodas o cualquier evento donde la comunidad y la felicidad compartida son el centro.',
    detalleInvertido: 'Invertido, el Tres de Copas puede advertir sobre excesos, chismes o aislamiento social. También puede señalar el fin de una amistad o una tendencia a la sobreindulgencia que afecta las relaciones.',
    elemento: 'Agua',
    palabrasClaveDerechas: ['Celebración', 'Amistad', 'Comunidad', 'Alegría', 'Reunión'],
    palabrasClaveInvertidas: ['Exceso', 'Chismes', 'Aislamiento', 'Fin de amistad', 'Sobreindulgencia']
  },
  {
    id: 'CUATRO_DE_COPAS',
    nombre: 'Cuatro de Copas',
    significadoDerecho: 'Apatía, aburrimiento, reevaluación, oportunidades perdidas, introspección.',
    significadoInvertido: 'Nuevas oportunidades, aburrimiento superado, elección, motivación.',
    detalleDerecho: 'Simboliza la apatía o el aburrimiento, a menudo por no apreciar lo que se tiene o por estar demasiado absorto en uno mismo. Advierte sobre oportunidades que se están ignorando.',
    detalleInvertido: 'Invertido, el Cuatro de Copas puede indicar la aparición de nuevas oportunidades, la superación del aburrimiento o la necesidad de tomar una decisión. También puede señalar un resurgimiento de la motivación después de un período de estancamiento.',
    elemento: 'Agua',
    palabrasClaveDerechas: ['Apatía', 'Aburrimiento', 'Reevaluación', 'Ignorancia', 'Oportunidades perdidas'],
    palabrasClaveInvertidas: ['Nuevas oportunidades', 'Motivación', 'Elección', 'Aburrimiento superado', 'Despertar']
  },
  {
    id: 'CINCO_DE_COPAS',
    nombre: 'Cinco de Copas',
    significadoDerecho: 'Pérdida, arrepentimiento, dolor, duelo, desilusión, enfoque en lo negativo.',
    significadoInvertido: 'Aceptación, superación de la pérdida, esperanza, perdón, seguir adelante.',
    detalleDerecho: 'Representa la tristeza y el dolor por una pérdida, a menudo enfocándose en lo que se ha perdido en lugar de lo que aún queda. Es una carta de duelo y desilusión.',
    detalleInvertido: 'Invertido, el Cinco de Copas puede indicar aceptación de la pérdida, superación del dolor o el surgimiento de la esperanza. También puede señalar el perdón, la capacidad de seguir adelante o un enfoque renovado en lo positivo.',
    elemento: 'Agua',
    palabrasClaveDerechas: ['Pérdida', 'Duelo', 'Arrepentimiento', 'Desilusión', 'Tristeza'],
    palabrasClaveInvertidas: ['Aceptación', 'Superación', 'Esperanza', 'Perdón', 'Seguir adelante']
  },
  {
    id: 'SEIS_DE_COPAS',
    nombre: 'Seis de Copas',
    significadoDerecho: 'Nostalgia, recuerdos, infancia, pasado, inocencia, reencuentros.',
    significadoInvertido: 'Vivir en el pasado, estancamiento, inmadurez, aferrarse a lo viejo.',
    detalleDerecho: 'Simboliza la nostalgia, los recuerdos de la infancia y la inocencia. Puede indicar un reencuentro con alguien del pasado o un momento de reflexión sobre las raíces.',
    detalleInvertido: 'Invertido, el Seis de Copas puede advertir sobre vivir excesivamente en el pasado, estancamiento por no soltar viejas costumbres o inmadurez emocional. También puede señalar la dificultad para liberarse de lo antiguo.',
    elemento: 'Agua',
    palabrasClaveDerechas: ['Nostalgia', 'Infancia', 'Recuerdos', 'Reencuentro', 'Inocencia'],
    palabrasClaveInvertidas: ['Vivir en el pasado', 'Estancamiento', 'Inmadurez', 'Aferrarse a lo viejo', 'Liberación']
  },
  {
    id: 'SIETE_DE_COPAS',
    nombre: 'Siete de Copas',
    significadoDerecho: 'Elecciones, ilusiones, fantasía, sueños, indecisión, muchas opciones.',
    significadoInvertido: 'Claridad, decisión, tentación, exceso de realidad, enfoque.',
    detalleDerecho: 'Representa la abundancia de opciones, a menudo ilusorias o confusas. Advierte sobre la fantasía y la indecisión. Invita a la claridad y a elegir con sabiduría entre las posibilidades.',
    detalleInvertido: 'Invertido, el Siete de Copas puede indicar el logro de claridad, la toma de decisiones o la superación de ilusiones. También puede señalar una tentación real, un exceso de enfoque en la realidad o la necesidad de discernir verdaderamente las opciones.',
    elemento: 'Agua',
    palabrasClaveDerechas: ['Opciones', 'Ilusión', 'Fantasía', 'Indecisión', 'Sueños'],
    palabrasClaveInvertidas: ['Claridad', 'Decisión', 'Tentación', 'Enfoque', 'Realismo']
  },
  {
    id: 'OCHO_DE_COPAS',
    nombre: 'Ocho de Copas',
    significadoDerecho: 'Abandono, búsqueda, viaje espiritual, dejar atrás, insatisfacción, cambio.',
    significadoInvertido: 'Miedo al cambio, aferrarse, estancamiento, regreso, seguir adelante.',
    detalleDerecho: 'Simboliza el acto de dejar atrás una situación que ya no satisface, a menudo por una búsqueda espiritual o emocional más profunda. Es un viaje de desapego y búsqueda de un nuevo propósito.',
    detalleInvertido: 'Invertido, el Ocho de Copas puede indicar miedo al cambio, aferrarse a lo conocido o estancamiento. También puede señalar el regreso a una situación anterior o la dificultad para dar el siguiente paso y seguir adelante.',
    elemento: 'Agua',
    palabrasClaveDerechas: ['Abandono', 'Búsqueda', 'Desapego', 'Viaje', 'Insatisfacción'],
    palabrasClaveInvertidas: ['Miedo al cambio', 'Aferrarse', 'Estancamiento', 'Regreso', 'Dificultad de avanzar']
  },
  {
    id: 'NUEVE_DE_COPAS',
    nombre: 'Nueve de Copas',
    significadoDerecho: 'Satisfacción, deseos cumplidos, bienestar, indulgencia, autocomplacencia.',
    significadoInvertido: 'Insatisfacción, deseos no cumplidos, materialismo, autocomplacencia excesiva.',
    detalleDerecho: 'La carta de los deseos cumplidos y la satisfacción personal. Representa la alegría de haber logrado lo que se anhelaba y el disfrute de los placeres de la vida.',
    detalleInvertido: 'Invertido, el Nueve de Copas puede indicar insatisfacción, deseos no cumplidos o un enfoque excesivo en el materialismo. También puede señalar una autocomplacencia excesiva que impide el crecimiento o la dificultad para encontrar la verdadera alegría.',
    elemento: 'Agua',
    palabrasClaveDerechas: ['Satisfacción', 'Deseos cumplidos', 'Bienestar', 'Alegría', 'Indulgencia'],
    palabrasClaveInvertidas: ['Insatisfacción', 'Deseos no cumplidos', 'Materialismo', 'Autocomplacencia excesiva', 'Infelicidad']
  },
  {
    id: 'DIEZ_DE_COPAS',
    nombre: 'Diez de Copas',
    significadoDerecho: 'Felicidad, plenitud, armonía familiar, alegría, hogar, paz emocional.',
    significadoInvertido: 'Familia disfuncional, falta de armonía, tristeza, ruptura, alienación.',
    detalleDerecho: 'Simboliza la máxima felicidad y plenitud emocional. Representa la armonía en el hogar, la familia y las relaciones. Es una carta de paz duradera y realización emocional.',
    detalleInvertido: 'Invertido, el Diez de Copas puede indicar una familia disfuncional, falta de armonía o tristeza profunda. También puede señalar una ruptura en las relaciones o una sensación de alienación.',
    elemento: 'Agua',
    palabrasClaveDerechas: ['Felicidad', 'Plenitud', 'Familia', 'Armonía', 'Paz'],
    palabrasClaveInvertidas: ['Familia disfuncional', 'Desarmonía', 'Tristeza', 'Ruptura', 'Alienación']
  },
  {
    id: 'SOTA_DE_COPAS',
    nombre: 'Sota de Copas',
    significadoDerecho: 'Mensajes emocionales, creatividad, intuición, sensibilidad, nuevos sentimientos.',
    significadoInvertido: 'Inmadurez emocional, fantasía, engaño, sensibilidad excesiva, manipulación.',
    detalleDerecho: 'La Sota de Copas trae mensajes relacionados con las emociones, el amor o la creatividad. Representa una persona sensible, intuitiva y con nuevas ideas artísticas o emocionales.',
    detalleInvertido: 'Invertida, la Sota de Copas puede indicar inmadurez emocional, fantasía desmedida o engaño. También puede señalar una sensibilidad excesiva que dificulta el discernimiento o una tendencia a la manipulación emocional.',
    elemento: 'Agua',
    palabrasClaveDerechas: ['Mensaje', 'Emoción', 'Creatividad', 'Sensibilidad', 'Intuición'],
    palabrasClaveInvertidas: ['Inmadurez emocional', 'Fantasía', 'Engaño', 'Sensibilidad excesiva', 'Manipulación']
  },
  {
    id: 'CABALLO_DE_COPAS',
    nombre: 'Caballo de Copas',
    significadoDerecho: 'Propuestas, invitaciones, romance, idealismo, encanto, mensajero.',
    significadoInvertido: 'Propuestas fallidas, desilusión, superficialidad, celos, engaño, inmadurez.',
    detalleDerecho: 'El Caballo de Copas es un mensajero de propuestas, invitaciones o romance. Representa el idealismo y el encanto, a menudo relacionado con un enfoque emocional o artístico.',
    detalleInvertido: 'Invertido, el Caballo de Copas puede indicar propuestas fallidas, desilusión o superficialidad en las relaciones. También puede señalar celos, engaño o una inmadurez emocional que afecta las interacciones.',
    elemento: 'Agua',
    palabrasClaveDerechas: ['Propuesta', 'Invitación', 'Romance', 'Idealismo', 'Mensajero'],
    palabrasClaveInvertidas: ['Propuestas fallidas', 'Desilusión', 'Superficialidad', 'Celos', 'Engaño']
  },
  {
    id: 'REINA_DE_COPAS',
    nombre: 'Reina de Copas',
    significadoDerecho: 'Intuición, compasión, empatía, amor, sanación, emocionalidad, sensibilidad.',
    significadoInvertido: 'Inseguridad, co-dependencia, emocionalidad excesiva, manipulación, inestabilidad.',
    detalleDerecho: 'La Reina de Copas encarna la intuición, la compasión y el amor incondicional. Es una persona empática, sanadora y profundamente conectada con sus emociones y las de los demás. Invita a escuchar el corazón.',
    detalleInvertido: 'Invertida, la Reina de Copas puede indicar inseguridad, co-dependencia o una emocionalidad excesiva. También puede señalar manipulación o inestabilidad emocional que afecta sus relaciones y bienestar.',
    elemento: 'Agua',
    palabrasClaveDerechas: ['Intuición', 'Compasión', 'Empatía', 'Amor', 'Sanación'],
    palabrasClaveInvertidas: ['Inseguridad', 'Co-dependencia', 'Emocionalidad excesiva', 'Manipulación', 'Inestabilidad']
  },
  {
    id: 'REY_DE_COPAS',
    nombre: 'Rey de Copas',
    significadoDerecho: 'Equilibrio emocional, compasión, sabiduría, diplomacia, control de emociones.',
    significadoInvertido: 'Inestabilidad emocional, manipulación, frialdad, adicción, represión.',
    detalleDerecho: 'El Rey de Copas representa el equilibrio emocional, la compasión y la sabiduría. Es una persona que domina sus emociones y puede ofrecer apoyo y consejo de forma diplomática y madura. Invita a la calma y la comprensión.',
    detalleInvertido: 'Invertido, el Rey de Copas puede indicar inestabilidad emocional, manipulación o frialdad. También puede señalar adicciones, represión emocional o la dificultad para manejar sus propios sentimientos de forma saludable.',
    elemento: 'Agua',
    palabrasClaveDerechas: ['Equilibrio', 'Compasión', 'Sabiduría', 'Diplomacia', 'Control'],
    palabrasClaveInvertidas: ['Inestabilidad emocional', 'Manipulación', 'Frialdad', 'Adicción', 'Represión']
  },

  // ARCANOS MENORES - ESPADAS
  {
    id: 'AS_DE_ESPADAS',
    nombre: 'As de Espadas',
    significadoDerecho: 'Claridad mental, verdad, nueva idea, avance, victoria, justicia, decisión.',
    significadoInvertido: 'Confusión, caos, idea destructiva, injusticia, tiranía, malas decisiones.',
    detalleDerecho: 'Representa una nueva idea brillante, una revelación o un momento de claridad mental. Simboliza el poder del intelecto y la capacidad de cortar la confusión para encontrar la verdad.',
    detalleInvertido: 'Invertido, el As de Espadas puede indicar confusión, caos mental o una idea destructiva. También puede señalar injusticia, tiranía o malas decisiones que se toman bajo presión.',
    elemento: 'Aire',
    palabrasClaveDerechas: ['Claridad', 'Verdad', 'Idea', 'Decisión', 'Victoria'],
    palabrasClaveInvertidas: ['Confusión', 'Caos', 'Idea destructiva', 'Injusticia', 'Tiranía']
  },
  {
    id: 'DOS_DE_ESPADAS',
    nombre: 'Dos de Espadas',
    significadoDerecho: 'Indecisión, punto muerto, equilibrio, evitar la verdad, tregua.',
    significadoInvertido: 'Engaño, doblez, indecisión superada, liberación de la tensión, verdad.',
    detalleDerecho: 'Simboliza la indecisión y un punto muerto. Representa la necesidad de tomar una decisión importante, a menudo porque se está evitando una verdad o un conflicto. Invita a la objetividad.',
    detalleInvertido: 'Invertido, el Dos de Espadas puede revelar engaño, doblez o una indecisión que está siendo superada. También puede señalar la liberación de la tensión al enfrentar la verdad o la necesidad de ser más transparente.',
    elemento: 'Aire',
    palabrasClaveDerechas: ['Indecisión', 'Punto muerto', 'Equilibrio', 'Evitación', 'Elección'],
    palabrasClaveInvertidas: ['Engaño', 'Doble moral', 'Indecisión superada', 'Liberación de tensión', 'Verdad incómoda']
  },
  {
    id: 'TRES_DE_ESPADAS',
    nombre: 'Tres de Espadas',
    significadoDerecho: 'Dolor, pena, desamor, separación, traición, duelo, tristeza.',
    significadoInvertido: 'Superar el dolor, perdón, reconciliación, recuperación, alivio.',
    detalleDerecho: 'Una carta de dolor, pena y desilusión, a menudo por un desamor o una traición. Representa el impacto emocional de la verdad o una situación difícil, invitando a procesar el duelo.',
    detalleInvertido: 'Invertido, el Tres de Espadas puede indicar la superación del dolor, el perdón o la posibilidad de reconciliación. También puede señalar una recuperación emocional o un alivio después de un período de sufrimiento intenso.',
    elemento: 'Aire',
    palabrasClaveDerechas: ['Dolor', 'Pena', 'Desamor', 'Separación', 'Duelo'],
    palabrasClaveInvertidas: ['Superar dolor', 'Perdón', 'Reconciliación', 'Recuperación', 'Alivio']
  },
  {
    id: 'CUATRO_DE_ESPADAS',
    nombre: 'Cuatro de Espadas',
    significadoDerecho: 'Descanso, recuperación, meditación, retiro, paz, contemplación, sanación.',
    significadoInvertido: 'Inquietud, agotamiento, estancamiento, reincorporación, falta de descanso.',
    detalleDerecho: 'Simboliza la necesidad de descanso y recuperación. Representa un retiro temporal para la meditación y la sanación después de un período de estrés. Invita a recargar energías.',
    detalleInvertido: 'Invertido, el Cuatro de Espadas puede indicar inquietud, agotamiento persistente o estancamiento. También puede señalar la necesidad de reincorporarse a la actividad o la dificultad para encontrar un descanso verdadero.',
    elemento: 'Aire',
    palabrasClaveDerechas: ['Descanso', 'Recuperación', 'Meditación', 'Paz', 'Retiro'],
    palabrasClaveInvertidas: ['Inquietud', 'Agotamiento', 'Estancamiento', 'Reincorporación', 'Falta de descanso']
  },
  {
    id: 'CINCO_DE_ESPADAS',
    nombre: 'Cinco de Espadas',
    significadoDerecho: 'Derrota, rendición, conflicto amargo, pérdida, deshonor, victoria pírrica.',
    significadoInvertido: 'Reconciliación, superación de conflictos, rendición aceptada, victoria moral.',
    detalleDerecho: 'Representa una situación de conflicto donde hay una clara derrota o victoria amarga. Puede indicar deshonor, pérdida de respeto o una victoria pírrica que deja a todos los involucrados heridos.',
    detalleInvertido: 'Invertido, el Cinco de Espadas puede indicar la posibilidad de reconciliación, la superación de conflictos o la aceptación de una rendición. También puede señalar una victoria moral, aunque no sea material, o el fin de una lucha destructiva.',
    elemento: 'Aire',
    palabrasClaveDerechas: ['Derrota', 'Conflicto', 'Pérdida', 'Deshonor', 'Victoria pírrica'],
    palabrasClaveInvertidas: ['Reconciliación', 'Superación', 'Aceptación', 'Victoria moral', 'Fin de conflicto']
  },
  {
    id: 'SEIS_DE_ESPADAS',
    nombre: 'Seis de Espadas',
    significadoDerecho: 'Transición, cambio, movimiento, viaje, dejar atrás dificultades, esperanza.',
    significadoInvertido: 'Estancamiento, regreso a problemas, resistencia al cambio, viaje fallido.',
    detalleDerecho: 'Simboliza una transición necesaria, un viaje para dejar atrás dificultades o una situación problemática. Representa el movimiento hacia aguas más tranquilas y la esperanza de un nuevo comienzo.',
    detalleInvertido: 'Invertido, el Seis de Espadas puede indicar estancamiento, el regreso a viejos problemas o una resistencia al cambio. También puede señalar un viaje fallido o la dificultad para avanzar y dejar el pasado atrás.',
    elemento: 'Aire',
    palabrasClaveDerechas: ['Transición', 'Cambio', 'Movimiento', 'Dejar atrás', 'Esperanza'],
    palabrasClaveInvertidas: ['Estancamiento', 'Regreso a problemas', 'Resistencia al cambio', 'Viaje fallido', 'Dificultad para avanzar']
  },
  {
    id: 'SIETE_DE_ESPADAS',
    nombre: 'Siete de Espadas',
    significadoDerecho: 'Engaño, astucia, evasión, robo, estrategias, deshonestidad, tomar atajos.',
    significadoInvertido: 'Confesión, remordimiento, ser descubierto, honestidad, enfrentar la verdad.',
    detalleDerecho: 'Representa la astucia, el engaño o la evasión. Puede indicar que alguien está tomando atajos, actuando deshonestamente o robando algo, ya sea material o inmaterial. Advierte sobre la necesidad de ser vigilante.',
    detalleInvertido: 'Invertido, el Siete de Espadas puede indicar una confesión, remordimiento o el acto de ser descubierto. También puede señalar un compromiso con la honestidad o la necesidad de enfrentar la verdad de frente.',
    elemento: 'Aire',
    palabrasClaveDerechas: ['Engaño', 'Astucia', 'Evasión', 'Deshonestidad', 'Atajo'],
    palabrasClaveInvertidas: ['Confesión', 'Remordimiento', 'Ser descubierto', 'Honestidad', 'Enfrentar la verdad']
  },
  {
    id: 'OCHO_DE_ESPADAS',
    nombre: 'Ocho de Espadas',
    significadoDerecho: 'Restricción, limitación, miedo, auto-imposición, impotencia, victimización.',
    significadoInvertido: 'Liberación, superación de límites, auto-empoderamiento, visión clara, escape.',
    detalleDerecho: 'Simboliza la sensación de estar atrapado o limitado, a menudo por miedos autoimpuestos o una perspectiva victimista. Representa la impotencia y la falta de visión clara para encontrar una salida.',
    detalleInvertido: 'Invertido, el Ocho de Espadas puede indicar liberación de restricciones, superación de límites o un momento de auto-empoderamiento. También puede señalar el logro de una visión clara o un escape de una situación opresiva.',
    elemento: 'Aire',
    palabrasClaveDerechas: ['Restricción', 'Limitación', 'Miedo', 'Auto-imposición', 'Impotencia'],
    palabrasClaveInvertidas: ['Liberación', 'Superación', 'Auto-empoderamiento', 'Claridad', 'Escape']
  },
  {
    id: 'NUEVE_DE_ESPADAS',
    nombre: 'Nueve de Espadas',
    significadoDerecho: 'Ansiedad, pesadillas, preocupación, culpa, depresión, desesperación.',
    significadoInvertido: 'Recuperación, superación de la ansiedad, esperanza, confrontación de miedos.',
    detalleDerecho: 'Una carta de profunda ansiedad, preocupación y sufrimiento mental. Representa pesadillas, culpa, depresión y una sensación de desesperación que te mantiene despierto por la noche.',
    detalleInvertido: 'Invertido, el Nueve de Espadas puede indicar recuperación de la ansiedad, superación de miedos o el surgimiento de la esperanza. También puede señalar la confrontación exitosa de los problemas mentales o la búsqueda de ayuda.',
    elemento: 'Aire',
    palabrasClaveDerechas: ['Ansiedad', 'Preocupación', 'Pesadillas', 'Culpa', 'Desesperación'],
    palabrasClaveInvertidas: ['Recuperación', 'Superación de ansiedad', 'Esperanza', 'Confrontación de miedos', 'Alivio']
  },
  {
    id: 'DIEZ_DE_ESPADAS',
    nombre: 'Diez de Espadas',
    significadoDerecho: 'Final, ruina, colapso, traición, fin doloroso, punto más bajo, inevitabilidad.',
    significadoInvertido: 'Recuperación, evadir lo inevitable, renacimiento, fin inminente, nuevos comienzos.',
    detalleDerecho: 'Representa el final definitivo y doloroso de una situación, a menudo sintiéndose como una traición o una ruina total. Es el punto más bajo, pero también la señal de que no se puede caer más y que un nuevo ciclo es inevitable.',
    detalleInvertido: 'Invertido, el Diez de Espadas puede indicar la recuperación inminente, el intento de evadir lo inevitable o la conciencia de un final cercano. También puede señalar un renacimiento después de una gran pérdida o la necesidad de aceptar un cierre para avanzar.',
    elemento: 'Aire',
    palabrasClaveDerechas: ['Final', 'Ruina', 'Colapso', 'Traición', 'Punto más bajo'],
    palabrasClaveInvertidas: ['Recuperación', 'Evadir lo inevitable', 'Renacimiento', 'Final inminente', 'Superación de la adversidad']
  },
  {
    id: 'SOTA_DE_ESPADAS',
    nombre: 'Sota de Espadas',
    significadoDerecho: 'Curiosidad, verdad, comunicación, vigilancia, nueva perspectiva, honestidad.',
    significadoInvertido: 'Chismes, espionaje, mentiras, impaciencia, falta de tacto, errores de comunicación.',
    detalleDerecho: 'La Sota de Espadas es un mensajero de verdad y nuevas perspectivas. Representa la curiosidad intelectual, la vigilancia y la comunicación honesta. Puede ser una persona joven con ideas agudas y una mente inquisitiva.',
    detalleInvertido: 'Invertida, la Sota de Espadas puede advertir sobre chismes, espionaje o mentiras. También puede señalar impaciencia, falta de tacto en la comunicación o errores que surgen de la precipitación.',
    elemento: 'Aire',
    palabrasClaveDerechas: ['Curiosidad', 'Verdad', 'Comunicación', 'Vigilancia', 'Nueva perspectiva'],
    palabrasClaveInvertidas: ['Chismes', 'Espionaje', 'Mentiras', 'Impaciencia', 'Falta de tacto']
  },
  {
    id: 'CABALLO_DE_ESPADAS',
    nombre: 'Caballo de Espadas',
    significadoDerecho: 'Acción rápida, ambición, determinación, confrontación, intelecto agudo, impetuosidad.',
    significadoInvertido: 'Impulsividad, agresividad, precipitación, arrogancia, caos, derrota.',
    detalleDerecho: 'El Caballo de Espadas simboliza la acción rápida y la ambición. Representa una persona con intelecto agudo, determinación y dispuesta a la confrontación para alcanzar sus objetivos. Puede ser impetuoso pero efectivo.',
    detalleInvertido: 'Invertido, el Caballo de Espadas puede indicar impulsividad, agresividad o precipitación que lleva a errores. También puede señalar arrogancia, caos o una derrota debido a la falta de consideración.',
    elemento: 'Aire',
    palabrasClaveDerechas: ['Acción rápida', 'Ambición', 'Determinación', 'Confrontación', 'Intelecto'],
    palabrasClaveInvertidas: ['Impulsividad', 'Agresividad', 'Precipitación', 'Arrogancia', 'Caos']
  },
  {
    id: 'REINA_DE_ESPADAS',
    nombre: 'Reina de Espadas',
    significadoDerecho: 'Independencia, intelecto, honestidad, agudeza, juicio claro, viudez, dolor superado.',
    significadoInvertido: 'Frialdad, amargura, intolerancia, crueldad, crítica, pensamiento confuso.',
    detalleDerecho: 'La Reina de Espadas encarna la independencia intelectual y la honestidad brutal. Es una persona con agudeza mental y juicio claro, que ha superado el dolor y habla la verdad, a veces con dureza.',
    detalleInvertido: 'Invertida, la Reina de Espadas puede indicar frialdad, amargura, intolerancia o crueldad. También puede señalar una mente excesivamente crítica o un pensamiento confuso que nubla el juicio.',
    elemento: 'Aire',
    palabrasClaveDerechas: ['Intelecto', 'Independencia', 'Honestidad', 'Agudeza', 'Juicio claro'],
    palabrasClaveInvertidas: ['Frialdad', 'Amargura', 'Intolerancia', 'Crueldad', 'Crítica excesiva']
  },
  {
    id: 'REY_DE_ESPADAS',
    nombre: 'Rey de Espadas',
    significadoDerecho: 'Autoridad intelectual, verdad, objetividad, disciplina, lógica, liderazgo justo.',
    significadoInvertido: 'Tiranía, abuso de poder, intelectualismo frío, dogmatismo, injusticia.',
    detalleDerecho: 'El Rey de Espadas representa la autoridad intelectual, la verdad y la objetividad. Es una persona lógica, disciplinada y un líder justo que toma decisiones basadas en hechos y razón. Invita a la claridad mental.',
    detalleInvertido: 'Invertido, el Rey de Espadas puede indicar tiranía, abuso de poder o un intelectualismo frío y sin empatía. También puede señalar dogmatismo, injusticia o la falta de claridad mental que lleva a malas decisiones.',
    elemento: 'Aire',
    palabrasClaveDerechas: ['Autoridad', 'Lógica', 'Justicia', 'Objetividad', 'Intelecto'],
    palabrasClaveInvertidas: ['Tiranía', 'Abuso de poder', 'Frialdad', 'Dogmatismo', 'Injusticia']
  },

  // ARCANOS MENORES - OROS
  {
    id: 'AS_DE_OROS',
    nombre: 'As de Oros',
    significadoDerecho: 'Nuevas oportunidades, prosperidad, seguridad, manifestación, nuevos comienzos materiales.',
    significadoInvertido: 'Oportunidades perdidas, inestabilidad financiera, malas inversiones, materialismo.',
    detalleDerecho: 'Representa una nueva oportunidad en el ámbito material o financiero, una chispa de prosperidad y seguridad. Simboliza la manifestación de ideas en la realidad y el potencial para el crecimiento económico.',
    detalleInvertido: 'Invertido, el As de Oros puede indicar oportunidades perdidas, inestabilidad financiera o malas inversiones. También puede señalar un enfoque excesivo en el materialismo o la dificultad para manifestar los deseos en la realidad.',
    elemento: 'Tierra',
    palabrasClaveDerechas: ['Oportunidad', 'Prosperidad', 'Seguridad', 'Manifestación', 'Comienzos materiales'],
    palabrasClaveInvertidas: ['Oportunidades perdidas', 'Inestabilidad', 'Malas inversiones', 'Materialismo', 'Bloqueo']
  },
  {
    id: 'DOS_DE_OROS',
    nombre: 'Dos de Oros',
    significadoDerecho: 'Equilibrio, adaptabilidad, malabarismo, prioridades, flexibilidad, cambios menores.',
    significadoInvertido: 'Desequilibrio, desorganización, prioridades confusas, sobrecarga, indecisión.',
    detalleDerecho: 'Simboliza el equilibrio entre diferentes áreas de la vida, la adaptabilidad y la capacidad de malabarear con prioridades. Representa la flexibilidad para manejar los cambios y mantener la estabilidad.',
    detalleInvertido: 'Invertido, el Dos de Oros puede indicar desequilibrio, desorganización o prioridades confusas. También puede señalar una sobrecarga, indecisión o la dificultad para adaptarse a los cambios, llevando al caos.',
    elemento: 'Tierra',
    palabrasClaveDerechas: ['Equilibrio', 'Adaptabilidad', 'Malabarismo', 'Prioridades', 'Flexibilidad'],
    palabrasClaveInvertidas: ['Desequilibrio', 'Desorganización', 'Sobrecarga', 'Indecisión', 'Rigidez']
  },
  {
    id: 'TRES_DE_OROS',
    nombre: 'Tres de Oros',
    significadoDerecho: 'Colaboración, trabajo en equipo, aprendizaje, maestría, reconocimiento, habilidad.',
    significadoInvertido: 'Falta de trabajo en equipo, desorganización, mediocridad, falta de habilidad, competencia.',
    detalleDerecho: 'Representa la colaboración, el trabajo en equipo y el aprendizaje a través de la práctica. Sugiere que se está desarrollando una habilidad o que se está logrando reconocimiento por la maestría en un área. Invita a la cooperación.',
    detalleInvertido: 'Invertido, el Tres de Oros puede indicar falta de trabajo en equipo, desorganización o mediocridad en el desempeño. También puede señalar una falta de habilidad, la necesidad de más formación o la existencia de competencia desleal.',
    elemento: 'Tierra',
    palabrasClaveDerechas: ['Colaboración', 'Trabajo en equipo', 'Aprendizaje', 'Maestría', 'Reconocimiento'],
    palabrasClaveInvertidas: ['Desorganización', 'Mediocridad', 'Falta de habilidad', 'Incompetencia', 'Conflicto de equipo']
  },
  {
    id: 'CUATRO_DE_OROS',
    nombre: 'Cuatro de Oros',
    significadoDerecho: 'Estabilidad, seguridad, control, posesividad, ahorro, protección, límites.',
    significadoInvertido: 'Inseguridad, rigidez, pérdida de control, avaricia, gastos excesivos, soltar.',
    detalleDerecho: 'Simboliza la estabilidad, la seguridad y el control sobre los recursos materiales. Puede indicar posesividad o la necesidad de proteger lo que se tiene. Invita a la prudencia y a establecer límites.',
    detalleInvertido: 'Invertido, el Cuatro de Oros puede indicar inseguridad, rigidez o una pérdida de control. También puede señalar avaricia, gastos excesivos o la necesidad de soltar las posesiones materiales o el control para avanzar.',
    elemento: 'Tierra',
    palabrasClaveDerechas: ['Estabilidad', 'Seguridad', 'Control', 'Posesividad', 'Ahorro'],
    palabrasClaveInvertidas: ['Inseguridad', 'Avaricia', 'Rigidez', 'Pérdida de control', 'Desapego']
  },
  {
    id: 'CINCO_DE_OROS',
    nombre: 'Cinco de Oros',
    significadoDerecho: 'Pobreza, dificultad, marginación, enfermedad, pérdida, necesidad de ayuda.',
    significadoInvertido: 'Recuperación, superación de la adversidad, encontrar ayuda, esperanza, mejoría.',
    detalleDerecho: 'Representa la dificultad, la pobreza, la marginación o la enfermedad. Sugiere una sensación de pérdida y la necesidad de ayuda, a menudo cuando se siente excluido o desprotegido.',
    detalleInvertido: 'Invertido, el Cinco de Oros puede indicar recuperación de la adversidad, superación de dificultades o el acto de encontrar ayuda. También puede señalar el surgimiento de la esperanza o una mejoría en la situación material o de salud.',
    elemento: 'Tierra',
    palabrasClaveDerechas: ['Pobreza', 'Dificultad', 'Marginación', 'Pérdida', 'Enfermedad'],
    palabrasClaveInvertidas: ['Recuperación', 'Superación', 'Ayuda encontrada', 'Esperanza', 'Mejoría']
  },
  {
    id: 'SEIS_DE_OROS',
    nombre: 'Seis de Oros',
    significadoDerecho: 'Generosidad, caridad, dar y recibir, equilibrio, compartir, apoyo, justicia.',
    significadoInvertido: 'Deuda, desigualdad, egoísmo, caridad falsa, dependencia, abuso de poder.',
    detalleDerecho: 'Simboliza la generosidad, la caridad y el equilibrio entre dar y recibir. Representa el acto de compartir los recursos o de recibir apoyo cuando es necesario. Invita a la justicia en las transacciones.',
    detalleInvertido: 'Invertido, el Seis de Oros puede indicar deuda, desigualdad, egoísmo o una caridad falsa. También puede señalar dependencia excesiva, abuso de poder o la necesidad de equilibrar las relaciones financieras.',
    elemento: 'Tierra',
    palabrasClaveDerechas: ['Generosidad', 'Caridad', 'Dar y recibir', 'Equilibrio', 'Apoyo'],
    palabrasClaveInvertidas: ['Deuda', 'Desigualdad', 'Egoísmo', 'Falsa caridad', 'Dependencia']
  },
  {
    id: 'SIETE_DE_OROS',
    nombre: 'Siete de Oros',
    significadoDerecho: 'Paciencia, inversión, espera, reevaluación, recompensa a largo plazo, cosecha.',
    significadoInvertido: 'Impaciencia, malas inversiones, frustración, falta de recompensa, cosecha fallida.',
    detalleDerecho: 'Representa la paciencia y la espera por los frutos de una inversión. Simboliza la necesidad de reevaluar el progreso y comprender que las recompensas a largo plazo requieren tiempo y cuidado.',
    detalleInvertido: 'Invertido, el Siete de Oros puede indicar impaciencia, malas inversiones o frustración por la falta de recompensa. También puede señalar una cosecha fallida o la necesidad de reevaluar si el esfuerzo vale la pena.',
    elemento: 'Tierra',
    palabrasClaveDerechas: ['Paciencia', 'Inversión', 'Espera', 'Reevaluación', 'Cosecha'],
    palabrasClaveInvertidas: ['Impaciencia', 'Malas inversiones', 'Frustración', 'Falta de recompensa', 'Fallo']
  },
  {
    id: 'OCHO_DE_OROS',
    nombre: 'Ocho de Oros',
    significadoDerecho: 'Habilidad, artesanía, dedicación, aprendizaje, perfección, detalle, trabajo duro.',
    significadoInvertido: 'Perfeccionismo, falta de ambición, estancamiento, chapucería, descuido, falta de detalle.',
    detalleDerecho: 'Simboliza la habilidad, la artesanía y la dedicación al trabajo. Representa el aprendizaje constante, la perfección en los detalles y el trabajo duro para dominar una disciplina. Invita a la diligencia.',
    detalleInvertido: 'Invertido, el Ocho de Oros puede indicar perfeccionismo excesivo, falta de ambición o estancamiento en el aprendizaje. También puede señalar chapucería, descuido en los detalles o la falta de dedicación necesaria para la maestría.',
    elemento: 'Tierra',
    palabrasClaveDerechas: ['Habilidad', 'Dedicación', 'Aprendizaje', 'Perfección', 'Trabajo duro'],
    palabrasClaveInvertidas: ['Perfeccionismo', 'Falta de ambición', 'Estancamiento', 'Chapucería', 'Descuido']
  },
  {
    id: 'NUEVE_DE_OROS',
    nombre: 'Nueve de Oros',
    significadoDerecho: 'Independencia, autosuficiencia, lujo, éxito material, disfrute, riqueza, gratitud.',
    significadoInvertido: 'Dependencia, pérdida financiera, exceso de trabajo, soledad, inseguridad.',
    detalleDerecho: 'La carta de la independencia y la autosuficiencia material. Representa el disfrute de los lujos y el éxito económico ganado con esfuerzo. Invita a la gratitud por las bendiciones materiales y la tranquilidad.',
    detalleInvertido: 'Invertido, el Nueve de Oros puede indicar dependencia, pérdida financiera o exceso de trabajo sin recompensa. También puede señalar soledad, inseguridad material o la incapacidad para disfrutar de la riqueza.',
    elemento: 'Tierra',
    palabrasClaveDerechas: ['Independencia', 'Autosuficiencia', 'Lujo', 'Éxito material', 'Disfrute'],
    palabrasClaveInvertidas: ['Dependencia', 'Pérdida financiera', 'Exceso de trabajo', 'Soledad', 'Inseguridad']
  },
  {
    id: 'DIEZ_DE_OROS',
    nombre: 'Diez de Oros',
    significadoDerecho: 'Riqueza, seguridad, herencia, familia, legado, estabilidad a largo plazo, éxito.',
    significadoInvertido: 'Inestabilidad, pérdida de patrimonio, conflicto familiar, fracaso, herencia problemática.',
    detalleDerecho: 'Simboliza la máxima riqueza, seguridad y estabilidad a largo plazo. Representa la herencia, el legado familiar y el éxito generacional. Es una carta de plenitud material y bienestar duradero.',
    detalleInvertido: 'Invertido, el Diez de Oros puede indicar inestabilidad financiera, pérdida de patrimonio o conflictos familiares relacionados con dinero. También puede señalar fracaso, una herencia problemática o la dificultad para establecer un legado duradero.',
    elemento: 'Tierra',
    palabrasClaveDerechas: ['Riqueza', 'Seguridad', 'Herencia', 'Familia', 'Estabilidad a largo plazo'],
    palabrasClaveInvertidas: ['Inestabilidad', 'Pérdida de patrimonio', 'Conflicto familiar', 'Fracaso', 'Herencia problemática']
  },
  {
    id: 'SOTA_DE_OROS',
    nombre: 'Sota de Oros',
    significadoDerecho: 'Nuevas oportunidades materiales, aprendizaje, estudio, disciplina, ambición práctica.',
    significadoInvertido: 'Inmadurez, falta de ambición, negligencia, noticias financieras malas, oportunidades perdidas.',
    detalleDerecho: 'La Sota de Oros trae nuevas oportunidades materiales, relacionadas con el estudio, el trabajo o las finanzas. Representa la disciplina, la ambición práctica y la disposición para aprender y crecer en el mundo real.',
    detalleInvertido: 'Invertida, la Sota de Oros puede indicar inmadurez en asuntos financieros, falta de ambición o negligencia en el trabajo. También puede señalar malas noticias financieras o el desaprovechamiento de oportunidades prácticas.',
    elemento: 'Tierra',
    palabrasClaveDerechas: ['Oportunidad material', 'Aprendizaje', 'Disciplina', 'Ambición práctica', 'Estudio'],
    palabrasClaveInvertidas: ['Inmadurez', 'Falta de ambición', 'Negligencia', 'Malas noticias financieras', 'Oportunidades perdidas']
  },
  {
    id: 'CABALLO_DE_OROS',
    nombre: 'Caballo de Oros',
    significadoDerecho: 'Diligencia, trabajo duro, paciencia, responsabilidad, fiabilidad, avance lento y constante.',
    significadoInvertido: 'Pereza, irresponsabilidad, estancamiento, ineficacia, falta de ambición, lentitud excesiva.',
    detalleDerecho: 'El Caballo de Oros simboliza la diligencia, el trabajo duro y la paciencia. Representa un avance lento pero constante y una persona fiable y responsable en asuntos materiales. Es la encarnación de la perseverancia y la dedicación a los objetivos prácticos.',
    detalleInvertido: 'Cuando el Caballo de Oros aparece invertido, advierte sobre pereza, falta de compromiso o estancamiento. Puede indicar irresponsabilidad, ineficacia en el trabajo o una resistencia al avance, mostrando una persona que evita las tareas prácticas o avanza con lentitud excesiva.',
    elemento: 'Tierra',
    palabrasClaveDerechas: ['Diligencia', 'Trabajo duro', 'Paciencia', 'Responsabilidad', 'Avance lento'],
    palabrasClaveInvertidas: ['Pereza', 'Irresponsabilidad', 'Estancamiento', 'Ineficacia', 'Falta de ambición']
  },
  {
    id: 'REINA_DE_OROS',
    nombre: 'Reina de Oros',
    significadoDerecho: 'Nutrición, practicidad, seguridad, prosperidad, hogar, generosidad, confianza.',
    significadoInvertido: 'Materialismo, superficialidad, negligencia, inseguridad, egoísmo, falta de apoyo.',
    detalleDerecho: 'La Reina de Oros encarna la nutrición, la practicidad y la seguridad. Es una persona próspera, generosa y arraigada que se preocupa por el hogar y el bienestar de los demás. Inspira confianza y estabilidad.',
    detalleInvertido: 'Invertida, la Reina de Oros puede indicar materialismo excesivo, superficialidad o negligencia en el hogar y las finanzas. También puede señalar inseguridad, egoísmo o una falta de apoyo hacia los demás.',
    elemento: 'Tierra',
    palabrasClaveDerechas: ['Nutrición', 'Practicidad', 'Seguridad', 'Prosperidad', 'Generosidad'],
    palabrasClaveInvertidas: ['Materialismo', 'Superficialidad', 'Negligencia', 'Inseguridad', 'Egoísmo']
  },
  {
    id: 'REY_DE_OROS',
    nombre: 'Rey de Oros',
    significadoDerecho: 'Estabilidad, seguridad financiera, éxito, fiabilidad, generosidad, liderazgo empresarial.',
    significadoInvertido: 'Corrupción, tiranía, avaricia, materialismo, inestabilidad financiera, especulación.',
    detalleDerecho: 'El Rey de Oros representa la estabilidad, la seguridad financiera y el éxito duradero. Es una persona fiable, generosa y un líder empresarial que sabe cómo construir y mantener la riqueza. Invita a la prosperidad y la prudencia.',
    detalleInvertido: 'Invertido, el Rey de Oros puede indicar corrupción, tiranía en los negocios o avaricia. También puede señalar un materialismo excesivo, inestabilidad financiera o una tendencia a la especulación arriesgada.',
    elemento: 'Tierra',
    palabrasClaveDerechas: ['Estabilidad', 'Seguridad financiera', 'Éxito', 'Fiabilidad', 'Generosidad'],
    palabrasClaveInvertidas: ['Corrupción', 'Avaricia', 'Materialismo', 'Inestabilidad', 'Especulación']
  }
];