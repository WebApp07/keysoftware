import DealCountdown from "@/components/deal-countdown";
import IconBoxes from "@/components/icon-boxes";
import ProductCarousel from "@/components/shared/product/product-carousel";
import ProductList from "@/components/shared/product/product-list";
import ViewAllProductsButton from "@/components/view-all-products-button";
import {
  getLatestProducts,
  getFeaturedProdcuts,
} from "@/lib/actions/product.actions";
import FAQPage from "@/components/FAQ";
import SafeBrowsingTrust from "@/components/SafeBrowsingTrust";
import ReviewsSection from "../../components/ReviewsSection";
import { Suspense } from "react";
import CollectionsSection from "@/components/shared/collections-section";
import CollectionsSkeleton from "@/components/shared/collections-section-skeleton";
const Home = async () => {
  const latestProducts = await getLatestProducts();
  const featuredProducts = await getFeaturedProdcuts();

  return (
    <>
      {featuredProducts.length > 0 && (
        <ProductCarousel data={featuredProducts} />
      )}
      <ProductList data={latestProducts} title="Newest Arrivals" />
      <Suspense fallback={<CollectionsSkeleton />}>
        <CollectionsSection />
      </Suspense>
      <SafeBrowsingTrust />

      <DealCountdown />

      <IconBoxes />
      <ReviewsSection />
      <FAQPage />

      <ViewAllProductsButton />
    </>
  );
};

export default Home;
