import { createContext, useContext, useEffect, useState, type ReactNode } from "react";

export type Language = "fr" | "en";
const english: Record<string, string> = {
  "À propos": "About me", "Stack technique": "Tech stack", "Projets live": "Live projects", "Services & capacités": "Services & capabilities", "Expérience": "Experience",
  "à propos": "about", "projets": "projects", "expérience": "experience",
  "Disponible · Paris · Janvier 2027": "Open to work · Paris · January 2027",
  "6+ ans": "6+ years", " à concevoir et livrer des applications web scalables en production —": " building and shipping scalable web applications in production —",
  "Angular, TypeScript, RxJS, e-commerce, performance & SEO.": "Angular, TypeScript, RxJS, e-commerce, performance & SEO.",
  "./projets-live": "./live-projects", "// ta photo ici": "// your photo here", "années": "years",
  "Ingénieur génie logiciel (EPI, 2023)": "Software engineering degree (EPI, 2023)", "natif": "native",
  "// sponsoring requis : visa salarié / Passeport Talent": "// sponsorship required: work visa / Talent Passport",
  "années d'expérience": "years of experience", "entreprises": "companies", "projets livrés": "projects shipped", "langues parlées": "languages spoken",
  "Capture": "Screenshot", "visiter le site ↗": "visit website ↗", "Précédent": "Previous", "Suivant": "Next",
  "Un site web vitrine pour promouvoir le télésecrétariat médical en France et pour réserver en ligne et devenir partenaire.": "A website promoting medical remote secretarial services in France, with online booking and partner enquiries.",
  "Site WordPress présentant des appartements, des villas et des résidences avec services au cœur de Riyad..": "A WordPress website showcasing apartments, villas and serviced residences in the heart of Riyadh.",
  "Boutique internationale, plugins sur mesure, paiements sécurisés.": "An international online store with custom plugins and secure payments.",
  "Dashboard e-commerce avec analytics et gestion des commandes.": "An e-commerce dashboard with analytics and order management.",
  "Landing page rapide, animée et optimisée SEO.": "A fast, animated and SEO-optimised landing page.",
  "Intégration d’API & systèmes connectés": "API integration & connected systems",
  "Connectez votre site à vos outils : CRM, paiements, réservation, ERP et services tiers. Des données synchronisées, moins de ressaisie et un parcours client fluide.": "Connect your website to your tools: CRM, payments, booking, ERP and third-party services. Keep data in sync, reduce manual entry and deliver a seamless customer journey.",
  "Automatisation IA & workflows": "AI automation & workflows",
  "Assistants IA, chatbots, qualification de prospects, traitement de documents et tâches répétitives automatisées. Des workflows adaptés à votre activité, avec validation humaine lorsque nécessaire.": "AI assistants, chatbots, lead qualification, document processing and automated repetitive tasks. Workflows tailored to your business, with human review where needed.",
  "sur mesure": "custom scope", "Site vitrine sur mesure": "Custom business websites",
  "Votre marque, pas un thème. Pages claires, design unique, contenu que vous éditez vous-même.": "Your brand, not a template. Clear pages, distinctive design and content you can edit yourself.",
  "Boutique e-commerce": "E-commerce stores",
  "Produits, panier, paiements Stripe / PayPal, taxes et livraison. Un back-office que votre équipe comprend.": "Products, cart, Stripe / PayPal payments, taxes and shipping. An admin area your team can actually use.",
  "Apps Angular / TypeScript": "Angular / TypeScript applications",
  "Dashboards, espaces clients, interfaces métier : du code typé, propre et fait pour évoluer.": "Dashboards, customer portals and business interfaces: clean, typed code built to scale.",
  "Landing pages qui convertissent": "Conversion-focused landing pages",
  "Page rapide, animée, optimisée SEO et Core Web Vitals, prête pour vos campagnes pub.": "Fast, animated pages optimised for SEO and Core Web Vitals, ready for your campaigns.",
  "Animations & effet wow": "Animations & visual impact",
  "Micro-interactions, scroll animé, transitions soignées : le détail qui fait rester le visiteur.": "Micro-interactions, animated scrolling and polished transitions: the details that keep visitors engaged.",
  "Maintenance & suivi": "Maintenance & ongoing support",
  "Mises à jour, sauvegardes, sécurité, hébergement, petites évolutions. Vous n'êtes jamais laissé seul.": "Updates, backups, security, hosting and improvements. You are never left on your own.",
  "3–10 jours": "3–10 days", "2–4 semaines": "2–4 weeks", "au forfait": "project-based", "2–5 jours": "2–5 days", "en option": "optional", "mensuel": "monthly",
  "Brief & cadrage": "Discovery & scope", "J'écoute votre besoin métier, je pose les vraies questions, je chiffre clairement.": "I listen to your business needs, ask the right questions and provide a clear estimate.",
  "Maquette validée": "Design approval", "Vous voyez le site avant qu'il existe. On corrige sur l'écran, pas après la facture.": "See your website before it is built. We refine the design before development, not after the invoice.",
  "Développement": "Development", "Code propre, responsive, animé. Avancement visible chaque semaine, pas de boîte noire.": "Clean, responsive, animated code. Visible progress every week, no black box.",
  "Tests & SEO": "Testing & SEO", "Vitesse, mobile, SEO on-page, formulaire, analytics : rien ne traîne à la mise en ligne.": "Speed, mobile, on-page SEO, forms and analytics: checked before launch.",
  "Lancement & suivi": "Launch & support", "Mise en ligne, formation de votre équipe, puis maintenance et évolutions.": "Launch, team training, then maintenance and ongoing improvements.",
  "Un devis clair, une date annoncée, une date tenue": "A clear quote and a delivery date you can rely on",
  "100 % responsive, du petit mobile à l'écran 4K": "100% responsive, from small phones to 4K screens",
  "Lighthouse ≥ 90 et SEO on-page inclus d'office": "Lighthouse ≥ 90 and on-page SEO included",
  "Formulaire, Google Analytics et GTM configurés": "Forms, Google Analytics and GTM configured",
  "Code propre + tous les accès (domaine, hébergeur, admin)": "Clean code + full access (domain, hosting, admin)",
  "Communication simple, sans jargon technique": "Clear communication, without technical jargon",
  "Refonte de site": "Website redesign", "Migration WordPress → React": "WordPress → React migration", "Hébergement & DNS": "Hosting & DNS", "Multilingue FR / EN / AR": "Multilingual FR / EN / AR", "Accessibilité": "Accessibility",
  "6 ans, 20+ sites livrés, 5 boîtes.": "6 years, 20+ websites shipped, 5 companies.",
  " Je pars d'un besoin métier flou et j'en fais un site clair, rapide et qui convertit — de la maquette à la mise en ligne, avec un interlocuteur unique.": " I turn a business need into a clear, fast, conversion-focused website — from design to launch, with one point of contact.",
  "Connecter vos outils. Automatiser votre activité.": "Connect your tools. Automate your business.",
  "API & automatisation IA": "API & AI automation",
  "Votre site peut faire plus que présenter votre activité : connecter vos données, répondre à vos clients et automatiser les tâches qui vous prennent du temps.": "Your website can do more than showcase your business: connect your data, answer customer questions and automate time-consuming tasks.",
  "CRM & paiements": "CRM & payments", "Assistants & chatbots IA": "AI assistants & chatbots", "Prospects & documents": "Leads & documents",
  "Discuter de mon automatisation": "Discuss my automation project",
  "// comment ça se passe, du premier message à la mise en ligne": "// from our first conversation to launch",
  "// ce que vous obtenez à chaque fois": "// what you get with every project", "// aussi dans mes cordes": "// more ways I can help",
  "Un projet, une refonte, un délai serré ?": "A project, a redesign, a tight deadline?",
  "Dites-moi ce que vous voulez vendre ou simplifier — je vous dis si c'est faisable, en combien de temps et à quel prix.": "Tell me what you want to sell or simplify — I will explain what is feasible, how long it will take and what it will cost.",
  "parler de mon projet": "discuss my project", "Construisons quelque chose.": "Let's build something.",
  "Disponible pour entretiens à Paris dès janvier 2027.": "Available for interviews in Paris from January 2027.", "✓ copié !": "✓ copied!",
  "Développeur Web": "Web Developer", "Intégrateur Web Frontend": "Frontend Web Integrator",
  "Cadrage client & sites sur mesure (Figma), sections JS custom": "Client discovery & custom websites (Figma), bespoke JS sections",
  "E-commerce WordPress : hooks PHP, plugins sur mesure": "WordPress e-commerce: PHP hooks and custom plugins",
  "Paiements Stripe, PayPal, WooCommerce · hébergement OVH/Hostinger/GoDaddy": "Stripe, PayPal, WooCommerce payments · OVH/Hostinger/GoDaddy hosting",
  "Sites pixel-perfect depuis Figma / Adobe XD, du design au live": "Pixel-perfect websites from Figma / Adobe XD, from design to launch",
  "Animations GSAP & effets de scroll custom": "GSAP animations & custom scroll effects", "SEO on-page & responsive au pixel près": "On-page SEO & pixel-perfect responsive layouts",
  "Interfaces Angular pour plusieurs plateformes e-commerce": "Angular interfaces for multiple e-commerce platforms",
  "UI/UX & flux utilisateurs sur mesure, paiement & suivi": "Custom UI/UX & user journeys, payments & tracking",
  "SEO technique, Google Tag Manager & Analytics": "Technical SEO, Google Tag Manager & Analytics",
  "Frontend Angular pour solutions full-stack": "Angular frontends for full-stack solutions",
  "Paiements sécurisés & chatbots automatisés": "Secure payments & automated chatbots", "Dashboards e-commerce, SEO, hébergement": "E-commerce dashboards, SEO and hosting",
  "Designs XD/Figma → HTML/CSS/JS pixel-perfect": "XD/Figma designs → pixel-perfect HTML/CSS/JS",
};

const LanguageContext = createContext({ language: "fr" as Language, setLanguage: (_: Language) => {}, t: (text: string) => text });
export function PortfolioLanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState<Language>("fr");
  useEffect(() => {
    try { const saved = localStorage.getItem("amine-portfolio-language"); if (saved === "en" || saved === "fr") setLanguage(saved); } catch { /* Storage is optional. */ }
  }, []);
  useEffect(() => { document.documentElement.lang = language; }, [language]);
  const changeLanguage = (next: Language) => { setLanguage(next); try { localStorage.setItem("amine-portfolio-language", next); } catch { /* Storage is optional. */ } };
  return <LanguageContext.Provider value={{ language, setLanguage: changeLanguage, t: (text) => language === "en" ? english[text] ?? text : text }}>{children}</LanguageContext.Provider>;
}
export const usePortfolioLanguage = () => useContext(LanguageContext);
