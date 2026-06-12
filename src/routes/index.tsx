import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { PageShell, Section1Open } from "@/components/pitch";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Georgia Civil — Built on Better Planning" },
      {
        name: "description",
        content:
          "Where feasibility, optimization, and engineering work as one. Land planning, surveying, civil engineering, and landscape architecture together from day one.",
      },
      { property: "og:title", content: "Georgia Civil — Built on Better Planning" },
      {
        property: "og:description",
        content:
          "Successful projects aren't built on assumptions. They're built on better planning.",
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
          Approach <ArrowRight className="h-3.5 w-3.5" />
        </Link>
      </div>
    </PageShell>
  );
}
