import Tile from "./Tile"
import styles from "../../styles/reusable/_tile.module.scss"

const Emptyrow = () => {
  return (
    <div className={styles.row}>
        {Array.from(Array(5)).map((_, i) => (
            <Tile key={i} letter="" state="empty" />
        ))}
    </div>
  )
}

export default Emptyrow