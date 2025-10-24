export const metadata = { title: "Impact – God's Gifts" };

export default function ImpactPage() {
  return (
    <main className="min-h-screen bg-white text-gray-900">
      <section className="relative min-h-[70vh] w-full overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?q=80&w=1600&auto=format&fit=crop"
          alt="Impact"
          className="absolute inset-0 h-full w-full object-cover animate-kenburns"
        />
        <div className="absolute inset-0 bg-black/70" />
        <div className="relative z-10 mx-auto max-w-5xl px-6 flex min-h-[70vh] items-center justify-center text-center" data-parallax="0.12">
          <div>
            <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl anim-fade-up">Impact</h1>
            <p className="mt-4 max-w-2xl text-white/90 mx-auto anim-fade-up anim-delay-100">Together with our partners, we build long-term change that strengthens communities.</p>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-16 md:py-20">
        <div className="grid items-center gap-10 md:grid-cols-2">
          <div>
            <h2 className="text-2xl font-semibold">Stories of change</h2>
            <p className="mt-3 text-gray-700">From classrooms to clinics and small businesses, real lives are transforming. We focus on measurable outcomes and the human stories behind them.</p>
            <ul className="mt-6 space-y-3 text-gray-700">
              <li className="rounded-lg border border-gray-200 p-4">More children completing primary and secondary education.</li>
              <li className="rounded-lg border border-gray-200 p-4">Improved access to healthcare and prevention services.</li>
              <li className="rounded-lg border border-gray-200 p-4">Stronger household incomes through savings and enterprise.</li>
            </ul>
          </div>
          <div className="overflow-hidden rounded-2xl border border-gray-100 shadow-sm">
            <img src="https://images.unsplash.com/photo-1516979187457-637abb4f9353?q=80&w=1200&auto=format&fit=crop" alt="Community work" className="h-full w-full object-cover" />
          </div>
        </div>
      </section>

      {/* Gallery Masonry */}
      <section className="mx-auto max-w-7xl px-6 pb-20">
        <h2 className="text-2xl font-semibold">Gallery</h2>
        <p className="mt-2 text-gray-600">Moments from classrooms, clinics, and communities.</p>
        <div className="mt-8 columns-1 sm:columns-2 lg:columns-3 xl:columns-4 gap-4 [column-fill:_balance]">
          {[
            "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?q=80&w=1200&auto=format&fit=crop",
            "https://images.unsplash.com/photo-1519458246479-6acae7536988?q=80&w=1200&auto=format&fit=crop",
            "https://images.unsplash.com/photo-1516979187457-637abb4f9353?q=80&w=1200&auto=format&fit=crop",
            "https://images.unsplash.com/photo-1519885278637-7a48ee9f0bf0?q=80&w=1200&auto=format&fit=crop",
            "https://images.unsplash.com/photo-1509062522246-3755977927d7?q=80&w=1200&auto=format&fit=crop",
            "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?q=80&w=1200&auto=format&fit=crop",
            "https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?q=80&w=1200&auto=format&fit=crop",
            "https://images.unsplash.com/photo-1494960770749-777b5f0b79ae?q=80&w=1200&auto=format&fit=crop",
            "https://images.unsplash.com/photo-1565688534245-05d6b5be184a?q=80&w=1200&auto=format&fit=crop",
            "https://images.unsplash.com/photo-1580281657527-47d8b36b3f2b?q=80&w=1200&auto=format&fit=crop",
            "https://images.unsplash.com/photo-1554774853-b415df9eeb92?q=80&w=1200&auto=format&fit=crop",
            "https://images.unsplash.com/photo-1553729459-efe14ef6055d?q=80&w=1200&auto=format&fit=crop",
            "https://images.unsplash.com/photo-1598986646512-98ab3c6b7981?q=80&w=1200&auto=format&fit=crop",
            "https://images.unsplash.com/photo-1543363136-5db7c8e85d5d?q=80&w=1200&auto=format&fit=crop",
            "https://images.unsplash.com/photo-1532634896-26909d0d4b6a?q=80&w=1200&auto=format&fit=crop",
            "https://images.unsplash.com/photo-1541534401786-2077eed87a72?q=80&w=1200&auto=format&fit=crop",
            "https://images.unsplash.com/photo-1520975922323-669ccc0068f0?q=80&w=1200&auto=format&fit=crop",
            "https://images.unsplash.com/photo-1519681393784-d120267933ba?q=80&w=1200&auto=format&fit=crop",
            "https://images.unsplash.com/photo-1523246191800-6f3083e1c1a5?q=80&w=1200&auto=format&fit=crop",
            "https://images.unsplash.com/photo-1531482615713-2afd69097998?q=80&w=1200&auto=format&fit=crop",
            "https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=1200&auto=format&fit=crop",
            "https://images.unsplash.com/photo-1547425260-76bcadfb4f2c?q=80&w=1200&auto=format&fit=crop",
            "https://images.unsplash.com/photo-1546525848-3ce03ca516f6?q=80&w=1200&auto=format&fit=crop",
            "https://images.unsplash.com/photo-1596492784531-6e6eb5ea9993?q=80&w=1200&auto=format&fit=crop",
            "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?q=80&w=1200&auto=format&fit=crop",
            "https://images.unsplash.com/photo-1558980664-10a5ac26f62d?q=80&w=1200&auto=format&fit=crop",
            "https://images.unsplash.com/photo-1516979187457-637abb4f9353?q=80&w=1200&auto=format&fit=crop",
            "https://images.unsplash.com/photo-1554774853-8f9a7c86a1d3?q=80&w=1200&auto=format&fit=crop"
          ].map((src, i) => (
            <figure key={i} className="mb-4 break-inside-avoid overflow-hidden rounded-2xl border border-gray-100 shadow-sm">
              <img src={src} alt="Impact gallery" className="block h-auto w-full object-cover" />
            </figure>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 pb-20">
        <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm text-center">
          <h3 className="text-xl font-semibold">Be part of the impact</h3>
          <p className="mt-2 text-gray-600">Join us in creating lasting change across communities.</p>
          <a href="/donate" className="mt-4 inline-flex items-center justify-center rounded-full bg-[var(--lavender)] px-6 py-3 text-sm font-semibold text-white shadow hover:opacity-90">Donate Now</a>
        </div>
      </section>
    </main>
  );
}
