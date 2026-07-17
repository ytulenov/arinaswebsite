import { MDXRemote, MDXRemoteProps } from 'next-mdx-remote/rsc'
import remarkMath from 'remark-math'
import rehypeKatex from 'rehype-katex'
import { highlight } from 'sugar-high'
import Counter from '@/components/counter'

function Code({ children, className, ...props }: any) {
  // Don't let sugar-high touch math blocks (remark-math handles them)
  const codeHTML = highlight(children)
  return <code dangerouslySetInnerHTML={{ __html: codeHTML }} {...props} />
}

const components = {
  code: Code,
  Counter
}

export default function MDXContent(props: MDXRemoteProps) {
  return (
    <MDXRemote
      {...props}
      components={{ ...components, ...(props.components || {}) }}
      options={{
        mdxOptions: {
          remarkPlugins: [remarkMath],
          rehypePlugins: [rehypeKatex]
        },
        // merge with any options passed in props if you have them
        ...(props.options || {})
      }}
    />
  )
}