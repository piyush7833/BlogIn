import React from 'react'
import styles from './page.module.css'
import Image from 'next/image'
import Link from 'next/link'
export const metadata = {
  title: 'BlogIn | Blogs',
  description: 'This is th description',
}
async function getData() {
  const res = await fetch('http://localhost:3000/api/posts',
  // { cache: 'force-cache' },  //it stores cache and never revaildate
  // { next: { revalidate: 3600 } } //it revaildate data in every 10second
  { cache: 'no-store' } //it never stores data //and revalidate in every reload
  ) 
  if (!res.ok) {
    throw new Error('Failed to fetch data')
  }
  // console.log(res.json());
  return res.json()
}

const Blog = async() => {
  const data=await getData();
  return (
      <div className={styles.mainContainer}>
        {data.map((item)=>
        <Link href={`/blog/${item._id}`} className={styles.container} key={item.id}>
          <div className={styles.imageContainer}>
            <Image
              src={item.img}
              alt=""
              width={400}
              height={250}
              className={styles.image}
            />
          </div>
          <div className={styles.content}>
            <h1 className={styles.title}>{item.title}</h1>
            <p className={styles.desc}>{item.desc}</p>
          </div>
        </Link>
        )}
    </div>
  )
}

export default Blog
