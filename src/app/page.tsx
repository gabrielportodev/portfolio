import { HomeContent } from '@/components/HomeContent'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Gabriel Porto | Desenvolvedor Full Stack',
  description:
    'Conheça os principais projetos, especialidades e serviços de Gabriel Porto em desenvolvimento web, mobile e back-end.',
  openGraph: {
    title: 'Portfólio de Gabriel Porto',
    description:
      'Especialista em Java/Spring Boot, Next.js, React Native e arquiteturas escaláveis. Veja projetos e serviços.',
    url: 'https://gabrielporto.me/',
    type: 'website'
  }
}

export default function HomePage() {
  return <HomeContent />
}
