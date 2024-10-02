import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import PageNav from "../components/PageNav";
import RepertoireAccordionBox from "../components/RepertoireAccordionBox";
import RepertoireImagesBox from "../components/RepertoireImagesBox";
import styles from "./Repertoire.module.css";
import { debounce } from "lodash";

function Repertoire() {
  const navigate = useNavigate();

  useEffect(() => {
    // Deklaracja handleWheel
    const handleWheel = debounce((e) => {
      console.log(e);

      if (e.deltaY < 0) navigate("/nagrania");
      else if (e.deltaY > 0) navigate("/kontakt");
    }, 300);

    document.addEventListener("wheel", handleWheel);
    console.log("homepage");

    // Funkcja czyszcząca
    return () => {
      document.removeEventListener("wheel", handleWheel);
    };
  }, [navigate]);

  return (
    <div className={styles.repertoire}>
      <RepertoireAccordionBox />
      <RepertoireImagesBox />
      <PageNav />
    </div>
  );
}

export default Repertoire;
