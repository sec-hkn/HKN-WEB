import Image from "next/image";
import Link from "next/link";
import styles from "./Genesis.module.css";  // Importing the CSS module for styling

const Genesis = () => {
  return (
    <div className={styles.genesisContainer}>
      {/* Full-Width Genesis Logo with padding at the top */}
      <div className={styles.genesisLogo}>
        <Image
          src="/images/events/10/genesis.jpeg" // Replace with actual logo path
          alt="Genesis Logo"
          layout="responsive"
          width={1000} // Adjust based on your image's natural width
          height={400} // Adjust based on your image's natural height
          className={styles.genesisImage}
        />
      </div>

      {/* Genesis Buttons */}
      <div className={styles.genesisButtons}>
        {/* GENESIS 1.0 Button with yellow theme */}
        <Link href="genesis/genesis1">
          <button className={`${styles.genesisButton} ${styles.genesis1}`}>
            GENESIS 1.0
          </button>
        </Link>

        {/* GENESIS 2.0 Button with night sky blue theme */}
        <Link href="genesis/genesis2">
          <button className={`${styles.genesisButton} ${styles.genesis2}`}>
            GENESIS 2.0
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Genesis;
