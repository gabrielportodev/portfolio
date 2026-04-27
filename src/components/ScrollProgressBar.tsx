'use client'

import { useEffect, useState } from 'react'

export function ScrollProgressBar() {
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    const updateProgress = () => {
      const scrollTop = window.scrollY
      const docHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight
      setProgress(docHeight > 0 ? (scrollTop / docHeight) * 100 : 0)
    }

    window.addEventListener('scroll', updateProgress, { passive: true })
    return () => window.removeEventListener('scroll', updateProgress)
  }, [])

  return (
    <div className='fixed top-0 left-0 right-0 z-100 h-[3px] bg-transparent'>
      <div className='h-full bg-primary transition-[width] duration-75 ease-out' style={{ width: `${progress}%` }} />
    </div>
  )
}
