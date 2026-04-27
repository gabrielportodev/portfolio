'use client'

import { Briefcase, Calendar, MapPin, ChevronRight } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { AnimatedSection } from '@/components/AnimatedSection'
import { useLanguage } from '@/contexts/LanguageContext'
import Link from 'next/link'

export function ExperiencesContent() {
  const { t } = useLanguage()

  return (
    <main className='flex flex-col items-center px-6 py-16 md:py-24 max-w-6xl mx-auto'>
      <AnimatedSection className='w-full text-center mb-16'>
        <div className='inline-flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full mb-6'>
          <Briefcase className='h-4 w-4 text-primary' />
          <span className='text-sm font-medium text-primary'>{t.experiences.badge}</span>
        </div>
        <h1 className='text-4xl sm:text-5xl font-bold leading-tight mb-6'>
          {t.experiences.title} <span className='text-primary'>{t.experiences.titleHighlight}</span>
        </h1>
        <p className='text-lg text-muted-foreground max-w-2xl mx-auto'>{t.experiences.subtitle}</p>
      </AnimatedSection>

      <section className='w-full mb-16'>
        <div className='relative'>
          <div className='absolute left-6 top-0 bottom-0 w-0.5 bg-primary/20 hidden md:block' />

          <div className='space-y-8'>
            {t.experiences.items.map((exp, index) => (
              <AnimatedSection key={index} delay={index * 0.1}>
                <div className='relative md:pl-20'>
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
                                {t.experiences.current}
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
                          {t.experiences.contributions}
                        </h3>
                        <ul className='space-y-2'>
                          {exp.achievements.map((achievement, i) => (
                            <li key={i} className='flex items-start gap-2 text-sm text-muted-foreground'>
                              <ChevronRight className='h-4 w-4 text-primary mt-0.5 shrink-0' />
                              {achievement}
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div>
                        <h3 className='text-sm font-semibold uppercase tracking-wider text-muted-foreground mb-3'>
                          {t.experiences.technologies}
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
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      <AnimatedSection className='w-full text-center' delay={0.2}>
        <h2 className='text-2xl font-bold mb-4'>{t.experiences.ctaTitle}</h2>
        <p className='text-muted-foreground mb-8 max-w-xl mx-auto'>{t.experiences.ctaText}</p>
        <div className='flex flex-wrap justify-center gap-4'>
          <Link href='/contact'>
            <Button size='lg' className='px-8'>
              {t.experiences.ctaContact}
            </Button>
          </Link>
          <Link href='/projects'>
            <Button variant='outline' size='lg'>
              {t.experiences.ctaProjects}
            </Button>
          </Link>
        </div>
      </AnimatedSection>
    </main>
  )
}
