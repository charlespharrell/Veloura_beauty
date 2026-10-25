import Link from "next/link";
import { getCategories } from "@/data/products";

const categoryDisplay = [
  { name: "Cleansers", icon: "◈", slug: "cleansers" },
  { name: "Serums", icon: "❋", slug: "serums" },
  { name: "Creams", icon: "✧", slug: "creams" },
  { name: "Lotions", icon: "✦", slug: "lotions" },
  { name: "Sunscreen", icon: "☼", slug: "sunscreen" },
  { name: "Body Wash", icon: "♢", slug: "body-wash" },
  { name: "Soaps", icon: "◉", slug: "soaps" },
  { name: "Hair Care", icon: "✺", slug: "hair-care" },
  { name: "Makeup", icon: "✵", slug: "makeup" },
  { name: "Beauty Sets", icon: "✦", slug: "beauty-sets" },
];

export default function CategorySection() {
  const available = getCategories() as string[];
  const grid = categoryDisplay.filter((cat) => available.includes(cat.name));

  return (
    <section id="categories" className="border-y border-[#D7BEA0]/50 bg-[#FCF8F3] px-4 py-12 sm:px-6 sm:py-14">
      <div className="mx-auto max-w-7xl">
        <div className="mb-8 text-center">
          <p className="text-xs uppercase tracking-[0.28em] text-[#A47C4F]">
            Find your ritual
          </p>
          <h2 className="mt-3 font-[family-name:var(--font-serif)] text-3xl sm:text-4xl">
            Shop by category
          </h2>
        </div>
        <div className="grid grid-cols-2 gap-3 sm:grid-cols-4 lg:grid-cols-8">
          {grid.map((category) => (
            <Link
              key={category.name}
              href={`/collections/${category.slug}`}
              className="group flex min-h-28 flex-col items-center justify-center border border-[#D7BEA0]/60 bg-[#F8F1E9] px-2 py-5 text-center transition hover:-translate-y-1 hover:border-[#A47C4F]/70 hover:bg-white"
            >

              <span className="mb-3 text-lg text-[#A47C4F] transition group-hover:scale-110">
                {category.icon}
              </span>
              <span className="text-xs uppercase tracking-[0.16em]">
                {category.name}
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
