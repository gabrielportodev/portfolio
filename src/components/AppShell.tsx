'use client'

import { useState } from 'react'
import { Menu } from 'lucide-react'
import { Sidebar } from './Sidebar'
import { ScrollProgressBar } from './ScrollProgressBar'
import { CommandPalette } from './CommandPalette'
import { useLanguage } from '@/contexts/LanguageContext'
import { cn } from '@/lib/utils'

export function AppShell({ children }: { children: React.ReactNode }) {
  const [collapsed, setCollapsed] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const { t } = useLanguage()

  return (
    <>
      <ScrollProgressBar />
      <CommandPalette />

      <Sidebar
        collapsed={collapsed}
        onToggle={() => setCollapsed(c => !c)}
        mobileOpen={mobileOpen}
        onMobileClose={() => setMobileOpen(false)}
      />

      <div
        className={cn(
          'flex min-h-screen flex-col transition-all duration-300',
          collapsed ? 'md:pl-16' : 'md:pl-60'
        )}
      >
        <header className='sticky top-0 z-40 flex h-14 items-center gap-3 border-b bg-background/80 px-4 backdrop-blur-sm md:hidden'>
          <button
            onClick={() => setMobileOpen(true)}
            className='rounded-md p-1.5 text-muted-foreground transition-colors hover:bg-accent hover:text-foreground'
            aria-label={t.sidebar.openMenu}
          >
            <Menu className='h-5 w-5' />
          </button>
          <span className='font-bold'>
            <span className='text-primary'>Gabriel</span> Porto
          </span>
        </header>

        {children}
      </div>
    </>
  )
}
