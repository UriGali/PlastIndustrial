"use client";

import { useLanguage } from "../contexts/LanguageContext";

export default function GroupText() {
  const { t } = useLanguage();
  const g = t.groupText;

  return (
    <section className="py-24 lg:py-32 bg-gray-50 border-t border-gray-100">
      <div className="section-container">
        <div className="max-w-3xl">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-8 h-px bg-brand-700" />
            <span className="text-[11px] font-semibold tracking-[0.2em] uppercase text-brand-700">
              {g.eyebrow}
            </span>
          </div>
          <h2 className="text-3xl lg:text-4xl font-bold text-brand-900 leading-tight mb-10">
            {g.title}
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 text-gray-500 leading-relaxed">
          <div className="space-y-5">
            <p dangerouslySetInnerHTML={{ __html: g.p1 }} />
            <p dangerouslySetInnerHTML={{ __html: g.p2 }} />
            <p dangerouslySetInnerHTML={{ __html: g.p3 }} />
            <p dangerouslySetInnerHTML={{ __html: g.p4 }} />
          </div>

          <div className="space-y-5">
            <p dangerouslySetInnerHTML={{ __html: g.p5 }} />
            <p dangerouslySetInnerHTML={{ __html: g.p6 }} />
            <p dangerouslySetInnerHTML={{ __html: g.p7 }} />
          </div>
        </div>
      </div>
    </section>
  );
}
