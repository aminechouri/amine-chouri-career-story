import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useRef, useState } from "react";
import placeholder from "@/assets/project-placeholder.jpg";
import amineImg  from "@/assets/photo.jpeg";
import mysecretaire  from "@/assets/mysecretaire.png";
import anodrra  from "@/assets/andorra.png";
import holistix  from "@/assets/holistix.png";
import kitchen  from "@/assets/kitchen.png";
import manar  from "@/assets/manar.png";
import marj  from "@/assets/marj.png";
import ahmed  from "@/assets/ahmed.png";
import china  from "@/assets/china.png";
import traiteur  from "@/assets/traiteur.png";
import ms  from "@/assets/ms.png";
import magine  from "@/assets/magine.png";
import floraison  from "@/assets/floraison.png";
import itgate  from "@/assets/itgate.png";
import bee  from "@/assets/bee.png";
import mami  from "@/assets/mami.png";
import bois  from "@/assets/bois.png";
import compta  from "@/assets/compta.png";
import baby  from "@/assets/baby.png";
import lacroix  from "@/assets/lacroix.png";
import matech  from "@/assets/matech.png";
import bootik  from "@/assets/bootik.png";


export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Mohamed Amine Chouri — Web Developer · 6+ ans" },
      { name: "description", content: "Développeur web Angular / TypeScript avec 6+ ans d'expérience. Projets live, expériences, CV à télécharger." },
      { property: "og:title", content: "Mohamed Amine Chouri — Web Developer" },
      { property: "og:description", content: "Angular, TypeScript, RxJS, React, WordPress. 6+ ans à shipper du web en production." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

/* ================= DATA (edit here) ================= */
// Put your PDF at public/downloads/CV-Mohamed-Amine-Chouri.pdf
const CV_URL = "/downloads/CV-Mohamed-Amine-Chouri.pdf";
// Put your photo in src/assets and import it here, e.g. import photo from "@/assets/me.jpg"
const PHOTO = amineImg ;
const projects = [
  { title: "Mysecretaire", stack: ["WordPress", "Css", "PHP"], type: "WordPress", desc: "Un site web vitrine pour promouvoir le télésecrétariat médical en France et pour réserver en ligne et devenir partenaire.", url: "https://www.mysecretaire.com/", image: mysecretaire },
  { title: "Andorra Village", stack: ["WordPress", "GSAP", "Elementor"], type: "wordpress", desc: "Site WordPress présentant des appartements, des villas et des résidences avec services au cœur de Riyad..", url: "https://andorravillage.net/", image: anodrra },
  { title: "Holistix Health", stack: ["PHP", "WooCommerce", "Stripe"], type: "wordpress", desc: "Boutique internationale, plugins sur mesure, paiements sécurisés.", url: "https://holistixhealth.tn/", image: holistix },
  { title: "Marj Luxury dates", stack: ["Angular", "NgRx", "Symfony"], type: "angular", desc: "Dashboard e-commerce avec analytics et gestion des commandes.", url: "https://marjluxurydates.com/", image: marj },
  { title: "Kitchenhaus", stack: ["React", "Tailwind"], type: "react", desc: "Landing page rapide, animée et optimisée SEO.", url: "https://kitchenhausgcc.com/", image: kitchen },
   { title: "Floraison", stack: ["React", "Tailwind"], type: "react", desc: "Landing page rapide, animée et optimisée SEO.", url: "https://floraison.bio/", image: floraison },
  { title: "Clinique ElManar", stack: ["React", "Tailwind"], type: "react", desc: "Landing page rapide, animée et optimisée SEO.", url: "https://lescliniqueselmanar.com/", image: manar },
  { title: "Dr Suliman", stack: ["React", "Tailwind"], type: "react", desc: "Landing page rapide, animée et optimisée SEO.", url: "https://drsulimanahmed.com/", image: ahmed },
  { title: "China town store", stack: ["React", "Tailwind"], type: "react", desc: "Landing page rapide, animée et optimisée SEO.", url: "https://store.chinatown.tn/", image: china },
  { title: "Le seizieme", stack: ["React", "Tailwind"], type: "react", desc: "Landing page rapide, animée et optimisée SEO.", url: "https://leseizieme.com.tn/", image: traiteur },
  { title: "MS Building", stack: ["React", "Tailwind"], type: "react", desc: "Landing page rapide, animée et optimisée SEO.", url: "https://msbuilding.com.tn/", image: ms },
  { title: "E-magine agency", stack: ["React", "Tailwind"], type: "react", desc: "Landing page rapide, animée et optimisée SEO.", url: "https://e-magineagency.com/", image: magine },
  { title: "ITGate group", stack: ["React", "Tailwind"], type: "react", desc: "Landing page rapide, animée et optimisée SEO.", url: "https://itgate-group.com/", image: itgate },
  { title: "Bee Studio", stack: ["React", "Tailwind"], type: "react", desc: "Landing page rapide, animée et optimisée SEO.", url: "https://beestudiocommunication.com/", image: bee },
  { title: "MamiPropre", stack: ["React", "Tailwind"], type: "react", desc: "Landing page rapide, animée et optimisée SEO.", url: "https://mamiepropre.com/", image: mami },
  { title: "Interbois", stack: ["React", "Tailwind"], type: "react", desc: "Landing page rapide, animée et optimisée SEO.", url: "https://ambiance.maisoninterbois.com/", image: bois },
  { title: "Comptajobs", stack: ["React", "Tailwind"], type: "react", desc: "Landing page rapide, animée et optimisée SEO.", url: "https://comptajobs.tn/", image: compta },
  { title: "Matech", stack: ["React", "Tailwind"], type: "react", desc: "Landing page rapide, animée et optimisée SEO.", url: "https://www.matech-tn.com/", image: matech },
  { title: "Pocobaby", stack: ["React", "Tailwind"], type: "react", desc: "Landing page rapide, animée et optimisée SEO.", url: "https://pocobaby.tn/", image: baby },
  { title: "Lacroix", stack: ["React", "Tailwind"], type: "react", desc: "Landing page rapide, animée et optimisée SEO.", url: "https://lacroixfils.fr/", image: lacroix },
  { title: "Bootik", stack: ["React", "Tailwind"], type: "react", desc: "Landing page rapide, animée et optimisée SEO.", url: "https://bootiik.com/", image: bootik },

];

const skills = [
  { k: "Angular", lvl: 95 }, { k: "TypeScript", lvl: 92 }, { k: "RxJS / NgRx", lvl: 88 }, { k: "HTML / CSS / Tailwind", lvl: 95 },
  { k: "React / Next.js", lvl: 75 }, { k: "Node.js / Express", lvl: 75 }, { k: "PHP / Symfony", lvl: 72 }, { k: "WordPress / Shopify", lvl: 92 },
];
const tools = ["Git", "Git Flow", "JIRA", "Agile/Scrum", "Code Review", "MySQL", "MongoDB", "Firebase", "Figma", "GSAP", "Stripe", "PayPal", "Prestashop", "Drupal", "GTM", "Google Analytics"];

const experiences = [
  { hash: "a7f3c21", role: "Développeur Web", company: "Bee Studio Communication", date: "2025 — now", place: "Remote", tags: ["WordPress", "PHP", "Stripe"], points: ["Cadrage client & sites sur mesure (Figma), sections JS custom", "E-commerce WordPress : hooks PHP, plugins sur mesure", "Paiements Stripe, PayPal, WooCommerce · hébergement OVH/Hostinger/GoDaddy"] },
  { hash: "e91b04d", role: "Web Developer (freelance)", company: "EDirect · UAE", date: "2025 — 2026", place: "Remote", tags: ["GSAP", "Elementor", "SEO"], points: ["Sites pixel-perfect depuis Figma / Adobe XD, du design au live", "Animations GSAP & effets de scroll custom", "SEO on-page & responsive au pixel près"] },
  { hash: "3c5d8ef", role: "Frontend Angular Developer", company: "ITGate Group", date: "2022 — 2025", place: "Hammam Sousse", tags: ["Angular", "Node.js", "GTM"], points: ["Interfaces Angular pour plusieurs plateformes e-commerce", "UI/UX & flux utilisateurs sur mesure, paiement & suivi", "SEO technique, Google Tag Manager & Analytics"] },
  { hash: "b28a9f0", role: "Angular & Symfony Developer", company: "Nexym", date: "2021 — 2022", place: "Monastir", tags: ["Angular", "Symfony"], points: ["Frontend Angular pour solutions full-stack", "Paiements sécurisés & chatbots automatisés", "Dashboards e-commerce, SEO, hébergement"] },
  { hash: "0f1e7aa", role: "Intégrateur Web Frontend", company: "Carthage Solutions", date: "2020 — 2021", place: "Monastir", tags: ["HTML/CSS", "JS"], points: ["Designs XD/Figma → HTML/CSS/JS pixel-perfect", "Elementor Pro, Divi, Beaver Builder"] },
];

const roles = ["Angular Developer", "TypeScript Engineer", "WordPress Expert", "UI Craftsman", "Next.js Explorer"];

/* ================= HOOKS ================= */
function useReveal() {
  useEffect(() => {
    const io = new IntersectionObserver(
      (es) => es.forEach((e) => e.isIntersecting && e.target.classList.add("is-visible")),
      { threshold: 0.1 },
    );
    document.querySelectorAll(".reveal").forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);
}

function useTyping(words: string[]) {
  const [text, setText] = useState("");
  const [i, setI] = useState(0);
  const [del, setDel] = useState(false);
  useEffect(() => {
    const word = words[i % words.length]!;
    const t = setTimeout(() => {
      if (!del) {
        const n = word.slice(0, text.length + 1);
        setText(n);
        if (n === word) setTimeout(() => setDel(true), 1300);
      } else {
        const n = word.slice(0, text.length - 1);
        setText(n);
        if (!n) { setDel(false); setI((x) => x + 1); }
      }
    }, del ? 35 : 80);
    return () => clearTimeout(t);
  }, [text, del, i, words]);
  return text;
}

function useCounter(target: number, run: boolean) {
  const [v, setV] = useState(0);
  useEffect(() => {
    if (!run) return;
    let f = 0;
    const id = setInterval(() => { f++; setV(Math.round((target * f) / 40)); if (f >= 40) clearInterval(id); }, 30);
    return () => clearInterval(id);
  }, [run, target]);
  return v;
}

/* ================= UI ================= */
function Spotlight() {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const m = (e: MouseEvent) => {
      if (ref.current) ref.current.style.background = `radial-gradient(600px circle at ${e.clientX}px ${e.clientY}px, color-mix(in oklab, var(--primary) 9%, transparent), transparent 60%)`;
    };
    window.addEventListener("mousemove", m);
    return () => window.removeEventListener("mousemove", m);
  }, []);
  return <div ref={ref} className="pointer-events-none fixed inset-0 z-0" />;
}

