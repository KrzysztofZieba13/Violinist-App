import { Link } from "react-router-dom";
import styles from "./PageNavItem.module.css";

function PageNavItem({
  onMouseEnter,
  onMouseOut,
  isActive,
  isHover,
  title,
  number,
  link,
}) {
  return (
    <li
      className={styles.navList}
      onMouseEnter={onMouseEnter}
      onMouseOut={onMouseOut}
    >
      <Link
        to={link}
        className={`${styles.navItem} ${
          isHover !== null && !isActive ? styles.dimmed : ""
        }`}
      >
        <span>{title}</span>
        <span>{number}</span>
      </Link>
    </li>
  );
}

export default PageNavItem;
