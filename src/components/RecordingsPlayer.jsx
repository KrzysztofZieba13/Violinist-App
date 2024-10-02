import Button from "./Button";
import RecordingPlayerButton from "./RecordingPlayerButton";
import styles from "./RecordingsPlayer.module.css";
import RecordingsPlayerBox from "./RecordingsPlayerBox";

function RecordingsPlayer() {
  return (
    <div className={styles.content}>
      <RecordingsPlayerBox textValue="Przykładowe wykonania utworów można zobaczyć na moim kanale YouTube">
        <Button size={1.4}>Odsluchaj utwory</Button>
      </RecordingsPlayerBox>
      <RecordingsPlayerBox
        textValue="Każdy utwór wykonuję z dbałością o każdą emocję w nim zawartą,
          starając się oddać jego najgłębsze przesłanie i poruszyć słuchaczy na
          każdym poziomie."
      >
        <RecordingPlayerButton />
      </RecordingsPlayerBox>
    </div>
  );
}

export default RecordingsPlayer;
