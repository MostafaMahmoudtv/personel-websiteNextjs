import Image from "next/image";
import styles from "./page.module.css";
import Mogalatah from "/public/images/mogalatah.jpg";
export default function Home() {
  return (
    <div className={styles.container}>
      <div className={styles.col}>
        <h1 className={styles.title}>Red Herring Fallacy</h1>
        <p className={styles.description}>
          "I have a YouTube channel, and I've created numerous videos about
          logical fallacies. One of these videos covers the fallacy of the red
          herring, which is one of the most significant fallacies. Allow me to
          translate and provide a brief explanation of the red herring fallacy
          in English in five sentences: The red herring fallacy involves
          diverting attention from the main topic by introducing an unrelated or
          misleading element. This tactic is often used to distract the audience
          and steer the discussion away from the central issue. The term 'red
          herring' originates from the practice of using a strong-smelling fish
          to divert hunting dogs from the scent of a trail. In arguments, a red
          herring is a rhetorical device intended to mislead and shift focus.
          It's crucial to recognize and address red herrings to maintain a
          logical and focused conversation. you can watch my video about it from
          here..
        </p>
        <button className={styles.button}>
          {" "}
          <a href="https://youtu.be/uXORuqFq7rM?si=hcWFFprT4E72P2gk">
            Visite Now
          </a>{" "}
        </button>
      </div>
      <div className={styles.col}>
        <Image className={styles.img} src={Mogalatah} alt="mogalatah  " />
      </div>
    </div>
  );
}
