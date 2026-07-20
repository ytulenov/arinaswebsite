import Link from 'next/link'
import Image from 'next/image'

import { formatDate } from '@/lib/utils'
import MDXContent from '@/components/mdx-content'
import Gallery from '@/components/gallery'
import { getPosts, getPostBySlug } from '@/lib/posts'
import { ArrowLeftIcon } from '@radix-ui/react-icons'
import { notFound } from 'next/navigation'

export async function generateStaticParams() {
  const posts = await getPosts()
  const slugs = posts.map(post => ({ slug: post.slug }))

  return slugs
}

export default async function Post({ params }: { params: { slug: string } }) {
  const { slug } = params
  const post = await getPostBySlug(slug)

  if (!post) {
    notFound()
  }

  const { metadata, content } = post
  const { title, image, gallery, galleryAspect, author, publishedAt } = metadata

  return (
    <section className='pb-24 pt-32'>
      <div className='container max-w-6xl'>
        <Link
          href='/posts'
          className='mb-8 inline-flex items-center gap-2 text-sm font-light text-muted-foreground transition-colors hover:text-foreground'
        >
          <ArrowLeftIcon className='h-5 w-5' />
          <span>Back to posts</span>
        </Link>

        {gallery?.length ? (
          <Gallery
  images={gallery.map((src: string) => ({ src, alt: title || '' }))}
  aspect={galleryAspect || '3 / 4'}
/>
        ) : image ? (
          <div className='relative mb-6 aspect-[2864/1786] w-full bg-muted/50'>
            <Image
              src={image}
              alt={title || ''}
              fill
              sizes='(max-width: 768px) 100vw, 80vw'
              className='object-contain'
              quality={90}
              priority
            />
          </div>
        ) : null}

        <header>
          <h1 className='title'>{title}</h1>
          <p className='mt-3 text-xs text-muted-foreground'>
            {author} / {formatDate(publishedAt ?? '')}
          </p>
        </header>

        <main className='prose mt-16 max-w-6xl dark:prose-invert'>
          <MDXContent source={content} />
        </main>

        <footer className='mt-16' />
      </div>
    </section>
  )
}