import React from "react";

export default function PaymentMethodsPage() {
  return (
    <main className="max-w-4xl mx-auto px-4 py-12 space-y-8">
      <section>
        <h1 className="text-3xl font-bold mb-4">Payment Methods</h1>
        <p className="text-gray-700 dark:text-gray-300">
          KeySoftware accepts a variety of secure payment methods to ensure a
          smooth and protected checkout experience. All transactions are
          encrypted and processed through trusted gateways.
        </p>
      </section>

      <section>
        <h2 className="text-2xl font-semibold mb-2">
          Accepted Payment Options
        </h2>
        <ul className="list-disc list-inside text-gray-700 dark:text-gray-300 space-y-1">
          <li>💳 Credit Cards (Visa, MasterCard, American Express)</li>
          <li>🏦 Debit Cards</li>
          <li>💻 PayPal</li>
        </ul>
      </section>

      <section>
        <h2 className="text-2xl font-semibold mb-2">Secure Transactions</h2>
        <p className="text-gray-700 dark:text-gray-300">
          All payments are processed over a secure SSL connection using
          industry-standard encryption. We do not store your payment information
          on our servers.
        </p>
        <p className="text-gray-700 dark:text-gray-300 mt-2">
          Transactions are handled via trusted third-party gateways such as{" "}
          <strong>PayPal</strong>, ensuring your data remains safe and private.
        </p>
      </section>

      <section>
        <h2 className="text-2xl font-semibold mb-2">Need Help?</h2>
        <p className="text-gray-700 dark:text-gray-300">
          If you experience any issues during checkout, feel free to contact our
          support team via:
        </p>
        <ul className="text-gray-700 dark:text-gray-300 space-y-1 mt-2">
          <li>
            📧{" "}
            <a
              href="mailto:KeySoftware01@hotmail.com"
              className="text-blue-600 underline"
            >
              KeySoftware01@hotmail.com
            </a>
          </li>
          <li>📞 +39 7 58 32 13 08</li>
          <li>💬 Live chat support (Mon–Fri)</li>
        </ul>
      </section>
    </main>
  );
}
