const COMPANIES = [
  {
    index: "01",
    name: "Moldiplast, S.L.",
    tagline: "Inyección de plástico y fabricación de moldes",
    description:
      "Especializada en la fabricación de piezas técnicas, disponiendo de un parque de maquinaria con capacidades de inyección entre 60 y 320 toneladas, adecuado para componentes que requieren alta precisión y complejidad técnica.",
    sectors: ["Automoción", "Electrónica", "Dispositivos Médicos", "Electrodomésticos"],
    since: "Est. 1969",
    href: "https://www.moldiplast.com/",
  },
  {
    index: "02",
    name: "Splastic, S.L.U.",
    tagline: "Inyección de alta capacidad y moldes a medida",
    description:
      "Centrada en la producción de piezas de gran formato, con equipos que abarcan desde 450 hasta 1.400 toneladas, lo que permite abordar proyectos de mayor volumen y exigencia estructural.",
    sectors: ["Automoción", "Cosmética", "Gran Consumo"],
    since: "Est. 1970s",
    href: "https://splastic.es/",
  },
];

export default function Companies() {
  return (
    <section id="empresas" className="py-24 lg:py-32 bg-white">
      <div className="section-container">
        {/* Header */}
        <div className="grid lg:grid-cols-12 gap-8 mb-20">
          <div className="lg:col-span-5">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-8 h-px bg-brand-700" />
              <span className="text-[11px] font-semibold tracking-[0.2em] uppercase text-brand-700">
                Nuestras Empresas
              </span>
            </div>
            <h2 className="text-4xl lg:text-5xl font-bold text-brand-900 leading-[0.95] tracking-tight">
              Dos empresas.
              <br />
              Un estándar.
            </h2>
          </div>
          <div className="lg:col-span-7 lg:pt-14">
            <p className="text-lg text-gray-400 font-light leading-relaxed">
              Cada filial opera de forma independiente con su propia estructura
              comercial y operativa, pero comparte la plataforma de I+D,
              compras estratégicas y los valores de excelencia del grupo.
            </p>
          </div>
        </div>

        {/* Company entries */}
        <div className="flex flex-col gap-0 divide-y divide-gray-200">
          {COMPANIES.map((c) => (
            <div
              key={c.name}
              className="group grid lg:grid-cols-12 gap-0 py-12 hover:bg-gray-50 transition-colors duration-300 -mx-6 px-6 lg:-mx-8 lg:px-8"
            >
              {/* Index + name */}
              <div className="lg:col-span-4 flex flex-col justify-between mb-8 lg:mb-0">
                <div>
                  <span className="text-[11px] font-bold tracking-[0.15em] text-gray-300">
                    {c.index}
                  </span>
                  <h3 className="mt-3 text-2xl lg:text-3xl font-bold text-brand-900 leading-tight">
                    {c.name}
                  </h3>
                  <p className="mt-2 text-sm font-medium text-brand-700">{c.tagline}</p>
                </div>
                <span className="mt-6 text-[11px] tracking-widest text-gray-300 uppercase">
                  {c.since}
                </span>
              </div>

              {/* Description + tags */}
              <div className="lg:col-span-5 lg:px-12 flex flex-col justify-center mb-8 lg:mb-0">
                <p className="text-base text-gray-500 leading-relaxed">{c.description}</p>
                <div className="mt-6 flex flex-wrap gap-2">
                  {c.sectors.map((s) => (
                    <span
                      key={s}
                      className="px-3 py-1 text-[11px] font-semibold tracking-[0.08em] uppercase bg-white border border-gray-200 text-gray-500 group-hover:border-brand-700/20 group-hover:text-brand-700 transition-colors duration-300"
                    >
                      {s}
                    </span>
                  ))}
                </div>
              </div>

              {/* CTA */}
              <div className="lg:col-span-3 flex items-center justify-start lg:justify-end">
                <a
                  href={c.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group/btn inline-flex items-center gap-3 px-8 py-4 border border-brand-700 text-brand-700 text-[13px] font-semibold tracking-[0.06em] uppercase hover:bg-brand-700 hover:text-white transition-all duration-300"
                >
                  Visitar web
                  <svg
                    className="w-4 h-4 transition-transform duration-300 group-hover/btn:translate-x-1"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
