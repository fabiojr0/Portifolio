import { faBriefcase, faGraduationCap } from "@fortawesome/free-solid-svg-icons";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";

export const personalInfo = {
  name: "Fábio Júnior",
  role: "Desenvolvedor Front-end",
  logo: "FJr",
  description:
    "Especializado em criar experiências web modernas e responsivas. Transformo ideias em interfaces elegantes e funcionais.",
  shortDescription:
    "Desenvolvedor Front-end apaixonado por criar experiências digitais incríveis.",
  resumeUrl: "./curriculo_fabio_junior.pdf",
  heroImage: "./programando.png",
  email: "dev.fabiojunior@gmail.com",
  phone: "(21) 98249-1902",
  phoneHref: "tel:+5521982491902",
};

export const navLinks = [
  { to: "Home", label: "Início" },
  { to: "Habilities", label: "Habilidades" },
  { to: "Projects", label: "Projetos" },
  { to: "About", label: "Sobre" },
];

export const socialLinks = [
  {
    icon: faGithub,
    url: "https://github.com/fabiojr0",
    label: "GitHub",
  },
  {
    icon: faLinkedin,
    url: "https://www.linkedin.com/in/fabiojr0/",
    label: "LinkedIn",
  },
];

export const skillCategories = [
  {
    title: "Frontend",
    iconType: "code",
    gradient: "from-red-500 to-rose-500",
    lightBg: "bg-red-50 dark:bg-red-950/30",
    lightText: "text-red-700 dark:text-red-300",
    skills: ["NextJS", "React Native", "React", "TypeScript", "Tailwind CSS"],
  },
  {
    title: "Design",
    iconType: "palette",
    gradient: "from-rose-500 to-red-400",
    lightBg: "bg-rose-50 dark:bg-rose-950/30",
    lightText: "text-rose-700 dark:text-rose-300",
    skills: ["Figma", "UI/UX", "Responsive Design"],
  },
  {
    title: "Ferramentas",
    iconType: "wrench",
    gradient: "from-red-400 to-orange-500",
    lightBg: "bg-orange-50 dark:bg-orange-950/30",
    lightText: "text-orange-700 dark:text-orange-300",
    skills: ["Git", "SQL", "Redux", "Unity"],
  },
];

export const projects = [
  {
    name: "Baoo Market",
    desc: "App de Delivery focado em mercados",
    img: "./projects/Baoo.png",
    tags: ["React Native", "Next.js", "Tailwind", "TypeScript"],
    demoLink: "https://baoomarket.com.br/",
  },
  {
    name: "Finance Tracker",
    desc: "Gestor financeiro, com dashboard para controle dos gastos pessoais.",
    img: "./projects/FinanceTracker.png",
    tags: ["Next.js", "Tailwind", "TypeScript"],
    demoLink: "https://finance-tracker-six-psi.vercel.app/",
  },
  {
    name: "Monteiro Castilho ADV",
    desc: "Site institucional para um Escritório de Advocacia",
    img: "./projects/mcadv.png",
    tags: ["Wordpress"],
    demoLink: "https://monteirocastilhoadv.com.br/",
  },
];

export const timelineData = [
  {
    title: "Formação Profissional",
    subtitle: "Unilasalle RJ",
    description:
      "Cursando o 8º período de Sistemas de Informação",
    icon: faGraduationCap,
    gradient: "from-red-500 to-rose-500",
    year: "2022 - Atualmente",
  },
  {
    title: "Experiência Profissional",
    subtitle: "Desenvolvedor Front-end - Baoo Market",
    description:
      "Desenvolvo o site e app, com a proposta de delivery focado em mercado.",
    icon: faBriefcase,
    gradient: "from-rose-500 to-red-400",
    year: "2023 - Atualmente",
  },
];
