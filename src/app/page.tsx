import Hero from "@/components/home/Hero";
import CategorySection from "@/components/home/CategorySection";
import FeaturedProducts from "@/components/home/FeaturedProducts";
import CampaignSection from "@/components/home/CampaignSection";
import CollectionsPreview from "@/components/home/CollectionsPreview";
import BrandStory from "@/components/home/BrandStory";
import Newsletter from "@/components/home/Newsletter";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#F8F1E9] text-[#49372D]">
      <Hero />
      <CategorySection />
      <FeaturedProducts />
      <CampaignSection />
      <CollectionsPreview />
      <BrandStory />
      <Newsletter />
    </main>
  );
}
