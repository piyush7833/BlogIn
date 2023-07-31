import React from 'react'
import styles from './page.module.css'
import Link from 'next/link'
const Portfolio = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.selectTitle}>Choose a gallery</h1>
      <div className={styles.item}>
        <Link className={styles.item} href="/portfolio/illustration" >
          <span className={styles.title}>Illustration</span>
        </Link>
        <Link className={styles.item} href="/portfolio/websites" >
          <span className={styles.title}>Illustration</span>
        </Link>
        <Link className={styles.item} href="/portfolio/applications" >
          <span className={styles.title}>Illustration</span>
        </Link>
      </div>
    </div>
  )
}

export default Portfolio
