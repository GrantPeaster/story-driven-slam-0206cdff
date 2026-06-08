import { createFileRoute } from "@tanstack/react-router";
import { PageShell, Section5Scale } from "@/components/pitch";

export const Route = createFileRoute("/scale")({
  head: () => ({
    meta: [
      { title: "Scale — Georgia Civil" },
      {
        name: "description",
        content:
          "Regional depth and local knowledge — without the trade-offs of a large firm or a small one.",
      },
      { property: "og:title", content: "Scale — Georgia Civil" },
      {
        property: "og:description",
        content: "Why our size is the point, not a limitation.",
      },
    ],
  }),
  component: () => (
    <PageShell>
      <Section5Scale />
    </PageShell>
  ),
});
