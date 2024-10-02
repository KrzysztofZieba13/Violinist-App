import { FacebookLogo } from "@phosphor-icons/react";
import Button from "../components/Button";
import styles from "./ContactFooter.module.css";
import PageNav from "../components/PageNav";
import Logo from "../components/Logo";
import NavLinks from "../components/NavLinks";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { debounce } from "lodash";

function Contact() {
  const navigate = useNavigate();

  useEffect(() => {
    const handleWheel = debounce((e) => {
      if (e.deltaY < 0) navigate("/repertuar/klasyczne-slub-koscielny");
    }, 300);

    document.addEventListener("wheel", handleWheel);

    return () => {
      document.removeEventListener("wheel", handleWheel);
    };
  }, [navigate]);

  return (
    <div className={styles.contactFooter}>
      <div className={styles.contact}>
        <img
          className={styles.imgSmall}
          src="../violinist-contact.jpg"
          alt="Skrzypaczka"
        />
        <div className={styles.telephoneBox}>
          <p className={styles.contactTitle}>Telefon</p>
          <p className={styles.contactDetails}>795 789 704</p>
        </div>
        <div className={styles.facebookBox}>
          <p className={styles.contactTitle}>Facebook</p>
          <Button size={1.4}>
            <span className={styles.facebook}>
              Kontakt <FacebookLogo weight="thin" size={24} />
            </span>
          </Button>
        </div>
      </div>
      <footer className={styles.footer}>
        <Logo size={2} imgHeight={3.2} />
        <NavLinks sizeText="1.2" sizeIcon={16} />
        <PageNav />
      </footer>
    </div>
  );
}

export default Contact;
