import { Skeleton } from '@/components/ui/skeleton'

export default function ProjectsLoading() {
  return (
    <main className='flex flex-col items-center px-6 py-16 md:py-24 max-w-6xl mx-auto'>
      <div className='w-full text-center mb-20 space-y-4'>
        <Skeleton className='h-12 w-80 mx-auto' />
        <Skeleton className='h-5 w-2/3 mx-auto' />
        <div className='flex justify-center gap-4 mt-4'>
          <Skeleton className='h-11 w-40 rounded-lg' />
          <Skeleton className='h-11 w-40 rounded-lg' />
        </div>
      </div>

      <div className='w-full mb-24'>
        <Skeleton className='h-9 w-32 mx-auto mb-12' />
        <Skeleton className='h-80 rounded-xl' />
      </div>

      <div className='w-full mb-24'>
        <Skeleton className='h-9 w-56 mx-auto mb-12' />
        <div className='grid md:grid-cols-2 gap-8'>
          {[...Array(4)].map((_, i) => (
            <Skeleton key={i} className='h-64 rounded-xl' />
          ))}
        </div>
      </div>
    </main>
  )
}
