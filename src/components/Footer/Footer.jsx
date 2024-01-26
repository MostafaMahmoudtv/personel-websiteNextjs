import styles from "./Footer.module.css";
import Image from "next/image";

export default function Footer() {
  return (
    <div className={styles.container}>
      <div>Created by Mostafa Mahmoud. © 2024</div>
      <div className={styles.social}>
        <Image
          src="/images/icons/facebook.png"
          width={20}
          height={20}
          className={styles.icon}
          alt="facebook icon "
        />
        <Image
          src="/images/icons/instagram.png"
          width={20}
          height={20}
          className={styles.icon}
          alt="instagram icon  "
        />
        <Image
          src="/images/icons/youtube.png"
          width={20}
          height={20}
          className={styles.icon}
          alt="youtube icon "
        />
        
      </div>
    </div>
  );
}