function CvButton({ big }: { big?: boolean }) {
  return (
    <a href={CV_URL} download className={`group inline-flex items-center gap-2 rounded-md bg-primary text-primary-foreground font-mono font-semibold glow-box hover:-translate-y-0.5 transition-transform ${big ? "px-6 py-3 text-sm" : "px-4 py-2 text-xs"}`}>
      <span className="group-hover:translate-y-0.5 transition-transform">↓</span> cv.pdf
    </a>
  );
}

function Nav() {
  const links = ["about", "stack", "projects", "experience", "contact"];
  return (
    <nav className="fixed top-0 inset-x-0 z-50 backdrop-blur-md bg-background/70 border-b border-border">
      <div className="mx-auto max-w-6xl flex items-center justify-between px-6 h-16 font-mono text-sm">
        <a href="#top" className="text-primary font-semibold">~/amine<span className="text-muted-foreground">$</span></a>
        <div className="hidden md:flex gap-6">
          {links.map((l, i) => (
            <a key={l} href={`#${l}`} className="text-muted-foreground hover:text-primary transition-colors"><span className="text-primary">0{i + 1}.</span>{l}</a>
          ))}
        </div>
        <CvButton />
      </div>
    </nav>
  );
}

function SectionTitle({ n, cmd, title }: { n: string; cmd: string; title: string }) {
  return (
    <div className="reveal mb-10">
      <p className="font-mono text-sm text-muted-foreground"><span className="text-primary">$</span> {cmd}</p>
      <div className="flex items-center gap-4 mt-2">
        <span className="font-mono text-primary">{n}.</span>
        <h2 className="text-3xl md:text-4xl font-bold">{title}</h2>
        <div className="h-px flex-1 bg-gradient-to-r from-border to-transparent" />
      </div>
    </div>
  );
}

