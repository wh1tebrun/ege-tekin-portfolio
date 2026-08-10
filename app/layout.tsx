import type { Metadata } from "next";
import { headers } from "next/headers";
import "./globals.css";

const title = "Ege Tekin — Full-Stack Developer · MedTech Focus";
const description =
  "Portfolio of Ege Tekin, completing a B.Sc. in Computer Science at the University of Freiburg, working at Fraunhofer ISE, and preparing to begin Medicine at Akdeniz University.";

export async function generateMetadata(): Promise<Metadata> {
  const requestHeaders = await headers();
  const forwardedHost = requestHeaders.get("x-forwarded-host")?.split(",")[0]?.trim();
  const host = forwardedHost || requestHeaders.get("host");
  const forwardedProtocol = requestHeaders
    .get("x-forwarded-proto")
    ?.split(",")[0]
    ?.trim();
  const protocol = forwardedProtocol === "http" ? "http" : "https";
  const socialImage = host ? `${protocol}://${host}/og.png` : undefined;

  return {
    title,
    description,
    openGraph: {
      title,
      description: "Full-stack product development with a long-term direction in MedTech.",
      type: "website",
      images: socialImage
        ? [{ url: socialImage, alt: "Ege Tekin — Full-Stack Developer, MedTech Focus" }]
        : undefined,
    },
    twitter: {
      card: "summary_large_image",
      title,
      description: "Full-stack product development with a long-term direction in MedTech.",
      images: socialImage ? [socialImage] : undefined,
    },
  };
}

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
