import { createFileRoute } from "@tanstack/react-router";
import { PageShell, Section2Problem } from "@/components/pitch";

export const Route = createFileRoute("/problem")({
  head: () => ({
    meta: [
      { title: "The Approach — Georgia Civil" },
      {
        name: "description",
        content:
          "Better planning means making informed decisions early — before constraints become costly delays.",
      },
      { property: "og:title", content: "The Approach — Georgia Civil" },
      {
        property: "og:description",
        content: "Why our approach begins earlier, and what better planning actually means.",
      },
    ],
  }),
  component: () => (
    <PageShell>
      <Section2Problem />
    </PageShell>
  ),
});
