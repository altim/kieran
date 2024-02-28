"use client";

import styles from "./login.module.scss";
import Button from "@/components/button/Button.tsx";
import { FormEvent, useState } from "react";

export default function Login() {
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [showError, setShowError] = useState(false);

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    const request = await fetch(`/api/login`, {
      body: JSON.stringify({ password }),
      headers: { "Content-Type": "application/json" },
      method: "post",
    });

    setIsLoading(false);

    if (request.status !== 200) return setShowError(true);
    window.location.href = "/";
  };

  return (
    <div className={styles.loginPage}>
      <div className={styles.loginPageInner}>
        <div className={styles.loginFormWrapper}>
          <h1>Welcome</h1>
          <h2>Login required</h2>
          <div>
            <form className={styles.loginForm} onSubmit={handleSubmit}>
              <input
                type={"password"}
                placeholder={"Password"}
                onChange={(e) => setPassword(e.target.value)}
              />

              {showError && <p className={styles.error}>Wrong password!</p>}

              <Button
                id={"submit-login"}
                name={isLoading ? "Submitting..." : "Continue"}
                // @ts-ignore
                disabled={isLoading}
              />
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
