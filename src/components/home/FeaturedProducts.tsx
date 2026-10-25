import Image from "next/image";
import Link from "next/link";
import products from "@/data/products";

export default function FeaturedProducts() {
  const featured = products.slice(0, 4);

  return (
    <section id="featured" className="mx-auto max-w-7xl px-4 py-12 sm:px-6 md:py-20">
      <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
        <div>
          <p className="text-xs uppercase tracking-[0.28em] text-[#A47C4F]">Curated for you</p>
          <h2 className="mt-3 font-[family-name:var(--font-serif)] text-3xl sm:text-4xl lg:text-5xl">The beauty edit</h2>
        </div>
        <Link href="/shop" className="text-sm text-[#A47C4F] transition hover:text-[#96744D] hover:underline">Explore all products →</Link>
      </div>
      <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {featured.map((product) => (
          <Link key={product.id} href={`/products/${product.slug}`} className="group">

            <article>
              <div className="relative aspect-[4/5] overflow-hidden border border-[#D7BEA0]/60 bg-[#E9D9C5]">
                <Image src={product.image} alt={`${product.name} - ${product.category} from Veloura`} fill sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw" className="object-cover transition duration-700 group-hover:scale-105" />

              </div>
              <div className="mt-4">
                <h3 className="font-[family-name:var(--font-serif)] text-xl">{product.name}</h3>
                <p className="mt-1 text-sm text-[#79685B]">{product.category}</p>
                <p className="mt-2 text-xs uppercase tracking-[0.24em] text-[#A47C4F]">View product</p>
              </div>
            </article>
          </Link>
        ))}
      </div>
    </section>
  );
}