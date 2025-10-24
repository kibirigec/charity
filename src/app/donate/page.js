export const metadata = { title: "Donate – God's Gifts" };

export default function DonatePage() {
  return (
    <main className="min-h-screen bg-white text-gray-900">
      {/* Banner */}
      <section className="relative min-h-[70vh] w-full overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1493244040629-496f6d136cc3?q=80&w=1600&auto=format&fit=crop"
          alt="Donate"
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-black/60" />
        <div className="relative z-10 mx-auto max-w-5xl px-6 flex min-h-[70vh] items-center justify-center text-center">
          <div>
            <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl">Donate</h1>
            <p className="mt-4 max-w-2xl text-white/90 mx-auto">Your support uplifts children, caregivers, and communities. Choose a convenient method below.</p>
          </div>
        </div>
      </section>

      {/* Methods */}
      <section className="mx-auto max-w-6xl px-6 py-16 md:py-20">
        <h2 className="text-2xl font-semibold">Choose a method</h2>
        <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {/* PayPal */}
          <div className="rounded-2xl border border-gray-200 p-6 shadow-sm">
            <h3 className="text-lg font-semibold">PayPal</h3>
            <p className="mt-2 text-sm text-gray-600">Donate securely via PayPal.</p>
            <a href="https://www.paypal.com/" target="_blank" rel="noreferrer" className="mt-4 inline-flex items-center rounded-full border border-gray-300 px-5 py-2 text-sm font-semibold text-[var(--lavender)] hover:bg-gray-50">Open PayPal</a>
          </div>

          {/* Venmo */}
          <div className="rounded-2xl border border-gray-200 p-6 shadow-sm">
            <h3 className="text-lg font-semibold">Venmo</h3>
            <p className="mt-2 text-sm text-gray-600">Handle: <span className="font-mono">@your-venmo-handle</span></p>
            <img src="https://dummyimage.com/180x180/ededed/000&text=Venmo+QR" alt="Venmo QR" className="mt-4 h-36 w-36 rounded border border-gray-200" />
          </div>

          {/* Bank transfer */}
          <div className="rounded-2xl border border-gray-200 p-6 shadow-sm">
            <h3 className="text-lg font-semibold">Bank transfer</h3>
            <dl className="mt-3 space-y-2 text-sm text-gray-700">
              <div className="flex items-start justify-between gap-4"><dt className="text-gray-600">Account name</dt><dd className="font-medium text-gray-900">Nyaka-Inspired Foundation</dd></div>
              <div className="flex items-start justify-between gap-4"><dt className="text-gray-600">Bank</dt><dd className="font-medium text-gray-900">Example Community Bank</dd></div>
              <div className="flex items-start justify-between gap-4"><dt className="text-gray-600">Account / IBAN</dt><dd className="font-mono">XXXX-XXXX-XXXX</dd></div>
              <div className="flex items-start justify-between gap-4"><dt className="text-gray-600">SWIFT / BIC</dt><dd className="font-mono">XXXXXX</dd></div>
            </dl>
            <p className="mt-3 text-xs text-gray-500">Please include an email in the reference if you need a receipt.</p>
          </div>

          {/* MTN MoMo */}
          <div className="rounded-2xl border border-gray-200 p-6 shadow-sm">
            <h3 className="text-lg font-semibold">MTN MoMo</h3>
            <dl className="mt-3 space-y-2 text-sm text-gray-700">
              <div className="flex items-start justify-between gap-4"><dt className="text-gray-600">Number</dt><dd className="font-mono">+256 7XX XXX XXX</dd></div>
              <div className="flex items-start justify-between gap-4"><dt className="text-gray-600">Name</dt><dd className="font-medium text-gray-900">Nyaka-Inspired Foundation</dd></div>
              <div className="flex items-start justify-between gap-4"><dt className="text-gray-600">Reference</dt><dd className="font-medium text-gray-900">Donation</dd></div>
            </dl>
          </div>

          {/* Airtel Money Pay */}
          <div className="rounded-2xl border border-gray-200 p-6 shadow-sm">
            <h3 className="text-lg font-semibold">Airtel Money Pay</h3>
            <dl className="mt-3 space-y-2 text-sm text-gray-700">
              <div className="flex items-start justify-between gap-4"><dt className="text-gray-600">Merchant code</dt><dd className="font-mono">XXXXXX</dd></div>
              <div className="flex items-start justify-between gap-4"><dt className="text-gray-600">Number</dt><dd className="font-mono">+256 7XX XXX XXX</dd></div>
              <div className="flex items-start justify-between gap-4"><dt className="text-gray-600">Name</dt><dd className="font-medium text-gray-900">Nyaka-Inspired Foundation</dd></div>
            </dl>
          </div>
        </div>

        <div className="mt-12 rounded-xl border border-gray-200 bg-gray-50 p-6 text-sm text-gray-700">
          For any donation questions or wire confirmations, please email <span className="font-medium">donations@example.org</span>.
        </div>
      </section>
    </main>
  );
}
