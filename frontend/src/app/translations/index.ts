export type Lang = "es" | "en" | "ca";

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
        { n: "3", u: "empresas del grupo" },
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
      headline1: "Tres empresas.",
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
        {
          tagline: "Calidad y experiencia en inyección de plásticos",
          description:
            "Más de 50 años especializados en la inyección de termoplásticos, elastómeros y PVC, con tecnología de última generación y una línea de producción en atmósfera controlada certificada ISO 6 para productos sanitarios.",
          sectors: ["Material Hospitalario", "Sala Blanca ISO 6", "Plásticos Técnicos", "Microtolerancias"],
        },
      ],
    },
    stats: {
      eyebrow: "Cifras del Grupo",
      metrics: [
        { value: "+50", unit: "años", label: "de actividad ininterrumpida en el sector industrial europeo" },
        { value: "500+", unit: "clientes", label: "empresas industriales confían en nuestras soluciones cada año" },
        { value: "6M€", unit: "facturación", label: "de cifra de negocio consolidada a nivel de grupo" },
        { value: "98%", unit: "retención", label: "de clientes repiten y amplían su relación con el grupo" },
      ],
    },
    team: {
      eyebrow: "Equipo",
      headline1: "Cuatro perfiles.",
      headline2: "Un propósito.",
      description:
        "Esta estructura de liderazgo nos permite combinar visión estratégica, conocimiento técnico y capacidad industrial, garantizando un servicio sólido, ágil y orientado al cliente.",
      members: [
        { desc: "Lidera el grupo, coordinando la estrategia global y el desarrollo corporativo." },
        { desc: "Al frente de Moldiplast, impulsando la especialización en piezas técnicas y de alta precisión." },
        { desc: "Dirige Splastic, centrado en la producción de piezas de gran formato y alta capacidad productiva." },
        { desc: "Dirige las operaciones de A. Madrona, controlando todos los procesos y asegurando el cumplimiento de las certificaciones para materiales hospitalarios." },
      ],
    },
    contact: {
      eyebrow: "Contacto",
      headline: "Contacta con PlastIndustrial Group",
      description:
        "Para consultas comerciales, colaboraciones o cualquier información sobre el grupo y sus empresas.",
      channels: [
        { label: "Email", cta: "Escribir" },
        { label: "Teléfono", cta: "Llamar" },
      ],
      officeLabel: "Sede Central",
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
    homeText: {
      eyebrow: "Grupo Industrial",
      title: "Ingeniería del plástico industrial en Europa",
      p1: "PlastIndustrial Group es un grupo empresarial especializado en la ingeniería y distribución de soluciones plásticas industriales, con sede en Sant Quirze del Vallès, en el área metropolitana de Barcelona. A través de sus tres filiales — <strong class=\"text-gray-700\">Moldiplast</strong>, <strong class=\"text-gray-700\">Splastic</strong> y <strong class=\"text-gray-700\">A. Madrona</strong> — el grupo ofrece una propuesta de valor única: capacidad total para abordar cualquier proyecto de inyección de plásticos técnicos, desde el componente de microtolerancias hasta la pieza estructural de gran formato, y ahora también disponemos de una línea de fabricación de material hospitalario en atmósfera controlada, homologación ISO 6.",
      p2: "Con un parque de maquinaria que abarca desde 60 hasta 1.400 toneladas de capacidad de inyección, PlastIndustrial Group atiende a los sectores industriales más exigentes de la economía europea: <strong class=\"text-gray-700\">automoción, electrónica, dispositivos médicos, electrodomésticos, cosmética y gran consumo</strong>. Esta diversificación sectorial garantiza la solidez del grupo ante los ciclos económicos y refuerza la especialización técnica de cada empresa filial.",
      p3: "PlastIndustrial Group opera bajo estrictos estándares internacionales de calidad. Los procesos de fabricación de moldes e inyección de plástico están certificados conforme a las normativas ISO del sector, garantizando la trazabilidad, la precisión dimensional y la fiabilidad funcional de cada componente producido. Más del 98% de los clientes industriales del grupo renuevan y amplían su relación año tras año, un indicador que refleja el nivel de confianza y satisfacción que generamos.",
      p4: "La ubicación estratégica en Sant Quirze del Vallès, en el corazón del tejido industrial de Cataluña, confiere al grupo una posición logística privilegiada. La proximidad a los principales corredores industriales de la Península Ibérica y a los puertos de Barcelona y Tarragona facilita una distribución eficiente de componentes plásticos a clientes de toda Europa.",
      p5: "Si su empresa necesita un proveedor fiable de <strong class=\"text-gray-700\">inyección de plásticos técnicos, fabricación de moldes a medida o distribución de soluciones plásticas industriales</strong> en España o Europa, PlastIndustrial Group reúne la experiencia, la capacidad productiva y el compromiso necesarios para convertirse en su socio industrial de referencia.",
    },
    groupText: {
      eyebrow: "Historia y modelo de negocio",
      title: "Cinco décadas construyendo el sector del plástico industrial en España",
      p1: "La historia de PlastIndustrial Group es la historia de la industria del plástico técnico en España. Sus raíces se remontan a <strong class=\"text-gray-700\">1969</strong>, cuando <strong class=\"text-gray-700\">Moldiplast</strong> inició su actividad en Barcelona con el objetivo de ofrecer a la industria local componentes plásticos fabricados con la más alta precisión. En un momento en que España daba sus primeros pasos hacia la industrialización moderna, Moldiplast apostó por la tecnología de inyección como palanca de competitividad para el tejido industrial catalán.",
      p2: "Durante las décadas siguientes, Moldiplast consolidó su posición como referente en la fabricación de moldes a medida y la inyección de piezas técnicas para los sectores de automoción, electrónica y equipamiento sanitario. La empresa desarrolló internamente capacidades de diseño y utillaje, convirtiéndose en un proveedor de soluciones integradas de principio a fin: desde el diseño del molde hasta la entrega del componente terminado.",
      p3: "<strong class=\"text-gray-700\">Splastic</strong> nació en los años setenta con un modelo complementario: la producción de piezas plásticas de gran formato para industrias con necesidades de alto volumen productivo. Con equipos de inyección de hasta 1.400 toneladas, Splastic atendió desde sus inicios a sectores como la automoción pesada, la cosmética industrial y el gran consumo, donde la capacidad de producir series largas con coste eficiente es determinante.",
      p4: "En <strong class=\"text-gray-700\">2017</strong>, se incorporó al grupo <strong class=\"text-gray-700\">A. Madrona</strong>, aportando una avanzada línea de fabricación de material hospitalario en atmósfera controlada con homologación ISO 6, y completando la capacidad tecnológica del holding desde los componentes de microtolerancias hasta las piezas estructurales de gran formato.",
      p5: "La integración de las empresas bajo <strong class=\"text-gray-700\">PlastIndustrial Group</strong> respondió a una convicción estratégica clara: la suma de <strong class=\"text-gray-700\">Moldiplast</strong>, <strong class=\"text-gray-700\">Splastic</strong> y <strong class=\"text-gray-700\">A. Madrona</strong> genera una propuesta de valor superior a la de cada empresa por separado. Juntas, las filiales cubren la totalidad del espectro de la inyección de plásticos industriales, sin dejar ningún proyecto fuera de su alcance productivo o técnico.",
      p6: "PlastIndustrial Group funciona hoy como un <strong class=\"text-gray-700\">holding de gestión activa</strong>. Cada empresa filial mantiene su autonomía comercial y operativa, con equipos directivos especializados y estructuras de venta propias. Sin embargo, comparten recursos estratégicos: plataforma de I+D, capacidad de compra consolidada, sistemas de gestión de calidad y valores corporativos comunes. Este modelo garantiza agilidad y especialización a nivel operativo, con la solidez y los recursos de un grupo empresarial consolidado.",
      p7: "El compromiso de PlastIndustrial Group con la <strong class=\"text-gray-700\">producción industrial europea</strong> es firme. Fabricar en España, con los estándares de calidad, sostenibilidad y responsabilidad social que caracterizan a la industria catalana, es nuestra propuesta de valor diferencial frente a la competencia asiática. Creemos en la proximidad como ventaja competitiva y en el servicio técnico cercano como fundamento de relaciones comerciales duraderas.",
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
        { n: "3", u: "group companies" },
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
      headline1: "Three companies.",
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
        {
          tagline: "Quality and experience in plastic injection moulding",
          description:
            "More than 50 years specialized in the injection of thermoplastics, elastomers and PVC, with state-of-the-art technology and a certified ISO 6 controlled-atmosphere production line for medical products.",
          sectors: ["Hospital Materials", "ISO 6 Cleanroom", "Technical Plastics", "Micro-tolerances"],
        },
      ],
    },
    stats: {
      eyebrow: "Group Figures",
      metrics: [
        { value: "+50", unit: "years", label: "of uninterrupted activity in the European industrial sector" },
        { value: "500+", unit: "clients", label: "industrial companies trust our solutions each year" },
        { value: "6M€", unit: "revenue", label: "consolidated group turnover" },
        { value: "98%", unit: "retention", label: "of clients repeat and expand their relationship with the group" },
      ],
    },
    team: {
      eyebrow: "Team",
      headline1: "Four profiles.",
      headline2: "One purpose.",
      description:
        "This leadership structure allows us to combine strategic vision, technical knowledge and industrial capacity, ensuring a solid, agile and client-oriented service.",
      members: [
        { desc: "Leads the group, coordinating global strategy and corporate development." },
        { desc: "At the helm of Moldiplast, driving specialization in technical and high-precision parts." },
        { desc: "Directs Splastic, focused on large-format part production and high production capacity." },
        { desc: "Directs operations at A. Madrona, controlling all processes and ensuring compliance with certifications for hospital materials." },
      ],
    },
    contact: {
      eyebrow: "Contact",
      headline: "Contact PlastIndustrial Group",
      description:
        "For commercial enquiries, collaborations or any information about the group and its companies.",
      channels: [
        { label: "Email", cta: "Write" },
        { label: "Phone", cta: "Call" },
      ],
      officeLabel: "Headquarters",
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
    homeText: {
      eyebrow: "Industrial Group",
      title: "Industrial plastic engineering in Europe",
      p1: "PlastIndustrial Group is a business group specialized in the engineering and distribution of industrial plastic solutions, headquartered in Sant Quirze del Vallès, in the metropolitan area of Barcelona. Through its three subsidiaries — <strong class=\"text-gray-700\">Moldiplast</strong>, <strong class=\"text-gray-700\">Splastic</strong> and <strong class=\"text-gray-700\">A. Madrona</strong> — the group offers a unique value proposition: full capacity to tackle any technical plastic injection project, from micro-tolerance components to large-format structural parts, and we now also have a manufacturing line for medical supplies in a controlled atmosphere, ISO 6 certified.",
      p2: "With a machinery fleet ranging from 60 to 1,400 tonnes of injection capacity, PlastIndustrial Group serves the most demanding industrial sectors of the European economy: <strong class=\"text-gray-700\">automotive, electronics, medical devices, household appliances, cosmetics and mass consumer goods</strong>. This sectorial diversification guarantees the group's strength against economic cycles and reinforces the technical specialization of each subsidiary.",
      p3: "PlastIndustrial Group operates under strict international quality standards. The mold manufacturing and plastic injection processes are certified in accordance with industry ISO standards, guaranteeing traceability, dimensional accuracy and functional reliability of each component produced. More than 98% of the group's industrial clients renew and expand their relationship year after year, an indicator that reflects the level of trust and satisfaction we generate.",
      p4: "The strategic location in Sant Quirze del Vallès, in the heart of Catalonia's industrial fabric, gives the group a privileged logistical position. Proximity to the main industrial corridors of the Iberian Peninsula and to the ports of Barcelona and Tarragona facilitates efficient distribution of plastic components to clients throughout Europe.",
      p5: "If your company needs a reliable partner for <strong class=\"text-gray-700\">technical plastic injection, custom mold manufacturing or distribution of industrial plastic solutions</strong> in Spain or Europe, PlastIndustrial Group combines the experience, production capacity and commitment required to become your reference industrial partner.",
    },
    groupText: {
      eyebrow: "History and business model",
      title: "Five decades building the industrial plastic sector in Spain",
      p1: "The history of PlastIndustrial Group is the history of the technical plastic industry in Spain. Its roots date back to <strong class=\"text-gray-700\">1969</strong>, when <strong class=\"text-gray-700\">Moldiplast</strong> started its activity in Barcelona with the goal of offering local industry plastic components manufactured with the highest precision. At a time when Spain was taking its first steps towards modern industrialization, Moldiplast committed to injection technology as a driver of competitiveness for the Catalan industrial fabric.",
      p2: "During the following decades, Moldiplast consolidated its position as a benchmark in custom mold manufacturing and injection of technical parts for the automotive, electronics and healthcare equipment sectors. The company developed design and tooling capabilities internally, becoming a provider of end-to-end integrated solutions: from mold design to delivery of the finished component.",
      p3: "<strong class=\"text-gray-700\">Splastic</strong> was born in the seventies with a complementary model: the production of large-format plastic parts for industries with high production volume needs. With injection equipment of up to 1,400 tonnes, Splastic served sectors such as heavy automotive, industrial cosmetics and mass consumer goods from its inception, where the ability to produce long series cost-effectively is crucial.",
      p4: "In <strong class=\"text-gray-700\">2017</strong>, <strong class=\"text-gray-700\">A. Madrona</strong> joined the group, bringing an advanced medical device manufacturing line in a controlled atmosphere with ISO 6 approval, and completing the holding's technological capacity from micro-tolerance components to large-format structural parts.",
      p5: "The integration of companies under <strong class=\"text-gray-700\">PlastIndustrial Group</strong> responded to a clear strategic conviction: the sum of <strong class=\"text-gray-700\">Moldiplast</strong>, <strong class=\"text-gray-700\">Splastic</strong> and <strong class=\"text-gray-700\">A. Madrona</strong> generates a value proposition superior to that of each company individually. Together, the subsidiaries cover the entire spectrum of industrial plastic injection, leaving no project beyond their productive or technical reach.",
      p6: "PlastIndustrial Group operates today as an <strong class=\"text-gray-700\">actively managed holding company</strong>. Each subsidiary maintains its commercial and operational autonomy, with specialized management teams and their own sales structures. However, they share strategic resources: R&D platform, consolidated purchasing power, quality management systems and common corporate values. This model guarantees agility and specialization at the operational level, with the strength and resources of a consolidated business group.",
      p7: "PlastIndustrial Group's commitment to <strong class=\"text-gray-700\">European industrial production</strong> is strong. Manufacturing in Spain, with the standards of quality, sustainability and social responsibility that characterize the Catalan industry, is our differential value proposition against Asian competition. We believe in proximity as a competitive advantage and in close technical service as the foundation of long-lasting business relationships.",
    },
  },

  ca: {
    nav: {
      group: "El Grup",
      figures: "Xifres",
      companies: "Empreses",
      contact: "Contacte",
      menu: "Menú",
    },
    hero: {
      eyebrow: "Plastic injection moulding",
      line1: "Enginyeria",
      line2: "del material",
      line3: "a escala.",
      description:
        "Holding industrial especialitzat en la injecció i distribució de solucions plàstiques tècniques per als sectors més exigents de l'economia europea.",
      ctaPrimary: "Veure empreses del grup",
      ctaSecondary: "Qui som",
      stats: [
        { n: "+50", u: "anys d'activitat" },
        { n: "+500", u: "clients industrials" },
        { n: "3", u: "empreses del grup" },
      ],
    },
    about: {
      eyebrow: "Sobre el Grup",
      headline1: "Dècades construint",
      headline2: "la indústria del demà",
      p1: "PlastIndustrial Group és un holding empresarial especialitzat en el disseny, fabricació i distribució de solucions plàstiques industrials d'alta precisió.",
      p2: "Amb presència en múltiples sectors — automoció, construcció, packaging i béns de consum — les nostres empreses filials operen amb autonomia estratègica sota els valors comuns del grup: qualitat, innovació i rigor tècnic.",
      values: [
        {
          title: "Qualitat Certificada",
          desc: "Processos auditats sota estàndards internacionals ISO per garantir l'excel·lència en cada producte.",
        },
        {
          title: "Innovació Contínua",
          desc: "Recerca i desenvolupament constant per oferir solucions tècniques avançades al mercat industrial.",
        },
        {
          title: "Compromís Client",
          desc: "Relacions duradores basades en la confiança, el servei tècnic personalitzat i la resposta àgil.",
        },
        {
          title: "Sostenibilitat",
          desc: "Materials i processos responsables amb el medi ambient per construir un futur industrial sostenible.",
        },
      ],
    },
    groupInfo: {
      eyebrow: "Propòsit del Grup",
      missionLabel: "Missió",
      missionText:
        "Unir experiència i capacitat industrial per oferir solucions d'injecció de plàstics eficients, properes i d'alta qualitat.",
      visionLabel: "Visió",
      visionText:
        "Ser l'aliat clau que impulsa la producció local i fa innecessària la importació en el sector del plàstic.",
    },
    companies: {
      eyebrow: "Les Nostres Empreses",
      headline1: "Tres empreses.",
      headline2: "Un estàndard.",
      description:
        "Cada filial opera de forma independent amb la seva pròpia estructura comercial i operativa, però comparteix la plataforma de R+D, compres estratègiques i els valors d'excel·lència del grup.",
      visitWeb: "Visitar web",
      items: [
        {
          tagline: "Injecció de plàstic i fabricació de motlles",
          description:
            "Especialitzada en la fabricació de peces tècniques, disposant d'un parc de maquinària amb capacitats d'injecció entre 60 i 320 tones, adequat per a components que requereixen alta precisió i complexitat tècnica.",
          sectors: ["Automoció", "Electrònica", "Dispositius Mèdics", "Electrodomèstics"],
        },
        {
          tagline: "Injecció d'alta capacitat i motlles a mida",
          description:
            "Centrada en la producció de peces de gran format, amb equips que abasten des de 450 fins a 1.400 tones, la qual cosa permet abordar projectes de major volum i exigència estructural.",
          sectors: ["Automoció", "Cosmètica", "Gran Consum"],
        },
        {
          tagline: "Qualitat i experiència en injecció de plàstics",
          description:
            "Més de 50 anys especialitzats en la injecció de termoplàstics, elastòmers i PVC, amb tecnologia d'última generació i una línia de producció en atmosfera controlada certificada ISO 6 per a productes sanitaris.",
          sectors: ["Material Hospitalari", "Sala Blanca ISO 6", "Plàstics Tècnics", "Microtoleràncies"],
        },
      ],
    },
    stats: {
      eyebrow: "Xifres del Grup",
      metrics: [
        { value: "+50", unit: "anys", label: "d'activitat ininterrompuda en el sector industrial europeu" },
        { value: "500+", unit: "clients", label: "empreses industrials confien en les nostres solucions cada any" },
        { value: "6M€", unit: "facturació", label: "de xifra de negoci consolidada a nivell de grup" },
        { value: "98%", unit: "retenció", label: "de clients repeteixen i amplien la seva relació amb el grup" },
      ],
    },
    team: {
      eyebrow: "Equip",
      headline1: "Quatre perfils.",
      headline2: "Un propòsit.",
      description:
        "Aquesta estructura de lideratge ens permet combinar visió estratègica, coneixement tècnic i capacitat industrial, garantint un servei sòlid, àgil i orientat al client.",
      members: [
        { desc: "Lidera el grup, coordinant l'estratègia global i el desenvolupament corporatiu." },
        { desc: "Al capdavant de Moldiplast, impulsant l'especialització en peces tècniques i d'alta precisió." },
        { desc: "Dirigeix Splastic, centrat en la producció de peces de gran format i alta capacitat productiva." },
        { desc: "Dirigeix les operacions d'A. Madrona, controlant tots els processos i assegurant el compliment de les certificacions per a materials hospitalaris." },
      ],
    },
    contact: {
      eyebrow: "Contacte",
      headline: "Contacta amb PlastIndustrial Group",
      description:
        "Per a consultes comercials, col·laboracions o qualsevol informació sobre el grup i les seves empreses.",
      channels: [
        { label: "Email", cta: "Escriure" },
        { label: "Telèfon", cta: "Trucar" },
      ],
      officeLabel: "Seu Central",
    },
    footer: {
      description:
        "Holding empresarial de referència en solucions plàstiques industrials per als mercats europeus més exigents.",
      companies: "Empreses",
      theGroup: "El Grup",
      links: {
        whoWeAre: "Qui som",
        figures: "Xifres",
        companies: "Empreses",
        contact: "Contacte",
      },
      legal: "Legal",
      legalLinks: {
        privacy: "Privacitat",
        legalNotice: "Avís legal",
        cookies: "Cookies",
      },
      rights: "Tots els drets reservats.",
      builtBy: "Desenvolupat per",
    },
    homeText: {
      eyebrow: "Grup Industrial",
      title: "Enginyeria del plàstic industrial a Europa",
      p1: "PlastIndustrial Group és un grup empresarial especialitzat en l'enginyeria i distribució de solucions plàstiques industrials, amb seu a Sant Quirze del Vallès, a l'àrea metropolitana de Barcelona. A través de les seves tres filials — <strong class=\"text-gray-700\">Moldiplast</strong>, <strong class=\"text-gray-700\">Splastic</strong> i <strong class=\"text-gray-700\">A. Madrona</strong> — el grup ofereix una proposta de valor única: capacitat total per abordar qualsevol projecte d'injecció de plàstics tècnics, des del component de microtoleràncies fins a la peça estructural de gran format, i ara també disposem d'una línia de fabricació de material hospitalari en atmosfera controlada, homologació ISO 6.",
      p2: "Amb un parc de maquinària que abasta des de 60 fins a 1.400 tones de capacitat d'injecció, PlastIndustrial Group atén els sectors industrials més exigents de l'economia europea: <strong class=\"text-gray-700\">automoció, electrònica, dispositius mèdics, electrodomèstics, cosmètica i gran consum</strong>. Aquesta diversificació sectorial garanteix la solidesa del grup davant els cicles econòmics i reforça l'especialització tècnica de cada empresa filial.",
      p3: "PlastIndustrial Group opera sota estrictes estàndards internacionals de qualitat. Els processos de fabricació de motlles i injecció de plàstic estan certificats de conformitat amb les normatives ISO del sector, garantint la traçabilitat, la precisió dimensional i la fiabilitat funcional de cada component produït. Més del 98% dels clients industrials del grup renoven i amplien la seva relació any rere any, un indicador que reflecteix el nivell de confiança i satisfacció que generem.",
      p4: "La ubicació estratègica a Sant Quirze del Vallès, al cor del teixit industrial de Catalunya, confereix al grup una posició logística privilegiada. La proximitat als principals corredors industrials de la Península Ibèrica i als ports de Barcelona i Tarragona facilita una distribució eficient de components plàstics a clients de tota Europa.",
      p5: "Si la seva empresa necessita un proveïdor fiable d' <strong class=\"text-gray-700\">injecció de plàstics tècnics, fabricació de motlles a mida o distribució de solucions plàstiques industrials</strong> a Espanya o Europa, PlastIndustrial Group reuneix l'experiència, la capacitat productiva i el compromís necessaris per esdevenir el seu soci industrial de referència.",
    },
    groupText: {
      eyebrow: "Història i model de negoci",
      title: "Cinc dècades construint el sector del plàstic industrial a Espanya",
      p1: "La història de PlastIndustrial Group és la història de la indústria del plàstic tècnic a Espanya. Les seves arrels es remunten a <strong class=\"text-gray-700\">1969</strong>, quan <strong class=\"text-gray-700\">Moldiplast</strong> va iniciar la seva activitat a Barcelona con l'objectiu d'oferir a la indústria local components plàstics fabricats amb la més alta precisió. En un moment en què Espanya feia els seus primers passos cap a la industrialització moderna, Moldiplast va apostar per la tecnologia d'injecció com a palanca de competitivitat per al teixit industrial català.",
      p2: "Durant les dècades següents, Moldiplast va consolidar la seva posició com a referent en la fabricació de motlles a mida i la injecció de peces tècniques per als sectors d'automoció, electrònica i equipament sanitari. L'empresa va desenvolupar internament capacitats de disseny i utillatge, esdevenint un proveïdor de solucions integrades de principi a fi: des del disseny del motlle fins al lliurament del component acabat.",
      p3: "<strong class=\"text-gray-700\">Splastic</strong> va néixer als anys setenta amb un model complementari: la producció de peces plàstiques de gran format per a indústries amb necessitats d'alt volum productiu. Amb equips d'injecció de fins a 1.400 tones, Splastic va atendre des dels seus inicis sectors com l'automoció pesant, la cosmètica industrial i el gran consum, on la capacitat de produir sèries llargues amb un cost eficient és determinant.",
      p4: "El <strong class=\"text-gray-700\">2017</strong>, es va incorporar al grup <strong class=\"text-gray-700\">A. Madrona</strong>, aportant una línia avançada de fabricació de material hospitalario en atmosfera controlada amb homologació ISO 6, i completant la capacitat tecnològica del holding des dels components de microtoleràncies fins a les peces estructurals de gran format.",
      p5: "La integració de les empreses sota <strong class=\"text-gray-700\">PlastIndustrial Group</strong> va respondre a una convicció estratègica clara: la suma de <strong class=\"text-gray-700\">Moldiplast</strong>, <strong class=\"text-gray-700\">Splastic</strong> i <strong class=\"text-gray-700\">A. Madrona</strong> genera una proposta de valor superior a la de cada empresa per separat. Juntes, les filials cobreixen la totalitat de l'espectre de la injecció de plàstics industrials, sense deixar cap projecte fora del seu abast productiu o tècnic.",
      p6: "PlastIndustrial Group funciona avui com un <strong class=\"text-gray-700\">holding de gestió activa</strong>. Cada empresa filial manté la seva autonomia comercial i operativa, amb equips directivos especialitzats i estructures de venda pròpies. No obstant això, comparteixen recursos estratègics: plataforma de R+D, capacitat de compra consolidada, sistemes de gestió de qualitat i valors corporatius comuns. Aquest model garanteix agilitat i especialització a nivell operatiu, amb la solidesa i els recursos d'un grup empresarial consolidat.",
      p7: "El compromís de PlastIndustrial Group amb la <strong class=\"text-gray-700\">producció industrial europea</strong> es ferm. Fabricar a Espanya, amb els estàndards de qualitat, sostenibilitat i responsabilitat social que caracteritzen la indústria catalana, és la nostra proposta de valor diferencial davant la competència asiàtica. Creiem en la proximitat com a avantatge competitiu i en el servei tècnic proper com a fonament de relacions comercials duradores.",
    },
  },
} as const;
