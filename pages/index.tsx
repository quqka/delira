import Head from 'next/head'
import Layout, { siteTitle } from '../components/layout.tsx'
import utilStyles from '../styles/utils.module.css'
import { getSortedStoryData } from '../lib/story.ts'
import Link from 'next/link'
import { GetStaticProps } from 'next'

export default function Home({
  allStoryData
}: {
  allPostsData: {
    sid: string
    date: string
    title: string
    desc: string
  }[]
}) {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={`${utilStyles.list}`}>
        {allStoryData.map(({ sid, date, title, desc }) => (
          <article className={utilStyles.card} key={sid}>
            <h2>{title}</h2>
            <div>{date}</div>
            <p>描述:{desc}</p>
            <Link href={`/story/${sid}`}>READ MORE</Link>
          </article>
        ))}
      </section>
    </Layout>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  const allStoryData = getSortedStoryData()
  return {
    props: {
      allStoryData
    }
  }
}
