import React from 'react'
import Image from 'next/image'
import styles from './page.module.css'
import {notFound} from 'next/navigation'

async function getData(id) {
  const res = await fetch(`http://localhost:3000/api/posts/${id}`,
  { cache: 'no-store' } //it never stores data //and revalidate in every reload
  ) 
  if (!res.ok) {
    return notFound()
  }
  return res.json()
}

export async function generateMetadata({ params }) {
  const post=await getData(params.id);
  return {
    title: `BlogIn | Blogs | ${post.title}`,
    description: `BlogIn | Blogs | ${post.desc}`,
  }
}


const Post =async ({params}) => {  //in our params we have our id as our slug name is id
  const data=await getData(params.id)
  return (
    <div>
      <div className={styles.container}>
      <div className={styles.top}>
        <div className={styles.info}>
          <h1 className={styles.title}>{data.title}</h1>
          <p className={styles.desc}>
          {data.desc}
          </p>
          <div className={styles.author}>
            <Image
              src={data.img}
              alt=""
              width={40}
              height={40}
              className={styles.avatar}
            />
            <span className={styles.username}>{data.userName}</span>
          </div>
        </div>
        <div className={styles.imageContainer}>
          <Image
            src={data.img}
            alt=""
            fill={true}
            className={styles.image}
          />
        </div>
      </div>
      <div className={styles.content}>
        <p className={styles.text}>
         Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo minima distinctio blanditiis sed veritatis sequi explicabo saepe fugiat doloribus odit illo doloremque excepturi at, earum repellendus aspernatur veniam voluptate eum vitae laborum iusto tempora debitis ducimus. Illum, eveniet asperiores accusamus quae quos dolor necessitatibus fugiat voluptas saepe tempora quibusdam ipsam sed est aliquid culpa cumque doloremque in natus beatae minima. A enim quos, placeat natus itaque reprehenderit eius magnam minima nemo quibusdam, recusandae pariatur maiores. Placeat velit nisi assumenda pariatur fugit ipsam iusto nihil ex rem sit. Itaque reiciendis architecto inventore magni nostrum ut dolorum dolor! Distinctio natus consequatur voluptates.
         <br />
         Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam, ut! Possimus, corrupti nihil eos perspiciatis sunt nam enim temporibus tempora in placeat beatae dolorem! Nobis laudantium enim sunt dolor cupiditate iusto illum. Doloribus vero nemo optio dolorem cum nihil amet sequi libero vel eligendi, quia in doloremque quisquam aspernatur nesciunt?Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corporis voluptatem consequatur explicabo et id ipsum. Nemo at officia asperiores mollitia consequatur rem incidunt voluptates ullam aspernatur blanditiis. Corporis, ut recusandae. Libero, totam commodi quisquam quasi quam at hic delectus sunt blanditiis vitae tempore illum explicabo doloribus! Quia eius nihil dolores?
        </p>
      </div>
    </div>
    </div>
  )
}

export default Post
