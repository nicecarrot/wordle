import Tile from "../../reusable/Tile"
import styles from "../../../styles/main/_row.module.scss"
import { answer } from "../../reusable/answer"

const Emptyrow = () => {
  const emptyCells = Array.from(Array(answer.length))

  return (
    <div className={styles.emptyrow}>
      {emptyCells.map((_, i) => (
        <Tile key={i} />
      ))}
    </div>
  )
}

export default Emptyrow;