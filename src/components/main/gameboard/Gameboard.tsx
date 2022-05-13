import { useState } from "react";
import styles from "../../../styles/main/_gameboard.module.scss";
import { COUNTROW } from "../../constants";
import { answer } from "../../reusable/answer";
import Tile from "../../reusable/Tile";

const Tilerow = () => {
  return (
    <div className={styles.row}>
      <Tile idx={'0'} />
      <Tile idx={'1'} />
      <Tile idx={'2'} />
      <Tile idx={'3'} />
      <Tile idx={'4'} />
    </div>
  );
};

const Gameboard = () => {
  const sol = answer[Math.floor(Math.random() * answer.length)];
  
  const [board, setBoard] = useState(COUNTROW);
  return (
    <div className={styles.container}>
      {COUNTROW.map((c) => {
        return <Tilerow key={c}></Tilerow>;
      })}
    </div>
  );
};

export default Gameboard;
