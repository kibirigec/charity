export default function Home() {
  return (
    <main className="min-h-screen bg-white text-gray-900">
      {/* Hero */}
      <section className="relative h-screen w-full overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1529156069898-49953e39b3ac?q=80&w=1600&auto=format&fit=crop"
          alt="Community support"
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-black/60" />

        {/* Hero content */}
        <div className="relative z-10 mx-auto flex h-full max-w-7xl flex-col items-start justify-center px-4 md:px-6" data-parallax="0.12">
          <h1 className="max-w-3xl text-3xl sm:text-4xl md:text-6xl font-bold tracking-tight text-white anim-fade-up">
            Empowering communities with dignity, opportunity, and hope
          </h1>
          <p className="mt-4 max-w-2xl text-sm sm:text-base text-white/90 md:text-lg anim-fade-up anim-delay-100">
            Together we create sustainable solutions in education, health, and economic resilience—so every child and family can thrive.
          </p>
          <div className="mt-8">
            <a href="/donate" className="inline-flex w-full sm:w-auto items-center justify-center rounded-full bg-[var(--lavender)] px-8 md:px-10 py-4 md:py-5 text-lg md:text-xl font-semibold text-white shadow-xl ring-1 ring-white/10 hover:opacity-90 transition anim-fade-up anim-delay-200">
              Donate Now
            </a>
          </div>


        </div>
      </section>

      {/* Programs */}
      <section id="programs" className="mx-auto max-w-7xl px-6 py-16 md:py-24" data-reveal>
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight md:text-4xl">What we focus on</h2>
          <p className="mt-3 text-gray-600">
            We invest in people-first solutions that unlock potential and build resilience.
          </p>
        </div>
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3" data-stagger>
          {/* Education */}
          <article className="group overflow-hidden rounded-2xl border border-gray-100 shadow-sm transition hover:shadow-md">
            <div className="relative h-48 w-full overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1519458246479-6acae7536988?q=80&w=1200&auto=format&fit=crop"
                alt="Education"
                className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
              />
            </div>
            <div className="p-6">
              <h3 className="text-lg font-semibold">Education</h3>
              <p className="mt-2 text-sm text-gray-600">Quality learning environments, scholarships, and mentorship for every child.</p>
              <a href="#" className="mt-4 inline-flex items-center text-[var(--lavender)] hover:text-[var(--lavender-muted)]">
                Learn more
                <svg className="ml-2 h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
              </a>
            </div>
          </article>
          {/* Health */}
          <article className="group overflow-hidden rounded-2xl border border-gray-100 shadow-sm transition hover:shadow-md">
            <div className="relative h-48 w-full overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1580281657527-47d8b36b3f2b?q=80&w=1200&auto=format&fit=crop"
                alt="Health"
                className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
              />
            </div>
            <div className="p-6">
              <h3 className="text-lg font-semibold">Health</h3>
              <p className="mt-2 text-sm text-gray-600">Community health services, prevention programs, and dignified care.</p>
              <a href="#" className="mt-4 inline-flex items-center text-[var(--lavender)] hover:text-[var(--lavender-muted)]">
                Learn more
                <svg className="ml-2 h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
              </a>
            </div>
          </article>
          {/* Economic empowerment */}
          <article className="group overflow-hidden rounded-2xl border border-gray-100 shadow-sm transition hover:shadow-md">
            <div className="relative h-48 w-full overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1520975922323-669ccc0068f0?q=80&w=1200&auto=format&fit=crop"
                alt="Economic empowerment"
                className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
              />
            </div>
            <div className="p-6">
              <h3 className="text-lg font-semibold">Economic resilience</h3>
              <p className="mt-2 text-sm text-gray-600">Skills training, savings groups, and small business support for families.</p>
              <a href="#" className="mt-4 inline-flex items-center text-[var(--lavender)] hover:text-[var(--lavender-muted)]">
                Learn more
                <svg className="ml-2 h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
              </a>
            </div>
          </article>
        </div>
      </section>

      {/* Impact stripe */}
      <section id="impact" className="relative" data-reveal>
        <div className="mx-auto max-w-7xl overflow-hidden rounded-3xl px-6">
          <div className="relative isolate overflow-hidden rounded-3xl">
            <img
              src="https://images.unsplash.com/photo-1516979187457-637abb4f9353?q=80&w=1600&auto=format&fit=crop"
              alt="Impact"
              className="absolute inset-0 h-full w-full object-cover"
            />
            <div className="absolute inset-0 bg-black/70" />
            <div className="relative z-10 grid grid-cols-1 items-center gap-8 px-8 py-16 sm:px-12 md:grid-cols-2 md:py-20">
              <div>
                <h3 className="text-3xl font-bold text-white">Your kindness powers lasting change</h3>
                <p className="mt-3 max-w-prose text-white/90">
                  Every gift supports education, healthcare, and livelihoods—creating ripple effects for generations.
                </p>
              </div>
              <div className="md:justify-self-end">

              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Partners */}
      <section id="partners" className="mx-auto max-w-7xl px-6 py-16 md:py-20" data-reveal>
        <h3 className="text-center text-sm font-semibold uppercase tracking-wider text-gray-500">Trusted by caring partners</h3>
        <div className="mt-8 grid grid-cols-2 items-center gap-8 sm:grid-cols-3 md:grid-cols-6">
          {[
            "https://dummyimage.com/120x40/ddd/000&text=Partner+1",
            "https://dummyimage.com/120x40/ddd/000&text=Partner+2",
            "https://dummyimage.com/120x40/ddd/000&text=Partner+3",
            "https://dummyimage.com/120x40/ddd/000&text=Partner+4",
            "https://dummyimage.com/120x40/ddd/000&text=Partner+5",
            "https://dummyimage.com/120x40/ddd/000&text=Partner+6",
          ].map((src, i) => (
            <div key={i} className="flex items-center justify-center">
              <img src={src} alt="Partner" className="h-8 w-auto opacity-60 grayscale" />
            </div>
          ))}
        </div>
      </section>


    </main>
  );
}
