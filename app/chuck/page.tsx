import type { Metadata } from "next";
import ChuckPage from "./chuck-page";

export const metadata: Metadata = {
  title: "Chuck — Build the business behind your audience",
  description: "A focused growth system for creators ready to turn attention into a real, scalable business.",
};

export default function Page() {
  return <ChuckPage />;
}
