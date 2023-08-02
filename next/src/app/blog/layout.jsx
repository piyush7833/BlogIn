import React from 'react'
import styles from './page.module.css'
// by creating this in every blog page we have our blog layout too
const BlogLayout = ({children}) => {
  return (
    <div className={styles.container}>
      {/* <h1>This is blog layout</h1>   */}
      {children}
    </div>
  )
}

export default BlogLayout
