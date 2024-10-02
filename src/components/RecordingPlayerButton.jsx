import { PlayCircle } from "@phosphor-icons/react";
import styles from "./RecordingPlayerButton.module.css";

function RecordingPlayerButton() {
  return (
    <div className={styles.button}>
      <div className={styles.playButton}>
        <PlayCircle size={32} color="#fff" />
      </div>
      <img src="../violinist-video.jpg" alt="zdjęcie z filmu granego utworu" />
    </div>
  );
}

export default RecordingPlayerButton;
