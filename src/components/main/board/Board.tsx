import styles from "../../../styles/main/_board.module.scss";
import Tilerow from "../../reusable/Tilerow";

const Board = () => {
  return (
    <div className={styles.container}>
      <Tilerow word="doubt" solution="Dream" />
    </div>
  );
};

export default Board;
