export default function GroupText() {
  return (
    <section className="py-24 lg:py-32 bg-gray-50 border-t border-gray-100">
      <div className="section-container">
        <div className="max-w-3xl">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-8 h-px bg-brand-700" />
            <span className="text-[11px] font-semibold tracking-[0.2em] uppercase text-brand-700">
              Historia y modelo de negocio
            </span>
          </div>
          <h2 className="text-3xl lg:text-4xl font-bold text-brand-900 leading-tight mb-10">
            Cinco décadas construyendo el sector del plástico industrial en España
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 text-gray-500 leading-relaxed">
          <div className="space-y-5">
            <p>
              La historia de PlastIndustrial Group es la historia de la industria del plástico
              técnico en España. Sus raíces se remontan a{" "}
              <strong className="text-gray-700">1969</strong>, cuando{" "}
              <strong className="text-gray-700">Moldiplast</strong> inició su actividad en
              Barcelona con el objetivo de ofrecer a la industria local componentes plásticos
              fabricados con la más alta precisión. En un momento en que España daba sus primeros
              pasos hacia la industrialización moderna, Moldiplast apostó por la tecnología de
              inyección como palanca de competitividad para el tejido industrial catalán.
            </p>
            <p>
              Durante las décadas siguientes, Moldiplast consolidó su posición como referente en
              la fabricación de moldes a medida y la inyección de piezas técnicas para los sectores
              de automoción, electrónica y equipamiento sanitario. La empresa desarrolló
              internamente capacidades de diseño y utillaje, convirtiéndose en un proveedor de
              soluciones integradas de principio a fin: desde el diseño del molde hasta la entrega
              del componente terminado.
            </p>
            <p>
              <strong className="text-gray-700">Splastic</strong> nació en los años setenta con un
              modelo complementario: la producción de piezas plásticas de gran formato para
              industrias con necesidades de alto volumen productivo. Con equipos de inyección de
              hasta 1.400 toneladas, Splastic atendió desde sus inicios a sectores como la
              automoción pesada, la cosmética industrial y el gran consumo, donde la capacidad de
              producir series largas con coste eficiente es determinante.
            </p>
          </div>

          <div className="space-y-5">
            <p>
              La integración de ambas empresas bajo{" "}
              <strong className="text-gray-700">PlastIndustrial Group</strong> respondió a una
              convicción estratégica clara: la suma de Moldiplast y Splastic generaba una propuesta
              de valor superior a la de cada empresa por separado. Juntas, las dos filiales cubren
              la totalidad del espectro de la inyección de plásticos industriales, sin dejar ningún
              proyecto fuera de su alcance productivo o técnico.
            </p>
            <p>
              PlastIndustrial Group funciona hoy como un{" "}
              <strong className="text-gray-700">holding de gestión activa</strong>. Cada empresa
              filial mantiene su autonomía comercial y operativa, con equipos directivos
              especializados y estructuras de venta propias. Sin embargo, comparten recursos
              estratégicos: plataforma de I+D, capacidad de compra consolidada, sistemas de gestión
              de calidad y valores corporativos comunes. Este modelo garantiza agilidad y
              especialización a nivel operativo, con la solidez y los recursos de un grupo
              empresarial consolidado.
            </p>
            <p>
              El compromiso de PlastIndustrial Group con la{" "}
              <strong className="text-gray-700">producción industrial europea</strong> es firme.
              Fabricar en España, con los estándares de calidad, sostenibilidad y responsabilidad
              social que caracterizan a la industria catalana, es nuestra propuesta de valor
              diferencial frente a la competencia asiática. Creemos en la proximidad como ventaja
              competitiva y en el servicio técnico cercano como fundamento de relaciones comerciales
              duraderas.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
