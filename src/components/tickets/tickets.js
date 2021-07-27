import { useState } from "react";
import Ticket from './ticket';
import styles from "./tickets.module.css";
import Lines from "../../images/lines.png";
// import { relocate, mlTrack, investorsDay, allAccess } from "./ticketsList";
// import ticketsList from "./ticketsList";
import ticketsList from "./ticketsList.json";

import Angle from "../../images/angle.png";

export default function Tickets() {
  return (
    <div className={styles.tecketsContainer}>
      <h2 className={styles.title}>Tickets</h2>
      <div className={styles.formTitle}>
        Check the boxes that apply to your interests, and our AI assistant will
        find the optimal ticket for you
        <div className={styles.lineTop}>
          <div className={styles.lineLeft}></div>
          <div className={styles.lineRight}></div>
        </div>
      </div>
      <form className={styles.form}>
        <img className={styles.angle} src={Angle} alt="decoration"></img>
        <div>
          <label className={styles.label}>
            <input className={styles.checkBox} type="checkbox" id="check1" />
            <span className={styles.checkboxIcon}></span>
            <span className={styles.input}>Relocation to Cyprus</span>
          </label>
          <label className={styles.label}>
            <input className={styles.checkBox} type="checkbox" id="check2" />
            <span className={styles.checkboxIcon}></span>
            <span className={styles.input}>Investments in Technology</span>
          </label>
          <label className={styles.label}>
            <input className={styles.checkBox} type="checkbox" id="check3" />
            <span className={styles.checkboxIcon}></span>
            <span className={styles.input}>Networking</span>
          </label>
        </div>
        <div>
          <label className={styles.label}>
            <input className={styles.checkBox} type="checkbox" id="check4" />
            <span className={styles.checkboxIcon}></span>
            <span className={styles.input}>ML / AI</span>
          </label>
          <label className={styles.label}>
            <input className={styles.checkBox} type="checkbox" id="check5" />
            <span className={styles.checkboxIcon}></span>
            <span className={styles.input}>
              Socialising: Afterparty / Day by the lake
            </span>
          </label>
          <label className={styles.label}>
            <input className={styles.checkBox} type="checkbox" id="check6" />
            <span className={styles.checkboxIcon}></span>
            <span className={styles.input}>Longevity &Wellbeing</span>
          </label>
        </div>
      </form>
      <Ticket ticketsList={ticketsList}/>
      <img className={styles.lines} src={Lines} alt="lines"></img>
    </div>
  );
}
