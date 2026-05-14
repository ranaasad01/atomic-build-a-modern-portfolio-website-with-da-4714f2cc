import type { Metadata } from "next";
import "./globals.css";
import { ThemeProvider } from "@/components/ThemeProvider";

export const metadata: Metadata = {
  title: "Alex Morgan — Full-Stack Developer",
  description:
    "Personal portfolio of Alex Morgan, a full-stack developer specializing in React, Next.js, and Node.js. Building beautiful, performant web experiences.",
  keywords: [
    "full-stack developer",
    "React",
    "Next.js",
    "TypeScript",
    "portfolio",
    "web developer",
  ],
  authors: [{ name: "Alex Morgan" }],
  creator: "Alex Morgan",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://alexmorgan.dev",
    title: "Alex Morgan — Full-Stack Developer",
    description:
      "Personal portfolio of Alex Morgan, a full-stack developer specializing in React, Next.js, and Node.js.",
    siteName: "Alex Morgan Portfolio",
    images: [
      {
        url: "/images/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Alex Morgan — Full-Stack Developer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Alex Morgan — Full-Stack Developer",
    description:
      "Personal portfolio of Alex Morgan, a full-stack developer specializing in React, Next.js, and Node.js.",
    creator: "@alexmorgandev",
    images: ["/images/og-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="manifest" href="/site.webmanifest" />
        <meta name="theme-color" content="#0f172a" />
      </head>
      <body className="bg-slate-50 dark:bg-[#0f172a] text-slate-900 dark:text-slate-100 antialiased">
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange={false}
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
