import { Minus, Plus } from "@phosphor-icons/react";
import styles from "./RepertoireAccordion.module.css";

function RepertoireAccordion({ title, isOpen, onClick, children }) {
  return (
    <div className={styles.accordion}>
      <div
        className={styles.panel}
        style={isOpen ? { backgroundColor: "#fff0d6" } : null}
        onClick={onClick}
      >
        <p>{title}</p>
        {isOpen ? (
          <Minus size={24} weight="light" />
        ) : (
          <Plus size={24} weight="light" />
        )}
      </div>
      {isOpen && <div className={styles.panelList}>{children}</div>}
    </div>
  );
}

export default RepertoireAccordion;
