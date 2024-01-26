
import styles  from "./page.module.css";
export default function Contact() {
  return (
   
    <form className={styles.container}>
    <h1>Get in touch</h1>
    <div className={styles.block}>
      <label htmlFor="frm-email">Email</label>
      <input
        id="frm-email"
        type="email"
        name="email"
        autoComplete="email"
        required
      />
    </div>
    <div className={styles.block}>
      <label htmlFor="frm-phone">Phone</label>
      <input
        id="frm-phone"
        type="text"
        name="phone"
        autoComplete="tel"
        required
      />
    </div>
    <div className={styles.name}>
      <div>
        <label htmlFor="frm-first">First Name</label>
        <input
          id="frm-first"
          type="text"
          name="first"
          autoComplete="given-name"
          required
        />
      </div>
      <div>
        <label htmlFor="frm-last">Last Name</label>
        <input
          id="frm-last"
          type="text"
          name="last"
          autoComplete="family-name"
          required
        />
      </div>
    </div>
    <div className={styles.block}>
      <label htmlFor="frm-message">Message</label>
      <textarea rows="6" name="message" id="myTextarea"> </textarea>
    </div>
    <div className={styles.button}>
      <button type="submit">Submit</button>
    </div>
  </form>
   
  );
}
