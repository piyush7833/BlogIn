import React from 'react'
import styles from './btn.module.css'
import Link from 'next/link'
const Btn = ({text,url}) => {
  return (
    <Link href={url}>
    <button className={styles.btn}>{text}</button>
    </Link>
  )
}

export default Btn
