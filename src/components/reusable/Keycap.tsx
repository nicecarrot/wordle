import styles from "../../styles/reusable/_key.module.scss";

interface KeycapProps {
  char: string;
}

const Keycap = ({ char }: KeycapProps) => {
  return( 
    <button className={styles.keycap}>
      {char}
    </button>
    );
};

export default Keycap;
