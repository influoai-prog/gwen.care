import type { Metadata } from "next";
import ChuckPage from "./chuck-page";

export const metadata: Metadata = {
  title: "gwen — Better Operations",
  description: "We find the costs, bottlenecks and wasted hours dragging down your margins, then turn them into profit.",
};

export default function Page() {
  return <ChuckPage />;
}
