import styles from "./RecordingsPlayerBox.module.css";

function RecordingsPlayerBox({ textValue, children }) {
  return (
    <div className={styles.box}>
      <p className={styles.text}>{textValue}</p>
      {children}
    </div>
  );
}

export default RecordingsPlayerBox;
