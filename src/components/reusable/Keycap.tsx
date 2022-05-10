import styles from "../../styles/reusable/_key.module.scss";

interface KeycapProps {
  char: string;
}

const Keycap = ({ char }: KeycapProps) => {
  return( 
    <div className={styles.keycap}>{char}</div>
    );
};

export default Keycap;