const bootLines = ["> npm run dev", "✓ compiled amine.portfolio in 6y", "✓ 5 companies · 20+ projects shipped", "➜ ready on http://paris.fr — 2027"];

function Hero() {
  const typed = useTyping(roles);
  const [lines, setLines] = useState(0);
  useEffect(() => {
    if (lines >= bootLines.length) return;
    const t = setTimeout(() => setLines((l) => l + 1), 450);
    return () => clearTimeout(t);
  }, [lines]);
  return (
    <section id="top" className="relative min-h-screen flex items-center pt-20 pb-12 overflow-hidden">
      <div className="absolute inset-0 grid-bg" />
      <div className="relative mx-auto max-w-6xl px-6 grid lg:grid-cols-[1.25fr_1fr] gap-12 items-center w-full">
        <div>
          <div className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-3 py-1 font-mono text-xs text-muted-foreground mb-6">
            <span className="size-2 rounded-full bg-primary animate-pulse" /> open to work · Paris · Jan 2027
          </div>
          <h1 className="text-5xl md:text-7xl font-bold leading-[1.02]">
            Mohamed Amine<br /><span className="text-gradient">Chouri</span>
          </h1>
          <p className="mt-5 font-mono text-xl md:text-2xl text-secondary h-8">&gt; <span className="caret">{typed}</span></p>
          <p className="mt-5 max-w-xl text-muted-foreground leading-relaxed">
            <span className="text-foreground font-semibold">6+ ans</span> à concevoir et livrer des applications web scalables en production —
            Angular, TypeScript, RxJS, e-commerce, performance & SEO.
          </p>
          <div className="mt-6 rounded-lg border border-border bg-card/70 p-4 font-mono text-xs leading-6 max-w-md min-h-[120px]">
            {bootLines.slice(0, lines).map((l, i) => (
              <div key={l} className={`animate-in fade-in slide-in-from-left-2 ${i === 0 ? "text-muted-foreground" : i === 3 ? "text-secondary" : "text-primary"}`}>{l}</div>
            ))}
          </div>
          <div className="mt-8 flex flex-wrap gap-3 font-mono text-sm">
           
            <a href="#projects" className="px-6 py-3 rounded-md border border-primary text-primary hover:bg-primary/10 transition-colors">./projets-live</a>
            <a href="#contact" className="px-6 py-3 rounded-md border border-border hover:border-primary hover:text-primary transition-colors">contact()</a>
          </div>
        </div>
        <Photo />
      </div>
    </section>
  );
}

