"use client";

import { useLanguage } from "../contexts/LanguageContext";

const COMPANY_META = [
  { index: "01", name: "Moldiplast, S.L.", since: "Est. 1969", href: "https://www.moldiplast.com/" },
  { index: "02", name: "Splastic, S.L.U.", since: "Est. 1970s", href: "https://splastic.es/" },
];

export default function Companies() {
  const { t } = useLanguage();
  const c = t.companies;

  return (
    <section id="empresas" className="py-24 lg:py-32 bg-white">
      <div className="section-container">
        {/* Header */}
        <div className="grid lg:grid-cols-12 gap-8 mb-20">
          <div className="lg:col-span-5">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-8 h-px bg-brand-700" />
              <span className="text-[11px] font-semibold tracking-[0.2em] uppercase text-brand-700">
                {c.eyebrow}
              </span>
            </div>
            <h2 className="text-4xl lg:text-5xl font-bold text-brand-900 leading-[0.95] tracking-tight">
              {c.headline1}
              <br />
              {c.headline2}
            </h2>
          </div>
          <div className="lg:col-span-7 lg:pt-14">
            <p className="text-lg text-gray-400 font-light leading-relaxed">
              {c.description}
            </p>
          </div>
        </div>

        {/* Company entries */}
        <div className="flex flex-col gap-0 divide-y divide-gray-200">
          {c.items.map((item, i) => {
            const meta = COMPANY_META[i];
            return (
              <div
                key={meta.name}
                className="group grid lg:grid-cols-12 gap-0 py-12 hover:bg-gray-50 transition-colors duration-300 -mx-6 px-6 lg:-mx-8 lg:px-8"
              >
                {/* Index + name */}
                <div className="lg:col-span-4 flex flex-col justify-between mb-8 lg:mb-0">
                  <div>
                    <span className="text-[11px] font-bold tracking-[0.15em] text-gray-300">
                      {meta.index}
                    </span>
                    <h3 className="mt-3 text-2xl lg:text-3xl font-bold text-brand-900 leading-tight">
                      {meta.name}
                    </h3>
                    <p className="mt-2 text-sm font-medium text-brand-700">{item.tagline}</p>
                  </div>
                  <span className="mt-6 text-[11px] tracking-widest text-gray-300 uppercase">
                    {meta.since}
                  </span>
                </div>

                {/* Description + tags */}
                <div className="lg:col-span-5 lg:px-12 flex flex-col justify-center mb-8 lg:mb-0">
                  <p className="text-base text-gray-500 leading-relaxed">{item.description}</p>
                  <div className="mt-6 flex flex-wrap gap-2">
                    {item.sectors.map((s) => (
                      <span
                        key={s}
                        className="px-3 py-1 text-[11px] font-semibold tracking-[0.08em] uppercase bg-white border border-gray-200 text-gray-500 group-hover:border-brand-700/20 group-hover:text-brand-700 transition-colors duration-300"
                      >
                        {s}
                      </span>
                    ))}
                  </div>
                </div>

                {/* CTA */}
                <div className="lg:col-span-3 flex items-center justify-start lg:justify-end">
                  <a
                    href={meta.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group/btn inline-flex items-center gap-3 px-8 py-4 border border-brand-700 text-brand-700 text-[13px] font-semibold tracking-[0.06em] uppercase hover:bg-brand-700 hover:text-white transition-all duration-300"
                  >
                    {c.visitWeb}
                    <svg
                      className="w-4 h-4 transition-transform duration-300 group-hover/btn:translate-x-1"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                  </a>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
