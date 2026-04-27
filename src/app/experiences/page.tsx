import { Briefcase, Calendar, MapPin, ChevronRight } from 'lucide-react'
import { Button } from '@/components/ui/button'
import type { Metadata } from 'next'
import Link from 'next/link'

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

type Achievement = {
  label: string
}

type ExperienceItem = {
  role: string
  company: string
  period: string
  location: string
  current: boolean
  description: string
  achievements: Achievement[]
  technologies: string[]
  color: string
}

const experiences: ExperienceItem[] = [
  {
    role: 'Desenvolvedor de Software Mobile',
    company: 'IFNMG',
    period: 'Agosto 2025 – Presente',
    location: 'Almenara, MG',
    current: true,
    description:
      'Integro a equipe do Cajuí Mobile, aplicativo oficial do IFNMG para modernização do acesso acadêmico. O sistema centraliza carteira estudantil, requerimentos, histórico, horários e integração com sistemas internos.',
    achievements: [
      { label: 'Arquitetura de estado global com Context API para autenticação e sessões' },
      { label: 'Fluxos de formulário com React Hook Form + Zod para validação em runtime' },
      { label: 'Navegação com Expo Router e Auth Guards para proteção de rotas sensíveis' },
      { label: 'UI acessível com React Native Paper, responsiva em iOS e Android' },
      { label: 'Consumo de APIs complexas com sincronização de dados em tempo real' },
      { label: 'Atuação sob metodologia Scrum com ciclos de entrega de alto valor' }
    ],
    technologies: [
      'React Native',
      'Expo Router',
      'TypeScript',
      'Context API',
      'React Hook Form',
      'Zod',
      'React Native Paper',
      'Git/GitHub'
    ],
    color: 'from-violet-500/10 to-purple-500/5'
  },
  {
    role: 'Desenvolvedor Front-End',
    company: 'IFNMG',
    period: 'Agosto 2024 – Julho 2025',
    location: 'Almenara, MG',
    current: false,
    description:
      'Atuei no desenvolvimento da plataforma Pharus – Gestão de Eventos, sistema oficial do IFNMG utilizado em todos os campi para centralizar a organização de eventos institucionais.',
    achievements: [
      { label: 'Interfaces de alta performance com Next.js utilizando SSR e SSG' },
      { label: 'TypeScript em toda a aplicação garantindo type-safety e redução de erros em runtime' },
      { label: 'Design system com Material UI criando componentes altamente reutilizáveis' },
      { label: 'Formulários complexos e dinâmicos com validação rigorosa integrados às APIs RESTful' },
      { label: 'Evolução da plataforma garantindo acessibilidade para mais de 15 mil alunos e servidores' },
      { label: 'Controle de versão e Code Reviews com Git/GitHub sob metodologia Scrum' }
    ],
    technologies: [
      'Next.js',
      'React.js',
      'TypeScript',
      'Material UI',
      'SSR/SSG',
      'APIs RESTful',
      'Git/GitHub',
      'Scrum'
    ],
    color: 'from-blue-500/10 to-cyan-500/5'
  }
]

export default function ExperiencesPage() {
  return (
    <main className='flex flex-col items-center px-6 py-16 md:py-24 max-w-6xl mx-auto'>
      <section className='w-full text-center mb-16'>
        <div className='inline-flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full mb-6'>
          <Briefcase className='h-4 w-4 text-primary' />
          <span className='text-sm font-medium text-primary'>Trajetória Profissional</span>
        </div>
        <h1 className='text-4xl sm:text-5xl font-bold leading-tight mb-6'>
          Minhas <span className='text-primary'>Experiências</span>
        </h1>
        <p className='text-lg text-muted-foreground max-w-2xl mx-auto'>
          Mais de um ano e meio construindo sistemas reais para o ecossistema digital do IFNMG, atendendo milhares de
          usuários com qualidade e performance.
        </p>
      </section>

      <section className='w-full mb-16'>
        <div className='relative'>
          <div className='absolute left-6 top-0 bottom-0 w-0.5 bg-primary/20 hidden md:block' />

          <div className='space-y-8'>
            {experiences.map((exp, index) => (
              <div key={index} className='relative md:pl-20'>
                <div className='hidden md:flex absolute left-0 top-6 w-12 h-12 rounded-full bg-background border-2 border-primary items-center justify-center'>
                  <Briefcase className='h-5 w-5 text-primary' />
                </div>

                <div className={`rounded-2xl border bg-linear-to-br ${exp.color} overflow-hidden`}>
                  <div className='p-6 md:p-8'>
                    <div className='flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4 mb-6'>
                      <div>
                        <div className='flex flex-wrap items-center gap-2 mb-2'>
                          <h2 className='text-xl md:text-2xl font-bold'>{exp.role}</h2>
                          {exp.current && (
                            <span className='inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-primary/15 text-primary text-xs font-medium'>
                              <span className='w-1.5 h-1.5 rounded-full bg-primary animate-pulse' />
                              Atual
                            </span>
                          )}
                        </div>
                        <p className='text-lg font-semibold text-primary'>{exp.company}</p>
                      </div>

                      <div className='flex flex-col gap-1.5 text-sm text-muted-foreground sm:text-right shrink-0'>
                        <span className='flex items-center gap-1.5 sm:justify-end'>
                          <Calendar className='h-3.5 w-3.5' />
                          {exp.period}
                        </span>
                        <span className='flex items-center gap-1.5 sm:justify-end'>
                          <MapPin className='h-3.5 w-3.5' />
                          {exp.location}
                        </span>
                      </div>
                    </div>

                    <p className='text-muted-foreground mb-6 leading-relaxed'>{exp.description}</p>

                    <div className='mb-6'>
                      <h3 className='text-sm font-semibold uppercase tracking-wider text-muted-foreground mb-3'>
                        Contribuições
                      </h3>
                      <ul className='space-y-2'>
                        {exp.achievements.map((achievement, i) => (
                          <li key={i} className='flex items-start gap-2 text-sm text-muted-foreground'>
                            <ChevronRight className='h-4 w-4 text-primary mt-0.5 shrink-0' />
                            {achievement.label}
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div>
                      <h3 className='text-sm font-semibold uppercase tracking-wider text-muted-foreground mb-3'>
                        Tecnologias
                      </h3>
                      <div className='flex flex-wrap gap-2'>
                        {exp.technologies.map(tech => (
                          <span
                            key={tech}
                            className='text-xs px-3 py-1 rounded-full bg-primary/10 text-primary font-medium border border-primary/20'
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className='w-full text-center'>
        <h2 className='text-2xl font-bold mb-4'>Pronto para o próximo desafio</h2>
        <p className='text-muted-foreground mb-8 max-w-xl mx-auto'>
          Aberto a oportunidades onde Java/Spring Boot, Next.js ou React Native possam gerar impacto real.
        </p>
        <div className='flex flex-wrap justify-center gap-4'>
          <Link href='/contact'>
            <Button size='lg' className='px-8'>
              Entrar em Contato
            </Button>
          </Link>
          <Link href='/projects'>
            <Button variant='outline' size='lg'>
              Ver Projetos
            </Button>
          </Link>
        </div>
      </section>
    </main>
  )
}
