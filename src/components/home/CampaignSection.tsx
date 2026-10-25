import Image from "next/image";
import Link from "next/link";

export default function CampaignSection() {
  return (
    <section className="bg-[#FCF8F3] px-4 py-12 sm:px-6 md:py-20">
      <div className="mx-auto grid max-w-7xl items-center gap-10 lg:grid-cols-2">
        <div className="relative overflow-hidden border border-[#D7BEA0]/70">
          <Image
            src="/images/Models/Hair model.jpg"
            alt="A model with flowing hair showcasing Veloura hair care essentials"
            width={1400}
            height={1600}
            className="h-[380px] w-full object-cover sm:h-[460px] lg:h-[560px]"
          />
        </div>
        <div className="max-w-xl">
          <p className="text-xs uppercase tracking-[0.3em] text-[#A47C4F]">
            Softly radiant
          </p>
          <h2 className="mt-4 font-[family-name:var(--font-serif)] text-3xl leading-tight sm:text-4xl lg:text-5xl">
            Care that lingers.
            <br />
            <span className="italic text-[#A47C4F]">A ritual worth keeping.</span>
          </h2>
          <p className="mt-6 text-base leading-8 text-[#79685B]">
            From silky cleansers to weightless oils, Veloura brings a sense of calm and refinement to your everyday routine.
          </p>
          <Link
            href="/collections/hair-care"
            className="mt-8 inline-flex items-center gap-3 border border-[#A47C4F] px-7 py-3 text-xs font-semibold uppercase tracking-[0.2em] text-[#A47C4F] transition hover:bg-[#A47C4F] hover:text-white"
          >
            View the edit
            <span aria-hidden="true">→</span>
          </Link>
        </div>
      </div>
    </section>
  );
}
