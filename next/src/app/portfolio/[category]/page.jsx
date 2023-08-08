import React from 'react'
import styles from './page.module.css'
import Image from 'next/image';
import Btn from '@/components/btn/Btn';
import { items } from './data';  //fetching data from our own file
import { notFound } from 'next/navigation';

const getData=async (cat)=>{
    // console.log(cat)
    const data=await items[cat];  //getting items of particular cateogary
    if(data) return data;
    else if(!data) return notFound();
}
const Category = async({ params }) => {
  // console.log(params.category);
  const data=await getData(params.category);
  return (
    <div className={styles.container}>
      <h1 className={styles.cateogry}>{params.category}</h1>
      {data.map((item)=>
      <div className={styles.items} key={item.id}>
        <div className={styles.content}>
          {/* <div className={styles.textContainer}> */}
            <div className={styles.title}>{item.title}</div>
            <div className={styles.desc}>{item.desc}</div>
            <Btn url="" text="See More" />
          </div>
          <div className={styles.imgContainer}>
            <Image className={styles.img} src={item.image} fill={true} alt='img' />
            {/* {console.log(item.image)} */}
          </div>
        </div>
        )}

    </div>
  )
}

export default Category
