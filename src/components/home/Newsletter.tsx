export default function Newsletter() {
  return (
    <section className="mx-auto max-w-7xl px-4 py-12 sm:px-6 md:py-16">
      <div className="border border-[#D7BEA0]/70 bg-[#FCF8F3] px-6 py-10 text-center sm:px-10 md:px-16">
        <p className="text-xs uppercase tracking-[0.3em] text-[#A47C4F]">
          Join the ritual
        </p>
        <h2 className="mt-3 font-serif text-2xl sm:text-3xl">
          Be first to know about new edits
        </h2>
        <p className="mx-auto mt-3 max-w-md text-sm text-[#79685B]">
          Sign up to receive subtle updates, curated picks and early access.
        </p>
        <form className="mx-auto mt-8 flex max-w-md flex-col gap-3 sm:flex-row">
          <label htmlFor="newsletter-email" className="sr-only">
            Email address
          </label>
          <input
            id="newsletter-email"
            type="email"
            placeholder="Enter your email"
            className="flex-1 border border-[#D7BEA0] bg-transparent px-4 py-3 text-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#A47C4F]/60"
            disabled
          />
          <button
            type="button"
            className="border border-[#A47C4F] px-6 py-3 text-xs uppercase tracking-[0.2em] text-[#A47C4F] transition hover:bg-[#A47C4F] hover:text-white"
            disabled
          >
            Notify me
          </button>
        </form>
        <p className="mt-3 text-xs text-[#79685B]">
          Newsletter form is a placeholder for now.
        </p>
      </div>
    </section>
  );
}
