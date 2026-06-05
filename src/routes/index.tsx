import { createFileRoute } from "@tanstack/react-router";
import { useEffect } from "react";
import gciLogoNavy from "@/assets/gci-logo-navy.png";
import gciLogoWhite from "@/assets/gci-logo-white.png";
import brandGraphic from "@/assets/brand-web-graphic.png";
import georgiaMap from "@/assets/georgia-map.png";
import { ArrowRight } from "lucide-react";

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
          "Growing. Creating. Innovating. Civil engineering, landscape architecture, and land surveying under one roof.",
      },
    ],
  }),
  component: PitchPage,
});

const SECTIONS = [
  { id: "open", n: "01", label: "Open" },
  { id: "why", n: "02", label: "Why GCI" },
  { id: "difference", n: "03", label: "Difference" },
  { id: "proof", n: "04", label: "Proof" },
  { id: "scale", n: "05", label: "Scale" },
  { id: "pitch", n: "06", label: "Pitch" },
] as const;

function PitchPage() {
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
      { threshold: 0.3 },
    );
    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Nav />
      <main>
        <SectionOpen />
        <SectionWhy />
        <SectionDifference />
        <SectionProof />
        <SectionScale />
        <SectionPitch />
      </main>
      <Footer />
    </div>
  );
}

/* ---------------- Nav ---------------- */

function Nav() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/85 backdrop-blur-md">
      <div className="mx-auto max-w-[1400px] px-6 lg:px-12 h-20 flex items-center justify-between">
        <a href="#open" className="flex items-center">
          <img src={gciLogoNavy} alt="Georgia Civil" className="h-9 sm:h-10 w-auto" />
        </a>
        <nav className="hidden md:flex items-center gap-8">
          {SECTIONS.map((s) => (
            <a
              key={s.id}
              href={`#${s.id}`}
              className="label-caps text-foreground/70 hover:text-foreground transition-colors flex items-baseline gap-1.5"
            >
              <span className="text-brass">{s.n}</span>
              <span>{s.label}</span>
            </a>
          ))}
        </nav>
        <a
          href="#pitch"
          className="hidden md:inline-flex items-center gap-2 label-caps text-foreground hover:text-brass transition-colors"
        >
          The Pitch <ArrowRight className="h-3 w-3" />
        </a>
      </div>
      <div className="hairline" />
    </header>
  );
}

/* ---------------- 01. Open ---------------- */

function SectionOpen() {
  return (
    <section id="open" className="relative min-h-screen flex flex-col pt-28 pb-12 overflow-hidden">
      {/* Subtle background video */}
      <video
        className="absolute inset-0 h-full w-full object-cover opacity-[0.18]"
        src="/media/farmview.mp4"
        poster="/media/farmview.jpg"
        autoPlay
        muted
        loop
        playsInline
        preload="metadata"
        aria-hidden="true"
      />
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(180deg, rgba(241,236,228,0.85) 0%, rgba(241,236,228,0.95) 60%, rgba(241,236,228,1) 100%)",
        }}
      />

      <div className="relative mx-auto max-w-[1400px] px-6 lg:px-12 flex-1 flex flex-col justify-center w-full">
        {/* Eyebrow row */}
        <div className="flex items-baseline gap-6 mb-12">
          <span className="label-caps text-brass">01 — Open</span>
          <div className="hairline flex-1" />
          <span className="label-caps text-foreground/50">Madison, Georgia</span>
        </div>

        {/* Editorial headline */}
        <h1 className="reveal font-serif text-[clamp(3rem,9vw,8.5rem)] leading-[0.92] text-primary max-w-[14ch]">
          Don't settle for{" "}
          <em className="not-italic">
            <span className="underline-sweep thick">
              <span>transactional</span>
            </span>
          </em>{" "}
          services.
        </h1>

        <div className="mt-14 grid lg:grid-cols-12 gap-12 items-end">
          <p className="lg:col-span-5 reveal text-lg sm:text-xl text-foreground/75 leading-relaxed max-w-xl">
            One team of planners, surveyors, and civil engineers — working the same project from
            day one. No handoffs. No data gaps. No surprises.
          </p>
          <div className="lg:col-span-4 lg:col-start-9 reveal flex items-center gap-6">
            <a
              href="#why"
              className="group inline-flex items-center gap-3 label-caps text-primary border-b border-primary pb-2 hover:border-brass hover:text-brass transition-colors"
            >
              Hear the pitch
              <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
            </a>
          </div>
        </div>

        {/* Brand web graphic band — road / topo / skyline */}
        <div className="mt-20 reveal-fade">
          <img
            src={brandGraphic}
            alt="Georgia Civil web graphic: road, topographic hills, and city skyline"
            className="w-full h-32 sm:h-44 lg:h-56 object-contain object-center opacity-90 drift-slow"
          />
        </div>
      </div>
    </section>
  );
}

