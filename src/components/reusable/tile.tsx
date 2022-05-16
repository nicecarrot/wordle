import styles from "../../styles/reusable/_tile.module.scss";

interface Props {
  letter: string;
  state: string;
}

/* Tile의 state가 변경되면 애니메이션이 생겨야되니까 클래스 이름이 바뀌어야함
  
*/

const Tile = ({letter, state}: Props) => {
  return (
    <div className={`${styles.tile} ${state}` }>
      {letter}
    </div>
  );
};
export default Tile;
