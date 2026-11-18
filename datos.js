/* APAÑO — datos de demostración. Personas, anuncios e importes inventados. Hoy = 17/11/2026, ubicación del usuario: Palma. */
window.A = window.A || {};

A.HOY = '2026-11-17';

/* Pictogramas de categoría (viewBox 24, trazo) */
A.ICONOS = {
  hogar:'M3 11.2 12 4l9 7.2M5.5 9.5V20h13V9.5M10 20v-5.5h4V20',
  limpieza:'M12 3.5l1.7 4.4 4.5 1.7-4.5 1.7L12 15.8l-1.7-4.5L5.8 9.6l4.5-1.7zM18.5 15l.8 2 2 .8-2 .8-.8 2-.8-2-2-.8 2-.8z',
  mudanzas:'M2.5 6.5h11v10h-11zM13.5 10h4.2l3.3 3.4v3.1h-7.5M6.5 19.5a1.7 1.7 0 1 0 0-.1M17 19.5a1.7 1.7 0 1 0 0-.1',
  clases:'M2 9.2 12 4.5l10 4.7-10 4.7zM6 11.2v4.6c3.4 2.5 8.6 2.5 12 0v-4.6M22 9.2v5.3',
  mascotas:'M6.6 10.3a1.9 2.4 0 1 0 0-.1M10 6.6a1.9 2.4 0 1 0 0-.1M14.6 6.6a1.9 2.4 0 1 0 0-.1M18 10.3a1.9 2.4 0 1 0 0-.1M12.3 12.4c-2.9 0-5.3 3.3-5.3 5.3 0 1.6 1.4 2.3 2.8 2.3 1 0 1.6-.6 2.5-.6s1.5.6 2.5.6c1.4 0 2.8-.7 2.8-2.3 0-2-2.4-5.3-5.3-5.3z',
  belleza:'M6.5 7a2.6 2.6 0 1 0 0-.1M6.5 17a2.6 2.6 0 1 0 0-.1M8.6 8.6 20 18.5M8.6 15.4 20 5.5',
  eventos:'M3.5 8h4l1.8-2.6h5.4L16.5 8h4v11h-17zM12 16.6a3.3 3.3 0 1 0 0-.1',
  tecnologia:'M4.5 5.5h15v10h-15zM2.5 19h19M10 15.5v3.5M14 15.5v3.5',
  motor:'M3 13.5 5 8.5h14l2 5v4.5H3zM3 13.5h18M7 18v1.5M17 18v1.5M7 16a.1.1 0 1 0 .1 0M17 16a.1.1 0 1 0 .1 0',
  jardin:'M12 21v-9M12 12c0-4.4 3.2-7.6 8.4-7.6 0 5.2-3.2 8.2-8.4 7.6zM12 14c0-3.2-2.4-5.6-6.4-5.6 0 3.8 2.4 6 6.4 5.6',
  cuidados:'M12 20s-7.5-4.6-7.5-10.3A4.2 4.2 0 0 1 12 7.2a4.2 4.2 0 0 1 7.5 2.5C19.5 15.4 12 20 12 20z',
  diseno:'M12 3a9 9 0 1 0 0 18c1.1 0 1.6-.8 1.6-1.6 0-1.1-1-1.4-1-2.4 0-1 .8-1.8 1.8-1.8h2.2a4.4 4.4 0 0 0 4.4-4.4C21 6.8 17 3 12 3zM7.6 11.5a.1.1 0 1 0 .1 0M10 7.4a.1.1 0 1 0 .1 0M14.6 7.4a.1.1 0 1 0 .1 0',
  recados:'M5 8h14l-1.1 12.5H6.1zM9 8V6.5a3 3 0 0 1 6 0V8',
  deporte:'M2.5 10v4M5.8 7v10M18.2 7v10M21.5 10v4M5.8 12h12.4',
  reparaciones:'M14.6 6.1a4.1 4.1 0 0 0-5.5 5.5L3 17.7 6.3 21l6.1-6.1a4.1 4.1 0 0 0 5.5-5.5l-2.6 2.6-2.6-.5-.5-2.6z'
};

A.CATEGORIAS = [
  {id:'hogar',        n:'Hogar y reformas',       c1:'#FF8A3D', c2:'#E9482B', sub:['Fontanería','Electricidad','Pintura','Montaje de muebles','Albañilería']},
  {id:'limpieza',     n:'Limpieza',               c1:'#3ECFDB', c2:'#1785E0', sub:['Casas','Fin de obra','Cristales','Tapicerías','Oficinas']},
  {id:'mudanzas',     n:'Mudanzas y portes',      c1:'#FFB547', c2:'#F47314', sub:['Mudanzas','Portes','Guardamuebles','Montaje y desmontaje']},
  {id:'clases',       n:'Clases',                 c1:'#7B6CFF', c2:'#4A2EDF', sub:['Idiomas','Refuerzo escolar','Música','Informática','Cocina']},
  {id:'mascotas',     n:'Mascotas',               c1:'#FF7AA2', c2:'#E2416F', sub:['Paseos','Cuidado en casa','Peluquería canina','Adiestramiento']},
  {id:'belleza',      n:'Belleza',                c1:'#F38BD6', c2:'#AE45DD', sub:['Peluquería','Manicura','Maquillaje','Depilación','Barbería']},
  {id:'eventos',      n:'Eventos y fotografía',   c1:'#FFCC3A', c2:'#F08418', sub:['Fotografía','Vídeo','DJ','Catering','Animación']},
  {id:'tecnologia',   n:'Tecnología',             c1:'#4F8EFF', c2:'#2C4BDD', sub:['Reparar móviles','Ordenadores','Redes y wifi','Domótica']},
  {id:'motor',        n:'Motor',                  c1:'#727C91', c2:'#2D3444', sub:['Mecánica','Lavado a domicilio','ITV','Neumáticos']},
  {id:'jardin',       n:'Jardín y piscinas',      c1:'#55D48B', c2:'#129C66', sub:['Poda','Césped','Piscinas','Riego']},
  {id:'cuidados',     n:'Cuidado de mayores',     c1:'#FF9F7B', c2:'#EC5B57', sub:['Compañía','Acompañamiento médico','Noches','Higiene']},
  {id:'diseno',       n:'Diseño y creatividad',   c1:'#B07BFF', c2:'#7238DD', sub:['Logos','Ilustración','Edición de vídeo','Redes sociales']},
  {id:'recados',      n:'Recados y ayuda',        c1:'#40D2AE', c2:'#0F9C86', sub:['Compra a domicilio','Gestiones','Colas y trámites','Esperar a técnicos']},
  {id:'deporte',      n:'Deporte y salud',        c1:'#FF6F5E', c2:'#D53548', sub:['Entrenador personal','Yoga','Fisioterapia','Nutrición']},
  {id:'reparaciones', n:'Reparaciones',           c1:'#90A3B9', c2:'#4A5E76', sub:['Electrodomésticos','Bicicletas','Arreglos de ropa','Persianas']}
];

