export interface Skill {
  name: string;
  level: number; // 1-5
  icon?: string;
}

export interface SkillCategory {
  category: string;
  color: string;
  skills: Skill[];
}

export const skillCategories: SkillCategory[] = [
  {
    category: "Frontend",
    color: "indigo",
    skills: [
      { name: "React", level: 5 },
      { name: "Next.js", level: 5 },
      { name: "TypeScript", level: 5 },
      { name: "Tailwind CSS", level: 5 },
      { name: "Framer Motion", level: 4 },
      { name: "Vue.js", level: 3 },
      { name: "GraphQL", level: 4 },
      { name: "Redux / Zustand", level: 4 },
    ],
  },
  {
    category: "Backend",
    color: "violet",
    skills: [
      { name: "Node.js", level: 5 },
      { name: "Express.js", level: 5 },
      { name: "PostgreSQL", level: 4 },
      { name: "MongoDB", level: 4 },
      { name: "Redis", level: 4 },
      { name: "Prisma ORM", level: 5 },
      { name: "REST APIs", level: 5 },
      { name: "WebSockets", level: 4 },
    ],
  },
  {
    category: "DevOps & Tools",
    color: "purple",
    skills: [
      { name: "Docker", level: 4 },
      { name: "Git & GitHub", level: 5 },
      { name: "Vercel / Netlify", level: 5 },
      { name: "AWS (EC2, S3)", level: 3 },
      { name: "CI/CD Pipelines", level: 4 },
      { name: "Linux / Bash", level: 4 },
      { name: "Figma", level: 3 },
      { name: "Jest / Vitest", level: 4 },
    ],
  },
];
