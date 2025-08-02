import Link from "next/link";

export const metadata = {
  title: "Thank You",
};

export default function ThankYouPage() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center p-6 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-md w-full bg-white dark:bg-gray-800 rounded-lg shadow-md dark:shadow-lg p-8 text-center">
        <h1 className="text-3xl font-bold mb-4 text-gray-900 dark:text-gray-100">
          Thank You for Your Purchase!
        </h1>
        <p className="mb-6 text-gray-700 dark:text-gray-300">
          Your order has been successfully processed. We appreciate your
          business.
        </p>
        <Link
          href="/"
          className="inline-block px-6 py-3 bg-blue-600 text-white font-semibold rounded hover:bg-blue-700 dark:hover:bg-blue-500 transition"
        >
          Continue Shopping
        </Link>
      </div>
    </main>
  );
}