/* Usuarios. Todos los que tienen cuenta activa son mayores de edad y han presentado documento. */
A.USUARIOS = [
  {id:'u1',  n:'Laura Bennàssar', corto:'Laura B.', tipo:'particular', rol:'usuario', av:'#5B3DF5', nac:'1994-03-12', doc:'DNI', docNum:'43128876N',
   ciudad:'Palma', barrio:'Santa Catalina', km:0.8, alta:'2024-02-03', estado:'verificado',
   ver:{email:1,tel:1,dni:1,selfie:1}, val:4.9, resenas:38, hechos:52, responde:'en menos de 1 h',
   bio:'Fotógrafa de producto y profe de cerámica los fines de semana. Trabajo con luz natural y entrego en 48 h.', idiomas:['Español','Catalán','Inglés']},
  {id:'u2',  n:'Toni Mas', corto:'Toni M.', tipo:'profesional', rol:'usuario', av:'#E9482B', nac:'1981-07-29', doc:'DNI', docNum:'78219004Y',
   ciudad:'Palma', barrio:'Pere Garau', km:2.1, alta:'2023-05-19', estado:'verificado',
   ver:{email:1,tel:1,dni:1,selfie:1}, val:4.8, resenas:124, hechos:181, responde:'en menos de 1 h',
   bio:'Electricista autorizado, 18 años de oficio. Boletines, cuadros, averías y puntos de carga. Factura con IVA.', idiomas:['Español','Catalán']},
  {id:'u3',  n:'Marta Grimalt', corto:'Marta G.', tipo:'particular', rol:'usuario', av:'#F2547A', nac:'1999-11-02', doc:'DNI', docNum:'43215567Q',
   ciudad:'Palma', barrio:'Son Espanyolet', km:1.6, alta:'2025-01-11', estado:'verificado',
   ver:{email:1,tel:1,dni:1,selfie:1}, val:5.0, resenas:61, hechos:140, responde:'en menos de 30 min',
   bio:'Paseo perros desde hace 6 años. Grupos de máximo 3 y siempre con correa. Te mando fotos de cada paseo.', idiomas:['Español','Inglés']},
  {id:'u4',  n:'Samir El Idrissi', corto:'Samir E.', tipo:'profesional', rol:'usuario', av:'#2C4BDD', nac:'1990-01-21', doc:'NIE', docNum:'X3456721M',
   ciudad:'Palma', barrio:'Nou Llevant', km:3.4, alta:'2023-09-02', estado:'verificado',
   ver:{email:1,tel:1,dni:1,selfie:1}, val:4.9, resenas:212, hechos:390, responde:'en menos de 1 h',
   bio:'Reparo móviles y portátiles en el día. Pantallas, baterías y placas. 6 meses de garantía en cada reparación.', idiomas:['Español','Francés','Árabe']},
  {id:'u5',  n:'Catalina Ferrer', corto:'Catalina F.', tipo:'particular', rol:'usuario', av:'#129C66', nac:'1968-04-15', doc:'DNI', docNum:'42998713Y',
   ciudad:'Marratxí', barrio:'Pont d’Inca', km:6.2, alta:'2024-06-24', estado:'verificado',
   ver:{email:1,tel:1,dni:1,selfie:1}, val:4.9, resenas:47, hechos:66, responde:'en unas horas',
   bio:'Auxiliar de enfermería jubilada. Acompaño a personas mayores a consultas y hago compañía por las tardes.', idiomas:['Español','Catalán']},
  {id:'u6',  n:'Dani Ortega', corto:'Dani O.', tipo:'profesional', rol:'usuario', av:'#F47314', nac:'1987-09-08', doc:'DNI', docNum:'45612309C',
   ciudad:'Palma', barrio:'Son Castelló', km:4.0, alta:'2023-03-30', estado:'verificado',
   ver:{email:1,tel:1,dni:1,selfie:1}, val:4.7, resenas:96, hechos:150, responde:'en menos de 2 h',
   bio:'Mudanzas y portes con furgoneta de 20 m³ y dos operarios. Mantas, film y montaje de muebles incluidos.', idiomas:['Español']},
  {id:'u7',  n:'Irene Vidal', corto:'Irene V.', tipo:'particular', rol:'usuario', av:'#AE45DD', nac:'1996-12-19', doc:'DNI', docNum:'43177542X',
   ciudad:'Palma', barrio:'El Terreno', km:2.7, alta:'2024-09-15', estado:'verificado',
   ver:{email:1,tel:1,dni:1,selfie:1}, val:4.9, resenas:83, hechos:120, responde:'en menos de 1 h',
   bio:'Peluquera con 10 años en salón. Ahora voy a domicilio: cortes, color y recogidos para bodas.', idiomas:['Español','Italiano']},
  {id:'u8',  n:'Joan Pons', corto:'Joan P.', tipo:'profesional', rol:'usuario', av:'#4A5E76', nac:'1975-02-27', doc:'DNI', docNum:'42876501Q',
   ciudad:'Llucmajor', barrio:'S’Arenal', km:11.8, alta:'2023-07-07', estado:'verificado',
   ver:{email:1,tel:1,dni:1,selfie:1}, val:4.6, resenas:58, hechos:77, responde:'en unas horas',
   bio:'Técnico de electrodomésticos. Lavadoras, frigoríficos, hornos y aire acondicionado. Diagnóstico gratis si reparo.', idiomas:['Español','Catalán']},
  {id:'u9',  n:'Elena Ruiz', corto:'Elena R.', tipo:'particular', rol:'usuario', av:'#4A2EDF', nac:'1992-06-03', doc:'DNI', docNum:'53291108Q',
   ciudad:'Palma', barrio:'Centro', km:0.5, alta:'2024-01-22', estado:'verificado',
   ver:{email:1,tel:1,dni:1,selfie:1}, val:5.0, resenas:44, hechos:96, responde:'en menos de 1 h',
   bio:'Profesora de inglés titulada (C2, CELTA). Preparo exámenes de Cambridge y conversación para el trabajo.', idiomas:['Español','Inglés']},
  {id:'u10', n:'Biel Sastre', corto:'Biel S.', tipo:'profesional', rol:'usuario', av:'#0F9C86', nac:'1984-10-10', doc:'DNI', docNum:'43011987D',
   ciudad:'Calvià', barrio:'Santa Ponça', km:16.5, alta:'2023-04-14', estado:'verificado',
   ver:{email:1,tel:1,dni:1,selfie:1}, val:4.8, resenas:71, hechos:103, responde:'en menos de 2 h',
   bio:'Jardinero y mantenimiento de piscinas. Contratos mensuales y trabajos puntuales en todo el suroeste.', idiomas:['Español','Catalán','Alemán']},
  {id:'u11', n:'Lucía Navarro', corto:'Lucía N.', tipo:'particular', rol:'usuario', av:'#D53548', nac:'1997-08-25', doc:'DNI', docNum:'48765312E',
   ciudad:'Palma', barrio:'Portixol', km:3.1, alta:'2024-11-02', estado:'verificado',
   ver:{email:1,tel:1,dni:1,selfie:1}, val:4.9, resenas:39, hechos:85, responde:'en menos de 1 h',
   bio:'Entrenadora personal y monitora de yoga. Sesiones en tu casa, en el parque o por videollamada.', idiomas:['Español','Inglés']},
  {id:'u12', n:'Pere Llull', corto:'Pere L.', tipo:'profesional', rol:'usuario', av:'#2D3444', nac:'1979-05-01', doc:'DNI', docNum:'43098211Y',
   ciudad:'Palma', barrio:'Polígono de Levante', km:3.8, alta:'2023-02-10', estado:'verificado',
   ver:{email:1,tel:1,dni:1,selfie:1}, val:4.7, resenas:88, hechos:132, responde:'en unas horas',
   bio:'Mecánico con taller móvil. Cambio de aceite, frenos, baterías y diagnosis en tu garaje o en la calle.', idiomas:['Español','Catalán']},
  {id:'u13', n:'Aina Coll', corto:'Aina C.', tipo:'particular', rol:'usuario', av:'#7238DD', nac:'2001-02-14', doc:'DNI', docNum:'43299016K',
   ciudad:'Palma', barrio:'Son Armadams', km:1.9, alta:'2025-03-08', estado:'verificado',
   ver:{email:1,tel:1,dni:1,selfie:1}, val:4.8, resenas:22, hechos:31, responde:'en menos de 1 h',
   bio:'Diseñadora gráfica. Logos, cartas de restaurante y piezas para Instagram con entregas rápidas.', idiomas:['Español','Catalán','Inglés']},
  {id:'u14', n:'Rosa Martín', corto:'Rosa M.', tipo:'particular', rol:'usuario', av:'#1785E0', nac:'1971-12-30', doc:'DNI', docNum:'43554189D',
   ciudad:'Palma', barrio:'Son Rapinya', km:3.3, alta:'2024-04-17', estado:'verificado',
   ver:{email:1,tel:1,dni:1,selfie:1}, val:4.9, resenas:102, hechos:210, responde:'en menos de 2 h',
   bio:'Limpieza de casas y apartamentos turísticos. Llevo mis productos ecológicos. Cambios de ropa de cama incluidos.', idiomas:['Español']},
  {id:'u15', n:'Hugo Serra', corto:'Hugo S.', tipo:'particular', rol:'usuario', av:'#F08418', nac:'1995-04-09', doc:'DNI', docNum:'43200917V',
   ciudad:'Palma', barrio:'La Lonja', km:0.6, alta:'2025-05-29', estado:'verificado',
   ver:{email:1,tel:1,dni:1,selfie:1}, val:4.8, resenas:27, hechos:34, responde:'en menos de 2 h',
   bio:'DJ y técnico de sonido para cumpleaños, bodas pequeñas y eventos de empresa. Equipo propio.', idiomas:['Español','Inglés']},
  {id:'u16', n:'Nerea Campins', corto:'Nerea C.', tipo:'particular', rol:'usuario', av:'#0F9C86', nac:'1990-09-17', doc:'DNI', docNum:'43177609P',
   ciudad:'Palma', barrio:'Bons Aires', km:1.2, alta:'2025-08-01', estado:'verificado',
   ver:{email:1,tel:1,dni:1,selfie:1}, val:4.7, resenas:18, hechos:26, responde:'en menos de 1 h',
   bio:'Te hago la compra, recojo paquetes y espero al técnico en tu casa. Trabajo por las mañanas.', idiomas:['Español','Catalán']},
  /* cuentas que aún no pueden publicar ni contactar */
  {id:'u17', n:'Pau Rigo', corto:'Pau R.', tipo:'particular', rol:'usuario', av:'#727C91', nac:'2003-10-05', doc:'DNI', docNum:'43301122B',
   ciudad:'Palma', barrio:'Son Gotleu', km:2.4, alta:'2026-11-16', estado:'pendiente',
   ver:{email:1,tel:1,dni:0,selfie:0}, val:0, resenas:0, hechos:0, responde:'—',
   bio:'Alta reciente. Documento enviado y en revisión.', idiomas:['Español']},
  /* equipo interno */
  {id:'m1',  n:'Nuria Palau', corto:'Nuria P.', tipo:'interno', rol:'moderador', av:'#17151F', nac:'1988-01-30', doc:'DNI', docNum:'43122987B',
   ciudad:'Palma', barrio:'Oficina Apaño', km:0, alta:'2023-01-09', estado:'verificado',
   ver:{email:1,tel:1,dni:1,selfie:1}, val:0, resenas:0, hechos:0, responde:'—',
   bio:'Equipo de confianza y seguridad. Revisa documentos de identidad y anuncios.', idiomas:['Español','Catalán','Inglés']},
  {id:'m2',  n:'Óscar Vidal', corto:'Óscar V.', tipo:'interno', rol:'admin', av:'#17151F', nac:'1983-08-11', doc:'DNI', docNum:'43066514A',
   ciudad:'Palma', barrio:'Oficina Apaño', km:0, alta:'2022-10-01', estado:'verificado',
   ver:{email:1,tel:1,dni:1,selfie:1}, val:0, resenas:0, hechos:0, responde:'—',
   bio:'Administración de la plataforma.', idiomas:['Español','Inglés']}
];

