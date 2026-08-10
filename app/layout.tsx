import type { Metadata } from "next";
import "@fontsource-variable/manrope/wght.css";
import "@fontsource/instrument-serif";
import "./globals.css";

const title = "Ege Tekin — Software Engineering & Applied Research";
const description =
  "Ege Tekin builds software at the intersection of engineering and applied research, with a long-term focus on medical technology.";

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
        url: "/og-editorial.png",
        width: 1730,
        height: 909,
        alt: "Ege Tekin — Software Engineering, Applied Research, and Medical Technology. Freiburg, 2026.",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
    images: [
      {
        url: "/og-editorial.png",
        alt: "Ege Tekin — Software Engineering, Applied Research, and Medical Technology. Freiburg, 2026.",
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
