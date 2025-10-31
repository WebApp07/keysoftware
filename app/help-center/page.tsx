// /app/help-center/page.tsx
import { Metadata } from "next";
import Header from "@/components/shared/header";
import Footer from "@/components/footer";

export const metadata: Metadata = {
  title: "Help Center - Keyversely",
  description:
    "Get support and answers to frequently asked questions about digital license orders, activation, refunds, and troubleshooting at Keyversely.",
};

export default function HelpCenterPage() {
  return (
    <div className="bg-gray-50 min-h-screen text-gray-800">
      <Header />

      <main className="max-w-4xl mx-auto px-4 py-12 space-y-12">
        {/* Intro */}
        <section className="text-center">
          <p className="text-sm text-gray-500">We're here to help</p>
          <h1 className="text-4xl font-bold mt-2 mb-6">Help Center</h1>
          <p className="text-gray-700 mb-4">
            Welcome to the Keyversely Help Center. Whether you need assistance
            with activation, an order issue, or understanding our policies —
            you’re in the right place.
          </p>
          <p className="text-gray-700">
            Browse through common topics below or reach out directly to our
            support team for personalized help.
          </p>
        </section>

        {/* Topics */}
        <section>
          <h2 className="text-2xl font-semibold mb-4">Popular Topics</h2>
          <ul className="list-disc pl-6 text-gray-700 space-y-2">
            <li>
              <strong>Order not received?</strong>
              Check your spam folder first — license emails are delivered within
              minutes. Still missing?{" "}
              <a
                href="mailto:keyversely@proton.me"
                className="text-blue-600 underline"
              >
                Contact support
              </a>
              .
            </li>
            <li>
              <strong>License not activating?</strong>
              Make sure you’re using the correct version of the software. If
              activation still fails, send a screenshot to our team.
            </li>
            <li>
              <strong>Refund or replacement?</strong>
              Review our{" "}
              <a href="/refund-policy" className="text-blue-600 underline">
                Refund Policy
              </a>{" "}
              to see eligibility details.
            </li>
            <li>
              <strong>Didn’t receive your invoice?</strong>
              Email us your order ID, and we’ll resend your invoice within 24
              hours.
            </li>
          </ul>
        </section>

        {/* Troubleshooting */}
        <section>
          <h2 className="text-2xl font-semibold mb-4">Activation Support</h2>
          <p className="text-gray-700 mb-4">
            If you experience an error during activation:
          </p>
          <ul className="list-disc pl-6 text-gray-700 space-y-2">
            <li>Confirm the product key matches your software edition.</li>
            <li>
              Temporarily disable antivirus or VPN that might block activation.
            </li>
            <li>Run the installer as Administrator (Windows only).</li>
            <li>Restart your computer and retry activation after 5 minutes.</li>
          </ul>
        </section>

        {/* Contact Section */}
        <section>
          <h2 className="text-2xl font-semibold mb-4">Need More Help?</h2>
          <p className="text-gray-700 mb-4">
            Our friendly support team is here Monday to Friday, 9:00 AM – 6:00
            PM CET. We usually respond within a few hours.
          </p>
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
              <strong>Live Chat:</strong> Coming soon on our website!
            </li>
          </ul>
        </section>

        {/* Links */}
        <section>
          <h2 className="text-2xl font-semibold mb-4">Quick Links</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <a
              href="/refund-policy"
              className="block p-4 border rounded-lg hover:shadow-md transition"
            >
              Refund Policy
            </a>
            <a
              href="/terms-of-service"
              className="block p-4 border rounded-lg hover:shadow-md transition"
            >
              Terms of Service
            </a>
            <a
              href="/about"
              className="block p-4 border rounded-lg hover:shadow-md transition"
            >
              About Us
            </a>
            <a
              href="/contact"
              className="block p-4 border rounded-lg hover:shadow-md transition"
            >
              Contact Support
            </a>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
