'use client'

import { useCallback, useEffect, useRef, useState } from 'react'
import Image from 'next/image'
import { ChevronLeftIcon, ChevronRightIcon } from '@radix-ui/react-icons'

type GalleryImage = { src: string; alt?: string; caption?: string }

export default function Gallery({
  images,
  aspect = '3 / 2',
  fit = 'contain',
}: {
  images: GalleryImage[]
  aspect?: string
  fit?: 'contain' | 'cover'
}) {
  const trackRef = useRef<HTMLDivElement>(null)
  const [index, setIndex] = useState(0)

  const scrollTo = useCallback(
    (i: number) => {
      const track = trackRef.current
      if (!track) return
      const clamped = Math.max(0, Math.min(i, images.length - 1))
      track.scrollTo({ left: clamped * track.clientWidth, behavior: 'smooth' })
    },
    [images.length]
  )

  useEffect(() => {
    const track = trackRef.current
    if (!track) return
    let raf = 0
    const onScroll = () => {
      cancelAnimationFrame(raf)
      raf = requestAnimationFrame(() =>
        setIndex(Math.round(track.scrollLeft / track.clientWidth))
      )
    }
    track.addEventListener('scroll', onScroll, { passive: true })
    return () => {
      track.removeEventListener('scroll', onScroll)
      cancelAnimationFrame(raf)
    }
  }, [])

  if (!images?.length) return null

  return (
    <figure className='not-prose my-10'>
      <div
        className='group relative overflow-hidden rounded-xl border bg-muted/40'
        tabIndex={0}
        role='region'
        aria-roledescription='carousel'
        aria-label='Image gallery'
        onKeyDown={e => {
          if (e.key === 'ArrowRight') { e.preventDefault(); scrollTo(index + 1) }
          if (e.key === 'ArrowLeft')  { e.preventDefault(); scrollTo(index - 1) }
        }}
      >
        <div
          ref={trackRef}
          className='flex snap-x snap-mandatory overflow-x-auto scroll-smooth [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden'
        >
          {images.map((img, i) => (
            <div
              key={img.src}
              className='relative w-full flex-none snap-center'
              style={{ aspectRatio: aspect }}
            >
              <Image
                src={img.src}
                alt={img.alt ?? ''}
                fill
                sizes='(max-width: 768px) 100vw, 768px'
                className={fit === 'cover' ? 'object-cover' : 'object-contain p-2'}
                quality={90}
                priority={i === 0}
              />
            </div>
          ))}
        </div>

        {images.length > 1 && (
          <>
            <button
              type='button'
              aria-label='Previous image'
              onClick={() => scrollTo(index - 1)}
              disabled={index === 0}
              className='absolute left-2 top-1/2 hidden -translate-y-1/2 rounded-full bg-background/80 p-2 shadow backdrop-blur transition disabled:opacity-0 sm:block'
            >
              <ChevronLeftIcon className='h-5 w-5' />
            </button>
            <button
              type='button'
              aria-label='Next image'
              onClick={() => scrollTo(index + 1)}
              disabled={index === images.length - 1}
              className='absolute right-2 top-1/2 hidden -translate-y-1/2 rounded-full bg-background/80 p-2 shadow backdrop-blur transition disabled:opacity-0 sm:block'
            >
              <ChevronRightIcon className='h-5 w-5' />
            </button>
          </>
        )}
      </div>

      {images.length > 1 && (
        <div className='mt-3 flex justify-center gap-2'>
          {images.map((img, i) => (
            <button
              key={img.src}
              type='button'
              aria-label={`Go to image ${i + 1}`}
              onClick={() => scrollTo(i)}
              className={`h-1.5 rounded-full transition-all ${
                i === index ? 'w-6 bg-foreground' : 'w-1.5 bg-muted-foreground/40'
              }`}
            />
          ))}
        </div>
      )}

      {images[index]?.caption && (
        <figcaption className='mt-3 text-center text-xs text-muted-foreground'>
          {images[index].caption}
        </figcaption>
      )}
    </figure>
  )
}