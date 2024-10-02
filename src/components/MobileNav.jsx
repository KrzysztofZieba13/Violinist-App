import styles from "./MobileNav.module.css";
import { Link } from "react-router-dom";
import NavLinks from "./NavLinks";
import { X } from "@phosphor-icons/react";

function MobileNav({ isMobileNavOpen, setIsMobileNavOpen }) {
  return (
    <div
      className={`${styles.mobileNav} ${
        isMobileNavOpen ? styles.mobileNavOpen : ""
      }`}
    >
      <div className={styles.closeMobileNav}>
        <X
          size={32}
          weight="thin"
          onClick={() => setIsMobileNavOpen((is) => !is)}
        />
      </div>
      <ul className={styles.mobileNavList}>
        <li className={styles.mobileNavItem}>
          <Link to="/">O mnie</Link>
        </li>
        <li className={styles.mobileNavItem}>
          <Link to="/nagrania">Nagrania</Link>
        </li>
        <li className={styles.mobileNavItem}>
          <Link to="/repertuar/klasyczne-slub-koscielny">Repertuar</Link>
        </li>
        <li className={styles.mobileNavItem}>
          <Link to="/kontakt">Kontakt</Link>
        </li>
        <li className={styles.mobileNavItem}>
          <NavLinks />
        </li>
      </ul>
    </div>
  );
}

export default MobileNav;
