// app/components/Footer.tsx
import Link from "next/link";

const LINKS = [
  { href: "/about", label: "About Us" },
  { href: "/terms-of-service", label: "Terms of Service" },
  { href: "/privacy-policy", label: "Privacy Policy" },
  { href: "/help-center", label: "Help Center" },
  { href: "/refund-policy", label: "Refund Policy" },
  { href: "/contact", label: "Contact Us" },
  { href: "/payment-methods", label: "Payment Methods" },
  { href: "/shipping-policy", label: "Shipping Policy" },
  { href: "/return-policy", label: "Return Policy" },
];

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const APP_NAME = "keyversely"; // ← put your actual app name here

  return (
    <footer className="border-t">
      <div className="p-5 flex-center flex-wrap space-x-4">
        {LINKS.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            className="hover:underline text-sm"
          >
            {link.label}
          </Link>
        ))}
      </div>
      <div className="p-5 flex-center text-xs text-gray-500">
        Developed By keyversely © {currentYear} {APP_NAME}. All Rights
        Reserved.
      </div>
    </footer>
  );
};

export default Footer;
