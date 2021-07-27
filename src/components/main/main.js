import styles from "./main.module.css";
import AngleMid from "../../images/anglemid.png";
import Angle from "../../images/anglebig.png";
import AngleWhite from "../../images/angleWhite.png";
import CountDown from '../countdown/countdown';
import { ReactComponent as Ean } from "../../images/ean.svg";
import Lines from "../../images/lines.png";
import { ReactComponent as Plus } from "../../images/plus.svg";




export default function Main() {
  return (
    <div className={styles.container}>
      <div className={styles.mainContainer}>
        <div className={styles.headerTextContainerOne}>the hum2n</div>
        <div className={styles.mainTextJoinSection}>
          f2ce of m2ch1ne
          <img
            className={styles.ungleJoinRight}
            src={Angle}
            alt="decoration"
          ></img>
          <img
            className={styles.ungleJoinLeftTop}
            src={Angle}
            alt="decoration"
          ></img>
        </div>
        <div className={styles.headerTextContainerTwo}>
          f2ce of
          <img
            className={styles.ungleRightTop}
            src={Angle}
            alt="decoration"
          ></img>
          <img
            className={styles.ungleRightBottom}
            src={Angle}
            alt="decoration"
          ></img>
        </div>
        <div className={styles.headerTextRightContainerThree}>
          m2ch1ne
          <img
            className={styles.ungleLeftTop}
            src={Angle}
            alt="decoration"
          ></img>
          <img
            className={styles.ungleLeftBottom}
            src={AngleMid}
            alt="decoration"
          ></img>
        </div>
        <div className={styles.headerTextContainerFour}>
          learn1ng...
          <img
            className={styles.ungleRightLast}
            src={AngleMid}
            alt="decoration"
          ></img>
        </div>
        <div className={styles.dateSection}>
        <div className={styles.dateContainer}>
          <div className={styles.date}>October 8-9,</div>
          <div className={styles.dateYear}>2021</div>
          <img
            className={styles.ungleWhite}
            src={AngleWhite}
            alt="decoration"
          ></img>
        </div>
        <div className={styles.plusSection}>
          <div className={styles.plus}>+</div>
          <div className={styles.plus}>+</div>
      </div>
      </div>

      </div>
<div>
    <div className={styles.timerContainer}>
        <h1 className={styles.timerHead}>the conference starts in</h1>
            <div className={styles.countDownContainer}>
            <CountDown />
                <button className={styles.timerBtn} type='button'>
                grab your ticket
                </button>
            </div>
                <div className={styles.line}>
                    <div className={styles.lineLeft}></div>
                    <div className={styles.lineRight}></div>
                </div>
<Ean className={styles.ean}/>
    </div>
  </div>
  <div className={styles.tracksBtn} ><Plus className={styles.tracksBtnPlus}/><span className={styles.tracksBtnText}>other tracks</span></div>
  {/* <button className={styles.tracksBtn} type='button'><span className={styles.tracksBtnPlus}>+</span><span className={styles.tracksBtnText}>other tracks</span></button> */}
<img className={styles.lines} src={Lines} alt='lines'></img>

</div>
  );
}
