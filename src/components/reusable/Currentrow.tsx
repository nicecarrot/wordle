import Tile from "./Tile";
import styles from "../../styles/reusable/_tile.module.scss";

interface CurrentrowProps {
  word: string;
}

const Currentrow = ({ word }: CurrentrowProps) => {
  return (
    <div className={styles.row}>
      
      {word.split("").map((letter, i) => (
        <Tile key={i} letter={letter} state="edit" />
      ))}
      {Array.from(Array(5 - word.length)).map((letter, i) => (
            <Tile key={i} letter={letter} state="edit" />
        ))}
    </div>
  );
};

export default Currentrow;
