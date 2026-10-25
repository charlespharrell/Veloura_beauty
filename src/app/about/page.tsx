import Image from "next/image";
import Link from "next/link";

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-[#F8F1E9] text-[#49372D]">
      <section className="mx-auto max-w-7xl px-4 py-12 sm:px-6 md:py-16">
        <div className="grid items-center gap-10 md:grid-cols-2">
          <div>
            <p className="text-xs uppercase tracking-[0.28em] text-[#A47C4F]">
              Our story
            </p>
            <h1 className="mt-3 font-[family-name:var(--font-serif)] text-3xl sm:text-4xl lg:text-5xl">
              Beauty is your ritual.
            </h1>
            <p className="mt-6 text-base leading-8 text-[#79685B]">
              Veloura is a refined beauty boutique celebrating considered essentials for skin, body and hair. Every product is chosen with care to bring a sense of calm and quiet luxury to your everyday routine.
            </p>
            <p className="mt-4 text-base leading-8 text-[#79685B]">
              Cream is our canvas, champagne gold our whisper of detail, and warm brown our grounding note.
            </p>
            <div className="mt-8">
              <Link
                href="/shop"
                className="inline-flex items-center gap-3 bg-[#A47C4F] px-7 py-3 text-xs font-semibold uppercase tracking-[0.2em] text-white transition hover:bg-[#96744D]"
              >
                Discover the collection
                <span aria-hidden="true">→</span>
              </Link>
            </div>
          </div>
          <div className="relative overflow-hidden border border-[#D7BEA0]/70">
            <Image
              src="/images/Models/Model.avif"
              alt="Veloura brand story campaign image"
              width={1200}
              height={1500}
              className="h-[420px] w-full object-cover object-top sm:h-[520px]"
            />
          </div>
        </div>
      </section>
    </main>
  );
}
