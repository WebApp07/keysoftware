// /pages/help-center.js
import { Metadata } from "next"; // <-- Import the Metadata component
import Header from "@/components/shared/header"; // <-- Import your shared header
import Footer from "@/components/footer";
import Head from "next/head";

// Define metadata for the page
export const metadata: Metadata = {
  title: "Help Center - blbig",
  description:
    "Find answers to frequently asked questions about blbig digital products and services.",
};

export default function HelpCenter() {
  return (
    <div className="bg-gray-50 min-h-screen text-gray-800">
      <Head>
        <title>Help Center - blbig</title>
        <meta
          name="description"
          content="Help Center for blbig Digital Products"
        />
      </Head>
      {/* Shared Header */}
      <Header /> {/* <-- Add your Header component here */}
      <header className="bg-blue-600 text-white p-6 text-center">
        <h1 className="text-3xl font-semibold">Help Center</h1>
      </header>
      <main className="max-w-4xl mx-auto p-6">
        <section className="space-y-6">
          <h2 className="text-2xl font-semibold">Frequently Asked Questions</h2>

          <div className="space-y-4">
            <div className="border-b pb-4">
              <h3 className="text-xl font-semibold">
                1. How do I purchase a digital key or subscription account?
              </h3>
              <p>
                To purchase a digital key or a lifetime subscription account,
                simply browse our products, select the one you want, and proceed
                through the checkout process. After payment, your product will
                be delivered to your account or email address.
              </p>
            </div>

            <div className="border-b pb-4">
              <h3 className="text-xl font-semibold">
                2. How do I activate my digital key or subscription account?
              </h3>
              <p>
                After purchasing a digital key or subscription account, you will
                receive detailed instructions on how to activate your product.
                For digital keys, you can follow the activation steps provided
                in your email.
              </p>
            </div>

            <div className="border-b pb-4">
              <h3 className="text-xl font-semibold">
                3. I didn’t receive my product after purchasing it. What should
                I do?
              </h3>
              <p>
                If you did not receive your product after purchase, please check
                your spam or junk folder. If it is not there, please contact our
                support team at{" "}
                <a href="blbig01@hotmail.com" className="text-blue-600">
                  blbig01@hotmail.com
                </a>{" "}
                with your order details, and we will resolve the issue as soon
                as possible.
              </p>
            </div>

            <div className="border-b pb-4">
              <h3 className="text-xl font-semibold">
                4. How do I contact customer support?
              </h3>
              <p>
                For assistance with any issues or questions, you can contact our
                customer support team by emailing us at{" "}
                <a href="mailto:support@blbig.com" className="text-blue-600">
                  blbig01@hotmail.com
                </a>
                . We typically respond within 1-3 hours.
              </p>
            </div>

            <div className="border-b pb-4">
              <h3 className="text-xl font-semibold">
                5. Can I get a refund for my purchase?
              </h3>
              <p>
                Refunds are provided on a case-by-case basis and typically
                depend on the nature of the product and the time of request. If
                you believe you are entitled to a refund, please contact us
                within 14 days of purchase at{" "}
                <a href="blbig01@hotmail.com" className="text-blue-600">
                  blbig01@hotmail.com
                </a>
                .
              </p>
            </div>
            <div className="mt-10 text-center">
              <p className="text-lg">
                Still have questions?{" "}
                <a
                  href="/contact"
                  className="text-blue-600 font-medium hover:underline"
                >
                  Contact us
                </a>{" "}
                and we’ll get back to you as soon as possible.
              </p>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
