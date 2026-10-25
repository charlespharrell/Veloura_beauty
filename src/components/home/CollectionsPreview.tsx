import Image from "next/image";
import Link from "next/link";

export default function CollectionsPreview() {
  return (
    <section id="collections" className="mx-auto max-w-7xl px-4 py-12 sm:px-6 md:py-20">
      <div className="mb-10 text-center">
        <p className="text-xs uppercase tracking-[0.28em] text-[#A47C4F]">
          Curated sets
        </p>
        <h2 className="mt-3 font-[family-name:var(--font-serif)] text-3xl sm:text-4xl">
          Beauty sets, thoughtfully paired
        </h2>
        <p className="mx-auto mt-4 max-w-xl text-sm leading-7 text-[#79685B]">
          Complete your ritual with coordinated collections designed to work in harmony.
        </p>
      </div>
      <div className="grid gap-6 md:grid-cols-2">
        <Link href="/collections/beauty-sets" className="group relative overflow-hidden border border-[#D7BEA0]/70">
          <Image
            src="/images/set%20of%20produts/The%20ordinary%20set.avif"
            alt="The Ordinary Set - curated beauty collection"
            width={1600}
            height={900}
            className="h-[320px] w-full object-cover transition duration-700 group-hover:scale-105 sm:h-[380px]"
          />
          <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-[rgba(73,55,45,0.9)] via-[rgba(73,55,45,0.5)] to-transparent p-6 sm:p-8">
            <p className="text-xs uppercase tracking-[0.3em] text-[#E9D9C5]">
              Sets designed to complete your ritual
            </p>
            <h3 className="mt-2 font-[family-name:var(--font-serif)] text-2xl text-white sm:text-3xl">
              The Curated Edit
            </h3>
            <p className="mt-3 inline-flex items-center gap-2 text-xs uppercase tracking-[0.22em] text-[#E9D9C5]">
              Shop sets <span aria-hidden="true">→</span>
            </p>
          </div>
        </Link>
        <Link href="/collections/beauty-sets" className="group relative overflow-hidden border border-[#D7BEA0]/70">
          <Image
            src="/images/set%20of%20produts/Lumin%20set.avif"
            alt="Lumin Set - curated beauty collection"
            width={1600}
            height={900}
            className="h-[320px] w-full object-cover transition duration-700 group-hover:scale-105 sm:h-[380px]"
          />
          <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-[rgba(73,55,45,0.9)] via-[rgba(73,55,45,0.5)] to-transparent p-6 sm:p-8">
            <p className="text-xs uppercase tracking-[0.3em] text-[#E9D9C5]">
              Radiance in perfect harmony
            </p>
            <h3 className="mt-2 font-[family-name:var(--font-serif)] text-2xl text-white sm:text-3xl">
              Lumin Collection
            </h3>
            <p className="mt-3 inline-flex items-center gap-2 text-xs uppercase tracking-[0.22em] text-[#E9D9C5]">
              Shop sets <span aria-hidden="true">→</span>
            </p>
          </div>
        </Link>
      </div>
    </section>
  );
}
