// /app/terms-of-service/page.tsx
import { Metadata } from "next";
import Header from "@/components/shared/header";
import Footer from "@/components/footer";

export const metadata: Metadata = {
  title: "Terms of Service - Keyversely",
  description:
    "Read the Terms of Service for Keyversely, outlining conditions of use, purchases, and customer responsibilities when buying digital software licenses.",
};

export default function TermsOfServicePage() {
  return (
    <div className="bg-gray-50 min-h-screen text-gray-800">
      <Header />

      <main className="max-w-4xl mx-auto px-4 py-12 space-y-12">
        {/* Intro */}
        <section className="text-center">
          <p className="text-sm text-gray-500">Updated October 2025</p>
          <h1 className="text-4xl font-bold mt-2 mb-6">Terms of Service</h1>
          <p className="text-gray-700 mb-4">
            Welcome to <strong>Keyversely</strong>. By accessing or purchasing
            from our website, you agree to the following terms and conditions.
            Please read them carefully before using our services or completing a
            transaction.
          </p>
          <p className="text-gray-700">
            These Terms of Service govern your use of our site and your purchase
            of any digital product sold by Keyversely.
          </p>
        </section>

        {/* General Use */}
        <section>
          <h2 className="text-2xl font-semibold mb-4">1. General Use</h2>
          <p className="text-gray-700 mb-4">
            By using our website, you confirm that you are at least 18 years old
            or accessing the site under the supervision of a parent or legal
            guardian. You agree to use the website only for lawful purposes and
            in accordance with these terms.
          </p>
          <p className="text-gray-700">
            We reserve the right to modify or discontinue any part of our
            website or services without prior notice.
          </p>
        </section>

        {/* Products & Licenses */}
        <section>
          <h2 className="text-2xl font-semibold mb-4">
            2. Digital Products & License Keys
          </h2>
          <p className="text-gray-700 mb-4">
            Keyversely sells genuine digital licenses for software. All licenses
            are delivered electronically to the email address provided at
            checkout. No physical delivery is made.
          </p>
          <p className="text-gray-700 mb-4">
            Each software license is valid for one-time activation unless stated
            otherwise. Customers are responsible for following installation and
            activation instructions provided with their order.
          </p>
          <p className="text-gray-700">
            We do not sell cracked, pirated, or unauthorized products. All
            licenses are legally obtained through verified distributors and
            partners.
          </p>
        </section>

        {/* Payments */}
        <section>
          <h2 className="text-2xl font-semibold mb-4">3. Payments</h2>
          <p className="text-gray-700 mb-4">
            Payments must be made in full at the time of purchase. We accept
            major payment methods as listed at checkout. All transactions are
            processed securely.
          </p>
          <p className="text-gray-700">
            In case of suspected fraudulent activity, we reserve the right to
            cancel or suspend an order until verification is completed.
          </p>
        </section>

        {/* Refunds & Returns */}
        <section>
          <h2 className="text-2xl font-semibold mb-4">4. Refunds & Returns</h2>
          <p className="text-gray-700 mb-4">
            Our refund and return policies are designed to protect both our
            customers and our business. Please review our{" "}
            <a
              href="/refund-policy"
              className="text-blue-600 underline hover:underline"
            >
              Refund Policy
            </a>{" "}
            and{" "}
            <a
              href="/returns"
              className="text-blue-600 underline hover:underline"
            >
              Returns Policy
            </a>{" "}
            for detailed information.
          </p>
          <p className="text-gray-700">
            Refunds are only issued in cases where a license key is invalid or a
            replacement cannot be provided.
          </p>
        </section>

        {/* User Responsibilities */}
        <section>
          <h2 className="text-2xl font-semibold mb-4">
            5. User Responsibilities
          </h2>
          <p className="text-gray-700 mb-4">
            You agree to provide accurate, current, and complete information
            during checkout. You are responsible for safeguarding your account
            credentials and purchase data.
          </p>
          <p className="text-gray-700">
            Keyversely is not responsible for lost, deleted, or inaccessible
            emails caused by user error or incorrect input at checkout.
          </p>
        </section>

        {/* Intellectual Property */}
        <section>
          <h2 className="text-2xl font-semibold mb-4">
            6. Intellectual Property
          </h2>
          <p className="text-gray-700 mb-4">
            All content on this site — including text, graphics, logos, and
            product descriptions — is owned or licensed by Keyversely and
            protected by international copyright laws.
          </p>
          <p className="text-gray-700">
            You may not copy, reproduce, or redistribute any material from this
            website without our written permission.
          </p>
        </section>

        {/* Limitation of Liability */}
        <section>
          <h2 className="text-2xl font-semibold mb-4">
            7. Limitation of Liability
          </h2>
          <p className="text-gray-700">
            Keyversely shall not be held liable for indirect, incidental, or
            consequential damages arising from the use or inability to use our
            products or website. Our total liability shall not exceed the amount
            paid for the product in question.
          </p>
        </section>

        {/* Contact Info */}
        <section>
          <h2 className="text-2xl font-semibold mb-4">
            8. Contact Information
          </h2>
          <p className="text-gray-700 mb-4">
            For any questions or concerns regarding these Terms of Service,
            please contact us:
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
              <strong>Business Hours:</strong> Mon–Fri, 9:00 AM – 6:00 PM CET
            </li>
          </ul>
        </section>
      </main>

      <Footer />
    </div>
  );
}
