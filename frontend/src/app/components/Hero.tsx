"use client";

import Link from "next/link";
import { useLanguage } from "../contexts/LanguageContext";

export default function Hero() {
  const { t } = useLanguage();
  const h = t.hero;

  return (
    <section className="relative min-h-screen flex items-end bg-brand-900 overflow-hidden">
      {/* Background gradient layers */}
      <div className="absolute inset-0 bg-gradient-to-br from-brand-900 via-brand-800 to-[#0a1628]" />

      {/* Geometric grid */}
      <svg
        className="absolute inset-0 w-full h-full opacity-[0.04]"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <pattern id="g" width="80" height="80" patternUnits="userSpaceOnUse">
            <path d="M 80 0 L 0 0 0 80" fill="none" stroke="white" strokeWidth="0.5" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#g)" />
      </svg>

      {/* Large decorative diamond */}
      <div className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-1/4 opacity-[0.06]">
        <div className="w-[700px] h-[700px] border border-white rotate-45" />
      </div>
      <div className="absolute right-24 top-1/2 -translate-y-1/2 translate-x-1/4 opacity-[0.04]">
        <div className="w-[500px] h-[500px] border border-white rotate-45" />
      </div>

      {/* Vertical line accents */}
      <div className="absolute left-[10%] top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-white/10 to-transparent hidden lg:block" />
      <div className="absolute right-[10%] top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-white/10 to-transparent hidden lg:block" />

      {/* Content — anchored to bottom */}
      <div className="section-container relative z-10 pb-24 pt-44 w-full">
        <div className="grid lg:grid-cols-12 gap-0 items-end">
          {/* Left: headline */}
          <div className="lg:col-span-7">
            <div className="flex items-center gap-3 mb-10">
              <div className="w-8 h-px bg-white/30" />
              <span className="text-[15px] font-semibold tracking-[0.2em] uppercase text-white/40">
                {h.eyebrow}
              </span>
            </div>

            <h1 className="font-bold text-white leading-[0.95] tracking-tight">
              <span className="block text-[clamp(3rem,8vw,7rem)]">{h.line1}</span>{" "}
              <span className="block text-[clamp(3rem,8vw,7rem)] text-white/20 pl-[0.15em]">
                {h.line2}
              </span>{" "}
              <span className="block text-[clamp(3rem,8vw,7rem)]">{h.line3}</span>
            </h1>

            <p className="mt-10 text-base lg:text-lg text-white/45 leading-relaxed max-w-lg font-light">
              {h.description}
            </p>

            <div className="mt-12 flex items-center gap-8">
              <Link
                href="#empresas"
                className="group inline-flex items-center gap-3 text-[13px] font-semibold tracking-[0.08em] uppercase text-white border-b border-white/30 pb-1 hover:border-white transition-colors duration-300"
              >
                {h.ctaPrimary}
                <svg
                  className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
              <Link
                href="#el-grupo"
                className="text-[13px] font-medium tracking-[0.06em] uppercase text-white/30 hover:text-white/60 transition-colors duration-300"
              >
                {h.ctaSecondary}
              </Link>
            </div>
          </div>

          {/* Right: vertical stat strip */}
          <div className="lg:col-span-5 lg:pl-16 mt-16 lg:mt-0 flex lg:flex-col lg:items-end gap-8 lg:gap-0">
            {h.stats.map((s, i) => (
              <div
                key={i}
                className={`flex flex-col ${
                  i > 0 ? "lg:mt-10 lg:pt-10 lg:border-t lg:border-white/10" : ""
                }`}
              >
                <span className="text-4xl lg:text-5xl font-bold text-white tracking-tight">
                  {s.n}
                </span>
                <span className="mt-1 text-[11px] font-medium tracking-[0.12em] uppercase text-white/30">
                  {s.u}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/15 to-transparent" />
    </section>
  );
}
