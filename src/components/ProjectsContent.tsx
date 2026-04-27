'use client'

import { Smartphone, Globe, Server } from 'lucide-react'
import ResumeButton from '@/components/ResumeButton'
import ProjectCard from '@/components/ProjectCard'
import ServiceCard from '@/components/ServiceCard'
import { Button } from '@/components/ui/button'
import { AnimatedSection } from '@/components/AnimatedSection'
import { useLanguage } from '@/contexts/LanguageContext'
import Link from 'next/link'

const serviceIcons = [
  <Globe key='globe' className='h-8 w-8' />,
  <Smartphone key='smartphone' className='h-8 w-8' />,
  <Server key='server' className='h-8 w-8' />
]

const projectTechs = [
  ['React Native', 'Expo Router', 'TypeScript', 'Context API', 'React Hooks'],
  [
    'Next.js 15',
    'TypeScript',
    'Tailwind CSS',
    'Java 21',
    'Spring Boot 3',
    'APIs RESTful',
    'JPA',
    'Context API',
    'React Hooks',
    'PostgreSQL'
  ],
  ['React.js', 'Vite', 'Tailwind CSS', 'SEO'],
  ['Java', 'SQLite', 'POO']
]

const projectUrls = [undefined, 'https://projetos.ifalmenara.com.br', 'https://rbsoft.inf.br', undefined]

const projectGithubUrls = [
  undefined,
  undefined,
  undefined,
  'https://github.com/gabrielportodev/Sistema-de-Gerenciamento-de-Eventos-Academicos'
]

const projectImages = [
  '/imgs/Cajui.png',
  '/imgs/VitrineProjetos.png',
  '/imgs/RbSoft.png',
  'https://images.unsplash.com/photo-1545239351-1141bd82e8a6?auto=format&fit=crop&w=1600&q=80'
]

export function ProjectsContent() {
  const { t, language } = useLanguage()
  const viewLabel = language === 'en' ? 'View Project' : 'Ver Projeto'
  const codeLabel = language === 'en' ? 'Source Code' : 'Código Fonte'

  return (
    <main className='flex flex-col items-center px-6 py-16 md:py-24 max-w-6xl mx-auto'>
      <AnimatedSection className='w-full text-center mb-20'>
        <h1 className='text-4xl sm:text-5xl font-bold leading-tight mb-6'>
          {t.projects.title} <span className='text-primary'>{t.projects.titleHighlight1}</span> {t.projects.and}{' '}
          <span className='text-primary'>{t.projects.titleHighlight2}</span>
        </h1>
        <p className='text-lg text-muted-foreground max-w-3xl mx-auto'>{t.projects.subtitle}</p>
        <div className='mt-8 flex justify-center gap-3 flex-wrap'>
          <Link href='/contact'>
            <Button size='lg'>{t.projects.ctaConversation}</Button>
          </Link>
          <ResumeButton variant='outline' size='lg' />
        </div>
      </AnimatedSection>

      <AnimatedSection className='w-full mb-24' delay={0.1}>
        <h2 className='text-3xl font-bold text-center mb-12'>{t.projects.featuredTitle}</h2>
        <ProjectCard
          title={t.projects.featured.title}
          description={t.projects.featured.description}
          technologies={['Next.js', 'TypeScript', 'SSR/SSG', 'React Hooks', 'APIs RESTful', 'Axios', 'MySQL']}
          imageUrl='/imgs/Eventos.png'
          projectUrl='https://eventos.ifalmenara.com.br/'
          featured
          viewLabel={viewLabel}
          codeLabel={codeLabel}
        />
      </AnimatedSection>

      <AnimatedSection className='w-full mb-24' delay={0.1}>
        <h2 className='text-3xl font-bold text-center mb-12'>{t.projects.highlightsTitle}</h2>
        <div className='grid md:grid-cols-2 gap-8'>
          {t.projects.items.map((item, i) => (
            <ProjectCard
              key={i}
              title={item.title}
              description={item.description}
              technologies={projectTechs[i]}
              imageUrl={projectImages[i]}
              projectUrl={projectUrls[i]}
              githubUrl={projectGithubUrls[i]}
              viewLabel={viewLabel}
              codeLabel={codeLabel}
            />
          ))}
        </div>
      </AnimatedSection>

      <AnimatedSection className='w-full mb-24' delay={0.1}>
        <h2 className='text-3xl font-bold text-center mb-12'>{t.projects.servicesTitle}</h2>
        <div className='grid md:grid-cols-3 gap-8'>
          {t.projects.services.map((service, i) => (
            <ServiceCard key={i} icon={serviceIcons[i]} title={service.title} description={service.description} />
          ))}
        </div>
      </AnimatedSection>

      <AnimatedSection className='w-full text-center' delay={0.1}>
        <h2 className='text-2xl font-bold mb-4'>{t.projects.ctaTitle}</h2>
        <p className='text-muted-foreground mb-6 max-w-xl mx-auto'>{t.projects.ctaText}</p>
        <div className='flex justify-center gap-4 flex-wrap'>
          <Link href='/contact'>
            <Button size='lg' className='px-8'>
              {t.projects.ctaContact}
            </Button>
          </Link>
          <ResumeButton size='lg' />
        </div>
      </AnimatedSection>
    </main>
  )
}
