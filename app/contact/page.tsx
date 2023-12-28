import styles from "./page.module.scss";
import Button from "@/app/components/button/Button.tsx";
export default function Contact() {
  return (
    <div className={styles.contactPage}>
      <div className={styles.contactPageInner}>
        <div className={styles.blueRectangle} />
        <h1>Contact me</h1>

        <div className={styles.formWrapper}>
          <h2 className={styles.formTitle}>For hire or questions</h2>
          <form className={styles.form}>
            <input placeholder={"Name"} name={"name"} type={"text"} />
            <input
              placeholder={"Email address"}
              name={"email"}
              type={"email"}
            />
            <textarea rows={10} placeholder={"Message"} />
            <div className={styles.formAction}>
              <Button name={"SUBMIT"} />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
