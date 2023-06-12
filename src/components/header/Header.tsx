import styles from "../../styles/header/_header.module.scss";
import { MENUBAR, LOGO, SETTING } from "../constants";
import Icon from '@mdi/react';
import { mdiMenu, mdiCog } from '@mdi/js';


const Header = () => {
  return (
    <header className={styles.header}>
      <span className={styles.menu_left}><Icon path={mdiMenu} size={3} /></span>
      <span className={styles.title}>{LOGO}</span>
      <span className={styles.menu_right}><Icon path={mdiCog} size={3} /></span>
    </header>
  );
};

export default Header;