/* Anuncios: unidad = 'hora' | 'servicio' | 'sesión' | 'clase' | 'paseo' | 'día' | 'desde' | 'm²' | 'mes' */
A.ANUNCIOS = [
  {id:'s1',  t:'Electricista urgente: averías, enchufes y cuadros', u:'u2', cat:'hogar', sub:'Electricidad', precio:35, unidad:'hora', estado:'activo', dest:true, urg:true,
   fecha:'2026-11-16', vistas:1840, favs:212, modo:'A domicilio',
   desc:'Salto de diferencial, enchufes que no funcionan, cambio de mecanismos, lámparas y cuadros eléctricos. Llevo material básico en la furgoneta y te doy precio antes de empezar si la avería es grande.',
   incluye:['Desplazamiento en Palma','Primera hora de trabajo','Material pequeño (fichas, cinta, bornes)','Factura con IVA'], dispo:'Lunes a sábado · urgencias hasta las 22:00', zona:'Palma y Marratxí'},
  {id:'s2',  t:'Instalación de punto de carga para coche eléctrico', u:'u2', cat:'hogar', sub:'Electricidad', precio:690, unidad:'servicio', estado:'activo', dest:false, urg:false,
   fecha:'2026-11-09', vistas:620, favs:88, modo:'A domicilio',
   desc:'Instalación completa de cargador en garaje privado o comunitario hasta 15 m de cuadro. Tramito el boletín y te ayudo con la subvención del programa MOVES.',
   incluye:['Cableado hasta 15 m','Protecciones en cuadro','Boletín eléctrico','Puesta en marcha y prueba'], dispo:'Cita en 5 días', zona:'Mallorca'},
  {id:'s3',  t:'Fotografía de producto para tu tienda online', u:'u1', cat:'eventos', sub:'Fotografía', precio:12, unidad:'foto', estado:'activo', dest:true, urg:false,
   fecha:'2026-11-14', vistas:960, favs:131, modo:'En mi estudio',
   desc:'Fondo blanco o ambiente, con luz natural y retoque incluido. Mínimo 10 fotos. Me traes el producto al estudio de Santa Catalina o lo recojo yo en Palma.',
   incluye:['Retoque y recorte','Dos formatos (web y redes)','Entrega en 48 h','Recogida en Palma'], dispo:'Martes a viernes', zona:'Palma · envíos a toda la isla'},
  {id:'s4',  t:'Taller de cerámica para principiantes (2 h)', u:'u1', cat:'clases', sub:'Cocina', precio:38, unidad:'clase', estado:'activo', dest:false, urg:false,
   fecha:'2026-11-12', vistas:410, favs:76, modo:'En mi estudio',
   desc:'Grupos de 4 personas. Modelamos a mano una taza y un cuenco, y los coces en mi horno. Recoges las piezas a la semana.',
   incluye:['Barro y esmaltes','Cocción de 2 piezas','Delantal y herramientas','Café o té'], dispo:'Sábados 10:00 y 17:00', zona:'Santa Catalina, Palma'},
  {id:'s5',  t:'Paseo de perros en grupo pequeño (1 h)', u:'u3', cat:'mascotas', sub:'Paseos', precio:12, unidad:'paseo', estado:'activo', dest:true, urg:false,
   fecha:'2026-11-17', vistas:2310, favs:340, modo:'A domicilio',
   desc:'Paseos de una hora por el parque de Sa Riera o Bellver. Máximo 3 perros por grupo, siempre con correa. Te mando fotos y el recorrido al terminar.',
   incluye:['Recogida y entrega en casa','Agua y bolsas','Fotos del paseo','Bono de 10 paseos: 110 €'], dispo:'Mañanas y tardes', zona:'Palma centro y oeste'},
  {id:'s6',  t:'Cuido a tu mascota en tu casa mientras viajas', u:'u3', cat:'mascotas', sub:'Cuidado en casa', precio:25, unidad:'día', estado:'activo', dest:false, urg:false,
   fecha:'2026-11-03', vistas:880, favs:154, modo:'A domicilio',
   desc:'Dos visitas al día: comida, agua, juego, limpieza del arenero y riego de plantas si lo necesitas. Perros y gatos.',
   incluye:['2 visitas al día','Parte diario con fotos','Riego de plantas','Recogida del correo'], dispo:'Todo el año', zona:'Palma'},
  {id:'s7',  t:'Cambio de pantalla de móvil en 1 hora', u:'u4', cat:'tecnologia', sub:'Reparar móviles', precio:59, unidad:'desde', estado:'activo', dest:true, urg:true,
   fecha:'2026-11-16', vistas:3120, favs:402, modo:'En mi local',
   desc:'iPhone, Samsung, Xiaomi y Oppo. Pantallas de calidad original y 6 meses de garantía. Si no puedo arreglarlo, no pagas.',
   incluye:['Diagnóstico gratis','Protector de cristal','6 meses de garantía','Copia de datos si hace falta'], dispo:'Lunes a sábado 10:00–20:00', zona:'Nou Llevant, Palma'},
  {id:'s8',  t:'Portátil lento: limpieza, SSD y reinstalación', u:'u4', cat:'tecnologia', sub:'Ordenadores', precio:45, unidad:'servicio', estado:'activo', dest:false, urg:false,
   fecha:'2026-11-08', vistas:1050, favs:122, modo:'En mi local',
   desc:'Limpieza interna, cambio de pasta térmica y paso a disco SSD conservando tus archivos. El portátil sale como nuevo en 24 h.',
   incluye:['Limpieza y pasta térmica','Copia de seguridad','Sistema y programas básicos','SSD aparte según capacidad'], dispo:'Entrega en 24 h', zona:'Palma'},
  {id:'s9',  t:'Mudanza de piso pequeño con 2 operarios', u:'u6', cat:'mudanzas', sub:'Mudanzas', precio:290, unidad:'desde', estado:'activo', dest:true, urg:false,
   fecha:'2026-11-15', vistas:1430, favs:190, modo:'A domicilio',
   desc:'Furgoneta de 20 m³ y dos operarios. Precio para estudio o piso de una habitación dentro de Palma, hasta 4 horas. Desmontamos y montamos camas y armarios.',
   incluye:['Furgoneta y 2 operarios','Mantas y film','Montaje de muebles','Seguro de mercancía'], dispo:'Fines de semana incluidos', zona:'Mallorca'},
  {id:'s10', t:'Porte rápido: sofá, nevera o compras grandes', u:'u6', cat:'mudanzas', sub:'Portes', precio:45, unidad:'servicio', estado:'activo', dest:false, urg:true,
   fecha:'2026-11-17', vistas:770, favs:64, modo:'A domicilio',
   desc:'Te llevo un mueble o electrodoméstico de tienda a casa o entre domicilios en Palma. Subo hasta tercer piso sin ascensor.',
   incluye:['Carga y descarga','Hasta tercer piso','Mantas de protección'], dispo:'Hoy mismo si hay hueco', zona:'Palma'},
  {id:'s11', t:'Corte y color a domicilio', u:'u7', cat:'belleza', sub:'Peluquería', precio:45, unidad:'servicio', estado:'activo', dest:true, urg:false,
   fecha:'2026-11-13', vistas:1290, favs:233, modo:'A domicilio',
   desc:'Corte, color raíz y peinado en tu casa. Llevo lavacabezas portátil y productos profesionales sin amoniaco.',
   incluye:['Diagnóstico capilar','Color raíz','Corte y peinado','Recogida y limpieza'], dispo:'Martes a sábado', zona:'Palma'},
  {id:'s12', t:'Recogido y maquillaje para bodas', u:'u7', cat:'belleza', sub:'Maquillaje', precio:120, unidad:'servicio', estado:'activo', dest:false, urg:false,
   fecha:'2026-10-30', vistas:560, favs:98, modo:'A domicilio',
   desc:'Prueba previa incluida. Maquillaje de larga duración y recogido que aguanta todo el día. Desplazamiento a cualquier punto de la isla.',
   incluye:['Prueba previa','Maquillaje y recogido','Retoque antes de la ceremonia'], dispo:'Reserva con 3 semanas', zona:'Mallorca'},
  {id:'s13', t:'Reparación de lavadoras y frigoríficos', u:'u8', cat:'reparaciones', sub:'Electrodomésticos', precio:40, unidad:'desde', estado:'activo', dest:false, urg:true,
   fecha:'2026-11-11', vistas:990, favs:71, modo:'A domicilio',
   desc:'Todas las marcas. Si la reparación no compensa te lo digo antes de cobrar nada. Diagnóstico gratis si hago la reparación.',
   incluye:['Desplazamiento en la zona','Diagnóstico','3 meses de garantía en mano de obra'], dispo:'En 24–48 h', zona:'Llucmajor, Palma y Algaida'},
  {id:'s14', t:'Clases de inglés y preparación de Cambridge', u:'u9', cat:'clases', sub:'Idiomas', precio:22, unidad:'hora', estado:'activo', dest:true, urg:false,
   fecha:'2026-11-10', vistas:1510, favs:265, modo:'Online o presencial',
   desc:'B2 First, C1 Advanced y conversación para el trabajo. Simulacros con corrección y material incluido. Primera clase de nivel sin compromiso.',
   incluye:['Material y simulacros','Corrección de redacciones','Informe de progreso mensual'], dispo:'Tardes y sábados', zona:'Palma centro u online'},
  {id:'s15', t:'Mantenimiento de piscina y jardín mensual', u:'u10', cat:'jardin', sub:'Piscinas', precio:95, unidad:'mes', estado:'activo', dest:false, urg:false,
   fecha:'2026-11-05', vistas:640, favs:52, modo:'A domicilio',
   desc:'Visita semanal: limpieza de fondo, control de cloro y pH, y repaso del jardín. Productos químicos aparte a precio de coste.',
   incluye:['4 visitas al mes','Análisis de agua','Limpieza de cestos y skimmer','Corte de césped'], dispo:'Contratos todo el año', zona:'Calvià y Andratx'},
  {id:'s16', t:'Poda de árboles y setos', u:'u10', cat:'jardin', sub:'Poda', precio:30, unidad:'hora', estado:'activo', dest:false, urg:false,
   fecha:'2026-10-27', vistas:410, favs:33, modo:'A domicilio',
   desc:'Poda de olivos, palmeras y setos. Me llevo los restos al punto verde. Trabajo con escalera y arnés.',
   incluye:['Retirada de restos','Herramienta propia','Arnés y EPI'], dispo:'Lunes a viernes', zona:'Suroeste de Mallorca'},
  {id:'s17', t:'Entrenador personal en casa o en el parque', u:'u11', cat:'deporte', sub:'Entrenador personal', precio:30, unidad:'sesión', estado:'activo', dest:true, urg:false,
   fecha:'2026-11-14', vistas:1170, favs:188, modo:'A domicilio u online',
   desc:'Planificación según tu objetivo: perder peso, fuerza o volver a moverte. Llevo bandas, kettlebells y esterilla.',
   incluye:['Valoración inicial','Plan semanal en la app','Material de entrenamiento','Bono 8 sesiones: 220 €'], dispo:'7:00–21:00', zona:'Palma y Portixol'},
  {id:'s18', t:'Yoga para grupos pequeños en la playa', u:'u11', cat:'deporte', sub:'Yoga', precio:12, unidad:'clase', estado:'activo', dest:false, urg:false,
   fecha:'2026-11-06', vistas:520, favs:91, modo:'Al aire libre',
   desc:'Hatha suave al amanecer en Ciutat Jardí. Grupos de 8 como máximo. Si llueve, la clase se pasa a online.',
   incluye:['Esterilla si la necesitas','Clase de 60 min'], dispo:'Martes y jueves 7:30', zona:'Ciutat Jardí'},
  {id:'s19', t:'Mecánico a domicilio: aceite, frenos y batería', u:'u12', cat:'motor', sub:'Mecánica', precio:49, unidad:'desde', estado:'activo', dest:false, urg:false,
   fecha:'2026-11-12', vistas:840, favs:77, modo:'A domicilio',
   desc:'Cambio de aceite y filtros, pastillas de freno y baterías en tu garaje. Te enseño las piezas viejas y te doy la factura.',
   incluye:['Mano de obra','Diagnosis con máquina','Retirada de residuos'], dispo:'Lunes a sábado', zona:'Palma y alrededores'},
  {id:'s20', t:'Logo y kit para redes en 5 días', u:'u13', cat:'diseno', sub:'Logos', precio:180, unidad:'servicio', estado:'activo', dest:false, urg:false,
   fecha:'2026-11-09', vistas:690, favs:120, modo:'Online',
   desc:'Tres propuestas, dos rondas de cambios y entrega en todos los formatos. Incluye plantillas editables para publicaciones e historias.',
   incluye:['3 propuestas iniciales','2 rondas de cambios','Archivos vectoriales','6 plantillas para redes'], dispo:'Entrega en 5 días', zona:'Online'},
  {id:'s21', t:'Limpieza de piso a fondo (hasta 90 m²)', u:'u14', cat:'limpieza', sub:'Casas', precio:85, unidad:'servicio', estado:'activo', dest:true, urg:false,
   fecha:'2026-11-16', vistas:2050, favs:301, modo:'A domicilio',
   desc:'Limpieza completa de cocina, baños, suelos, polvo y cristales interiores. Productos ecológicos incluidos. Unas 4 horas.',
   incluye:['Productos ecológicos','Cristales interiores','Horno y nevera por dentro (+15 €)','Cambio de sábanas'], dispo:'Lunes a viernes', zona:'Palma'},
  {id:'s22', t:'Limpieza de apartamento turístico entre huéspedes', u:'u14', cat:'limpieza', sub:'Casas', precio:18, unidad:'hora', estado:'activo', dest:false, urg:false,
   fecha:'2026-11-02', vistas:930, favs:110, modo:'A domicilio',
   desc:'Limpieza, cambio de ropa de cama y reposición de amenities. Te mando foto del piso listo antes de la entrada.',
   incluye:['Cambio de ropa de cama','Foto de comprobación','Aviso de desperfectos'], dispo:'Mismo día del check-out', zona:'Palma'},
  {id:'s23', t:'DJ para cumpleaños y bodas pequeñas', u:'u15', cat:'eventos', sub:'DJ', precio:250, unidad:'desde', estado:'activo', dest:false, urg:false,
   fecha:'2026-11-07', vistas:470, favs:66, modo:'A domicilio',
   desc:'Equipo de sonido para hasta 100 personas, iluminación básica y micro inalámbrico. Lista de canciones acordada contigo.',
   incluye:['Equipo y montaje','4 horas de sesión','Micro para discursos','Luces básicas'], dispo:'Fines de semana', zona:'Mallorca'},
  {id:'s24', t:'Te hago la compra y te la subo a casa', u:'u16', cat:'recados', sub:'Compra a domicilio', precio:10, unidad:'servicio', estado:'activo', dest:false, urg:false,
   fecha:'2026-11-15', vistas:380, favs:41, modo:'A domicilio',
   desc:'Me mandas la lista, compro en el súper que prefieras y te la subo. Pagas la compra con el ticket a la vista.',
   incluye:['Hasta 2 bolsas grandes','Ticket con foto','Subida a domicilio'], dispo:'Mañanas', zona:'Palma centro'},
  {id:'s25', t:'Espero al técnico en tu casa', u:'u16', cat:'recados', sub:'Esperar a técnicos', precio:9, unidad:'hora', estado:'activo', dest:false, urg:false,
   fecha:'2026-11-04', vistas:250, favs:19, modo:'A domicilio',
   desc:'Si tienes que esperar al técnico de la luz, del gas o una entrega y no puedes, voy yo. Te aviso cuando llega y cuando se va.',
   incluye:['Aviso de llegada y salida','Foto del trabajo hecho'], dispo:'Mañanas', zona:'Palma'},
  {id:'s26', t:'Acompañamiento a personas mayores', u:'u5', cat:'cuidados', sub:'Acompañamiento médico', precio:14, unidad:'hora', estado:'activo', dest:true, urg:false,
   fecha:'2026-11-10', vistas:690, favs:144, modo:'A domicilio',
   desc:'Acompaño a consultas, análisis y gestiones, o hago compañía por las tardes. Experiencia como auxiliar de enfermería en Son Espases.',
   incluye:['Acompañamiento a consultas','Paseo y conversación','Aviso a la familia tras cada visita'], dispo:'Tardes y algunas mañanas', zona:'Palma y Marratxí'},
  {id:'s27', t:'Montaje de muebles de IKEA', u:'u6', cat:'hogar', sub:'Montaje de muebles', precio:25, unidad:'hora', estado:'activo', dest:false, urg:false,
   fecha:'2026-11-13', vistas:1120, favs:145, modo:'A domicilio',
   desc:'Armarios PAX, camas, cómodas y cocinas pequeñas. Anclo a pared lo que haga falta y me llevo los cartones.',
   incluye:['Herramienta propia','Anclaje a pared','Retirada de cartones'], dispo:'Esta semana', zona:'Palma'},
  {id:'s28', t:'Arreglos de ropa: bajos, cremalleras y ajustes', u:'u5', cat:'reparaciones', sub:'Arreglos de ropa', precio:8, unidad:'desde', estado:'pausado', dest:false, urg:false,
   fecha:'2026-09-20', vistas:330, favs:28, modo:'En mi casa',
   desc:'Bajos de pantalón, cambio de cremalleras y ajustes de cintura. Entrega en 3 días.',
   incluye:['Hilo a juego','Planchado'], dispo:'Pausado hasta diciembre', zona:'Marratxí'},
  {id:'s29', t:'Pintura de habitaciones (precio por m²)', u:'u2', cat:'hogar', sub:'Pintura', precio:7, unidad:'m²', estado:'activo', dest:false, urg:false,
   fecha:'2026-11-01', vistas:540, favs:47, modo:'A domicilio',
   desc:'Pintura plástica en paredes y techos. Protejo suelos y muebles y lo dejo todo recogido. Pintura aparte o la pongo yo.',
   incluye:['Protección y encintado','Dos manos','Limpieza final'], dispo:'Desde la semana que viene', zona:'Palma'},
  {id:'s30', t:'Edición de vídeo para redes (reels y tiktoks)', u:'u13', cat:'diseno', sub:'Edición de vídeo', precio:35, unidad:'servicio', estado:'activo', dest:false, urg:false,
   fecha:'2026-11-16', vistas:300, favs:49, modo:'Online',
   desc:'Me mandas los clips y te devuelvo un vídeo vertical con subtítulos, música libre de derechos y tu tipografía.',
   incluye:['Subtítulos','Música con licencia','1 ronda de cambios'], dispo:'Entrega en 48 h', zona:'Online'}
];

