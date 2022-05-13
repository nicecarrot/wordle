import styles from "../../styles/reusable/_tile.module.scss";

interface Props {
  letter?: string;
  state?: string;
  idx: string;
}

const Tile = ({ idx, letter }: Props) => {
  return (
    <div className={styles.tile} id={idx}>
      {letter}
    </div>
  );
};
export default Tile;
