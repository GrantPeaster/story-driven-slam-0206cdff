import { createFileRoute } from "@tanstack/react-router";
import { PageShell, Section3Difference } from "@/components/pitch";

export const Route = createFileRoute("/difference")({
  head: () => ({
    meta: [
      { title: "The Difference — Georgia Civil" },
      {
        name: "description",
        content:
          "Planners, surveyors, and civil engineers working the same project from day one. No handoffs, no gaps.",
      },
      { property: "og:title", content: "The Difference — Georgia Civil" },
      {
        property: "og:description",
        content: "One integrated team. One process. One point of contact.",
      },
    ],
  }),
  component: () => (
    <PageShell>
      <Section3Difference />
    </PageShell>
  ),
});
