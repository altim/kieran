import styles from "./Projects.module.scss";
import ProjectItem from "@/app/(home)/components/projects/components/project-item/ProjectItem";
import Button from "@/app/components/button/Button";
export default function Projects() {
  return (
    <div className={styles.projects}>
      <div className={styles.projectsInner}>
        <div>
          <h3>Recent Projects</h3>
        </div>
        <div className={styles.projectsGrid}>
          <ProjectItem
            title={"Roll Over Button Link to Case Study 1"}
            href={"#"}
          />
          <ProjectItem
            title={"Roll Over Button Link to Case Study 2"}
            href={"#"}
          />
          <ProjectItem
            title={"Roll Over Button Link to Case Study 3"}
            href={"#"}
          />
          <ProjectItem
            title={"Roll Over Button Link to Case Study 4"}
            href={"#"}
          />
        </div>
        <div className={styles.actionButton}>
          <Button name={"View portfolio"} href={"/portfolio"} />
        </div>
      </div>
    </div>
  );
}
