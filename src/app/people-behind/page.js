export const metadata = { title: "People Behind – God's Gifts" };

export default function PeopleBehindPage() {
  const people = [
    { name: "Jane Doe", role: "Executive Director", img: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=640&auto=format&fit=crop" },
    { name: "John Smith", role: "Programs Lead", img: "https://images.unsplash.com/photo-1547425260-76bcadfb4f2c?q=80&w=640&auto=format&fit=crop" },
    { name: "Amina K.", role: "Health Coordinator", img: "https://images.unsplash.com/photo-1546525848-3ce03ca516f6?q=80&w=640&auto=format&fit=crop" },
    { name: "Peter L.", role: "Education Coordinator", img: "https://images.unsplash.com/photo-1541534401786-2077eed87a72?q=80&w=640&auto=format&fit=crop" },
  ];

  return (
    <main className="min-h-screen bg-white text-gray-900">
      {/* Banner */}
      <section className="relative min-h-[70vh] w-full overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1532634896-26909d0d4b6a?q=80&w=1600&auto=format&fit=crop"
          alt="Team"
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-black/60" />
        <div className="relative z-10 mx-auto max-w-5xl px-6 flex min-h-[70vh] items-center justify-center text-center">
          <div>
            <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl">People Behind</h1>
            <p className="mt-4 max-w-2xl text-white/90 mx-auto">Meet the dedicated team and volunteers who make the mission possible.</p>
          </div>
        </div>
      </section>

      {/* Team grid */}
      <section className="mx-auto max-w-6xl px-6 py-16 md:py-20">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {people.map((p) => (
            <article key={p.name} className="overflow-hidden rounded-2xl border border-gray-100 bg-white shadow-sm">
              <div className="relative h-56 w-full overflow-hidden">
                <img src={p.img} alt={p.name} className="h-full w-full object-cover" />
              </div>
              <div className="p-4">
                <h3 className="text-base font-semibold text-gray-900">{p.name}</h3>
                <p className="mt-1 text-sm text-gray-600">{p.role}</p>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-12 rounded-xl border border-gray-200 bg-gray-50 p-6 text-sm text-gray-700">
          Interested in joining or volunteering? Contact us at <span className="font-medium">people@example.org</span>.
        </div>
      </section>
      <section className="mx-auto max-w-6xl px-6 pb-20">
        <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm text-center">
          <h3 className="text-xl font-semibold">Back the people behind the work</h3>
          <p className="mt-2 text-gray-600">Your support equips our team to reach more families.</p>
          <a href="/donate" className="mt-4 inline-flex items-center justify-center rounded-full bg-[var(--lavender)] px-6 py-3 text-sm font-semibold text-white shadow hover:opacity-90">Donate Now</a>
        </div>
      </section>
    </main>
  );
}
