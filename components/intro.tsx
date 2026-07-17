import Image from 'next/image'
import authorImage from '@/public/images/authors/5.jpeg'

export default function Intro() {
  return (
    <section className='flex flex-col-reverse items-start gap-x-10 gap-y-4 pb-24 md:flex-row md:items-center'>
      <div className='mt-2 flex-1 md:mt-0'>
        <h1 className='title no-underline'>Hello, my name is Arina.</h1>
        <p className='mt-3 font-light text-muted-foreground'>
          I&#39;m an economics graduate from NYU Abu Dhabi with a passion for
          finance, investing, and understanding how businesses grow. Through my
          professional experience in the investment industry, I&#39;ve developed
          a strong interest in evaluating businesses, analyzing markets, and
          exploring investment opportunities. This website brings together my
          academic projects, coursework, and research, highlighting the
          knowledge and skills I&#39;ve developed throughout my journey.
        </p>
      </div>
      <div className='relative'>
        <Image
          className='flex-1 rounded-lg'
          src={authorImage}
          alt='Arina Kenbayeva'
          width={175}
          height={175}
          priority
        />
      </div>
    </section>
  )
}