import styles from "./login.module.scss";
import Button from "@/components/button/Button.tsx";

export default function Login() {
  return (
    <div className={styles.loginPage}>
      <div className={styles.loginPageInner}>
        <div className={styles.loginFormWrapper}>
          <h1>Welcome</h1>
          <h2>Login required</h2>
          <div>
            <form className={styles.loginForm}>
              <input type={"password"} placeholder={"Password"} />
              <Button id={"submit-login"} name={"Continue"} />
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
