// /pages/return-policy.tsx
import { Metadata } from "next";
import Footer from "@/components/footer";
import Head from "next/head";
import Header from "@/components/shared/header";

// Define metadata for the page
export const metadata: Metadata = {
  title: "Return Policy - blbig",
  description:
    "Return and Refund Policy for blbig Digital Products, including terms for refunds and returns.",
};

export default function ReturnPolicy() {
  return (
    <div className="bg-gray-50 min-h-screen text-gray-800">
      <Head>
        <title>Return Policy - blbig</title>
        <meta
          name="description"
          content="Return and Refund Policy for blbig Digital Products"
        />
      </Head>

      <Header />

      <header className="bg-blue-600 text-white p-6 text-center">
        <h1 className="text-3xl font-semibold">Return & Refund Policy</h1>
      </header>

      <main className="max-w-4xl mx-auto p-6 space-y-6">
        <section className="space-y-4">
          <p>
            For information about our return and refund policies, please see the
            details below.
          </p>

          <p>
            At blbig, our commitment is to prioritize our customers and go the
            extra mile to assist you with any concerns. Customer satisfaction is
            our top priority, and we take pride in delivering a 5-star support
            service. We are dedicated to resolving any issues related to our
            products, services, or your blbig needs.
          </p>

          <p>
            We encourage all customers to reach out to blbig support through
            Live chat, tech ticket, or at{" "}
            <a
              href="mailto:blbig01@hotmail.com"
              className="text-blue-600 underline"
            >
              blbig01@hotmail.com
            </a>{" "}
            for assistance, clarification, feedback, challenges, or help.
          </p>

          <p>
            We are determined to find solutions and ensure your complete
            satisfaction with our service.
          </p>

          <h2 className="text-xl font-semibold">Refunds</h2>
          <p>
            Prior to processing a refund, we kindly ask for the opportunity to
            assist you. Contact our support via chat, tech ticket, or at{" "}
            <a
              href="mailto:blbig01@hotmail.com"
              className="text-blue-600 underline"
            >
              blbig01@hotmail.com
            </a>
            , and please allow 24–72 hours for our Support Team to respond. We
            strive to address your requests promptly.
          </p>

          <p>
            Considering the instant download nature of digital media (software),
            it is non-returnable. There is no “trial” or “grace period” after
            purchasing any product, making all sales final. Once the software or
            service is purchased, it cannot be returned. Consequently, refunds
            cannot be provided.
          </p>

          <p>
            A refund can be processed if the downloaded product from the website
            was entirely damaged, non-functioning, or did not fulfill its
            promises.
          </p>

          <p>
            Refunds will not be granted if you choose not to use the purchased
            products. While we stand behind our products and are committed to
            assisting you with any issues, we also expect you to thoroughly
            understand your purchase and its intended purpose.
          </p>
        </section>
      </main>

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

      <Footer />
    </div>
  );
}
