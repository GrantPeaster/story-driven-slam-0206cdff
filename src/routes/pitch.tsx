import { createFileRoute } from "@tanstack/react-router";
import { PageShell, Section6Pitch } from "@/components/pitch";

export const Route = createFileRoute("/pitch")({
  head: () => ({
    meta: [
      { title: "The Pitch — Georgia Civil" },
      {
        name: "description",
        content:
          "GCI: your complete project partner. Planners, surveyors, and civil engineers on the same team from day one.",
      },
      { property: "og:title", content: "The Pitch — Georgia Civil" },
      {
        property: "og:description",
        content: "One team. One process. Saves you time, money, and the headache.",
      },
    ],
  }),
  component: () => (
    <PageShell>
      <Section6Pitch />
    </PageShell>
  ),
});
