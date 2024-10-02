import styles from "./NavLinkItem.module.css";

function NavLinkItem({
  size,
  linkAddress,
  onMouseEnter,
  onMouseLeave,
  isActive,
  isHover,
  children,
}) {
  return (
    <li
      className={`${isHover !== null && !isActive ? styles.dimmed : ""}`}
      style={{ fontSize: `${size}rem` }}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      <a href={linkAddress} target="_blank">
        {children}
      </a>
    </li>
  );
}

export default NavLinkItem;
