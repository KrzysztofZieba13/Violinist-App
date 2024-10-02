import styles from "./RepertoireImagesBox.module.css";

function RepertoireImagesBox() {
  return (
    <div className={styles.images}>
      <div className={styles.imageBox}>
        <img src="../repertoire-violinist-1.jpg" alt="zdjęcie skrzypaczki" />
      </div>
      <div className={styles.imageBox}>
        <img
          src="../repertoire-violinist-2.jpg"
          alt="drugie zdjęcie skrzypaczki"
        />
      </div>
      <div className={styles.imageBox}>
        <img src="../repertoire-violinist-3.jpg" alt="zdjęcie zespołu" />
      </div>
    </div>
  );
}

export default RepertoireImagesBox;
