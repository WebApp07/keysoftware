"use client";

import { FC } from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import { FaStar, FaRegStar } from "react-icons/fa";
import "swiper/css";
import "swiper/css/pagination";

interface Review {
  name: string;
  review: string;
  image: string;
  rating: number;
}

const reviews: Review[] = [
  {
    name: "Domenic Primiani.",
    review:
      "The product and the price are unbeatable. Received great tech support to help install the software on my laptop. Excellent job..! Highly recommend them.!",
    image: "/images/user1.png",
    rating: 5,
  },
  {
    name: "Lee Douthwaite.",
    review:
      "Had issues with downloading Adobe Pro—no fault of MM3. David at MM3 went all out to help us and solved the issue within 10 minutes. Great service. Will definitely purchase again.",
    image: "/images/user2.png",
    rating: 5,
  },
  {
    name: "Alan Naylor.",
    review:
      "Great company. On hand via email for any problems. Quick and helpful responses. Would definitely recommend.",
    image: "/images/user3.png",
    rating: 5,
  },
  {
    name: "Alan Naylor.",
    review:
      "Fantastic products and fast delivery via email. Fast response for some installation issues I had. Swiftly resolved. Highly recommend.",
    image: "/images/user4.png",
    rating: 5,
  },
];

const ReviewsSection: FC = () => {
  return (
    <section className="py-20 bg-gradient-to-b from-white via-gray-50 to-white dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
      <div className="max-w-4xl mx-auto px-6">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 text-gray-800 dark:text-white">
          What Our Customers Say
        </h2>
        <Swiper
          modules={[Autoplay, Pagination]}
          spaceBetween={30}
          slidesPerView={1}
          autoplay={{ delay: 5000 }}
          pagination={{ clickable: true }}
          loop={true}
        >
          {reviews.map((review, index) => (
            <SwiperSlide key={index}>
              <div className="bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-xl dark:shadow-2xl flex flex-col items-center text-center transition-all">
                <Image
                  src={review.image}
                  alt={review.name}
                  width={80}
                  height={80}
                  className="rounded-full object-cover mb-6"
                />
                <div className="flex mb-4">
                  {Array.from({ length: 5 }, (_, i) =>
                    i < review.rating ? (
                      <FaStar key={i} className="text-yellow-400 w-5 h-5" />
                    ) : (
                      <FaRegStar
                        key={i}
                        className="text-gray-300 dark:text-gray-600 w-5 h-5"
                      />
                    )
                  )}
                </div>
                <p className="text-gray-600 dark:text-gray-300 italic mb-6">
                  {review.review}
                </p>
                <h4 className="text-lg font-semibold text-gray-800 dark:text-gray-100">
                  {review.name}
                </h4>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default ReviewsSection;
