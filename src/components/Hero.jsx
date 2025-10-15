export default function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-indigo-50 via-white to-white" aria-hidden="true" />
      <div className="relative mx-auto max-w-6xl px-6 py-20 sm:py-24">
        <div className="max-w-2xl">
          <p className="inline-flex items-center rounded-full bg-indigo-100 text-indigo-700 px-3 py-1 text-xs font-medium mb-4">
            Simple • Fast • Beautiful
          </p>
          <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight text-gray-900 leading-tight">
            Hello, World!
          </h1>
          <p className="mt-4 text-lg text-gray-600">
            A minimal starter to get you building quickly. Clean design, modern stack, and a welcoming greeting to kick things off.
          </p>
          <div className="mt-8 flex items-center gap-3">
            <a
              href="#features"
              className="inline-flex items-center justify-center rounded-lg bg-indigo-600 px-5 py-3 text-white font-medium shadow hover:bg-indigo-700 transition-colors"
            >
              Explore Features
            </a>
            <a
              href="#about"
              className="inline-flex items-center justify-center rounded-lg border border-gray-300 px-5 py-3 text-gray-800 font-medium hover:bg-gray-50 transition-colors"
            >
              Learn More
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
