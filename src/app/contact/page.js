export const metadata = { title: "Contact – God's Gifts" };

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-white text-gray-900">
      <section className="relative min-h-[70vh] w-full overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1531482615713-2afd69097998?q=80&w=1600&auto=format&fit=crop"
          alt="Contact"
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-black/60" />
        <div className="relative z-10 mx-auto max-w-5xl px-6 flex min-h-[70vh] items-center justify-center text-center">
          <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl">Contact</h1>
          <p className="mt-4 max-w-2xl text-white/90">Reach out to our team. We’d love to hear from you.</p>
        </div>
      </section>

      <section className="mx-auto max-w-5xl px-6 py-16 md:py-20">
        <div className="grid gap-10 md:grid-cols-2">
          <div>
            <h2 className="text-xl font-semibold">Send a message</h2>
            <form className="mt-4 space-y-4">
              <input className="w-full rounded-md border border-gray-300 px-4 py-3" placeholder="Full name" />
              <input className="w-full rounded-md border border-gray-300 px-4 py-3" placeholder="Email" type="email" />
              <textarea className="w-full rounded-md border border-gray-300 px-4 py-3" placeholder="Message" rows={5} />
              <button className="inline-flex items-center rounded bg-[var(--lavender)] px-5 py-3 text-sm font-semibold text-white hover:opacity-90" type="button">Send</button>
            </form>
          </div>
          <div className="space-y-4">
            <h2 className="text-xl font-semibold">Information</h2>
            <p className="text-gray-700">Email: info@example.org</p>
            <p className="text-gray-700">Phone: +1 (555) 555-5555</p>
            <p className="text-gray-700">Address: 123 Community Way, City, Country</p>
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
