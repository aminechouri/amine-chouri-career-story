import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useRef, useState } from "react";
import { Button } from "@/components/ui/button";
import { PortfolioLanguageProvider, usePortfolioLanguage } from "@/lib/portfolio-language";
import amineImg  from "@/assets/me.jpg";
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
      { name: "description", content: "Développeur web Angular / TypeScript avec 6+ ans d'expérience. Intégration API, automatisation IA, sites vitrines, e-commerce et apps sur mesure. API integration and AI automation." },
      { property: "og:title", content: "Mohamed Amine Chouri — Web Developer" },
      { property: "og:description", content: "Web development, API integration & AI automation · Développement web, intégration API et automatisation IA. 6+ ans d’expérience." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

/* ================= DATA (edit here) ================= */
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
  { k: "Angular", lvl: 90 }, { k: "TypeScript", lvl: 88 }, { k: "PHP / Symfony", lvl: 88 }, { k: "React / Next.js", lvl: 82 },
  { k: "WordPress / Shopify", lvl: 97 }, { k: "Node.js / Express", lvl: 75 }, { k: "Laravel", lvl: 72 }, { k: "Git / CI/CD", lvl: 92 },
];
const tools = ["Git", "Git Flow", "JIRA", "Agile/Scrum", "Code Review", "MySQL", "MongoDB", "Firebase", "Figma", "GSAP", "Stripe", "PayPal", "Prestashop", "Drupal", "GTM", "Google Analytics","Media query","Clik2pay","Cpanel","Search console","SEO","Google speed"];

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
    const word = words[i % words.length];
    if (!word) return;
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

function Nav() {
  const { t, language, setLanguage } = usePortfolioLanguage();
  const links = [{ id: "about", label: "à propos" }, { id: "stack", label: "stack" }, { id: "projects", label: "projets" }, { id: "services", label: "services" }, { id: "experience", label: "expérience" }, { id: "contact", label: "contact" }];
  return (
    <nav className="fixed top-0 inset-x-0 z-50 backdrop-blur-md bg-background/70 border-b border-border">
      <div className="mx-auto max-w-6xl flex items-center justify-between px-6 h-16 font-mono text-sm">
        <a href="#top" className="text-primary font-semibold">~/amine<span className="text-muted-foreground">$</span></a>
        <div className="hidden md:flex gap-4 text-xs">
          {links.map((l, i) => (
            <a key={l.id} href={`#${l.id}`} className="text-muted-foreground hover:text-primary transition-colors"><span className="text-primary">0{i + 1}.</span>{t(l.label)}</a>
          ))}
        </div>
        <div className="flex items-center gap-1 border-l border-border pl-3" role="group" aria-label="Language / Langue">
          {(["fr", "en"] as const).map((lang) => <Button key={lang} variant={language === lang ? "default" : "ghost"} size="sm" onClick={() => setLanguage(lang)} aria-pressed={language === lang} aria-label={lang === "fr" ? "Français" : "English"} className="font-mono">{lang.toUpperCase()}</Button>)}
        </div>
      </div>
    </nav>
  );
}

function SectionTitle({ n, cmd, title }: { n: string; cmd: string; title: string }) {
  const { t } = usePortfolioLanguage();
  return (
    <div className="reveal mb-10">
      <p className="font-mono text-sm text-muted-foreground"><span className="text-primary">$</span> {cmd}</p>
      <div className="flex items-center gap-4 mt-2">
        <span className="font-mono text-primary">{n}.</span>
        <h2 className="text-3xl md:text-4xl font-bold">{t(title)}</h2>
        <div className="h-px flex-1 bg-gradient-to-r from-border to-transparent" />
      </div>
    </div>
  );
}

const bootLines = ["> npm run dev", "✓ compiled amine.portfolio in 6y", "✓ 5 companies · 20+ projects shipped", "➜ ready on http://paris.fr — 2027"];

