import React from "react";

export default function ReturnPolicyPage() {
  return (
    <main className="max-w-4xl mx-auto px-4 py-12 space-y-8">
      <section>
        <h1 className="text-3xl font-bold mb-4">Return & Refund Policy</h1>
        <p className="text-gray-700 dark:text-gray-300">
          At Bigbl, we strive to provide you with genuine digital software
          licenses delivered instantly and reliably. Since our products are
          digital and activated upon delivery, our return policy reflects the
          nature of the products we offer.
        </p>
      </section>

      <section>
        <h2 className="text-2xl font-semibold mb-2">Eligibility for Refund</h2>
        <ul className="text-gray-700 dark:text-gray-300 space-y-2 list-disc list-inside">
          <li>
            You are eligible for a replacement or refund **only** if the
            activation key is invalid or does not work.
          </li>
          <li>
            You must notify us **within 24 hours** of purchase if the key
            doesn't work.
          </li>
          <li>
            We cannot process refunds for products that have been successfully
            activated or used.
          </li>
        </ul>
      </section>

      <section>
        <h2 className="text-2xl font-semibold mb-2">How to Request a Refund</h2>
        <p className="text-gray-700 dark:text-gray-300">
          If you experience an issue, please contact our customer service team
          with the following details:
        </p>
        <ul className="text-gray-700 dark:text-gray-300 list-disc list-inside mt-2 space-y-1">
          <li>Order ID or proof of purchase</li>
          <li>Details of the issue</li>
          <li>Screenshot or screen recording of the error (if applicable)</li>
        </ul>
        <p className="text-gray-700 dark:text-gray-300 mt-4">
          Our support team will verify your claim and provide a working
          replacement or a full refund within 24 hours.
        </p>
      </section>

      <section>
        <h2 className="text-2xl font-semibold mb-2">Contact Information</h2>
        <ul className="text-gray-700 dark:text-gray-300 space-y-1">
          <li>
            📧 Email:{" "}
            <a
              href="mailto:Bigbl01@hotmail.com"
              className="text-blue-600 underline"
            >
              Bigbl01@hotmail.com
            </a>
          </li>
          <li>📞 Phone: +39 7 58 32 13 08</li>
          <li>💬 Live Chat: Available on our website during business hours</li>
        </ul>
      </section>

      <section>
        <p className="text-gray-600 dark:text-gray-400 text-sm">
          For more details, please review our{" "}
          <a href="/terms-of-service" className="text-blue-600 underline">
            Terms of Service
          </a>
          .
        </p>
      </section>
    </main>
  );
}
