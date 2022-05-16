import { BoxStatus } from "../constants";
import Tile from "./Tile";

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
    <div>
      {Array.from(
        Array(5).map((_, i) => (
          <Tile key={i} letter={"Hello"} state={checkLetter(word[i], i)} />
        ))
      )}
    </div>
  );
};

export default Tilerow;
