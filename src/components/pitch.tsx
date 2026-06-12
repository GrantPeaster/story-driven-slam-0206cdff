import { Link } from "@tanstack/react-router";
import { useEffect } from "react";
import gciLogo from "@/assets/gci-secondary-logo.png";
import gciGeorgiaMark from "@/assets/gci-georgia-mark.png";
import {
  ArrowRight,
  Workflow,
  Users,
  Clock,
  AlertTriangle,
  Layers,
  MapPin,
  Compass,
  Ruler,
  TreePine,
} from "lucide-react";

export const SECTIONS = [
  { id: "open", label: "Open", to: "/" as const },
  { id: "problem", label: "Approach", to: "/problem" as const },
  { id: "difference", label: "Process", to: "/difference" as const },
  { id: "scale", label: "Proof", to: "/scale" as const },
  { id: "pitch", label: "Pitch", to: "/pitch" as const },
];

export function useRevealOnScroll() {
  useEffect(() => {
    const els = document.querySelectorAll<HTMLElement>(
      ".reveal, .reveal-fade, .brass-rule, .underline-sweep",
    );
    const io = new IntersectionObserver(
      (entries) => {
        for (const e of entries) {
          const target = e.target as HTMLElement;
          const replays = target.classList.contains("underline-sweep");
          if (e.isIntersecting) {
            target.classList.add("in-view");
          } else if (replays) {
            target.classList.remove("in-view");
          }
        }
      },
      { threshold: 0.35 },
    );
    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);
}

export function Nav() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md bg-background/70 border-b border-border/60">
      <div className="mx-auto max-w-7xl px-6 h-16 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-3 group">
          <img src={gciLogo} alt="Georgia Civil" className="h-9 sm:h-10 w-auto" />
        </Link>
        <nav className="hidden md:flex items-center gap-7 text-xs">
          {SECTIONS.map((s, i) => (
            <Link
              key={s.id}
              to={s.to}
              className="font-nav text-muted-foreground hover:text-primary transition-colors relative"
              activeProps={{ className: "font-nav text-primary relative" }}
              activeOptions={{ exact: true }}
            >
              <span className="text-brass font-mono text-[11px] mr-2 tracking-normal normal-case">
                {String(i + 1).padStart(2, "0")}
              </span>
              {s.label}
            </Link>
          ))}
        </nav>
        <div className="flex items-center gap-5">
          <Link
            to="/pitch"
            className="hidden md:inline-flex items-center gap-1.5 text-sm font-medium px-4 py-2 rounded-full bg-primary text-primary-foreground hover:bg-primary/90 transition-colors"
          >
            The pitch <ArrowRight className="h-3.5 w-3.5" />
          </Link>
        </div>
      </div>
    </header>
  );
}

export function Footer() {
  return (
    <footer className="border-t border-border py-10 bg-background">
      <div className="mx-auto max-w-7xl px-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-muted-foreground">
        <div className="flex items-center gap-4">
          <img src={gciLogo} alt="Georgia Civil" className="h-9 w-auto" />
          <span className="h-8 w-px bg-border" aria-hidden="true" />
          <img src={gciGeorgiaMark} alt="" className="h-9 w-auto" aria-hidden="true" />
          <span className="font-nav text-[10px]">Madison, GA</span>
        </div>
        <span className="font-nav text-[10px]">
          Civil Engineering · Landscape Architecture · Land Surveying
        </span>
      </div>
    </footer>
  );
}

export function PageShell({ children }: { children: React.ReactNode }) {
  useRevealOnScroll();
  return (
    <div className="min-h-screen bg-background text-foreground flex flex-col">
      <Nav />
      <main className="flex-1">{children}</main>
      <Footer />
    </div>
  );
}

function Stat({ label, value, suffix }: { label: string; value: string; suffix?: string }) {
  return (
    <div>
      <div className="font-display font-extrabold text-3xl text-primary">
        {value}
        {suffix && <span className="text-brass text-sm font-medium ml-0.5">{suffix}</span>}
      </div>
      <div className="text-[10px] uppercase tracking-widest text-muted-foreground mt-1">
        {label}
      </div>
    </div>
  );
}

/* ---------------- 1. Open ---------------- */