function Photo() {
  const ref = useRef<HTMLDivElement>(null);
  const onMove = (e: React.MouseEvent) => {
    const r = ref.current!.getBoundingClientRect();
    const x = (e.clientX - r.left) / r.width - 0.5, y = (e.clientY - r.top) / r.height - 0.5;
    ref.current!.style.transform = `perspective(900px) rotateY(${x * 12}deg) rotateX(${-y * 12}deg)`;
  };
  return (
    <div className="relative mx-auto w-full max-w-sm animate-float">
      <div className="absolute -inset-4 rounded-2xl bg-gradient-to-br from-primary/30 to-secondary/30 blur-2xl" />
      <div ref={ref} onMouseMove={onMove} onMouseLeave={() => ref.current && (ref.current.style.transform = "")}
        className="relative rounded-2xl border border-border bg-card glow-box overflow-hidden transition-transform duration-200">
        <div className="flex items-center gap-2 px-4 py-2.5 border-b border-border">
          <span className="size-2.5 rounded-full bg-destructive" /><span className="size-2.5 rounded-full bg-secondary" /><span className="size-2.5 rounded-full bg-primary" />
          <span className="ml-2 font-mono text-[11px] text-muted-foreground">amine.jpg</span>
        </div>
        <div className="aspect-[4/5] relative">
          {PHOTO ? (
            <img src={PHOTO} alt="Mohamed Amine Chouri" className="absolute inset-0 size-full object-cover" />
          ) : (
            <div className="absolute inset-0 grid place-items-center grid-bg">
              <div className="text-center font-mono">
                <div className="mx-auto size-24 rounded-full border-2 border-dashed border-primary grid place-items-center text-3xl text-primary">MA</div>
                <p className="mt-4 text-xs text-muted-foreground">// ta photo ici</p>
              </div>
            </div>
          )}
          <div className="absolute bottom-3 left-3 right-3 rounded-md bg-background/85 backdrop-blur border border-border p-3 font-mono text-[11px] leading-5">
            <span className="text-secondary">const</span> stack = [<span className="text-primary">'Angular'</span>, <span className="text-primary">'TS'</span>, <span className="text-primary">'RxJS'</span>];
          </div>
        </div>
      </div>
      <div className="absolute -left-6 top-16 rounded-md border border-border bg-card px-3 py-2 font-mono text-xs shadow-lg hidden sm:block">
        <span className="text-primary text-lg font-bold">6+</span> years
      </div>
      <div className="absolute -right-4 bottom-24 rounded-md border border-border bg-card px-3 py-2 font-mono text-xs shadow-lg hidden sm:block">
        &lt;<span className="text-secondary">Angular</span> /&gt;
      </div>
    </div>
  );
}

