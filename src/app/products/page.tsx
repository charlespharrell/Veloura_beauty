import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import products from "@/data/products";

export const metadata: Metadata = {
  title: "Products | VELOURA",
  description: "Discover skincare essentials for your everyday ritual.",
};

const formatUSD = (price?: number) => {
  if (typeof price !== "number" || Number.isNaN(price)) {
    return null;
  }
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
  }).format(price);
};

const mixedOrder = [
  "Cleansers",
  "Serum",
  "Serums",
  "Cream",
  "Creams",
  "Body Wash",
  "Sunscreens",
  "Sunscreen",
  "Lotion",
  "Lotions",
  "Soap",
  "Soaps",
  "Hair Care",
  "Makeup",
  "Set",
  "Sets",
];

function getMixedSortedList() {
  const items = [...products];
  items.sort((a, b) => {
    const ia = mixedOrder.findIndex((m) =>
      (a.category || "").toLowerCase().includes(m.toLowerCase())
    );
    const ib = mixedOrder.findIndex((m) =>
      (b.category || "").toLowerCase().includes(m.toLowerCase())
    );
    const ca = ia === -1 ? 999 : ia;
    const cb = ib === -1 ? 999 : ib;
    if (ca !== cb) return ca - cb;
    return a.name.localeCompare(b.name);
  });
  return items;
}

export default function ProductsPage() {
  const list = getMixedSortedList();

  return (
    <main className="min-h-screen bg-[#F8F1E9] text-[#49372D]">
      <section className="relative overflow-hidden">
        <div className="relative h-[60vh] min-h-[420px] w-full sm:h-[70vh] md:h-[80vh]">
          <Image
            src="/images/Models/herr model.jpeg"
            alt="Veloura model with radiant natural skin in warm cream and beige tones"
            fill
            priority
            sizes="100vw"
            className="object-cover object-[center_10%]"
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

      <section id="catalogue" className="mx-auto max-w-7xl px-4 py-12 sm:px-6 md:py-16">
        <div className="mb-10 text-center">
          <p className="text-xs uppercase tracking-[0.28em] text-[#A47C4F]">
            Catalogue
          </p>
          <h2 className="mt-3 font-[family-name:var(--font-serif)] text-3xl sm:text-4xl">
            All products
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-sm leading-7 text-[#79685B]">
            {list.length} product{list.length === 1 ? "" : "s"}
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {list.map((product) => {
            const price = formatUSD(product.price);
            return (
              <Link
                key={product.id}
                href={`/products/${product.slug}`}
                className="group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#A47C4F]/70"
              >
                <article>
                  <div className="relative aspect-[4/5] overflow-hidden border border-[#D7BEA0]/60 bg-[#E9D9C5]">
                    <Image
                      src={product.image}
                      alt={`${product.name} - ${product.category} from Veloura`}
                      fill
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, (max-width: 1280px) 33vw, 25vw"
                      className="object-cover transition duration-700 group-hover:scale-105"
                      loading="lazy"
                    />
                  </div>
                  <div className="mt-4">
                    <h3 className="font-[family-name:var(--font-serif)] text-xl">
                      {product.name}
                    </h3>
                    <p className="mt-1 text-sm text-[#79685B]">
                      {product.category}
                    </p>
                    {price ? (
                      <p className="mt-2 text-sm text-[#49372D]">{price}</p>
                    ) : null}
                    <p className="mt-2 text-xs uppercase tracking-[0.24em] text-[#A47C4F]">
                      View product
                    </p>
                  </div>
                </article>
              </Link>
            );
          })}
        </div>
      </section>
    </main>
  );
}
