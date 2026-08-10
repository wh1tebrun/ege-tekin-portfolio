import type { Metadata } from "next";
import "./globals.css";

const title = "Ege Tekin — Software Engineer";
const description =
  "Ege Tekin is a Freiburg-based software engineer building full-stack products and research tools while completing a B.Sc. in Computer Science. Available for freelance web and app projects.";

export const metadata: Metadata = {
  metadataBase: new URL("https://ege-tekin-portfolio.w1b.chatgpt.site"),
  title,
  description,
  openGraph: {
    title,
    description,
    type: "website",
    images: [{ url: "/og.png", alt: "Ege Tekin — Software Engineer" }],
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
    images: ["/og.png"],
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
