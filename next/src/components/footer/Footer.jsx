import React from 'react'
import styles from './page.module.css'
import Image from 'next/image'
const Footer = () => {
  return (
    <div className={styles.container}>
      <div> © 2023 BlogIn All Rights Reserved</div>
      <div className={styles.logo}>
        <Image className={styles.icon} height={20} width={20} src="/1.png" alt='Blogin_Logo' />
        <Image className={styles.icon} height={20} width={20} src="/2.png" alt='Blogin_Logo' />
        <Image className={styles.icon} height={20} width={20} src="/3.png" alt='Blogin_Logo' />
        <Image className={styles.icon} height={20} width={20} src="/4.png" alt='Blogin_Logo' />
      </div>
    </div>
  )
}

export default Footer
