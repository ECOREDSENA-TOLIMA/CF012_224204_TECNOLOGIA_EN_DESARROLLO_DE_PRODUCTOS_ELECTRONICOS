export default {
  global: {
    componenteFormativo:
      'Implementación del protocolo de pruebas de productos electrónicos',
    descripcionCurso:
      'Este componente formativo describe de forma general los aspectos referentes a los protocolos de pruebas de productos electrónicos, que pueden llegar a ser muy diversos dependiendo del tipo de producto electrónico y proceso de producción.',
    imagenBannerPrincipal: require('@/assets/curso/portada/banner-princiapal.svg'),
    fondoBannerPrincipal: require('@/assets/curso/portada/fondo-banner-principal.png'),
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
        titulo: 'Protocolos de pruebas y mediciones',
        desarrolloContenidos: true,
      },

      {
        nombreRuta: 'tema2',
        numero: '2',
        titulo: 'Manufactura de productos electrónicos',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema3',
        numero: '3',
        titulo: 'Gestión de contingencias',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema4',
        numero: '4',
        titulo: 'Productos conformes y no conformes',
        desarrolloContenidos: true,
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
        nombreRuta: 'complementario',
        icono: 'far fa-folder-open',
        titulo: 'Material complementario',
      },
      {
        icono: 'fas fa-book',
        titulo: 'Referencias bibliográficas',
        nombreRuta: 'referencias',
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
  complementario: [
    {
      tema:
        'Resumen de pruebas y métodos de inspección de placas de circuito impreso (PCB)',
      referencia:
        'Proto-electronics. (s.f.). Resumen de pruebas y métodos de inspección de placas de circuito impreso (PCB). ',
      tipo: 'Sitio WEB',
      link:
        'https://www.proto-electronics.com/es/blog/resumen-pruebas-metodos-inspeccion-placas-circuito-impreso-pcb',
    },
    {
      tema: 'Técnica de diagnóstico V-I.',
      referencia:
        'Soriano, S. (2016). La Técnica de diagnóstico V-I. Thesergioscorner. ',
      tipo: 'Sitio WEB',
      link:
        'https://www.thesergioscorner.com/post/2016/03/01/t%C3%A9cnica-de-diagn%C3%B3stico-vi',
    },
    {
      tema: 'Inspección estética de carcasa',
      referencia: 'Cognex. (s.f.). Inspección estética de carcasa.',
      tipo: 'Sitio WEB',
      link:
        'https://www.cognex.com/es-es/industries/electronics/consumer-devices/cosmetic-housing-inspection',
    },
    {
      tema: 'Aceptabilidad de ensambles electrónicos',
      referencia:
        'IPC. (2010). Aceptabilidad de ensambles electrónicos. Consultrónica. ',
      tipo: 'Sitio WEB',
      link:
        'https://www.consultronica.es/tienda-certificaciones-ipc-foa/estandares-ipc-en-espanol/ipc-a-610g-sp-aceptabilidad-de-ensambles-electronicos-11962-97-detail.html#:~:text=IPC%2DA%2D610%20es%2',
    },
  ],
  glosario: [
    {
      termino: 'Energía estática',
      significado:
        'Acumulación de carga o voltaje entre dos puntos la cual busca liberarse a través de cualquier elemento conductor.',
    },
    {
      termino: 'Protocolo',
      significado: 'Procedimiento guiado por una serie de pasos lógicos.',
    },
    {
      termino: 'Prueba',
      significado:
        'Testeo de un equipo electrónico buscando comprobar su funcionalidad.',
    },
    {
      termino: 'Rango',
      significado: 'Valor estándar establecido para una medida determinada.',
    },
  ],
  referencias: [
    {
      referencia:
        'COGNEX (s.f.). Inspección estética de carcasa. [Fotografía].',
      link:
        'https://www.cognex.com/es-es/industries/electronics/consumer-devices/cosmetic-housing-inspection',
    },
    {
      referencia:
        'Microensamble. (2017). Que son pruebas de funcionamiento (ICT) de una tarjeta ensamblada. [Fotografía].',
      link:
        'http://microensamble.com/pruebas-funcionamiento-ict-una-tarjeta-ensamblada/',
    },
    {
      referencia: 'SMET. (s.f.). FADOS7F1 FAULT DETECTOR. [Fotografía]. ',
      link:
        'https://smtnet.com/company/index.cfm?fuseaction=view_company&company_id=53483&component=catalog&catalog_id=16849',
    },
  ],
  creditos: [
    {
      titulo: 'ECOSISTEMA DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Claudia Patricia Aristizabal',
          cargo: 'Responsable del Equipo',
          centro: 'Dirección General',
        },
        {
          nombre: 'Norma Constanza Morales Cruz',
          cargo: 'Responsable de Línea de Producción',
          centro: 'Regional Tolima Centro de Comercio y Servicios',
        },
      ],
    },
    {
      titulo: 'CONTENIDO INSTRUCCIONAL',
      autores: [
        {
          nombre: 'Ángela Rocío Sánchez Ruíz ',
          cargo: 'Experto Técnico ',
          centro:
            'Regional Distrito Capital Centro de Electricidad,  Electrónica y Telecomunicaciones.',
        },
        {
          nombre: 'Miroslava González Hernández ',
          cargo: 'Diseñador y Evaluador Instruccional ',
          centro: 'Regional Distrito Capital Centro de Gestión Industrial',
        },
        {
          nombre: 'Juan Gilberto Giraldo Córtes',
          cargo: 'Diseñador Instruccional',
          centro: 'Regional Tolima Centro de Comercio y Servicios',
        },
        {
          nombre: 'Ana Catalina Córdoba Sus',
          cargo: 'Revisora Metodológica y Pedagógica',
          centro:
            'Regional Distrito Capital Centro para la Industria de la Comunicación Gráfica.',
        },
        {
          nombre: 'Rafael Neftalí Lizcano Reyes ',
          cargo:
            'Responsable Equipo de Desarrollo Curricular Ecosistema de Recursos Educativos Digitales',
          centro:
            'Regional Santander Centro Industrial del Diseño y la Manufactura ',
        },
        {
          nombre: 'Jhon Jairo Rodríguez Pérez ',
          cargo: 'Corrector de Estilo',
          centro: 'Regional Distrito Capital Centro de Diseño y Metrología',
        },
        {
          nombre: 'Viviana Esperanza Herrera Qiñonez',
          cargo: 'Asesora Metodológica',
          centro: 'Regional Tolima Centro de Comercio y Servicios',
        },
      ],
    },
    {
      titulo: 'DISEÑO Y DESARROLLO DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'José Jaime Luis Tang Pinzón',
          cargo: 'Diseñador Web',
          centro: 'Regional Tolima Centro de Comercio y Servicios',
        },
        {
          nombre: 'Sebastian Trujillo Afanador',
          cargo: 'Desarrollador Fullstack',
          centro: 'Regional Tolima Centro de Comercio y Servicios',
        },
        {
          nombre: 'Gilberto Junior Rodríguez Rodríguez',
          cargo: 'Storyboard e Ilustración',
          centro: 'Regional Tolima Centro de Comercio y Servicios',
        },
        {
          nombre: 'Nelson Iván Vera Briceño',
          cargo: 'Producción Audiovisual',
          centro: 'Regional Tolima Centro de Comercio y Servicios',
        },
        {
          nombre: 'Oleg Litvin',
          cargo: 'Animador ',
          centro: 'Regional Tolima Centro de Comercio y Servicios',
        },
        {
          nombre: 'Cristian Mauricio Otálora Clavijo',
          cargo: 'Actividad Didáctica',
          centro: 'Regional Tolima Centro de Comercio y Servicios',
        },
      ],
    },
    {
      titulo: 'VALIDACIÓN RECURSO EDUCATIVO DIGITAL',
      autores: [
        {
          nombre: 'Javier Mauricio Oviedo',
          cargo: 'Validación y vinculación en plataforma LMS',
          centro: 'Regional Tolima Centro de Comercio y Servicios',
        },
        {
          nombre: 'Gilberto Naranjo Farfán',
          cargo: 'Validación de contenidos accesibles',
          centro: 'Regional Tolima Centro de Comercio y Servicios',
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
  // creditosInicio: [
  //   {
  //     titulo: 'En alianza',
  //     contenido: [
  //       require('@/assets/template/logo-sena-naranja.svg'),
  //       require('@/assets/template/mintic.jpg'),
  //       require('@/assets/template/minsalud.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'En compañía',
  //     contenido: [
  //       require('@/assets/template/presidencia.jpg'),
  //       require('@/assets/template/ecopetrol.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'Una iniciativa',
  //     contenido: [require('@/assets/template/santander.jpg')],
  //   },
  // ],
}