export function Section1Open() {
  return (
    <section
      id="open"
      className="relative min-h-screen flex items-center pt-24 pb-20 overflow-hidden bg-gradient-hero"
    >
      <video
        className="absolute inset-0 h-full w-full object-cover opacity-30"
        src="/media/farmview.mp4"
        poster="/media/farmview.jpg"
        autoPlay
        muted
        loop
        playsInline
        preload="metadata"
        aria-hidden="true"
      />
      <div className="absolute inset-0 bg-gradient-to-br from-background/85 via-background/70 to-background/90" />
      <div className="absolute inset-0 bg-gradient-hero opacity-80" />

      <div className="relative mx-auto max-w-7xl px-6 grid lg:grid-cols-12 gap-12 items-center w-full">
        <div className="lg:col-span-7 reveal">
          <div className="flex items-center gap-3 mb-8">
            <div className="brass-rule" />
            <span className="text-[11px] uppercase tracking-[0.22em] text-brass font-semibold">
              The Georgia Civil Pitch
            </span>
          </div>
          <h1 className="font-display font-extrabold text-5xl sm:text-6xl lg:text-7xl leading-[0.98] text-primary">
            Built on{" "}
            <span className="underline-sweep">
              <span>Better Planning.</span>
            </span>
          </h1>
          <p className="mt-6 text-lg sm:text-xl italic text-brass max-w-2xl leading-relaxed">
            Where feasibility, optimization, and engineering work as one.
          </p>
          <p className="mt-8 text-lg sm:text-xl text-foreground/75 max-w-2xl leading-relaxed">
            At GCI, we believe successful projects are built on better planning. We integrate
            land planning, surveying, civil engineering, and landscape architecture from the
            very beginning — so owners, developers, municipalities, and institutions understand
            what a site can realistically support before significant time and money are invested.
          </p>
          <div className="mt-10 flex flex-wrap items-center gap-4">
            <Link
              to="/problem"
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full bg-primary text-primary-foreground font-medium hover:bg-primary/90 transition-all hover:shadow-elegant"
            >
              See the approach <ArrowRight className="h-4 w-4" />
            </Link>
            <span className="text-sm text-muted-foreground font-mono">⌖ ~6 min read</span>
          </div>
        </div>

        <div className="lg:col-span-5 reveal-fade">
          <div className="relative">
            <div className="absolute -inset-6 bg-gradient-brass opacity-20 blur-3xl rounded-full" />
            <div className="relative bg-card/95 backdrop-blur border border-border rounded-2xl p-8 shadow-elegant float-slow">
              <div className="flex items-start justify-between gap-6 mb-6">
                <div className="text-[11px] uppercase tracking-[0.22em] text-brass font-semibold">
                  The Promise
                </div>
                <img
                  src={gciGeorgiaMark}
                  alt="Georgia Civil — Georgia mark"
                  className="h-16 w-auto -mt-2 -mr-2 select-none"
                  loading="eager"
                />
              </div>
              <blockquote className="font-display text-2xl sm:text-3xl text-primary leading-snug">
                "Successful projects aren't built on{" "}
                <span className="underline-sweep accent">
                  <span className="text-accent">assumptions</span>
                </span>
                . They're built on better planning."
              </blockquote>
              <div className="mt-8 pt-6 border-t border-border grid grid-cols-3 gap-4 text-center">
                <Stat label="Feasibility" value="1" suffix="st" />
                <Stat label="Optimization" value="1" suffix="team" />
                <Stat label="Engineering" value="1" suffix="process" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------------- 2. Problem ---------------- */

const PROBLEMS = [
  {
    icon: AlertTriangle,
    title: "Brought in too late",
    body: "Many firms get involved after critical decisions are already locked in — when grading, drainage, and utility realities can no longer reshape the plan.",
  },
  {
    icon: Layers,
    title: "Concepts that look good on paper",
    body: "Plans drawn without engineering input ignore constructability, environmental impacts, and long-term functionality — and become costly to change.",
  },
  {
    icon: Clock,
    title: "Costly delays, late surprises",
    body: "Constraints discovered mid-design force redesigns, budget overruns, and missed schedules — risks owners end up absorbing.",
  },
];

export function Section2Problem() {
  return (
    <section id="problem" className="relative py-32 pt-40 bg-primary text-primary-foreground overflow-hidden">
      <video
        className="absolute inset-0 h-full w-full object-cover opacity-15 mix-blend-luminosity"
        src="/media/mcprs.mp4"
        autoPlay
        muted
        loop
        playsInline
        preload="metadata"
        aria-hidden="true"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-primary/85 via-primary/95 to-primary" />
      <div className="relative mx-auto max-w-7xl px-6">
        <div className="max-w-3xl reveal">
          <div className="flex items-center gap-3 mb-6">
            <span className="font-mono text-xs text-brass">02 / Approach</span>
            <div className="h-px flex-1 bg-primary-foreground/15" />
          </div>
          <h2 className="font-display font-bold text-4xl sm:text-5xl lg:text-6xl leading-[1.02]">
            Our approach begins{" "}
            <span className="underline-sweep">
              <span className="text-brass">earlier.</span>
            </span>
          </h2>
          <p className="mt-8 text-lg text-primary-foreground/70 leading-relaxed">
            Better planning means more than a concept that looks good on paper. It means
            identifying constraints before they become costly delays — and evaluating grading,
            drainage, utilities, environmental impacts, constructability, and long-term
            functionality before design decisions become difficult to change.
          </p>
          <p className="mt-4 text-lg text-primary-foreground font-medium leading-relaxed">
            Most importantly, it means making informed decisions early — when they have the
            greatest impact on project success.
          </p>
        </div>

        <div className="mt-20 grid md:grid-cols-3 gap-6">
          {PROBLEMS.map((p, i) => (
            <div
              key={p.title}
              className="reveal hover-lift bg-primary-foreground/[0.04] border border-primary-foreground/10 rounded-2xl p-8 backdrop-blur-sm"
              style={{ animationDelay: `${i * 100}ms` }}
            >
              <div className="h-11 w-11 rounded-xl bg-accent/15 text-accent grid place-items-center mb-6">
                <p.icon className="h-5 w-5" />
              </div>
              <h3 className="font-display font-bold text-xl mb-3">{p.title}</h3>
              <p className="text-primary-foreground/70 text-[15px] leading-relaxed">{p.body}</p>
            </div>
          ))}
        </div>

        <SectionNav prev={{ to: "/", label: "Open" }} next={{ to: "/difference", label: "Process" }} dark />
      </div>
    </section>
  );
}

/* ---------------- 3. Difference ---------------- */

const TIMELINE = [
  {
    label: "Step 1 — Feasibility",
    title: "Test what the site can actually support",
    body: "Land planning, surveying, civil, and landscape architecture together evaluate grading, drainage, utilities, and environmental impacts before commitments are made.",
  },
  {
    label: "Step 2 — Optimization",
    title: "Engineering realities drive the plan",
    body: "Practical field knowledge plus advanced site optimization tools test ideas against real-world conditions — maximizing developable area and value.",
  },
  {
    label: "Step 3 — Engineering",
    title: "One integrated team, start to finish",
    body: "The same team that planned the site engineers it — so decisions made early carry through with no handoff loss.",
  },
];

export function Section3Difference() {
  return (
    <section id="difference" className="relative py-32 pt-40">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid lg:grid-cols-12 gap-14">
          <div className="lg:col-span-5 reveal">
            <span className="font-mono text-xs text-brass">03 / Process</span>
            <h2 className="mt-4 font-display font-bold text-4xl sm:text-5xl text-primary leading-[1.05]">
              Planning driven by engineering realities.
            </h2>
            <div className="brass-rule mt-6" />
            <p className="mt-8 text-lg text-muted-foreground leading-relaxed">
              What makes GCI different is that our planning process is driven by engineering
              realities. Our integrated team works together from day one — combining practical
              field knowledge, technical expertise, and advanced site optimization tools to
              develop solutions that are both achievable and cost-effective.
            </p>
            <p className="mt-4 text-lg text-primary font-medium">
              Reduce risk. Improve constructability. Maximize the value of the investment.
            </p>
            <div className="mt-8 flex flex-wrap gap-2">
              <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-secondary border border-border text-primary text-xs">
                <Compass className="h-3.5 w-3.5 text-brass" /> Land Planning
              </span>
              <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-secondary border border-border text-primary text-xs">
                <Ruler className="h-3.5 w-3.5 text-brass" /> Surveying
              </span>
              <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-secondary border border-border text-primary text-xs">
                <Workflow className="h-3.5 w-3.5 text-brass" /> Civil Engineering
              </span>
              <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-secondary border border-border text-primary text-xs">
                <TreePine className="h-3.5 w-3.5 text-brass" /> Landscape Architecture
              </span>
            </div>
          </div>

          <div className="lg:col-span-7">
            <ol className="relative space-y-10">
              <span className="absolute left-[15px] top-2 bottom-2 w-px bg-gradient-to-b from-brass via-brass/40 to-transparent" />
              {TIMELINE.map((t, i) => (
                <li
                  key={t.title}
                  className="reveal relative pl-12"
                  style={{ animationDelay: `${i * 120}ms` }}
                >
                  <div className="absolute left-0 top-1 h-8 w-8 rounded-full bg-background border-2 border-brass grid place-items-center text-brass font-mono text-xs font-bold">
                    {i + 1}
                  </div>
                  <div className="text-[11px] uppercase tracking-[0.2em] text-brass font-semibold mb-2">
                    {t.label}
                  </div>
                  <h3 className="font-display font-bold text-2xl text-primary mb-2">{t.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{t.body}</p>
                </li>
              ))}
            </ol>
          </div>
        </div>

        <SectionNav prev={{ to: "/problem", label: "Approach" }} next={{ to: "/scale", label: "Proof" }} />
      </div>
    </section>
  );
}

/* ---------------- 4. Proof ---------------- */


const PROJECTS = [
  {
    name: "Bana 85",
    type: "Industrial",
    scale: "700+ acres",
    body: "On a 700-plus-acre industrial development with the potential for millions of square feet of space, our team coordinated grading, utilities, roadway elevations, and site infrastructure as an interconnected system — maximizing developable acreage and overall property value.",
  },
  {
    name: "Prowell Park",
    type: "Master plan refinement",
    scale: "Community-focused",
    body: "We refined an existing master plan by balancing drainage, grading, lighting, buffering, neighborhood compatibility, and future growth — preserving the owner's vision while creating a practical, community-focused solution.",
  },
  {
    name: "Morgan County Park",
    type: "Public infrastructure",
    scale: "Phased growth",
    body: "We developed infrastructure strategies that supported both immediate needs and future phases of development — ensuring today's investment continues delivering value for years to come.",
  },
];

export function Section5Scale() {
  return (
    <section id="scale" className="relative py-32 pt-40">
      <div className="mx-auto max-w-7xl px-6">
        <div className="max-w-3xl reveal">
          <span className="font-mono text-xs text-brass">04 / Proof</span>
          <h2 className="mt-4 font-display font-bold text-4xl sm:text-5xl text-primary leading-[1.05]">
            We've applied that approach across projects of all sizes.
          </h2>
          <div className="brass-rule mt-6" />
          <p className="mt-8 text-lg text-muted-foreground leading-relaxed">
            Industrial developments, municipal facilities, school campuses, recreational
            destinations, residential communities — the goal stays the same: helping clients
            make smarter decisions, reduce uncertainty, and move forward with confidence.
          </p>
        </div>

        <div className="mt-16 grid md:grid-cols-3 gap-6">
          {PROJECTS.map((p, i) => (
            <article
              key={p.name}
              className="reveal hover-lift bg-card border border-border rounded-2xl p-7 shadow-elegant/40 flex flex-col"
              style={{ animationDelay: `${i * 100}ms` }}
            >
              <div className="flex items-center gap-2 text-[10px] uppercase tracking-[0.2em] text-brass font-semibold mb-4">
                <MapPin className="h-3.5 w-3.5" /> {p.type}
              </div>
              <h3 className="font-display font-bold text-2xl text-primary mb-1">{p.name}</h3>
              <div className="text-xs text-muted-foreground font-mono mb-4">{p.scale}</div>
              <p className="text-[15px] text-muted-foreground leading-relaxed">{p.body}</p>
            </article>
          ))}
        </div>

        <div className="mt-16 reveal-fade max-w-3xl mx-auto text-center">
          <p className="font-display text-2xl sm:text-3xl text-primary leading-snug">
            Because successful projects aren't built on{" "}
            <span className="text-muted-foreground line-through decoration-brass/60">
              assumptions
            </span>
            .
            <br />
            They're built on{" "}
            <span className="underline-sweep">
              <span className="text-brass">better planning.</span>
            </span>
          </p>
        </div>

        <SectionNav prev={{ to: "/difference", label: "Process" }} next={{ to: "/pitch", label: "Pitch" }} />
      </div>
    </section>
  );
}

/* ---------------- 5. Pitch ---------------- */

function Pillet({ icon: Icon, label }: { icon: typeof Users; label: string }) {
  return (
    <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-secondary border border-border text-primary text-sm">
      <Icon className="h-3.5 w-3.5 text-brass" />
      {label}
    </span>
  );
}

export function Section6Pitch() {
  return (
    <section id="pitch" className="relative py-32 pt-40 overflow-hidden bg-gradient-hero">
      <div className="mx-auto max-w-5xl px-6 text-center">
        <div className="reveal">
          <span className="font-mono text-xs text-brass">05 / The Pitch</span>
          <h2 className="mt-4 font-display font-extrabold text-4xl sm:text-5xl lg:text-6xl text-primary leading-[1.02]">
            So — what do I tell prospective clients?
          </h2>
          <p className="mt-6 italic text-brass text-lg sm:text-xl">
            Where feasibility, optimization, and engineering work as one.
          </p>
        </div>

        <div className="mt-14 reveal">
          <div className="relative bg-card border border-border rounded-3xl p-10 sm:p-14 shadow-elegant text-left">
            <div className="absolute -top-3 left-10 px-3 py-1 rounded-full bg-accent text-accent-foreground text-[10px] font-semibold uppercase tracking-[0.2em]">
              Presentable Pitch
            </div>
            <p className="font-display font-bold text-2xl sm:text-3xl lg:text-4xl text-primary leading-[1.18]">
              At GCI, we bring land planning, surveying, civil engineering, and landscape
              architecture together from{" "}
              <span className="underline-sweep accent">
                <span className="text-accent">day one</span>
              </span>{" "}
              — to help clients make smarter decisions before costly commitments are made.
            </p>
            <p className="mt-6 text-lg sm:text-xl text-muted-foreground leading-relaxed">
              By combining feasibility, optimization, and engineering into one integrated
              process, we reduce risk, maximize site potential, and help projects move from
              vision to reality with confidence.
            </p>
            <div className="mt-10 pt-8 border-t border-border flex flex-wrap items-center justify-between gap-6">
              <p className="font-display font-extrabold text-2xl text-primary">
                Built on{" "}
                <span className="underline-sweep">
                  <span className="text-brass">better planning.</span>
                </span>
              </p>
              <div className="flex items-center gap-3 flex-wrap">
                <Pillet icon={Compass} label="Feasibility" />
                <Pillet icon={Workflow} label="Optimization" />
                <Pillet icon={Ruler} label="Engineering" />
              </div>
            </div>
          </div>
        </div>

        <div className="mt-12 reveal-fade">
          <Link
            to="/"
            className="inline-flex items-center gap-2 text-sm font-medium text-primary hover:text-accent transition-colors"
          >
            ↑ Run the pitch again
          </Link>
        </div>

        <SectionNav prev={{ to: "/scale", label: "Proof" }} />
      </div>
    </section>
  );
}

/* ---------------- Section navigation ---------------- */

type NavTarget = { to: "/" | "/problem" | "/difference" | "/scale" | "/pitch"; label: string };

function SectionNav({ prev, next, dark }: { prev?: NavTarget; next?: NavTarget; dark?: boolean }) {
  const baseLink = dark
    ? "text-primary-foreground/80 hover:text-brass"
    : "text-muted-foreground hover:text-primary";
  const borderC = dark ? "border-primary-foreground/15" : "border-border";
  return (
    <div className={`mt-24 pt-8 border-t ${borderC} flex items-center justify-between gap-4 text-sm font-nav`}>
      <div>
        {prev && (
          <Link to={prev.to} className={`inline-flex items-center gap-2 ${baseLink} transition-colors`}>
            <ArrowRight className="h-3.5 w-3.5 rotate-180" /> {prev.label}
          </Link>
        )}
      </div>
      <div>
        {next && (
          <Link to={next.to} className={`inline-flex items-center gap-2 ${baseLink} transition-colors`}>
            {next.label} <ArrowRight className="h-3.5 w-3.5" />
          </Link>
        )}
      </div>
    </div>
  );
}
