"use client";

import { ShieldCheck, Headphones, Clock, CreditCard } from "lucide-react";

export default function BuyerProtection() {
  const features = [
    {
      icon: <ShieldCheck className="w-8 h-8 text-blue-600" />,
      title: "Verified & Secure Seller",
      description:
        "All our licenses are 100% genuine and legally sourced from authorized distributors.",
    },
    {
      icon: <CreditCard className="w-8 h-8 text-green-600" />,
      title: "Safe Payments via PayPal",
      description:
        "We only use PayPal — your payments are protected, and you can pay with any major card or PayPal balance.",
    },
    {
      icon: <Clock className="w-8 h-8 text-yellow-600" />,
      title: "Instant Delivery",
      description:
        "Receive your digital license instantly — typically within 5 minutes, up to 5 hours during peak times.",
    },
    {
      icon: <Headphones className="w-8 h-8 text-purple-600" />,
      title: "24/7 Support",
      description:
        "Need help? Contact us anytime at keyversely@proton.me or call 0697948854. We’re here for you.",
    },
  ];

  return (
    <section className="max-w-6xl mx-auto my-16 px-6 py-12 bg-white dark:bg-zinc-900 border border-gray-200 dark:border-zinc-700 rounded-2xl shadow-lg">
      <h2 className="text-center text-3xl font-bold mb-10 text-gray-900 dark:text-gray-100">
        🛡️ Buyer Protection & Service Guarantee
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {features.map(({ icon, title, description }) => (
          <div
            key={title}
            className="flex flex-col items-center text-center p-4 hover:scale-105 transition-transform duration-200"
          >
            <div className="mb-3">{icon}</div>
            <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-200">
              {title}
            </h3>
            <p className="text-gray-600 dark:text-gray-400 mt-2 text-sm">
              {description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
