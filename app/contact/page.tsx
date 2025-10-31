// /app/contact/page.tsx
import { Metadata } from "next";
import Header from "@/components/shared/header";
import Footer from "@/components/footer";

export const metadata: Metadata = {
  title: "Contact Us - Keyversely",
  description:
    "Get in touch with Keyversely support for assistance with your orders, licenses, or general inquiries.",
};

export default function ContactPage() {
  return (
    <div className="bg-gray-50 min-h-screen text-gray-800">
      <Header />

      <main className="max-w-4xl mx-auto px-4 py-12 space-y-12">
        {/* Intro */}
        <section className="text-center">
          <p className="text-sm text-gray-500">We’re here to assist you</p>
          <h1 className="text-4xl font-bold mt-2 mb-6">Contact Keyversely</h1>
          <p className="text-gray-700 mb-4">
            Need help with your order, activation, or refund? Our team is ready
            to support you. Please fill out the form below or contact us through
            the provided details.
          </p>
          <p className="text-gray-700">
            We aim to respond to all inquiries within 24 hours during business
            days.
          </p>
        </section>

        {/* Contact Form */}
        <section>
          <h2 className="text-2xl font-semibold mb-4 text-center">
            Send Us a Message
          </h2>
          <form className="bg-white p-6 rounded-lg shadow-sm space-y-4 max-w-2xl mx-auto">
            <div>
              <label htmlFor="name" className="block font-medium text-gray-700">
                Name
              </label>
              <input
                type="text"
                id="name"
                placeholder="Your full name"
                className="w-full border border-gray-300 rounded-lg p-2 mt-1 focus:ring focus:ring-blue-200"
                required
              />
            </div>

            <div>
              <label
                htmlFor="email"
                className="block font-medium text-gray-700"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                placeholder="you@example.com"
                className="w-full border border-gray-300 rounded-lg p-2 mt-1 focus:ring focus:ring-blue-200"
                required
              />
            </div>

            <div>
              <label
                htmlFor="message"
                className="block font-medium text-gray-700"
              >
                Message
              </label>
              <textarea
                id="message"
                rows={5}
                placeholder="How can we help you?"
                className="w-full border border-gray-300 rounded-lg p-2 mt-1 focus:ring focus:ring-blue-200"
                required
              ></textarea>
            </div>

            <button
              type="submit"
              className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition w-full"
            >
              Send Message
            </button>
          </form>
        </section>

        {/* Contact Details */}
        <section className="text-center">
          <h2 className="text-2xl font-semibold mb-4">
            Other Ways to Reach Us
          </h2>
          <p className="text-gray-700 mb-4">
            You can also reach us by email or phone during business hours.
          </p>
          <ul className="text-gray-700 space-y-2">
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
