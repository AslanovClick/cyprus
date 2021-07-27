import styles from "./about.module.css";
import { ReactComponent as Download } from "../../images/download.svg";
import AngleWhite from "../../images/angleWhite.png";
import { ReactComponent as When } from "../../images/when.svg";
import { ReactComponent as Where } from "../../images/where.svg";
import { ReactComponent as Check } from "../../images/check.svg";
import { ReactComponent as Star } from "../../images/star.svg";
import { ReactComponent as Cocktail } from "../../images/cocktail.svg";
import { ReactComponent as Party } from "../../images/party.svg";
import { ReactComponent as Swim } from "../../images/swim.svg";
import { ReactComponent as Ean } from "../../images/eanSmall.svg";
import Gif from "../../images/gif.jpg";
import GifMin from "../../images/giMin.jpg";
import Lines from "../../images/lines.png";




export default function About() {

  return (
      <div className={styles.aboutContainer}>
        <div className={styles.downloadContainer}>
       <div className={styles.titleContainer}>
       <h2 className={styles.title}>ml track</h2>
            <div className={styles.download}>
                <Download className={styles.icon}/>
                <span>25% of the forum</span>
            </div>
       </div>
            <div className={styles.infoContainer}>
            <div className={styles.whenContainer}>
          <div className={styles.question}> 
          <div>
          <When className={styles.whenIcon}/>
           when 
           <img
            className={styles.ungleWhite}
            src={AngleWhite}
            alt="decoration"
          ></img>
          </div>
           </div>
          <div className={styles.answer}>
            15 october, <br></br>
            2021 <br></br>
            </div>
    
        </div>
        <div className={styles.whereContainer}>
          <div className={styles.question}> 
          <div>
          <Where className={styles.whenIcon}/>
           where 
           <img
            className={styles.ungleWhiteRight}
            src={AngleWhite}
            alt="decoration"
          ></img>
          </div>
           </div>
          <div className={styles.answer}>
            stunning<br></br>
            parklake hotel,<br></br>
            limassol 
        </div>
    
        </div>
            </div>
        </div>
        <div className={styles.agenda}>
            <Check className={styles.iconCheck}/>
            <span className={styles.wait}>what to expect</span>
        <div className={styles.timeWrapper}>
        <div className={styles.timeContainer}>
                <p className={styles.time}>2—3:20</p>
                <p className={styles.variant}>pm</p>
            </div>
            <div className={styles.information}>registration</div>
        </div>
            <div className={styles.line}>
                    <div className={styles.lineLeft}></div>
                    <div className={styles.lineRight}></div>
                </div>
                <div className={styles.timeWrapper}>
                <div className={styles.timeContainer}>
                    <p className={styles.time}>3:30—7</p>
                    <p className={styles.variant}>pm</p>
            </div>
            <div className={styles.information}>enjoy presentations from industry experts, attend geekly workshops, listen to real–life case studies, learn how ml/ai can help you improve your busienss today</div>
                </div>
        </div>
        <div className={styles.agendaSecond}>
            <Star className={styles.iconCheck}/>
            <span className={styles.wait}>afterparty</span>
        <div className={styles.timeWrapper}>
        <div className={styles.timeContainer}>
                <p className={styles.time}>7:30</p>
                <p className={styles.variant}>pm</p>
            </div>
            <div className={styles.information}>a transfer bus will take you to the legendary guaba beach bar located in the old town</div>
        </div>

        </div>
        <div className={styles.iconContainerWrapper}>
            <div className={styles.iconContainer}>
      <div>
      <div className={styles.iconWrapper}>
            <Cocktail className={styles.iconSvg}/>
         </div>
             <div  className={styles.iconWrapper}>
                 <Party className={styles.iconSvg}/>
             </div>
             <div  className={styles.iconWrapper}>
                 <Swim className={styles.iconSvg}/>
            </div>
            <img
            className={styles.ungleWhiteIcon}
            src={AngleWhite}
            alt="decoration"
          ></img>
      </div>
                <Ean className={styles.ean}/>
            </div>
        </div>
  <img className={styles.gif} src={Gif} alt='gif'></img>
  <img className={styles.gifMin} src={GifMin} alt='gif'></img>
<img className={styles.lines} src={Lines} alt='lines'></img>

      </div>
  );
}
