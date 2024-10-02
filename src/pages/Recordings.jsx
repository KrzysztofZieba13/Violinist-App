import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import RecordingsContent from "../components/RecordingsContent";
import styles from "./Recordings.module.css";
import { debounce } from "lodash";

function Recordings() {
  const navigate = useNavigate();

  useEffect(() => {
    const handleWheel = debounce((e) => {
      if (e.deltaY < 0) navigate("/");
      else if (e.deltaY > 0) navigate("/repertuar/klasyczne-slub-koscielny");
    }, 300);

    document.addEventListener("wheel", handleWheel);

    return () => {
      document.removeEventListener("wheel", handleWheel);
    };
  }, [navigate]);

  return (
    <div className={styles.recordings}>
      <RecordingsContent />
    </div>
  );
}

export default Recordings;
