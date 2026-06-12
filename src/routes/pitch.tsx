import { createFileRoute } from "@tanstack/react-router";
import { PageShell, Section6Pitch } from "@/components/pitch";

export const Route = createFileRoute("/pitch")({
  head: () => ({
    meta: [
      { title: "The Pitch — Georgia Civil" },
      {
        name: "description",
        content:
          "Built on better planning. Where feasibility, optimization, and engineering work as one.",
      },
      { property: "og:title", content: "The Pitch — Georgia Civil" },
      {
        property: "og:description",
        content:
          "Land planning, surveying, civil engineering, and landscape architecture together from day one.",
      },
    ],
  }),
  component: () => (
    <PageShell>
      <Section6Pitch />
    </PageShell>
  ),
});
