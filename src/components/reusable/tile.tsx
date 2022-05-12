import styles from "../../styles/reusable/_tile.module.scss";

/* 
    Enter를 눌렀을 때
    1. 모든 칸을 채웠는지
    2. 단어가 맞는지 검사
    3. 단어일 경우 검사하고 다음 행으로 넘어가기
    한 번에 한 행씩 해야됨.
    

    내가 정해놓은 단어가 맞는지는 둘째치고 이거 먼저
    해야한다.
    각각의 
    생각해보니 reusable에 들어갈 Tile은 값이 입력받을 수 있도록 공간만 마련해주면 될 거 같다
*/
interface Props{
  value?: string;
}

const Tile = ({value}: Props) => {
  return (
    <div className={styles.tile}>{value}</div>
  )
}
export default Tile;
