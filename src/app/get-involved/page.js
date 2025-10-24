export const metadata = { title: "Get involved – God's Gifts" };

export default function GetInvolvedPage() {
  const options = [
    {
      title: "Volunteer",
      desc: "Offer your time and talent to serve children and families.",
    },
    {
      title: "Partner",
      desc: "Co-create programs and scale impact together.",
    },
    {
      title: "Fundraise",
      desc: "Start a campaign with friends, colleagues, or your community.",
    },
  ];

  return (
    <main className="min-h-screen bg-white text-gray-900">
      <section className="relative min-h-[70vh] w-full overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1523246191800-6f3083e1c1a5?q=80&w=1600&auto=format&fit=crop"
          alt="Get involved"
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-black/60" />
        <div className="relative z-10 mx-auto max-w-5xl px-6 flex min-h-[70vh] items-center justify-center text-center">
          <div>
            <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl">Get involved</h1>
            <p className="mt-4 max-w-2xl text-white/90 mx-auto">There are many ways to join the mission and support the work.</p>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-16 md:py-20">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {options.map((o) => (
            <div key={o.title} className="rounded-2xl border border-gray-100 p-6 shadow-sm">
              <h3 className="text-lg font-semibold">{o.title}</h3>
              <p className="mt-2 text-sm text-gray-600">{o.desc}</p>
              <a href="#" className="mt-4 inline-flex items-center text-[var(--lavender)] hover:text-[var(--lavender-muted)]">
                Learn more
                <svg className="ml-2 h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
              </a>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
