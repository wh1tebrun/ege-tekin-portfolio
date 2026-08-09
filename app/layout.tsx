import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Ege Tekin — Software Engineer",
  description:
    "Portfolio of Ege Tekin, a Computer Science graduate from the University of Freiburg with experience at Fraunhofer ISE.",
  openGraph: {
    title: "Ege Tekin — Software Engineer",
    description:
      "Computer Science, applied research, and thoughtful product engineering.",
    type: "website",
  },
  twitter: {
    card: "summary",
    title: "Ege Tekin — Software Engineer",
    description:
      "Computer Science, applied research, and thoughtful product engineering.",
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
