import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/index.module.css'
import profileImg from '../public/images/profile.jpg'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Danial's Portfolio</title>
      </Head>
      
      <section className={styles.main}>
        <div className={styles.content}>
          <h1 className={styles.title}>
            Hey, I'm Danial 👋
          </h1>
          <p>
            Welcome! I'm a Software Engineer based in San Diego, CA
          </p>
          <p>
            Here you'll find the cool stuff I'm up to at the moment!
          </p>
        </div>
        <div className={styles.profileImg}>
          <Image
            src={profileImg}
            className={styles.round}
            priority={true}
            width={200}
            height={200}
            quality={100}
          />
        </div>
      </section>
    </div>
  )
}