function Hero() {
  const { t } = usePortfolioLanguage();
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
            <span className="size-2 rounded-full bg-primary animate-pulse" /> {t("Disponible · Paris · Janvier 2027")}
          </div>
          <h1 className="text-5xl md:text-7xl font-bold leading-[1.02]">
            Mohamed Amine<br /><span className="text-gradient">Chouri</span>
          </h1>
          <p className="mt-5 font-mono text-xl md:text-2xl text-secondary h-8">&gt; <span className="caret">{typed}</span></p>
          <p className="mt-5 max-w-xl text-muted-foreground leading-relaxed">
            <span className="text-foreground font-semibold">{t("6+ ans")}</span>{t(" à concevoir et livrer des applications web scalables en production —")}
            {t("Angular, TypeScript, RxJS, e-commerce, performance & SEO.")}
          </p>
          <div className="mt-6 rounded-lg border border-border bg-card/70 p-4 font-mono text-xs leading-6 max-w-md min-h-[120px]">
            {bootLines.slice(0, lines).map((l, i) => (
              <div key={l} className={`animate-in fade-in slide-in-from-left-2 ${i === 0 ? "text-muted-foreground" : i === 3 ? "text-secondary" : "text-primary"}`}>{l}</div>
            ))}
          </div>
          <div className="mt-8 flex flex-wrap gap-3 font-mono text-sm">
            <a href="#projects" className="px-6 py-3 rounded-md border border-primary text-primary hover:bg-primary/10 transition-colors">{t("./projets-live")}</a>
            <a href="#contact" className="px-6 py-3 rounded-md border border-border hover:border-primary hover:text-primary transition-colors">contact()</a>
          </div>
        </div>
        <Photo />
      </div>
    </section>
  );
}

function Photo() {
  const { t } = usePortfolioLanguage();
  const ref = useRef<HTMLDivElement>(null);
  const onMove = (e: React.MouseEvent) => {
    const element = ref.current;
    if (!element) return;
    const r = element.getBoundingClientRect();
    const x = (e.clientX - r.left) / r.width - 0.5, y = (e.clientY - r.top) / r.height - 0.5;
    element.style.transform = `perspective(900px) rotateY(${x * 12}deg) rotateX(${-y * 12}deg)`;
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
                <p className="mt-4 text-xs text-muted-foreground">{t('// ta photo ici')}</p>
              </div>
            </div>
          )}
          <div className="absolute bottom-3 left-3 right-3 rounded-md bg-background/85 backdrop-blur border border-border p-3 font-mono text-[11px] leading-5">
            <span className="text-secondary">const</span> stack = [<span className="text-primary">'Angular'</span>, <span className="text-primary">'TS'</span>, <span className="text-primary">'RxJS'</span>];
          </div>
        </div>
      </div>
      <div className="absolute -left-6 top-16 rounded-md border border-border bg-card px-3 py-2 font-mono text-xs shadow-lg hidden sm:block">
        <span className="text-primary text-lg font-bold">6+</span>{t("années")}
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
  const { t } = usePortfolioLanguage();
  const v = useCounter(n, run);
  return (
    <div className="rounded-lg border border-border bg-card p-5 hover:border-primary hover:-translate-y-1 transition-all">
      <div className="text-4xl font-bold text-gradient">{v}{suffix}</div>
      <div className="mt-1 font-mono text-xs text-muted-foreground">{t(label)}</div>
    </div>
  );
}

