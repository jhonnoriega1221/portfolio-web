export const categories = [
  { id: "frontend", title: "Frontend" },
  { id: "state", title: "Estado" },
  { id: "backend", title: "Backend" },
  { id: "database", title: "Bases de datos" },
  { id: "devops", title: "Cloud y DevOps" },
  { id: "testing", title: "Testing" },
] as const;

export type SkillId = (typeof skills)[number]["id"];
export type CategoryId = (typeof categories)[number]["id"];

export interface Skill {
  id: string;
  name: string;
  icon: string;
  category: CategoryId;
}

export const skills: Skill[] = [
  { id: "html", name: "HTML5", icon: "tech/html-sticker", category: "frontend" },
  { id: "css", name: "CSS3", icon: "tech/css-sticker", category: "frontend" },
  { id: "javascript", name: "JavaScript", icon: "tech/js-sticker", category: "frontend" },
  { id: "typescript", name: "TypeScript", icon: "tech/ts-sticker", category: "frontend" },
  { id: "angular", name: "Angular", icon: "tech/angular-sticker", category: "frontend" },
  { id: "vue", name: "Vue.js", icon: "tech/vuejs-sticker", category: "frontend" },
  { id: "react", name: "React.js", icon: "tech/react-sticker", category: "frontend" },
  { id: "nextjs", name: "Next.js", icon: "tech/nextjs-sticker", category: "frontend" },
  { id: "ionic", name: "Ionic", icon: "tech/ionic-sticker", category: "frontend" },
  { id: "shadcn", name: "Shadcn", icon: "tech/shadcn-sticker", category: "frontend" },
  { id: "tailwind", name: "Tailwind CSS", icon: "tech/tailwindcss-sticker", category: "frontend" },
  { id: "rxjs", name: "RxJS", icon: "tech/rxjs-sticker", category: "state" },
  { id: "pinia", name: "Pinia", icon: "tech/pinia-sticker", category: "state" },
  { id: "zustand", name: "Zustand", icon: "tech/zustand-sticker", category: "state" },
  { id: "ngrx", name: "NgRx", icon: "tech/ngrx-sticker", category: "state" },
  { id: "nodejs", name: "Node.js", icon: "tech/nodejs-sticker", category: "backend" },
  { id: "nestjs", name: "NestJS", icon: "tech/nestjs-sticker", category: "backend" },
  { id: "express", name: "Express.js", icon: "tech/expressjs-sticker", category: "backend" },
  { id: "redis", name: "Redis", icon: "tech/redis-sticker", category: "backend" },
  { id: "postgresql", name: "PostgreSQL", icon: "tech/postgresql-sticker", category: "database" },
  { id: "mongodb", name: "MongoDB", icon: "tech/mongodb-sticker", category: "database" },
  { id: "mysql", name: "MySQL", icon: "tech/mysql-sticker", category: "database" },
  { id: "git", name: "Git", icon: "tech/git-sticker", category: "devops" },
  { id: "github", name: "GitHub", icon: "tech/github-sticker", category: "devops" },
  { id: "aws", name: "AWS", icon: "tech/aws-sticker", category: "devops" },
  { id: "azure", name: "Azure", icon: "tech/azure-sticker", category: "devops" },
  { id: "docker", name: "Docker", icon: "tech/docker-sticker", category: "devops" },
  { id: "jest", name: "Jest", icon: "tech/jest-sticker", category: "testing" },
  { id: "jasmine", name: "Jasmine", icon: "tech/jasmine-sticker", category: "testing" },
  { id: "karma", name: "Karma", icon: "tech/karma-sticker", category: "testing" }
];