"use client";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Product } from "@/types";
import Autoplay from "embla-carousel-autoplay";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";

const ProductCarousel = ({ data }: { data: Product[] }) => {
  return (
    <section className="w-full mb-16">
      <Carousel
        opts={{ loop: true }}
        plugins={[
          Autoplay({
            delay: 7000,
            stopOnInteraction: true,
            stopOnMouseEnter: true,
          }),
        ]}
        className="w-full relative"
      >
        <CarouselContent>
          {data.map((product: Product) => (
            <CarouselItem key={product.id}>
              <Link href={`/product/${product.slug}`}>
                <div className="relative w-full h-[500px] md:h-[600px] rounded-2xl overflow-hidden shadow-lg group">
                  <Image
                    src={product.banner!}
                    alt={product.name}
                    fill
                    priority
                    className="object-cover w-full h-full transition-transform duration-700 group-hover:scale-105"
                  />

                  {/* Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-transparent" />

                  {/* Text Content */}
                  <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="absolute bottom-12 left-1/2 -translate-x-1/2 text-center text-white max-w-2xl px-4"
                  >
                    <h2 className="text-3xl md:text-5xl font-bold mb-4">
                      {product.name}
                    </h2>
                    {product.shortDescription && (
                      <p className="text-lg md:text-xl mb-6 opacity-90">
                        {product.shortDescription}
                      </p>
                    )}
                    <span className="inline-block bg-white text-black px-6 py-3 rounded-full font-semibold text-lg shadow hover:bg-gray-100 transition">
                      Shop Now
                    </span>
                  </motion.div>
                </div>
              </Link>
            </CarouselItem>
          ))}
        </CarouselContent>

        {/* Controls */}
        <CarouselPrevious className="absolute left-6 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white rounded-full shadow" />
        <CarouselNext className="absolute right-6 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white rounded-full shadow" />
      </Carousel>
    </section>
  );
};

export default ProductCarousel;
