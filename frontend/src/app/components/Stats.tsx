const METRICS = [
  {
    value: "+25",
    unit: "años",
    label: "de actividad ininterrumpida en el sector industrial europeo",
  },
  {
    value: "500+",
    unit: "clientes",
    label: "empresas industriales confían en nuestras soluciones cada año",
  },
  {
    value: "12M€",
    unit: "facturación",
    label: "de cifra de negocio consolidada a nivel de grupo",
  },
  {
    value: "98%",
    unit: "retención",
    label: "de clientes repiten y amplían su relación con el grupo",
  },
];

export default function Stats() {
  return (
    <section id="cifras" className="bg-brand-900 py-28 lg:py-36 overflow-hidden relative">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
        <div
          className="absolute inset-0 opacity-[0.02]"
          style={{
            backgroundImage:
              "repeating-linear-gradient(45deg, white 0, white 1px, transparent 0, transparent 50%)",
            backgroundSize: "40px 40px",
          }}
        />
      </div>

      <div className="section-container relative z-10">
        <div className="flex items-center gap-3 mb-20">
          <div className="w-8 h-px bg-white/30" />
          <span className="text-[11px] font-semibold tracking-[0.2em] uppercase text-white/30">
            Cifras del Grupo
          </span>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-0 divide-y sm:divide-y-0 sm:divide-x divide-white/10">
          {METRICS.map((m) => (
            <div key={m.value} className="px-0 sm:px-10 first:pl-0 last:pr-0 py-10 sm:py-0">
              <div className="flex items-baseline gap-2 mb-3">
                <span className="text-[3.5rem] lg:text-[4.5rem] font-bold text-white leading-none tracking-tight">
                  {m.value}
                </span>
                <span className="text-base font-medium text-brand-400">{m.unit}</span>
              </div>
              <p className="text-sm text-white/35 leading-relaxed max-w-[200px]">{m.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
