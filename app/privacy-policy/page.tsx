// /pages/privacy-policy.tsx
import React from "react";

export default function PrivacyPolicy() {
  return (
    <main className="max-w-4xl mx-auto px-4 py-12 space-y-8">
      <h1 className="text-3xl font-bold mb-6">Privacy Policy</h1>

      <section className="space-y-4 text-gray-700 leading-relaxed">
        <p>
          At KeySoftware, we are committed to protecting your privacy and
          ensuring that your personal data is handled in accordance with
          applicable data protection laws. This privacy policy applies
          specifically to our digital products and services, detailing how we
          collect, use, and safeguard your personal data.
        </p>

        <h2 className="text-2xl font-semibold mt-8 mb-2">
          Information Collection
        </h2>
        <p>
          We collect personal data when you interact with our website, such as
          when you register an account, make a purchase, subscribe to
          newsletters, or contact customer support. Types of data we collect
          include:
        </p>
        <ul className="list-disc pl-6 space-y-1">
          <li>Name, email address, and contact information</li>
          <li>Billing and payment details for transactions</li>
          <li>Device and usage data from browsing the website</li>
          <li>Any content you share publicly, like reviews or feedback</li>
        </ul>

        <h2 className="text-2xl font-semibold mt-8 mb-2">
          How We Use Your Data
        </h2>
        <ul className="list-disc pl-6 space-y-1">
          <li>To process purchases and deliver digital products</li>
          <li>To communicate updates, order confirmations, and support</li>
          <li>To improve and personalize your experience on our website</li>
          <li>To comply with legal obligations and prevent fraud</li>
          <li>To send marketing communications if you opt in</li>
        </ul>

        <h2 className="text-2xl font-semibold mt-8 mb-2">Data Sharing</h2>
        <p>
          We do not sell or lease your personal data to third parties. Data may
          be shared with trusted third-party service providers only for
          operational purposes like payment processing, always following data
          protection laws.
        </p>

        <h2 className="text-2xl font-semibold mt-8 mb-2">Your Rights</h2>
        <p>
          You have the right to access, correct, or request deletion of your
          personal data. You may also object to processing or request data
          portability. To exercise your rights, contact us at{" "}
          <a
            href="mailto:KeySoftware01@hotmail.com"
            className="text-blue-600 underline"
          >
            KeySoftware01@hotmail.com
          </a>
          .
        </p>

        <h2 className="text-2xl font-semibold mt-8 mb-2">Data Security</h2>
        <p>
          We use industry-standard measures to protect your personal data from
          unauthorized access, alteration, or destruction.
        </p>

        <h2 className="text-2xl font-semibold mt-8 mb-2">Cookies</h2>
        <p>
          Our website uses cookies to improve your browsing experience. By
          continuing to use our site, you consent to our use of cookies.
        </p>

        <h2 className="text-2xl font-semibold mt-8 mb-2">
          Changes to This Policy
        </h2>
        <p>
          We may update this privacy policy to reflect changes in our practices
          or legal requirements. We will notify you via email or website
          announcements if significant changes occur.
        </p>

        <h2 className="text-2xl font-semibold mt-8 mb-2">Contact Us</h2>
        <p>
          For any questions or concerns, please contact us at{" "}
          <a
            href="mailto:KeySoftware01@hotmail.com"
            className="text-blue-600 underline"
          >
            KeySoftware01@hotmail.com
          </a>
          .
        </p>
      </section>
    </main>
  );
}