function Marquee() {
  const all = [...skills.map((s) => s.k), ...tools];
  return (
    <div className="border-y border-border py-4 overflow-hidden bg-card/40">
      <div className="flex w-max animate-marquee gap-10 font-mono text-sm text-muted-foreground">
        {[...all, ...all].map((s, i) => <span key={i} className="whitespace-nowrap"><span className="text-primary">#</span>{s}</span>)}
      </div>
    </div>
  );
}

function Stat({ n, suffix, label, run }: { n: number; suffix: string; label: string; run: boolean }) {
  const v = useCounter(n, run);
  return (
    <div className="rounded-lg border border-border bg-card p-5 hover:border-primary hover:-translate-y-1 transition-all">
      <div className="text-4xl font-bold text-gradient">{v}{suffix}</div>
      <div className="mt-1 font-mono text-xs text-muted-foreground">{label}</div>
    </div>
  );
}

function About() {
  const ref = useRef<HTMLDivElement>(null);
  const [run, setRun] = useState(false);
  useEffect(() => {
    const io = new IntersectionObserver(([e]) => e?.isIntersecting && setRun(true), { threshold: 0.3 });
    if (ref.current) io.observe(ref.current);
    return () => io.disconnect();
  }, []);
  return (
    <section id="about" className="mx-auto max-w-6xl px-6 py-24">
      <SectionTitle n="01" cmd="cat about.md" title="À propos" />
      <div className="grid md:grid-cols-[1.2fr_1fr] gap-10">
        <div className="reveal rounded-xl border border-border bg-card p-6 font-mono text-sm leading-7">
          <p><span className="text-secondary">interface</span> <span className="text-primary">Developer</span> {"{"}</p>
          <p className="pl-4">name: <span className="text-primary">"Mohamed Amine Chouri"</span>;</p>
          <p className="pl-4">title: <span className="text-primary">"Web Developer · Frontend Angular"</span>;</p>
          <p className="pl-4">experience: <span className="text-primary">"6+ years"</span>;</p>
          <p className="pl-4">focus: [<span className="text-primary">"scalable UI"</span>, <span className="text-primary">"performance"</span>, <span className="text-primary">"e-commerce"</span>];</p>
          <p className="pl-4">education: <span className="text-primary">"Ingénieur génie logiciel (EPI, 2023)"</span>;</p>
          <p className="pl-4">languages: {"{"} fr: <span className="text-primary">"B2"</span>, en: <span className="text-primary">"B2"</span>, de: <span className="text-primary">"B1"</span>, ar: <span className="text-primary">"natif"</span> {"}"};</p>
          <p className="pl-4">location: <span className="text-primary">"Sousse → Paris"</span>;</p>
          <p className="pl-4 text-muted-foreground">// sponsoring requis : visa salarié / Passeport Talent</p>
          <p>{"}"}</p>
        </div>
        <div ref={ref} className="reveal grid grid-cols-2 gap-4 content-start">
          <Stat n={6} suffix="+" label="années d'expérience" run={run} />
          <Stat n={5} suffix="" label="entreprises" run={run} />
          <Stat n={20} suffix="+" label="projets livrés" run={run} />
          <Stat n={4} suffix="" label="langues parlées" run={run} />
        </div>
      </div>
    </section>
  );
}

function Stack() {
  return (
    <section id="stack" className="mx-auto max-w-6xl px-6 py-24">
      <SectionTitle n="02" cmd="npm ls --depth=0" title="Stack technique" />
      <div className="grid md:grid-cols-2 gap-x-10 gap-y-5">
        {skills.map((s, i) => (
          <div key={s.k} className="reveal group" style={{ transitionDelay: `${i * 60}ms` }}>
            <div className="flex justify-between font-mono text-sm mb-2">
              <span className="group-hover:text-primary transition-colors">{s.k}</span>
              <span className="text-muted-foreground">{s.lvl}%</span>
            </div>
            <div className="h-2 rounded-full bg-muted overflow-hidden">
              <div className="h-full rounded-full bg-gradient-to-r from-primary to-secondary skill-bar" style={{ ["--w" as string]: `${s.lvl}%` }} />
            </div>
          </div>
        ))}
      </div>
      <div className="reveal mt-10 flex flex-wrap gap-2">
        {tools.map((t) => (
          <span key={t} className="px-3 py-1.5 rounded-md border border-border font-mono text-xs text-muted-foreground hover:border-primary hover:text-primary hover:-translate-y-0.5 transition-all cursor-default">{t}</span>
        ))}
      </div>
    </section>
  );
}

function ScrollProgress() {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const on = () => {
      const h = document.documentElement;
      const p = h.scrollTop / Math.max(1, h.scrollHeight - h.clientHeight);
      if (ref.current) ref.current.style.transform = `scaleX(${p})`;
    };
    on();
    window.addEventListener("scroll", on, { passive: true });
    return () => window.removeEventListener("scroll", on);
  }, []);
  return <div ref={ref} className="fixed top-0 left-0 right-0 h-[3px] z-[60] origin-left bg-gradient-to-r from-primary to-secondary scale-x-0 shadow-[0_0_12px_var(--primary)]" />;
}