A.RESENAS = [
  {a:'u2', de:'u9', s:'s1', nota:5, f:'2026-11-12', t:'Vino en media hora un domingo por la noche. Encontró el enchufe que hacía saltar todo y me cobró lo que dijo.'},
  {a:'u2', de:'u3', s:'s29', nota:5, f:'2026-10-28', t:'Pintó el salón y la habitación en un día y medio. Todo protegido y sin una mancha.'},
  {a:'u2', de:'u14', s:'s1', nota:4, f:'2026-10-02', t:'Buen trabajo y muy claro con el precio. Tardó un poco más de lo previsto en llegar.'},
  {a:'u3', de:'u1', s:'s5', nota:5, f:'2026-11-15', t:'Mi perra vuelve agotada y feliz. Las fotos de cada paseo son lo mejor del día.'},
  {a:'u3', de:'u7', s:'s6', nota:5, f:'2026-10-20', t:'Diez días de viaje y los gatos estupendos. Me mandaba parte cada tarde.'},
  {a:'u4', de:'u11', s:'s7', nota:5, f:'2026-11-14', t:'Pantalla cambiada en 50 minutos y con protector puesto. Ni una mota de polvo.'},
  {a:'u4', de:'u13', s:'s8', nota:5, f:'2026-11-01', t:'Mi portátil de 2019 arranca en 10 segundos. Me guardó todos los archivos.'},
  {a:'u6', de:'u1', s:'s9', nota:5, f:'2026-09-30', t:'Mudanza de Santa Catalina a Son Espanyolet en tres horas. Montaron la cama y el armario.'},
  {a:'u7', de:'u9', s:'s11', nota:5, f:'2026-11-08', t:'El mejor color que me han hecho, y en casa. Ya tengo la siguiente cita.'},
  {a:'u9', de:'u15', s:'s14', nota:5, f:'2026-10-25', t:'Aprobé el C1 a la primera. Los simulacros eran clavados al examen.'},
  {a:'u14', de:'u2', s:'s21', nota:5, f:'2026-11-10', t:'El piso quedó mejor que cuando lo alquilamos. Muy maja y puntual.'},
  {a:'u11', de:'u4', s:'s17', nota:5, f:'2026-11-06', t:'Tres meses entrenando con Lucía y he vuelto a correr sin dolor de rodilla.'},
  {a:'u5', de:'u12', s:'s26', nota:5, f:'2026-11-03', t:'Acompañó a mi padre al cardiólogo y me llamó al salir con todo apuntado. Un cielo.'},
  {a:'u1', de:'u13', s:'s3', nota:5, f:'2026-11-05', t:'Fotos impecables de mis joyas, con un fondo blanco perfecto. Repetiré seguro.'},
  {a:'u1', de:'u16', s:'s4', nota:5, f:'2026-10-18', t:'Taller precioso y muy bien explicado. Mi taza salió torcida pero es la más bonita.'}
];

