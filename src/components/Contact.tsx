export default function Contact() {
  return (
    <section
      id="contact"
      className="relative flex min-h-[80svh] items-center overflow-hidden bg-[#0b0d0c] px-5 py-24 text-[#f4f0e8] sm:px-8 md:px-12"
    >
      <div className="mx-auto w-full max-w-7xl">
        <p className="mb-6 text-xs uppercase tracking-[0.4em] text-white/40">
          05 / 05
        </p>

        <h2 className="max-w-5xl text-[16vw] font-medium leading-[0.82] tracking-[-0.07em] sm:text-7xl md:text-8xl lg:text-9xl">
          YOUR
          <br />
          JOURNEY
          <br />
          STARTS
          <br />
          HERE.
        </h2>

        <div className="mt-12">
          <a
            href="mailto:hello@karakorumtrails.com"
            className="group inline-flex items-center gap-5 border-b border-white/30 pb-4 text-xs uppercase tracking-[0.25em] transition-colors hover:border-white sm:text-sm"
          >
            Plan your journey

            <span className="transition-transform duration-300 group-hover:translate-x-2">
              →
            </span>
          </a>
        </div>
      </div>
    </section>
  );
}