import React from 'react'
import styles from './page.module.css'
import Image from 'next/image';
import Btn from '@/components/btn/Btn';
const Category = ({ params }) => {
  console.log(params);
  return (
    <div className={styles.container}>
      <h1 className={styles.cateogry}>{params.category}</h1>
      <div className={styles.items}>
        <div className={styles.content}>
          {/* <div className={styles.textContainer}> */}
            <div className={styles.title}>Test</div>
            <div className={styles.desc}>Desc</div>
            <Btn url="" text="See More" />
          </div>
          <div className={styles.imgContainer}>
            <Image className={styles.img} src="https://images.pexels.com/photos/3912979/pexels-photo-3912979.jpeg?auto=compress&cs=tinysrgb&w=600" fill={true} alt='img' />
          </div>
        </div>
      {/* </div> */}
      <div className={styles.items}>
        <div className={styles.content}>
          {/* <div className={styles.textContainer}> */}
            <div className={styles.title}>Test</div>
            <div className={styles.desc}>Desc</div>
            <Btn url="" text="See More" />
          </div>
          <div className={styles.imgContainer}>
            <Image className={styles.img} src="https://images.pexels.com/photos/3912979/pexels-photo-3912979.jpeg?auto=compress&cs=tinysrgb&w=600" fill={true} alt='img' />
          </div>
        </div>
      {/* </div> */}
      <div className={styles.items}>
        <div className={styles.content}>
          {/* <div className={styles.textContainer}> */}
            <div className={styles.title}>Test</div>
            <div className={styles.desc}>Desc</div>
            <Btn url="" text="See More" />
          </div>
          <div className={styles.imgContainer}>
            <Image className={styles.img} src="https://images.pexels.com/photos/3912979/pexels-photo-3912979.jpeg?auto=compress&cs=tinysrgb&w=600" fill={true} alt='img' />
          </div>
        </div>
      {/* </div> */}
    </div>
  )
}

export default Category
