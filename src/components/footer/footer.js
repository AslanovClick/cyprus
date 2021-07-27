import styles from "./footer.module.css";
import Icons from "../../images/icons.png";



export default function Footer() {
  return (
      <footer className={styles.footer}>
          <div className={styles.container}>
            <div className={styles.footerInfo}>
                <img className={styles.icons} src={Icons} alt="decoration"></img>
                <span className={styles.info}>to be in the know of all things ml and our unique offers, leave your email here</span>
            </div>
          </div>


      </footer>

    

  );
}
