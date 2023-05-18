import { useEffect, useState } from "react";
import styles from "../../../styles/main/_board.module.scss";
import {
  COMPLETE_WORD,
  KEYS,
  CHANCE,
  GameStatus,
  LENGTH,
} from "../../constants";
import Completerow from "../../reusable/Completerow";
import Currentrow from "../../reusable/Currentrow";
import Emptyrow from "../../reusable/Emptyrow";
import { useWindow } from "../../reusable/useWindow";
import { API, API_KEY } from "../../constants";
import axios from "axios";

const Board = () => {

  const [answer, setAnswer] = useState<string>("");
  const [turn, setTurn] = useState<number>(1);
  const [completedWord, setCompletedWord] = useState<string[]>(COMPLETE_WORD);
  const [currentWord, setCurrentWord] = useState<string>("");
  const [gameState, setGameState] = useState<GameStatus>("Playing");
  const [valid, setValid] = useState<Boolean>(false);

  const reload = async () => {
    try {
      const res = await axios.get(API + "/word?length=" + LENGTH);
      const answer = res.data[0];
      console.log(answer);
      setAnswer(answer);
    } catch (e) {
      setAnswer("basic");
    }
  };

  useEffect(() => {
    answer !== "" && localStorage.setItem("answer", answer);
  }, [answer]);

  useEffect(() => {
    localStorage.getItem("answer")
      ? setAnswer(localStorage.getItem("answer")!)
      : reload();
  }, []);

  const validation = async (ans: string) => {
    const apiKey = API_KEY; // WordsAPI 키
    const url = `https://wordsapiv1.p.rapidapi.com/words/${ans}hasMembers`;

    try {
      const response = await fetch(url, {
        method: "GET",
        headers: {
          "X-RapidAPI-Host": "wordsapiv1.p.rapidapi.com",
          "X-RapidAPI-Key": apiKey,
        },
      });

      const data = await response.json();
      console.log(data.results)
      if (data.results !== null) {
        setValid(true);
      } else {
        setValid(false);
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };

  const handleKeyDown = (event: KeyboardEvent) => {
    /* delete는 버튼이 눌리고, currentWord가 0보다 클 때만 작동 */
    if (event.key === "Backspace" && currentWord.length > 0) {
      onDelete();
      return;
    }
    if (event.key === "Enter") {
      onEnter(currentWord);
      return;
    }
    /* 5자리가 넘어가면 더 이상 입력되지 않음 */
    if (currentWord.length >= 5) return;

    if (KEYS.includes(event.key)) {
      onInput(event.key);
      return;
    }
  };

  const onInput = (letter: string) => {
    const newWord = currentWord + letter;
    setCurrentWord(newWord);
  };

  const onDelete = () => {
    const newWord = currentWord.slice(0, -1);
    setCurrentWord(newWord);
  };

  const onEnter = (letter: string) => {
    /* 5글자를 충족하지 못한 경우 */
    if (letter.length < 5) {
      alert("Not enough letters");
    } else {
      console.log(letter);
      validation(letter);
      if (valid === true) {
        /* 사전에 있는 단어인지 검사 */
        /* 정답을 맞춘경우 */
        if (letter === answer) {
          setCompletedWord([...completedWord, letter]);
          setCurrentWord("");
          setGameState("Victory");
          alert("Victory!!");
          return;
        }
        /* turn이 6턴을 넘어가게 되면 게임오버*/
        if (turn >= 6) {
          setGameState("Defeat");
          alert("GameOver");
          alert("answer is " + answer.toUpperCase());
        }
        /* 단어를 썼으니 턴을 소모하고 다음 행으로 넘어가기 */
        if (gameState === "Defeat") {
          /* 여기다가 Modal 띄워주면 되겠지 */
          return;
        } else {
          setTurn(turn + 1);
        }
        /* 지금 쓴 단어는 완료한 단어목록에 저장 */
        setCompletedWord([...completedWord, letter]);
        /* currentWord 초기화 */
        setCurrentWord("");
      } else {
        alert("Not in wordlist");
      }
    }
  };
  /* keydown 이벤트 window에 부착 */
  useWindow("keydown", handleKeyDown);

  return (
    <div className={styles.container}>
      {completedWord.map((word, i) => (
        <Completerow word={word} solution={answer} key={i} />
      ))}
      {gameState !== "Playing" ? null : <Currentrow word={currentWord} />}
      {gameState === "Defeat"
        ? null
        : Array.from(Array(CHANCE - turn)).map((_, i) => <Emptyrow key={i} />)}
    </div>
  );
};

export default Board;
