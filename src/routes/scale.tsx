import { createFileRoute } from "@tanstack/react-router";
import { PageShell, Section5Scale } from "@/components/pitch";

export const Route = createFileRoute("/scale")({
  head: () => ({
    meta: [
      { title: "Proof — Georgia Civil" },
      {
        name: "description",
        content:
          "Bana 85, Prowell Park, Morgan County Park — better planning applied across industrial, community, and public projects.",
      },
      { property: "og:title", content: "Proof — Georgia Civil" },
      {
        property: "og:description",
        content: "Projects of all sizes built on smarter decisions made earlier.",
      },
    ],
  }),
  component: () => (
    <PageShell>
      <Section5Scale />
    </PageShell>
  ),
});
