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
  heroImage: "./gradient.png",
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
    icon: "💻",
    gradient: "from-indigo-500 to-blue-500",
    lightBg: "bg-indigo-50",
    lightText: "text-indigo-600",
    skills: ["NextJS", "React Native", "React", "TypeScript", "Tailwind CSS"],
  },
  {
    title: "Design",
    icon: "🎨",
    gradient: "from-purple-500 to-pink-500",
    lightBg: "bg-purple-50",
    lightText: "text-purple-600",
    skills: ["Figma", "UI/UX", "Responsive Design"],
  },
  {
    title: "Ferramentas",
    icon: "🔧",
    gradient: "from-pink-500 to-rose-500",
    lightBg: "bg-pink-50",
    lightText: "text-pink-600",
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
    gradient: "from-indigo-500 to-blue-500",
    year: "2022 - Atualmente",
  },
  {
    title: "Experiência Profissional",
    subtitle: "Desenvolvedor Front-end - Baoo Market",
    description:
      "Desenvolvo o site e app, com a proposta de delivery focado em mercado.",
    icon: faBriefcase,
    gradient: "from-purple-500 to-pink-500",
    year: "2023 - Atualmente",
  },
];
