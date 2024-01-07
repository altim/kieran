import styles from "./Projects.module.scss";
import ProjectItem from "@/app/(home)/components/projects/components/project-item/ProjectItem";
import Button from "@/components/button/Button";
import { projects } from "@/data/data.ts";
import { notFound } from "next/navigation";
export default function Projects() {
  const recentProjects = projects.slice(0, 4);

  if (!recentProjects) {
    notFound();
  }
  return (
    <div className={styles.projects}>
      <div className={styles.projectsInner}>
        <div>
          <h3>Recent Projects</h3>
        </div>
        <div className={styles.projectsGrid}>
          {recentProjects.map((item, index) => (
            <ProjectItem
              key={`related-project-${index}`}
              title={item.title}
              imageSrc={item.featuredImage.src}
              imageAlt={item.featuredImage.alt}
              imageWidth={item.featuredImage.width}
              imageHeight={item.featuredImage.height}
              link={`/portfolio/${item.category}/${item.slug}`}
            />
          ))}
        </div>
        <div className={styles.actionButton}>
          <Button name={"View portfolio"} href={"/portfolio"} />
        </div>
      </div>
    </div>
  );
}
