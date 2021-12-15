import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/index.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Danial's Portfolio</title>
      </Head>
      
      <section className={styles.main}>
        <div className={styles.content}>
          <h1 className={styles.title}>
            Welcome to my portfolio!
          </h1>
          <p>
            I hope you enjoy my website!
          </p>
        </div>
      </section>
    </div>
  )
}
