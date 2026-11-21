export default {
  global: {
    Name: 'Operación, evaluación y mejoramiento de la maquinaria agrícola',
    Description:
      'El componente formativo aborda la operación, evaluación y mejoramiento de la maquinaria agrícola, considerando la seguridad, la salud en el trabajo y la protección ambiental, los sistemas GNSS y el piloto automático, los registros e indicadores de eficiencia, el análisis y la corrección de fallas, la elaboración de informes y la implementación de acciones de mejora.',
    imagenBannerPrincipal: '@/assets/curso/portada/banner-principal.png',
    fondoBannerPrincipal: '@/assets/curso/portada/fondo-banner-principal.png',
    imagenesDecorativasBanner: [
      {
        clases: ['banner-principal-decorativo-1', 'd-none', 'd-lg-block'],
        imagen: '@/assets/curso/portada/banner-principal-decorativo-1.svg',
      },
      {
        clases: ['banner-principal-decorativo-2', 'd-none', 'd-lg-block'],
        imagen: '@/assets/curso/portada/banner-principal-decorativo-2.svg',
      },
    ],
  },
  menuPrincipal: {
    menu: [
      {
        nombreRuta: 'inicio',
        icono: 'fas fa-home',
        titulo: 'Volver al inicio',
      },
      {
        nombreRuta: 'introduccion',
        icono: 'fas fa-info-circle',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        numero: '1',
        titulo:
          'Seguridad, salud en el trabajo y normativa ambiental en la operación',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '1.1',
            titulo: 'Normativa, riesgos y medidas preventivas en la operación',
            hash: 't_1_1',
          },
          {
            numero: '1.2',
            titulo: 'Elementos de protección personal: selección y uso',
            hash: 't_1_2',
          },
          {
            numero: '1.3',
            titulo: 'Equipos de emergencia y actuación inicial',
            hash: 't_1_3',
          },
          {
            numero: '1.4',
            titulo: 'Seguridad química, compatibilidad y gestión ambiental',
            hash: 't_1_4',
          },
          {
            numero: '1.5',
            titulo: 'Operación y traslado de maquinaria por vías públicas',
            hash: 't_1_5',
          },
        ],
      },
      {
        nombreRuta: 'tema2',
        numero: '2',
        titulo: 'Sistemas de navegación global por satélite y coordenadas',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '2.1',
            titulo: 'GNSS: conceptos, constelaciones y segmentos',
            hash: 't_2_1',
          },
          {
            numero: '2.2',
            titulo: 'Vulnerabilidades y sistemas de corrección',
            hash: 't_2_2',
          },
          {
            numero: '2.3',
            titulo: 'RTK y aplicaciones del GNSS en la operación',
            hash: 't_2_3',
          },
          {
            numero: '2.4',
            titulo: 'Coordenadas geográficas y planas y sistema sexagesimal',
            hash: 't_2_4',
          },
          {
            numero: '2.5',
            titulo: '<em>Datum</em>, elipsoide, geoide y alturas',
            hash: 't_2_5',
          },
        ],
      },
      {
        nombreRuta: 'tema3',
        numero: '3',
        titulo: 'Configuración del sistema de piloto automático',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '3.1',
            titulo: 'Piloto automático: concepto y tipos',
            hash: 't_3_1',
          },
          {
            numero: '3.2',
            titulo: 'Técnicas y procedimientos de configuración',
            hash: 't_3_2',
          },
          {
            numero: '3.3',
            titulo: 'Líneas guía, criterios y técnicas de operación',
            hash: 't_3_3',
          },
          {
            numero: '3.4',
            titulo: '<em>Firmware</em> y <em>software</em> del sistema de guiado',
            hash: 't_3_4',
          },
        ],
      },
      {
        nombreRuta: 'tema4',
        numero: '4',
        titulo: 'Registros, eficiencia de operación y fallas',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '4.1',
            titulo: 'Registros: concepto, tipos e importancia',
            hash: 't_4_1',
          },
          {
            numero: '4.2',
            titulo:
              'Formatos, diligenciamiento y archivos digitales de la operación',
            hash: 't_4_2',
          },
          {
            numero: '4.3',
            titulo:
              'Eficiencia de operación: concepto, procedimientos y criterios',
            hash: 't_4_3',
          },
          {
            numero: '4.4',
            titulo: 'Otros indicadores de la operación',
            hash: 't_4_4',
          },
          {
            numero: '4.5',
            titulo: 'Fallas: concepto, tipos y origen',
            hash: 't_4_5',
          },
          {
            numero: '4.6',
            titulo: 'Manejo, reporte y prevención de fallas',
            hash: 't_4_6',
          },
          {
            numero: '4.7',
            titulo: 'Relación entre eficiencia de operación y costos',
            hash: 't_4_7',
          },
        ],
      },
      {
        nombreRuta: 'tema5',
        numero: '5',
        titulo: 'Corrección de fallas, informe y mejoramiento continuo',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '5.1',
            titulo: 'Corrección de fallas: concepto, tipos e importancia',
            hash: 't_5_1',
          },
          {
            numero: '5.2',
            titulo: 'Características, tratamientos y ajustes',
            hash: 't_5_2',
          },
          {
            numero: '5.3',
            titulo:
              'Medidas correctivas: tipos, criterios de acción e implementación',
            hash: 't_5_3',
          },
          {
            numero: '5.4',
            titulo:
              'Informe de operación: concepto, tipos, estructura y elaboración',
            hash: 't_5_4',
          },
          {
            numero: '5.5',
            titulo:
              'Acciones de mejora: concepto, alcance, responsabilidad e importancia',
            hash: 't_5_5',
          },
          {
            numero: '5.6',
            titulo:
              'Mejoramiento continuo: análisis comparativo y validación de medidas',
            hash: 't_5_6',
          },
        ],
      },
    ],
    subMenu: [
      {
        icono: 'fas fa-sitemap',
        titulo: 'Síntesis',
        nombreRuta: 'sintesis',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'actividad',
        icono: 'far fa-question-circle',
        titulo: 'Actividad didáctica',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'glosario',
        icono: 'fas fa-sort-alpha-down',
        titulo: 'Glosario',
      },
      {
        icono: 'fas fa-book',
        titulo: 'Referencias bibliográficas',
        nombreRuta: 'referencias',
      },
      {
        icono: 'fas fa-file-pdf',
        titulo: 'Descargar PDF',
        download: 'downloads/dist.pdf',
      },
      {
        icono: 'fas fa-download',
        titulo: 'Descargar material',
        download: 'downloads/material.zip',
      },
      {
        icono: 'far fa-registered',
        titulo: 'Créditos',
        nombreRuta: 'creditos',
      },
    ],
  },
  glosario: [
    {
      termino: 'Acción correctiva',
      significado:
        'Intervención dirigida a eliminar la causa de una falla o de un resultado no conforme para evitar su repetición. Requiere comprobar su eficacia.',
    },
    {
      termino: 'Aumentación',
      significado:
        'Conjunto de técnicas y sistemas que aportan información adicional a las señales GNSS para mejorar determinadas prestaciones del posicionamiento, como su exactitud o integridad.',
    },
    {
      termino: 'Calibración del guiado',
      significado:
        'Procedimiento que ajusta los sensores y la respuesta de dirección del sistema al comportamiento del vehículo, siguiendo las instrucciones del fabricante.',
    },
    {
      termino: 'Capacidad de campo',
      significado:
        'Superficie que una máquina puede atender por unidad de tiempo. Puede ser teórica o efectiva y suele expresarse en hectáreas por hora.',
    },
    {
      termino: 'Corrección de fallas',
      significado:
        'Acción realizada para restablecer el funcionamiento del equipo o recuperar la calidad de una labor después de detectar un problema.',
    },
    {
      termino: 'Eficiencia de campo',
      significado:
        'Relación porcentual entre la capacidad efectiva y la capacidad teórica de campo. Refleja el efecto de giros, traslapes, paradas y otras pérdidas operativas.',
    },
    {
      termino: 'Elementos de protección personal',
      significado:
        'Equipos y prendas seleccionados según los peligros y la exposición del trabajador. Complementan las medidas de control aplicadas a la máquina y a la tarea.',
    },
    {
      termino: 'Firmware',
      significado:
        'Tipo de software integrado en un componente electrónico que controla sus funciones internas, como las de un receptor GNSS o un controlador de dirección.',
    },
    {
      termino: 'GNSS',
      significado:
        'Sigla de los sistemas globales de navegación por satélite, que permiten a un receptor calcular posición, velocidad y tiempo mediante señales satelitales.',
    },
    {
      termino: 'Informe de operación',
      significado:
        'Documento que organiza e interpreta los resultados de las labores, sus indicadores, fallas y correcciones, y presenta conclusiones y acciones propuestas.',
    },
    {
      termino: 'Línea guía',
      significado:
        'Trayectoria de referencia utilizada para orientar las pasadas de la maquinaria. Puede ser recta, curva o circular, según el sistema y la labor.',
    },
    {
      termino: 'Matriz de compatibilidad química',
      significado:
        'Cuadro que relaciona sustancias para orientar su almacenamiento conjunto o separado, según sus peligros e incompatibilidades y la información de las fichas de datos de seguridad.',
    },
    {
      termino: 'PHVA',
      significado:
        'Ciclo de mejoramiento continuo compuesto por las etapas de planear, hacer, verificar y actuar. Permite implementar cambios, evaluar resultados y ajustar los procedimientos.',
    },
    {
      termino: 'RTK',
      significado:
        'Técnica de posicionamiento cinemático en tiempo real que utiliza mediciones de fase y datos de una base o red de referencia. Puede alcanzar exactitud centimétrica bajo condiciones adecuadas.',
    },
    {
      termino: 'Traslape',
      significado:
        'Superposición entre pasadas que ocasiona que una parte de la superficie reciba la labor más de una vez, con posibles efectos sobre el consumo y la calidad.',
    },
  ],
  referencias: [
    {
      referencia: 'GPS.gov. (s. f.). GPS, Control segment y GPS accuracy.',
      link: '',
    },
    {
      referencia:
        'Instituto Geográfico Agustín Codazzi [IGAC]. (s. f.). Origen Nacional y Aplicaciones, herramientas y modelos.',
      link: '',
    },
    {
      referencia:
        'Instituto Nacional de Seguridad y Salud en el Trabajo [INSST]. (s. f.). Tratamientos plaguicidas en jardinería utilizando mochilas manuales: exposición a fitosanitarios.',
      link: '',
    },
    {
      referencia:
        'Ministerio de Ambiente y Desarrollo Sostenible. (2013). Resolución 1675 de 2013.',
      link: '',
    },
    {
      referencia:
        'Ministerio de Ambiente y Desarrollo Sostenible. (2015). Decreto 1076 de 2015.',
      link: '',
    },
    {
      referencia:
        'Ministerio de Transporte. (2024). Resolución 20243040056195 de 2024.',
      link: '',
    },
    {
      referencia:
        'Ministerio del Trabajo. (2015). Decreto 1072 de 2015, por medio del cual se expide el Decreto Único Reglamentario del Sector Trabajo. Función Pública.',
      link: '',
    },
    {
      referencia: 'PTx Trimble. (s. f.). Autopilot Steering System.',
      link: '',
    },
    {
      referencia:
        'NovAtel. (s. f.). Real-Time Kinematics y TerraStar correction services.',
      link: '',
    },
    {
      referencia:
        'WorkSafe Victoria. (s. f.). Managing the risks of bogged farm machinery.',
      link: '',
    },
  ],
  creditos: [
    {
      titulo: 'ECOSISTEMA DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Claudia Johanna Gómez Pérez ',
          cargo:
            'Profesional G06. Responsable Ecosistema Virtual de Recursos Educativos Digitales',
          centro: 'Centro Agroturístico - Regional Santander',
        },
        {
          nombre: 'Diana Rocío Possos Beltrán',
          cargo: 'Responsable de línea de producción ',
          centro: 'Centro de Comercio y Servicios - Regional Tolima',
        },
      ],
    },
    {
      titulo: 'CONTENIDO INSTRUCCIONAL',
      autores: [
        {
          nombre: 'Cindy Carolina Gámez Ávila',
          cargo: 'Instructora técnica',
          centro: 'Centro Agropecuario La Granja - Regional Tolima',
        },
        {
          nombre: 'Andrés Felipe Velandia Espitia',
          cargo: 'Evaluador instruccional',
          centro: 'Centro de Comercio y Servicios - Regional Tolima',
        },
      ],
    },
    {
      titulo: 'DISEÑO Y DESARROLLO DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Juan Daniel Polanco Muñoz',
          cargo: 'Diseñador de contenidos digitales',
          centro: 'Centro de Comercio y Servicios - Regional Tolima',
        },
        {
          nombre: 'Veimar Celis Meléndez',
          cargo: 'Desarrollador <em>full stack</em>',
          centro: 'Centro de Comercio y Servicios - Regional Tolima',
        },
        {
          nombre: 'Ernesto Navarro Jaimes',
          cargo: 'Animador y productor audiovisual',
          centro: 'Centro de Comercio y Servicios - Regional Tolima',
        },
      ],
    },
    {
      titulo: 'VALIDACIÓN RECURSO EDUCATIVO DIGITAL',
      autores: [
        {
          nombre: 'Jorge Eduardo Rueda Peña ',
          cargo: 'Evaluador de contenidos inclusivos y accesibles',
          centro: 'Centro de Comercio y Servicios - Regional Tolima',
        },
        {
          nombre: 'Javier Mauricio Oviedo',
          cargo: 'Validador y vinculador de recursos educativos digitales',
          centro: 'Centro de Comercio y Servicios - Regional Tolima',
        },
      ],
    },
  ],
  creditosAdicionales: {
    imagenes:
      'Fotografías y vectores tomados de <a href="https://www.freepik.es/" target="_blank">www.freepik.es</a>, <a href="https://www.shutterstock.com/" target="_blank">www.shutterstock.com</a>, <a href="https://unsplash.com/" target="_blank">unsplash.com </a>y <a href="https://www.flaticon.com/" target="_blank">www.flaticon.com</a>',
    creativeCommons:
      'Licencia creative commons CC BY-NC-SA<br><a href="https://creativecommons.org/licenses/by-nc-sa/2.0/" target="_blank">ver licencia</a>',
  },
}
