import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t border-[#D7BEA0]/60 bg-[#F8F1E9] px-4 py-10 sm:px-6">
      <div className="mx-auto grid max-w-7xl gap-8 md:grid-cols-4">
        <div className="md:col-span-2">
          <p className="font-[family-name:var(--font-serif)] text-2xl tracking-[0.24em] text-[#755638]">
            VELOURA
          </p>
          <p className="mt-2 text-xs italic tracking-[0.28em] text-[#A47C4F]">
            Your beauty. Your ritual.
          </p>
          <p className="mt-4 max-w-sm text-sm leading-7 text-[#79685B]">
            A refined beauty boutique celebrating considered essentials for skin, body and hair.
          </p>
        </div>
        <div>
          <p className="text-xs uppercase tracking-[0.24em] text-[#755638]">
            Explore
          </p>
          <ul className="mt-4 space-y-2 text-sm text-[#79685B]">
            <li>
              <Link href="/shop" className="transition hover:text-[#A47C4F]">
                Shop all
              </Link>
            </li>
            <li>
              <Link href="/collections/creams" className="transition hover:text-[#A47C4F]">
                Collections
              </Link>
            </li>
            <li>
              <Link href="/about" className="transition hover:text-[#A47C4F]">
                Our story
              </Link>
            </li>
          </ul>
        </div>
        <div>
          <p className="text-xs uppercase tracking-[0.24em] text-[#755638]">
            Discover
          </p>
          <ul className="mt-4 space-y-2 text-sm text-[#79685B]">
            <li>
              <Link href="/cart" className="transition hover:text-[#A47C4F]">
                Cart
              </Link>
            </li>
            <li>
              <span className="cursor-not-allowed opacity-70">Shipping & returns (coming soon)</span>
            </li>
            <li>
              <span className="cursor-not-allowed opacity-70">FAQ (coming soon)</span>
            </li>
          </ul>
        </div>
      </div>
      <div className="mx-auto mt-10 max-w-7xl border-t border-[#D7BEA0]/50 pt-6 text-center text-xs text-[#79685B]">
        <p>© 2026 Veloura. All rights reserved.</p>
      </div>
    </footer>
  );
}
