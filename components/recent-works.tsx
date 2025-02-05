import Link from 'next/link'
import { getWorks } from '@/lib/works'
import Works from '@/components/works'

export default async function RecentWorks() {
  const works = await getWorks(4)

  return (
    <section className='pb-24'> 
      <div>
        <h2 className='title mb-12'>Work Experience</h2>
        <Works works={works} />

        <Link
          href='/works'
          className='mt-8 inline-flex items-center gap-2 text-muted-foreground underline decoration-1 underline-offset-2 transition-colors hover:text-foreground'
        >
          <span>All works</span>
        </Link>
      </div>
    </section>
  )
}
  