import styles from "../../styles/header/_header.module.scss";
import { MENUBAR, LOGO, SETTING } from "../constants";

const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.menu_left}>{MENUBAR}</div>
      <h1 className={styles.title}>{LOGO}</h1>
      <div className={styles.menu_right}>{SETTING}</div>
    </header>
  );
};

export default Header;
