import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { PageShell, Section1Open } from "@/components/pitch";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Georgia Civil — Your Complete Project Partner" },
      {
        name: "description",
        content:
          "Don't settle for transactional services. Georgia Civil puts planners, surveyors, and civil engineers on the same team from day one.",
      },
      { property: "og:title", content: "Georgia Civil — Your Complete Project Partner" },
      {
        property: "og:description",
        content:
          "Integrated planning, engineering, and surveying. One team. One process. No surprises.",
      },
    ],
  }),
  component: OpenPage,
});

function OpenPage() {
  return (
    <PageShell>
      <Section1Open />
      <div className="mx-auto max-w-7xl px-6 pb-20 -mt-10 flex justify-end">
        <Link
          to="/problem"
          className="inline-flex items-center gap-2 text-sm font-nav text-muted-foreground hover:text-primary transition-colors"
        >
          Problem <ArrowRight className="h-3.5 w-3.5" />
        </Link>
      </div>
    </PageShell>
  );
}
