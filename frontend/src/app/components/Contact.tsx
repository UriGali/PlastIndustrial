"use client";

import { useLanguage } from "../contexts/LanguageContext";

const CHANNEL_META = [
  {
    value: "oriolgali@galireyesbe.com",
    href: "mailto:oriolgali@galireyesbe.com",
    icon: (
      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    ),
  },
  {
    value: "609 73 21 50",
    href: "tel:+34609732150",
    icon: (
      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.948V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
      </svg>
    ),
  },
];

export default function Contact() {
  const { t } = useLanguage();
  const ct = t.contact;

  return (
    <section id="contacto" className="py-24 lg:py-32 bg-gray-50">
      <div className="section-container">
        <div className="grid lg:grid-cols-12 gap-16 items-center">

          {/* Left — headline */}
          <div className="lg:col-span-5">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-8 h-px bg-brand-700" />
              <span className="text-[11px] font-semibold tracking-[0.2em] uppercase text-brand-700">
                {ct.eyebrow}
              </span>
            </div>
            <h2 className="text-4xl lg:text-5xl font-bold text-brand-900 leading-[0.95] tracking-tight">
              {ct.headline}
            </h2>
            <p className="mt-6 text-lg text-gray-400 font-light leading-relaxed">
              {ct.description}
            </p>
          </div>

          {/* Right — contact channels */}
          <div className="lg:col-span-7">
            <div className="flex flex-col divide-y divide-gray-200">
              {CHANNEL_META.map((ch, i) => (
                <a
                  key={i}
                  href={ch.href}
                  className="group flex items-center justify-between py-8 transition-all duration-300 hover:pl-2"
                >
                  <div className="flex items-center gap-6">
                    <div className="w-10 h-10 bg-white border border-gray-200 flex items-center justify-center flex-shrink-0 text-gray-400 group-hover:bg-brand-700 group-hover:border-brand-700 group-hover:text-white transition-all duration-300">
                      {ch.icon}
                    </div>
                    <div>
                      <p className="text-[11px] font-semibold tracking-[0.15em] uppercase text-gray-300 mb-1">
                        {ct.channels[i].label}
                      </p>
                      <p className="text-xl font-medium text-brand-900 group-hover:text-brand-700 transition-colors duration-300">
                        {ch.value}
                      </p>
                    </div>
                  </div>
                  <svg
                    className="w-5 h-5 text-gray-300 group-hover:text-brand-700 group-hover:translate-x-1 transition-all duration-300 flex-shrink-0"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </a>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
