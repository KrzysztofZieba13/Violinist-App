import PageNav from "./PageNav";
import styles from "./RecordingQuoteNav.module.css";

function RecordingQuoteNav() {
  return (
    <div className={styles.content}>
      <div>
        <p className={styles.quote}>“Muzyka to najsilniejsza forma magii”</p>
        <p className={styles.quoteAuthor}>Marilyn Manson</p>
      </div>
      <div>
        <PageNav />
      </div>
    </div>
  );
}

export default RecordingQuoteNav;
