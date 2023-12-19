import styles from "./Skills.module.scss";
import { ReactNode } from "react";

type SkillsProps = {
  children: ReactNode;
};
export default function Skills({ children }: SkillsProps) {
  return (
    <div className={styles.skills}>
      <div className={styles.skillsInner}>
        <h3>Skills</h3>
        <div className={styles.skillsContent}>{children}</div>
      </div>
    </div>
  );
}
