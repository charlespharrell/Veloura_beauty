import Image from "next/image";
import Link from "next/link";
import products from "@/data/products";

export default function ShopPage() {
  return (
    <main className="min-h-screen bg-[#F8F1E9] text-[#49372D]">
      <section className="mx-auto max-w-7xl px-4 py-12 sm:px-6 md:py-16">
        <div className="mb-10 text-center">
          <p className="text-xs uppercase tracking-[0.28em] text-[#A47C4F]">All products</p>
          <h1 className="mt-3 font-[family-name:var(--font-serif)] text-3xl sm:text-4xl lg:text-5xl">The complete edit</h1>
          <p className="mx-auto mt-4 max-w-xl text-sm leading-7 text-[#79685B]">Browse the full Veloura catalogue, curated from our verified product collection.</p>
        </div>
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {products.map((product) => (
            <Link key={product.id} href={/products/} className="group">
              <article>
                <div className="relative aspect-[4/5] overflow-hidden border border-[#D7BEA0]/60 bg-[#E9D9C5]">
                  <Image src={product.image} alt={`${product.name} - ${product.category} from Veloura`} fill sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, (max-width: 1280px) 33vw, 25vw" className="object-cover transition duration-700 group-hover:scale-105" />

                </div>
                <div className="mt-4">
                  <h2 className="font-[family-name:var(--font-serif)] text-xl">{product.name}</h2>
                  <p className="mt-1 text-sm text-[#79685B]">{product.category}</p>
                  <p className="mt-2 text-xs uppercase tracking-[0.24em] text-[#A47C4F]">View product</p>
                </div>
              </article>
            </Link>
          ))}
        </div>
      </section>
    </main>
  );
}