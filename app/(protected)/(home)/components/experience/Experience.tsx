import styles from "./Experience.module.scss";
import { ReactNode } from "react";
import Button from "@/components/button/Button";
import { generalData } from "@/data/data-general.ts";

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
          <Button
            name={"CV/Resume"}
            href={generalData?.cvLink}
            target={"_blank"}
            id={"cv-download"}
          />
        </div>
      </div>
    </div>
  );
}
