export interface Collection {
  slug: string;
  title: string;
  description: string;
  category: import("@/types/product").ProductCategory;
  heroImage?: string;
}

export const collections: Collection[] = [
  {
    slug: "creams",
    title: "Creams",
    description: "Soft, comforting creams to nourish and replenish.",
    category: "Creams",
    heroImage: "/images/Models/collection%20model.jpeg",
  },
  {
    slug: "lotions",
    title: "Lotions",
    description: "Lightweight hydration for skin that feels silky smooth.",
    category: "Lotions",
    heroImage: "/images/Models/collection%20hero.jpeg",
  },
  {
    slug: "body-wash",
    title: "Body Wash",
    description: "A gentle cleanse for a fresh, refined start.",
    category: "Body Wash",
    heroImage: "/images/Models/Body%20wash%20model.avif",
  },
  {
    slug: "soaps",
    title: "Soaps",
    description: "Clean, classic bars for a simple ritual.",
    category: "Soaps",
    heroImage: "/images/Models/Soap%20model.webp",
  },
  {
    slug: "serums",
    title: "Serums",
    description: "Concentrated care to bring a subtle, lasting glow.",
    category: "Serums",
    heroImage: "/images/Models/collection%20model.jpeg",
  },
  {
    slug: "cleansers",
    title: "Cleansers",
    description: "Purify without stripping, leaving skin soft and balanced.",
    category: "Cleansers",
    heroImage: "/images/Models/collection%20hero.jpeg",
  },
  {
    slug: "sunscreen",
    title: "Sunscreen",
    description: "Everyday protection, beautifully light.",
    category: "Sunscreen",
    heroImage: "/images/Models/Hero%20model.jpeg",
  },
  {
    slug: "hair-care",
    title: "Hair Care",
    description: "Nourishing oils for glossy, cared-for hair.",
    category: "Hair Care",
    heroImage: "/images/Models/Hair%20model.jpg",
  },
  {
    slug: "makeup",
    title: "Makeup",
    description: "Soft, refined touches to complete your look.",
    category: "Makeup",
    heroImage: "/images/Models/Makeup%20model.jpg",
  },
  {
    slug: "beauty-sets",
    title: "Beauty Sets",
    description: "Curated sets designed to complete your ritual.",
    category: "Beauty Sets",
    heroImage: "/images/Models/Models.avif",
  },
];

export function getCollectionBySlug(slug: string): Collection | undefined {
  return collections.find((collection) => collection.slug === slug);
}
