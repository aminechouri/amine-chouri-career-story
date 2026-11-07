import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useRef, useState } from "react";
import placeholder from "@/assets/project-placeholder.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Mohamed Amine Chouri — Développeur Frontend Angular" },
      { name: "description", content: "Développeur Frontend Angular / TypeScript, 6 ans d'expérience. Projets live, expériences et contact." },
      { property: "og:title", content: "Mohamed Amine Chouri — Frontend Dev" },
      { property: "og:description", content: "Angular, TypeScript, RxJS, React. Portfolio interactif et projets live." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

/* ---------- DATA (edit here) ---------- */
// Replace `image` with your screenshot imports and `url` with live links.
const projects = [
  { title: "E-commerce Angular", tag: "Angular · RxJS · Node.js", desc: "Plateforme e-commerce composant-based avec paiement et suivi de commandes.", url: "#", image: placeholder },
  { title: "Site vitrine EDirect", tag: "WordPress · GSAP · Elementor", desc: "Site pixel-perfect depuis Figma avec animations de scroll GSAP.", url: "#", image: placeholder },
  { title: "Boutique WooCommerce", tag: "PHP · WooCommerce · Stripe", desc: "Boutique internationale avec plugins sur mesure et paiements sécurisés.", url: "#", image: placeholder },
  { title: "Dashboard Admin", tag: "Angular · NgRx · Symfony", desc: "Tableau de bord e-commerce avec analytics et gestion des commandes.", url: "#", image: placeholder },
];

const skills: Record<string, string[]> = {
  frontend: ["Angular", "TypeScript", "RxJS", "NgRx/Redux", "React", "Next.js", "HTML/CSS", "Tailwind", "Bootstrap"],
  backend: ["Node.js", "Express.js", "PHP", "Symfony"],
  database: ["MySQL", "MongoDB", "Firebase"],
  cms: ["WordPress", "Prestashop", "Shopify", "Drupal"],
  tools: ["Git", "Git Flow", "JIRA", "Code Review", "Agile/Scrum"],
};

const experiences = [
  { role: "Développeur Web", company: "Bee Studio Communication", place: "Télétravail", date: "Avr 2025 — Présent", points: ["Sites sur mesure depuis Figma, sections JS personnalisées", "E-commerce WordPress : hooks PHP, plugins sur mesure", "Paiements Stripe, PayPal, WooCommerce", "Hébergement OVH, Hostinger, GoDaddy · SEO & sécurité"] },
  { role: "Développeur Web (freelance)", company: "EDirect (UAE)", place: "Télétravail", date: "Sep 2025 — Mai 2026", points: ["Sites pixel-perfect depuis Figma / Adobe XD", "Animations GSAP & effets de scroll", "SEO on-page et responsivité au pixel près"] },
  { role: "Développeur Frontend Angular", company: "ITGate Group", place: "Hammam Sousse", date: "Avr 2022 — Mar 2025", points: ["Interfaces Angular pour plateformes e-commerce, backends Node.js", "UI/UX sur mesure, paiement & suivi de commandes", "SEO technique, GTM & Google Analytics"] },
  { role: "Frontend Angular & Backend Symfony", company: "Nexym", place: "Monastir", date: "Sep 2021 — Avr 2022", points: ["Interfaces Angular full-stack", "Paiements sécurisés & chatbots", "Dashboards e-commerce, SEO, hébergement"] },
  { role: "Intégrateur Web Frontend", company: "Carthage Solutions", place: "Monastir", date: "Avr 2020 — Sep 2021", points: ["Designs XD/Figma → HTML/CSS/JS responsive", "Elementor Pro, Divi, Beaver Builder"] },
];

const roles = ["Angular Developer", "TypeScript Engineer", "UI Craftsman", "Next.js Explorer"];

/* ---------- HOOKS ---------- */
function useReveal() {
  useEffect(() => {
    const els = document.querySelectorAll(".reveal");
    const io = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.isIntersecting && e.target.classList.add("is-visible")),
      { threshold: 0.12 },
    );
    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);
}

function useTyping(words: string[]) {
  const [text, setText] = useState("");
  const [i, setI] = useState(0);
  const [del, setDel] = useState(false);
  useEffect(() => {
    const word = words[i % words.length];
    const t = setTimeout(() => {
      if (!del) {
        const next = word.slice(0, text.length + 1);
        setText(next);
        if (next === word) setTimeout(() => setDel(true), 1400);
      } else {
        const next = word.slice(0, text.length - 1);
        setText(next);
        if (!next) { setDel(false); setI((x) => x + 1); }
      }
    }, del ? 40 : 85);
    return () => clearTimeout(t);
  }, [text, del, i, words]);
  return text;
}

