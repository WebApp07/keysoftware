"use client";

import Image from "next/image";

const badges = [
  {
    src: "/badges/norton-secure.png",
    alt: "Norton Secured",
    href: "https://www.norton.com/",
  },
  {
    src: "/badges/ssl-certificate.png",
    alt: "SSL Secure",
    href: "https://www.ssl.com/",
  },
  {
    src: "/badges/mcafee-secure.png",
    alt: "McAfee Secure",
    href: "https://www.mcafee.com/",
  },
  {
    src: "/badges/paypal.png",
    alt: "PayPal — The Safer Way to Pay",
    href: "https://www.paypal.com/",
  },
];

export default function TrustBadges() {
  return (
    <section className="max-w-5xl mx-auto my-12 px-6 py-10 rounded-2xl border border-gray-200 dark:border-zinc-700 shadow-md bg-white dark:bg-zinc-900">
      <h2 className="text-center text-2xl font-bold mb-8 text-gray-800 dark:text-gray-100">
        🔒 Trusted & Secure Payments
      </h2>

      <div className="flex flex-wrap justify-center gap-8 items-center">
        {badges.map(({ src, alt, href }) => (
          <a
            key={alt}
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={alt}
            className="block w-24 h-24 sm:w-28 sm:h-28 p-3 bg-gray-50 dark:bg-zinc-800 border rounded-xl shadow hover:shadow-lg hover:scale-105 transition-all duration-200 ease-in-out"
          >
            <Image
              src={src}
              alt={alt}
              width={100}
              height={100}
              loading="lazy"
              className="object-contain w-full h-full"
            />
          </a>
        ))}
      </div>
    </section>
  );
}
