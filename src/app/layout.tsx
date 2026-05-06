import type { Metadata } from "next";
import { Inter, Space_Grotesk } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SmoothScroll from "@/components/SmoothScroll";
import CustomCursor from "@/components/CustomCursor";
import GlobalBackground from "@/components/GlobalBackground";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://mahammadshamsuddeen.com"),
  title: "Mahammad Shamsuddeen | Digital Marketing Specialist & Cyber Security Analyst",
  description: "Professional Digital Marketing Specialist and Cyber Security Analyst skilled in SEO, social media marketing, e-commerce management, Shopify development, and cybersecurity solutions.",
  keywords: [
    "digital marketing expert",
    "SEO specialist",
    "social media marketing",
    "cyber security analyst",
    "Shopify developer",
    "e-commerce specialist",
    "digital branding",
    "marketing portfolio",
    "cybersecurity portfolio",
    "Next.js portfolio website"
  ],
  openGraph: {
    title: "Mahammad Shamsuddeen | Portfolio",
    description: "Professional Digital Marketing Specialist and Cyber Security Analyst.",
    url: "https://mahammadshamsuddeen.com",
    siteName: "Mahammad Shamsuddeen Portfolio",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Mahammad Shamsuddeen Portfolio",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Mahammad Shamsuddeen | Portfolio",
    description: "Professional Digital Marketing Specialist and Cyber Security Analyst.",
    images: ["/og-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${spaceGrotesk.variable} antialiased`}
    >
      <body className="min-h-screen bg-[#110720] text-white overflow-x-hidden selection:bg-purple-500/30">
        <SmoothScroll>
          <GlobalBackground />
          <CustomCursor />
          <Navbar />
          <main className="flex flex-col min-h-screen">
            {children}
          </main>
          <Footer />
        </SmoothScroll>
      </body>
    </html>
  );
}
