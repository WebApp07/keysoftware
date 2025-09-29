import ProductCard from "@/components/shared/product/product-card";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import {
  getAllProducts,
  getAllCategories,
} from "@/lib/actions/product.actions";
import { SearchIcon, FilterIcon, XIcon, StarIcon, ChevronDownIcon } from "lucide-react";
import Link from "next/link";

const prices = [
  { name: "Any Price", value: "all" },
  { name: "$1 to $50", value: "1-50" },
  { name: "$51 to $100", value: "51-100" },
  { name: "$101 to $200", value: "101-200" },
  { name: "$201 to $500", value: "201-500" },
  { name: "$501 to $1000", value: "501-1000" },
];

const ratings = [5,4, 3, 2, 1];

const sortOrders = [
  { name: "Newest", value: "newest" },
  { name: "Price: Low to High", value: "lowest" },
  { name: "Price: High to Low", value: "highest" },
  { name: "Highest Rated", value: "rating" },
];

export async function generateMetadata(props: {
  searchParams: Promise<{
    q: string;
    category: string;
    price: string;
    rating: string;
  }>;
}) {
  const {
    q = "all",
    category = "all",
    price = "all",
    rating = "all",
  } = await props.searchParams;

  const isQuerySet = q && q !== "all" && q.trim() !== "";
  const isCategorySet = category && category !== "all" && category.trim() !== "";
  const isPriceSet = price && price !== "all" && price.trim() !== "";
  const isRatingSet = rating && rating !== "all" && rating.trim() !== "";

  if (isQuerySet || isCategorySet || isPriceSet || isRatingSet) {
    return {
      title: `Search ${isQuerySet ? q : ""} ${isCategorySet ? `: Category ${category}` : ""} ${isPriceSet ? `: Price ${price}` : ""} ${isRatingSet ? `: Rating ${rating}` : ""}`,
    };
  } else {
    return {
      title: "Search Products",
    };
  }
}

