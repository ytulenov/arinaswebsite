import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'

const rootDirectory = path.join(process.cwd(), 'content', 'works')

export type Work = {
  metadata: WorkMetadata
  content: string
}

export type WorkMetadata = {
  title?: string
  summary?: string
  image?: string
  company?: string
  starting_date?: string 
  end_date?: string
  slug: string
}   

export async function getWorkBySlug(slug: string): Promise<Work | null> {
  try {
    const filePath = path.join(rootDirectory, `${slug}.mdx`)
    const fileContent = fs.readFileSync(filePath, { encoding: 'utf8' })
    const { data, content } = matter(fileContent)
    return { metadata: { ...data, slug }, content }
  } catch (error) {
    return null
  }
}

export async function getWorks(limit?: number): Promise<WorkMetadata[]> {
  const files = fs.readdirSync(rootDirectory)

  const works = files
    .map(file => getWorkMetadata(file))
    .sort((a, b) => {
      // Sort first by start date, in descending order
      if (new Date(b.starting_date ?? '') > new Date(a.starting_date ?? '')) {
        return 1;
      } else if (new Date(b.starting_date ?? '') < new Date(a.starting_date ?? '')) {
        return -1;
      }
      
      // If start dates are the same, sort by end date, in descending order
      if (new Date(b.end_date ?? '') > new Date(a.end_date ?? '')) {
        return 1;
      } else if (new Date(b.end_date ?? '') < new Date(a.end_date ?? '')) {
        return -1;
      }

      // If both start and end dates are the same, keep the original order
      return 0;
    });

  if (limit) {
    return works.slice(0, limit)
  }

  return works
}

export function getWorkMetadata(filepath: string): WorkMetadata {
  const slug = filepath.replace(/\.mdx$/, '')
  const filePath = path.join(rootDirectory, filepath)
  const fileContent = fs.readFileSync(filePath, { encoding: 'utf8' })
  const { data } = matter(fileContent)
  return { ...data, slug }
}
 