const floatTokens = ["</>", "{ }", "=>", "ng", "ts", "()", "[]", "&&", "$", "#", "::", "?."];

function BackgroundFx() {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const on = () => { if (ref.current) ref.current.style.setProperty("--sy", `${window.scrollY}px`); };
    window.addEventListener("scroll", on, { passive: true });
    return () => window.removeEventListener("scroll", on);
  }, []);
  return (
    <div ref={ref} aria-hidden className="pointer-events-none fixed inset-0 z-0 overflow-hidden">
      <div className="bg-orb bg-primary/10 size-[520px] -top-40 -left-40" />
      <div className="bg-orb bg-secondary/10 size-[460px] top-1/3 -right-40 [animation-delay:-8s]" />
      <div className="bg-orb bg-primary/5 size-[400px] -bottom-40 left-1/3 [animation-delay:-14s]" />
      <div className="absolute inset-0 bg-parallax">
        {floatTokens.map((t, i) => (
          <span key={i} className="float-token font-mono"
            style={{ left: `${(i * 83) % 100}%`, top: `${(i * 47) % 100}%`, animationDelay: `${-i * 2.3}s`, animationDuration: `${18 + (i % 5) * 4}s` }}>
            {t}
          </span>
        ))}
      </div>
    </div>
  );
}

