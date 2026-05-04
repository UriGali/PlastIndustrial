"use client";

import { useLanguage } from "../contexts/LanguageContext";

const VALUE_ICONS = [
  <svg key="quality" aria-hidden="true" className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
  </svg>,
  <svg key="innovation" aria-hidden="true" className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
  </svg>,
  <svg key="commitment" aria-hidden="true" className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z" />
  </svg>,
  <svg key="sustainability" aria-hidden="true" className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
  </svg>,
];

export default function About() {
  const { t } = useLanguage();
  const a = t.about;

  return (
    <section id="el-grupo" className="py-24 lg:py-32 bg-gray-50">
      <div className="section-container">
        {/* Header */}
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
          <div>
            <p className="text-xs font-semibold tracking-widest uppercase text-brand-700 mb-3">
              {a.eyebrow}
            </p>
            <h2 className="text-4xl lg:text-5xl font-bold text-brand-900 leading-tight">
              {a.headline1}
              <br />
              <span className="text-brand-700">{a.headline2}</span>
            </h2>
          </div>
          <div>
            <p className="text-lg text-gray-600 leading-relaxed mb-4">{a.p1}</p>
            <p className="text-gray-500 leading-relaxed">{a.p2}</p>
          </div>
        </div>

        {/* Values grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {a.values.map((v, i) => (
            <div
              key={i}
              className="group bg-white border border-gray-100 rounded-sm p-7 hover:border-brand-700/30 hover:shadow-lg transition-all duration-300"
            >
              <div className="w-12 h-12 rounded-sm bg-brand-50 text-brand-700 flex items-center justify-center mb-5 group-hover:bg-brand-700 group-hover:text-white transition-colors duration-300">
                {VALUE_ICONS[i]}
              </div>
              <h3 className="font-semibold text-brand-900 mb-2">{v.title}</h3>
              <p className="text-sm text-gray-500 leading-relaxed">{v.desc}</p>
            </div>
          ))}
        </div>

        {/* Horizontal divider with accent */}
        <div className="mt-20 flex items-center gap-4">
          <div className="flex-1 h-px bg-gray-200" />
          <div className="w-2 h-2 bg-brand-700 rotate-45" />
          <div className="flex-1 h-px bg-gray-200" />
        </div>
      </div>
    </section>
  );
}
