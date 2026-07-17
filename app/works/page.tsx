import { getWorks } from '@/lib/works'
import WorksWithSearch from '@/components/works-with-search'

export default async function WorksPage() {
  const works = await getWorks()

  return (
    <section className='pb-24 pt-40'>
      <div className='container max-w-6xl'>
        <h1 className='title mb-12'>Work Experience</h1>

        <WorksWithSearch works={works} />
      </div>
    </section>
  )
}
 