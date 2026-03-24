'use client'

import ResumeButton from '@/components/ResumeButton'
import { Button } from '@/components/ui/button'
import Link from 'next/link'

export default function HeroActions() {
  return (
    <div className='mt-8 flex flex-wrap justify-center gap-4'>
      <Link href='/projects'>
        <Button size='lg'>Ver Projetos</Button>
      </Link>
      <Link href='/contact'>
        <Button variant='outline' size='lg'>
          Contato Direto
        </Button>
      </Link>
      <ResumeButton />
    </div>
  )
}
