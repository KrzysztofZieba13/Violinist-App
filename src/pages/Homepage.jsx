import { useEffect } from "react";
import HomepageContent from "../components/HomepageContent";
import PageNav from "../components/PageNav";
import styles from "./Homepage.module.css";
import { useNavigate } from "react-router-dom";
import { debounce } from "lodash";

function Homepage() {
  const navigate = useNavigate();

  useEffect(
    function () {
      const handleWheel = debounce((e) => {
        if (e.deltaY > 0) navigate("/nagrania");
      }, 300);

      document.addEventListener("wheel", handleWheel);

      return () => document.removeEventListener("wheel", handleWheel);
    },
    [navigate]
  );

  return (
    <div className={styles.homepage}>
      <HomepageContent />
      <PageNav bgColor="#fff0d6" />
    </div>
  );
}

export default Homepage;
