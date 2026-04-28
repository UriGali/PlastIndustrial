import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-brand-900">
      {/* Main footer content */}
      <div className="section-container py-20">
        <div className="grid lg:grid-cols-12 gap-16 items-start">
          {/* Brand */}
          <div className="lg:col-span-5">
            <Image
              src="/plastindustrial-neg.png"
              alt="PlastIndustrial Group"
              width={200}
              height={54}
              className="h-9 w-auto mb-6 opacity-90"
            />
            <p className="text-white/30 text-sm leading-relaxed max-w-xs font-light">
              Holding empresarial de referencia en soluciones plásticas
              industriales para los mercados europeos más exigentes.
            </p>
          </div>

          {/* Empresas */}
          <div className="lg:col-span-3">
            <h4 className="text-[11px] font-semibold tracking-[0.2em] uppercase text-white/20 mb-6">
              Empresas
            </h4>
            <ul className="space-y-3">
              {[
                { label: "Moldiplast, S.L.",  href: "https://www.moldiplast.com/" },
                { label: "Splastic, S.L.U.", href: "https://splastic.es/" },
              ].map((l) => (
                <li key={l.label}>
                  <a
                    href={l.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-white/40 hover:text-white/80 transition-colors duration-200"
                  >
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* El Grupo */}
          <div className="lg:col-span-2">
            <h4 className="text-[11px] font-semibold tracking-[0.2em] uppercase text-white/20 mb-6">
              El Grupo
            </h4>
            <ul className="space-y-3">
              {[
                { label: "Quiénes somos", href: "#el-grupo" },
                { label: "Cifras", href: "#cifras" },
                { label: "Empresas", href: "#empresas" },
                { label: "Contacto", href: "#contacto" },
              ].map((l) => (
                <li key={l.label}>
                  <Link
                    href={l.href}
                    className="text-sm text-white/40 hover:text-white/80 transition-colors duration-200"
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal */}
          <div className="lg:col-span-2">
            <h4 className="text-[11px] font-semibold tracking-[0.2em] uppercase text-white/20 mb-6">
              Legal
            </h4>
            <ul className="space-y-3">
              {[
                { label: "Privacidad", href: "/privacidad" },
                { label: "Aviso legal", href: "/aviso-legal" },
                { label: "Cookies", href: "/cookies" },
              ].map((l) => (
                <li key={l.label}>
                  <Link
                    href={l.href}
                    className="text-sm text-white/40 hover:text-white/80 transition-colors duration-200"
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/[0.06]">
        <div className="section-container py-6 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-[11px] text-white/20 tracking-wide">
            © {year} PlastIndustrial Group, S.L. Todos los derechos reservados.
          </p>
          <p className="text-[11px] text-white/15 tracking-wide">
            Desarrollado por{" "}
            <span className="text-white/25 font-medium">Agencia Records</span>
          </p>
        </div>
      </div>
    </footer>
  );
}
