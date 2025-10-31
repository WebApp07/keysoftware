import { Metadata } from "next";
import Header from "@/components/shared/header";
import Footer from "@/components/footer";

export const metadata: Metadata = {
  title: "Shipping & Delivery Policy - Keyversely",
  description:
    "Learn about Keyversely's delivery policy. All software licenses are delivered instantly via email after payment confirmation.",
};

export default function ShippingPolicyPage() {
  return (
    <div className="bg-gray-50 min-h-screen text-gray-800">
      <Header />

      <main className="max-w-4xl mx-auto px-4 py-12 space-y-12">
        {/* Intro */}
        <section className="text-center">
          <p className="text-sm text-gray-500">Instant Digital Delivery</p>
          <h1 className="text-4xl font-bold mt-2 mb-6">
            Shipping & Delivery Policy
          </h1>
          <p className="text-gray-700 mb-4">
            At <strong>Keyversely</strong>, we deliver all products digitally —
            no physical shipping is required. After completing your purchase,
            you will receive your license key and activation instructions
            directly to your email inbox.
          </p>
          <p className="text-gray-700">
            Our system ensures fast, secure, and automated delivery 24/7.
          </p>
        </section>

        {/* Delivery Time */}
        <section>
          <h2 className="text-2xl font-semibold mb-4">Delivery Time</h2>
          <p className="text-gray-700 mb-4">
            Once your payment is confirmed, the license key and download
            instructions are sent to your registered email address.
          </p>
          <ul className="list-disc pl-6 text-gray-700 space-y-2">
            <li>
              ✅ Most orders are delivered instantly (within a few minutes)
            </li>
            <li>
              ⏱ In rare cases, delivery can take up to 1–2 hours due to system
              checks or high order volume
            </li>
            <li>
              📩 If you do not receive your key after 2 hours, please contact
              our support team
            </li>
          </ul>
        </section>

        {/* Delivery Method */}
        <section>
          <h2 className="text-2xl font-semibold mb-4">Delivery Method</h2>
          <p className="text-gray-700 mb-4">
            All products are delivered via email. You will receive:
          </p>
          <ul className="list-disc pl-6 text-gray-700 space-y-2">
            <li>Your unique product license key</li>
            <li>Official download or activation instructions</li>
            <li>Customer support contact information</li>
          </ul>
          <p className="text-gray-700 mt-4">
            Please make sure to enter a valid email address during checkout to
            ensure successful delivery.
          </p>
        </section>

        {/* Non-Delivery Cases */}
        <section>
          <h2 className="text-2xl font-semibold mb-4">
            Non-Delivery Situations
          </h2>
          <p className="text-gray-700 mb-4">
            In rare cases, non-delivery may occur due to:
          </p>
          <ul className="list-disc pl-6 text-gray-700 space-y-2">
            <li>Incorrect or misspelled email address</li>
            <li>Email going to the spam/junk folder</li>
            <li>Payment not yet confirmed or flagged by PayPal for review</li>
          </ul>
          <p className="text-gray-700 mt-4">
            If you haven’t received your order, please check your spam folder or
            contact us immediately for assistance.
          </p>
        </section>

        {/* Contact Section */}
        <section>
          <h2 className="text-2xl font-semibold mb-4">Contact Us</h2>
          <ul className="text-gray-700 space-y-1">
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
            <li>
              <strong>Business Hours:</strong> Mon–Fri, 9:00 AM – 6:00 PM CET
            </li>
          </ul>
        </section>
      </main>

      <Footer />
    </div>
  );
}
