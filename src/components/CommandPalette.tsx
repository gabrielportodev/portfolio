'use client'

import { useEffect, useState, useCallback, useRef } from 'react'
import { useRouter } from 'next/navigation'
import { useTheme } from 'next-themes'
import { useLanguage } from '@/contexts/LanguageContext'
import { handleDownloadResume } from '@/utils/functions'
import { Home, User, Briefcase, FolderKanban, Mail, Sun, Moon, Languages, Download, Search } from 'lucide-react'
import { cn } from '@/lib/utils'

type CommandItem = {
  id: string
  label: string
  group: string
  icon: React.ReactNode
  action: () => void
}

export function CommandPalette() {
  const [open, setOpen] = useState(false)
  const [query, setQuery] = useState('')
  const [activeIndex, setActiveIndex] = useState(0)
  const inputRef = useRef<HTMLInputElement>(null)
  const router = useRouter()
  const { theme, setTheme, systemTheme } = useTheme()
  const { t, language, setLanguage } = useLanguage()
  const isDark = theme === 'dark' || (theme === 'system' && systemTheme === 'dark')

  const commands: CommandItem[] = [
    { id: 'home', label: t.palette.goHome, group: t.palette.navigation, icon: <Home className='h-4 w-4' />, action: () => router.push('/') },
    { id: 'about', label: t.palette.goAbout, group: t.palette.navigation, icon: <User className='h-4 w-4' />, action: () => router.push('/about') },
    { id: 'experiences', label: t.palette.goExperiences, group: t.palette.navigation, icon: <Briefcase className='h-4 w-4' />, action: () => router.push('/experiences') },
    { id: 'projects', label: t.palette.goProjects, group: t.palette.navigation, icon: <FolderKanban className='h-4 w-4' />, action: () => router.push('/projects') },
    { id: 'contact', label: t.palette.goContact, group: t.palette.navigation, icon: <Mail className='h-4 w-4' />, action: () => router.push('/contact') },
    { id: 'theme', label: t.palette.toggleTheme, group: t.palette.actions, icon: isDark ? <Sun className='h-4 w-4' /> : <Moon className='h-4 w-4' />, action: () => setTheme(isDark ? 'light' : 'dark') },
    { id: 'lang', label: t.palette.switchLang, group: t.palette.actions, icon: <Languages className='h-4 w-4' />, action: () => setLanguage(language === 'pt' ? 'en' : 'pt') },
    { id: 'cv', label: t.palette.downloadCV, group: t.palette.actions, icon: <Download className='h-4 w-4' />, action: () => handleDownloadResume() }
  ]

  const filtered = query.trim()
    ? commands.filter(c => c.label.toLowerCase().includes(query.toLowerCase()))
    : commands

  const grouped = filtered.reduce<Record<string, CommandItem[]>>((acc, cmd) => {
    if (!acc[cmd.group]) acc[cmd.group] = []
    acc[cmd.group].push(cmd)
    return acc
  }, {})

  const flatFiltered = filtered

  const execute = useCallback((item: CommandItem) => {
    item.action()
    setOpen(false)
    setQuery('')
  }, [])

  useEffect(() => {
    setActiveIndex(0)
  }, [query])

  useEffect(() => {
    if (open) {
      setTimeout(() => inputRef.current?.focus(), 50)
    } else {
      setQuery('')
    }
  }, [open])

  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
        e.preventDefault()
        setOpen(prev => !prev)
      }
      if (!open) return
      if (e.key === 'Escape') setOpen(false)
      if (e.key === 'ArrowDown') {
        e.preventDefault()
        setActiveIndex(i => (i + 1) % flatFiltered.length)
      }
      if (e.key === 'ArrowUp') {
        e.preventDefault()
        setActiveIndex(i => (i - 1 + flatFiltered.length) % flatFiltered.length)
      }
      if (e.key === 'Enter' && flatFiltered[activeIndex]) {
        execute(flatFiltered[activeIndex])
      }
    }
    window.addEventListener('keydown', handler)
    return () => window.removeEventListener('keydown', handler)
  }, [open, flatFiltered, activeIndex, execute])

  if (!open) return null

  return (
    <div
      className='fixed inset-0 z-[200] flex items-start justify-center pt-[15vh]'
      onClick={() => setOpen(false)}
    >
      <div className='absolute inset-0 bg-black/50 backdrop-blur-sm' />

      <div
        className='relative w-full max-w-lg mx-4 rounded-xl border bg-background shadow-2xl overflow-hidden'
        onClick={e => e.stopPropagation()}
      >
        <div className='flex items-center gap-3 border-b px-4 py-3'>
          <Search className='h-4 w-4 shrink-0 text-muted-foreground' />
          <input
            ref={inputRef}
            value={query}
            onChange={e => setQuery(e.target.value)}
            placeholder={t.palette.placeholder}
            className='flex-1 bg-transparent text-sm outline-none placeholder:text-muted-foreground'
          />
          <kbd className='hidden sm:inline-flex h-5 select-none items-center gap-1 rounded border bg-muted px-1.5 text-[10px] font-medium text-muted-foreground'>
            ESC
          </kbd>
        </div>

        <div className='max-h-72 overflow-y-auto py-2'>
          {flatFiltered.length === 0 ? (
            <p className='py-8 text-center text-sm text-muted-foreground'>{t.palette.noResults}</p>
          ) : (
            Object.entries(grouped).map(([group, items]) => (
              <div key={group}>
                <p className='px-4 py-1.5 text-xs font-semibold text-muted-foreground uppercase tracking-wider'>
                  {group}
                </p>
                {items.map(item => {
                  const globalIdx = flatFiltered.findIndex(f => f.id === item.id)
                  return (
                    <button
                      key={item.id}
                      onMouseEnter={() => setActiveIndex(globalIdx)}
                      onClick={() => execute(item)}
                      className={cn(
                        'flex w-full items-center gap-3 px-4 py-2.5 text-sm transition-colors text-left',
                        globalIdx === activeIndex
                          ? 'bg-primary/10 text-primary'
                          : 'text-foreground hover:bg-accent'
                      )}
                    >
                      <span className={cn('shrink-0', globalIdx === activeIndex ? 'text-primary' : 'text-muted-foreground')}>
                        {item.icon}
                      </span>
                      {item.label}
                    </button>
                  )
                })}
              </div>
            ))
          )}
        </div>

        <div className='border-t px-4 py-2 flex items-center justify-between text-[10px] text-muted-foreground'>
          <span>↑↓ navegar</span>
          <span>↵ selecionar</span>
          <span>ESC fechar</span>
        </div>
      </div>
    </div>
  )
}
