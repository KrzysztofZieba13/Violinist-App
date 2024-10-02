import { Link } from "react-router-dom";
import styles from "./HomepageContent.module.css";

function HomepageContent() {
  return (
    <div className={styles.content}>
      <h1 className={styles.title}>
        Skrzypce na ślub
        <br />i inne uroczystości
      </h1>
      <div className={styles.textBox}>
        <p className={styles.text}>
          Oprawa muzyczna ceremonii zaślubin i&nbsp;innych uroczystości na
          terenie podkarpacia i&nbsp;małopolski. Współpracuję również
          z&nbsp;zespołem Veloce i&nbsp;wiolonczelą.
        </p>
        <Link to="/kontakt">
          <button className={styles.button}>Zamów oprawę</button>
        </Link>
      </div>
    </div>
  );
}

export default HomepageContent;
