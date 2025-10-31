// /app/returns/page.tsx
import { Metadata } from "next";
import Header from "@/components/shared/header";
import Footer from "@/components/footer";

export const metadata: Metadata = {
  title: "Returns Policy - Keyversely",
  description:
    "Read Keyversely’s Returns Policy for details on how digital software keys are handled, including eligibility for replacements or refunds.",
};

export default function ReturnsPage() {
  return (
    <div className="bg-gray-50 min-h-screen text-gray-800">
      <Header />

      <main className="max-w-4xl mx-auto px-4 py-12 space-y-12">
        {/* Intro */}
        <section className="text-center">
          <p className="text-sm text-gray-500">Customer Satisfaction Policy</p>
          <h1 className="text-4xl font-bold mt-2 mb-6">Returns Policy</h1>
          <p className="text-gray-700 mb-4">
            At <strong>Keyversely</strong>, we pride ourselves on delivering
            genuine, instantly accessible digital licenses. Since our products
            are delivered electronically, the process differs from physical
            returns — but your satisfaction always comes first.
          </p>
          <p className="text-gray-700">
            This policy explains how we handle replacements and returns for our
            digital products.
          </p>
        </section>

        {/* Digital Product Nature */}
        <section>
          <h2 className="text-2xl font-semibold mb-4">
            Digital Product Returns
          </h2>
          <p className="text-gray-700 mb-4">
            Because our products are digital licenses delivered instantly via
            email, they cannot be “returned” like physical goods. Once a license
            key has been issued and viewed, it is considered used and cannot be
            revoked or resold.
          </p>
          <p className="text-gray-700">
            However, if you experience an issue with activation, installation,
            or you received the wrong product, our team is here to help you with
            a replacement or a refund (in qualifying cases).
          </p>
        </section>

        {/* Replacement Eligibility */}
        <section>
          <h2 className="text-2xl font-semibold mb-4">
            Replacement Eligibility
          </h2>
          <p className="text-gray-700 mb-4">
            You may be eligible for a replacement if:
          </p>
          <ul className="list-disc pl-6 text-gray-700 space-y-2">
            <li>The activation key provided does not work or is invalid.</li>
            <li>
              You received a different product than the one you ordered (notify
              us within 7 days).
            </li>
            <li>
              You did not receive the download link or license key after
              purchase.
            </li>
          </ul>
          <p className="text-gray-700 mt-4">
            In such cases, please contact our support team immediately. We will
            verify your order and provide a working key or alternative solution
            as quickly as possible.
          </p>
        </section>

        {/* Resolution Process */}
        <section>
          <h2 className="text-2xl font-semibold mb-4">Resolution Process</h2>
          <p className="text-gray-700 mb-4">
            To start a replacement or return inquiry, please email us at{" "}
            <a
              href="mailto:keyversely@proton.me"
              className="text-blue-600 underline"
            >
              keyversely@proton.me{" "}
            </a>{" "}
            and include:
          </p>
          <ul className="list-disc pl-6 text-gray-700 space-y-2">
            <li>Your full name and order number</li>
            <li>The email address used for purchase</li>
            <li>A brief description or screenshot of the issue</li>
          </ul>
          <p className="text-gray-700 mt-4">
            Our support team will review your case within 1–3 business days and
            provide the next steps. If a replacement cannot resolve the issue, a
            refund may be issued according to our{" "}
            <a
              href="/refund-policy"
              className="text-blue-600 underline hover:underline"
            >
              Refund Policy
            </a>
            .
          </p>
        </section>

        {/* Limitations */}
        <section>
          <h2 className="text-2xl font-semibold mb-4">Limitations</h2>
          <p className="text-gray-700 mb-4">
            Returns and replacements will not be approved if:
          </p>
          <ul className="list-disc pl-6 text-gray-700 space-y-2">
            <li>You purchased the wrong product and already activated it.</li>
            <li>
              You no longer need the software or changed your mind after
              receiving the key.
            </li>
            <li>
              You failed to follow installation or activation instructions.
            </li>
          </ul>
        </section>

        {/* Support */}
        <section>
          <h2 className="text-2xl font-semibold mb-4">Need Assistance?</h2>
          <p className="text-gray-700 mb-4">
            Our goal is to make every experience with Keyversely positive. If
            you’re unsure whether your order qualifies for a return or
            replacement, please reach out — we’re happy to review your case.
          </p>
          <ul className="text-gray-700 space-y-1">
            <li>
              <strong>Email:</strong>{" "}
              <a
                href="mailto:keyversely@proton.me"
                className="text-blue-600 underline"
              >
                keyversely@proton.me{" "}
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
