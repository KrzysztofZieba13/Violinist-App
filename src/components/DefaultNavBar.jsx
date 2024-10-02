import styles from "./DefaultNavBar.module.css";

function DefaultNavBar({ children }) {
  return <div className={styles.defaultNavBar}>{children}</div>;
}

export default DefaultNavBar;
