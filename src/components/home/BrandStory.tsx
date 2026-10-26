import Link from "next/link";

export default function BrandStory() {
  return (
    <section id="about" className="bg-[#E9D9C5] px-4 py-12 text-center sm:px-6 md:py-20">
      <p className="text-xs uppercase tracking-[0.32em] text-[#A47C4F]">
        A moment for yourself
      </p>
      <h2 className="mx-auto mt-4 max-w-3xl font-[family-name:var(--font-serif)] text-3xl leading-tight sm:text-4xl lg:text-5xl">
        Beauty is not just a routine.
        <span className="italic text-[#A47C4F]"> It is your ritual.</span>
      </h2>
      <p className="mx-auto mt-5 max-w-lg text-sm leading-8 text-[#79685B]">
        Veloura brings together refined, considered essentials — designed to make space for you, every single day.
      </p>
      
    </section>
  );
}