function MacBook({ image, title, url }: { image: string; title: string; url: string }) {
  return (
    <div className="relative mx-auto w-full max-w-[640px]">
      <div className="rounded-t-[18px] bg-mac-frame p-[2.2%] pb-[3%] shadow-2xl border border-border">
        <div className="relative rounded-md overflow-hidden bg-background aspect-[16/10]">
          <div className="absolute top-0 inset-x-0 z-10 flex items-center gap-1.5 px-3 h-6 bg-muted/95 border-b border-border">
            <span className="size-2 rounded-full bg-destructive" /><span className="size-2 rounded-full bg-secondary" /><span className="size-2 rounded-full bg-primary" />
            <span className="mx-auto px-3 rounded bg-background/70 font-mono text-[9px] text-muted-foreground truncate max-w-[60%]">{url === "#" ? "votre-projet.com" : url}</span>
          </div>
          <img src={image} alt={`Capture ${title}`} loading="lazy" width={1280} height={800} className="absolute inset-0 size-full object-cover object-top pt-6 hover:scale-105 transition-transform duration-[2000ms]" />
          <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-transparent to-foreground/5 pointer-events-none" />
        </div>
        <div className="absolute top-[1.1%] left-1/2 -translate-x-1/2 size-1.5 rounded-full bg-background" />
      </div>
      <div className="relative h-3 md:h-4 -mx-[7%] rounded-b-[14px] bg-mac-base border border-border border-t-0">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[16%] h-1.5 rounded-b-md bg-background/40" />
      </div>
      <div className="mx-auto mt-1 h-4 w-[80%] rounded-full bg-primary/15 blur-xl" />
    </div>
  );
}

function Projects() {
  const [i, setI] = useState(0);
  const [paused, setPaused] = useState(false);
  const n = projects.length;
  const go = (d: number) => setI((x) => (x + d + n) % n);
  useEffect(() => {
    if (paused) return;
    const t = setTimeout(() => go(1), 6000);
    return () => clearTimeout(t);
  }, [i, paused]);
  const p = projects[i]!;
  return (
    <section id="projects" className="mx-auto max-w-6xl px-6 py-24">
      <SectionTitle n="03" cmd="ls ./projets --live" title="Projets live" />
      <div className="reveal rounded-2xl border border-border bg-card/60 backdrop-blur p-6 md:p-10"
        onMouseEnter={() => setPaused(true)} onMouseLeave={() => setPaused(false)}>
        <div className="grid lg:grid-cols-[1.5fr_1fr] gap-10 items-center">
          <div key={`m${i}`} className="animate-in fade-in zoom-in-95 slide-in-from-right-6 duration-700">
            <MacBook image={p.image} title={p.title} url={p.url} />
          </div>
          <div key={`t${i}`} className="animate-in fade-in slide-in-from-bottom-4 duration-700">
            <p className="font-mono text-xs text-muted-foreground">
              <span className="text-primary">{String(i + 1).padStart(2, "0")}</span> / {String(n).padStart(2, "0")}
              <span className="ml-3 inline-flex items-center gap-1.5 rounded-full border border-border px-2 py-0.5"><span className="size-1.5 rounded-full bg-primary animate-pulse" />LIVE</span>
            </p>
            <h3 className="mt-4 text-3xl font-bold">{p.title}</h3>
            <p className="mt-3 text-muted-foreground leading-relaxed">{p.desc}</p>
            <div className="mt-5 flex flex-wrap gap-2">
              {p.stack.map((s) => <span key={s} className="font-mono text-xs px-2.5 py-1 rounded bg-muted text-secondary">{s}</span>)}
            </div>
            <a href={p.url} target="_blank" rel="noreferrer" className="mt-7 inline-flex font-mono text-sm px-5 py-2.5 rounded-md border border-primary text-primary hover:bg-primary hover:text-primary-foreground transition-colors">
              visiter le site ↗
            </a>
          </div>
        </div>
        <div className="mt-10 flex items-center gap-4">
          <button onClick={() => go(-1)} aria-label="Précédent" className="size-10 shrink-0 rounded-md border border-border font-mono hover:border-primary hover:text-primary transition-colors">←</button>
          <div className="flex-1 flex gap-2">
            {projects.map((x, k) => (
              <button key={x.title} onClick={() => setI(k)} aria-label={x.title} className="group flex-1 h-1 rounded-full bg-border overflow-hidden">
                <span className={`block h-full bg-primary ${k < i ? "w-full" : k === i ? (paused ? "w-full" : "slide-progress") : "w-0"}`} key={k === i ? `a${i}` : k} />
              </button>
            ))}
          </div>
          <button onClick={() => go(1)} aria-label="Suivant" className="size-10 shrink-0 rounded-md border border-border font-mono hover:border-primary hover:text-primary transition-colors">→</button>
        </div>
      </div>
    </section>
  );
}

