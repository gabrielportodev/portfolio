import { Skeleton } from '@/components/ui/skeleton'

export default function AboutLoading() {
  return (
    <main className='flex flex-col items-center px-6 py-16 md:py-24 max-w-6xl mx-auto'>
      <div className='w-full text-center mb-20 space-y-4'>
        <Skeleton className='h-12 w-72 mx-auto' />
        <Skeleton className='h-5 w-full max-w-3xl mx-auto' />
        <Skeleton className='h-5 w-2/3 max-w-3xl mx-auto' />
      </div>

      <div className='w-full mb-24 flex flex-col md:flex-row gap-12 items-center'>
        <Skeleton className='w-64 h-64 md:w-80 md:h-80 rounded-full shrink-0' />
        <div className='flex-1 space-y-4'>
          <Skeleton className='h-8 w-48' />
          <Skeleton className='h-5 w-full' />
          <Skeleton className='h-5 w-full' />
          <Skeleton className='h-5 w-3/4' />
          <Skeleton className='h-10 w-40 mt-4' />
        </div>
      </div>

      <div className='w-full mb-24'>
        <Skeleton className='h-9 w-56 mx-auto mb-12' />
        <div className='space-y-12'>
          {[...Array(2)].map((_, i) => (
            <Skeleton key={i} className='h-28 rounded-xl' />
          ))}
        </div>
      </div>
    </main>
  )
}
