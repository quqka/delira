import Head from 'next/head'
import Image from 'next/image'
import styles from './layout.module.css'
// import utilStyles from '../styles/utils.module.css'
import Link from 'next/link'
import logo from 'assets/images/logo.png'

const name = 'Delira'
export const siteTitle = 'Delira'

export default function Layout({ children, home }: {
  children: React.ReactNode
  home?: boolean
}) {
  return (
    <div className={styles.container}>
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <meta
          property="og:image"
          content={`https://og-image.vercel.app/${encodeURI(
            siteTitle
          )}.png?theme=light&md=0&fontSize=75px&images=https%3A%2F%2Fassets.zeit.co%2Fimage%2Fupload%2Ffront%2Fassets%2Fdesign%2Fnextjs-black-logo.svg`}
        />
        <meta name="og:title" content={siteTitle} />
      </Head>
      <header className={styles.header}>
        {home ? (
          <>
            <Image
              priority
              src={logo}
              height={75}
              width={200}
              alt={name}
            />
            <div>
              <a href="/" className={styles.archivess}>首页</a>
              <a href="/" className={styles.archivess}>归档</a>
              <a href="about" className={styles.archivess}>关于我们</a>
            </div>
          </>
        ) : (
          <>
            <Link href="/">
              <a>
                <Image
                  priority
                  src={logo}
                  height={75}
                  width={200}
                  alt={name}
                />
              </a>
            </Link>
          </>
        )}
      </header>
      <main className={styles.content}>{children}</main>
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
      {!home && (
        <div className={styles.backToHome}>
          <Link href="/">
            <a>← Back to home</a>
          </Link>
        </div>
      )}
    </div>
  )
}
