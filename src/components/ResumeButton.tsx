'use client'

import { handleDownloadResume } from '@/utils/functions'
import { Button } from '@/components/ui/button'
import { Download } from 'lucide-react'

type ResumeButtonProps = {
  label?: string
  variant?: 'default' | 'secondary' | 'outline' | 'ghost'
  size?: 'sm' | 'default' | 'lg' | 'icon'
  className?: string
}

export default function ResumeButton({
  label = 'Baixar CV',
  variant = 'secondary',
  size = 'lg',
  className
}: ResumeButtonProps) {
  return (
    <Button variant={variant} size={size} onClick={handleDownloadResume} className={className}>
      <Download className='mr-2 h-4 w-4' />
      {label}
    </Button>
  )
}
