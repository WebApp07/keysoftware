"use client";

import { useState } from "react";

const faqs = [
  {
    question: "How will I get my product?",
    answer:
      "You will receive your product by email. We guarantee delivery within 24 hours, but most of the time, it’s instant. Be sure to check your spam folder if you don’t see it right away!",
  },
  {
    question: "How do I install the software?",
    answer:
      "Detailed installation instructions are included in the email with your product key. If you need extra help, our 24/7 support team is available to guide you through the process.",
  },
  {
    question: "Is the software compatible with my device?",
    answer:
      "Make sure to check the product description for compatibility details. If you can’t find the information, contact us before buying to confirm it works with your device.",
  },
  {
    question: "What happens if I lose my product key?",
    answer:
      "If you lose your product key, don’t worry! Just contact us with your order information, and we’ll resend the key to your email.",
  },
  {
    question: "Can I return or exchange a product?",
    answer:
      "Since our products are digital and delivered instantly, all sales are final. However, if you have any issues with your purchase, contact our support team, and we will assist you.",
  },
  {
    question: "Can I send the software as a gift to someone else?",
    answer:
      "Absolutely! Just purchase the product using your details, and then forward the product key and installation instructions to the lucky recipient. Contact us if you want to do something special.",
  },
  {
    question: "Can I get help with installation or activation?",
    answer:
      "Yes, we offer 24/7 professional IT support to help you with installation, activation, or any issues related to your software. Just contact us via live chat or email for assistance.",
  },
  {
    question: "Can I buy for multiple devices or users?",
    answer:
      "Some products can be installed on multiple devices, while others are limited to a single device. Please check the product description for details or contact us to confirm before purchasing.",
  },
  {
    question: "Do you offer support for resellers or wholesalers?",
    answer:
      "Yes, we support both resellers and wholesalers with competitive prices. Contact us to learn more about how we can work together.",
  },
];

export default function FAQPage() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="max-w-6xl mx-auto py-12 px-4">
      <h2 className="text-3xl font-bold text-center mb-4 dark:text-white">
        Frequently Asked Questions (FAQs)
      </h2>
      <p className="text-center text-gray-600 dark:text-gray-400 mb-10">
        Find helpful information to answer your questions
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {faqs.map((faq, index) => (
          <div
            key={index}
            className="border border-gray-300 dark:border-gray-700 rounded-lg bg-white dark:bg-gray-800 shadow-sm"
          >
            <button
              onClick={() => toggleFAQ(index)}
              className={`w-full text-left flex justify-between items-center p-4 font-medium transition-colors ${
                openIndex === index
                  ? "text-blue-600 dark:text-blue-400"
                  : "text-gray-800 dark:text-gray-200"
              } focus:outline-none`}
            >
              {faq.question}
              <span className="text-2xl">
                {openIndex === index ? "-" : "+"}
              </span>
            </button>
            {openIndex === index && (
              <div className="px-4 pb-4 text-gray-700 dark:text-gray-300 transition-all duration-300">
                {faq.answer}
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
