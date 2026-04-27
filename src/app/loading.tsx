import { Skeleton } from '@/components/ui/skeleton'

export default function RootLoading() {
  return (
    <main className='flex flex-col items-center px-6 py-16 md:py-24 max-w-6xl mx-auto'>
      <div className='w-full text-center mb-24 space-y-6'>
        <Skeleton className='h-12 w-96 mx-auto rounded-full' />
        <Skeleton className='h-8 w-72 mx-auto rounded-full' />
        <Skeleton className='h-5 w-full max-w-2xl mx-auto' />
        <Skeleton className='h-5 w-3/4 max-w-2xl mx-auto' />
        <div className='flex justify-center gap-4 mt-4'>
          <Skeleton className='h-11 w-36 rounded-lg' />
          <Skeleton className='h-11 w-36 rounded-lg' />
        </div>
      </div>

      <div className='w-full mb-24'>
        <Skeleton className='h-9 w-64 mx-auto mb-12' />
        <div className='grid md:grid-cols-3 gap-8'>
          {[...Array(3)].map((_, i) => (
            <Skeleton key={i} className='h-40 rounded-xl' />
          ))}
        </div>
      </div>

      <div className='w-full mb-24'>
        <Skeleton className='h-9 w-48 mx-auto mb-12' />
        <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4'>
          {[...Array(12)].map((_, i) => (
            <Skeleton key={i} className='h-16 rounded-lg' />
          ))}
        </div>
      </div>
    </main>
  )
}