function About() {
  const { t } = usePortfolioLanguage();
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
          <p className="pl-4">education: <span className="text-primary">"{t("Ingénieur génie logiciel (EPI, 2023)")}"</span>;</p>
          <p className="pl-4">languages: {"{"} fr: <span className="text-primary">"B2"</span>, en: <span className="text-primary">"B2"</span>, de: <span className="text-primary">"B1"</span>, ar: <span className="text-primary">"{t("natif")}"</span> {"}"};</p>
          <p className="pl-4">location: <span className="text-primary">"Sousse → Paris"</span>;</p>
          <p className="pl-4 text-muted-foreground">{t('// sponsoring requis : visa salarié / Passeport Talent')}</p>
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
  const { t } = usePortfolioLanguage();
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
  const { t } = usePortfolioLanguage();
  return (
    <div className="relative mx-auto w-full max-w-[640px]">
      <div className="rounded-t-[18px] bg-mac-frame p-[2.2%] pb-[3%] shadow-2xl border border-border">
        <div className="relative rounded-md overflow-hidden bg-background aspect-[16/10]">
          <div className="absolute top-0 inset-x-0 z-10 flex items-center gap-1.5 px-3 h-6 bg-muted/95 border-b border-border">
            <span className="size-2 rounded-full bg-destructive" /><span className="size-2 rounded-full bg-secondary" /><span className="size-2 rounded-full bg-primary" />
            <span className="mx-auto px-3 rounded bg-background/70 font-mono text-[9px] text-muted-foreground truncate max-w-[60%]">{url === "#" ? "votre-projet.com" : url}</span>
          </div>
          <img src={image} alt={`${t("Capture")} ${title}`} loading="lazy" width={1280} height={800} className="absolute inset-0 size-full object-cover object-top pt-6 hover:scale-105 transition-transform duration-[2000ms]" />
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
  const { t } = usePortfolioLanguage();
  const [i, setI] = useState(0);
  const [paused, setPaused] = useState(false);
  const n = projects.length;
  const go = (d: number) => setI((x) => (x + d + n) % n);
  useEffect(() => {
    if (paused) return;
    const t = setTimeout(() => go(1), 6000);
    return () => clearTimeout(t);
  }, [i, paused]);
  const p = projects[i];
  if (!p) return null;
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
            <p className="mt-3 text-muted-foreground leading-relaxed">{t(p.desc)}</p>
            <div className="mt-5 flex flex-wrap gap-2">
              {p.stack.map((s) => <span key={s} className="font-mono text-xs px-2.5 py-1 rounded bg-muted text-secondary">{s}</span>)}
            </div>
            <a href={p.url} target="_blank" rel="noreferrer" className="mt-7 inline-flex font-mono text-sm px-5 py-2.5 rounded-md border border-primary text-primary hover:bg-primary hover:text-primary-foreground transition-colors">
              visiter le site ↗
            </a>
          </div>
        </div>
        <div className="mt-10 flex items-center gap-4">
          <button onClick={() => go(-1)} aria-label={t("Précédent")} className="size-10 shrink-0 rounded-md border border-border font-mono hover:border-primary hover:text-primary transition-colors">←</button>
          <div className="flex-1 flex gap-2">
            {projects.map((x, k) => (
              <button key={x.title} onClick={() => setI(k)} aria-label={x.title} className="group flex-1 h-1 rounded-full bg-border overflow-hidden">
                <span className={`block h-full bg-primary ${k < i ? "w-full" : k === i ? (paused ? "w-full" : "slide-progress") : "w-0"}`} key={k === i ? `a${i}` : k} />
              </button>
            ))}
          </div>
          <button onClick={() => go(1)} aria-label={t("Suivant")} className="size-10 shrink-0 rounded-md border border-border font-mono hover:border-primary hover:text-primary transition-colors">→</button>
        </div>
      </div>
    </section>
  );
}

