export const metadata = { title: "Contact – God's Gifts" };

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-white text-gray-900">
      <section className="relative min-h-[70vh] w-full overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1531482615713-2afd69097998?q=80&w=1600&auto=format&fit=crop"
          alt="Contact"
          className="absolute inset-0 h-full w-full object-cover animate-kenburns"
        />
        <div className="absolute inset-0 bg-black/60" />
        <div className="relative z-10 mx-auto max-w-5xl px-6 flex min-h-[70vh] items-center justify-center text-center" data-parallax="0.12">
          <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl anim-fade-up">Contact</h1>
          <p className="mt-4 max-w-2xl text-white/90 anim-fade-up anim-delay-100">Reach out to our team. We’d love to hear from you.</p>
        </div>
      </section>

      <section className="mx-auto max-w-5xl px-6 py-16 md:py-20">
        <div className="overflow-hidden rounded-2xl border border-gray-200 shadow-sm">
          <div className="grid gap-0 md:grid-cols-2">
            {/* Left: info panel */}
            <div className="bg-gray-50 p-6 md:p-8">
              <h2 className="text-xl font-semibold">Contact information</h2>
              <p className="mt-2 text-sm text-gray-600">We typically respond within 1–2 business days.</p>
              <dl className="mt-6 space-y-2 text-sm text-gray-700">
                <div className="flex items-start justify-between gap-4"><dt className="text-gray-600">Email</dt><dd className="font-medium">info@example.org</dd></div>
                <div className="flex items-start justify-between gap-4"><dt className="text-gray-600">Phone</dt><dd className="font-medium">+1 (555) 555-5555</dd></div>
                <div className="flex items-start justify-between gap-4"><dt className="text-gray-600">Address</dt><dd className="font-medium">123 Community Way, City, Country</dd></div>
              </dl>
            </div>
            {/* Right: form panel */}
            <div className="p-6 md:p-8">
              <h2 className="text-xl font-semibold">Send us a message</h2>
              <form className="mt-4 grid grid-cols-1 gap-4 sm:grid-cols-2">
                <input className="col-span-1 rounded-md border border-gray-300 px-4 py-3" placeholder="First name" />
                <input className="col-span-1 rounded-md border border-gray-300 px-4 py-3" placeholder="Last name" />
                <input className="sm:col-span-2 rounded-md border border-gray-300 px-4 py-3" placeholder="Email address" type="email" />
                <input className="sm:col-span-2 rounded-md border border-gray-300 px-4 py-3" placeholder="Subject" />
                <textarea className="sm:col-span-2 rounded-md border border-gray-300 px-4 py-3" placeholder="Message" rows={6} />
                <div className="sm:col-span-2">
                  <button className="inline-flex w-full items-center justify-center rounded-md bg-[var(--lavender)] px-5 py-3 text-sm font-semibold text-white shadow hover:opacity-90" type="button">Send message</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
      <section className="mx-auto max-w-5xl px-6 pb-16">
        <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm text-center">
          <h3 className="text-xl font-semibold">Prefer to support directly?</h3>
          <p className="mt-2 text-gray-600">Every contribution keeps programs running and families thriving.</p>
          <a href="/donate" className="mt-4 inline-flex items-center justify-center rounded-full bg-[var(--lavender)] px-6 py-3 text-sm font-semibold text-white shadow hover:opacity-90">Donate Now</a>
        </div>
      </section>
    </main>
  );
}
