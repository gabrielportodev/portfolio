'use client'

import { GraduationCap, Award } from 'lucide-react'
import ResumeButton from '@/components/ResumeButton'
import TimelineItem from '@/components/TimelineItem'
import { Button } from '@/components/ui/button'
import { AnimatedSection } from '@/components/AnimatedSection'
import { useLanguage } from '@/contexts/LanguageContext'
import Image from 'next/image'
import Link from 'next/link'

export function AboutContent() {
  const { t } = useLanguage()

  return (
    <main className='flex flex-col items-center px-6 py-16 md:py-24 max-w-6xl mx-auto'>
      <AnimatedSection className='w-full text-center mb-20'>
        <h1 className='text-4xl sm:text-5xl font-bold leading-tight mb-6'>
          {t.about.title} <span className='text-primary'>{t.about.titleHighlight}</span>
        </h1>
        <p className='text-lg text-muted-foreground max-w-3xl mx-auto'>{t.about.subtitle}</p>
      </AnimatedSection>

      <AnimatedSection className='w-full mb-24 flex flex-col md:flex-row gap-12 items-center' delay={0.1}>
        <div className='relative w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-primary/20'>
          <Image
            src='/imgs/euRosto.jpeg'
            alt='Gabriel Porto - Desenvolvedor Full Stack'
            fill
            className='object-cover'
            priority
          />
        </div>

        <div className='flex-1'>
          <h2 className='text-2xl font-bold mb-4'>{t.about.whoTitle}</h2>
          <div className='space-y-4 text-muted-foreground'>
            <p>
              {t.about.bio1} <strong>{t.about.bio1Name}</strong>
              {t.about.bio1Rest}
            </p>
            <p>{t.about.bio2}</p>
            <p>{t.about.bio3}</p>
            <p>{t.about.bio4}</p>
          </div>
          <div className='mt-6'>
            <ResumeButton variant='outline' size='default' />
          </div>
        </div>
      </AnimatedSection>

      <AnimatedSection className='w-full mb-24' delay={0.1}>
        <h2 className='text-3xl font-bold text-center mb-12'>{t.about.educationTitle}</h2>
        <div className='relative'>
          <div className='absolute left-4 md:left-1/2 h-full w-0.5 bg-primary/20 -translate-x-1/2' />
          <div className='space-y-12'>
            {t.about.education.map((item, i) => (
              <TimelineItem
                key={i}
                date={item.date}
                title={item.title}
                subtitle={item.subtitle}
                icon={<GraduationCap className='h-5 w-5' />}
                description={item.description}
                side={item.side}
              />
            ))}
          </div>
        </div>
      </AnimatedSection>

      <AnimatedSection className='w-full mb-24' delay={0.1}>
        <h2 className='text-3xl font-bold text-center mb-12'>{t.about.certsTitle}</h2>
        <div className='grid sm:grid-cols-2 gap-4 max-w-2xl mx-auto'>
          {t.about.certs.map((cert, i) => (
            <div key={i} className='flex items-start gap-4 rounded-xl border bg-card p-5'>
              <div className='flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary/10'>
                <Award className='h-5 w-5 text-primary' />
              </div>
              <div>
                <p className='font-semibold text-sm leading-snug'>{cert.name}</p>
                <p className='text-xs text-muted-foreground mt-1'>{cert.description}</p>
              </div>
            </div>
          ))}
        </div>
      </AnimatedSection>

      <AnimatedSection className='w-full text-center' delay={0.1}>
        <h2 className='text-2xl font-bold mb-4'>{t.about.ctaTitle}</h2>
        <p className='text-muted-foreground mb-6 max-w-xl mx-auto'>{t.about.ctaText}</p>
        <div className='flex flex-wrap justify-center gap-4'>
          <Link href='/contact'>
            <Button size='lg'>{t.about.ctaContact}</Button>
          </Link>
          <Link href='/projects'>
            <Button variant='outline' size='lg'>
              {t.about.ctaProjects}
            </Button>
          </Link>
          <ResumeButton />
        </div>
      </AnimatedSection>
    </main>
  )
}
