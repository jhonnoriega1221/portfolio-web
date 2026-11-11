import type { SkillId } from "./skills";
import rutinea1 from "../assets/projects/rutinea/rutinea-1.png";
import rutinea2 from "../assets/projects/rutinea/rutinea-1.png";
import rutinea3 from "../assets/projects/rutinea/rutinea-1.png";
import yamao1 from "../assets/projects/rutinea/rutinea-1.png";
import yamao2 from "../assets/projects/rutinea/rutinea-1.png";
import yamao3 from "../assets/projects/rutinea/rutinea-1.png";

export interface Project {
  id: string;
  name: string;
  description: string;
  stack: SkillId[];
  imageUrls: ImageMetadata[] | string[];
  demo?: string;
  repo?: string;
}

export const projects: Project[] = [
  {
    id: "yamao",
    imageUrls: [yamao1, yamao2, yamao3],
    name: "Yamao",
    description:
      "Aplicacion de reserva de canchas con panel de administrador y operador",
    stack: ["nextjs", "typescript", "tailwind", "shadcn"],
    demo: "https:demo.com",
  },
  {
    id: "rutinea",
    name: "Rutinea",
    imageUrls: [rutinea1, rutinea2, rutinea3],
    description: "Aplicacion llevar el seguimiento y registro de habitos",
    stack: ["angular", "typescript", "tailwind"],
    demo: "https:demo.com",
    repo: "https:repo.com",
  },
];
