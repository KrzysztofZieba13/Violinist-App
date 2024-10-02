import PageNavItem from "./PageNavItem";
import styles from "./PageNav.module.css";
import { useState } from "react";
import { useHref } from "react-router-dom";

function PageNav({ bgColor = "" }) {
  const [fadeElement, setFadeElement] = useState(null);
  const hrefValue = useHref();

  function handleMouseEnter(el) {
    setFadeElement(el);
  }

  return (
    <nav className={styles.pageNav} style={{ backgroundColor: bgColor }}>
      <ul className={styles.pageNavList}>
        <PageNavItem
          onMouseEnter={() => handleMouseEnter(1)}
          onMouseOut={() => setFadeElement(null)}
          link="/"
          title="O mnie"
          number="01"
          isActive={fadeElement === 1}
          isHover={fadeElement}
        />
        {hrefValue === "/" && (
          <div
            className={`${styles.line} ${
              fadeElement !== null ? styles.dimmedLine : ""
            }`}
          ></div>
        )}
        <PageNavItem
          onMouseEnter={() => handleMouseEnter(2)}
          onMouseOut={() => setFadeElement(null)}
          link="/nagrania"
          title="Nagrania"
          number="02"
          isActive={fadeElement === 2}
          isHover={fadeElement}
        />
        {hrefValue === "/nagrania" && (
          <div
            className={`${styles.line} ${
              fadeElement !== null ? styles.dimmedLine : ""
            }`}
          ></div>
        )}
        <PageNavItem
          onMouseEnter={() => handleMouseEnter(3)}
          onMouseOut={() => setFadeElement(null)}
          link="/repertuar/klasyczne-slub-koscielny"
          title="Repertuar"
          number="03"
          isActive={fadeElement === 3}
          isHover={fadeElement}
        />
        {hrefValue.includes("/repertuar") && (
          <div
            className={`${styles.line} ${
              fadeElement !== null ? styles.dimmedLine : ""
            }`}
          ></div>
        )}
        <PageNavItem
          onMouseEnter={() => handleMouseEnter(4)}
          onMouseOut={() => setFadeElement(null)}
          link="/kontakt"
          title="Kontakt"
          number="04"
          isActive={fadeElement === 4}
          isHover={fadeElement}
        />
        {hrefValue === "/kontakt" && (
          <div
            className={`${styles.line} ${
              fadeElement !== null ? styles.dimmedLine : ""
            }`}
          ></div>
        )}
      </ul>
    </nav>
  );
}

export default PageNav;
