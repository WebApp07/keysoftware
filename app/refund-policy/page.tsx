// /app/refund-policy/page.tsx
import { Metadata } from "next";
import Header from "@/components/shared/header";
import Footer from "@/components/footer";

export const metadata: Metadata = {
  title: "Refund Policy - Keyversely",
  description:
    "Read our refund policy to understand how Keyversely handles refunds and replacements for digital license purchases.",
};

export default function RefundPolicyPage() {
  return (
    <div className="bg-gray-50 min-h-screen text-gray-800">
      <Header />

      <main className="max-w-4xl mx-auto px-4 py-12 space-y-12">
        <section className="text-center">
          <p className="text-sm text-gray-500">Customer First, Always</p>
          <h1 className="text-4xl font-bold mt-2 mb-6">Refund Policy</h1>
          <p className="text-gray-700 mb-4">
            At <strong>Keyversely</strong>, we value our customers and stand by
            the quality of our digital products. Our goal is to ensure your full
            satisfaction, and we’re always here to help if something isn’t
            right.
          </p>
          <p className="text-gray-700">
            This policy explains how we handle refunds and replacements for
            digital license purchases made through our website.
          </p>
        </section>

        {/* Refund Guidelines */}
        <section>
          <h2 className="text-2xl font-semibold mb-4">Refund Guidelines</h2>
          <p className="text-gray-700 mb-4">
            Because all our products are digital software licenses that are
            delivered instantly via email, they cannot be physically returned.
            Once a license key has been sent and viewed, it is considered
            activated and cannot be reused.
          </p>
          <p className="text-gray-700 mb-4">
            However, we understand that technical issues can occur. You may be
            eligible for a refund or replacement if:
          </p>
          <ul className="list-disc pl-6 text-gray-700 space-y-2">
            <li>The delivered activation key is invalid or doesn’t work.</li>
            <li>
              You received the wrong product and contacted us within 7 days.
            </li>
            <li>
              The download link or instructions were missing or inaccessible.
            </li>
          </ul>
        </section>

        {/* Refund Process */}
        <section>
          <h2 className="text-2xl font-semibold mb-4">Refund Process</h2>
          <p className="text-gray-700 mb-4">
            Before processing any refund, please reach out to our support team
            so we can assist you. Most activation issues can be resolved quickly
            with our help.
          </p>
          <p className="text-gray-700 mb-4">
            If a refund is approved, it will be issued to the original payment
            method within 3–5 business days. Refunds are only provided after our
            team verifies that the license cannot be activated or replaced.
          </p>
          <p className="text-gray-700">
            To request a refund, email us at{" "}
            <a
              href="mailto:keyversely@proton.me"
              className="text-blue-600 underline"
            >
              keyversely@proton.me{" "}
            </a>{" "}
            and include your order ID and a brief explanation of the issue.
          </p>
        </section>

        {/* Limitations */}
        <section>
          <h2 className="text-2xl font-semibold mb-4">Limitations</h2>
          <p className="text-gray-700 mb-4">
            Refunds will not be granted for the following cases:
          </p>
          <ul className="list-disc pl-6 text-gray-700 space-y-2">
            <li>You changed your mind after receiving the key.</li>
            <li>
              You purchased the wrong product and already activated the license.
            </li>
            <li>
              You no longer need the software after purchase or made a mistake
              without contacting support.
            </li>
          </ul>
          <p className="text-gray-700 mt-4">
            We encourage all customers to read product descriptions carefully
            before completing their orders.
          </p>
        </section>

        {/* Contact */}
        <section>
          <h2 className="text-2xl font-semibold mb-4">Need Help?</h2>
          <p className="text-gray-700">
            Still have questions or need help with your order? Our support team
            is available Monday to Friday, 9:00 AM – 6:00 PM CET.
          </p>
          <ul className="text-gray-700 space-y-1 mt-4">
            <li>
              <strong>Email:</strong>{" "}
              <a
                href="mailto:keyversely@proton.me"
                className="text-blue-600 underline"
              >
                keyversely@proton.me
              </a>
            </li>
            <li>
              <strong>Phone:</strong> 0697948854
            </li>
          </ul>
        </section>
      </main>

      <Footer />
    </div>
  );
}
