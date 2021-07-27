import styles from "./supports.module.css";
import LogosMin from "../../images/logosMin.png";
import LogosMid from "../../images/logosMid.png";
import LogosBig from "../../images/logosBig.png";


export default function Supports() {
  return (
      <div className={styles.container}>
          <h2 className={styles.title}>
          supporters
& media partners
          </h2>
         <img className={styles.logosMin} src={LogosMin}></img>
         <img className={styles.logosMid} src={LogosMid}></img>
         <img className={styles.logosBig} src={LogosBig}></img>

      </div>

    

  );
}
