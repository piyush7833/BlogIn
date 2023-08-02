"use client"
import React from 'react'
import styles from './page.module.css'
import Image from 'next/image'
import { useContext } from 'react' 
import { ThemeContext } from '../../../context/themeContext/ThemeContext'
const Footer = () => {
  const { toggle,mode } = useContext(ThemeContext);
  return (
    <div className={styles.container} style={mode==="light"?{background:"#f5f5f4",color:"black"}:{backgroundColor: "rgb(24, 23, 23)",color:"white"}}>
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
