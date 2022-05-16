import { BoxStatus } from "../constants";
import Tile from "./Tile";
import styles from "../../styles/reusable/_tile.module.scss"

interface RowProps {
  word: string;
  solution: string;
}

const Tilerow = ({ word, solution }: RowProps) => {
  const checkLetter = (letter: string, pos: number): BoxStatus => {
    if (solution.includes(letter)) {
      if (solution[pos] === letter) {
        return "correct";
      } else {
        return "present";
      }
    } else {
      return "absent";
    }
  };
  
  return (
    <div className={styles.row}>
      {Array.from(
        Array(5).fill("").map((_, i) => (
          <Tile key={i} letter={word[i]} state={checkLetter(word[i], i)} />
        ))
      )}
    </div>
  );
};

export default Tilerow;
