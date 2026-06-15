import { Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import gciLogo from "@/assets/gci-secondary-logo.png";
import gciGeorgiaMark from "@/assets/gci-georgia-mark.png";
import {
  ArrowRight,
  Workflow,
  Users,
  Clock,
  AlertTriangle,
  Layers,
  Compass,
  Ruler,
  Menu,
  X,
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

/* Small editorial graphic — surveyor's crosshair / target mark */
function CrosshairMark({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 80 80"
      className={className}
      fill="none"
      stroke="currentColor"
      strokeWidth="1"
      aria-hidden="true"
    >
      <circle cx="40" cy="40" r="30" />
      <circle cx="40" cy="40" r="18" />
      <circle cx="40" cy="40" r="2" fill="currentColor" />
      <line x1="40" y1="0" x2="40" y2="22" />
      <line x1="40" y1="58" x2="40" y2="80" />
      <line x1="0" y1="40" x2="22" y2="40" />
      <line x1="58" y1="40" x2="80" y2="40" />
    </svg>
  );
}

/* Topographic contour lines graphic */
function ContourLines({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 400 300"
      className={className}
      fill="none"
      stroke="currentColor"
      strokeWidth="1"
      aria-hidden="true"
    >
      <path d="M-20,260 C 80,220 160,240 220,200 C 280,160 340,180 420,150" />
      <path d="M-20,230 C 80,190 160,210 220,170 C 280,130 340,150 420,120" />
      <path d="M-20,200 C 80,160 160,180 220,140 C 280,100 340,120 420,90" />
      <path d="M-20,170 C 80,130 160,150 220,110 C 280,70 340,90 420,60" />
      <path d="M-20,140 C 80,100 160,120 220,80 C 280,40 340,60 420,30" />
      <path d="M-20,110 C 80,70 160,90 220,50 C 280,10 340,30 420,0" />
    </svg>
  );
}

/* Section number marker used as adjacent graphic */
function SectionMark({ num, label }: { num: string; label: string }) {
  return (
    <div className="flex items-baseline gap-4">
      <span className="font-display font-extrabold text-7xl sm:text-8xl text-brass/25 leading-none">
        {num}
      </span>
      <span className="font-mono text-[11px] uppercase tracking-[0.28em] text-brass">
        {label}
      </span>
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

      <div className="relative mx-auto max-w-7xl px-6 grid lg:grid-cols-12 gap-10 lg:gap-16 items-center w-full">
        <div className="lg:col-span-8 reveal">
          <div className="flex items-center gap-3 mb-8">
            <div className="brass-rule" />
            <span className="text-[11px] uppercase tracking-[0.22em] text-brass font-semibold">
              The Georgia Civil Pitch
            </span>
          </div>
          <h1 className="font-display font-extrabold text-5xl sm:text-6xl lg:text-8xl leading-[0.95] text-primary">
            Built on
            <br />
            <span className="underline-sweep">
              <span>Better Planning.</span>
            </span>
          </h1>
          <p className="mt-8 text-lg sm:text-xl italic text-brass max-w-2xl leading-relaxed border-l-2 border-brass/60 pl-5">
            Where feasibility, optimization, and engineering work as one.
          </p>
          <p className="mt-8 text-lg sm:text-xl text-foreground/75 max-w-2xl leading-relaxed">
            At GCI, we believe successful projects are built on better planning. We integrate
            land planning, surveying, civil engineering, and landscape architecture from the
            very beginning — so owners, developers, municipalities, and institutions understand
            what a site can realistically support before significant time and money are invested.
          </p>
          <div className="mt-10 flex flex-wrap items-center gap-5">
            <Link
              to="/problem"
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full bg-primary text-primary-foreground font-medium hover:bg-primary/90 transition-all hover:shadow-elegant"
            >
              See the approach <ArrowRight className="h-4 w-4" />
            </Link>
            <Link
              to="/pitch"
              className="inline-flex items-center gap-2 text-sm font-nav text-primary hover:text-accent transition-colors"
            >
              Or skip to the pitch <ArrowRight className="h-3.5 w-3.5" />
            </Link>
            <span className="text-sm text-muted-foreground font-mono">⌖ ~6 min read</span>
          </div>
        </div>

        <div className="lg:col-span-4 reveal-fade hidden lg:block">
          <div className="relative text-brass/60">
            <CrosshairMark className="w-full max-w-xs ml-auto" />
            <div className="mt-8 border-l-2 border-brass/40 pl-5 text-right ml-auto max-w-xs">
              <div className="text-[10px] uppercase tracking-[0.25em] text-brass font-semibold mb-2">
                The Promise
              </div>
              <p className="font-display text-xl text-primary leading-snug text-left">
                Successful projects aren't built on{" "}
                <span className="text-accent italic">assumptions.</span>{" "}
                They're built on better planning.
              </p>
              <img
                src={gciGeorgiaMark}
                alt=""
                className="h-12 w-auto mt-6 ml-auto opacity-80"
                aria-hidden="true"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------------- 2. Approach ---------------- */

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
    <section
      id="problem"
      className="relative py-32 pt-40 bg-primary text-primary-foreground overflow-hidden"
    >
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
      <ContourLines className="absolute inset-x-0 bottom-0 w-full h-[60%] text-brass/15" />

      <div className="relative mx-auto max-w-7xl px-6">
        <div className="grid lg:grid-cols-12 gap-12 items-end">
          <div className="lg:col-span-7 reveal">
            <SectionMark num="02" label="Approach" />
            <h2 className="mt-6 font-display font-bold text-4xl sm:text-5xl lg:text-6xl leading-[1.02]">
              Our approach begins{" "}
              <span className="underline-sweep">
                <span className="text-brass">earlier.</span>
              </span>
            </h2>
          </div>
          <div className="lg:col-span-5 reveal">
            <p className="text-lg text-primary-foreground/75 leading-relaxed border-l-2 border-brass/60 pl-5">
              Better planning means more than a concept that looks good on paper. It means
              identifying constraints before they become costly delays — evaluating grading,
              drainage, utilities, environmental impacts, constructability, and long-term
              functionality before design decisions become difficult to change.
            </p>
            <p className="mt-5 text-lg text-primary-foreground font-medium leading-relaxed pl-5">
              Most importantly: making informed decisions early — when they have the greatest
              impact on project success.
            </p>
          </div>
        </div>

        {/* Editorial list — no cards, only rules and adjacent icon graphics */}
        <div className="mt-20 border-t border-primary-foreground/15">
          {PROBLEMS.map((p, i) => (
            <div
              key={p.title}
              className="reveal grid grid-cols-12 gap-6 sm:gap-10 py-10 border-b border-primary-foreground/15 items-start"
              style={{ animationDelay: `${i * 100}ms` }}
            >
              <div className="col-span-2 sm:col-span-1 font-mono text-xs text-brass pt-1">
                0{i + 1}
              </div>
              <div className="col-span-10 sm:col-span-2 flex items-start">
                <p.icon className="h-8 w-8 text-accent" strokeWidth={1.25} />
              </div>
              <h3 className="col-span-12 sm:col-span-4 font-display font-bold text-2xl leading-snug">
                {p.title}
              </h3>
              <p className="col-span-12 sm:col-span-5 text-primary-foreground/70 text-[15px] leading-relaxed">
                {p.body}
              </p>
            </div>
          ))}
        </div>

        <SectionNav
          prev={{ to: "/", label: "Open" }}
          next={{ to: "/difference", label: "Process" }}
          dark
        />
      </div>
    </section>
  );
}

/* ---------------- 3. Process ---------------- */

const TIMELINE = [
  {
    label: "Feasibility",
    title: "Test what the site can actually support",
    body: "Land planning, surveying, civil, and landscape architecture together evaluate grading, drainage, utilities, and environmental impacts before commitments are made.",
  },
  {
    label: "Optimization",
    title: "Engineering realities drive the plan",
    body: "Practical field knowledge plus advanced site optimization tools test ideas against real-world conditions — maximizing developable area and value.",
  },
  {
    label: "Engineering",
    title: "One integrated team, start to finish",
    body: "The same team that planned the site engineers it — so decisions made early carry through with no handoff loss.",
  },
];

const DISCIPLINES = [
  { icon: Compass, label: "Land Planning" },
  { icon: Ruler, label: "Surveying" },
  { icon: Workflow, label: "Civil Engineering" },
];

export function Section3Difference() {
  return (
    <section id="difference" className="relative py-32 pt-40 overflow-hidden">
      <ContourLines className="absolute -right-20 top-20 w-[55%] h-auto text-brass/12" />
      <div className="relative mx-auto max-w-7xl px-6">
        <div className="grid lg:grid-cols-12 gap-12 mb-20">
          <div className="lg:col-span-7 reveal">
            <SectionMark num="03" label="Process" />
            <h2 className="mt-6 font-display font-bold text-4xl sm:text-5xl lg:text-6xl text-primary leading-[1.02]">
              Planning driven by{" "}
              <span className="underline-sweep">
                <span className="text-brass">engineering realities.</span>
              </span>
            </h2>
          </div>
          <div className="lg:col-span-5 reveal flex flex-col justify-end">
            <p className="text-lg text-muted-foreground leading-relaxed border-l-2 border-brass/60 pl-5">
              Our integrated team works together from day one — combining practical field
              knowledge, technical expertise, and advanced site optimization tools to develop
              solutions that are both achievable and cost-effective.
            </p>
            <p className="mt-5 text-lg text-primary font-medium pl-5">
              Reduce risk. Improve constructability. Maximize value.
            </p>
          </div>
        </div>

        {/* Disciplines strip — icons adjacent to text, no pills */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 py-10 border-y border-border reveal">
          {DISCIPLINES.map((d) => (
            <div key={d.label} className="flex items-center gap-3">
              <d.icon className="h-6 w-6 text-brass" strokeWidth={1.25} />
              <span className="font-display text-base text-primary leading-tight">
                {d.label}
              </span>
            </div>
          ))}
        </div>

        {/* Timeline — minimal, editorial */}
        <div className="mt-20 grid lg:grid-cols-12 gap-12">
          <div className="lg:col-span-3 reveal">
            <div className="text-brass/40">
              <CrosshairMark className="w-32" />
            </div>
            <p className="mt-6 font-mono text-xs uppercase tracking-[0.25em] text-brass">
              Three steps,
              <br />
              one continuous team
            </p>
          </div>
          <ol className="lg:col-span-9 relative">
            <span className="absolute left-[15px] top-2 bottom-2 w-px bg-gradient-to-b from-brass via-brass/40 to-transparent" />
            {TIMELINE.map((t, i) => (
              <li
                key={t.title}
                className="reveal relative pl-12 pb-12 last:pb-0"
                style={{ animationDelay: `${i * 120}ms` }}
              >
                <div className="absolute left-0 top-1 h-8 w-8 bg-background border-2 border-brass grid place-items-center text-brass font-mono text-xs font-bold rotate-45">
                  <span className="-rotate-45">{i + 1}</span>
                </div>
                <div className="text-[11px] uppercase tracking-[0.22em] text-brass font-semibold mb-2">
                  Step {i + 1} — {t.label}
                </div>
                <h3 className="font-display font-bold text-2xl sm:text-3xl text-primary mb-3 leading-tight">
                  {t.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed max-w-2xl">{t.body}</p>
              </li>
            ))}
          </ol>
        </div>

        <SectionNav
          prev={{ to: "/problem", label: "Approach" }}
          next={{ to: "/scale", label: "Proof" }}
        />
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
        <div className="grid lg:grid-cols-12 gap-12 items-end">
          <div className="lg:col-span-7 reveal">
            <SectionMark num="04" label="Proof" />
            <h2 className="mt-6 font-display font-bold text-4xl sm:text-5xl lg:text-6xl text-primary leading-[1.02]">
              Applied across projects of{" "}
              <span className="underline-sweep">
                <span className="text-brass">all sizes.</span>
              </span>
            </h2>
          </div>
          <div className="lg:col-span-5 reveal">
            <p className="text-lg text-muted-foreground leading-relaxed border-l-2 border-brass/60 pl-5">
              Industrial developments, municipal facilities, school campuses, recreational
              destinations, residential communities — the goal stays the same: helping clients
              make smarter decisions, reduce uncertainty, and move forward with confidence.
            </p>
          </div>
        </div>

        {/* Editorial project list — text adjacent to a graphic column */}
        <div className="mt-20 border-t border-border">
          {PROJECTS.map((p, i) => (
            <article
              key={p.name}
              className="reveal grid grid-cols-12 gap-6 sm:gap-10 py-14 border-b border-border items-start"
              style={{ animationDelay: `${i * 100}ms` }}
            >
              <div className="col-span-12 sm:col-span-1 font-mono text-xs text-brass pt-3">
                0{i + 1}
              </div>
              <div className="col-span-12 sm:col-span-3">
                <div className="text-brass/50">
                  <CrosshairMark className="w-16" />
                </div>
                <div className="mt-4 text-[10px] uppercase tracking-[0.22em] text-brass font-semibold">
                  {p.type}
                </div>
                <div className="mt-1 text-xs text-muted-foreground font-mono">{p.scale}</div>
              </div>
              <div className="col-span-12 sm:col-span-8">
                <h3 className="font-display font-bold text-3xl sm:text-4xl text-primary mb-4 leading-tight">
                  {p.name}
                </h3>
                <p className="text-[16px] text-muted-foreground leading-relaxed max-w-3xl">
                  {p.body}
                </p>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-20 reveal-fade max-w-3xl mx-auto text-center">
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
          <div className="mt-10">
            <Link
              to="/pitch"
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full bg-primary text-primary-foreground font-medium hover:bg-primary/90 transition-all hover:shadow-elegant"
            >
              Read the pitch <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>

        <SectionNav
          prev={{ to: "/difference", label: "Process" }}
          next={{ to: "/pitch", label: "Pitch" }}
        />
      </div>
    </section>
  );
}

/* ---------------- 5. Pitch ---------------- */

export function Section6Pitch() {
  return (
    <section
      id="pitch"
      className="relative py-32 pt-40 overflow-hidden bg-gradient-hero"
    >
      <ContourLines className="absolute inset-x-0 top-0 w-full h-[50%] text-brass/12" />
      <div className="relative mx-auto max-w-5xl px-6">
        <div className="reveal">
          <SectionMark num="05" label="The Pitch" />
          <h2 className="mt-6 font-display font-extrabold text-4xl sm:text-5xl lg:text-6xl text-primary leading-[1.02]">
            So — what do I tell prospective clients?
          </h2>
          <p className="mt-6 italic text-brass text-lg sm:text-xl border-l-2 border-brass/60 pl-5 max-w-2xl">
            Where feasibility, optimization, and engineering work as one.
          </p>
        </div>

        {/* Editorial pitch — text broken by a contour rule + crosshair, no card */}
        <div className="mt-16 reveal grid lg:grid-cols-12 gap-10">
          <div className="lg:col-span-2 hidden lg:flex flex-col items-start gap-6 text-brass/50">
            <CrosshairMark className="w-20" />
            <div className="h-32 w-px bg-brass/40 ml-10" />
            <div className="font-mono text-[10px] uppercase tracking-[0.25em] text-brass">
              Presentable
              <br />
              Pitch
            </div>
          </div>
          <div className="lg:col-span-10 border-l-2 border-brass/40 pl-6 lg:pl-10">
            <p className="font-display font-bold text-2xl sm:text-3xl lg:text-4xl text-primary leading-[1.18]">
              At GCI, we bring land planning, surveying, civil engineering, and landscape
              architecture together from{" "}
              <span className="underline-sweep accent">
                <span className="text-accent">day one</span>
              </span>{" "}
              — to help clients make smarter decisions before costly commitments are made.
            </p>
            <p className="mt-8 text-lg sm:text-xl text-muted-foreground leading-relaxed">
              By combining feasibility, optimization, and engineering into one integrated
              process, we reduce risk, maximize site potential, and help projects move from
              vision to reality with confidence.
            </p>

            <div className="mt-12 pt-8 border-t border-border">
              <p className="font-display font-extrabold text-3xl sm:text-4xl text-primary">
                Built on{" "}
                <span className="underline-sweep">
                  <span className="text-brass">better planning.</span>
                </span>
              </p>
              <div className="mt-6 flex flex-wrap items-center gap-x-8 gap-y-3 text-sm font-nav text-muted-foreground">
                <span className="flex items-center gap-2">
                  <Compass className="h-4 w-4 text-brass" /> Feasibility
                </span>
                <span className="h-3 w-px bg-border" />
                <span className="flex items-center gap-2">
                  <Workflow className="h-4 w-4 text-brass" /> Optimization
                </span>
                <span className="h-3 w-px bg-border" />
                <span className="flex items-center gap-2">
                  <Ruler className="h-4 w-4 text-brass" /> Engineering
                </span>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-16 reveal-fade flex flex-wrap items-center gap-6">
          <Link
            to="/"
            className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full bg-primary text-primary-foreground font-medium hover:bg-primary/90 transition-all hover:shadow-elegant"
          >
            ↑ Run the pitch again
          </Link>
          <Link
            to="/scale"
            className="inline-flex items-center gap-2 text-sm font-nav text-primary hover:text-accent transition-colors"
          >
            <ArrowRight className="h-3.5 w-3.5 rotate-180" /> Back to proof
          </Link>
        </div>

        <SectionNav prev={{ to: "/scale", label: "Proof" }} />
      </div>
    </section>
  );
}

/* ---------------- Section navigation ---------------- */

type NavTarget = { to: "/" | "/problem" | "/difference" | "/scale" | "/pitch"; label: string };

function SectionNav({
  prev,
  next,
  dark,
}: {
  prev?: NavTarget;
  next?: NavTarget;
  dark?: boolean;
}) {
  const baseLink = dark
    ? "text-primary-foreground/80 hover:text-brass"
    : "text-muted-foreground hover:text-primary";
  const borderC = dark ? "border-primary-foreground/15" : "border-border";
  return (
    <div
      className={`mt-24 pt-8 border-t ${borderC} flex items-center justify-between gap-4 text-sm font-nav`}
    >
      <div>
        {prev && (
          <Link
            to={prev.to}
            className={`inline-flex items-center gap-2 ${baseLink} transition-colors`}
          >
            <ArrowRight className="h-3.5 w-3.5 rotate-180" /> {prev.label}
          </Link>
        )}
      </div>
      <div>
        {next && (
          <Link
            to={next.to}
            className={`inline-flex items-center gap-2 ${baseLink} transition-colors`}
          >
            {next.label} <ArrowRight className="h-3.5 w-3.5" />
          </Link>
        )}
      </div>
    </div>
  );
}

// Suppress unused-import warning — Users icon kept for potential future use.
void Users;
