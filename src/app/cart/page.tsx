"use client";

import Image from "next/image";
import Link from "next/link";
import { useCart } from "@/context/CartContext";

const formatUSD = (price?: number) => {
  if (typeof price !== "number" || Number.isNaN(price)) {
    return "$0.00";
  }
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
  }).format(price);
};

export default function CartPage() {
  const { items, updateQuantity, removeItem, subtotal } = useCart();

  if (items.length === 0) {
    return (
      <main className="min-h-screen bg-[#F8F1E9] text-[#49372D]">
        <section className="mx-auto max-w-7xl px-4 py-12 sm:px-6 md:py-16">
          <div className="mb-10 text-center">
            <p className="text-xs uppercase tracking-[0.28em] text-[#A47C4F]">
              Your selection
            </p>
            <h1 className="mt-3 font-[family-name:var(--font-serif)] text-3xl sm:text-4xl lg:text-5xl">
              Shopping bag
            </h1>
          </div>
          <div className="border border-[#D7BEA0]/70 bg-[#FCF8F3] px-6 py-10 text-center">
            <p className="text-sm text-[#79685B]">Your bag is currently empty.</p>
            <div className="mt-6">
              <Link
                href="/products"
                className="inline-block border border-[#A47C4F] px-7 py-3 text-xs uppercase tracking-[0.2em] text-[#A47C4F] transition hover:bg-[#A47C4F] hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#A47C4F]/70"
              >
                Continue Shopping
              </Link>
            </div>
          </div>
        </section>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-[#F8F1E9] text-[#49372D]">
      <section className="mx-auto max-w-7xl px-4 py-12 sm:px-6 md:py-16">
        <div className="mb-10 text-center">
          <p className="text-xs uppercase tracking-[0.28em] text-[#A47C4F]">
            Your selection
          </p>
          <h1 className="mt-3 font-[family-name:var(--font-serif)] text-3xl sm:text-4xl lg:text-5xl">
            Shopping bag
          </h1>
        </div>
        <div className="grid gap-10 lg:grid-cols-[2fr_1fr]">
          <div className="space-y-6">
            {items.map((item) => {
              const price = typeof item.price === "number" ? item.price : 0;
              const lineTotal = price * item.quantity;
              return (
                <div
                  key={item.id}
                  className="flex flex-col gap-4 border border-[#D7BEA0]/70 bg-[#FCF8F3] p-4 sm:flex-row sm:items-center"
                >
                  <div className="relative h-40 w-full overflow-hidden border border-[#D7BEA0]/60 bg-[#E9D9C5] sm:h-32 sm:w-32">
                    <Image
                      src={item.image}
                      alt={item.name}
                      fill
                      sizes="128px"
                      className="object-cover"
                    />
                  </div>
                  <div className="flex flex-1 flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                    <div>
                      <Link
                        href={`/products/${item.slug}`}
                        className="font-[family-name:var(--font-serif)] text-lg hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#A47C4F]/70"
                      >
                        {item.name}
                      </Link>
                      <p className="mt-1 text-sm text-[#79685B]">{item.category}</p>
                      <p className="mt-2 text-sm text-[#49372D]">{formatUSD(price)}</p>
                    </div>
                    <div className="flex items-center gap-4">
                      <div className="flex items-center border border-[#D7BEA0]/70">
                        <button
                          type="button"
                          onClick={() => updateQuantity(item.id, item.quantity - 1)}
                          className="px-3 py-2 text-sm text-[#755638] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#A47C4F]/70"
                          aria-label="Decrease quantity"
                        >
                          -
                        </button>
                        <span className="px-4 py-2 text-sm">{item.quantity}</span>
                        <button
                          type="button"
                          onClick={() => updateQuantity(item.id, item.quantity + 1)}
                          className="px-3 py-2 text-sm text-[#755638] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#A47C4F]/70"
                          aria-label="Increase quantity"
                        >
                          +
                        </button>
                      </div>
                      <p className="text-sm text-[#49372D]">{formatUSD(lineTotal)}</p>
                      <button
                        type="button"
                        onClick={() => removeItem(item.id)}
                        className="text-xs uppercase tracking-[0.2em] text-[#A47C4F] hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#A47C4F]/70"
                      >
                        Remove
                      </button>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
          <div className="border border-[#D7BEA0]/70 bg-[#FCF8F3] p-6 h-fit">
            <h2 className="font-[family-name:var(--font-serif)] text-xl">Order summary</h2>
            <div className="mt-4 flex items-center justify-between text-sm">
              <span className="text-[#79685B]">Subtotal</span>
              <span className="text-[#49372D]">{formatUSD(subtotal)}</span>
            </div>
            <div className="mt-6 flex flex-col gap-3">
              <Link
                href="/checkout"
                className="w-full bg-[#A47C4F] px-7 py-3 text-center text-xs font-semibold uppercase tracking-[0.2em] text-white transition hover:bg-[#96744D] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#A47C4F]/70"
              >
                Proceed to Checkout
              </Link>
              <Link
                href="/products"
                className="w-full border border-[#A47C4F] px-7 py-3 text-center text-xs uppercase tracking-[0.2em] text-[#A47C4F] transition hover:bg-[#A47C4F] hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#A47C4F]/70"
              >
                Continue Shopping
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
