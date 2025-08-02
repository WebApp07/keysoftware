import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "@/assets/styles/globals.css";
import { APP_DESCRIPTION, APP_NAME, SERVER_URL } from "@/lib/constants";
import { ThemeProvider } from "next-themes";
import { Toaster } from "@/components/ui/toaster";
import WhatsappButton from "@/components/WhatsappButton";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: {
    template: `%s | ProStore`,
    default: APP_NAME,
  },
  description: APP_DESCRIPTION,
  metadataBase: new URL(SERVER_URL),
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ThemeProvider
      attribute="class"
      defaultTheme="light"
      enableSystem
      disableTransitionOnChange
    >
      <html lang="en" suppressHydrationWarning>
        <head>
          <meta
            name="google-site-verification"
            content="0vv64_mxh5oPcbqX9tc0xFgE-dleax-NIwQs03ehAY8"
          />
          {/* You can add other meta tags here too */}
        </head>
        <body className={`${inter.className} antialiased`}>
          {children}
          <WhatsappButton />
          <Toaster />
        </body>
      </html>
    </ThemeProvider>
  );
}
