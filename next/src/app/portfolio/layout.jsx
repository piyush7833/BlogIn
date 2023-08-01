import React from 'react'
import styles from './page.module.css'
const Layout = ({children}) => {
  return (
    <div>
      <h1 className={styles.mainTitle}>Our Works</h1> 
      {children}
      {/* it will be on pages of portfolio as it is in layout */}
    </div>
  )
}

export default Layout
