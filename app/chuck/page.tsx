import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Gwen Inc",
  description: "We handle the strategy, growth, messaging and daily operations so you can focus on content without burning out.",
  icons: {
    icon: [{ url: "/chuck-app/gwen-g-mark-rounded.png", type: "image/png", sizes: "256x256" }],
    shortcut: "/chuck-app/gwen-g-mark-rounded.png",
    apple: [{ url: "/chuck-app/gwen-g-mark-rounded.png", sizes: "256x256", type: "image/png" }],
  },
  openGraph: {
    siteName: "Gwen Inc",
    title: "You create. We handle the rest.",
    description: "We handle the strategy, growth, messaging and daily operations so you can focus on content without burning out.",
    url: "https://gwen.care/chuck",
    type: "website",
    images: [{ url: "https://gwen.care/gwen-social-preview-v2.png", width: 1200, height: 630, alt: "You create. We handle the rest." }],
  },
  twitter: {
    card: "summary_large_image",
    title: "You create. We handle the rest.",
    description: "We handle the strategy, growth, messaging and daily operations so you can focus on content without burning out.",
    images: ["https://gwen.care/gwen-social-preview-v2.png"],
  },
};

export default function Page() {
  return (
    <iframe
      src="/chuck-app/index.html"
      title="gwen — Better Operations"
      style={{
        position: "fixed",
        inset: 0,
        width: "100%",
        height: "100dvh",
        border: 0,
        background: "#fff",
      }}
    />
  );
}
