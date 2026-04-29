"use client";

import Image from "next/image";
import Link from "next/link";
import { useLanguage } from "../contexts/LanguageContext";

export default function Footer() {
  const { t } = useLanguage();
  const f = t.footer;
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
              {f.description}
            </p>
          </div>

          {/* Companies */}
          <div className="lg:col-span-3">
            <h4 className="text-[11px] font-semibold tracking-[0.2em] uppercase text-white/20 mb-6">
              {f.companies}
            </h4>
            <ul className="space-y-3">
              {[
                { label: "Moldiplast, S.L.", href: "https://www.moldiplast.com/" },
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

          {/* The Group */}
          <div className="lg:col-span-2">
            <h4 className="text-[11px] font-semibold tracking-[0.2em] uppercase text-white/20 mb-6">
              {f.theGroup}
            </h4>
            <ul className="space-y-3">
              {[
                { label: f.links.whoWeAre, href: "#el-grupo" },
                { label: f.links.figures, href: "#cifras" },
                { label: f.links.companies, href: "#empresas" },
                { label: f.links.contact, href: "#contacto" },
              ].map((l) => (
                <li key={l.href}>
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
              {f.legal}
            </h4>
            <ul className="space-y-3">
              {[
                { label: f.legalLinks.privacy, href: "/privacidad" },
                { label: f.legalLinks.legalNotice, href: "/aviso-legal" },
                { label: f.legalLinks.cookies, href: "/cookies" },
              ].map((l) => (
                <li key={l.href}>
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
            © {year} PlastIndustrial Group, S.L. {f.rights}
          </p>
          <p className="text-[11px] text-white/15 tracking-wide">
            {f.builtBy}{" "}
            <span className="text-white/25 font-medium">Agencia Records</span>
          </p>
        </div>
      </div>
    </footer>
  );
}