/* Conversaciones del usuario activo (u1). tipo: 'txt' | 'oferta' | 'reserva' | 'sistema' */
A.CHATS = [
  {id:'c1', con:'u3', s:'s5', rolYo:'cliente', sinLeer:2, ult:'2026-11-17T09:42', estado:'reservado',
   msgs:[
    {de:'yo',  tipo:'txt', t:'Hola Marta, ¿tienes hueco para paseos de lunes a viernes por la mañana? Es una galga de 4 años, muy tranquila.', h:'2026-11-16T18:10'},
    {de:'ella',tipo:'txt', t:'¡Hola Laura! Sí, tengo grupo a las 9:30 por Sa Riera. ¿Se lleva bien con otros perros?', h:'2026-11-16T18:22'},
    {de:'yo',  tipo:'txt', t:'Sí, es muy sociable. Me interesa el bono de 10.', h:'2026-11-16T18:25'},
    {de:'ella',tipo:'oferta', importe:110, concepto:'Bono de 10 paseos', h:'2026-11-16T18:31'},
    {de:'sistema',tipo:'reserva', t:'Has pagado 110,00 € con Pago protegido. Marta cobrará cuando confirmes que el servicio se ha hecho.', h:'2026-11-16T18:40'},
    {de:'ella',tipo:'txt', t:'¡Genial! Mañana a las 9:30 paso a recogerla. ¿Me dejas la llave en el buzón o bajas tú?', h:'2026-11-17T09:40'},
    {de:'ella',tipo:'txt', t:'Y dime su nombre para el parte 😊', h:'2026-11-17T09:42'}
   ]},
  {id:'c2', con:'u4', s:'s7', rolYo:'cliente', sinLeer:0, ult:'2026-11-15T13:05', estado:'completado',
   msgs:[
    {de:'yo',  tipo:'txt', t:'Buenas, se me ha roto la pantalla de un iPhone 13. ¿Precio y tiempo?', h:'2026-11-14T10:02'},
    {de:'él',  tipo:'txt', t:'Hola. Pantalla original 129 €, en una hora. Si vienes antes de las 13 te lo doy hoy.', h:'2026-11-14T10:09'},
    {de:'él',  tipo:'oferta', importe:129, concepto:'Pantalla iPhone 13 con 6 meses de garantía', h:'2026-11-14T10:10'},
    {de:'sistema',tipo:'reserva', t:'Pago protegido de 129,00 €. Servicio confirmado el 14 nov y pago liberado a Samir.', h:'2026-11-14T13:20'},
    {de:'yo',  tipo:'txt', t:'Perfecto, funciona genial. ¡Gracias!', h:'2026-11-15T13:05'}
   ]},
  {id:'c3', con:'u13', s:'s3', rolYo:'proveedor', sinLeer:1, ult:'2026-11-17T08:15', estado:'negociando',
   msgs:[
    {de:'ella',tipo:'txt', t:'Hola Laura, tengo una marca de joyas y necesitaría 30 fotos con fondo blanco y 10 de ambiente. ¿Me haces precio?', h:'2026-11-16T20:44'},
    {de:'yo',  tipo:'txt', t:'¡Hola Aina! Para 40 fotos te dejo cada una a 10 € en vez de 12. Entrega en 48 h.', h:'2026-11-16T21:02'},
    {de:'ella',tipo:'txt', t:'¡Hecho! ¿Me mandas la oferta por aquí para pagar?', h:'2026-11-17T08:15'}
   ]},
  {id:'c4', con:'u14', s:'s21', rolYo:'cliente', sinLeer:0, ult:'2026-11-13T19:30', estado:'consulta',
   msgs:[
    {de:'yo',  tipo:'txt', t:'Hola Rosa, ¿la limpieza a fondo incluye el horno?', h:'2026-11-13T19:12'},
    {de:'ella',tipo:'txt', t:'Hola, el horno y la nevera por dentro son 15 € más. Si quieres te los incluyo.', h:'2026-11-13T19:30'}
   ]}
];

