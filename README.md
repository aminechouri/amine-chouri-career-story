# Amine Chouri Career Story

%-------------------------
% Resume in Latex
% Author : Jake Gutierrez
% Based off of: https://github.com/sb2nov/resume
% License : MIT
%------------------------

\documentclass[letterpaper,11pt]{article}

\usepackage{latexsym}
\usepackage[empty]{fullpage}
\usepackage{titlesec}
\usepackage{marvosym}
\usepackage[usenames,dvipsnames]{color}
\usepackage{verbatim}
\usepackage{enumitem}
\usepackage[hidelinks]{hyperref}
\usepackage{fancyhdr}
\usepackage[english]{babel}
\usepackage{tabularx}
\input{glyphtounicode}
\usepackage[T1]{fontenc}
\usepackage[utf8]{inputenc}
\input{glyphtounicode}
\pdfgentounicode=1

%----------FONT OPTIONS----------
% sans-serif
% \usepackage[sfdefault]{FiraSans}
% \usepackage[sfdefault]{roboto}
% \usepackage[sfdefault]{noto-sans}
% \usepackage[default]{sourcesanspro}

% serif
% \usepackage{CormorantGaramond}
% \usepackage{charter}


\pagestyle{fancy}
\fancyhf{} % clear all header and footer fields
\fancyfoot{}
\renewcommand{\headrulewidth}{0pt}
\renewcommand{\footrulewidth}{0pt}

% Adjust margins
\addtolength{\oddsidemargin}{-0.5in}
\addtolength{\evensidemargin}{-0.5in}
\addtolength{\textwidth}{1in}
\addtolength{\topmargin}{-.5in}
\addtolength{\textheight}{1.0in}

\urlstyle{same}

\raggedbottom
\raggedright
\setlength{\tabcolsep}{0in}

% Sections formatting
\titleformat{\section}{
  \vspace{-4pt}\scshape\raggedright\large
}{}{0em}{}[\color{black}\titlerule \vspace{-5pt}]

% Ensure that generate pdf is machine readable/ATS parsable
\pdfgentounicode=1

