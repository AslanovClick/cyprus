import { useState } from "react";
import styles from "./peopleSay.module.css";
import Lines from "../../images/lines.png";
import peopleSayList from './peopleSayList';
import { ReactComponent as Plus } from "../../images/plusSmall.svg";
import AngleWhite from "../../images/angleWhite.png";


export default function PeopleSay() {
    const [current, setCurrent]=useState(0);
    const length = peopleSayList.length;

    // const currentSlide =(index)=>{
    //     setCurrent(index)
    //     console.log('current',current)
    // }

    const nextSlide =()=>{
        setCurrent(current === length -1? 0: current +1 )
    }
    const prevSlide =()=>{
        setCurrent(current === 0? length -1: current -1 )
    }

  return (
      <div className={styles.speakersContainer}>
          <h2 className={styles.title}>what people say</h2>
  <div >
{peopleSayList.map((speaker,index)=>{
            return(
          <div className={index===current? (styles.variantActive):(styles.variant)} key={index}>
           {index === current &&
           (
                        <div className={styles.speakerWrapper}>
                        <div className={styles.photoContainer}>
                        <img className={styles.photo} src={Object.values(speaker.photo)[0]}></img>
                       <span className={styles.name}>{speaker.name}</span>
                        </div>
                            <div className={styles.wrapper}>
                                <span className={styles.nameDesktop}>{speaker.name}</span>
                                <div className={styles.info} >{speaker.info}</div>
                                <div className={styles.plusContainer}>
                                <Plus/>
                                </div>
                            </div>
                    </div>
           )}
                
          </div>
            )
        })}
            <div className={styles.infoFooter}>
            <div className={styles.lineTop}>
                    <div className={styles.lineLeft}></div>
                    <div className={styles.lineRight}></div>
                </div>
                        vp of strategy
                        <img
            className={styles.ungleWhite}
            src={AngleWhite}
            alt="decoration"
          ></img>
                    </div>
       <div className={styles.arrowContainer}>
       <div className={styles.arrow} onClick={prevSlide}>
            <p className={styles.arrowLeft}> </p>
        </div>
       <div className={styles.arrow} onClick={nextSlide}>
            <p className={styles.arrowRight}> </p>
        </div>     
 
       </div>
    
</div>

<img className={styles.lines} src={Lines} alt='lines'></img>
</div>
  )
}
