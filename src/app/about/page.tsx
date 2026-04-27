import { AboutContent } from '@/components/AboutContent'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Sobre',
  description:
    'Trajetória profissional, formação e experiência de Gabriel Porto em desenvolvimento web, mobile e back-end.',
  openGraph: {
    title: 'Sobre Gabriel Porto',
    description:
      'Conheça a formação e a experiência de Gabriel Porto construindo produtos digitais em Java/Spring Boot e Next.js.',
    url: 'https://gabrielporto.me/about',
    type: 'profile',
    images: ['/gabrielporto.jpeg']
  },
  alternates: {
    canonical: 'https://gabrielporto.me/about'
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Sobre Gabriel Porto',
    description: 'Formação, experiência e projetos em Java/Spring Boot, Next.js e React Native.',
    images: ['/gabrielporto.jpeg']
  }
}

export default function AboutPage() {
  return <AboutContent />
}
