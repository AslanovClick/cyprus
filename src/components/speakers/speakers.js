import { useState } from "react";
import styles from "./speakers.module.css";
import Lines from "../../images/lines.png";
import speakerList from './speakersList'
import { ReactComponent as Ean } from "../../images/eanWhite.svg";
import { ReactComponent as Avatar } from "../../images/avatar.svg";
import { ReactComponent as Plus } from "../../images/plusCircle.svg";
import Angle from "../../images/anglebig.png";


export default function Tracks() {
    const [current, setCurrent]=useState(0);
    const length = speakerList.length;

    const currentSlide =(index)=>{
        setCurrent(index)
        console.log('current',current)
    }

    const nextSlide =()=>{
        setCurrent(current === length -1? 0: current +1 )
    }
    const prevSlide =()=>{
        setCurrent(current === 0? length -1: current -1 )
    }

  return (
      <div className={styles.speakersContainer}>
          <h2 className={styles.title}>speakers</h2>
{/* //mobile version */}
  <div className={styles.mobile}>
{speakerList.map((speaker,index)=>{
            // console.log('photo', Object.values(speaker.photo)[0])
            return(
          <div className={index===current? (styles.variantActive):(styles.variant)} key={index}>
           {index === current &&
           (
                        <div className={styles.speakerWrapper} >
                        <div className={styles.photoContainer}>
                        <img className={styles.photo} src={Object.values(speaker.photo)[0]}></img>
                       <div className={styles.line}></div>
                        </div>
                      <div className={styles.nameContainer}>
                      <span className={styles.name}>{speaker.name}</span>
                        <div className={styles.position}>{speaker.position}</div>
                      </div>
                    </div>
           )}
          </div>
            )
        })}
       <div className={styles.arrowContainer}>
       <div className={styles.arrow} onClick={prevSlide}>
            <p className={styles.arrowLeft}> </p>
        </div>
       <div className={styles.arrow} onClick={nextSlide}>
            <p className={styles.arrowRight}> </p>
        </div>     
 
       </div>
</div>
{/* //desktop version */}
<div className={styles.desktop}>
{speakerList.map((speaker,index)=>{
            return(
          <div className={styles.desktopVariant} key={index}>
      
                        <div className={styles.speakerWrapper} >
                        <div className={styles.photoContainer}>
                        <img className={styles.photo} src={Object.values(speaker.photo)[0]}></img>
                       <div className={styles.line}></div>
                        </div>
                      <div className={styles.nameContainer}>
                      <span className={styles.name}>{speaker.name}</span>
                        <div className={styles.position}>{speaker.position}</div>
                      </div>
                    </div>
           
          </div>
            )
        })}
</div>
<div className={styles.speakersSign}>
<div className={styles.form}>
                want to share your wisdom?
                <button className={styles.btnDesktop} type='button'>fill out this form</button>
            </div>
            <Ean className={styles.ean}/>
            <div className={styles.iconContainer}>
                <Avatar className={styles.icon}/>
                <Plus className={styles.icon}/>
                <img
            className={styles.ungleRightBottom}
            src={Angle}
            alt="decoration"
          ></img>
            </div>
            <button className={styles.btn} type='button'>fill out this form</button>
</div>

<img className={styles.lines} src={Lines} alt='lines'></img>

     </div>
  )
}
