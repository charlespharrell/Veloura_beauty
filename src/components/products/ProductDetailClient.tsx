"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { useCart } from "@/context/CartContext";
import type { Product } from "@/types/product";

const formatUSD = (price?: number) => {
  if (typeof price !== "number" || Number.isNaN(price)) {
    return null;
  }
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
  }).format(price);
};

export default function ProductDetailClient({ product }: { product: Product }) {
  const { addItem } = useCart();
  const [added, setAdded] = useState(false);
  const price = formatUSD(product.price);

  const handleAddToCart = () => {
    addItem({
      id: product.id,
      slug: product.slug,
      name: product.name,
      price: product.price,
      image: product.image,
      category: product.category,
    });
    setAdded(true);
    setTimeout(() => setAdded(false), 1500);
  };

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
              onClick={handleAddToCart}
              className="bg-[#A47C4F] px-7 py-3 text-xs font-semibold uppercase tracking-[0.2em] text-white transition hover:bg-[#96744D] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#A47C4F]/70"
            >
              {added ? "Added to cart" : "Add to cart"}
            </button>
            <Link
              href="/products"
              className="border border-[#A47C4F] px-7 py-3 text-xs font-semibold uppercase tracking-[0.2em] text-[#A47C4F] transition hover:bg-[#A47C4F] hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#A47C4F]/70"
            >
              Back to products
            </Link>
          </div>
          {added ? (
            <p className="mt-4 text-sm text-[#755638]">Added to your bag.</p>
          ) : null}
        </div>
      </section>
    </main>
  );
}
