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

const Home = async () => {
  const latestProducts = await getLatestProducts();
  const featuredProducts = await getFeaturedProdcuts();

  return (
    <>
      {featuredProducts.length > 0 && (
        <ProductCarousel data={featuredProducts} />
      )}
      <ProductList data={latestProducts} title="Newest Arrivals" />
      <SafeBrowsingTrust />

      <DealCountdown />

      <IconBoxes />
      <FAQPage />

      <ViewAllProductsButton />
    </>
  );
};

export default Home;
