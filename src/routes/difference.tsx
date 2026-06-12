import { createFileRoute } from "@tanstack/react-router";
import { PageShell, Section3Difference } from "@/components/pitch";

export const Route = createFileRoute("/difference")({
  head: () => ({
    meta: [
      { title: "The Process — Georgia Civil" },
      {
        name: "description",
        content:
          "Planning driven by engineering realities. Feasibility, optimization, and engineering as one integrated process.",
      },
      { property: "og:title", content: "The Process — Georgia Civil" },
      {
        property: "og:description",
        content: "One integrated team, from feasibility through engineering.",
      },
    ],
  }),
  component: () => (
    <PageShell>
      <Section3Difference />
    </PageShell>
  ),
});
