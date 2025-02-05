import Image from 'next/image'
import authorImage from '@/public/images/authors/5.jpeg'

export default function Intro() {
  return (
    <section className='flex flex-col-reverse items-start gap-x-10 gap-y-4 pb-24 md:flex-row md:items-center'>
      <div className='mt-2 flex-1 md:mt-0'>
        <h1 className='title no-underline'>Hello, My name is Arina.</h1>
        <p className='mt-3 font-light text-muted-foreground'>
          I&#39;m a finance student studying at New York University in Abu Dhabi, UAE. I&#39;m
          passionate about finance world and economics. I love to write about finance and economics, and I am 
          always looking for ways to improve my skills
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
