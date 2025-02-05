import Intro from '@/components/intro'
import RecentPosts from '@/components/recent-posts'
import RecentProjects from '@/components/recent-projects'
import RecentWorks from '@/components/recent-works'

export default function Home() {
  return (
    <section className='pb-24 pt-40'>
      <div className='container max-w-6xl'>
        <Intro />
        <RecentWorks />
        <RecentPosts />
        <RecentProjects />
      </div> 
    </section>
  )
}