/* Contrataciones del usuario activo: como cliente y como proveedor */
A.PEDIDOS = [
  {id:'AP-26-48213', s:'s5',  cliente:'u1', prov:'u3',  importe:110, prot:6.49, f:'2026-11-16', estado:'pagado',     nota:'Primer paseo mañana 18 nov a las 9:30'},
  {id:'AP-26-47720', s:'s7',  cliente:'u1', prov:'u4',  importe:129, prot:7.44, f:'2026-11-14', estado:'completado', nota:'Pago liberado el 14 nov'},
  {id:'AP-26-46102', s:'s9',  cliente:'u1', prov:'u6',  importe:290, prot:15.49, f:'2026-09-28', estado:'completado', nota:'Valorado con 5 estrellas'},
  {id:'AP-26-48190', s:'s3',  cliente:'u13', prov:'u1', importe:400, prot:0, f:'2026-11-17', estado:'pendiente',  nota:'Oferta a punto de enviarse por el chat'},
  {id:'AP-26-47511', s:'s4',  cliente:'u16', prov:'u1', importe:76,  prot:0, f:'2026-11-08', estado:'completado', nota:'2 plazas · cobrado'},
  {id:'AP-26-47003', s:'s3',  cliente:'u7',  prov:'u1', importe:180, prot:0, f:'2026-10-30', estado:'en disputa', nota:'La clienta pide repetir 3 fotos: en mediación'}
];

