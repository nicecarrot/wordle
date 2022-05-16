import styles from "../../styles/reusable/_tile.module.scss";
import { BoxStatus } from "../constants";

interface TileProps {
  letter: string;
  state: BoxStatus;
}

const Tile = ({letter, state}: TileProps) => {

  return (
    <div className={`${styles.tile} ${styles[state]}` }>
      {letter}
    </div>
  );
};
export default Tile;
