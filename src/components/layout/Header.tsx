"use client";

import Link from "next/link";
import { useCart } from "@/context/CartContext";

export default function Header() {
  const { totalQuantity } = useCart();

  return (
    <header className="fixed top-0 left-0 right-0 z-50 border-b border-[#D7BEA0]/60 bg-[#F8F1E9]">
      <nav className="mx-auto flex max-w-7xl items-center justify-between gap-2 px-4 py-3 sm:gap-4 sm:px-6 md:py-4">
        <div className="flex items-center min-w-0">
          <Link
            href="/"
            aria-label="VELOURA home"
            className="text-left focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#A47C4F]/70"
          >
            <span className="block font-(family-name:--font-serif)  text-[#755638] sm:text-2xl md:text-3xl">
              VELOURA
            </span>
          </Link>
        </div>

        <div className="flex flex-1 items-center justify-center gap-3 sm:gap-4 md:gap-6 min-w-0">
          <Link
            href="/products"
            className="text-xs uppercase  text-[#755638] transition hover:text-[#A47C4F] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#A47C4F]/70 sm:text-sm sm:tracking-[0.2em]"
          >
            Products
          </Link>
          <Link
            href="/collections"
            className="text-xs uppercase  text-[#755638] transition hover:text-[#A47C4F] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#A47C4F]/70 sm:text-sm sm:tracking-[0.2em]"
          >
            Collections
          </Link>
        </div>

        <div className="flex items-center">
          <Link
            href="/cart"
            aria-label={`Shopping cart${totalQuantity > 0 ? `, ${totalQuantity} items` : ""}`}
            className="relative flex items-center text-[#755638] transition hover:text-[#A47C4F] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#A47C4F]/70"
          >
            <svg
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.6"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden="true"
            >
              <path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z" />
              <line x1="3" y1="6" x2="21" y2="6" />
              <path d="M16 10a4 4 0 0 1-8 0" />
            </svg>
            {totalQuantity > 0 ? (
              <span className="absolute -right-2 -top-2 flex h-4 min-w-4 items-center justify-center rounded-full bg-[#A47C4F] px-1 text-[10px] text-white">
                {totalQuantity}
              </span>
            ) : null}
            <span className="sr-only">Shopping cart</span>
          </Link>
        </div>
      </nav>
    </header>
  );
}
