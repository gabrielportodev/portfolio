'use client'

import { Home, Search, ArrowLeft } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { AnimatedSection } from '@/components/AnimatedSection'
import { useLanguage } from '@/contexts/LanguageContext'
import Link from 'next/link'
import { useRouter } from 'next/navigation'

export default function NotFound() {
  const { t, language } = useLanguage()
  const router = useRouter()

  const content = {
    pt: {
      title: '404',
      heading: t.notFound.heading,
      description: t.notFound.description,
      suggestion: t.notFound.suggestion,
      goHome: t.notFound.goHome,
      goBack: t.notFound.goBack,
      projects: t.notFound.projects,
      contact: t.notFound.contact
    },
    en: {
      title: '404',
      heading: t.notFound.heading,
      description: t.notFound.description,
      suggestion: t.notFound.suggestion,
      goHome: t.notFound.goHome,
      goBack: t.notFound.goBack,
      projects: t.notFound.projects,
      contact: t.notFound.contact
    }
  }

  const c = content[language]

  return (
    <main className='flex flex-col items-center justify-center min-h-[calc(100vh-4rem)] px-6 py-16 md:py-24'>
      <AnimatedSection className='w-full max-w-2xl mx-auto text-center'>
        <div className='relative mb-8'>
          <h1 className='text-[8rem] sm:text-[10rem] md:text-[12rem] font-black leading-none text-primary/10 select-none'>
            {c.title}
          </h1>
          <div className='absolute inset-0 flex items-center justify-center'>
            <span className='text-4xl sm:text-5xl md:text-6xl font-bold text-primary'>{c.title}</span>
          </div>
        </div>

        <h2 className='text-2xl sm:text-3xl font-bold mb-4'>{c.heading}</h2>
        <p className='text-muted-foreground text-lg mb-2 max-w-xl mx-auto'>{c.description}</p>

        <p className='text-sm text-muted-foreground mb-10'>{c.suggestion}</p>

        <div className='flex flex-wrap justify-center gap-3 mb-8'>
          <Link href='/'>
            <Button size='lg' className='gap-2'>
              <Home className='h-4 w-4' />
              {c.goHome}
            </Button>
          </Link>

          <Button variant='outline' size='lg' onClick={() => router.back()} className='gap-2'>
            <ArrowLeft className='h-4 w-4' />
            {c.goBack}
          </Button>
        </div>

        <div className='flex flex-wrap justify-center gap-4 pt-6 border-t border-border'>
          <Link
            href='/projects'
            className='text-sm text-muted-foreground hover:text-primary transition-colors flex items-center gap-1.5'
          >
            <Search className='h-3.5 w-3.5' />
            {c.projects}
          </Link>
          <span className='text-border'>|</span>
          <Link href='/contact' className='text-sm text-muted-foreground hover:text-primary transition-colors'>
            {c.contact}
          </Link>
        </div>
      </AnimatedSection>

      <div className='fixed inset-0 -z-10 overflow-hidden pointer-events-none'>
        <div className='absolute top-1/4 left-1/4 w-64 h-64 bg-primary/5 rounded-full blur-3xl' />
        <div className='absolute bottom-1/4 right-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl' />
      </div>
    </main>
  )
}
