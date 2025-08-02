import React from "react";

export default function ShippingPolicyPage() {
  return (
    <main className="max-w-4xl mx-auto px-4 py-12 space-y-8">
      <section>
        <h1 className="text-3xl font-bold mb-4">Shipping & Delivery Policy</h1>
        <p className="text-gray-700 dark:text-gray-300">
          At KeySoftware, we specialize in digital software delivery. All
          purchases are sent electronically via email. There is no physical
          shipping involved.
        </p>
      </section>

      <section>
        <h2 className="text-2xl font-semibold mb-2">Delivery Method</h2>
        <ul className="list-disc list-inside text-gray-700 dark:text-gray-300 space-y-1">
          <li>✅ All products are delivered via email.</li>
          <li>
            ✅ You will receive a license key and activation instructions.
          </li>
          <li>
            ✅ Your order confirmation and invoice will be sent to your
            registered email address.
          </li>
        </ul>
      </section>

      <section>
        <h2 className="text-2xl font-semibold mb-2">Delivery Time</h2>
        <p className="text-gray-700 dark:text-gray-300">
          Most orders are delivered **instantly** or within **a few minutes**.
          In rare cases, delivery may take up to **1 hour** due to verification
          or system delays.
        </p>
      </section>

      <section>
        <h2 className="text-2xl font-semibold mb-2">Shipping Costs</h2>
        <p className="text-gray-700 dark:text-gray-300">
          ✅ There are **no shipping fees**. All our software is delivered
          electronically.
        </p>
      </section>

      <section>
        <h2 className="text-2xl font-semibold mb-2">Support & Questions</h2>
        <ul className="text-gray-700 dark:text-gray-300 space-y-1">
          <li>
            📧 Email:{" "}
            <a
              href="mailto:KeySoftware01@hotmail.com"
              className="text-blue-600 underline"
            >
              KeySoftware01@hotmail.com
            </a>
          </li>
          <li>📞 Phone: +39 7 58 32 13 08</li>
          <li>💬 Live Chat: Available during business hours</li>
        </ul>
      </section>

      <section>
        <p className="text-gray-600 dark:text-gray-400 text-sm">
          For more information, please see our{" "}
          <a href="/terms-of-service" className="text-blue-600 underline">
            Terms of Service
          </a>
          .
        </p>
      </section>
    </main>
  );
}
