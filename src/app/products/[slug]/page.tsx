import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getProductBySlug } from "@/data/products";

const formatUSD = (price?: number) => {
  if (typeof price !== "number" || Number.isNaN(price)) {
    return null;
  }
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
  }).format(price);
};

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const product = getProductBySlug(slug);

  if (!product) {
    return {
      title: "Product | VELOURA",
      description: "Veloura beauty product.",
    };
  }

  return {
    title: `${product.name} | VELOURA`,
    description: `${product.name} - ${product.category} from Veloura.`,
  };
}

export default async function ProductPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const product = getProductBySlug(slug);

  if (!product) {
    notFound();
  }

  const price = formatUSD(product.price);

  return (
    <main className="min-h-screen bg-[#F8F1E9] text-[#49372D]">
      <section className="mx-auto grid max-w-7xl items-center gap-10 px-4 py-12 sm:px-6 md:grid-cols-2 md:py-16">
        <div className="relative aspect-[4/5] overflow-hidden border border-[#D7BEA0]/70 bg-[#E9D9C5]">
          <Image
            src={product.image}
            alt={`${product.name} from Veloura`}
            fill
            sizes="(max-width: 768px) 100vw, 50vw"
            className="object-cover"
            priority
          />
        </div>
        <div className="max-w-xl">
          <p className="text-xs uppercase tracking-[0.28em] text-[#A47C4F]">
            {product.category}
          </p>
          <h1 className="mt-3 font-[family-name:var(--font-serif)] text-3xl sm:text-4xl lg:text-5xl">
            {product.name}
          </h1>
          {price ? (
            <p className="mt-4 text-lg text-[#49372D]">{price}</p>
          ) : null}
          <p className="mt-6 text-base leading-8 text-[#79685B]">
            A considered Veloura essential from our verified collection.
          </p>
          <div className="mt-8 flex flex-wrap items-center gap-4">
            <button
              type="button"
              className="bg-[#A47C4F] px-7 py-3 text-xs font-semibold uppercase tracking-[0.2em] text-white transition hover:bg-[#96744D]"
              disabled
            >
              Add to cart (coming soon)
            </button>
            <Link
              href="/shop"
              className="border border-[#A47C4F] px-7 py-3 text-xs font-semibold uppercase tracking-[0.2em] text-[#A47C4F] transition hover:bg-[#A47C4F] hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#A47C4F]/70"
            >
              Back to shop
            </Link>
          </div>
          <p className="mt-6 text-xs uppercase tracking-[0.24em] text-[#A47C4F]">
            Product details coming soon
          </p>
        </div>
      </section>
    </main>
  );
}
