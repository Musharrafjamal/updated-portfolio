import type { Metadata } from "next";
import { Manrope, Instrument_Serif } from "next/font/google";
import "./globals.css";

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});
const instrument = Instrument_Serif({
  subsets: ["latin"],
  weight: "400",
  style: ["normal", "italic"],
  variable: "--font-serif",
  display: "swap",
});

const siteUrl = "https://sharcode.tech";
const title = "Sharcode — Musharraf Jamal";
const description =
  "Engineer. Designer. Builder. Explore Musharraf Jamal's selected web, mobile and AI products — thoughtfully built from the first idea to the final interaction.";
const socialImage = {
  url: "/sharcode-social-card.png",
  width: 1200,
  height: 630,
  type: "image/png",
  alt: "Sharcode — Musharraf Jamal. Engineer. Designer. Builder.",
};

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  applicationName: "Sharcode",
  title,
  description,
  authors: [{ name: "Musharraf Jamal", url: siteUrl }],
  creator: "Musharraf Jamal",
  alternates: { canonical: "/" },
  openGraph: {
    title,
    description,
    url: siteUrl,
    siteName: "Sharcode",
    type: "website",
    images: [socialImage],
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
    images: [{ url: socialImage.url, alt: socialImage.alt }],
  },
  icons: {
    icon: [
      { url: "/favicon.svg?v=2", type: "image/svg+xml" },
      { url: "/favicon-32x32.png", type: "image/png", sizes: "32x32" },
      { url: "/favicon-16x16.png", type: "image/png", sizes: "16x16" },
    ],
    shortcut: "/favicon-32x32.png",
    apple: { url: "/apple-touch-icon.png", type: "image/png", sizes: "180x180" },
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${manrope.variable} ${instrument.variable}`}>
        <a className="skip-link" href="#main-content">
          Skip to content
        </a>
        {children}
      </body>
    </html>
  );
}
