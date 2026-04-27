import { ExperiencesContent } from '@/components/ExperiencesContent'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Experiências | Gabriel Porto',
  description:
    'Experiências profissionais de Gabriel Porto como Desenvolvedor Full Stack no IFNMG, construindo sistemas para mais de 15 mil usuários.',
  openGraph: {
    title: 'Experiências de Gabriel Porto',
    description: 'Desenvolvedor Mobile e Front-End no IFNMG, com React Native, Next.js e TypeScript.',
    url: 'https://gabrielporto.me/experiences',
    type: 'profile'
  }
}

export default function ExperiencesPage() {
  return <ExperiencesContent />
}
