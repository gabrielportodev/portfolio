'use client'

import { Linkedin, Github, Mail, MapPin, Phone } from 'lucide-react'
import ResumeButton from '@/components/ResumeButton'
import { useLanguage } from '@/contexts/LanguageContext'
import Link from 'next/link'

export function Footer() {
  const currentYear = new Date().getFullYear()
  const { t } = useLanguage()

  return (
    <footer className='border-t bg-background/80'>
      <div className='container mx-auto px-4 py-12'>
        <div className='grid grid-cols-1 gap-8 md:grid-cols-3'>
          <div className='space-y-4'>
            <h3 className='text-lg font-semibold'>Gabriel Porto</h3>
            <p className='text-muted-foreground'>{t.footer.description}</p>
            <ResumeButton variant='outline' size='sm' className='mt-2' />
            <div className='flex gap-4 pt-2'>
              <Link
                href='https://linkedin.com/in/gabrielportodev'
                target='_blank'
                className='text-muted-foreground transition-colors hover:text-primary'
              >
                <Linkedin className='h-5 w-5' />
              </Link>
              <Link
                href='https://github.com/gabrielportodev'
                target='_blank'
                className='text-muted-foreground transition-colors hover:text-primary'
              >
                <Github className='h-5 w-5' />
              </Link>
              <Link
                href='mailto:gpalmenara@gmail.com'
                target='_blank'
                className='text-muted-foreground transition-colors hover:text-primary'
              >
                <Mail className='h-5 w-5' />
              </Link>
            </div>
          </div>

          <div className='space-y-4'>
            <h3 className='text-lg font-semibold'>{t.footer.navigation}</h3>
            <ul className='space-y-2 text-muted-foreground'>
              <li>
                <Link href='/' className='hover:text-primary transition-colors'>
                  Home
                </Link>
              </li>
              <li>
                <Link href='/about' className='hover:text-primary transition-colors'>
                  {t.footer.about}
                </Link>
              </li>
              <li>
                <Link href='/experiences' className='hover:text-primary transition-colors'>
                  {t.footer.experiences}
                </Link>
              </li>
              <li>
                <Link href='/projects' className='hover:text-primary transition-colors'>
                  {t.footer.projects}
                </Link>
              </li>
              <li>
                <Link href='/contact' className='hover:text-primary transition-colors'>
                  {t.footer.contact}
                </Link>
              </li>
            </ul>
          </div>

          <div className='space-y-4'>
            <h3 className='text-lg font-semibold'>{t.footer.contact}</h3>
            <address className='not-italic text-muted-foreground space-y-2'>
              <div className='flex items-center gap-2'>
                <Mail className='h-4 w-4' />
                <span>gpalmenara@gmail.com</span>
              </div>
              <div className='flex items-center gap-2'>
                <Phone className='h-4 w-4' />
                <span>(33) 99863-1093</span>
              </div>
              <div className='flex items-center gap-2'>
                <MapPin className='h-4 w-4' />
                <span>Minas Gerais, Brasil</span>
              </div>
            </address>
          </div>
        </div>

        <div className='mt-16 border-t pt-8 text-center text-sm text-muted-foreground'>
          <p>
            © {currentYear} Gabriel Porto. {t.footer.rights}
          </p>
        </div>
      </div>
    </footer>
  )
}
