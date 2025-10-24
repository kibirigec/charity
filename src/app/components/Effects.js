"use client";
import { useEffect } from "react";

export default function Effects() {
  useEffect(() => {
    const prefersReduced = typeof window !== 'undefined' && window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    // IntersectionObserver for reveal
    const revealEls = Array.from(document.querySelectorAll('[data-reveal]'));
    const staggerContainers = Array.from(document.querySelectorAll('[data-stagger]'));

    const initReveal = (el) => {
      el.classList.add('reveal');
    };

    revealEls.forEach(initReveal);
    staggerContainers.forEach((container) => {
      Array.from(container.children).forEach((child) => child.classList.add('reveal'));
    });

    const io = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const el = entry.target;
          if (el.hasAttribute('data-stagger')) {
            const children = Array.from(el.children);
            children.forEach((child, i) => {
              child.style.transitionDelay = `${Math.min(i * 100, 600)}ms`;
              child.classList.add('is-visible');
            });
          } else {
            el.classList.add('is-visible');
          }
          io.unobserve(el);
        }
      });
    }, { threshold: 0.12 });

    revealEls.forEach((el) => io.observe(el));
    staggerContainers.forEach((el) => io.observe(el));

    // Parallax for hero containers
    const parallaxEls = Array.from(document.querySelectorAll('[data-parallax]'));
    const factors = new WeakMap();
    parallaxEls.forEach((el) => {
      const f = parseFloat(el.getAttribute('data-parallax') || '0.15');
      factors.set(el, isNaN(f) ? 0.15 : f);
      el.style.willChange = 'transform';
    });

    let ticking = false;
    const onScroll = () => {
      if (prefersReduced) return;
      if (!ticking) {
        window.requestAnimationFrame(() => {
          const y = window.scrollY || 0;
          parallaxEls.forEach((el) => {
            const f = factors.get(el) || 0.15;
            const offset = Math.max(-24, Math.min(24, y * f));
            el.style.transform = `translateY(${offset}px)`;
          });
          ticking = false;
        });
        ticking = true;
      }
    };

    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });

    return () => {
      window.removeEventListener('scroll', onScroll);
      io.disconnect();
    };
  }, []);

  return null;
}
