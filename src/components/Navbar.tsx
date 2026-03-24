'use client'

import { Sheet, SheetContent, SheetTrigger, SheetTitle } from '@/components/ui/sheet'
import { handleDownloadResume } from '@/utils/functions'
import { Button } from '@/components/ui/button'
import { Switch } from '@/components/ui/switch'
import { usePathname } from 'next/navigation'
import { Download, Menu } from 'lucide-react'
import { Label } from '@/components/ui/label'
import { useTheme } from 'next-themes'
import Link from 'next/link'

export function Navbar() {
  const pathname = usePathname()
  const { theme, setTheme, systemTheme } = useTheme()

  const isDark = theme === 'dark' || (theme === 'system' && systemTheme === 'dark')

  const routes = [
    { name: 'Home', path: '/' },
    { name: 'Sobre', path: '/about' },
    { name: 'Projetos', path: '/projects' },
    { name: 'Contato', path: '/contact' }
  ]

  return (
    <header className='sticky top-0 z-50 w-full border-b bg-background/80 backdrop-blur-sm'>
      <nav className='mx-auto flex max-w-6xl items-center justify-between px-4 py-3'>
        <Link href='/' className='text-lg font-bold'>
          Gabriel Porto
        </Link>

        <div className='hidden items-center gap-6 md:flex'>
          {routes.map(route => (
            <Link
              key={route.path}
              href={route.path}
              className={`text-sm transition-colors hover:text-primary ${
                pathname === route.path ? 'text-primary font-medium' : 'text-muted-foreground'
              }`}
            >
              {route.name}
            </Link>
          ))}

          <Button variant='outline' size='sm' onClick={() => handleDownloadResume()} className='gap-2'>
            <Download className='h-4 w-4' />
            Currículo
          </Button>
        </div>

        <div className='flex items-center gap-2'>
          <div className='flex items-center gap-2'>
            <Label htmlFor='theme-switch' className='text-sm'>
              {isDark ? 'Dark' : 'Light'}
            </Label>
            <Switch
              id='theme-switch'
              checked={isDark}
              className='cursor-pointer'
              onCheckedChange={checked => setTheme(checked ? 'dark' : 'light')}
            />
          </div>

          <Sheet>
            <SheetTrigger asChild className='md:hidden'>
              <Button variant='ghost' size='icon' aria-label='Abrir menu'>
                <Menu className='h-7 w-7' />
              </Button>
            </SheetTrigger>
            <SheetContent side='right' className='`w-75 sm:w-100'>
              <SheetTitle className='text-left text-lg font-semibold pt-4 pl-4'>Navegação</SheetTitle>
              <div className='flex flex-col'>
                {routes.map(route => (
                  <Link
                    key={route.path}
                    href={route.path}
                    className={`px-4 py-2 text-lg transition-colors rounded-md hover:bg-accent ${
                      pathname === route.path ? 'text-primary font-medium bg-accent' : 'text-muted-foreground'
                    }`}
                  >
                    {route.name}
                  </Link>
                ))}

                <Button
                  variant='outline'
                  size='default'
                  onClick={() => handleDownloadResume()}
                  className='mx-4 mt-4 gap-2'
                >
                  <Download className='h-4 w-4' />
                  Baixar Currículo
                </Button>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </nav>
    </header>
  )
}
