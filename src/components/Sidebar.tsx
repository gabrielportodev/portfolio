'use client'

import { Sheet, SheetContent, SheetTitle } from '@/components/ui/sheet'
import { handleDownloadResume } from '@/utils/functions'
import { Switch } from '@/components/ui/switch'
import { usePathname } from 'next/navigation'
import { Home, User, Briefcase, FolderKanban, Mail, Download, ChevronLeft, ChevronRight, Sun, Moon } from 'lucide-react'
import { useTheme } from 'next-themes'
import { cn } from '@/lib/utils'
import Image from 'next/image'
import Link from 'next/link'

const routes = [
  { name: 'Home', path: '/', icon: Home },
  { name: 'Sobre', path: '/about', icon: User },
  { name: 'Experiências', path: '/experiences', icon: Briefcase },
  { name: 'Projetos', path: '/projects', icon: FolderKanban },
  { name: 'Contato', path: '/contact', icon: Mail }
]

type SidebarProps = {
  collapsed: boolean
  onToggle: () => void
  mobileOpen: boolean
  onMobileClose: () => void
}

function NavItem({
  route,
  collapsed,
  onClick
}: {
  route: (typeof routes)[0]
  collapsed: boolean
  onClick?: () => void
}) {
  const pathname = usePathname()
  const isActive = pathname === route.path
  const Icon = route.icon

  return (
    <Link
      href={route.path}
      onClick={onClick}
      className={cn(
        'relative group flex items-center gap-3 rounded-lg text-sm font-medium transition-all duration-200',
        'hover:bg-accent hover:text-foreground',
        isActive ? 'bg-primary/10 text-primary' : 'text-muted-foreground',
        collapsed ? 'justify-center p-2.5' : 'px-3 py-2.5'
      )}
    >
      <Icon className='h-5 w-5 shrink-0' />
      {!collapsed && <span>{route.name}</span>}
      {collapsed && (
        <span className='pointer-events-none absolute left-full z-50 ml-3 whitespace-nowrap rounded-md border bg-popover px-2 py-1 text-xs font-medium text-popover-foreground shadow-md opacity-0 transition-opacity group-hover:opacity-100'>
          {route.name}
        </span>
      )}
      {isActive && !collapsed && <span className='ml-auto h-1.5 w-1.5 rounded-full bg-primary' />}
    </Link>
  )
}

function ThemeToggle({ collapsed }: { collapsed: boolean }) {
  const { theme, setTheme, systemTheme } = useTheme()
  const isDark = theme === 'dark' || (theme === 'system' && systemTheme === 'dark')

  if (collapsed) {
    return (
      <button
        onClick={() => setTheme(isDark ? 'light' : 'dark')}
        className='relative group flex w-full items-center justify-center rounded-lg p-2.5 text-muted-foreground transition-colors hover:bg-accent hover:text-foreground'
        aria-label='Alternar tema'
      >
        {isDark ? <Moon className='h-5 w-5 shrink-0' /> : <Sun className='h-5 w-5 shrink-0' />}
        <span className='pointer-events-none absolute left-full z-50 ml-3 whitespace-nowrap rounded-md border bg-popover px-2 py-1 text-xs font-medium text-popover-foreground shadow-md opacity-0 transition-opacity group-hover:opacity-100'>
          {isDark ? 'Modo Dark' : 'Modo Light'}
        </span>
      </button>
    )
  }

  return (
    <div className='flex items-center gap-3 rounded-lg px-3 py-2.5'>
      {isDark ? (
        <Moon className='h-5 w-5 shrink-0 text-muted-foreground' />
      ) : (
        <Sun className='h-5 w-5 shrink-0 text-muted-foreground' />
      )}
      <span className='flex-1 text-sm text-muted-foreground'>{isDark ? 'Dark' : 'Light'}</span>
      <Switch
        checked={isDark}
        className='cursor-pointer'
        onCheckedChange={checked => setTheme(checked ? 'dark' : 'light')}
      />
    </div>
  )
}

function SidebarContent({
  collapsed,
  onToggle,
  onClose
}: {
  collapsed: boolean
  onToggle: () => void
  onClose?: () => void
}) {
  return (
    <div className='flex h-full flex-col'>
      <div className={cn('flex items-center gap-3 border-b py-5', collapsed ? 'justify-center px-2' : 'px-4')}>
        <div className='flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-primary'>
          <Image
            src='/imgs/euRosto.jpeg'
            alt='Gabriel Porto - Desenvolvedor Full Stack'
            width={40}
            height={40}
            className='shrink-0 rounded-lg'
          />
        </div>
        {!collapsed && (
          <div className='overflow-hidden'>
            <p className='truncate text-sm font-bold leading-tight'>Gabriel Porto</p>
            <p className='truncate text-xs leading-tight text-muted-foreground'>Desenvolvedor Full Stack</p>
          </div>
        )}
      </div>

      <nav className='flex-1 overflow-y-auto px-2 py-4'>
        <div className='space-y-1'>
          {routes.map(route => (
            <NavItem key={route.path} route={route} collapsed={collapsed} onClick={onClose} />
          ))}
        </div>
      </nav>

      <div className='space-y-1 border-t px-2 py-4'>
        <ThemeToggle collapsed={collapsed} />

        <button
          onClick={() => handleDownloadResume()}
          className={cn(
            'relative group flex w-full items-center gap-3 rounded-lg text-sm font-medium text-muted-foreground transition-all duration-200 hover:bg-accent hover:text-foreground',
            collapsed ? 'justify-center p-2.5' : 'px-3 py-2.5'
          )}
        >
          <Download className='h-5 w-5 shrink-0' />
          {!collapsed && <span>Currículo</span>}
          {collapsed && (
            <span className='pointer-events-none absolute left-full z-50 ml-3 whitespace-nowrap rounded-md border bg-popover px-2 py-1 text-xs font-medium text-popover-foreground shadow-md opacity-0 transition-opacity group-hover:opacity-100'>
              Baixar Currículo
            </span>
          )}
        </button>

        <button
          onClick={onToggle}
          className={cn(
            'hidden w-full items-center gap-3 rounded-lg text-sm font-medium text-muted-foreground transition-all duration-200 hover:bg-accent hover:text-foreground md:flex',
            collapsed ? 'justify-center p-2.5' : 'px-3 py-2.5'
          )}
          aria-label={collapsed ? 'Expandir menu' : 'Recolher menu'}
        >
          {collapsed ? (
            <ChevronRight className='h-5 w-5 shrink-0' />
          ) : (
            <>
              <ChevronLeft className='h-5 w-5 shrink-0' />
              <span>Recolher</span>
            </>
          )}
        </button>
      </div>
    </div>
  )
}

export function Sidebar({ collapsed, onToggle, mobileOpen, onMobileClose }: SidebarProps) {
  return (
    <>
      <aside
        className={cn(
          'fixed inset-y-0 left-0 z-50 hidden flex-col border-r bg-background/95 shadow-sm backdrop-blur-sm transition-all duration-300 md:flex',
          collapsed ? 'w-16' : 'w-60'
        )}
      >
        <SidebarContent collapsed={collapsed} onToggle={onToggle} />
      </aside>

      <Sheet open={mobileOpen} onOpenChange={open => !open && onMobileClose()}>
        <SheetContent side='left' className='w-72 p-0'>
          <SheetTitle className='sr-only'>Menu de Navegação</SheetTitle>
          <SidebarContent collapsed={false} onToggle={() => {}} onClose={onMobileClose} />
        </SheetContent>
      </Sheet>
    </>
  )
}
