import { Link } from "@tanstack/react-router";
import { useEffect } from "react";
import gciLogo from "@/assets/gci-secondary-logo.png";
import gciGeorgiaMark from "@/assets/gci-georgia-mark.png";
import {
  ArrowRight,
  Workflow,
  Users,
  Clock,
  CheckCircle2,
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
            Growing.{" "}
            <span className="underline-sweep">
              <span>Creating.</span>
            </span>{" "}
            Innovating.
          </h1>
          <p className="mt-6 text-base sm:text-lg text-brass font-mono tracking-[0.18em] uppercase">
            G · C · I
          </p>
          <p className="mt-8 text-lg sm:text-xl text-foreground/75 max-w-2xl leading-relaxed">
            Every project we touch, we're growing the landscape of our region, creating the
            drawings and plans that make development possible, and innovating with technology
            most firms our size simply don't have access to.
          </p>
          <p className="mt-4 text-lg text-primary font-medium max-w-2xl leading-relaxed">
            Surveyors, civil engineers, and land planners on your team — so you never settle
            for the delays or inflated costs of transactional services.
          </p>
          <div className="mt-10 flex flex-wrap items-center gap-4">
            <Link
              to="/problem"
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full bg-primary text-primary-foreground font-medium hover:bg-primary/90 transition-all hover:shadow-elegant"
            >
              Hear the pitch <ArrowRight className="h-4 w-4" />
            </Link>
            <span className="text-sm text-muted-foreground font-mono">⌖ ~7 min read</span>
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
                "GCI: your{" "}
                <span className="underline-sweep accent">
                  <span className="text-accent">complete</span>
                </span>{" "}
                project partner."
              </blockquote>
              <div className="mt-8 pt-6 border-t border-border grid grid-cols-3 gap-4 text-center">
                <Stat label="Disciplines" value="3" suffix="-in-1" />
                <Stat label="Contact" value="1" suffix="point" />
                <Stat label="Surprises" value="0" />
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
    icon: Layers,
    title: "Data doesn't match",
    body: "Survey, planning, and engineering files drift apart the moment they live in three firms.",
  },
  {
    icon: Clock,
    title: "Schedules slip",
    body: "Every handoff is a waiting line. Deadlines absorb every gap between disciplines.",
  },
  {
    icon: AlertTriangle,
    title: "Flaws caught late",
    body: "By the time someone spots a design conflict, you're already behind and over budget.",
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
            <span className="font-mono text-xs text-brass">02 / Problem</span>
            <div className="h-px flex-1 bg-primary-foreground/15" />
          </div>
          <h2 className="font-display font-bold text-4xl sm:text-5xl lg:text-6xl leading-[1.02]">
            The transactional model is a risk you're absorbing —{" "}
            <span className="underline-sweep">
              <span className="text-brass">every single time.</span>
            </span>
          </h2>
          <p className="mt-8 text-lg text-primary-foreground/70 leading-relaxed">
            If you've worked with separate engineering, planning, and survey firms on the same
            project, you already know what happens.
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

        <SectionNav prev={{ to: "/", label: "Open" }} next={{ to: "/difference", label: "Difference" }} dark />
      </div>
    </section>
  );
}

/* ---------------- 3. Difference ---------------- */

const TIMELINE = [
  {
    label: "Day 1",
    title: "Same room, same project",
    body: "Civil engineers, land planners, and surveyors start together — not in sequence.",
  },
  {
    label: "Every phase",
    title: "One integrated process",
    body: "Shared models. Shared data. Decisions made once and applied everywhere.",
  },
  {
    label: "Every call",
    title: "One point of contact",
    body: "No vendor triangulation. No 'let me loop in the surveyor.' Just answers.",
  },
];

export function Section3Difference() {
  return (
    <section id="difference" className="relative py-32 pt-40">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid lg:grid-cols-12 gap-14">
          <div className="lg:col-span-5 reveal">
            <span className="font-mono text-xs text-brass">03 / The Difference</span>
            <h2 className="mt-4 font-display font-bold text-4xl sm:text-5xl text-primary leading-[1.05]">
              GCI is built differently.
            </h2>
            <div className="brass-rule mt-6" />
            <p className="mt-8 text-lg text-muted-foreground leading-relaxed">
              Our disciplines aren't handed off to each other — they're working together from day
              one, on the same project, toward the same deadline.
            </p>
            <p className="mt-4 text-lg text-primary font-medium">
              No gap between disciplines. No gap between our team.
            </p>
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

        <SectionNav prev={{ to: "/problem", label: "Problem" }} next={{ to: "/scale", label: "Scale" }} />
      </div>
    </section>
  );
}

/* ---------------- 4. Scale ---------------- */

