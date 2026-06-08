import { createFileRoute } from "@tanstack/react-router";
import { PageShell, Section2Problem } from "@/components/pitch";

export const Route = createFileRoute("/problem")({
  head: () => ({
    meta: [
      { title: "The Problem — Georgia Civil" },
      {
        name: "description",
        content:
          "Why the transactional model of separate engineering, planning, and survey firms costs you time, money, and certainty.",
      },
      { property: "og:title", content: "The Problem — Georgia Civil" },
      {
        property: "og:description",
        content: "Data drift, schedule slip, and late-caught flaws — the hidden cost of handoffs.",
      },
    ],
  }),
  component: () => (
    <PageShell>
      <Section2Problem />
    </PageShell>
  ),
});
