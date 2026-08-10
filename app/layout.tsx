import type { Metadata } from "next";
import "@fontsource-variable/manrope/wght.css";
import "./globals.css";

const title = "Ege Tekin — Software Engineer";
const description =
  "Ege Tekin is a software engineer in Freiburg working across full-stack products, systems software, and applied research.";

export const metadata: Metadata = {
  metadataBase: new URL("https://ege-tekin-portfolio.w1b.chatgpt.site"),
  applicationName: "Ege Tekin Portfolio",
  title,
  description,
  authors: [{ name: "Ege Tekin" }],
  creator: "Ege Tekin",
  alternates: { canonical: "/" },
  openGraph: {
    title,
    description,
    type: "website",
    locale: "en_US",
    url: "/",
    siteName: "Ege Tekin",
    images: [
      {
        url: "/og.png",
        width: 1730,
        height: 909,
        alt: "Ege Tekin — Software Engineer. Freiburg, 2026.",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
    images: [
      {
        url: "/og.png",
        alt: "Ege Tekin — Software Engineer. Freiburg, 2026.",
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
