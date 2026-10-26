import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import ProductCatalogue from "@/components/products/ProductCatalogue";

export const metadata: Metadata = {
  title: "Products | VELOURA",
  description: "Discover skincare essentials for your everyday ritual.",
};

export default function ProductsPage() {
  return (
    <main className="min-h-screen bg-[#F8F1E9] text-[#49372D]">
      <section className="relative overflow-hidden">
        <div className="relative h-[60vh] min-h-105 w-full sm:h-[70vh] md:h-[80vh]">
          <Image
            src="/images/Models/Herr model.jpeg"
            alt="Veloura model with radiant natural skin in warm cream and beige tones"
            fill
            priority
            sizes="100vw"
            className="object-cover object-[center_20%]"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#49372D]/60 via-[#49372D]/25 to-transparent" />
        </div>
        <div className="absolute inset-0 flex items-center">
          <div className="mx-auto w-full max-w-7xl px-4 sm:px-6">
            <div className="max-w-xl">
              <p className="text-xs uppercase tracking-[0.28em] text-[#F8F1E9]/90">
                Editorial
              </p>
              <h1 className="mt-3 font-[family-name:var(--font-serif)] text-3xl text-[#FCF8F3] sm:text-4xl lg:text-5xl">
                Your beauty. Your ritual.
              </h1>
              <p className="mt-4 text-base leading-7 text-[#F8F1E9]/90">
                Discover skincare essentials for your everyday routine.
              </p>
              <div className="mt-8">
                <Link
                  href="#catalogue"
                  className="inline-block bg-[#A47C4F] px-7 py-3 text-xs font-semibold uppercase tracking-[0.2em] text-white transition hover:bg-[#96744D] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#FCF8F3]/80"
                >
                  Explore products
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <ProductCatalogue />
    </main>
  );
}
