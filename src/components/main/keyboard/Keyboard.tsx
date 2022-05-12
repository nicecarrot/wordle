import styles from "../../styles/reusable/_key.module.scss";
import Keycap from "../../reusable/Keycap";
import { KEYBOARD_TOP, KEYBOARD_MID, KEYBOARD_BOT } from "../../constants";

const integrateKey = [KEYBOARD_TOP, KEYBOARD_MID, KEYBOARD_BOT];

const Keyboard = () => {
  const keygroup = integrateKey.map((row, idx: number) => {
    return (
      <div key={idx} className={styles.keyboard_row}>
        {row.map((char: string, idx: number) => {
          return <Keycap char={char} key={idx}></Keycap>;
        })}
      </div>
    );
  });
  return <div>{keygroup}</div>;
};
export default Keyboard;
