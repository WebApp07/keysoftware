import React from "react";

export default function TermsOfService() {
  return (
    <main className="max-w-4xl mx-auto px-4 py-12 space-y-8">
      <h1 className="text-3xl font-bold mb-6">Terms of Service</h1>

      <section>
        <h2 className="text-2xl font-semibold mb-2">Business Information</h2>
        <ul className="text-gray-700 space-y-1">
          <li>
            <strong>Business Name:</strong> KeySoftware
          </li>
          <li>
            <strong>Address:</strong> Piazza Guglielmo Oberdan, 12, Milan 20025
          </li>
          <li>
            <strong>Email:</strong>{" "}
            <a
              href="mailto:KeySoftware01@hotmail.com"
              className="text-blue-600 underline"
            >
              KeySoftware01@hotmail.com
            </a>
          </li>
          <li>
            <strong>Phone:</strong> +39 7 58 32 13 08
          </li>
        </ul>
      </section>

      <section>
        <h2 className="text-2xl font-semibold mb-2">User Agreement</h2>
        <p className="text-gray-700">
          By purchasing products from KeySoftware, you agree to comply with and
          be bound by the terms and conditions set forth in this agreement.
        </p>
      </section>

      <section>
        <h2 className="text-2xl font-semibold mb-2">Software Licensing</h2>
        <p className="text-gray-700">
          All licenses sold are genuine and sourced from authorized distributors
          or volume licensing channels. Activation and use are subject to the
          terms and conditions of the software vendor&apos;s End User License
          Agreement (EULA).
        </p>
      </section>

      <section>
        <h2 className="text-2xl font-semibold mb-2">Payments and Security</h2>
        <p className="text-gray-700">
          Payments are processed securely through trusted payment gateways. We
          do not store your payment information. Please ensure your payment
          details are accurate to avoid order delays.
        </p>
      </section>

      <section>
        <h2 className="text-2xl font-semibold mb-2">
          Refunds and Replacements
        </h2>
        <p className="text-gray-700 mb-2">
          If your software key does not activate or work as expected, please
          contact us within 24 hours for a replacement or full refund.
        </p>
        <p className="text-gray-700">
          Refunds will be processed within 3 business days. Keys that have been
          used or activated cannot be refunded.
        </p>
      </section>

      <section>
        <h2 className="text-2xl font-semibold mb-2">Contact Us</h2>
        <p className="text-gray-700">
          For any questions, concerns, or support requests, please contact us at{" "}
          <a
            href="mailto:KeySoftware01@hotmail.com"
            className="text-blue-600 underline"
          >
            KeySoftware01@hotmail.com
          </a>{" "}
          or call +39 7 58 32 13 08 during business hours (Mon–Fri, 9:00 AM –
          6:00 PM CET).
        </p>
      </section>
    </main>
  );
}
