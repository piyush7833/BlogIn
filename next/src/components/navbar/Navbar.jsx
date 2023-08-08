"use client"
import Link from 'next/link'
import React from 'react'
import ThemeBtn from '../themeBtn/themeBtn'
import styles from './page.module.css'
import { useContext } from 'react'
import { ThemeContext } from '@/context/themeContext/ThemeContext'
import { signOut, useSession } from 'next-auth/react'
const Navbar = () => {
  const session=useSession();
  const links=[
    {
      id:1,
      title:"Home",
      url:'/'
    },
    {
      id:2,
      title:"Portfolio",
      url:'/portfolio'
    },
    {
      id:3,
      title:"Blog",
      url:'/blog'
    },
    {
      id:4,
      title:"About",
      url:'/about'
    },
    {
      id:5,
      title:"Contact",
      url:'/contacts'
    },
    {
      id:6,
      title:"Dashboard",
      url:'/dashboard'
    }
  ]
  const { toggle,mode } = useContext(ThemeContext);
  return (
    <div className={styles.container} style={mode==="light"?{background:"#f5f5f4",color:"black"}:{backgroundColor: "rgb(24, 23, 23)",color:"white"}}>
      <Link href={'/'} className={styles.logo} >BlogIn</Link>
      <div className={styles.links}>
        <ThemeBtn/>
        {links.map((link)=>(
          <Link key={link.id} href={link.url}>{link.title}</Link>
        ))}
      {session.status==="authenticated"?<button className={styles.btn} onClick={signOut}>Logout</button>:""}
      </div>
    </div>
  )
}

export default Navbar
