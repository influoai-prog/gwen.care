import type { Metadata } from "next";
import { headers } from "next/headers";
import "./globals.css";

export async function generateMetadata(): Promise<Metadata> {
  const requestHeaders = await headers();
  const host = requestHeaders.get("host") ?? "localhost:3000";
  const protocol = host.includes("localhost") ? "http" : "https";
  const image = `${protocol}://${host}/og.png`;

  return {
    title: "Gwen — Creator growth, handled",
    description: "A hands-on creator team for content, growth and everything behind the scenes.",
    icons: {
      icon: [{ url: "/chuck-app/gwen-g-mark.png", type: "image/png", sizes: "256x256" }],
      shortcut: "/chuck-app/gwen-g-mark.png",
      apple: [{ url: "/chuck-app/gwen-g-mark.png", sizes: "256x256", type: "image/png" }],
    },
    openGraph: {
      title: "Gwen — Creator growth, handled",
      description: "Content, growth and the work behind the scenes—done with you, every week.",
      images: [{ url: image, width: 1734, height: 907, alt: "Gwen — Creator growth, properly handled." }],
    },
    twitter: {
      card: "summary_large_image",
      title: "Gwen — Creator growth, handled",
      description: "Content, growth and the work behind the scenes—done with you, every week.",
      images: [image],
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
