"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";

export default function Navbar() {
  const pathname = usePathname();
  const isAboutRoute = pathname?.startsWith("/about") || pathname?.startsWith("/people-behind");
  const [open, setOpen] = useState(isAboutRoute);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const aboutRef = useRef(null);

  useEffect(() => {
    setOpen(!!isAboutRoute);
  }, [isAboutRoute]);

  useEffect(() => {
    const onDocClick = (e) => {
      // On mobile, do not auto-close the About dropdown/accordion on outside touches
      if (typeof window !== 'undefined' && window.innerWidth < 768) return;
      if (aboutRef.current && !aboutRef.current.contains(e.target)) setOpen(false);
    };
    document.addEventListener("mousedown", onDocClick);
    return () => document.removeEventListener("mousedown", onDocClick);
  }, []);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (typeof document !== 'undefined') {
      const root = document.documentElement;
      if (mobileOpen) root.classList.add('menu-open');
      else root.classList.remove('menu-open');
      return () => root.classList.remove('menu-open');
    }
  }, [mobileOpen]);

  return (
    <>
      <header className={`site-header fixed inset-x-0 top-0 z-30 transition-colors ${scrolled ? 'bg-white/90 backdrop-blur border-b border-gray-200' : 'bg-transparent'}`}>
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 md:px-6 py-4 md:py-5">
          <div className="flex items-center gap-3">
            <div className="h-9 w-9 rounded bg-white/90 text-black grid place-items-center font-bold">NG</div>
            <span className={`${scrolled ? 'text-gray-900' : 'text-white'} text-lg font-semibold tracking-tight`}>God's Gifts</span>
          </div>
          <button
            type="button"
            className="md:hidden inline-flex items-center justify-center rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-white/50"
            onClick={() => setMobileOpen(v => !v)}
            aria-label="Toggle navigation"
            aria-expanded={mobileOpen}
          >
            <span className={`hamb ${mobileOpen ? 'open' : ''} ${scrolled ? 'text-gray-900' : 'text-white'}`}>
              <span className="hamb-bar" />
              <span className="hamb-bar" />
              <span className="hamb-bar" />
            </span>
          </button>
          <nav className={`hidden md:flex items-center gap-8 text-sm ${scrolled ? 'text-gray-900/90' : 'text-white/90'}`}>
            <div className="relative" ref={aboutRef}>
              <button
                type="button"
                onClick={() => setOpen(v => !v)}
                className="inline-flex items-center gap-1 hover:text-white transition"
                aria-haspopup="menu"
                aria-expanded={open}
              >
                About
                <svg
                  className={`h-4 w-4 transition-transform ${open ? "rotate-180" : "rotate-0"}`}
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <path fillRule="evenodd" d="M5.23 7.21a.75.75 0 011.06.02L10 10.584l3.71-3.354a.75.75 0 011.02 1.1l-4.22 3.814a.75.75 0 01-1.02 0L5.25 8.33a.75.75 0 01-.02-1.12z" clipRule="evenodd" />
                </svg>
              </button>
              {open && (
                <div className="absolute left-0 mt-3 min-w-[240px] overflow-hidden rounded-lg bg-white/95 p-2 text-gray-900 shadow-lg backdrop-blur pointer-events-auto">
                  <Link href="/about" onClick={() => setOpen(false)} className="block rounded px-3 py-2 text-sm hover:bg-gray-50">About God's Gifts Foundation</Link>
                  <Link href="/people-behind" onClick={() => setOpen(false)} className="block rounded px-3 py-2 text-sm hover:bg-gray-50">People Behind</Link>
                </div>
              )}
            </div>
            <Link href="/programs" className="hover:opacity-90 transition">Programs</Link>
            <Link href="/impact" className="hover:opacity-90 transition">Impact</Link>
            <Link href="/partners" className="hover:opacity-90 transition">Partners</Link>
            <Link href="/contact" className="hover:opacity-90 transition">Contact</Link>
            <Link href="/donate" className={`inline-flex items-center rounded-full px-5 py-2 text-sm font-semibold transition ${scrolled ? 'border border-gray-300 text-gray-900' : 'border border-white/80 text-white'}`}>Donate</Link>
          </nav>
        </div>
      </header>
      {/* Mobile drawer + backdrop */}
      <>
          <div onClick={() => setMobileOpen(false)} className={`fixed inset-0 z-40 md:hidden transition-opacity duration-300 ${mobileOpen ? 'opacity-100 bg-black/40 backdrop-blur-sm pointer-events-auto' : 'opacity-0 pointer-events-none'}`} />
          <aside className={`fixed inset-y-0 right-0 z-50 w-[80vw] max-w-sm md:hidden transform transition-transform duration-300 ease-out ${mobileOpen ? 'translate-x-0' : 'translate-x-full'} bg-white text-gray-900`}>
            <button type="button" onClick={() => setMobileOpen(false)} aria-label="Close menu" className="absolute top-3 right-3 inline-flex h-9 w-9 items-center justify-center rounded-full hover:bg-gray-100">
              <svg className="h-5 w-5 text-gray-700" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
            <div className="px-4 py-6 space-y-5 mt-8">
              <Link href="/" onClick={() => setMobileOpen(false)} className="block text-lg">Home</Link>
              <div>
                <button type="button" onClick={() => setOpen(v => !v)} className="w-full inline-flex items-center justify-between text-lg">
                  <span>About</span>
                  <svg className={`h-4 w-4 transition-transform ${open ? 'rotate-180' : 'rotate-0'}`} viewBox="0 0 20 20" fill="currentColor"><path fillRule="evenodd" d="M5.23 7.21a.75.75 0 011.06.02L10 10.584l3.71-3.354a.75.75 0 011.02 1.1l-4.22 3.814a.75.75 0 01-1.02 0L5.25 8.33a.75.75 0 01-.02-1.12z" clipRule="evenodd" /></svg>
                </button>
                {open && (
                  <div className="mt-3 space-y-3">
                    <Link href="/about" onClick={(e) => { e.stopPropagation(); setMobileOpen(false); }} className="block px-3 py-3 text-base hover:bg-gray-50">About God's Gifts Foundation</Link>
                    <Link href="/people-behind" onClick={(e) => { e.stopPropagation(); setMobileOpen(false); }} className="block px-3 py-3 text-base hover:bg-gray-50">People Behind</Link>
                  </div>
                )}
              </div>
              <Link href="/programs" onClick={() => setMobileOpen(false)} className="block text-lg">Programs</Link>
              <Link href="/impact" onClick={() => setMobileOpen(false)} className="block text-lg">Impact</Link>
              <Link href="/partners" onClick={() => setMobileOpen(false)} className="block text-lg">Partners</Link>
              <Link href="/contact" onClick={() => setMobileOpen(false)} className="block text-lg">Contact</Link>
              <Link href="/donate" onClick={() => setMobileOpen(false)} className="inline-flex items-center rounded-full border px-6 py-3 text-base font-semibold">Donate</Link>
            </div>
          </aside>
        </>
    </>
  );
}
