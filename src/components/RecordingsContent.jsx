import RecordingQuoteNav from "./RecordingQuoteNav";
import styles from "./RecordingsContent.module.css";
import RecordingsPlayer from "./RecordingsPlayer";

function RecordingsContent() {
  return (
    <div className={styles.content}>
      <RecordingsPlayer />
      <img
        src="../recordings.jpg"
        alt="zdjęcie skrzypiec z nutami"
        className={styles.img}
      />
      <RecordingQuoteNav></RecordingQuoteNav>
    </div>
  );
}

export default RecordingsContent;
