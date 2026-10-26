import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { collections } from "@/data/collections";

export const metadata: Metadata = {
  title: "Collections | VELOURA",
  description: "Explore beauty essentials thoughtfully chosen for your everyday ritual.",
};

const collectionImages: Record<string, string> = {
  creams: "/images/cream/Sesderma%20cream.avif",
  lotions: "/images/lotion/Necessaire%20lotion.avif",
  "body-wash": "/images/body%20wash/Green%20body%20wash.avif",
  soaps: "/images/soap/Pink%20soap.avif",
  serums: "/images/serum/Sesderma%20serum.avif",
  cleansers: "/images/cleanser/Isa%20tree%20cleanser.avif",
  sunscreen: "/images/sun%20screen/essence%20sun%20screen.avif",
  "hair-care": "/images/hair%20products/Brown%20hair%20oil.jpeg",
  makeup: "/images/makeup/multi%20color%20blush.jpg",
  "beauty-sets": "/images/set%20of%20produts/Lumin%20set.avif",
};

export default function CollectionsPage() {
  return (
    <main className="min-h-screen bg-[#F8F1E9] text-[#49372D]">
      <section className="relative w-full">
        <div className="relative h-[60vh] min-h-[420px] w-full sm:h-[70vh] md:h-[80vh]">
          <Image
            src="/images/Models/collection%20hero.jpeg"
            alt="Veloura editorial collection hero"
            fill
            priority
            sizes="100vw"
            className="object-cover object-[center_25%]"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#49372D]/65 via-[#49372D]/35 to-transparent" />
        </div>
        <div className="absolute inset-0 flex items-center">
          <div className="mx-auto w-full max-w-7xl px-4 sm:px-6">
            <div className="max-w-xl">
              <p className="text-xs uppercase tracking-[0.28em] text-[#F8F1E9]/90">
                Editorial
              </p>
              <h1 className="mt-3 font-[family-name:var(--font-serif)] text-3xl text-[#FCF8F3] sm:text-4xl lg:text-5xl">
                Discover Your Ritual
              </h1>
              <p className="mt-4 text-base leading-7 text-[#F8F1E9]/90 sm:text-lg">
                Explore beauty essentials thoughtfully chosen for your everyday routine.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 pb-12 pt-8 sm:px-6 sm:pt-10 md:pb-16 md:pt-12">
        <div className="mb-10 text-center md:mb-12">
          <p className="text-xs uppercase tracking-[0.28em] text-[#A47C4F]">
            OUR COLLECTIONS
          </p>
          <h2 className="mt-3 font-[family-name:var(--font-serif)] text-2xl sm:text-3xl lg:text-4xl">
            Find Your Everyday Essentials
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-sm leading-7 text-[#79685B] sm:text-base">
            From nourishing creams to refreshing cleansers, explore beauty essentials for every step of your routine.
          </p>
        </div>

        <div className="grid grid-cols-2 gap-4 sm:gap-6 md:grid-cols-3 lg:grid-cols-4">
          {collections.map((collection) => {
            const imageSrc = collectionImages[collection.slug];

            return (
              <Link
                key={collection.slug}
                href={`/collections/${collection.slug}`}
                className="group flex h-full flex-col focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#A47C4F]/70"
                aria-label={`Explore ${collection.title} collection`}
              >
                <article className="flex h-full flex-col overflow-hidden border border-[#D7BEA0]/60 bg-[#FCF8F3] shadow-sm transition-shadow duration-300 group-hover:shadow-md">
                  <div className="relative aspect-[4/5] w-full overflow-hidden bg-[#E9D9C5]">
                    {imageSrc ? (
                      <Image
                        src={imageSrc}
                        alt={`${collection.title} collection - Veloura editorial`}
                        fill
                        sizes="(max-width: 640px) 50vw, (max-width: 768px) 33vw, (max-width: 1024px) 33vw, 25vw"
                        className="object-cover transition duration-700 group-hover:scale-105"
                        loading="lazy"
                      />
                    ) : (
                      <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-[#E9D9C5] to-[#D7BEA0]/40">
                        <span className="font-[family-name:var(--font-serif)] text-lg text-[#755638]">
                          {collection.title}
                        </span>
                      </div>
                    )}
                  </div>
                  <div className="flex flex-1 flex-col px-4 py-5 sm:px-5">
                    <h2 className="font-[family-name:var(--font-serif)] text-xl sm:text-2xl">
                      {collection.title}
                    </h2>
                    <p className="mt-2 flex-1 text-sm leading-6 text-[#79685B]">
                      {collection.description}
                    </p>
                    <p className="mt-4 text-xs uppercase tracking-[0.24em] text-[#A47C4F]">
                      Explore collection
                    </p>
                  </div>
                </article>
              </Link>
            );
          })}
        </div>

        <div className="mt-12 text-center md:mt-16">
          <p className="font-[family-name:var(--font-serif)] text-2xl sm:text-3xl">
            Your beauty. Your ritual.
          </p>
          <div className="mt-6">
            <Link
              href="/products"
              className="inline-block bg-[#A47C4F] px-7 py-3 text-xs font-semibold uppercase tracking-[0.2em] text-white transition hover:bg-[#96744D] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#A47C4F]/70"
            >
              Browse all products
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
