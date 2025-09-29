import React from "react";

export default function AboutPage() {
  return (
    <main className="max-w-4xl mx-auto px-4 py-12 space-y-8">
      <section>
        <h1 className="text-3xl font-bold mb-4">About Bigbl</h1>
        <p className="text-gray-700">
          Bigbl is a Italy-based digital software store offering genuine
          software licenses at competitive prices. We specialize in activation
          keys for Windows, Microsoft Office, antivirus programs, and more —
          delivered digitally via email.
        </p>
        <p className="text-gray-700 mt-4">
          We are committed to transparency and customer satisfaction. All our
          licenses are sourced through verified distribution channels. We do not
          sell pirated or cracked software.
        </p>
      </section>

      <section>
        <h2 className="text-2xl font-semibold mb-2">
          Customer Service Contact
        </h2>
        <ul className="text-gray-700 space-y-1">
          <li>
            <strong>Website:</strong>{" "}
            <a href="https://www.Bigbl.com" className="text-blue-600 underline">
              www.Bigbl.com
            </a>
          </li>
          <li>
            <strong>Email:</strong>{" "}
            <a
              href="mailto:Bigbl01@hotmail.com"
              className="text-blue-600 underline"
            >
              Bigbl01@hotmail.com
            </a>
          </li>
          <li>
            <strong>Phone:</strong> +39 7 58 32 13 08
          </li>
          <li>
            <strong>Business Hours:</strong> Mon–Fri, 9:00 AM – 6:00 PM CET
          </li>
        </ul>
      </section>

      <section>
        <h2 className="text-2xl font-semibold mb-2">Delivery & Refunds</h2>
        <ul className="text-gray-700 space-y-1">
          <li>
            ✅ All software licenses are delivered via email within minutes
            after purchase.
          </li>
          <li>
            ✅ If your key doesn&apos;t work, we will replace it or refund you
            within 24 hours.
          </li>
          <li>
            ✅ Please see our{" "}
            <a href="/refund-policy" className="text-blue-600 underline">
              Refund Policy
            </a>{" "}
            and{" "}
            <a href="/terms-of-service" className="text-blue-600 underline">
              Terms of Service
            </a>{" "}
            for more info.
          </li>
        </ul>
      </section>

      <section>
        <h2 className="text-2xl font-semibold mb-2">Follow Us</h2>
        <div className="flex space-x-4 text-blue-600">
          <a
            href="https://www.facebook.com/people/Bigbl/61574765687905/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Facebook
          </a>

          <a
            href="https://www.instagram.com/Bigblkey/?next=%2F"
            target="_blank"
            rel="noopener noreferrer"
          >
            Instagram
          </a>

          <a
            href="https://www.trustpilot.com/review/Bigbl.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            trustpilot
          </a>
        </div>
      </section>
    </main>
  );
}