/* ---------- Services & capacités (clients / freelance) ---------- */
const services = [
  { icon: "{↔}", title: "Intégration d’API & systèmes connectés", desc: "Connectez votre site à vos outils : CRM, paiements, réservation, ERP et services tiers. Des données synchronisées, moins de ressaisie et un parcours client fluide.", tags: ["REST API", "Webhooks", "CRM", "Stripe"], meta: "sur mesure" },
  { icon: "✧", title: "Automatisation IA & workflows", desc: "Assistants IA, chatbots, qualification de prospects, traitement de documents et tâches répétitives automatisées. Des workflows adaptés à votre activité, avec validation humaine lorsque nécessaire.", tags: ["AI assistants", "Chatbots", "Workflows", "API"], meta: "sur mesure" },
  { icon: "</>", title: "Site vitrine sur mesure", desc: "Votre marque, pas un thème. Pages claires, design unique, contenu que vous éditez vous-même.", tags: ["WordPress", "Elementor", "React"], meta: "3–10 jours" },
  { icon: "€", title: "Boutique e-commerce", desc: "Produits, panier, paiements Stripe / PayPal, taxes et livraison. Un back-office que votre équipe comprend.", tags: ["WooCommerce", "Stripe", "PHP"], meta: "2–4 semaines" },
  { icon: "ng", title: "Apps Angular / TypeScript", desc: "Dashboards, espaces clients, interfaces métier : du code typé, propre et fait pour évoluer.", tags: ["Angular", "NgRx", "RxJS"], meta: "au forfait" },
  { icon: "▲", title: "Landing pages qui convertissent", desc: "Page rapide, animée, optimisée SEO et Core Web Vitals, prête pour vos campagnes pub.", tags: ["Next.js", "Tailwind", "GSAP"], meta: "2–5 jours" },
  { icon: "✦", title: "Animations & effet wow", desc: "Micro-interactions, scroll animé, transitions soignées : le détail qui fait rester le visiteur.", tags: ["GSAP", "CSS", "JS"], meta: "en option" },
  { icon: "↻", title: "Maintenance & suivi", desc: "Mises à jour, sauvegardes, sécurité, hébergement, petites évolutions. Vous n'êtes jamais laissé seul.", tags: ["OVH", "Hostinger", "cPanel"], meta: "mensuel" },
  { icon: "SEO", title: "SEO & performance", desc: "Améliorez la visibilité de votre application sur les pages de recherche Google grâce à une analyse complète du trafic et optimisez ses performances et son temps de chargement pour une meilleure expérience utilisateur.", tags: ["semrush", "ahrefs", "GTM"], meta: "mensuel" },
  { icon: ">>", title: "Performance Optimization", desc: "Amélioration de la vitesse et des performances des applications web pour une meilleure expérience utilisateur. Maîtrise de Node.js et Express.", tags: ["Google", "Cache", "Litespeed"], meta: "mensuel" },
];

const processSteps = [
  { n: "01", t: "Brief & cadrage", d: "J'écoute votre besoin métier, je pose les vraies questions, je chiffre clairement." },
  { n: "02", t: "Maquette validée", d: "Vous voyez le site avant qu'il existe. On corrige sur l'écran, pas après la facture." },
  { n: "03", t: "Développement", d: "Code propre, responsive, animé. Avancement visible chaque semaine, pas de boîte noire." },
  { n: "04", t: "Tests & SEO", d: "Vitesse, mobile, SEO on-page, formulaire, analytics : rien ne traîne à la mise en ligne." },
  { n: "05", t: "Lancement & suivi", d: "Mise en ligne, formation de votre équipe, puis maintenance et évolutions." },
];

const guarantees = [
  "Un devis clair, une date annoncée, une date tenue",
  "100 % responsive, du petit mobile à l'écran 4K",
  "Lighthouse ≥ 90 et SEO on-page inclus d'office",
  "Formulaire, Google Analytics et GTM configurés",
  "Code propre + tous les accès (domaine, hébergeur, admin)",
  "Communication simple, sans jargon technique",
];

const abilities = ["Intégration d’API & systèmes connectés", "Automatisation IA & workflows", "Refonte de site", "Migration WordPress → React", "API & Symfony", "Shopify", "Hébergement & DNS", "Google Ads & GTM", "Multilingue FR / EN / AR", "Accessibilité"];

function ServiceCard({ s, i }: { s: (typeof services)[number]; i: number }) {
  const { t } = usePortfolioLanguage();
  const onMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const r = e.currentTarget.getBoundingClientRect();
    e.currentTarget.style.setProperty("--mx", `${e.clientX - r.left}px`);
    e.currentTarget.style.setProperty("--my", `${e.clientY - r.top}px`);
  };
  return (
    <div className={`reveal h-full ${i < 2 ? "sm:col-span-2" : ""}`} style={{ transitionDelay: `${i * 80}ms` }}>
      <div onMouseMove={onMove}
        className={`group relative h-full overflow-hidden rounded-lg border bg-card p-5 hover:border-primary/60 hover:-translate-y-1.5 transition-all duration-300 ${i < 2 ? "border-primary/50 md:p-7" : "border-border"}`}>
        <div className="svc-spot pointer-events-none absolute inset-0" />
        <div className="relative flex items-start justify-between gap-3">
          <span className="icon-lift font-mono text-xl text-primary">{s.icon}</span>
          <span className="rounded border border-border px-1.5 py-0.5 font-mono text-[10px] text-muted-foreground">{t(s.meta)}</span>
        </div>
        <h3 className="relative mt-4 font-semibold text-foreground">{t(s.title)}</h3>
        <p className="relative mt-2 text-sm leading-relaxed text-muted-foreground">{t(s.desc)}</p>
        <div className="relative mt-4 flex flex-wrap gap-1.5">
          {s.tags.map((t) => <span key={t} className="rounded bg-muted px-2 py-0.5 font-mono text-[10px] text-secondary">{t}</span>)}
        </div>
      </div>
    </div>
  );
}

