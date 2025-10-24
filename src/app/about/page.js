export const metadata = { title: "About – God's Gifts" };

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-white text-gray-900">
      <section className="relative min-h-[70vh] w-full overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1588072432836-e10032774350?q=80&w=1600&auto=format&fit=crop"
          alt="Community"
          className="absolute inset-0 h-full w-full object-cover animate-kenburns"
        />
        <div className="absolute inset-0 bg-black/60" />
        <div className="relative z-10 mx-auto max-w-5xl px-6 flex min-h-[70vh] items-center justify-center text-center" data-parallax="0.12">
          <div>
            <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl anim-fade-up">About us</h1>
            <p className="mt-4 max-w-2xl text-white/90 mx-auto anim-fade-up anim-delay-100">We are a people-centered nonprofit dedicated to dignity, opportunity, and resilience. Our work is rooted in partnership and lasting local impact.</p>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-5xl px-6 py-16 md:py-20">
        <div className="prose prose-gray max-w-none">
          <h2 className="text-2xl font-semibold text-gray-900">Our story</h2>
          <p className="mt-3 text-gray-700">Founded to serve children, caregivers, and communities, we focus on practical solutions that remove barriers and unlock potential. We invest in education, health, and livelihoods—guided by the voices of the people we serve.</p>
          <h3 className="mt-10 text-xl font-semibold text-gray-900">Values</h3>
          <ul className="mt-3 grid gap-3 sm:grid-cols-2">
            <li className="rounded-lg border border-gray-200 p-4"><span className="font-medium text-[var(--lavender)]">Dignity</span> — We honor every person’s worth.</li>
            <li className="rounded-lg border border-gray-200 p-4"><span className="font-medium text-[var(--lavender)]">Integrity</span> — We steward resources wisely.</li>
            <li className="rounded-lg border border-gray-200 p-4"><span className="font-medium text-[var(--lavender)]">Collaboration</span> — We build with communities.</li>
            <li className="rounded-lg border border-gray-200 p-4"><span className="font-medium text-[var(--lavender)]">Impact</span> — We focus on lasting change.</li>
          </ul>
        </div>
      </section>
      <section className="mx-auto max-w-5xl px-6 pb-16">
        <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm text-center">
          <h3 className="text-xl font-semibold">Help fuel this work</h3>
          <p className="mt-2 text-gray-600">Your gift supports education, healthcare, and livelihoods.</p>
          <a href="/donate" className="mt-4 inline-flex items-center justify-center rounded-full bg-[var(--lavender)] px-6 py-3 text-sm font-semibold text-white shadow hover:opacity-90">Donate Now</a>
        </div>
      </section>
    </main>
  );
}
