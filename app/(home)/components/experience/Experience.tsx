import styles from "./Experience.module.scss";
import { ReactNode } from "react";
import Button from "@/app/components/button/Button";

type ExperienceProps = {
  children: ReactNode;
};
export default function Experience({ children }: ExperienceProps) {
  return (
    <div className={styles.experience}>
      <div className={styles.experienceInner}>
        <h3>Experience</h3>
        <div className={styles.experienceContent}>{children}</div>
        <div className={styles.actionButton}>
          <Button name={"CV/Resume"} href={"google.com"} target={"_blank"} />
        </div>
      </div>
    </div>
  );
}