function Experience() {
  const [open, setOpen] = useState(0);
  return (
    <section id="experience" className="mx-auto max-w-6xl px-6 py-24">
      <SectionTitle n="04" cmd="git log --oneline career" title="Expérience" />
      <div className="reveal relative rounded-xl border border-border bg-card p-2 md:p-4 font-mono">
        {experiences.map((e, i) => {
          const isOpen = open === i;
          return (
            <div key={e.hash} className="relative">
              <button onClick={() => setOpen(isOpen ? -1 : i)}
                className={`w-full grid grid-cols-[auto_1fr_auto] items-center gap-3 px-3 py-3 rounded-md text-left text-sm transition-colors ${isOpen ? "bg-muted" : "hover:bg-muted/50"}`}>
                <span className="flex items-center gap-2">
                  <span className={`size-2.5 rounded-full ${isOpen ? "bg-primary" : "bg-border"}`} />
                  <span className="text-secondary text-xs">{e.hash}</span>
                </span>
                <span className="truncate">
                  <span className="text-foreground">{e.role}</span>
                  <span className="text-primary"> @{e.company}</span>
                  {i === 0 && <span className="ml-2 text-[10px] px-1.5 py-0.5 rounded bg-primary text-primary-foreground">HEAD</span>}
                </span>
                <span className="text-xs text-muted-foreground whitespace-nowrap">{e.date} <span className="ml-1">{isOpen ? "−" : "+"}</span></span>
              </button>
              <div className={`grid transition-all duration-500 ${isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"}`}>
                <div className="overflow-hidden">
                  <div className="ml-7 pl-4 border-l border-primary/40 py-3 font-sans">
                    <ul className="space-y-1.5 text-sm text-muted-foreground">
                      {e.points.map((p) => <li key={p} className="flex gap-2"><span className="text-primary font-mono">+</span>{p}</li>)}
                    </ul>
                    <div className="mt-3 flex flex-wrap gap-1.5 font-mono">
                      <span className="text-[10px] text-muted-foreground mr-1">{e.place}</span>
                      {e.tags.map((t) => <span key={t} className="text-[10px] px-2 py-0.5 rounded bg-background border border-border text-secondary">{t}</span>)}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}

function Contact() {
  const [copied, setCopied] = useState(false);
  const email = "aminechouri.info@gmail.com";
  return (
    <section id="contact" className="mx-auto max-w-3xl px-6 py-28 text-center">
      <p className="reveal font-mono text-sm text-muted-foreground"><span className="text-primary">$</span> ssh amine@hire-me</p>
      <h2 className="reveal mt-4 text-5xl md:text-6xl font-bold text-glow">Construisons quelque chose.</h2>
      <p className="reveal mt-5 text-muted-foreground">Disponible pour entretiens à Paris dès janvier 2027.</p>
      <div className="reveal mt-10 flex flex-wrap justify-center gap-3 font-mono text-sm">
        <button onClick={() => { navigator.clipboard.writeText(email); setCopied(true); setTimeout(() => setCopied(false), 1800); }}
          className="px-5 py-3 rounded-md border border-primary text-primary hover:bg-primary/10 transition-colors">
          {copied ? "✓ copié !" : email}
        </button>
        <a href="https://www.linkedin.com/in/med-amine-chouri/" target="_blank" rel="noreferrer" className="px-5 py-3 rounded-md border border-border hover:border-primary hover:text-primary transition-colors">LinkedIn ↗</a>
      </div>
      <p className="mt-20 font-mono text-xs text-muted-foreground">© 2026 Mohamed Amine Chouri · <span className="text-primary">exit 0</span></p>
    </section>
  );
}

function Index() {
  useReveal();
  return (
    <div className="relative">
      <ScrollProgress />
      <BackgroundFx />
      <Spotlight />
      <Nav />
      <main className="relative z-10">
        <Hero />
        <Marquee />
        <About />
        <Stack />
        <Projects />
        <Experience />
        <Contact />
      </main>
    </div>
  );
}