function Services() {
  const { t } = usePortfolioLanguage();
  return (
    <section id="services" className="mx-auto max-w-6xl px-6 py-24">
      <SectionTitle n="04" cmd="./services --client --freelance" title="API & automatisation IA" />
      <p className="reveal -mt-4 mb-10 max-w-2xl leading-relaxed text-muted-foreground">
        <span className="font-semibold text-foreground">{t("6 ans, 20+ sites livrés, 5 boîtes.")}</span>{t(" Je pars d'un besoin métier flou et j'en fais un site clair, rapide et qui convertit — de la maquette à la mise en ligne, avec un interlocuteur unique.")}
      </p>

      <div className="reveal mb-10 border-y border-primary/30 py-8 grid gap-6 md:grid-cols-[1.4fr_1fr]">
        <div>
          <h3 className="text-2xl font-semibold">{t("Connecter vos outils. Automatiser votre activité.")}</h3>
          <p className="mt-3 max-w-2xl leading-relaxed text-muted-foreground">{t("Votre site peut faire plus que présenter votre activité : connecter vos données, répondre à vos clients et automatiser les tâches qui vous prennent du temps.")}</p>
        </div>
        <div className="flex flex-col items-start justify-center gap-3">
          <p className="font-mono text-xs text-secondary">{t("CRM & paiements")} → {t("Assistants & chatbots IA")} → {t("Prospects & documents")}</p>
          <Button asChild variant="outline" className="h-auto whitespace-normal text-left border-primary text-primary"><a href="#contact">{t("Discuter de mon automatisation")} ↗</a></Button>
        </div>
      </div>
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {services.map((s, i) => <ServiceCard key={s.title} s={s} i={i} />)}
      </div>

      <div className="reveal mt-12 rounded-xl border border-border bg-card/60 p-6 md:p-8">
        <p className="font-mono text-xs text-muted-foreground">{t('// comment ça se passe, du premier message à la mise en ligne')}</p>
        <div className="relative mt-8 grid gap-8 md:grid-cols-5 md:gap-5">
          <div className="absolute left-0 right-0 top-5 hidden h-px bg-border md:block" />
          <div className="line-draw absolute left-0 top-5 hidden h-px bg-gradient-to-r from-primary to-secondary md:block" />
          {processSteps.map((p, i) => (
            <div key={p.n} className="group relative" style={{ transitionDelay: `${i * 90}ms` }}>
              <div className="flex items-center gap-3 md:block">
                <span className="icon-lift relative z-10 grid size-10 shrink-0 place-items-center rounded-full border border-border bg-card font-mono text-xs text-primary group-hover:border-primary">
                  {p.n}
                </span>
                <h4 className="font-semibold text-sm text-foreground md:mt-4">{t(p.t)}</h4>
              </div>
              <p className="mt-2 text-xs leading-relaxed text-muted-foreground">{t(p.d)}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="reveal mt-6 grid gap-8 md:grid-cols-[1.15fr_1fr]">
        <div className="rounded-xl border border-border bg-card/40 p-6">
          <p className="font-mono text-xs text-muted-foreground">{t('// ce que vous obtenez à chaque fois')}</p>
          <div className="mt-4 grid gap-3 sm:grid-cols-2">
            {guarantees.map((g, i) => (
              <div key={g} className="check-pop flex items-start gap-3 text-sm text-muted-foreground" style={{ transitionDelay: `${250 + i * 90}ms` }}>
                <span className="mt-0.5 grid size-5 shrink-0 place-items-center rounded border border-primary/40 bg-primary/15 font-mono text-[11px] text-primary">✓</span>
                <span>{t(g)}</span>
              </div>
            ))}
          </div>
        </div>
        <div className="rounded-xl border border-border bg-card/40 p-6">
          <p className="font-mono text-xs text-muted-foreground">{t('// aussi dans mes cordes')}</p>
          <div className="mt-4 flex flex-wrap gap-2">
            {abilities.map((a, i) => (
              <span key={a} className="check-pop rounded-md border border-border px-2.5 py-1 font-mono text-xs text-muted-foreground hover:border-primary hover:text-primary transition-colors" style={{ transitionDelay: `${300 + i * 60}ms` }}>
                {t(a)}
              </span>
            ))}
          </div>
          <div className="mt-6 rounded-lg border border-primary/30 bg-primary/5 p-4">
            <p className="text-sm leading-relaxed text-foreground">
              <span className="font-mono text-primary">$</span> {t("Un projet, une refonte, un délai serré ?")}
              <span className="block mt-1 text-muted-foreground">{t("Dites-moi ce que vous voulez vendre ou simplifier — je vous dis si c'est faisable, en combien de temps et à quel prix.")}</span>
            </p>
            <a href="#contact" className="mt-4 inline-flex items-center gap-2 rounded-md border border-primary px-4 py-2 font-mono text-xs text-primary hover:bg-primary hover:text-primary-foreground transition-colors">
              {t("parler de mon projet")} <span aria-hidden>↗</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

function Experience() {
  const { t } = usePortfolioLanguage();
  const [open, setOpen] = useState(0);
  return (
    <section id="experience" className="mx-auto max-w-6xl px-6 py-24">
      <SectionTitle n="05" cmd="git log --oneline career" title="Expérience" />
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
                  <span className="text-foreground">{t(e.role)}</span>
                  <span className="text-primary"> @{e.company}</span>
                  {i === 0 && <span className="ml-2 text-[10px] px-1.5 py-0.5 rounded bg-primary text-primary-foreground">HEAD</span>}
                </span>
                <span className="text-xs text-muted-foreground whitespace-nowrap">{e.date} <span className="ml-1">{isOpen ? "−" : "+"}</span></span>
              </button>
              <div className={`grid transition-all duration-500 ${isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"}`}>
                <div className="overflow-hidden">
                  <div className="ml-7 pl-4 border-l border-primary/40 py-3 font-sans">
                    <ul className="space-y-1.5 text-sm text-muted-foreground">
                      {e.points.map((p) => <li key={p} className="flex gap-2"><span className="text-primary font-mono">+</span>{t(p)}</li>)}
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
  const { t } = usePortfolioLanguage();
  const [copied, setCopied] = useState(false);
  const email = "aminechouri.info@gmail.com";
  return (
    <section id="contact" className="mx-auto max-w-3xl px-6 py-28 text-center">
      <p className="reveal font-mono text-sm text-muted-foreground"><span className="text-primary">$</span> ssh amine@hire-me</p>
      <h2 className="reveal mt-4 text-5xl md:text-6xl font-bold text-glow">{t('Construisons quelque chose.')}</h2>
      <p className="reveal mt-5 text-muted-foreground">{t('Disponible pour entretiens à Paris dès janvier 2027.')}</p>
      <div className="reveal mt-10 flex flex-wrap justify-center gap-3 font-mono text-sm">
        <button onClick={() => { navigator.clipboard.writeText(email); setCopied(true); setTimeout(() => setCopied(false), 1800); }}
          className="px-5 py-3 rounded-md border border-primary text-primary hover:bg-primary/10 transition-colors">
          {copied ? t("✓ copié !") : email}
        </button>
        <a href="https://www.linkedin.com/in/med-amine-chouri/" target="_blank" rel="noreferrer" className="px-5 py-3 rounded-md border border-border hover:border-primary hover:text-primary transition-colors">LinkedIn ↗</a>
      </div>
      <p className="mt-20 font-mono text-xs text-muted-foreground">© 2026 Mohamed Amine Chouri · <span className="text-primary">exit 0</span></p>
    </section>
  );
}

function Index() {
  return <PortfolioLanguageProvider><Portfolio /></PortfolioLanguageProvider>;
}

function Portfolio() {
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
        <Services />
        <Experience />
        <Contact />
      </main>
    </div>
  );
}
