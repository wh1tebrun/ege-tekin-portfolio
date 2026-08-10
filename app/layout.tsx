import type { Metadata } from "next";
import "@fontsource-variable/manrope/wght.css";
import "@fontsource-variable/newsreader/wght.css";
import "./globals.css";

const title = "Ege Tekin — Software Engineer";
const description =
  "Freiburg-based software engineer building full-stack products and research software. B.Sc. Computer Science at the University of Freiburg, working student at Fraunhofer ISE, and available for selected freelance projects.";

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
        alt: "Ege Tekin — Software Engineer. Software for complex, real-world work.",
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
        alt: "Ege Tekin — Software Engineer. Software for complex, real-world work.",
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
