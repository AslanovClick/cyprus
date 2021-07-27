import styles from "./sponsors.module.css";
import { ReactComponent as Plus } from "../../images/plusSmall.svg";
import { ReactComponent as Ean } from "../../images/eanSmall.svg";
import  SponsorsSm  from "../../images/sMin.png";
import  SponsorsBg  from "../../images/sBig.png";
import Lines from "../../images/lines.png";


export default function Sponsors({ticketsList}) {
  return (
      <>
      <div className={styles.container}>
<div className={styles.sponsors}>
<div className={styles.plusContainer}>
<div className={styles.plus}>
    <Plus/>
</div>
<div className={styles.plus}>
    <Plus/>
</div>
</div>
<span className={styles.titlle}>sponsors</span>
    <div className={styles.sponsorsContainer}>
         <div className={styles.sponsorBox}>
         <img className={styles.sponsorIconMin} src={SponsorsSm} alt="Server"></img>
         <img className={styles.sponsorIconBig} src={SponsorsBg} alt="Server"></img>
        </div>
        <div className={styles.question}>
        want to become a sponsor?
        <button className={styles.buttonHide} type='button'>
                    fill out this form
                  </button>
        </div>
                  <button className={styles.button} type='button'>
                    fill out this form
                  </button>
    </div>
</div>
    </div>
<img className={styles.lines} src={Lines} alt="lines"></img>
</>
  );
}