/* ---------------- 02. Why GCI ---------------- */

const PROBLEMS = [
  {
    n: "i.",
    title: "Data doesn't match.",
    body: "Survey, planning, and engineering files drift apart the moment they live in three firms.",
  },
  {
    n: "ii.",
    title: "Schedules slip.",
    body: "Every handoff is a waiting line. Deadlines absorb every gap between disciplines.",
  },
  {
    n: "iii.",
    title: "Flaws are caught late.",
    body: "By the time someone spots a design conflict, you're already behind and over budget.",
  },
];

function SectionWhy() {
  return (
    <section id="why" className="relative bg-primary text-primary-foreground overflow-hidden">
      {/* Background video */}
      <video
        className="absolute inset-0 h-full w-full object-cover opacity-[0.12] mix-blend-screen"
        src="/media/mcprs.mp4"
        autoPlay
        muted
        loop
        playsInline
        preload="metadata"
        aria-hidden="true"
      />
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(180deg, rgba(2,5,52,0.92) 0%, rgba(2,5,52,0.85) 50%, rgba(2,5,52,0.96) 100%)",
        }}
      />

      <div className="relative mx-auto max-w-[1400px] px-6 lg:px-12 py-32 lg:py-40">
        <div className="flex items-baseline gap-6 mb-16">
          <span className="label-caps text-brass">02 — Why GCI</span>
          <div className="h-px flex-1 bg-primary-foreground/20" />
        </div>

        <h2 className="reveal font-serif text-[clamp(2.5rem,6.5vw,5.5rem)] leading-[0.98] max-w-[18ch]">
          The transactional model is a risk you're absorbing —{" "}
          <span className="underline-sweep">
            <span className="text-brass italic">every single time.</span>
          </span>
        </h2>

        <div className="mt-20 grid lg:grid-cols-12 gap-12">
          <p className="reveal lg:col-span-5 dropcap text-lg leading-relaxed text-primary-foreground/85">
            If you've worked with separate engineering, planning, and survey firms on the same
            project, you already know what happens. Data doesn't match. Schedules slip waiting on
            the next handoff. And by the time someone catches a design flaw, you're already behind
            and over budget. In a deadline-driven industry, that's a risk you're absorbing every
            single time.
          </p>

          <ol className="lg:col-span-6 lg:col-start-7 space-y-0">
            {PROBLEMS.map((p, i) => (
              <li
                key={p.title}
                className="reveal grid grid-cols-[3rem_1fr] gap-6 py-8 border-t border-primary-foreground/15 last:border-b"
                style={{ animationDelay: `${i * 100}ms` }}
              >
                <span className="font-serif italic text-brass text-2xl pt-1">{p.n}</span>
                <div>
                  <h3 className="font-serif text-2xl sm:text-3xl text-primary-foreground mb-3">
                    {p.title}
                  </h3>
                  <p className="text-primary-foreground/70 leading-relaxed">{p.body}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}

/* ---------------- 03. Difference ---------------- */

const PROMISES = [
  {
    n: "01",
    title: "Same room, same project — from day one.",
    body: "Civil engineers, land planners, and surveyors start together. Not in sequence.",
  },
  {
    n: "02",
    title: "One integrated process.",
    body: "Shared models. Shared data. Decisions made once and applied everywhere.",
  },
  {
    n: "03",
    title: "One point of contact.",
    body: "No vendor triangulation. No \u201Clet me loop in the surveyor.\u201D Just answers.",
  },
];

function SectionDifference() {
  return (
    <section id="difference" className="relative py-32 lg:py-40">
      <div className="mx-auto max-w-[1400px] px-6 lg:px-12">
        <div className="flex items-baseline gap-6 mb-16">
          <span className="label-caps text-brass">03 — The Difference</span>
          <div className="hairline flex-1" />
        </div>

        <div className="grid lg:grid-cols-12 gap-12 mb-20">
          <h2 className="reveal lg:col-span-8 font-serif text-[clamp(2.5rem,6.5vw,5.5rem)] leading-[0.98] text-primary">
            GCI is{" "}
            <span className="underline-sweep">
              <span className="italic">built differently.</span>
            </span>
          </h2>
          <p className="reveal lg:col-span-4 lg:pt-4 text-lg text-foreground/70 leading-relaxed">
            Our disciplines aren't handed off to each other. They're working together from day one,
            on the same project, toward the same deadline.
          </p>
        </div>

        <ol className="border-t border-foreground/15">
          {PROMISES.map((p) => (
            <li
              key={p.n}
              className="reveal grid grid-cols-[4rem_1fr] md:grid-cols-[6rem_1fr_2fr] gap-6 md:gap-10 py-10 border-b border-foreground/15 items-baseline"
            >
              <span className="font-serif text-brass text-3xl md:text-4xl">{p.n}</span>
              <h3 className="font-serif text-2xl md:text-4xl text-primary leading-tight col-span-1 md:col-span-1">
                {p.title}
              </h3>
              <p className="text-foreground/70 leading-relaxed md:text-lg col-span-2 md:col-span-1">
                {p.body}
              </p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}

/* ---------------- 04. Proof ---------------- */

function SectionProof() {
  return (
    <section id="proof" className="relative">
      {/* Full-bleed editorial video */}
      <div className="relative h-[80vh] min-h-[600px] overflow-hidden">
        <video
          className="absolute inset-0 h-full w-full object-cover"
          src="/media/mcprs.mp4"
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
          aria-hidden="true"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-primary via-primary/40 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-r from-primary/70 via-transparent to-transparent" />

        <div className="relative h-full mx-auto max-w-[1400px] px-6 lg:px-12 flex flex-col justify-between py-16">
          <div className="flex items-baseline gap-6">
            <span className="label-caps text-brass">04 — Proof</span>
            <div className="h-px flex-1 bg-primary-foreground/30" />
          </div>

          <div className="max-w-3xl">
            <h2 className="reveal font-serif text-[clamp(2.5rem,7vw,6rem)] leading-[0.98] text-primary-foreground">
              That's not luck. That's{" "}
              <span className="underline-sweep">
                <span className="text-brass italic">integration.</span>
              </span>
            </h2>
          </div>
        </div>
      </div>

      {/* Two editorial proof points */}
      <div className="bg-background py-24 lg:py-32">
        <div className="mx-auto max-w-[1400px] px-6 lg:px-12 grid lg:grid-cols-2 gap-x-16 gap-y-20">
          <ProofPoint
            tag="Week-One Catch"
            stat="6"
            unit="weeks"
            outcome="delay avoided"
            body="On a recent project, our team identified a boundary conflict in the first week — the kind of issue any other firm would have surfaced six weeks later."
            image="/media/farmview.jpg"
            imageAlt="Aerial view of a Georgia development site"
          />
          <ProofPoint
            tag="Ahead of Schedule"
            stat="3"
            unit="weeks"
            outcome="early to final plat"
            body="When planners, engineers, and surveyors work as one team, approvals don't queue. They flow."
            image="/media/morganmedical.jpg"
            imageAlt="Morgan Medical project site"
            accent
          />
        </div>
        <p className="mt-20 reveal text-center text-foreground/60 max-w-2xl mx-auto px-6 italic font-serif text-xl">
          That's what happens when your entire team is in the room from the start.
        </p>
      </div>
    </section>
  );
}

function ProofPoint({
  tag,
  stat,
  unit,
  outcome,
  body,
  image,
  imageAlt,
  accent,
}: {
  tag: string;
  stat: string;
  unit: string;
  outcome: string;
  body: string;
  image: string;
  imageAlt: string;
  accent?: boolean;
}) {
  return (
    <article className="reveal">
      <div className="relative aspect-[5/3] overflow-hidden mb-8">
        <img
          src={image}
          alt={imageAlt}
          className="absolute inset-0 h-full w-full object-cover"
          loading="lazy"
        />
      </div>
      <div className="flex items-baseline gap-4 mb-5">
        <span className="label-caps text-brass">{tag}</span>
        <div className="hairline flex-1" />
      </div>
      <div className="flex items-baseline gap-3 mb-4">
        <span
          className={`font-serif text-7xl md:text-8xl leading-none ${
            accent ? "text-accent" : "text-primary"
          }`}
        >
          {stat}
        </span>
        <div className="font-serif italic text-2xl text-foreground/70">
          {unit} <span className="not-italic text-foreground/60">— {outcome}</span>
        </div>
      </div>
      <p className="text-foreground/75 leading-relaxed max-w-prose md:text-lg">{body}</p>
    </article>
  );
}

/* ---------------- 05. Scale ---------------- */

function SectionScale() {
  return (
    <section id="scale" className="relative py-32 lg:py-40 bg-secondary overflow-hidden">
      <div className="mx-auto max-w-[1400px] px-6 lg:px-12">
        <div className="flex items-baseline gap-6 mb-16">
          <span className="label-caps text-brass">05 — Scale</span>
          <div className="hairline flex-1" />
        </div>

        <div className="grid lg:grid-cols-12 gap-12 lg:gap-20 items-center">
          <div className="reveal lg:col-span-7 order-2 lg:order-1">
            <h2 className="font-serif text-[clamp(2.5rem,6.5vw,5.5rem)] leading-[0.98] text-primary">
              We're not the largest firm.{" "}
              <span className="underline-sweep accent">
                <span className="italic">That's the point.</span>
              </span>
            </h2>

            <p className="mt-10 text-lg text-foreground/75 leading-relaxed max-w-2xl">
              Our abilities get questioned because of our size. You're right — we're not a large
              regional firm. That's another reason GCI is above the rest. We give you the technical
              depth of a regional practice with the responsiveness and local knowledge of a firm
              that actually knows your market.
            </p>

            <dl className="mt-12 grid sm:grid-cols-2 gap-y-8 gap-x-12 max-w-2xl">
              {[
                ["Regional depth", "Technical expertise normally reserved for the largest firms."],
                ["Local knowledge", "Principals who actually know your market."],
                ["Direct access", "The phone gets answered. By a person who can decide."],
                ["Cutting edge", "Integrated systems and measurable savings, not promises."],
              ].map(([label, body]) => (
                <div key={label} className="border-t border-foreground/15 pt-5">
                  <dt className="label-caps text-brass mb-2">{label}</dt>
                  <dd className="text-foreground/80 leading-relaxed">{body}</dd>
                </div>
              ))}
            </dl>
          </div>

          <div className="reveal-fade lg:col-span-5 order-1 lg:order-2 flex justify-center lg:justify-end">
            <img
              src={georgiaMap}
              alt="Georgia state with civil planning overlay"
              className="w-full max-w-md h-auto"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------------- 06. Pitch ---------------- */

function SectionPitch() {
  return (
    <section id="pitch" className="relative py-32 lg:py-40 overflow-hidden">
      <div className="mx-auto max-w-[1400px] px-6 lg:px-12">
        <div className="flex items-baseline gap-6 mb-16">
          <span className="label-caps text-brass">06 — The Pitch</span>
          <div className="hairline flex-1" />
        </div>

        <p className="reveal label-caps text-foreground/60 mb-8">Presentable Pitch</p>

        <blockquote className="reveal font-serif text-[clamp(2rem,5.5vw,4.75rem)] leading-[1.05] text-primary max-w-[22ch]">
          Don't settle for transactional services. We put planners, surveyors, and civil engineers
          on the{" "}
          <span className="underline-sweep">
            <span className="italic">same team</span>
          </span>{" "}
          from day one. GCI saves you time, money, and the headache of carrying your development
          from firm to firm.
        </blockquote>

        <div className="reveal mt-16 flex items-baseline gap-6">
          <div className="brass-rule" />
          <p className="font-serif italic text-2xl sm:text-3xl text-brass">
            GCI: your complete project partner.
          </p>
        </div>

        {/* Brand mantra band */}
        <div className="mt-24 reveal border-t border-foreground/15 pt-16">
          <div className="grid sm:grid-cols-3 gap-12">
            {[
              ["Growing", "the landscape of our region."],
              ["Creating", "the drawings and plans that make development possible."],
              ["Innovating", "with technology firms our size rarely have."],
            ].map(([word, line]) => (
              <div key={word}>
                <h3 className="font-serif text-5xl text-primary mb-3">
                  <span className="underline-sweep">
                    <span>{word}</span>
                  </span>
                </h3>
                <p className="text-foreground/70 leading-relaxed">{line}</p>
              </div>
            ))}
          </div>
          <p className="mt-12 label-caps text-brass text-base tracking-[0.4em]">
            G &middot; C &middot; I
          </p>
        </div>
      </div>
    </section>
  );
}

/* ---------------- Footer ---------------- */

function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="mx-auto max-w-[1400px] px-6 lg:px-12 py-20">
        <div className="grid md:grid-cols-12 gap-12 items-start">
          <div className="md:col-span-5">
            <img src={gciLogoWhite} alt="Georgia Civil" className="h-12 w-auto mb-6" />
            <p className="font-serif italic text-2xl leading-snug max-w-md">
              Your complete project partner. One team. One relationship. Every phase.
            </p>
          </div>
          <div className="md:col-span-3 md:col-start-7">
            <h4 className="label-caps text-brass mb-5">Disciplines</h4>
            <ul className="space-y-3 label-caps text-primary-foreground/80">
              <li>Civil Engineering</li>
              <li>Landscape Architecture</li>
              <li>Land Surveying</li>
            </ul>
          </div>
          <div className="md:col-span-3">
            <h4 className="label-caps text-brass mb-5">Office</h4>
            <p className="text-primary-foreground/80 leading-relaxed">
              Madison, Georgia
              <br />
              United States
            </p>
          </div>
        </div>

        <div className="mt-20 pt-8 border-t border-primary-foreground/20 flex flex-wrap items-baseline justify-between gap-4 label-caps text-primary-foreground/60">
          <span>&copy; {new Date().getFullYear()} Georgia Civil</span>
          <span>Growing &middot; Creating &middot; Innovating</span>
        </div>
      </div>
    </footer>
  );
}
