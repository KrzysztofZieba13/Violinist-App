import { useState } from "react";
import {
  ArrowSquareOut,
  FacebookLogo,
  YoutubeLogo,
} from "@phosphor-icons/react";
import NavLinkItem from "./NavLinkItem";
import styles from "./NavLinks.module.css";

function NavLinks({ sizeIcon = 24, sizeText = 1.6 }) {
  const [fadeElement, setFadeElement] = useState(null);

  function handleFadeInMenu(el) {
    setFadeElement(el);
  }

  function handleFadeOutMenu() {
    setFadeElement(null);
  }

  return (
    <ul className={styles.list}>
      <NavLinkItem
        linkAddress="https://www.facebook.com/profile.php?id=100069111305788"
        size={sizeText}
        onMouseEnter={() => handleFadeInMenu(1)}
        onMouseLeave={handleFadeOutMenu}
        isActive={fadeElement === 1}
        isHover={fadeElement}
      >
        Zespół Veloce <ArrowSquareOut size={sizeIcon} weight="light" />
      </NavLinkItem>
      <NavLinkItem
        linkAddress="#"
        onMouseEnter={() => handleFadeInMenu(2)}
        onMouseLeave={handleFadeOutMenu}
        isActive={fadeElement === 2}
        isHover={fadeElement}
      >
        <FacebookLogo size={sizeIcon} weight="light" />
      </NavLinkItem>
      <NavLinkItem
        linkAddress="#"
        onMouseEnter={() => handleFadeInMenu(3)}
        onMouseLeave={handleFadeOutMenu}
        isActive={fadeElement === 3}
        isHover={fadeElement}
      >
        <YoutubeLogo size={sizeIcon} weight="light" />
      </NavLinkItem>
    </ul>
  );
}

export default NavLinks;
