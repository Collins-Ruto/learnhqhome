import './globals.css'
import { Analytics } from "@vercel/analytics/react";
import type { Metadata } from "next";
import { Inter } from 'next/font/google'
import GoogleAnalytics from "@/components/GoogleAnalytics";

const inter = Inter({ subsets: ['latin'] })

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS ? (
            <GoogleAnalytics ga_id={process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS} />
          ) : null}
        {children}
        <Analytics />
      </body>
    </html>
  )
}

export const metadata: Metadata = {
  title: {
    default: "LearnHq School & Learning System",
    template: `%s | LearnHq LMS`,
  },
  metadataBase: new URL("https://learnhqhome.vercel.app"),
  description:
    "LearnHQ is a comprehensive learning management system that provides quality education and resources to students, teachers, and parents.",
  keywords: [
    "learnhq",
    "learn",
    "learnhq africa",
    "education",
    "learning management system",
    "lms",
  ],
  alternates: {
    canonical: "/",
  },
  verification: {
    google: process.env.GOOGLE_VERIFICATION,
  },
  authors: [
    {
      name: "Collins Ruto",
      url: "https://collinsruto.netlify.app",
    },
  ],
  icons: [
    {
      rel: "icon",
      type: "image/x-icon",
      sizes: "any",
      url: "/favicon.ico"
  },
    {
      rel: "icon",
      type: "image/png",
      sizes: "32x32",
      url: "/favicon-32x32.png",
    },
    {
      rel: "icon",
      type: "image/png",
      sizes: "16x16",
      url: "/favicon-16x16.png",
    },
    {
      rel: "apple",
      sizes: "180x180",
      url: "/apple-touch-icon.png",
    },
  ],
  themeColor: "#ffffff",
  manifest: "https://learnhqhome.vercel.app/site.webmanifest",
  openGraph: {
    type: "website",
    title: "LearnHq School & Learning System",
    siteName: "LearnHq School & Learning System",
    url: "https://learnhqhome.vercel.app",
    description:
      "LearnHQ is a comprehensive learning management system that provides quality education and resources to students, teachers, and parents.",
    images: [
      {
        url: "https://learnhq.vercel.app/learnhq-cover.jpg",
      },
    ],
  },
  twitter: {
    title: "LearnHq School & Learning System",
    description:
      "LearnHQ is a comprehensive learning management system that provides quality education and resources to students, teachers, and parents.",
    card: "summary_large_image",
    site: "@learnhqafrica",
    creator: "@ruto_collins_",
    images: "https://learnhq.vercel.app/learnhq-cover.jpg",
  },
  viewport: {
    width: "device-width",
    initialScale: 1,
    maximumScale: 1,
  },
  robots: {},
};