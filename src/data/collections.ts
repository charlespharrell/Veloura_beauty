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
  },
  {
    slug: "lotions",
    title: "Lotions",
    description: "Lightweight hydration for skin that feels silky smooth.",
    category: "Lotions",
  },
  {
    slug: "body-wash",
    title: "Body Wash",
    description: "A gentle cleanse for a fresh, refined start.",
    category: "Body Wash",
  },
  {
    slug: "soaps",
    title: "Soaps",
    description: "Clean, classic bars for a simple ritual.",
    category: "Soaps",
  },
  {
    slug: "serums",
    title: "Serums",
    description: "Concentrated care to bring a subtle, lasting glow.",
    category: "Serums",
  },
  {
    slug: "cleansers",
    title: "Cleansers",
    description: "Purify without stripping, leaving skin soft and balanced.",
    category: "Cleansers",
  },
  {
    slug: "sunscreen",
    title: "Sunscreen",
    description: "Everyday protection, beautifully light.",
    category: "Sunscreen",
  },
  {
    slug: "hair-care",
    title: "Hair Care",
    description: "Nourishing oils for glossy, cared-for hair.",
    category: "Hair Care",
  },
  {
    slug: "makeup",
    title: "Makeup",
    description: "Soft, refined touches to complete your look.",
    category: "Makeup",
  },
  {
    slug: "beauty-sets",
    title: "Beauty Sets",
    description: "Curated sets designed to complete your ritual.",
    category: "Beauty Sets",
  },
];

export function getCollectionBySlug(slug: string): Collection | undefined {
  return collections.find((collection) => collection.slug === slug);
}
