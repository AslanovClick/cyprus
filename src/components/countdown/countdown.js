import { useState, useRef, useEffect } from "react";
import styles from "./countdown.module.css";

export default function Countdown() {
    const [timerDays, setTimerDays] = useState('00')
    const [timerHours, setTimerHours] = useState('00')
    const [timerMinutes, setTimerMinutes] = useState('00')
    const [timerSeconds, setTimerSeconds] = useState('00')

    let interval = useRef();

    const startTimer =()=>{
        const countDownDate = new Date('October 8 2021 00:00:00').getTime();
        interval = setInterval(()=>{
            const now = new Date().getTime();
            const distance = countDownDate - now;

            const days = Math.floor(distance/(1000*60*60*24));
            const hours = Math.floor((distance%(1000*60*60*24)/(1000*60*60)));
            const minutes = Math.floor((distance%(1000*60*60))/(1000*60));
            const seconds = Math.floor((distance%(1000*60))/1000);

            if(distance<0){
                //stop timer
                clearInterval(interval.current)
            } else{
                //update timer
                setTimerDays(days);
                setTimerHours(hours);
                setTimerMinutes(minutes);
                setTimerSeconds(seconds);
            }

        },1000)
    }

useEffect(()=>{ 
    startTimer();
    return()=>{
    clearInterval(interval.current)
}})

  return (
<div className={styles.timerContainer}>
    <div className={styles.timer}>
        <div>
            <p className={styles.timerTime}>{timerDays}</p>
            <p className={styles.date}>Days</p>
        </div>
        <span className={styles.timerTime}>:</span>
        <div>
            <p className={styles.timerTime}>{timerHours}</p>
            <p className={styles.date}>Hours</p>
        </div>
        <span className={styles.timerTime}>:</span>
        <div>
            <p className={styles.timerTime}>{timerMinutes}</p>
            <p className={styles.date}>Minutes</p>
        </div>
        <span className={styles.timerTime}>:</span>
        <div>
            <p className={styles.timerTime}>{timerSeconds}</p>
            <p className={styles.date}>Seconds</p>
        </div>
    </div>
</div>
  );
}
