import styles from "./video.module.css";
import Video from '../../images/video/seeHowItWas.mp4'



export default function Vidoe() {
  return (

   <video className={styles.video} controls >
      <source src={Video} type="video/mp4"/>
</video>

  )
}
