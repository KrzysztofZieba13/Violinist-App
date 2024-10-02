import styles from "./HeaderNav.module.css";
import NavLinks from "./NavLinks";
import Logo from "./Logo";
import { useState } from "react";
import MobileNav from "./MobileNav";
import ButtonOpenMobileNav from "./ButtonOpenMobileNav";
import DefaultNavBar from "./DefaultNavBar";

function HeaderNav() {
  const [isMobileNavOpen, setIsMobileNavOpen] = useState(false);

  return (
    <div className={styles.navigation}>
      <Logo />
      <DefaultNavBar>
        <NavLinks onClick={() => setIsMobileNavOpen((is) => !is)} />
      </DefaultNavBar>
      <ButtonOpenMobileNav setIsMobileNavOpen={setIsMobileNavOpen} />
      <MobileNav
        isMobileNavOpen={isMobileNavOpen}
        setIsMobileNavOpen={setIsMobileNavOpen}
      />
    </div>
  );
}

export default HeaderNav;
