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

export const metadata: Metadata = {
  title: {
    default: "Kyle Abad — Computer Engineering & Design",
    template: "%s — Kyle Abad",
  },

  description:
    "Portfolio of Kyle Abad, a Computer Engineering student exploring software, machine learning, hardware, and graphic design.",

  authors: [
    {
      name: "Kyle Abad",
    },
  ],

  creator: "Kyle Abad",

  openGraph: {
    type: "website",
    locale: "en_US",
    siteName: "Kyle Abad Portfolio",

    title: "Kyle Abad — Computer Engineering & Design",

    description:
      "Portfolio of Kyle Abad, a Computer Engineering student exploring software, machine learning, hardware, and graphic design.",

    images: [
      {
        url: "/opengraph-image.png",
        width: 1200,
        height: 630,
        alt: "Kyle Abad — Computer Engineering & Design",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",

    title: "Kyle Abad — Computer Engineering & Design",

    description:
      "Portfolio of Kyle Abad, a Computer Engineering student exploring software, machine learning, hardware, and graphic design.",

    images: ["/opengraph-image.png"],
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
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="flex min-h-full flex-col">{children}</body>
    </html>
  );
}