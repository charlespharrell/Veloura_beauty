import Image from "next/image";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative overflow-hidden">
            <div className="relative h-[60vh] min-h-105 w-full sm:h-[70vh] md:h-[80vh]">
              <Image
                src="/images/Models/Hero model.jpeg"
                alt="Veloura model with radiant natural skin in warm cream and beige tones"
                fill
                priority
                sizes="100vw"
                className="object-cover object-[center_20%]"
              />
              <div className="absolute inset-0 bg-linear-to- from-[#49372D]/60 via-[#49372D]/25 to-transparent" />
            </div>
            <div className="absolute inset-0 flex items-center">
              <div className="mx-auto w-full max-w-7xl px-4 sm:px-6">
                <div className="max-w-xl">
                  <p className="mb-5 text-xs font-medium uppercase tracking-[0.32em] text-[#A47C4F]">
                    The Veloura collection
                  </p>
                  <h1 className="font-(family-name:--font-serif) text-4xl leading-tight sm:text-5xl lg:text-6xl xl:text-7xl">
                    Your beauty.
                      <br />
                    <span className="italic text-[#A47C4F]">Your ritual.</span>
                  
                  </h1>
                  <p className="mt-3 max-w-sm text-base leading-8 text-[#F8F1E9]/90">
                    Thoughtfully curated beauty essentials for your skin,  body and hair. Make every moment feel a little more luxurious.
                  </p>
                  <Link
                      href="/products"
                      className="mt-4 inline-flex items-center gap-3 bg-[#A47C4F] px-7 py-3 text-xs font-semibold uppercase tracking-[0.2em] text-white transition hover:bg-[#96744D] focus-visible:outline-offset-4"
                    >
                      Discover Veloura
                      <span aria-hidden="true">→</span>
                    </Link>
                    <p className="mt-3 text-xs tracking-[0.24em] text-[#F8F1E9]/90">
                      A CONSIDERED COLLECTION. A RITUAL OF YOUR OWN.
                    </p>
                </div>
                
              </div>
            </div>
    </section>
  );
}
