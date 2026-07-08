export default function HomeText() {
  return (
    <section className="py-24 lg:py-32 bg-white border-t border-gray-100">
      <div className="section-container">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-20">
          <div className="lg:col-span-4">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-8 h-px bg-brand-700" />
              <span className="text-[11px] font-semibold tracking-[0.2em] uppercase text-brand-700">
                Grupo Industrial
              </span>
            </div>
            <h2 className="text-3xl lg:text-4xl font-bold text-brand-900 leading-tight">
              Ingeniería del plástico industrial en Europa
            </h2>
          </div>

          <div className="lg:col-span-8 space-y-6 text-gray-500 leading-relaxed">
            <p>
              PlastIndustrial Group es un grupo empresarial especializado en la ingeniería y
              distribución de soluciones plásticas industriales, con sede en Sant Quirze del Vallès,
              en el área metropolitana de Barcelona. A través de sus tres filiales —{" "}
              <strong className="text-gray-700">Moldiplast</strong>,{" "}
              <strong className="text-gray-700">Splastic</strong> y{" "}
              <strong className="text-gray-700">A. Madrona</strong> — el grupo ofrece una propuesta
              de valor única: capacidad total para abordar cualquier proyecto de inyección de
              plásticos técnicos, desde el componente de microtolerancias hasta la pieza estructural
              de gran formato, y ahora también disponemos de una línea de fabricación de material
              hospitalario en atmósfera controlada, homologación ISO 6.
            </p>
            <p>
              Con un parque de maquinaria que abarca desde 60 hasta 1.400 toneladas de capacidad
              de inyección, PlastIndustrial Group atiende a los sectores industriales más exigentes
              de la economía europea:{" "}
              <strong className="text-gray-700">
                automoción, electrónica, dispositivos médicos, electrodomésticos, cosmética y gran
                consumo
              </strong>
              . Esta diversificación sectorial garantiza la solidez del grupo ante los ciclos
              económicos y refuerza la especialización técnica de cada empresa filial.
            </p>
            <p>
              PlastIndustrial Group opera bajo estrictos estándares internacionales de calidad. Los
              procesos de fabricación de moldes e inyección de plástico están certificados conforme
              a las normativas ISO del sector, garantizando la trazabilidad, la precisión
              dimensional y la fiabilidad funcional de cada componente producido. Más del 98% de los
              clientes industriales del grupo renuevan y amplían su relación año tras año, un
              indicador que refleja el nivel de confianza y satisfacción que generamos.
            </p>
            <p>
              La ubicación estratégica en Sant Quirze del Vallès, en el corazón del tejido
              industrial de Cataluña, confiere al grupo una posición logística privilegiada.
              La proximidad a los principales corredores industriales de la Península Ibérica y a
              los puertos de Barcelona y Tarragona facilita una distribución eficiente de
              componentes plásticos a clientes de toda Europa.
            </p>
            <p>
              Si su empresa necesita un proveedor fiable de{" "}
              <strong className="text-gray-700">
                inyección de plásticos técnicos, fabricación de moldes a medida o distribución de
                soluciones plásticas industriales
              </strong>{" "}
              en España o Europa, PlastIndustrial Group reúne la experiencia, la capacidad
              productiva y el compromiso necesarios para convertirse en su socio industrial de
              referencia.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