const SearchPage = async (props: {
  searchParams: Promise<{
    q?: string;
    category?: string;
    price?: string;
    rating?: string;
    sort?: string;
    page?: string;
  }>;
}) => {
  const {
    q = "all",
    category = "all",
    price = "all",
    rating = "all",
    sort = "newest",
    page = "1",
  } = await props.searchParams;

  // Construct filter url
  const getFilterUrl = ({
    c,
    p,
    s,
    r,
    pg,
  }: {
    c?: string;
    p?: string;
    s?: string;
    r?: string;
    pg?: string;
  }) => {
    const params = { q, category, price, rating, sort, page };

    if (c) params.category = c;
    if (p) params.price = p;
    if (s) params.sort = s;
    if (r) params.rating = r;
    if (pg) params.page = pg;

    return `/search?${new URLSearchParams(params as any).toString()}`;
  };

  const products = await getAllProducts({
    query: q,
    category,
    price,
    rating,
    sort,
    page: Number(page),
  });

  const categories = await getAllCategories();

  const activeFilters = [
    q !== "all" && q !== "" && `Search: "${q}"`,
    category !== "all" && category !== "" && `Category: ${category}`,
    price !== "all" && `Price: ${prices.find(p => p.value === price)?.name}`,
    rating !== "all" && `Rating: ${rating} stars & up`,
  ].filter(Boolean);

  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-muted/20">
      <div className="container py-8">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold tracking-tight mb-4 bg-gradient-to-r from-primary to-blue-600 bg-clip-text text-transparent">
            {q !== "all" && q !== "" ? `Search: "${q}"` : "Browse Products"}
          </h1>
          <p className="text-muted-foreground text-lg">
            Discover amazing digital products
          </p>
        </div>

        {/* Search Bar */}
        <div className="max-w-2xl mx-auto mb-12">
          <form className="flex gap-4">
            <div className="relative flex-1">
              <SearchIcon className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-5 h-5" />
              <Input
                placeholder="Search for products, categories, brands..."
                defaultValue={q !== "all" ? q : ""}
                name="q"
                className="pl-10 pr-4 py-6 text-lg"
              />
            </div>
            <Button type="submit" className="px-8 py-6 text-lg">
              <SearchIcon className="w-5 h-5 mr-2" />
              Search
            </Button>
          </form>
        </div>

        <div className="grid lg:grid-cols-4 gap-8">
          {/* Filters Sidebar */}
          <div className="lg:col-span-1">
            <Card className="sticky top-24">
              <CardContent className="p-6 space-y-8">
                {/* Categories Filter */}
                <div>
                  <h3 className="font-semibold text-lg mb-4 flex items-center">
                    <FilterIcon className="w-5 h-5 mr-2" />
                    Categories
                  </h3>
                  <div className="space-y-2">
                    <Link
                      href={getFilterUrl({ c: "all" })}
                      className={`block px-3 py-2 rounded-lg transition-colors ${
                        category === "all"
                          ? "bg-primary text-primary-foreground font-medium"
                          : "hover:bg-muted"
                      }`}
                    >
                      All Categories
                    </Link>
                    {categories.map((x) => (
                      <Link
                        key={x.category}
                        href={getFilterUrl({ c: x.category })}
                        className={`block px-3 py-2 rounded-lg transition-colors ${
                          category === x.category
                            ? "bg-primary text-primary-foreground font-medium"
                            : "hover:bg-muted"
                        }`}
                      >
                        {x.category}
                        <span className="text-muted-foreground text-sm ml-2">
                          ({x._count})
                        </span>
                      </Link>
                    ))}
                  </div>
                </div>

                {/* Price Filter */}
                <div>
                  <h3 className="font-semibold text-lg mb-4">Price Range</h3>
                  <div className="space-y-2">
                    <Link
                      href={getFilterUrl({ p: "all" })}
                      className={`block px-3 py-2 rounded-lg transition-colors ${
                        price === "all"
                          ? "bg-primary text-primary-foreground font-medium"
                          : "hover:bg-muted"
                      }`}
                    >
                      Any Price
                    </Link>
                    {prices.filter(p => p.value !== "all").map((p) => (
                      <Link
                        key={p.value}
                        href={getFilterUrl({ p: p.value })}
                        className={`block px-3 py-2 rounded-lg transition-colors ${
                          price === p.value
                            ? "bg-primary text-primary-foreground font-medium"
                            : "hover:bg-muted"
                        }`}
                      >
                        {p.name}
                      </Link>
                    ))}
                  </div>
                </div>

                {/* Rating Filter */}
                <div>
                  <h3 className="font-semibold text-lg mb-4">Customer Rating</h3>
                  <div className="space-y-2">
                    <Link
                      href={getFilterUrl({ r: "all" })}
                      className={`block px-3 py-2 rounded-lg transition-colors ${
                        rating === "all"
                          ? "bg-primary text-primary-foreground font-medium"
                          : "hover:bg-muted"
                      }`}
                    >
                      Any Rating
                    </Link>
                    {ratings.map((r) => (
                      <Link
                        key={r}
                        href={getFilterUrl({ r: `${r}` })}
                        className={`block px-3 py-2 rounded-lg transition-colors ${
                          rating === r.toString()
                            ? "bg-primary text-primary-foreground font-medium"
                            : "hover:bg-muted"
                        }`}
                      >
                        <div className="flex items-center">
                          {Array.from({ length: 5 }).map((_, i) => (
                            <StarIcon
                              key={i}
                              className={`w-4 h-4 ${
                                i < r ? "text-yellow-400 fill-current" : "text-gray-300"
                              }`}
                            />
                          ))}
                          <span className="ml-2">& up</span>
                        </div>
                      </Link>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Products Grid */}
          <div className="lg:col-span-3">
            {/* Results Header */}
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-8">
              <div className="flex items-center gap-4">
                <span className="text-muted-foreground">
                  {products.data.length} products found
                </span>
                
                {/* Active Filters */}
                {activeFilters.length > 0 && (
                  <div className="flex flex-wrap gap-2">
                    {activeFilters.map((filter, index) => (
                      <span
                        key={index}
                        className="inline-flex items-center gap-2 bg-primary/10 text-primary px-3 py-1 rounded-full text-sm"
                      >
                        {filter}
                        <Link
                          href={`/search?${new URLSearchParams({
                            q: q !== "all" ? q : "",
                            category: "all",
                            price: "all",
                            rating: "all",
                            sort,
                            page: "1"
                          } as any)}`}
                          className="hover:text-destructive"
                        >
                          <XIcon className="w-3 h-3" />
                        </Link>
                      </span>
                    ))}
                    <Link
                      href="/search"
                      className="text-sm text-muted-foreground hover:text-destructive"
                    >
                      Clear all
                    </Link>
                  </div>
                )}
              </div>

              {/* Sort Options */}
              <div className="flex items-center gap-2">
                <span className="text-sm text-muted-foreground">Sort by:</span>
                <div className="flex gap-1">
                  {sortOrders.map((s) => (
                    <Link
                      key={s.value}
                      href={getFilterUrl({ s: s.value })}
                      className={`px-3 py-1 rounded-md text-sm transition-colors ${
                        sort === s.value
                          ? "bg-primary text-primary-foreground font-medium"
                          : "hover:bg-muted"
                      }`}
                    >
                      {s.name}
                    </Link>
                  ))}
                </div>
              </div>
            </div>

            {/* Products Grid */}
            {products.data.length === 0 ? (
              <div className="text-center py-16">
                <div className="text-6xl mb-4">🔍</div>
                <h3 className="text-2xl font-semibold mb-2">No products found</h3>
                <p className="text-muted-foreground mb-6">
                  Try adjusting your search filters or browse all categories
                </p>
                <Link href="/search">
                  <Button variant="outline">Clear Filters</Button>
                </Link>
              </div>
            ) : (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {products.data.map((product) => (
                  <ProductCard key={product.id} product={product} />
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SearchPage;