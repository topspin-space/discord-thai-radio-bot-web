import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import { marked } from 'marked'
import Template from "../components/Template"


export async function getStaticProps() {
  const markdownWithMeta = fs.readFileSync(
    path.join('assets', 'privacy-policy' + '.md'),
    'utf-8'
  )

  const { data: frontmatter, content } = matter(markdownWithMeta)

  return {
    props: {
      frontmatter,
      content,
    },
  }
}

const Privacy = ({ content }: any) => {
  return (
    <Template>
      <section className="max-w-5xl ml-auto mr-auto text-black">
        <p className="text-4xl mt-8 text-black">
          นโยบายความเป็นส่วนตัว
        </p>
        <span>Privacy Policy</span>
        <div dangerouslySetInnerHTML={{ __html: marked(content) }}></div>
      </section>
    </Template>
  )
}


export default Privacy