/* ---------- COMPONENTS ---------- */
function Spotlight() {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const move = (e: MouseEvent) => {
      if (ref.current) ref.current.style.background = `radial-gradient(500px circle at ${e.clientX}px ${e.clientY}px, color-mix(in oklab, var(--primary) 10%, transparent), transparent 60%)`;
    };
    window.addEventListener("mousemove", move);
    return () => window.removeEventListener("mousemove", move);
  }, []);
  return <div ref={ref} className="pointer-events-none fixed inset-0 z-0" />;
}

function Nav() {
  const links = ["about", "skills", "projects", "experience", "contact"];
  return (
    <nav className="fixed top-0 inset-x-0 z-50 backdrop-blur-md bg-background/70 border-b border-border">
      <div className="mx-auto max-w-6xl flex items-center justify-between px-6 h-16 font-mono text-sm">
        <a href="#top" className="text-primary font-semibold">&lt;amine /&gt;</a>
        <div className="hidden md:flex gap-6">
          {links.map((l, i) => (
            <a key={l} href={`#${l}`} className="text-muted-foreground hover:text-primary transition-colors">
              <span className="text-primary">0{i + 1}.</span> {l}
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
}

function SectionTitle({ n, title }: { n: string; title: string }) {
  return (
    <div className="reveal flex items-center gap-4 mb-12">
      <span className="font-mono text-primary">{n}.</span>
      <h2 className="text-3xl md:text-4xl font-bold">{title}</h2>
      <div className="h-px flex-1 bg-border" />
    </div>
  );
}

function Hero() {
  const typed = useTyping(roles);
  return (
    <section id="top" className="relative min-h-screen flex items-center pt-16 overflow-hidden">
      <div className="absolute inset-0 grid-bg" />
      <div className="relative mx-auto max-w-6xl px-6 grid md:grid-cols-[1.3fr_1fr] gap-12 items-center w-full">
        <div>
          <p className="font-mono text-primary mb-4 animate-in fade-in slide-in-from-bottom-4 duration-700">// Bonjour, je suis</p>
          <h1 className="text-5xl md:text-7xl font-bold leading-[1.05] animate-in fade-in slide-in-from-bottom-6 duration-700">
            Mohamed Amine <span className="text-gradient">Chouri</span>
          </h1>
          <p className="mt-6 font-mono text-xl md:text-2xl text-secondary h-8">
            &gt; <span className="caret">{typed}</span>
          </p>
          <p className="mt-6 max-w-xl text-muted-foreground leading-relaxed">
            6+ ans à construire des applications web scalables, performantes et orientées composants.
            Basé à Sousse, disponible pour des entretiens à Paris dès janvier 2027.
          </p>
          <div className="mt-10 flex flex-wrap gap-4 font-mono text-sm">
            <a href="#projects" className="px-6 py-3 rounded-md bg-primary text-primary-foreground font-semibold hover:-translate-y-0.5 transition-transform glow-box">voir les projets()</a>
            <a href="#contact" className="px-6 py-3 rounded-md border border-primary text-primary hover:bg-primary/10 transition-colors">me contacter</a>
          </div>
        </div>
        <CodeCard />
      </div>
    </section>
  );
}

function CodeCard() {
  const ref = useRef<HTMLDivElement>(null);
  const onMove = (e: React.MouseEvent) => {
    const r = ref.current!.getBoundingClientRect();
    const x = (e.clientX - r.left) / r.width - 0.5;
    const y = (e.clientY - r.top) / r.height - 0.5;
    ref.current!.style.transform = `perspective(900px) rotateY(${x * 14}deg) rotateX(${-y * 14}deg)`;
  };
  return (
    <div className="animate-float hidden md:block">
      <div
        ref={ref}
        onMouseMove={onMove}
        onMouseLeave={() => ref.current && (ref.current.style.transform = "")}
        className="rounded-xl bg-card border border-border glow-box font-mono text-sm transition-transform duration-200"
      >
        <div className="flex gap-2 px-4 py-3 border-b border-border">
          <span className="size-3 rounded-full bg-destructive" />
          <span className="size-3 rounded-full bg-secondary" />
          <span className="size-3 rounded-full bg-primary" />
          <span className="ml-3 text-muted-foreground text-xs">developer.ts</span>
        </div>
        <pre className="p-5 leading-7 overflow-x-auto"><code>
<span className="text-secondary">const</span> amine = {"{"}{"\n"}
{"  "}role: <span className="text-primary">'Frontend Dev'</span>,{"\n"}
{"  "}experience: <span className="text-primary">6</span>,{"\n"}
{"  "}stack: [<span className="text-primary">'Angular'</span>, <span className="text-primary">'TS'</span>,{"\n"}
{"          "}<span className="text-primary">'RxJS'</span>, <span className="text-primary">'NgRx'</span>],{"\n"}
{"  "}learning: <span className="text-primary">'Next.js'</span>,{"\n"}
{"  "}openTo: <span className="text-primary">'Paris 🇫🇷'</span>,{"\n"}
{"}"};
        </code></pre>
      </div>
    </div>
  );
}

function Marquee() {
  const all = Object.values(skills).flat();
  return (
    <div className="border-y border-border py-5 overflow-hidden">
      <div className="flex w-max animate-marquee gap-10 font-mono text-muted-foreground">
        {[...all, ...all].map((s, i) => (
          <span key={i} className="whitespace-nowrap"><span className="text-primary">✦</span> {s}</span>
        ))}
      </div>
    </div>
  );
}

function About() {
  const stats = [["6+", "ans d'expérience"], ["5", "entreprises"], ["20+", "sites livrés"], ["4", "langues"]];
  return (
    <section id="about" className="mx-auto max-w-6xl px-6 py-28">
      <SectionTitle n="01" title="À propos" />
      <div className="grid md:grid-cols-2 gap-12">
        <div className="reveal space-y-4 text-muted-foreground leading-relaxed">
          <p>Développeur Frontend <span className="text-foreground">Angular / TypeScript</span> spécialisé dans la conception d'applications web scalables et orientées composants.</p>
          <p>Architecture UI/UX responsive, intégration d'API REST, gestion d'état avec <span className="text-primary">RxJS & NgRx</span> — avec une montée en compétences active sur Next.js.</p>
          <p>Ingénieur génie logiciel (EPI Sousse, 2023) · Licence multimédia & web (ISITCom, 2019).</p>
          <p className="font-mono text-sm">Anglais B2 · Français B2 · Arabe natif · Allemand B1</p>
        </div>
        <div className="reveal grid grid-cols-2 gap-4">
          {stats.map(([n, l]) => (
            <div key={l} className="rounded-lg border border-border bg-card p-6 hover:border-primary hover:-translate-y-1 transition-all">
              <div className="text-4xl font-bold text-gradient">{n}</div>
              <div className="mt-2 font-mono text-xs text-muted-foreground">{l}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Skills() {
  const keys = Object.keys(skills);
  const [tab, setTab] = useState(keys[0]);
  return (
    <section id="skills" className="mx-auto max-w-6xl px-6 py-28">
      <SectionTitle n="02" title="Compétences" />
      <div className="reveal rounded-xl border border-border bg-card overflow-hidden">
        <div className="flex flex-wrap border-b border-border font-mono text-sm">
          {keys.map((k) => (
            <button key={k} onClick={() => setTab(k)}
              className={`px-5 py-3 transition-colors border-b-2 ${tab === k ? "border-primary text-primary bg-muted" : "border-transparent text-muted-foreground hover:text-foreground"}`}>
              {k}.ts
            </button>
          ))}
        </div>
        <div key={tab} className="p-8 flex flex-wrap gap-3 animate-in fade-in slide-in-from-bottom-2 duration-500">
          {skills[tab].map((s, i) => (
            <span key={s} style={{ animationDelay: `${i * 50}ms` }}
              className="animate-in fade-in zoom-in-90 fill-mode-both px-4 py-2 rounded-md border border-border font-mono text-sm hover:border-primary hover:text-primary hover:-translate-y-0.5 transition-all cursor-default">
              {s}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}

function Projects() {
  const [i, setI] = useState(0);
  const n = projects.length;
  const go = (d: number) => setI((x) => (x + d + n) % n);
  useEffect(() => {
    const t = setInterval(() => go(1), 6000);
    return () => clearInterval(t);
  }, [i]);
  return (
    <section id="projects" className="mx-auto max-w-6xl px-6 py-28">
      <SectionTitle n="03" title="Projets live" />
      <div className="reveal relative">
        <div className="overflow-hidden rounded-xl border border-border bg-card glow-box">
          <div className="flex transition-transform duration-700 ease-[cubic-bezier(0.7,0,0.2,1)]" style={{ transform: `translateX(-${i * 100}%)` }}>
            {projects.map((p) => (
              <article key={p.title} className="min-w-full grid md:grid-cols-[1.4fr_1fr]">
                <div className="relative group overflow-hidden">
                  <div className="flex gap-1.5 px-3 py-2 bg-muted border-b border-border">
                    <span className="size-2.5 rounded-full bg-destructive" /><span className="size-2.5 rounded-full bg-secondary" /><span className="size-2.5 rounded-full bg-primary" />
                    <span className="ml-3 font-mono text-[10px] text-muted-foreground truncate">{p.url}</span>
                  </div>
                  <img src={p.image} alt={`Capture d'écran ${p.title}`} loading="lazy" width={1280} height={800}
                    className="w-full aspect-[16/10] object-cover group-hover:scale-105 transition-transform duration-700" />
                </div>
                <div className="p-8 flex flex-col justify-center">
                  <p className="font-mono text-xs text-primary">{p.tag}</p>
                  <h3 className="mt-3 text-2xl font-bold">{p.title}</h3>
                  <p className="mt-4 text-muted-foreground leading-relaxed">{p.desc}</p>
                  <a href={p.url} target="_blank" rel="noreferrer"
                    className="mt-8 self-start font-mono text-sm px-5 py-2.5 rounded-md border border-primary text-primary hover:bg-primary hover:text-primary-foreground transition-colors">
                    voir en live ↗
                  </a>
                </div>
              </article>
            ))}
          </div>
        </div>
        <div className="mt-6 flex items-center justify-between">
          <div className="flex gap-2">
            {projects.map((_, k) => (
              <button key={k} aria-label={`Projet ${k + 1}`} onClick={() => setI(k)}
                className={`h-1.5 rounded-full transition-all ${k === i ? "w-10 bg-primary" : "w-4 bg-border hover:bg-muted-foreground"}`} />
            ))}
          </div>
          <div className="flex gap-3 font-mono">
            <button onClick={() => go(-1)} aria-label="Précédent" className="size-11 rounded-md border border-border hover:border-primary hover:text-primary transition-colors">←</button>
            <button onClick={() => go(1)} aria-label="Suivant" className="size-11 rounded-md border border-border hover:border-primary hover:text-primary transition-colors">→</button>
          </div>
        </div>
      </div>
    </section>
  );
}

function Experience() {
  const [a, setA] = useState(0);
  const e = experiences[a];
  return (
    <section id="experience" className="mx-auto max-w-6xl px-6 py-28">
      <SectionTitle n="04" title="Expérience" />
      <div className="reveal grid md:grid-cols-[220px_1fr] gap-8">
        <div className="flex md:flex-col overflow-x-auto border-b md:border-b-0 md:border-l border-border font-mono text-sm">
          {experiences.map((x, k) => (
            <button key={x.company} onClick={() => setA(k)}
              className={`text-left px-4 py-3 whitespace-nowrap transition-colors md:-ml-px border-b-2 md:border-b-0 md:border-l-2 ${k === a ? "border-primary text-primary bg-muted" : "border-transparent text-muted-foreground hover:text-foreground hover:bg-muted/50"}`}>
              {x.company}
            </button>
          ))}
        </div>
        <div key={a} className="animate-in fade-in slide-in-from-right-4 duration-500">
          <h3 className="text-2xl font-bold">{e.role} <span className="text-primary">@ {e.company}</span></h3>
          <p className="mt-1 font-mono text-sm text-muted-foreground">{e.date} · {e.place}</p>
          <ul className="mt-6 space-y-3">
            {e.points.map((p) => (
              <li key={p} className="flex gap-3 text-muted-foreground"><span className="text-primary">▹</span>{p}</li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

function Contact() {
  const [copied, setCopied] = useState(false);
  const email = "aminechouri.info@gmail.com";
  return (
    <section id="contact" className="mx-auto max-w-3xl px-6 py-32 text-center">
      <p className="reveal font-mono text-primary">05. Et maintenant ?</p>
      <h2 className="reveal mt-4 text-5xl md:text-6xl font-bold text-glow">Travaillons ensemble</h2>
      <p className="reveal mt-6 text-muted-foreground">
        Disponible pour entretiens à Paris dès janvier 2027 (sponsoring requis : visa salarié / Passeport Talent).
      </p>
      <div className="reveal mt-10 flex flex-wrap justify-center gap-4 font-mono text-sm">
        <button onClick={() => { navigator.clipboard.writeText(email); setCopied(true); setTimeout(() => setCopied(false), 1800); }}
          className="px-6 py-3 rounded-md bg-primary text-primary-foreground font-semibold glow-box hover:-translate-y-0.5 transition-transform">
          {copied ? "✓ copié !" : email}
        </button>
        <a href="tel:+21626715977" className="px-6 py-3 rounded-md border border-border hover:border-primary hover:text-primary transition-colors">+216 26 715 977</a>
        <a href="https://www.linkedin.com/in/med-amine-chouri/" target="_blank" rel="noreferrer" className="px-6 py-3 rounded-md border border-border hover:border-primary hover:text-primary transition-colors">LinkedIn ↗</a>
      </div>
      <p className="mt-24 font-mono text-xs text-muted-foreground">© 2026 Mohamed Amine Chouri · built with &lt;code /&gt; & ☕</p>
    </section>
  );
}

function Index() {
  useReveal();
  return (
    <div className="relative">
      <Spotlight />
      <Nav />
      <main className="relative z-10">
        <Hero />
        <Marquee />
        <About />
        <Skills />
        <Projects />
        <Experience />
        <Contact />
      </main>
    </div>
  );
}
