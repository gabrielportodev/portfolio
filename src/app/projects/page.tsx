import { ProjectsContent } from '@/components/ProjectsContent'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Projetos e Serviços',
  description:
    'Portfólio de projetos de Gabriel Porto, incluindo Pharus, Cajuí Mobile e serviços em Java, Spring Boot e Next.js.',
  openGraph: {
    title: 'Projetos de Gabriel Porto',
    description:
      'Confira cases como Pharus, Cajuí Mobile e soluções sob medida com Next.js, React Native e Spring Boot.',
    url: 'https://gabrielporto.me/projects',
    type: 'website',
    images: ['/gabrielporto.jpeg']
  },
  alternates: {
    canonical: 'https://gabrielporto.me/projects'
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Projetos e Serviços | Gabriel Porto',
    description: 'Pharus, Cajuí Mobile e soluções sob medida com Java/Spring Boot, Next.js e React Native.',
    images: ['/gabrielporto.jpeg']
  }
}

export default function ProjectsPage() {
  return <ProjectsContent />
}
