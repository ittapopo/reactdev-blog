import Head from 'next/head'
import Layout, { siteTitle } from '../components/layout'
import utilStyles from '../styles/utils.module.css'
import Link from 'next/link'

export default function Home() {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <p>Hi! I am a developer that likes to make fun projects!</p>
        <p> Link to to first post <Link href="/posts/first-post">here</Link> </p>
        <p>
          If you like this stay tuned for more!
        </p>
      </section>
    </Layout>
  )
}
