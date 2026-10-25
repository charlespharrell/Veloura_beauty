import products from "@/data/products";
import type { Product, ProductCategory } from "@/types/product";

export function getAllProducts(): Product[] {
  return products;
}

export function getProductBySlug(slug: string): Product | undefined {
  return products.find((product) => product.slug === slug);
}

export function getProductsByCategory(category: ProductCategory): Product[] {
  return products.filter((product) => product.category === category);
}

export function getProductsByCategoryDir(categoryDir: string): Product[] {
  return products.filter((product) => product.categoryDir === categoryDir);
}

export const categoryLabelMap: Record<string, ProductCategory> = {
  cream: "Creams",
  lotion: "Lotions",
  "body wash": "Body Wash",
  soap: "Soaps",
  serum: "Serums",
  cleanser: "Cleansers",
  "sun screen": "Sunscreen",
  "hair products": "Hair Care",
  makeup: "Makeup",
  "set of produts": "Beauty Sets",
};
