import React from 'react'
import styles from './page.module.css'
import Btn from '@/components/btn/Btn'
import Image from 'next/image'
export const metadata = {
  title: 'BlogIn | Contacts',
  description: 'This is th description',
}
const Contacts = () => {
  return (
    <div className={styles.container}>
      <div className={styles.title}>
        <h1>Lets Keep in Touch.</h1>
      </div>
      <div className={styles.content}>
        <div className={styles.imgContainer}>
          <Image className={styles.img} src="/contact.png" alt="contact" fill={true}/>
        </div>
        <div className={styles.inputContainer}>
          <input className={styles.input} type="text" name="" placeholder='name' id="" />
          <input className={styles.input} type="text" name="" placeholder='email' id="" />
          <textarea className={styles.textarea} cols={30} rows={10} placeholder='message' />
          <Btn url="" text="Send"/>
        </div>
      </div>
    </div>
  )
}

export default Contacts
