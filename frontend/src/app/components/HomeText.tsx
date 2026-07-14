"use client";

import { useLanguage } from "../contexts/LanguageContext";

export default function HomeText() {
  const { t } = useLanguage();
  const h = t.homeText;

  return (
    <section className="py-24 lg:py-32 bg-white border-t border-gray-100">
      <div className="section-container">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-20">
          <div className="lg:col-span-4">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-8 h-px bg-brand-700" />
              <span className="text-[11px] font-semibold tracking-[0.2em] uppercase text-brand-700">
                {h.eyebrow}
              </span>
            </div>
            <h2 className="text-3xl lg:text-4xl font-bold text-brand-900 leading-tight">
              {h.title}
            </h2>
          </div>

          <div className="lg:col-span-8 space-y-6 text-gray-500 leading-relaxed">
            <p dangerouslySetInnerHTML={{ __html: h.p1 }} />
            <p dangerouslySetInnerHTML={{ __html: h.p2 }} />
            <p dangerouslySetInnerHTML={{ __html: h.p3 }} />
            <p dangerouslySetInnerHTML={{ __html: h.p4 }} />
            <p dangerouslySetInnerHTML={{ __html: h.p5 }} />
          </div>
        </div>
      </div>
    </section>
  );
}
