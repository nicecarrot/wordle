import { BoxStatus, COMPLETE_WORD } from "../constants";
import Tile from "./Tile";
import styles from "../../styles/reusable/_tile.module.scss";

interface RowProps {
  word: string;
  solution: string;
}
// error 발견, 정답에 같은 문자가 2개 있을 때, correct나 present가 되지 않음
const Completerow = ({ word, solution }: RowProps) => {
  const checkLetter = (pos: number): BoxStatus => {
    let checkPoint = [0, 0, 0, 0, 0];
    let answer = solution;
    //포함된 문자열은 일단 모두 +1
    for (let i = 0; i < 5; i++) {
      if (solution.includes(word[i])) {
        checkPoint[i] += 1;
      }
    }
    for (let i = 0; i < 5; i++) {
      // 문자열의 포지션이 같은 경우 +2, 같은 위치에 있던 문자열을 정답에서 삭제
      if (solution[i] === word[i]) {
        checkPoint[i] += 2;
        answer = answer.replace(word[i], " ");
      }
    }
    /*  correct인 경우에는 
        문자열이 삭제 되었기 때문에
        includes에서 찾을 수 없어짐 */
    for (let i = 0; i < 5; i++) {
      if (answer.includes(word[i])) {
        checkPoint[i] += 1;
        // present라고 쓴 문자가 뒤에 나왔을 때 present가 되면 안되기에 또 한 번 삭제
        answer = answer.replaceAll(word[i], " ");
      }
    }
    //최종적으로 checkPoint가 2가 된 아이들은 present 3인 case는 correct가 됨
    if (checkPoint[pos] === 2) {
      return "present";
    }
    if (checkPoint[pos] === 3) {
      return "correct";
    } else {
      return "absent";
    }
  };

  return (
    <div className={styles.row}>
      {Array.from(
        Array(5)
          .fill("")
          .map((_, i) => (
            <Tile key={i} letter={word[i]} state={checkLetter(i)} />
          ))
      )}
    </div>
  );
};

export default Completerow;
