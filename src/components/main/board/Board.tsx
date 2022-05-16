import { useEffect, useState } from "react";
import styles from "../../../styles/main/_board.module.scss";
import Tilerow from "../../reusable/Tilerow";
import { wordList } from "../../reusable/wordList";

const Board = () => {

  /* 렌더링 될 때마다 랜덤한 단어가 나오게끔 하루 씩 기다리는건 재미없으니까 */
  const [randomWord, setRandomWord] = useState<string>("");
  useEffect(() => {
    setRandomWord(
      (wordList[Math.floor(Math.random() * wordList.length)])
    );
  }, []);

  return (
    <div className={styles.container}>
      <span> {randomWord} </span>
      <Tilerow word="doubt" solution={randomWord} />
    </div>
  );
};

export default Board;
