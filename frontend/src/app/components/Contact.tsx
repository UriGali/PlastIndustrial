"use client";

import { useLanguage } from "../contexts/LanguageContext";

const CHANNEL_META = [
  {
    value: "oriolgali@plastindustrial.com",
    href: "mailto:oriolgali@plastindustrial.com",
    ariaLabel: "Enviar email a oriolgali@plastindustrial.com",
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    ),
  },
  {
    value: "+34 609 73 21 50",
    href: "tel:+34609732150",
    ariaLabel: "Llamar al +34 609 73 21 50",
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.948V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
      </svg>
    ),
  },
];

const HEADING_CLASS = "text-4xl lg:text-5xl font-bold text-brand-900 leading-[0.95] tracking-tight";

export default function Contact({ isPageHeading = false }: { isPageHeading?: boolean }) {
  const { t } = useLanguage();
  const ct = t.contact;

  return (
    <section id="contacto" className="py-24 lg:py-32 bg-white">
      <div className="section-container">

        {/* Header */}
        <div className="mb-16 pb-16 border-b border-gray-100">
          <div className="grid lg:grid-cols-12 gap-8 items-end">
            <div className="lg:col-span-6">
              <div className="flex items-center gap-3 mb-5">
                <div className="w-8 h-px bg-brand-700" />
                <span className="text-[11px] font-semibold tracking-[0.2em] uppercase text-brand-700">
                  {ct.eyebrow}
                </span>
              </div>
              {isPageHeading ? (
                <h1 className={HEADING_CLASS}>{ct.headline}</h1>
              ) : (
                <h2 className={HEADING_CLASS}>{ct.headline}</h2>
              )}
            </div>
            <div className="lg:col-span-6">
              <p className="text-base text-gray-400 font-light leading-relaxed">
                {ct.description}
              </p>
            </div>
          </div>
        </div>

        {/* Contact cards */}
        <div className="grid sm:grid-cols-2 gap-6">
          {CHANNEL_META.map((ch, i) => (
            <a
              key={i}
              href={ch.href}
              aria-label={ch.ariaLabel}
              className="group relative flex flex-col justify-between p-8 border border-gray-150 bg-gray-50 hover:bg-white hover:border-brand-700/40 hover:shadow-[0_4px_24px_rgba(35,67,116,0.08)] transition-all duration-300"
            >
              {/* Top accent line */}
              <div className="absolute top-0 left-0 right-0 h-[2px] bg-brand-700 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

              {/* Icon */}
              <div className="w-11 h-11 bg-brand-900 text-white flex items-center justify-center mb-8 flex-shrink-0">
                {ch.icon}
              </div>

              {/* Content */}
              <div>
                <p className="text-[10px] font-bold tracking-[0.2em] uppercase text-gray-400 mb-3">
                  {ct.channels[i].label}
                </p>
                <p className="text-lg font-semibold text-brand-900 group-hover:text-brand-700 transition-colors duration-300 break-all">
                  {ch.value}
                </p>
              </div>

              {/* Arrow */}
              <div className="mt-8 flex items-center gap-2 text-[11px] font-semibold tracking-[0.12em] uppercase text-gray-300 group-hover:text-brand-700 transition-colors duration-300">
                <span>{ct.channels[i].cta}</span>
                <svg className="w-3.5 h-3.5 transition-transform duration-300 group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </div>
            </a>
          ))}
        </div>

      </div>
    </section>
  );
}
