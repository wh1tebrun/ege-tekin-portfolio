import type { Metadata } from "next";
import { headers } from "next/headers";
import "./globals.css";

const title = "Ege Tekin — Software & Systems Engineer";
const description =
  "Portfolio of Ege Tekin, a University of Freiburg Computer Science graduate with two years of working-student experience at Fraunhofer ISE, focused on software engineering, full-stack development, and hardware architecture.";

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
      description: "Software engineering, full-stack development, and hardware architecture.",
      type: "website",
      images: socialImage
        ? [{ url: socialImage, alt: "Ege Tekin — Software, Full-Stack, Hardware Architecture" }]
        : undefined,
    },
    twitter: {
      card: "summary_large_image",
      title,
      description: "Software engineering, full-stack development, and hardware architecture.",
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
