export const metadata = { title: "Partners – God's Gifts" };

export default function PartnersPage() {
  const logos = Array.from({ length: 12 }).map((_, i) => `https://dummyimage.com/140x44/ddd/000&text=Partner+${i+1}`);
  return (
    <main className="min-h-screen bg-white text-gray-900">
      <section className="relative min-h-[70vh] w-full overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1520607162513-77705c0f0d4a?q=80&w=1600&auto=format&fit=crop"
          alt="Partners"
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-black/60" />
        <div className="relative z-10 mx-auto max-w-5xl px-6 flex min-h-[70vh] items-center justify-center text-center">
          <div>
            <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl">Partners</h1>
            <p className="mt-4 max-w-2xl text-white/90 mx-auto">We collaborate with organizations and individuals who share our commitment to human dignity.</p>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-16 md:py-20">
        <h2 className="text-center text-sm font-semibold uppercase tracking-wider text-gray-500">Our partners</h2>
        <div className="mt-8 grid grid-cols-2 items-center gap-8 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6">
          {logos.map((src, i) => (
            <div key={i} className="flex items-center justify-center">
              <img src={src} alt="Partner" className="h-10 w-auto opacity-70 grayscale" />
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
