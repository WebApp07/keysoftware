import type { Metadata } from "next";
import React from "react";
import Header from "@/components/shared/header";
import AboutClient from "./AboutClient"; // 👈 client-only part
import Footer from "@/components/footer";

// ✅ metadata allowed because this file is SERVER component
export const metadata: Metadata = {
  title: "About Keyversely | Genuine Software Licenses Online",
  description:
    "Learn more about Keyversely — Italy-based digital store offering genuine software licenses for Windows, Office, and antivirus at affordable prices. Trusted, transparent, and fast digital delivery.",
  alternates: {
    canonical: "https://www.keyversely.com/about",
  },
  openGraph: {
    title: "About Keyversely | Genuine Software Licenses Online",
    description:
      "At Keyversely, we provide genuine activation keys for Windows, Office, and antivirus programs with instant email delivery and customer-first support.",
    url: "https://www.keyversely.com/about",
    siteName: "Keyversely",
    type: "website",
    locale: "en_US",
  },
};

export default function AboutPage() {
  return (
    <>
      <Header />
      <AboutClient />
      <Footer />
    </>
  );
}
