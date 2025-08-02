import React from "react";
import ContactForm from "@/components/contact-form";

export default function ContactPage() {
  return (
    <main className="max-w-4xl mx-auto px-4 py-16 space-y-12">
      {/* Header */}
      <section className="text-center space-y-4">
        <h1 className="text-4xl font-extrabold tracking-tight">Contact Us</h1>
        <p className="text-muted-foreground max-w-2xl mx-auto">
          Have a question about your order or a product? Our team is here to
          help.
        </p>
      </section>

      {/* Customer Info */}
      <section className="bg-muted/50 dark:bg-muted/30 p-6 rounded-xl shadow space-y-4">
        <h2 className="text-2xl font-semibold">Customer Service</h2>
        <ul className="space-y-2 text-sm sm:text-base text-gray-800 dark:text-gray-300">
          <li>
            <strong>Business Name:</strong> KeySoftware
          </li>
          <li>
            <strong>Address:</strong> Piazza Guglielmo Oberdan, 12, Milan 20025
          </li>
          <li>
            <strong>Email:</strong>{" "}
            <a
              href="mailto:KeySoftware01@hotmail.com"
              className="text-blue-600 underline"
            >
              KeySoftware01@hotmail.com
            </a>
          </li>
          <li>
            <strong>Phone:</strong> +39 7 58 32 13 08
          </li>
          <li>
            <strong>Live Chat Support:</strong> Available on site
          </li>
          <li>
            <strong>Business Hours:</strong> Mon–Fri, 9:00 AM – 6:00 PM CET
          </li>
        </ul>
      </section>

      {/* Optional - Add Map */}
      {/* <section className="rounded-xl overflow-hidden shadow">
        <iframe
          title="KeySoftware Location"
          src="https://www.google.com/maps?q=Orp+Jauche+Italy&output=embed"
          width="100%"
          height="300"
          allowFullScreen
          loading="lazy"
          className="w-full h-[300px] border-0"
        />
      </section> */}

      {/* Need Help Note */}
      <section>
        <h2 className="text-2xl font-semibold mb-2">Need Help?</h2>
        <p className="text-muted-foreground">
          Reach out via live chat or the form below — we usually respond within
          a few hours.
        </p>
      </section>

      {/* Contact Form */}
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">Send Us a Message</h2>
        <div className="bg-background p-6 rounded-xl shadow">
          <ContactForm />
        </div>
      </section>
    </main>
  );
}
