import styles from "./menu.module.css";
import { NavLink } from "react-router-dom";
import { ReactComponent as Plus } from "../../images/plus.svg";

export default function Menu({ active, setActive, isActive, setIsActive }) {
  const toggleMenu = () => (setActive(false), setIsActive(false));
  return (
    <div
      className={active ? styles.menuActive : styles.menu}
      onClick={() => toggleMenu()}
    >
      <div className={styles.blur}>
        <div className={styles.line}>
          <div className={styles.lineLeft}></div>
          <div className={styles.lineRight}></div>
        </div>
        <div
          className={styles.menuContent}
          onClick={(e) => e.stopPropagation()}
        >
          <ul className={styles.menuList}>
            <li className={styles.menuItem}>
              <NavLink
                to="/"
                exact
                className={styles.menuLink}
                onClick={() => toggleMenu()}
              >
                PROGRAM
              </NavLink>
            </li>
            <li className={styles.menuItem}>
              <NavLink
                to="/"
                exact
                className={styles.menuLink}
                onClick={() => toggleMenu()}
              >
                SPEAKERS
              </NavLink>
            </li>
            <li className={styles.menuItem}>
              <NavLink
                to="/"
                className={styles.menuLink}
                onClick={() => toggleMenu()}
              >
                TICKETS
              </NavLink>
            </li>
            <li className={styles.menuItem}>
              <NavLink
                to="/"
                className={styles.menuLink}
                onClick={() => toggleMenu()}
              >
                SPONSORSHIP
              </NavLink>
            </li>
            <li className={styles.menuItem}>
              <NavLink
                to="/"
                className={styles.menuLink}
                onClick={() => toggleMenu()}
              >
                HUB
              </NavLink>
            </li>
          </ul>
        </div>
        <div className={styles.lineBottom}>
          <div className={styles.lineLeft}></div>
          <div className={styles.lineRight}></div>
        </div>
      </div>
      <div className={styles.crossSection}>
        <div className={styles.crossContainer}>
          <Plus className={styles.cross}/>
        </div>
      </div>
    </div>
  );
}
