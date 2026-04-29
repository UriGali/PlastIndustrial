export type Lang = "es" | "en";

export const translations = {
  es: {
    nav: {
      group: "El Grupo",
      figures: "Cifras",
      companies: "Empresas",
      contact: "Contacto",
      menu: "Menú",
    },
    hero: {
      eyebrow: "Plastic injection moulding",
      line1: "Ingeniería",
      line2: "del material",
      line3: "a escala.",
      description:
        "Holding industrial especializado en la inyección y distribución de soluciones plásticas técnicas para los sectores más exigentes de la economía europea.",
      ctaPrimary: "Ver empresas del grupo",
      ctaSecondary: "Quiénes somos",
      stats: [
        { n: "+50", u: "años de actividad" },
        { n: "+500", u: "clientes industriales" },
        { n: "2", u: "empresas del grupo" },
      ],
    },
    about: {
      eyebrow: "Sobre el Grupo",
      headline1: "Décadas construyendo",
      headline2: "la industria del mañana",
      p1: "PlastIndustrial Group es un holding empresarial especializado en el diseño, fabricación y distribución de soluciones plásticas industriales de alta precisión.",
      p2: "Con presencia en múltiples sectores — automoción, construcción, packaging y bienes de consumo — nuestras empresas filiales operan con autonomía estratégica bajo los valores comunes del grupo: calidad, innovación y rigor técnico.",
      values: [
        {
          title: "Calidad Certificada",
          desc: "Procesos auditados bajo estándares internacionales ISO para garantizar la excelencia en cada producto.",
        },
        {
          title: "Innovación Continua",
          desc: "Investigación y desarrollo constante para ofrecer soluciones técnicas avanzadas al mercado industrial.",
        },
        {
          title: "Compromiso Cliente",
          desc: "Relaciones duraderas basadas en la confianza, el servicio técnico personalizado y la respuesta ágil.",
        },
        {
          title: "Sostenibilidad",
          desc: "Materiales y procesos responsables con el medio ambiente para construir un futuro industrial sostenible.",
        },
      ],
    },
    groupInfo: {
      eyebrow: "Propósito del Grupo",
      missionLabel: "Misión",
      missionText:
        "Unir experiencia y capacidad industrial para ofrecer soluciones de inyección de plásticos eficientes, cercanas y de alta calidad.",
      visionLabel: "Visión",
      visionText:
        "Ser el aliado clave que impulsa la producción local y hace innecesaria la importación en el sector del plástico.",
    },
    companies: {
      eyebrow: "Nuestras Empresas",
      headline1: "Dos empresas.",
      headline2: "Un estándar.",
      description:
        "Cada filial opera de forma independiente con su propia estructura comercial y operativa, pero comparte la plataforma de I+D, compras estratégicas y los valores de excelencia del grupo.",
      visitWeb: "Visitar web",
      items: [
        {
          tagline: "Inyección de plástico y fabricación de moldes",
          description:
            "Especializada en la fabricación de piezas técnicas, disponiendo de un parque de maquinaria con capacidades de inyección entre 60 y 320 toneladas, adecuado para componentes que requieren alta precisión y complejidad técnica.",
          sectors: ["Automoción", "Electrónica", "Dispositivos Médicos", "Electrodomésticos"],
        },
        {
          tagline: "Inyección de alta capacidad y moldes a medida",
          description:
            "Centrada en la producción de piezas de gran formato, con equipos que abarcan desde 450 hasta 1.400 toneladas, lo que permite abordar proyectos de mayor volumen y exigencia estructural.",
          sectors: ["Automoción", "Cosmética", "Gran Consumo"],
        },
      ],
    },
    stats: {
      eyebrow: "Cifras del Grupo",
      metrics: [
        { value: "+50", unit: "años", label: "de actividad ininterrumpida en el sector industrial europeo" },
        { value: "500+", unit: "clientes", label: "empresas industriales confían en nuestras soluciones cada año" },
        { value: "12M€", unit: "facturación", label: "de cifra de negocio consolidada a nivel de grupo" },
        { value: "98%", unit: "retención", label: "de clientes repiten y amplían su relación con el grupo" },
      ],
    },
    team: {
      eyebrow: "Equipo",
      headline1: "Tres perfiles.",
      headline2: "Un propósito.",
      description:
        "Esta estructura de liderazgo nos permite combinar visión estratégica, conocimiento técnico y capacidad industrial, garantizando un servicio sólido, ágil y orientado al cliente.",
      members: [
        { desc: "Lidera el grupo, coordinando la estrategia global y el desarrollo corporativo." },
        { desc: "Al frente de Moldiplast, impulsando la especialización en piezas técnicas y de alta precisión." },
        { desc: "Dirige Splastic, centrado en la producción de piezas de gran formato y alta capacidad productiva." },
      ],
    },
    contact: {
      eyebrow: "Contacto",
      headline: "¿Hablamos?",
      description:
        "Para consultas comerciales, colaboraciones o cualquier información sobre el grupo y sus empresas.",
      channels: [
        { label: "Email", cta: "Escribir" },
        { label: "Teléfono", cta: "Llamar" },
      ],
    },
    footer: {
      description:
        "Holding empresarial de referencia en soluciones plásticas industriales para los mercados europeos más exigentes.",
      companies: "Empresas",
      theGroup: "El Grupo",
      links: {
        whoWeAre: "Quiénes somos",
        figures: "Cifras",
        companies: "Empresas",
        contact: "Contacto",
      },
      legal: "Legal",
      legalLinks: {
        privacy: "Privacidad",
        legalNotice: "Aviso legal",
        cookies: "Cookies",
      },
      rights: "Todos los derechos reservados.",
      builtBy: "Desarrollado por",
    },
  },

  en: {
    nav: {
      group: "The Group",
      figures: "Figures",
      companies: "Companies",
      contact: "Contact",
      menu: "Menu",
    },
    hero: {
      eyebrow: "Plastic injection moulding",
      line1: "Engineering",
      line2: "material",
      line3: "at scale.",
      description:
        "Industrial holding specialized in the manufacturing and distribution of technical plastic solutions for the most demanding sectors of the European economy.",
      ctaPrimary: "View group companies",
      ctaSecondary: "Who we are",
      stats: [
        { n: "+50", u: "years of activity" },
        { n: "+500", u: "industrial clients" },
        { n: "2", u: "group companies" },
      ],
    },
    about: {
      eyebrow: "About the Group",
      headline1: "Decades building",
      headline2: "tomorrow's industry",
      p1: "PlastIndustrial Group is a business holding specialized in the design, manufacturing and distribution of high-precision industrial plastic solutions.",
      p2: "With presence across multiple sectors — automotive, construction, packaging and consumer goods — our subsidiary companies operate with strategic autonomy under the group's common values: quality, innovation and technical rigor.",
      values: [
        {
          title: "Certified Quality",
          desc: "Processes audited under international ISO standards to guarantee excellence in every product.",
        },
        {
          title: "Continuous Innovation",
          desc: "Constant research and development to offer advanced technical solutions to the industrial market.",
        },
        {
          title: "Client Commitment",
          desc: "Lasting relationships based on trust, personalized technical service and agile response.",
        },
        {
          title: "Sustainability",
          desc: "Responsible materials and processes to build a sustainable industrial future.",
        },
      ],
    },
    groupInfo: {
      eyebrow: "Group Purpose",
      missionLabel: "Mission",
      missionText:
        "Combining experience and industrial capacity to offer efficient, close and high-quality plastic injection solutions.",
      visionLabel: "Vision",
      visionText:
        "To be the key ally that drives local production and makes importation unnecessary in the plastics sector.",
    },
    companies: {
      eyebrow: "Our Companies",
      headline1: "Two companies.",
      headline2: "One standard.",
      description:
        "Each subsidiary operates independently with its own commercial and operational structure, but shares the group's R&D platform, strategic purchasing and excellence values.",
      visitWeb: "Visit website",
      items: [
        {
          tagline: "Plastic injection and mould manufacturing",
          description:
            "Specialized in the manufacturing of technical parts, with a machinery fleet with injection capacities between 60 and 320 tonnes, suitable for components requiring high precision and technical complexity.",
          sectors: ["Automotive", "Electronics", "Medical Devices", "Appliances"],
        },
        {
          tagline: "High-capacity injection and custom moulds",
          description:
            "Focused on large-format part production, with equipment ranging from 450 to 1,400 tonnes, enabling larger volume and structural demand projects.",
          sectors: ["Automotive", "Cosmetics", "Mass Consumer"],
        },
      ],
    },
    stats: {
      eyebrow: "Group Figures",
      metrics: [
        { value: "+50", unit: "years", label: "of uninterrupted activity in the European industrial sector" },
        { value: "500+", unit: "clients", label: "industrial companies trust our solutions each year" },
        { value: "12M€", unit: "revenue", label: "consolidated group turnover" },
        { value: "98%", unit: "retention", label: "of clients repeat and expand their relationship with the group" },
      ],
    },
    team: {
      eyebrow: "Team",
      headline1: "Three profiles.",
      headline2: "One purpose.",
      description:
        "This leadership structure allows us to combine strategic vision, technical knowledge and industrial capacity, ensuring a solid, agile and client-oriented service.",
      members: [
        { desc: "Leads the group, coordinating global strategy and corporate development." },
        { desc: "At the helm of Moldiplast, driving specialization in technical and high-precision parts." },
        { desc: "Directs Splastic, focused on large-format part production and high production capacity." },
      ],
    },
    contact: {
      eyebrow: "Contact",
      headline: "Shall we talk?",
      description:
        "For commercial enquiries, collaborations or any information about the group and its companies.",
      channels: [
        { label: "Email", cta: "Write" },
        { label: "Phone", cta: "Call" },
      ],
    },
    footer: {
      description:
        "Reference business holding in industrial plastic solutions for the most demanding European markets.",
      companies: "Companies",
      theGroup: "The Group",
      links: {
        whoWeAre: "Who we are",
        figures: "Figures",
        companies: "Companies",
        contact: "Contact",
      },
      legal: "Legal",
      legalLinks: {
        privacy: "Privacy",
        legalNotice: "Legal notice",
        cookies: "Cookies",
      },
      rights: "All rights reserved.",
      builtBy: "Developed by",
    },
  },
} as const;
