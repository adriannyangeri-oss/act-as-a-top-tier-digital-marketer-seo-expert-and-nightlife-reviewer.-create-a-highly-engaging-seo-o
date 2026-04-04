import type { Metadata } from "next";
import { Playfair_Display, Inter } from "next/font/google";
import "./globals.css";

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  weight: ["400", "700", "900"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Jowac Sports Club | Best Bar, Restaurant & Live Entertainment in Ndenderu, Nairobi",
  description:
    "Jowac Sports Club — Ndenderu's #1 hangout spot. Live mugithi bands, nyama choma, sports screening, full bar & restaurant. Open 24/7 on Kiambu Road, Nairobi. Dine-in, takeaway & delivery.",
  keywords:
    "best bar in Ndenderu, live mugithi Nairobi, nyama choma Kiambu Road, sports bar Nairobi, best hangout spot near Nairobi, live band bar Nairobi 2026, 24 hour restaurant Ndenderu, Jowac Sports Club",
  openGraph: {
    title: "Jowac Sports Club | Where Ndenderu Comes Alive",
    description:
      "Live mugithi, nyama choma, cold drinks & sports screening. Open 24/7. Ndenderu's most loved hangout spot.",
    type: "website",
    locale: "en_KE",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${playfair.variable} ${inter.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
