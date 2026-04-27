import { Skeleton } from '@/components/ui/skeleton'

export default function ExperiencesLoading() {
  return (
    <main className='flex flex-col items-center px-6 py-16 md:py-24 max-w-6xl mx-auto'>
      <div className='w-full text-center mb-16 space-y-4'>
        <Skeleton className='h-8 w-56 mx-auto rounded-full' />
        <Skeleton className='h-12 w-72 mx-auto' />
        <Skeleton className='h-5 w-full max-w-2xl mx-auto' />
      </div>

      <div className='w-full mb-16 space-y-8'>
        {[...Array(2)].map((_, i) => (
          <Skeleton key={i} className='h-80 rounded-2xl' />
        ))}
      </div>
    </main>
  )
}
