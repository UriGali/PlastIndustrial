const TEAM = [
  {
    name: "Oriol Galí",
    company: "Plastindustrial Group",
    desc: "Lidera el grupo, coordinando la estrategia global y el desarrollo corporativo.",
  },
  {
    name: "Leo Torrecilla",
    company: "Moldiplast",
    desc: "Al frente de Moldiplast, impulsando la especialización en piezas técnicas y de alta precisión.",
  },
  {
    name: "Francisco Baquero",
    company: "Splastic",
    desc: "Dirige Splastic, centrado en la producción de piezas de gran formato y alta capacidad productiva.",
  },
];

export default function Team() {
  return (
    <section id="equipo" className="py-24 lg:py-32 bg-white">
      <div className="section-container">
        <div className="grid lg:grid-cols-12 gap-8 mb-16">
          <div className="lg:col-span-5">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-8 h-px bg-brand-700" />
              <span className="text-[11px] font-semibold tracking-[0.2em] uppercase text-brand-700">
                Equipo
              </span>
            </div>
            <h2 className="text-4xl lg:text-5xl font-bold text-brand-900 leading-[0.95] tracking-tight">
              Tres perfiles.
              <br />
              Un propósito.
            </h2>
          </div>
          <div className="lg:col-span-7 lg:pt-14">
            <p className="text-lg text-gray-400 font-light leading-relaxed">
              Esta estructura de liderazgo nos permite combinar visión estratégica,
              conocimiento técnico y capacidad industrial, garantizando un servicio
              sólido, ágil y orientado al cliente.
            </p>
          </div>
        </div>

        <div className="grid sm:grid-cols-3 gap-0 divide-y sm:divide-y-0 sm:divide-x divide-gray-100">
          {TEAM.map((member, i) => (
            <div key={member.name} className="px-0 sm:px-10 first:pl-0 last:pr-0 py-10 sm:py-0">
              <span className="text-[11px] font-bold tracking-[0.15em] text-gray-200">
                {String(i + 1).padStart(2, "0")}
              </span>
              <h3 className="mt-4 text-2xl font-bold text-brand-900">{member.name}</h3>
              <p className="mt-0.5 text-[11px] tracking-widest uppercase text-gray-300">
                {member.company}
              </p>
              <p className="mt-5 text-sm text-gray-500 leading-relaxed">{member.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
