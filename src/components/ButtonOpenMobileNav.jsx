import styles from "./ButtonOpenMobileNav.module.css";
import { List } from "@phosphor-icons/react";

function ButtonOpenMobileNav({ setIsMobileNavOpen }) {
  return (
    <div
      className={styles.hamburgerBtn}
      onClick={() => setIsMobileNavOpen((is) => !is)}
    >
      <List size={32} weight="thin" color="#603f26" />
    </div>
  );
}

export default ButtonOpenMobileNav;
