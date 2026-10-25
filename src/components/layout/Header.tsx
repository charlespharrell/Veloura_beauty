"use client";

import Link from "next/link";
import { useState } from "react";

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="border-b border-[#D7BEA0]/60 bg-[#F8F1E9]">
      
      <nav className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-4 sm:px-6 md:py-5">
        <div className="flex items-center">
          <Link href="/" aria-label="VELOURA home" className="text-left focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#A47C4F]/70">
            <span className="block font-(family-name:--font-serif) text-2xl tracking-[0.24em] text-[#755638] sm:text-3xl">
              VELOURA
            </span>
          </Link>
        </div>

        <button
          className="md:hidden text-sm uppercase tracking-[0.2em] text-[#755638] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#A47C4F]/70"
          aria-label="Toggle navigation menu"
          aria-expanded={open}
          onClick={() => setOpen(!open)}
        >
          Menu
        </button>

        <div className="hidden items-center gap-6 md:flex">
          <Link
            href="/products"
            className="text-sm uppercase tracking-[0.2em] text-[#755638] transition hover:text-[#A47C4F] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#A47C4F]/70"
          >
            Products
          </Link>
          <Link
            href="/collections"
            className="text-sm uppercase tracking-[0.2em] text-[#755638] transition hover:text-[#A47C4F] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#A47C4F]/70"
          >
            Collections
          </Link>
          <Link
            href="/about"
            className="text-sm uppercase tracking-[0.2em] text-[#755638] transition hover:text-[#A47C4F] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#A47C4F]/70"
          >
            About
          </Link>
          <Link
            href="/cart"
            aria-label="Shopping cart"
            className="flex items-center gap-1 text-[#755638] transition hover:text-[#A47C4F] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#A47C4F]/70"
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
            <span className="sr-only">Shopping cart</span>
          </Link>
        </div>
      </nav>
    </header>
  );
}
