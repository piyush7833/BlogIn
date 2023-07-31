import React from 'react'
import styles from './page.module.css'
import Image from 'next/image'
import Btn from '@/components/btn/Btn'
const Dashboard = () => {
  return (
    <div className={styles.container}>
    <div className={styles.imgContainer}>
      
      <Image className={styles.img} src="https://images.pexels.com/photos/8837438/pexels-photo-8837438.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"  alt="team" fill={true }/>  {/* we can use fill property if we not want to give height and width */}

      <div className={styles.imgText}>
        <h1 className={styles.imgTitle}>Digital Story Tellers</h1>
        <h2 className={styles.imgDesc}>Handcrafting award winning digital experiences</h2>
      </div>
       </div>


    <div className={styles.textContainer}> 
    <div className={styles.item1}> 
    <h1 className={styles.itemTitle}>Who are we</h1>
    <p className={styles.itemDesc}>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Repudiandae quis quod neque quasi laboriosam velit minus et hic natus voluptate at rem, cum, omnis eum, porro excepturi dolorem reprehenderit maxime? Voluptate voluptates eveniet ipsam fugiat est debitis, perferendis beatae voluptatibus!
      <br />
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus quam maiores eveniet dolore unde officia aut odio delectus odit nobis. Repellendus culpa cumque vel, nemo amet ducimus vitae rerum nam pariatur accusantium error quam, excepturi, laborum consectetur iste blanditiis est?
    </p>
    </div>


    <div className={styles.item2}> 
    <h1 className={styles.itemTitle}>What we do</h1>
    <p className={styles.itemDesc}>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Repudiandae quis quod neque quasi laboriosam velit minus et hic natus voluptate at rem, cum, omnis eum, porro excepturi dolorem reprehenderit maxime? Voluptate voluptates eveniet ipsam fugiat est debitis, perferendis beatae voluptatibus!
    </p>
      <li>Lorem, ipsum dolor.</li>
      <li>Lorem, ipsum dolor.</li>
      <li>Lorem, ipsum dolor.</li>
    
    <Btn url="/contact" text={"Contact"}/>
    </div>

    </div>
    
      
    </div>
  )
}

export default Dashboard
