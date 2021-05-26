import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

export default function Home () {
  return (
    <div className={styles.container}>
      <Head>
        <title>Delira | Home</title>
        <meta name="description" content="Let's write a story together" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <Image
          src="/logo.png"
          alt="Let's write a story together"
          width={400}
          height={125}
        />
        <h1 className={styles.title}>
          Welcome to Delira!
        </h1>
        <div className={styles.grid}>
          <a href="/1?id=test" className={styles.card}>
            <h2>This is a test</h2>
            <p>test test test test test test</p>
          </a>
        </div>
      </main>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <span className={styles.logo}>
            <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
          </span>
        </a>
      </footer>
    </div>
  )
}
