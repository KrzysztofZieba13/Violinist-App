import { useNavigate, useParams } from "react-router-dom";
import RepertoireAccordion from "./RepertoireAccordion";
import styles from "./RepertoireAccordionBox.module.css";

function RepertoireAccordionBox() {
  const { panel } = useParams();
  const navigate = useNavigate();

  return (
    <div className={styles.accordionBox}>
      <RepertoireAccordion
        title="Utwory klasyczne na ślub kościelny"
        key="1"
        isOpen={panel === "klasyczne-slub-koscielny"}
        onClick={() => navigate("/repertuar/klasyczne-slub-koscielny")}
      >
        <ul className={styles.textPanel}>
          <li>Canon in D J. Pachelbel</li>
          <li>Marsz Weselny R. Wagner</li>
          <li>Ave Maria F. Schubert</li>
          <li>Te deum Marc-Antoine Charpentier</li>
        </ul>
        <ul className={styles.textPanel}>
          <li>Aria na strunie G J.S.Bach</li>
          <li>Marsz Mendelssohna</li>
          <li>Ave Maria J.S.Bach</li>
          <li>Ave Maria G. Caccini</li>
        </ul>
      </RepertoireAccordion>
      <RepertoireAccordion
        title="Piosenki na ślub kościelny"
        key="2"
        isOpen={panel === "piosenki-slub-koscielny"}
        onClick={() => navigate("/repertuar/piosenki-slub-koscielny")}
      >
        <ul className={styles.textPanel}>
          <li>Schowaj mnie</li>
          <li>Witaj pokarmie</li>
          <li>Unoszę wzrok</li>
          <li>Stoje dziś</li>
          <li>Takie jest prawo miłości</li>
          <li>Wśród tylu dróg</li>
          <li>Ave Maria Jasnogórska</li>
          <li>Oceany</li>
          <li>Chlebie najcichszy</li>
          <li>Ty tylko mnie poprowadź</li>
          <li>Panie proszę przyjdź</li>
          <li>Nic nie musisz</li>
          <li>Ubi caritas</li>
        </ul>
        <ul className={styles.textPanel}>
          <li>Nikt Cie nie kocha tak jak ja</li>
          <li>Jesteśmy piękni</li>
          <li>Miłość doda Wam skrzydeł</li>
          <li>Kiedy serca dwa</li>
          <li>Ofiaruje Tobie Panie mój</li>
          <li>Maryjo śliczna Pani</li>
          <li>Gdy się łączą ręce dwie</li>
          <li>Twoja miłość</li>
          <li>Być bliżej Ciebie chce</li>
          <li>Gdy klęczę przed Tobą</li>
          <li>W kruszynie chleba</li>
          <li>Mamo ty czuwałaś</li>
          <li>Jest na świecie miłość</li>
        </ul>
      </RepertoireAccordion>
      <RepertoireAccordion
        title="Utwory na ślub cywilny"
        key="3"
        isOpen={panel === "slub-cywilny"}
        onClick={() => navigate("/repertuar/slub-cywilny")}
      >
        <ul className={styles.textPanel}>
          <li>Canon in D J. Pachelbel</li>
          <li>Thousand years Christina Perri</li>
          <li>You are the reason Calum Scott</li>
          <li>Can’t help falling in love Elvis Presley</li>
          <li>Wildest dreams Taylor Swift</li>
          <li>Perfect Ed Sheeran</li>
          <li>Love me like you do Ellie Goulding</li>
          <li>Can you feel the love tonight Elton John</li>
        </ul>
        <ul className={styles.textPanel}>
          <li>You raise me up Josh Groban</li>
          <li>Aria na strunie G J.S.Bach</li>
          <li>Marsz Weselny R. Wagner</li>
          <li>I’ll be there for you The Rembrandts</li>
          <li>Ave Maria F.Schubert</li>
          <li>Ave Maria J.S.Bach</li>
          <li>Marsz Mendelssohna</li>
        </ul>
      </RepertoireAccordion>
      <RepertoireAccordion
        title="Utwory na pogrzeb"
        key="4"
        isOpen={panel === "pogrzeb"}
        onClick={() => navigate("/repertuar/pogrzeb")}
      >
        <ul className={styles.textPanel}>
          <li>Ave Maria G. Caccini</li>
          <li>Adagio Albinoni Giazotto</li>
          <li>Być bliżej Ciebie chce</li>
        </ul>
        <ul className={styles.textPanel}>
          <li>Aria na strunie G J.S.Bach</li>
          <li>Barka</li>
          <li>Ave Maria J.S.Bach</li>
        </ul>
      </RepertoireAccordion>
    </div>
  );
}

export default RepertoireAccordionBox;
