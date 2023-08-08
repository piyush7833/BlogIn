import Image from 'next/image'
import styles from './page.module.css'
import Hero from '../../public/hero.png' //if we import images like this then we need not to give height and width    //by default next js not support any external domain acess we need to configure it
import Btn from '../components/btn/Btn'

export default function Home() {
  return (
    <div className={styles.container}>
      <div className={styles.textContainer}>
        <h1 className={styles.title}>Better design for your digital products.</h1>
        <p className={styles.desc}>Turning your idea into reality. We bring together the teams from global tech industry</p>
        <Btn url="/portfolio" text={"See our works"}/>
      </div>


      <div className={styles.imgContainer}>
        <Image className={styles.img}  src={Hero} />
      </div>
    </div>
  )
}
