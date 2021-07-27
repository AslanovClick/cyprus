import React, { useState } from "react";
import { ReactComponent as Logo } from "../../images/logo.svg";
import Menu from "../menu/menu";
import styles from "./header.module.css";
import { HamburgerSpin } from "react-animated-burgers";
import { ReactComponent as Arrow } from "../../images/arrow.svg";
import { ReactComponent as Polygon } from "../../images/polygon.svg";

export default function Header() {
  const [menuActive, setMenuActive] = useState(false);
  const [isActive, setIsActive] = useState(false);

  return (
    <header className={styles.container}>
      <div className={styles.logoContainer}>
        <Logo className={styles.logo} />
        <Polygon className={styles.logoSvg} />
        <div className={styles.logoText}>go to all tracks</div>
      </div>
      <ul className={styles.linksContainer}>
        <li className={styles.link}>
          <a href="#">PROGRAM</a>
        </li>
        <li className={styles.link}>
          <a href="#">SPEAKERS</a>
        </li>
        <li className={styles.link}>
          <a href="#">TICKETS</a>
        </li>
        <li className={styles.link}>
          <a href="#">SPONSORSHIP</a>
        </li>
        <li className={styles.link}>
          <a href="#">HUB</a>
        </li>
      </ul>
      <div className={styles.burgerMenuContainer}>
        <div className={styles.ticketsContainer}>
          <span className={styles.arrowTextHide}>GRAB YOUR</span>
          <span className={styles.arrowText}>TICKETS</span>
          <div className={styles.arrowContainer}>
            <Arrow className={styles.arrow} />
          </div>
        </div>
        <div className={styles.headerContainer}>
          <span className={styles.burgerText}>MENU</span>
          <HamburgerSpin
            className={styles.burgerBtn}
            isActive={isActive}
            buttonStyle={{ backgroundColor: "#FFFFFF", padding: 0 }}
            buttonWidth={20}
            onClick={() => (setMenuActive(!menuActive), setIsActive(!isActive))}
          />
          <Menu
            active={menuActive}
            setActive={setMenuActive}
            isActive={isActive}
            setIsActive={setIsActive}
          />
        </div>
      </div>
    </header>
  );
}