%-------------------------
% Custom commands
\newcommand{\resumeItem}[1]{
  \item\small{
    {#1 \vspace{-2pt}}
  }
}

\newcommand{\resumeSubheading}[4]{
  \vspace{-2pt}\item
    \begin{tabular*}{0.97\textwidth}[t]{l@{\extracolsep{\fill}}r}
      \textbf{#1} & #2 \\
      \textit{\small#3} & \textit{\small #4} \\
    \end{tabular*}\vspace{-7pt}
}

\newcommand{\resumeSubSubheading}[2]{
    \item
    \begin{tabular*}{0.97\textwidth}{l@{\extracolsep{\fill}}r}
      \textit{\small#1} & \textit{\small #2} \\
    \end{tabular*}\vspace{-7pt}
}

\newcommand{\resumeProjectHeading}[2]{
    \item
    \begin{tabular*}{0.97\textwidth}{l@{\extracolsep{\fill}}r}
      \small#1 & #2 \\
    \end{tabular*}\vspace{-7pt}
}

\newcommand{\resumeSubItem}[1]{\resumeItem{#1}\vspace{-4pt}}

\renewcommand\labelitemii{$\vcenter{\hbox{\tiny$\bullet$}}$}

\newcommand{\resumeSubHeadingListStart}{\begin{itemize}[leftmargin=0.15in, label={}]}
\newcommand{\resumeSubHeadingListEnd}{\end{itemize}}
\newcommand{\resumeItemListStart}{\begin{itemize}}
\newcommand{\resumeItemListEnd}{\end{itemize}\vspace{-5pt}}

%-------------------------------------------
%%%%%%  RESUME STARTS HERE  %%%%%%%%%%%%%%%%%%%%%%%%%%%%


\begin{document}

%----------HEADING----------
% \begin{tabular*}{\textwidth}{l@{\extracolsep{\fill}}r}
%   \textbf{\href{http://sourabhbajaj.com/}{\Large Sourabh Bajaj}} & Email : \href{mailto:sourabh@sourabhbajaj.com}{sourabh@sourabhbajaj.com}\\
%   \href{http://sourabhbajaj.com/}{http://www.sourabhbajaj.com} & Mobile : +1-123-456-7890 \\
% \end{tabular*}

\begin{center}
    \textbf{\Huge \scshape Mohamed amine Chouri} \\ \vspace{1pt}
    \small Développeur Frontend Angular / TypeScript |  \small 6 ans d'expérience \\ \vspace{1pt}
  \small
Sousse, Tunisie → Disponible pour entretiens à Paris dès Janvier 2027 \\
 \small
Autorisation de travail : sponsoring requis (visa salarié / Passeport Talent)) \\
\href{mailto:aminechouri.info@gmail.com}{\underline{aminechouri.info@gmail.com}} $|$
\href{tel:+21626715977}{\underline{+216 26 715 977}} $|$
\href{https://www.linkedin.com/in/med-amine-chouri/}{\underline{linkedin.com/in/med-amine-chouri}} $|$
\href{https://amine-chouri.vercel.app/}{\underline{amine-chouri.vercel.app}}
\end{center}

%-----------Summary-----------
\section{Profil}
 \resumeItemListStart
        \resumeItem{Développeur Frontend Angular / TypeScript avec 6+ ans d'expertise en Angular et TypeScript, spécialisé dans la conception d'applications web scalables, performantes et orientées composants. Compétences solides en architecture UI/UX responsive, intégration d'API REST, gestion d'état (RxJS, NgRx), avec une montée en compétences active sur Next.js.}
      \resumeItemListEnd

%-----------PROGRAMMING SKILLS-----------
\section{Compétences techniques}
 \begin{itemize}[leftmargin=0.15in, label={}]
    \small{\item{
     \textbf{Frontend :}{ Angular, TypeScript, RxJS, Redux, React, HTML/CSS, Bootstrap, Tailwind} \\
     \textbf{Backend :}{ Node.js, Express.js, PHP, Symfony} \\
      \textbf{SGBD :}{ MySQL, Firebase, MongoDB} \\
       \textbf{CMS :}{ WordPress, Prestashop, Shopify, Drupal} \\
     \textbf{Outils et Méthodologies :}{ Git, Git Flow, JIRA, Code Review, Agile/Scrum} \\
    }}
 \end{itemize}


%-----------EXPERIENCE-----------
\section{Expérience professionnelle}
  \resumeSubHeadingListStart


\resumeSubheading
      {Développeur Web}{Avril 2025 -- Présent}
      {Bee Studio Communication}{Télétravail}
    \resumeItemListStart
    \resumeItem{Recueilli les besoins clients lors de réunions de cadrage et conçu des sites web sur mesure, avec ou sans maquette Figma, en structurant des sections personnalisées en JavaScript.}
    \resumeItem{Développé et personnalisé des plateformes e-commerce WordPress en exploitant les hooks PHP, ainsi que la création et modification de plugins selon les besoins spécifiques de chaque projet.}
    \resumeItem{Intégré des passerelles de paiement sécurisées (Stripe, PayPal, WooCommerce) et des services tiers pour des clients internationaux.}
    \resumeItem{Géré l'hébergement des sites sur OVH, Hostinger et GoDaddy, garantissant disponibilité et performance.}
    \resumeItem{Optimisé le SEO, la responsivité et la sécurité des sites livrés selon les standards les plus élevés.}
\resumeItemListEnd
      
\resumeSubheading
      {Développeur Web (mission freelance en parallèle)}{Septembre 2025 -- Mai 2026}
      {EDirect(UAE)}{Télétravail}
    \resumeItemListStart
    \resumeItem{Développé des sites web sur mesure pixel-perfect à partir de maquettes Figma/Adobe XD pour Edirect, du design jusqu'à la mise en ligne.}
    \resumeItem{Intégré les designs avec Elementor Pro et le thème Astra Pro, en structurant les sections et en implémentant des animations JavaScript personnalisées avec GSAP et des effets de scroll.}
    \resumeItem{Optimisé le référencement (SEO) des pages (structure des titres, contenu, balises) et assuré une responsivité parfaite sur tous les écrans, au pixel près.}
\resumeItemListEnd

\resumeSubheading
      {Développeur Frontend Angular}{Avril 2022 -- Mars 2025}
      {ITGate Group}{Hammam Sousse, Tunisie}
      \resumeItemListStart
        \resumeItem{Conçu et développé des interfaces frontend avec Angular pour plusieurs plateformes e-commerce, en architecture basée sur les composants, intégrées à des backends Node.js (stack secondaire: WordPress/PHP).}
        \resumeItem{Personnalisé l'UI/UX et les flux utilisateurs pour répondre aux exigences spécifiques des clients, avec intégration de passerelles de paiement et systèmes de suivi de commandes côté frontend.}
        \resumeItem{Implémenté des stratégies SEO techniques et des outils d'analytics (Google Tag Manager, Google Analytics) pour améliorer la visibilité organique et générer des insights basés sur les données.}
      \resumeItemListEnd

\resumeSubheading
      {Développeur Frontend (Angular) \& Backend (Symfony)}{Septembre 2021 -- Avril 2022}
      {Nexym}{Monastir, Tunisie}
      \resumeItemListStart
        \resumeItem{Développé les interfaces frontend avec Angular pour des solutions web full-stack.}
        \resumeItem{Implémenté des intégrations de paiement sécurisées et automatisé des chatbots pour l'expérience client.}
        \resumeItem{Géré des tableaux de bord e-commerce, incluant optimisation SEO et configuration d'hébergement.}
      \resumeItemListEnd

\resumeSubheading
      {Intégrateur Web Frontend}{Avril 2020 -- Septembre 2021}
      {Carthage Solutions}{Monastir, Tunisie}
      \resumeItemListStart
        \resumeItem{Converti des designs Adobe XD et Figma en implémentations web responsive pixel-perfect, en HTML, CSS et JavaScript — fondations directement réutilisées plus tard en développement Angular.}
        \resumeItem{Développé des sites avec Elementor Pro, Divi et Beaver Builder, garantissant fidélité visuelle et performance sur tous les appareils.}
      \resumeItemListEnd

  \resumeSubHeadingListEnd


%-----------PROJECTS-----------




%


%-----------EDUCATION-----------
\section{Formation}
  \resumeSubHeadingListStart
    \resumeSubheading
      {Diplôme d’ingénieur génie logiciel en alternance }{Sep 2020 -- Sep 2023}
      {École Pluridisciplinaire Internationale}{Sousse, Tunisie}
    \resumeSubheading
      {Licence en multimédia et web }{Sep 2016 -- Juin 2019}
      {Institut Supérieur d'Informatique et des Technologies de Communication}{Sousse, Tunisie}
  \resumeSubHeadingListEnd



\begin{center}
  \section*{Langues}
  \textbf{Anglais:} B2 $|$ \textbf{Français:} B2 $|$ \textbf{Arabe:} Maternelle $|$ \textbf{Allemand:} B1 
\end{center}


%-----------Certificats-----------


%-------------------------------------------
\end{document}

this is my latex template of my resume in frensh take the content u need from it and make me a design for my portfolio it must be dev and it orientated web with animation and effects and interactif and creative with section for my live proejct as slider with place for screenshots

This project was built with [Lovable](https://lovable.dev).

**Live app**: https://amine-chouri-career-story.lovable.app

## Build with Lovable

Continue developing this project in the [Lovable editor](https://lovable.dev/projects/2fb93dc4-77c4-592c-8c18-20f513c14a9c).

- **Ship faster**: describe what you want to build and Lovable handles the code.
- **Stay in sync**: every change made in Lovable is committed straight to this repository.
- **Full ownership**: this code is yours. Push to `main` on GitHub and your changes sync back into Lovable, ready for your next prompt.

## Development

Prefer working locally? You need Node.js and npm — [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating).

```sh
git clone <this-repository-url>
cd <repository-name>
npm i
npm run dev
```
