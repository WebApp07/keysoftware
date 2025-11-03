import Header from "@/components/shared/header";
import Link from "next/link";
import { getOrderById } from "@/lib/actions/order.actions";

export const metadata = {
  title: "Thank You - Keyversely",
  description:
    "Your order has been successfully completed at Keyversely. Expect your license via email soon.",
};

export default async function ThankYouPage({
  searchParams,
}: {
  searchParams: { orderId?: string };
}) {
  const orderId = searchParams?.orderId;
  const order = orderId ? await getOrderById(orderId) : null;

  // ❌ Access protection
  if (!order || !order.isPaid) {
    return (
      <main className="min-h-screen flex flex-col items-center justify-center px-6 py-16 bg-gray-50">
        <div className="bg-white rounded-lg shadow-md p-8 text-center max-w-md">
          <h1 className="text-2xl font-bold text-red-600 mb-4">
            Access Denied
          </h1>
          <p className="text-gray-700 mb-4">
            This page is only available after completing a successful purchase.
          </p>
          <Link href="/" className="text-blue-600 font-medium hover:underline">
            Go Back Home
          </Link>
        </div>
      </main>
    );
  }

  // ✅ Paid order confirmed
  return (
    <main className="max-w-3xl mx-auto px-4 py-16 space-y-12">
      <Header />

      <section className="text-center">
        <h1 className="text-4xl font-bold mb-4 text-gray-900">
          Thank You for Your Purchase!
        </h1>
        <p className="text-gray-700 mb-6">
          Your order <strong>#{order.id}</strong> has been successfully
          processed and confirmed.
        </p>
        <p className="text-gray-700 mb-6">
          You will receive your activation key and instructions by email within{" "}
          <strong>5 minutes to 5 hours</strong>.
        </p>
        <p className="text-gray-700">
          If you have any questions, feel free to contact us at{" "}
          <a
            href="mailto:keyversely@proton.me"
            className="text-blue-600 underline"
          >
            keyversely@proton.me
          </a>
          .
        </p>
        <div className="mt-8">
          <Link
            href="/"
            className="inline-block px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition"
          >
            Continue Shopping
          </Link>
        </div>
      </section>
    </main>
  );
}
