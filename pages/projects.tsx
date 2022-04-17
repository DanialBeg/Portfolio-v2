import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/projects.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Projects</title>
      </Head>
      
      <section className={styles.main}>
        <div className={styles.content}>
          <h1 className={styles.title}>
            My Projects
          </h1>
          <p className={styles.text}>
           Quick summaries of the projects I'm working on and have worked on! You can find out more info about a project by
           clicking on it.
          </p>
        </div>
        
      </section>
    </div>
  )
}
