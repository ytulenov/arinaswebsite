import Link from 'next/link'

import { WorkMetadata } from '@/lib/works'
import { formatDate } from '@/lib/utils-for-work'

export default function Works({ works }: { works: WorkMetadata[] }) {
  return (
    <ul className='flex flex-col gap-8'>
      {works.map(work => (
        <li key={work.slug}>
          <Link
            href={`/works/${work.slug}`}
            className='flex flex-col justify-between gap-x-4 gap-y-1 sm:flex-row'
          >
            <div className='max-w-lg'>
              <p className='text-lg font-semibold'>{work.title}</p>
              <p className='mt-1 line-clamp-2 text-sm font-light text-muted-foreground'>
                {work.summary}
              </p>
            </div>
 
            <div className='flex flex-col items-end'>
              {work.starting_date && work.end_date && (
                <p className='mt-1 text-sm font-light'>
                  {formatDate(work.starting_date)} - {formatDate(work.end_date)}
                </p>
              )}
            </div>
          </Link>
        </li> 
      ))}
    </ul>
  )
}
  