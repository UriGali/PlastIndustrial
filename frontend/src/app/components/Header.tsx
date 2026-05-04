"use client";

import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";
import { useLanguage } from "../contexts/LanguageContext";
import type { Lang } from "../translations";

export default function Header() {
  const { lang, setLang, t } = useLanguage();
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const NAV_LINKS = [
    { label: t.nav.group, href: "/el-grupo" },
    { label: t.nav.figures, href: "/#cifras" },
    { label: t.nav.companies, href: "/empresas" },
    { label: t.nav.contact, href: "/contacto" },
  ];

  const otherLang: Lang = lang === "es" ? "en" : "es";

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-white shadow-[0_1px_0_0_rgba(0,0,0,0.08)] py-4"
          : "bg-transparent py-7"
      }`}
    >
      <div className="section-container flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center">
          <Image
            src="/plastindustrial.svg"
            alt="PlastIndustrial Group logotipo"
            width={220}
            height={59}
            priority
            className={`h-14 w-auto transition-all duration-500 ${
              scrolled ? "brightness-100" : "brightness-0 invert"
            }`}
          />
        </Link>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-10">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`text-[13px] font-medium tracking-[0.06em] uppercase transition-colors duration-200 ${
                scrolled
                  ? "text-brand-700 hover:text-brand-900"
                  : "text-white/70 hover:text-white"
              }`}
            >
              {link.label}
            </Link>
          ))}

          {/* Language switcher */}
          <button
            onClick={() => setLang(otherLang)}
            className={`flex items-center gap-1.5 text-[11px] font-semibold tracking-[0.12em] uppercase border px-3 py-1.5 transition-all duration-200 ${
              scrolled
                ? "border-brand-700/30 text-brand-700 hover:bg-brand-700 hover:text-white hover:border-brand-700"
                : "border-white/25 text-white/50 hover:text-white hover:border-white/60"
            }`}
            aria-label={`Switch to ${otherLang === "en" ? "English" : "Español"}`}
          >
            {otherLang.toUpperCase()}
          </button>
        </nav>

        {/* Mobile right side */}
        <div className="flex md:hidden items-center gap-3">
          {/* Mobile language switcher */}
          <button
            onClick={() => setLang(otherLang)}
            className={`text-[11px] font-semibold tracking-[0.12em] uppercase border px-2.5 py-1 transition-all duration-200 ${
              scrolled
                ? "border-brand-700/30 text-brand-700"
                : "border-white/25 text-white/50"
            }`}
          >
            {otherLang.toUpperCase()}
          </button>

          {/* Hamburger */}
          <button
            className={`p-2 transition-colors ${
              scrolled ? "text-brand-800" : "text-white"
            }`}
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label={t.nav.menu}
          >
            <span
              className={`block w-6 h-px bg-current transition-all duration-300 mb-2 ${
                menuOpen ? "rotate-45 translate-y-[9px]" : ""
              }`}
            />
            <span
              className={`block w-6 h-px bg-current transition-all duration-300 mb-2 ${
                menuOpen ? "opacity-0" : ""
              }`}
            />
            <span
              className={`block w-6 h-px bg-current transition-all duration-300 ${
                menuOpen ? "-rotate-45 -translate-y-[9px]" : ""
              }`}
            />
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-300 ${
          menuOpen ? "max-h-60 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <nav className="bg-white border-t border-gray-100 section-container py-6 flex flex-col gap-4">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              className="text-[13px] font-medium tracking-[0.06em] uppercase text-brand-800 hover:text-brand-700 transition-colors"
            >
              {link.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}
