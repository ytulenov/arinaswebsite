import Link from 'next/link'
import Image from 'next/image'

import { formatDate } from '@/lib/utils-for-work'
import MDXContent from '@/components/mdx-content'
import { getWorks, getWorkBySlug } from '@/lib/works'
import { ArrowLeftIcon } from '@radix-ui/react-icons'
import { notFound } from 'next/navigation'


export async function generateStaticParams() {
  const works = await getWorks()
  const slugs = works.map(work => ({ slug: work.slug }))

  return slugs
}
 
export default async function Work({ params }: { params: { slug: string } }) {
  const { slug } = params
  const work = await getWorkBySlug(slug)

  if (!work) {
    notFound()
  }

  const { metadata, content } = work
  const { title, image, company, starting_date, end_date } = metadata

  return (
    <section className='pb-24 pt-32'>
      <div className='container max-w-6xl'>
        <Link
          href='/works'
          className='mb-8 inline-flex items-center gap-2 text-sm font-light text-muted-foreground transition-colors hover:text-foreground'
        >
          <ArrowLeftIcon className='h-5 w-5' />
          <span>Back to Work Experiences</span>
        </Link>

        {image && (
          <div className='relative mb-6 h-96 w-full overflow-hidden rounded-lg'>
            <Image
              src={image}
              alt={title || ''}
              className='object-cover'
              fill
            />
          </div>
        )}

        <header>
          <h1 className='title'>{title}</h1>
          <p className='mt-3 text-xs text-muted-foreground'>
            Company name: {company} / {formatDate(starting_date ?? '')} - {formatDate(end_date ?? '')}
          </p>
        </header>

        <main className='prose mt-16 dark:prose-invert  max-w-6xl'>
          <MDXContent source={content} />
        </main>

        <footer className='mt-16'>
          
        </footer>
      </div>
    </section>
  )
}
