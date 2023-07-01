import styles from "../../styles/header/_header.module.scss";
import { LOGO } from "../constants";
import Icon from '@mdi/react';
import { mdiMenu, mdiCog, mdiInformation, mdiInformationOutline } from '@mdi/js';
import Swal from "sweetalert2";

const Header = () => {
  const GameRule = () => {
    Swal.fire({
      title: '<strong>How To Play</strong>',
      icon: 'info',
      html:
        'Guess the Wordle in 6 tries.<br>' +
        'Each guess must be a valid 5-letter word.<br><br><br><br>'+
        '<b>L</b> is in the word and in the correct spot.<br>'+
        '<b>R</b> is in the word but in the wrong spot.<br>'+
        '<b>P</b> is not in the word in any spot.',
      background: 'url(/src/assets/GameRule.png)',
      showCloseButton: true,
    })
  }

  return (
    <header className={styles.header}>
      <span className={styles.menu_left} onClick={GameRule}><Icon path={mdiInformationOutline} size={3} /></span>
      <span className={styles.title}>{LOGO}</span>
      <span className={styles.menu_right}><Icon path={mdiCog} size={3} /></span>
    </header>
  );
};

export default Header;
