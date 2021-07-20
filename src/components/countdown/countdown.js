import styles from "./countdown.module.css";

export default function Countdown() {
  return (
<div className={styles.timerContainer}>
    <div className={styles.timer}>
        <div>
            <p className={styles.timerTime}>10</p>
            <p className={styles.date}>Days</p>
        </div>
        <span className={styles.timerTime}>:</span>
        <div>
            <p className={styles.timerTime}>10</p>
            <p className={styles.date}>Hours</p>
        </div>
        <span className={styles.timerTime}>:</span>
        <div>
            <p className={styles.timerTime}>10</p>
            <p className={styles.date}>Minutes</p>
        </div>
        <span className={styles.timerTime}>:</span>
        <div>
            <p className={styles.timerTime}>10</p>
            <p className={styles.date}>Seconds</p>
        </div>
    </div>
</div>
  );
}
