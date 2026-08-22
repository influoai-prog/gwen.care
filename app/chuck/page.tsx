import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Gwen | Better Operations",
  description: "We find the costs, bottlenecks and wasted hours dragging down your margins, then turn them into profit.",
};

export default function Page() {
  return (
    <iframe
      src="/chuck-app/index.html"
      title="Gwen — Better Operations"
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
