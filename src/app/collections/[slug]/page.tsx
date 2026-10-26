import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { collections, getCollectionBySlug } from "@/data/collections";
import { getProductsByCategory } from "@/data/products";
import AddToCartButton from "@/components/products/AddToCartButton";

export function generateStaticParams() {
  return collections.map((collection) => ({ slug: collection.slug }));
}

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
  const collection = getCollectionBySlug(slug);

  if (!collection) {
    return {
      title: "Collection | VELOURA",
      description: "Veloura beauty collection.",
    };
  }

  return {
    title: `${collection.title} | VELOURA`,
    description: collection.description,
  };
}

export default async function CollectionPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const collection = getCollectionBySlug(slug);

  if (!collection) {
    notFound();
  }

  const products = getProductsByCategory(collection.category);

  return (
    <main className="min-h-screen bg-[#F8F1E9] text-[#49372D]">
      <section className="mx-auto max-w-7xl px-4 pt-6 pb-12 sm:px-6 sm:pt-6 md:pt-24 md:pb-16">
        <div className="mb-5">
          <Link
            href="/collections"
            className="inline-flex items-center gap-2 text-sm uppercase tracking-[0.2em] text-[#755638] transition hover:text-[#A47C4F] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#A47C4F]/70"
            aria-label="Back to Collections"
          >
            <svg
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.6"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden="true"
            >
              <line x1="19" y1="12" x2="5" y2="12" />
              <polyline points="12 19 5 12 12 5" />
            </svg>
            Back to Collections
          </Link>
        </div>

        <div className="mb-8 text-center">
          <p className="text-xs uppercase tracking-[0.28em] text-[#A47C4F]">
            Collection
          </p>
          <h1 className="mt-2 font-[family-name:var(--font-serif)] text-3xl sm:text-4xl lg:text-5xl">
            {collection.title}
          </h1>
          <p className="mx-auto mt-3 max-w-xl text-sm leading-7 text-[#79685B]">
            {collection.description}
          </p>
        </div>
        {products.length === 0 ? (
          <div className="border border-[#D7BEA0]/70 bg-[#FCF8F3] px-6 py-10 text-center">
            <p className="text-sm text-[#79685B]">
              No products are currently listed in this collection.
            </p>
          </div>
        ) : (
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {products.map((product) => {
              const price = formatUSD(product.price);
              return (
                <div key={product.id} className="group">
                  <article>
                    <Link
                      href={`/products/${product.slug}`}
                      className="focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#A47C4F]/70"
                    >
                      <div className="relative aspect-[4/5] overflow-hidden border border-[#D7BEA0]/60 bg-[#E9D9C5]">
                        <Image
                          src={product.image}
                          alt={`${product.name} - ${product.category} from Veloura`}
                          fill
                          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, (max-width: 1280px) 33vw, 25vw"
                          className="object-cover transition duration-700 group-hover:scale-105"
                        />
                      </div>
                      <div className="mt-4">
                        <h2 className="font-[family-name:var(--font-serif)] text-xl">
                          {product.name}
                        </h2>
                        <p className="mt-1 text-sm text-[#79685B]">
                          {product.category}
                        </p>
                        {price ? (
                          <p className="mt-2 text-sm text-[#49372D]">{price}</p>
                        ) : null}
                      </div>
                    </Link>
                    <AddToCartButton product={product} />
                  </article>
                </div>
              );
            })}
          </div>
        )}
      </section>
    </main>
  );
}
