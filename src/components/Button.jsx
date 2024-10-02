import styles from "./Button.module.css";

function Button({ size = 1.2, link = "/", children }) {
  return (
    <a href={link} className={styles.button} style={{ fontSize: `${size}rem` }}>
      {children}
    </a>
  );
}

export default Button;
