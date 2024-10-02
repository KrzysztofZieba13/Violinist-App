import { Link } from "react-router-dom";
import styles from "./Logo.module.css";

function Logo({ size = 3.2, imgHeight = 4.4 }) {
  return (
    <Link to="/" className={styles.logo} style={{ fontSize: `${size}rem` }}>
      <img
        src="../violinLogo.png"
        alt="Logo skrzypce"
        style={{ height: `${imgHeight}rem` }}
      />
      <span>Karolina Zięba</span>
    </Link>
  );
}

export default Logo;
