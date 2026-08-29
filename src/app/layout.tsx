import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const siteUrl = "https://tourism-website-five-chi.vercel.app";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),

  title: {
    default: "Karakoram Trails by Luqman | Explore Northern Pakistan",
    template: "%s | Karakoram Trails by Luqman",
  },

  description:
    "Discover the mountains of northern Pakistan with Karakoram Trails by Luqman. Explore Hunza, Passu, Fairy Meadows, Gilgit-Baltistan and unforgettable mountain journeys.",

  applicationName: "Karakoram Trails by Luqman",

  authors: [
    {
      name: "Luqman",
    },
  ],

  creator: "Luqman",

  publisher: "Karakoram Trails by Luqman",

  keywords: [
    "Karakoram Trails",
    "Karakoram Trails by Luqman",
    "Karakoram Trails Pakistan",
    "Karakoram Trails Luqman",
    "KT by Luqman",
    "KT Luqman",
    "Luqman tourism",
    "Luqman travel Pakistan",
    "Pakistan tourism",
    "Pakistan travel",
    "Northern Pakistan tourism",
    "Northern Pakistan tours",
    "Northern Pakistan travel",
    "Karakoram tourism",
    "Karakoram tours",
    "Karakoram mountains",
    "Hunza Valley",
    "Hunza Valley tours",
    "Passu",
    "Passu Cones",
    "Passu tours",
    "Gilgit Baltistan",
    "Gilgit Baltistan tourism",
    "Gilgit Baltistan tours",
    "Skardu tours",
    "Fairy Meadows",
    "Fairy Meadows tours",
    "Naltar Valley",
    "Khunjerab Pass",
    "Pakistan mountain tours",
    "Pakistan adventure tours",
    "Pakistan trekking tours",
    "Pakistan hiking tours",
  ],

  alternates: {
    canonical: siteUrl,
  },

  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteUrl,
    siteName: "Karakoram Trails by Luqman",
    title: "Karakoram Trails by Luqman | Explore Northern Pakistan",
    description:
      "Explore the mountains, valleys and cultures of northern Pakistan with Karakoram Trails by Luqman.",
    images: [
      {
        url: "/images/passu-cones-optimized.jpg",
        width: 2400,
        height: 2400,
        alt: "Passu Cones in the Karakoram Mountains of northern Pakistan",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Karakoram Trails by Luqman | Explore Northern Pakistan",
    description:
      "Explore the mountains, valleys and cultures of northern Pakistan with Karakoram Trails by Luqman.",
    images: ["/images/passu-cones-optimized.jpg"],
  },

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-video-preview": -1,
      "max-snippet": -1,
    },
  },

  category: "travel",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}