A.MONEDERO = {
  saldo:236.20, retenido:400, movimientos:[
    {f:'2026-11-09', c:'Taller de cerámica · Nerea C.', i:72.20},
    {f:'2026-11-02', c:'Retirada a ES21 ···· 7731', i:-310.00},
    {f:'2026-10-31', c:'Fotografía de producto · Aina C.', i:164.00},
    {f:'2026-10-19', c:'Taller de cerámica · grupo sábado', i:144.40},
    {f:'2026-10-05', c:'Retirada a ES21 ···· 7731', i:-200.00}
  ]};

/* Cola de verificación de identidad (moderación) */
A.VERIFICACIONES = [
  {id:'v1', n:'Pau Rigo', doc:'DNI', num:'43301122B', nac:'2003-10-05', cad:'2031-04-18', f:'2026-11-16T21:14', ciudad:'Palma',
   senales:[{t:'ok', m:'Letra de control del DNI correcta'},{t:'ok', m:'Edad calculada: 23 años'},{t:'ok', m:'Documento en vigor hasta abr. 2031'},{t:'avisa', m:'Selfie con poca luz: coincidencia facial 81 %'}], estado:'pendiente'},
  {id:'v2', n:'Marc Oliver', doc:'DNI', num:'43277810K', nac:'2009-03-02', cad:'2029-09-11', f:'2026-11-17T07:48', ciudad:'Inca',
   senales:[{t:'ok', m:'Letra de control del DNI correcta'},{t:'mal', m:'Edad calculada: 17 años. Rechazo automático por ser menor de edad'},{t:'mal', m:'Fecha de nacimiento declarada (2004) distinta de la del documento (2009)'}], estado:'rechazado-auto'},
  {id:'v3', n:'Sofía Méndez', doc:'NIE', num:'Y4410982X', nac:'1993-06-21', cad:'2026-10-02', f:'2026-11-17T09:03', ciudad:'Palma',
   senales:[{t:'ok', m:'Letra de control del NIE correcta'},{t:'ok', m:'Edad calculada: 33 años'},{t:'mal', m:'Documento caducado el 2 oct. 2026'}], estado:'pendiente'},
  {id:'v4', n:'Jaume Riera', doc:'DNI', num:'43155023P', nac:'1986-02-07', cad:'2030-12-01', f:'2026-11-17T09:51', ciudad:'Manacor',
   senales:[{t:'ok', m:'Letra de control del DNI correcta'},{t:'ok', m:'Edad calculada: 40 años'},{t:'mal', m:'La cara del selfie no coincide con la del documento (coincidencia 34 %)'}], estado:'pendiente'},
  {id:'v5', n:'Clara Font', doc:'DNI', num:'43920641W', nac:'1998-09-14', cad:'2032-01-23', f:'2026-11-17T10:22', ciudad:'Sóller',
   senales:[{t:'ok', m:'Letra de control del DNI correcta'},{t:'ok', m:'Edad calculada: 28 años'},{t:'ok', m:'Documento en vigor'},{t:'ok', m:'Coincidencia facial 97 %'}], estado:'pendiente'}
];

