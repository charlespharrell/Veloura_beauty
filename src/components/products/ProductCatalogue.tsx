"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useMemo, useState } from "react";
import products from "@/data/products";
import type { Product } from "@/types/product";
import AddToCartButton from "@/components/products/AddToCartButton";

const PAGE_SIZES = {
  mobile: 8,
  tablet: 12,
  desktop: 16,
} as const;

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

function getPageSize(width: number) {
  if (width < 640) return PAGE_SIZES.mobile;
  if (width < 1024) return PAGE_SIZES.tablet;
  return PAGE_SIZES.desktop;
}

function usePageSize() {
  const [size, setSize] = useState<number>(PAGE_SIZES.desktop);

  useEffect(() => {
    const update = () => {
      setSize(getPageSize(window.innerWidth));
    };
    update();
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, []);

  return size;
}

export default function ProductCatalogue() {
  const baseList = useMemo<Product[]>(() => getMixedSortedList(), []);
  const categories = useMemo(() => {
    const set = new Set<string>();
    for (const product of baseList) {
      if (product.category) set.add(product.category);
    }
    return Array.from(set).sort((a, b) => a.localeCompare(b));
  }, [baseList]);

  const [query, setQuery] = useState("");
  const [category, setCategory] = useState("all");
  const [sort, setSort] = useState("default");
  const [page, setPage] = useState(1);
  const pageSize = usePageSize();

  const filtered = useMemo(() => {
    let items = baseList;

    const normalizedQuery = query.trim().toLowerCase();
    if (normalizedQuery) {
      items = items.filter((product) =>
        product.name.toLowerCase().includes(normalizedQuery)
      );
    }

    if (category !== "all") {
      items = items.filter((product) => product.category === category);
    }

    if (sort === "price-asc") {
      items = [...items].sort((a, b) => {
        const ap =
          typeof a.price === "number" ? a.price : Number.POSITIVE_INFINITY;
        const bp =
          typeof b.price === "number" ? b.price : Number.POSITIVE_INFINITY;
        if (ap !== bp) return ap - bp;
        return a.name.localeCompare(b.name);
      });
    } else if (sort === "price-desc") {
      items = [...items].sort((a, b) => {
        const ap =
          typeof a.price === "number" ? a.price : Number.NEGATIVE_INFINITY;
        const bp =
          typeof b.price === "number" ? b.price : Number.NEGATIVE_INFINITY;
        if (ap !== bp) return bp - ap;
        return a.name.localeCompare(b.name);
      });
    } else if (sort === "name-asc") {
      items = [...items].sort((a, b) => a.name.localeCompare(b.name));
    }

    return items;
  }, [baseList, query, category, sort]);

  const totalPages = Math.max(1, Math.ceil(filtered.length / pageSize));
  const requestedPage = Math.min(Math.max(page, 1), totalPages);

  const paged = useMemo(() => {
    const start = (requestedPage - 1) * pageSize;
    return filtered.slice(start, start + pageSize);
  }, [filtered, requestedPage, pageSize]);

  const firstVisible = filtered.length === 0 ? 0 : (requestedPage - 1) * pageSize + 1;
  const lastVisible = Math.min(requestedPage * pageSize, filtered.length);

  const goToPage = (nextPage: number) => {
    const clamped = Math.min(Math.max(1, nextPage), totalPages);
    setPage(clamped);
    const el = document.getElementById("catalogue");
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  const handleQueryChange = (value: string) => {
    setQuery(value);
    setPage(1);
  };

  const handleCategoryChange = (value: string) => {
    setCategory(value);
    setPage(1);
  };

  const handleSortChange = (value: string) => {
    setSort(value);
    setPage(1);
  };

  const clearFilters = () => {
    setQuery("");
    setCategory("all");
    setSort("default");
    setPage(1);
  };

  return (
    <section id="catalogue" className="mx-auto max-w-7xl px-4 py-12 sm:px-6 md:py-16">
      <div className="mb-10 text-center">
        <p className="text-xs uppercase tracking-[0.28em] text-[#A47C4F]">
          Catalogue
        </p>
        <h2 className="mt-3 font-[family-name:var(--font-serif)] text-3xl sm:text-4xl">
          All products
        </h2>
        <p
          className="mx-auto mt-4 max-w-xl text-sm leading-7 text-[#79685B]"
          aria-live="polite"
        >
          {filtered.length} product{filtered.length === 1 ? "" : "s"}
          {filtered.length > 0
            ? ` · Showing ${firstVisible}–${lastVisible}`
            : ""}
        </p>
      </div>

      <div className="mb-8 grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-4">
        <div className="sm:col-span-2 lg:col-span-2">
          <label htmlFor="product-search" className="sr-only">
            Search products
          </label>
          <input
            id="product-search"
            type="search"
            value={query}
            onChange={(e) => handleQueryChange(e.target.value)}
            placeholder="Search by product name"
            className="w-full border border-[#D7BEA0]/70 bg-[#FCF8F3] px-4 py-2 text-sm text-[#49372D] placeholder:text-[#79685B]/70 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#A47C4F]/70"
          />
        </div>
        <div>
          <label htmlFor="product-category" className="sr-only">
            Filter by category
          </label>
          <select
            id="product-category"
            value={category}
            onChange={(e) => handleCategoryChange(e.target.value)}
            className="w-full border border-[#D7BEA0]/70 bg-[#FCF8F3] px-4 py-2 text-sm text-[#49372D] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#A47C4F]/70"
          >
            <option value="all">All Products</option>
            {categories.map((c) => (
              <option key={c} value={c}>
                {c}
              </option>
            ))}
          </select>
        </div>
        <div>
          <label htmlFor="product-sort" className="sr-only">
            Sort products
          </label>
          <select
            id="product-sort"
            value={sort}
            onChange={(e) => handleSortChange(e.target.value)}
            className="w-full border border-[#D7BEA0]/70 bg-[#FCF8F3] px-4 py-2 text-sm text-[#49372D] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#A47C4F]/70"
          >
            <option value="default">Default / Featured</option>
            <option value="price-asc">Price: Low to High</option>
            <option value="price-desc">Price: High to Low</option>
            <option value="name-asc">Name: A–Z</option>
          </select>
        </div>
      </div>

      {paged.length === 0 ? (
        <div
          className="border border-[#D7BEA0]/70 bg-[#FCF8F3] px-6 py-10 text-center"
          role="status"
        >
          <p className="text-sm text-[#79685B]">
            No products match your search or filters.
          </p>
          <button
            type="button"
            onClick={clearFilters}
            className="mt-5 border border-[#A47C4F] px-5 py-2 text-xs uppercase tracking-[0.2em] text-[#A47C4F] transition hover:bg-[#A47C4F] hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#A47C4F]/70"
          >
            Clear filters
          </button>
        </div>
      ) : (
        <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 sm:gap-6 lg:grid-cols-4">
          {paged.map((product) => {
            const price = formatUSD(product.price);
            return (
                <div
                  key={product.slug}
                  className="group flex h-full flex-col"
                >
                  <article className="flex h-full flex-col">
                    <Link
                      href={`/products/${product.slug}`}
                      className="focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#A47C4F]/70"
                    >
                      <div className="relative aspect-[4/5] overflow-hidden border border-[#D7BEA0]/60 bg-[#E9D9C5]">
                        <Image
                          src={product.image}
                          alt={`${product.name} - ${product.category} from Veloura`}
                          fill
                          sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
                          className="object-cover transition duration-700 group-hover:scale-105"
                          loading="lazy"
                        />
                      </div>
                      <div className="mt-3 flex flex-1 flex-col">
                        <h3 className="font-[family-name:var(--font-serif)] text-lg sm:text-xl">
                          {product.name}
                        </h3>
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

      {filtered.length > 0 ? (
        <nav
          className="mt-10 flex flex-wrap items-center justify-center gap-2"
          aria-label="Pagination"
        >
          <button
            type="button"
            onClick={() => goToPage(requestedPage - 1)}
            disabled={requestedPage <= 1}
            className="shrink-0 border border-[#D7BEA0]/70 px-3 py-2 text-xs uppercase tracking-[0.2em] text-[#755638] transition hover:text-[#A47C4F] disabled:opacity-40 disabled:hover:text-[#755638] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#A47C4F]/70 sm:px-4"
          >
          Previous
        </button>
        {Array.from({ length: totalPages }, (_, i) => i + 1).map((p) => (
          <button
            key={p}
            type="button"
            onClick={() => goToPage(p)}
            aria-label={`Go to page ${p}`}
            aria-current={p === requestedPage ? "page" : undefined}
            className={`min-w-9 shrink-0 border px-3 py-2 text-xs uppercase tracking-[0.2em] transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#A47C4F]/70 ${
              p === requestedPage
                ? "border-[#A47C4F] bg-[#A47C4F] text-white"
                : "border-[#D7BEA0]/70 text-[#755638] hover:text-[#A47C4F]"
            }`}
          >
            {p}
          </button>
        ))}
        <button
          type="button"
          onClick={() => goToPage(requestedPage + 1)}
          disabled={requestedPage >= totalPages}
          className="shrink-0 border border-[#D7BEA0]/70 px-3 py-2 text-xs uppercase tracking-[0.2em] text-[#755638] transition hover:text-[#A47C4F] disabled:opacity-40 disabled:hover:text-[#755638] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#A47C4F]/70 sm:px-4"
        >
            Next
          </button>
        </nav>
      ) : null}
    </section>
  );
}
