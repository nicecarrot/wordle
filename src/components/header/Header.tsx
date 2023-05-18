import styles from "../../styles/header/_header.module.scss";
import { MENUBAR, LOGO, SETTING } from "../constants";

const Header = () => {
  return (
    <header className={styles.header}>
      <span className={styles.menu_left}>{MENUBAR}</span>
      <span className={styles.title}>{LOGO}</span>
      <span className={styles.menu_right}>{SETTING}</span>
    </header>
  );
};

export default Header;
