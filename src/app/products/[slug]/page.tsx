import type { Metadata } from "next";
import products, { getProductBySlug } from "@/data/products";
import ProductDetailClient from "@/components/products/ProductDetailClient";

export function generateStaticParams() {
  return products.map((product) => ({ slug: product.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const product = getProductBySlug(slug);

  if (!product) {
    return {
      title: "Product | VELOURA",
      description: "Veloura beauty product.",
    };
  }

  return {
    title: `${product.name} | VELOURA`,
    description: `${product.name} - ${product.category} from Veloura.`,
  };
}

export default async function ProductPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const product = getProductBySlug(slug);

  if (!product) {
    const { notFound } = await import("next/navigation");
    notFound();
  }

  return <ProductDetailClient product={product as any} />;
}
