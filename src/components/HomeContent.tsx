'use client'

import { Code, Smartphone, Globe } from 'lucide-react'
import SpecialtyCard from '@/components/SpecialtyCard'
import SkillCard from '@/components/SkillCard'
import { Button } from '@/components/ui/button'
import { AnimatedSection } from '@/components/AnimatedSection'
import { useLanguage } from '@/contexts/LanguageContext'
import Link from 'next/link'
import ResumeButton from '@/components/ResumeButton'

const specialtyIcons = [
  <Globe key='globe' className='h-8 w-8' />,
  <Smartphone key='smartphone' className='h-8 w-8' />,
  <Code key='code' className='h-8 w-8' />
]

export function HomeContent() {
  const { t } = useLanguage()

  return (
    <main className='flex flex-col items-center px-6 py-16 md:py-24 max-w-6xl mx-auto'>
      <AnimatedSection className='w-full text-center mb-24'>
        <h1 className='text-4xl sm:text-5xl font-bold leading-tight tracking-tight'>
          {t.home.greeting} <span className='text-primary'>Gabriel Porto</span>
        </h1>
        <div className='mt-6 flex justify-center'>
          <div className='inline-flex items-center gap-2 px-4 py-2 bg-accent/50 rounded-full'>
            <Code className='h-4 w-4 text-primary' />
            <span className='font-medium'>{t.home.badge}</span>
          </div>
        </div>
        <p className='mt-6 text-lg text-muted-foreground max-w-2xl mx-auto'>{t.home.heroP1}</p>
        <p className='mt-4 text-muted-foreground max-w-2xl mx-auto'>{t.home.heroP2}</p>
        <div className='mt-8 flex flex-wrap justify-center gap-4'>
          <Link href='/projects'>
            <Button size='lg'>{t.home.heroViewProjects}</Button>
          </Link>
          <Link href='/contact'>
            <Button variant='outline' size='lg'>
              {t.home.heroContact}
            </Button>
          </Link>
          <ResumeButton />
        </div>
      </AnimatedSection>

      <AnimatedSection className='w-full mb-24' delay={0.1}>
        <h2 className='text-3xl font-bold text-center mb-12'>{t.home.specialtiesTitle}</h2>
        <div className='grid md:grid-cols-3 gap-8'>
          {t.home.specialties.map((spec, i) => (
            <SpecialtyCard key={i} icon={specialtyIcons[i]} title={spec.title} description={spec.description} />
          ))}
        </div>
      </AnimatedSection>

      <AnimatedSection className='w-full mb-24' delay={0.1}>
        <h2 className='text-3xl font-bold text-center mb-12'>{t.home.skillsTitle}</h2>
        <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4'>
          <SkillCard label='Java 17/21' category={t.home.skillCategories.backend} />
          <SkillCard label='Spring Boot' category={t.home.skillCategories.backend} />
          <SkillCard label='Spring Security & JWT' category={t.home.skillCategories.backend} />
          <SkillCard label='Spring Data JPA' category={t.home.skillCategories.backend} />
          <SkillCard label='APIs RESTful & Bean Validation' category={t.home.skillCategories.backend} />
          <SkillCard label='Node.js' category={t.home.skillCategories.backend} />
          <SkillCard label='Go (Golang)' category={t.home.skillCategories.backend} />
          <SkillCard label='Next.js (App Router)' category={t.home.skillCategories.frontend} />
          <SkillCard label='React.js' category={t.home.skillCategories.frontend} />
          <SkillCard label='TypeScript' category={t.home.skillCategories.frontend} />
          <SkillCard label='Tailwind CSS' category={t.home.skillCategories.frontend} />
          <SkillCard label='Material UI' category={t.home.skillCategories.frontend} />
          <SkillCard label='Gerenciamento de Estado' category={t.home.skillCategories.frontend} />
          <SkillCard label='React Native' category={t.home.skillCategories.mobile} />
          <SkillCard label='Expo Router' category={t.home.skillCategories.mobile} />
          <SkillCard label='React Native Paper' category={t.home.skillCategories.mobile} />
          <SkillCard label='PostgreSQL' category={t.home.skillCategories.database} />
          <SkillCard label='MySQL' category={t.home.skillCategories.database} />
          <SkillCard label='MongoDB' category={t.home.skillCategories.database} />
          <SkillCard label='Git & GitHub' category={t.home.skillCategories.tools} />
          <SkillCard label='Docker' category={t.home.skillCategories.tools} />
          <SkillCard label='Scrum' category={t.home.skillCategories.tools} />
        </div>
      </AnimatedSection>

      <AnimatedSection className='w-full max-w-3xl mx-auto mb-24' delay={0.1}>
        <h2 className='text-3xl font-bold text-center mb-8'>{t.home.aboutTitle}</h2>
        <p className='text-muted-foreground leading-relaxed text-center'>{t.home.aboutText}</p>
        <div className='mt-8 text-center'>
          <Link href='/about'>
            <Button variant='outline'>{t.home.aboutCta}</Button>
          </Link>
        </div>
      </AnimatedSection>

      <AnimatedSection className='w-full text-center' delay={0.1}>
        <h2 className='text-3xl font-bold mb-4'>{t.home.ctaTitle}</h2>
        <p className='text-muted-foreground mb-8 max-w-xl mx-auto'>{t.home.ctaText}</p>
        <Link href='/contact'>
          <Button size='lg' className='px-8'>
            {t.home.ctaButton}
          </Button>
        </Link>
      </AnimatedSection>
    </main>
  )
}