A.REPORTES = [
  {id:'r4', s:'s10', motivo:'Sospecho que es menor de edad', quien:'u9', f:'2026-11-17', estado:'abierto', det:'Vino a hacer el porte un chico que parecía muy joven y no era la persona de la foto del perfil. Puede que alguien esté usando la cuenta de otro.'},
  {id:'r1', s:'s10', motivo:'Pide pagar fuera de la app', quien:'u15', f:'2026-11-16', estado:'abierto', det:'En el chat me pidió Bizum directo para ahorrarse la comisión.'},
  {id:'r2', s:'s16', motivo:'Precio distinto al anunciado', quien:'u9', f:'2026-11-12', estado:'resuelto', det:'Cobró 40 €/h. El anunciante corrigió el anuncio y devolvió la diferencia.'},
  {id:'r3', s:'s23', motivo:'No se presentó', quien:'u1', f:'2026-11-03', estado:'resuelto', det:'Reembolso completo con Pago protegido. Aviso al anunciante.'}
];

A.ACTIVIDAD = [
  {h:'2026-11-17 10:24', quien:'Sistema', acc:'Rechazo automático de Marc Oliver: el documento indica 17 años'},
  {h:'2026-11-17 09:58', quien:'Nuria Palau', acc:'Aprobó la identidad de Nerea Campins (DNI 43177609P)'},
  {h:'2026-11-17 09:12', quien:'Óscar Vidal', acc:'Bloqueó el dispositivo de un intento de alta con fecha de nacimiento de 2010'},
  {h:'2026-11-16 18:40', quien:'Pago protegido', acc:'Retuvo 110,00 € del pedido AP-26-48213 hasta que Laura B. confirme el servicio'},
  {h:'2026-11-16 12:05', quien:'Nuria Palau', acc:'Abrió mediación en el pedido AP-26-47003'}
];

/* Atajos */
A.usuario   = id => A.USUARIOS.find(u => u.id === id);
A.anuncio   = id => A.ANUNCIOS.find(a => a.id === id);
A.categoria = id => A.CATEGORIAS.find(c => c.id === id);
A.anunciosDe= id => A.ANUNCIOS.filter(a => a.u === id);
A.activos   = () => A.ANUNCIOS.filter(a => a.estado === 'activo');
A.resenasDe = id => A.RESENAS.filter(r => r.a === id);
A.edad = (nac, hoy) => { const n = new Date(nac), h = new Date(hoy || A.HOY); let e = h.getFullYear() - n.getFullYear();
  const m = h.getMonth() - n.getMonth(); if (m < 0 || (m === 0 && h.getDate() < n.getDate())) e--; return e; };

/* ---------- Destacados y Pro ---------- */
/* Opciones de destacado que se compran por anuncio */
A.DESTACADOS = [
  {id:'subir',   n:'Subir arriba',      precio:0.99, dias:1,  efecto:'Tu anuncio vuelve a salir el primero en su categoría y en las búsquedas durante 24 h.', multi:'×2 visitas de media', sitios:['busqueda']},
  {id:'semana',  n:'Destacado 7 días',  precio:3.99, dias:7,  efecto:'Sello amarillo «Destacado», primeras posiciones en búsquedas y en su categoría durante 7 días.', multi:'×4 visitas de media', sitios:['busqueda','categoria','sello'], popular:true},
  {id:'quincena',n:'Destacado 15 días', precio:6.99, dias:15, efecto:'Todo lo de 7 días, más aparecer en el carrusel «Destacados» de la portada.', multi:'×6 visitas de media', sitios:['busqueda','categoria','sello','portada']},
  {id:'ciudad',  n:'Escaparate ciudad', precio:14.99, dias:30, efecto:'30 días en lo alto de la portada para todo tu municipio y en las notificaciones de «cerca de ti».', multi:'×9 visitas de media', sitios:['busqueda','categoria','sello','portada','avisos']}
];
/* Destacados activos e historial del usuario u1 (y alguno de u2) */
A.BOOSTS = [
  {id:'b1', s:'s3', u:'u1', tipo:'semana',   desde:'2026-11-14', hasta:'2026-11-21', impresiones:5840, visitas:612, contactos:19, antes:{visitas:148, contactos:5}, estado:'activo'},
  {id:'b2', s:'s4', u:'u1', tipo:'subir',    desde:'2026-11-12', hasta:'2026-11-13', impresiones:1320, visitas:131, contactos:4,  antes:{visitas:62, contactos:2},  estado:'terminado'},
  {id:'b3', s:'s1', u:'u2', tipo:'quincena', desde:'2026-11-10', hasta:'2026-11-25', impresiones:18400, visitas:1520, contactos:63, antes:{visitas:310, contactos:14}, estado:'activo'}
];
/* Serie diaria de visitas del destacado activo de u1 (s3), del 8 al 17 de noviembre; el destacado empieza el 14 */
A.SERIE_S3 = [30,33,34,38,36,40,112,141,170,189];

/* Suscripción para profesionales */
A.PRO = {
  precioMes:14.99, precioAnio:149,
  incluye:['4 destacados de 7 días al mes','Sello «Pro» en tus anuncios y tu perfil','Hasta 50 anuncios activos (particulares: 10)','Estadísticas de cada anuncio: vistas, contactos y conversión',
           'Respuestas guardadas y mensaje automático fuera de horario','Facturas con tu NIF por cada servicio cobrado','Atención prioritaria en menos de 2 horas'],
  limitesParticular:{anuncios:10, destacadosIncluidos:0}
};

/* Centro de notificaciones del usuario u1 */
A.NOTIFICACIONES = [
  {id:'n1', tipo:'mensaje',   t:'Marta G. te ha escrito', d:'«Y dime su nombre para el parte»', f:'2026-11-17T09:42', leida:false, enlace:'chat.html?c=c1'},
  {id:'n2', tipo:'oferta',    t:'Aina C. quiere contratarte', d:'40 fotos de producto: te pide la oferta para pagar', f:'2026-11-17T08:15', leida:false, enlace:'chat.html?c=c3'},
  {id:'n3', tipo:'destacado', t:'Tu destacado va como un tiro', d:'«Fotografía de producto» lleva 612 visitas, ×4 que la semana anterior', f:'2026-11-17T08:00', leida:false, enlace:'destacar.html?id=s3'},
  {id:'n4', tipo:'pago',      t:'Pago retenido: 110,00 €', d:'Bono de 10 paseos con Marta G. Lo liberas cuando confirmes el servicio', f:'2026-11-16T18:40', leida:true, enlace:'servicios.html#compro'},
  {id:'n5', tipo:'resena',    t:'Nueva valoración de 5 estrellas', d:'Aina C.: «Fotos impecables de mis joyas…»', f:'2026-11-05T12:10', leida:true, enlace:'perfil.html?id=u1'},
  {id:'n6', tipo:'seguridad', t:'Nuevo inicio de sesión', d:'iPhone · Palma. Si no has sido tú, cambia tu contraseña', f:'2026-11-15T22:31', leida:false, enlace:'cuenta.html#seguridad'},
  {id:'n7', tipo:'favorito',  t:'Un anuncio que guardaste ha bajado de precio', d:'«Clases de inglés y preparación de Cambridge» ahora a 22 €/h', f:'2026-11-14T10:05', leida:true, enlace:'anuncio.html?id=s14'},
  {id:'n8', tipo:'verificacion', t:'Tu documento caduca en 2028', d:'Te avisaremos 30 días antes para que lo renueves', f:'2026-11-02T09:00', leida:true, enlace:'cuenta.html#verificacion'}
];
