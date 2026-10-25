export type ProductCategory =
  | "Creams"
  | "Lotions"
  | "Body Wash"
  | "Soaps"
  | "Serums"
  | "Cleansers"
  | "Sunscreen"
  | "Hair Care"
  | "Makeup"
  | "Beauty Sets";

export interface Product {
  id: string;
  name: string;
  slug: string;
  category: ProductCategory;
  categoryDir: string;
  image: string;
  originalName: string;
  price?: number;
}