function ScaleStat({
  label,
  value,
  sub,
  accent,
}: {
  label: string;
  value: string;
  sub: string;
  accent?: boolean;
}) {
  return (
    <div
      className={`rounded-xl p-5 border ${
        accent
          ? "bg-brass/15 border-brass/40"
          : "bg-primary-foreground/[0.04] border-primary-foreground/10"
      }`}
    >
      <div className="text-[10px] uppercase tracking-[0.18em] text-primary-foreground/60 mb-2">
        {label}
      </div>
      <div
        className={`font-display font-bold text-2xl ${
          accent ? "text-brass" : "text-primary-foreground"
        }`}
      >
        {value}
      </div>
      <div className="text-xs text-primary-foreground/60 mt-1">{sub}</div>
    </div>
  );
}

export function Section5Scale() {
  return (
    <section id="scale" className="relative py-32 pt-40">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="reveal order-2 lg:order-1">
            <div className="relative aspect-[5/4] rounded-2xl overflow-hidden shadow-elegant">
              <video
                className="absolute inset-0 h-full w-full object-cover"
                src="/media/morganmedical.mp4"
                autoPlay
                muted
                loop
                playsInline
                preload="metadata"
                aria-hidden="true"
              />
              <div className="absolute inset-0 bg-gradient-to-br from-primary/90 via-primary/75 to-primary/95" />
              <div className="relative h-full p-10 flex flex-col justify-between">
                <div className="flex items-center justify-between text-primary-foreground/70 text-xs font-mono">
                  <span>// regional depth × local knowledge</span>
                  <MapPin className="h-4 w-4" />
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <ScaleStat label="Regional firm" value="Depth" sub="technical expertise" />
                  <ScaleStat label="Local firm" value="Speed" sub="actual market knowledge" />
                  <ScaleStat label="GCI" value="Both" sub="without the trade-offs" accent />
                  <ScaleStat label="Result" value="Above" sub="the rest" />
                </div>
              </div>
            </div>
          </div>

          <div className="reveal order-1 lg:order-2">
            <span className="font-mono text-xs text-brass">04 / Scale</span>
            <h2 className="mt-4 font-display font-bold text-4xl sm:text-5xl text-primary leading-[1.05]">
              We're not the largest firm. That's the point.
            </h2>
            <div className="brass-rule mt-6" />
            <p className="mt-8 text-lg text-muted-foreground leading-relaxed">
              Our abilities get questioned because of our size. You're right — we're not a large
              regional firm. That's just another reason GCI is above the rest.
            </p>
            <ul className="mt-8 space-y-4">
              {[
                "Technical depth of a regional practice",
                "Responsiveness of a firm that picks up the phone",
                "Local knowledge of a team that actually knows your market",
              ].map((line) => (
                <li key={line} className="flex items-start gap-3">
                  <CheckCircle2 className="h-5 w-5 text-brass shrink-0 mt-0.5" />
                  <span className="text-primary">{line}</span>
                </li>
              ))}
            </ul>
            <p className="mt-8 text-base text-muted-foreground leading-relaxed border-l-2 border-brass/60 pl-4 italic">
              Right now, a lot of firms are living on the edge — absorbing the delays, cost
              inflation, and communication gaps of a fragmented team. GCI puts you on the
              cutting edge instead: integrated systems, measurable savings, and principals with
              you through every phase of development.
            </p>
          </div>
        </div>

        <SectionNav prev={{ to: "/difference", label: "Difference" }} next={{ to: "/pitch", label: "Pitch" }} />
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
        </div>

        <div className="mt-14 reveal">
          <div className="relative bg-card border border-border rounded-3xl p-10 sm:p-14 shadow-elegant text-left">
            <div className="absolute -top-3 left-10 px-3 py-1 rounded-full bg-accent text-accent-foreground text-[10px] font-semibold uppercase tracking-[0.2em]">
              Presentable Pitch
            </div>
            <p className="font-display font-bold text-2xl sm:text-3xl lg:text-4xl text-primary leading-[1.18]">
              Don't settle for transactional services. We put planners, surveyors, and civil
              engineers on the{" "}
              <span className="underline-sweep accent">
                <span className="text-accent">same team</span>
              </span>{" "}
              from day one. GCI saves you time, money, and the headache of carrying your
              development from firm to firm.
            </p>
            <div className="mt-10 pt-8 border-t border-border flex flex-wrap items-center justify-between gap-6">
              <p className="font-display font-extrabold text-2xl text-primary">
                GCI:{" "}
                <span className="underline-sweep">
                  <span className="text-brass">your complete project partner.</span>
                </span>
              </p>
              <div className="flex items-center gap-4">
                <Pillet icon={Users} label="One team" />
                <Pillet icon={Workflow} label="One process" />
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

        <SectionNav prev={{ to: "/scale", label: "Scale" }} />
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
