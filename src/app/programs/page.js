export const metadata = { title: "Programs – God's Gifts" };

export default function ProgramsPage() {
  const programs = [
    {
      title: "Education",
      desc: "Quality learning, scholarships, and mentorship for every child.",
      img: "https://images.unsplash.com/photo-1509062522246-3755977927d7?q=80&w=1200&auto=format&fit=crop",
    },
    {
      title: "Health",
      desc: "Community health services, prevention, and dignified care.",
      img: "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?q=80&w=1200&auto=format&fit=crop",
    },
    {
      title: "Economic resilience",
      desc: "Skills training, savings groups, and small business support.",
      img: "https://images.unsplash.com/photo-1553729459-efe14ef6055d?q=80&w=1200&auto=format&fit=crop",
    },
  ];

  return (
    <main className="min-h-screen bg-white text-gray-900">
      <section className="relative min-h-[70vh] w-full overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1554774853-b415df9eeb92?q=80&w=1600&auto=format&fit=crop"
          alt="Programs"
          className="absolute inset-0 h-full w-full object-cover animate-kenburns"
        />
        <div className="absolute inset-0 bg-black/60" />
        <div className="relative z-10 mx-auto max-w-5xl px-6 flex min-h-[70vh] items-center justify-center text-center" data-parallax="0.12">
          <div>
            <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl anim-fade-up">Programs</h1>
            <p className="mt-4 max-w-2xl text-white/90 mx-auto anim-fade-up anim-delay-100">We deliver holistic programs that empower children and families to thrive.</p>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-16 md:py-20">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {programs.map((p) => (
            <article key={p.title} className="overflow-hidden rounded-2xl border border-gray-100 shadow-sm transition hover:shadow-md">
              <div className="relative h-48 w-full overflow-hidden">
                <img src={p.img} alt={p.title} className="h-full w-full object-cover" />
              </div>
              <div className="p-6">
                <h3 className="text-lg font-semibold">{p.title}</h3>
                <p className="mt-2 text-sm text-gray-600">{p.desc}</p>
                <a href="#" className="mt-4 inline-flex items-center text-[var(--lavender)] hover:text-[var(--lavender-muted)]">
                  Learn more
                  <svg className="ml-2 h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
                </a>
              </div>
            </article>
          ))}
        </div>
      </section>
      <section className="mx-auto max-w-6xl px-6 pb-20">
        <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm text-center">
          <h3 className="text-xl font-semibold">Advance these programs</h3>
          <p className="mt-2 text-gray-600">Every gift strengthens education, health, and livelihoods.</p>
          <a href="/donate" className="mt-4 inline-flex items-center justify-center rounded-full bg-[var(--lavender)] px-6 py-3 text-sm font-semibold text-white shadow hover:opacity-90">Donate Now</a>
        </div>
      </section>
    </main>
  );
}
