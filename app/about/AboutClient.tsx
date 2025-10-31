"use client";

import { motion } from "framer-motion";
import React from "react";

export default function AboutClient() {
  return (
    <main className="bg-gray-50 min-h-screen">
      {/* Hero Section */}
      <section className="relative overflow-hidden py-24 text-center bg-gradient-to-b from-white to-gray-50">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(0,0,0,0.05),transparent_60%)]" />
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="relative z-10 max-w-3xl mx-auto px-6"
        >
          <p className="text-sm text-gray-500 tracking-wider uppercase">
            Since 2025
          </p>
          <h1 className="text-5xl font-extrabold text-gray-900 mt-2 mb-6">
            About Keyversely
          </h1>
          <p className="text-lg text-gray-700 leading-relaxed">
            At <strong>Keyversely</strong>, we believe powerful software should
            be accessible to everyone. We specialise in delivering genuine
            digital licences for Windows, Office, antivirus, and more — always
            at fair prices and delivered instantly.
          </p>
        </motion.div>
      </section>

      {/* Content Sections */}
      <div className="max-w-5xl mx-auto px-6 py-16 space-y-20">
        <motion.section
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl font-semibold mb-4 text-gray-900">
            How it all started
          </h2>
          <p className="text-gray-700 mb-4 leading-relaxed">
            Keyversely was founded after noticing that many users — students,
            freelancers, and small businesses — were priced out of essential
            software. Subscription fatigue, high costs, and lack of support were
            common. We knew there had to be a better way.
          </p>
          <p className="text-gray-700 leading-relaxed">
            That’s why we launched Keyversely: sourcing genuine licences,
            keeping costs low, and serving customers with honesty and speed.
          </p>
        </motion.section>

        <motion.section
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl font-semibold mb-4 text-gray-900">
            Our commitment to legality & value
          </h2>
          <p className="text-gray-700 mb-4 leading-relaxed">
            Every licence we sell is genuine and legally sourced. We don’t deal
            in cracked or pirated software — we believe in building trust
            through transparency and quality.
          </p>
          <p className="text-gray-700 leading-relaxed">
            By partnering with verified distributors and maintaining efficient
            operations, we pass savings directly to our customers without
            compromising legitimacy.
          </p>
        </motion.section>

        <motion.section
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl font-semibold mb-4 text-gray-900">
            Support & service you can trust
          </h2>
          <p className="text-gray-700 mb-4 leading-relaxed">
            When you buy from Keyversely, you’re not just purchasing a licence
            key — you’re gaining a partner in your digital setup. Whether you
            need installation help or activation support, we’re here 24/7.
          </p>
          <p className="text-gray-700 leading-relaxed">
            We value speed, honesty, and clear communication. Your satisfaction
            is our top priority.
          </p>
        </motion.section>

        <motion.section
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="border-t pt-10"
        >
          <h2 className="text-3xl font-semibold mb-4 text-gray-900">
            Contact & details
          </h2>
          <ul className="text-gray-700 space-y-2">
            <li>
              <strong>Business Name:</strong> Keyversely
            </li>
            <li>
              <strong>Email:</strong>{" "}
              <a
                href="mailto:support@keyversely.com"
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
        </motion.section>
      </div>
    </main>
  );
}
