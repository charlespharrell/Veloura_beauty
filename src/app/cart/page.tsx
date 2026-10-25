export default function CartPage() {
  return (
    <main className="min-h-screen bg-[#F8F1E9] text-[#49372D]">
      <section className="mx-auto max-w-7xl px-4 py-12 sm:px-6 md:py-16">
        <div className="mb-10 text-center">
          <p className="text-xs uppercase tracking-[0.28em] text-[#A47C4F]">
            Your selection
          </p>
          <h1 className="mt-3 font-[family-name:var(--font-serif)] text-3xl sm:text-4xl lg:text-5xl">
            Shopping bag
          </h1>
          <p className="mx-auto mt-4 max-w-xl text-sm leading-7 text-[#79685B]">
            Cart functionality is not implemented in this phase.
          </p>
        </div>
        <div className="border border-[#D7BEA0]/70 bg-[#FCF8F3] px-6 py-10 text-center">
          <p className="text-sm text-[#79685B]">Your bag is currently empty.</p>
        </div>
      </section>
    </main>
  );
}
