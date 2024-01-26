import { Montserrat} from "next/font/google";
import Link from "next/link";
import styles from "./Navbar.module.css";
import { links } from "./data.js";
import Button from './../Button/Button';
import DarkmodeToggle from './../DarkmodeToggle/DarkmodeToggle';
import Home from './../../app/page';
const logofont = Montserrat({ subsets: ["latin"] });

export default function Navbar() {
  return (
    // start the continer we put logo and navbar elemnets on it
    <div className={styles.container}>
      <Link href="./" className={`${styles.logo} ${logofont.className}`}>
        Mostafa Mahmoud TV
      </Link>

      <div className={styles.links}>
      <DarkmodeToggle/>
      <Link href="./" >
      Home
    </Link>
      {links.map((link) => (
          <Link key={link.id} href={link.url} className={styles.link}>
            {link.title}
          </Link>
        ))}
         <Button/>
      </div>
    </div> //end of the container
  );
}
