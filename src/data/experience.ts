export interface Experience {
  id: string;
  company: string;
  period: string;
  role: string;
  description: string;
  logo?: ImageMetadata | string;
}

export const experience: Experience[] = [
  {
    id: "theempiretech",
    company: "The Empire Tech",
    role: "Frontend Engineer",
    period: "Mar 2026 - Jun 2026",
    description:
      "Desarrollo de front-end de backoffice, seccion de usuarios y sección de trabajadores para plataforma de reserva de canchas, con dashboard",
  },
  {
    id: "devcol",
    company: "DevCol",
    role: "Frontend Engineer",
    period: "Mar 2026 - Jun 2026",
    description:
      "Desarrollo de front-end de backoffice, seccion de usuarios y sección de trabajadores para plataforma de reserva de canchas, con dashboard",
  },
  {
    id: "wigilabs",
    company: "Wigilabs",
    role: "Frontend Engineer",
    period: "Mar 2026 - Jun 2026",
    description:
      "Desarrollo de front-end de backoffice, seccion de usuarios y sección de trabajadores para plataforma de reserva de canchas, con dashboard",
  },
];
