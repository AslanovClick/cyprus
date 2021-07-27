import { useState } from "react";
import styles from "./tracks.module.css";
import traksList from './tracksList';
import { ReactComponent as Download } from "../../images/download.svg";
import { ReactComponent as When } from "../../images/when.svg";
import { ReactComponent as Where } from "../../images/where.svg";
import Lines from "../../images/lines.png";

export default function Tracks() {
    const [current, setCurrent]=useState(0);
    const length = traksList.length;

    const currentSlide =(index)=>{
        setCurrent(index)
        console.log('current',current)
    }
  return (
    <div className={styles.tracksContainer}>
      <div className={styles.titleContainer}>
        <h2 className={styles.title}>
          other <br></br> tracks
        </h2>
        <div className={styles.download}>
          <Download className={styles.icon} />
          <span>75% of the forum</span>
        </div>
      </div>
   <div className={styles.slider}>
  <div className={styles.sliderTitle}>
  {traksList.map((slide, index)=>{
           return(
           <div className={index===current ? (styles.variantTitleActive):(styles.variantTitle)} onClick={()=>currentSlide(index)} key={index}>
            <span >{slide.title}</span>
          </div>)
       })}
  </div>
{traksList.map((slide, index)=>{
    return(
        // <div className={styles.variant}>
        <div className={index===current? (styles.variantActive):(styles.variant)} key={index}>
        {index === current &&(
            <>
            {/* <div className={styles.variantTitle}>
          <span onClick={()=>currentSlide(index)}>{slide.title}</span>
        </div> */}
        <div className={styles.info}>
 <div className={styles.infoContainerTitle}>
              {/* //when */}
              <div className={styles.variantContant}>
            <div className={styles.whenContainer}>
              <div className={styles.when}>
                <When className={styles.whenIcon} />
                <span className={styles.whenTitle}> when</span>
              </div>
              <div className={styles.whenDate}>{slide.when}</div>
            </div>
            <div className={styles.line}>
              <div className={styles.lineLeft}></div>
              <div className={styles.lineRight}></div>
            </div>
          </div>

          {/* //where */}
          <div className={styles.variantContant}>
            <div className={styles.whenContainer}>
              <div className={styles.when}>
                <Where className={styles.whenIcon} />
                <span className={styles.whenTitle}> where</span>
              </div>
              <div className={styles.whenDate}>
                {slide.where}
              </div>
            </div>
            <div className={styles.line}>
              <div className={styles.lineLeft}></div>
              <div className={styles.lineRight}></div>
            </div>
          </div>
 </div>
            {/* <div className={styles.lineBox}>
              <div className={styles.lineLeftBox}></div>
              <div className={styles.lineRightBox}></div>
            </div> */}
          <div className={styles.trackInfoContainer}>
          <div className={styles.lineBox}>
              <div className={styles.lineLeftBox}></div>
              <div className={styles.lineRightBox}></div>
            </div>
    <div className={styles.trackContent}>
    <span className={styles.bigNumber}>
              {slide.timeStart}<span className={styles.smallNumber}>{slide.periodStart}</span> {slide.timeEnd}
              <span className={styles.smallNumber}>{slide.periodEnd}</span>
            </span>
            <div className={styles.trackInfo}>{slide.name}</div>
    </div>
          </div>
        </div>
            </>
        )}
      </div>
    )
})}
   </div>
<img className={styles.lines} src={Lines} alt='lines'></img>

    </div>
  );
}
