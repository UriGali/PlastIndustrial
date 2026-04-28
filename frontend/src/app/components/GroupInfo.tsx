export default function GroupInfo() {
  return (
    <section id="mision-vision" className="py-24 lg:py-32 bg-white">
      <div className="section-container">
        <div className="flex items-center gap-3 mb-16">
          <div className="w-8 h-px bg-brand-700" />
          <span className="text-[11px] font-semibold tracking-[0.2em] uppercase text-brand-700">
            Propósito del Grupo
          </span>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Misión */}
          <div className="border border-gray-100 p-10 hover:border-brand-700/30 hover:shadow-lg transition-all duration-300">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-8 h-8 bg-brand-700 flex items-center justify-center flex-shrink-0">
                <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-[11px] font-semibold tracking-[0.2em] uppercase text-brand-700">
                Misión
              </h3>
            </div>
            <p className="text-xl lg:text-2xl font-light text-brand-900 leading-relaxed">
              Unir experiencia y capacidad industrial para ofrecer soluciones
              de inyección de plásticos eficientes, cercanas y de alta calidad.
            </p>
          </div>

          {/* Visión */}
          <div className="border border-gray-100 p-10 hover:border-brand-700/30 hover:shadow-lg transition-all duration-300">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-8 h-8 bg-brand-900 flex items-center justify-center flex-shrink-0">
                <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                </svg>
              </div>
              <h3 className="text-[11px] font-semibold tracking-[0.2em] uppercase text-brand-700">
                Visión
              </h3>
            </div>
            <p className="text-xl lg:text-2xl font-light text-brand-900 leading-relaxed">
              Ser el aliado clave que impulsa la producción local y hace
              innecesaria la importación en el sector del plástico.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
