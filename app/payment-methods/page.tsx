// /app/payment-methods/page.tsx
import { Metadata } from "next";
import Header from "@/components/shared/header";
import Footer from "@/components/footer";

export const metadata: Metadata = {
  title: "Payment Methods - Keyversely",
  description:
    "Keyversely accepts secure payments through PayPal, allowing customers to pay by PayPal balance, credit card, or debit card.",
};

export default function PaymentMethodsPage() {
  return (
    <div className="bg-gray-50 min-h-screen text-gray-800">
      <Header />

      <main className="max-w-4xl mx-auto px-4 py-12 space-y-12">
        {/* Intro */}
        <section className="text-center">
          <p className="text-sm text-gray-500">Safe & Secure Checkout</p>
          <h1 className="text-4xl font-bold mt-2 mb-6">Payment Methods</h1>
          <p className="text-gray-700 mb-4">
            At <strong>Keyversely</strong>, we offer simple and secure payments
            through <strong>PayPal</strong>. You can pay with your PayPal
            account or use any major credit/debit card — even without a PayPal
            account.
          </p>
          <p className="text-gray-700">
            All payments are processed by PayPal’s trusted and encrypted
            gateway. Your card or PayPal details are never shared with us.
          </p>
        </section>

        {/* PayPal Section */}
        <section>
          <h2 className="text-2xl font-semibold mb-4">PayPal Checkout</h2>
          <p className="text-gray-700 mb-4">
            PayPal allows you to pay securely using:
          </p>
          <ul className="list-disc pl-6 text-gray-700 space-y-2">
            <li>Your PayPal account balance</li>
            <li>Linked bank account</li>
            <li>
              Any major credit or debit card (Visa, MasterCard, Amex, etc.)
            </li>
          </ul>

          <div className="flex items-center space-x-3 mt-6">
            <img
              src="https://www.paypalobjects.com/webstatic/mktg/logo/pp_cc_mark_111x69.jpg"
              alt="PayPal Logo"
              className="w-28"
            />
            <p className="text-gray-700">
              Fast, reliable, and secure — trusted by millions worldwide.
            </p>
          </div>
        </section>

        {/* Security Info */}
        <section>
          <h2 className="text-2xl font-semibold mb-4">Payment Security</h2>
          <p className="text-gray-700 mb-4">
            All transactions are processed through PayPal’s encrypted servers.
            Keyversely never stores your payment information, ensuring complete
            safety and privacy for every purchase.
          </p>
          <p className="text-gray-700">
            In case of any payment-related issue, please contact our support
            team for immediate assistance.
          </p>
        </section>

        {/* Contact Section */}
        <section>
          <h2 className="text-2xl font-semibold mb-4">Need Help?</h2>
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
