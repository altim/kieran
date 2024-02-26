import styles from "./Projects.module.scss";
import ProjectItem from "@/app/(home)/components/projects/components/project-item/ProjectItem";
import Button from "@/components/button/Button";
import { projects } from "@/data/data-projects.ts";
import { notFound } from "next/navigation";

type ProjectsPros = {
  slugs: string[];
};
export default function Projects({ slugs }: ProjectsPros) {
  const recentProjects = slugs.map((projectSlug) =>
    projects.find((project) => project.slug === projectSlug),
  );

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
              title={item?.title ?? ""}
              imageSrc={item?.excerpt?.image?.src ?? ""}
              imageAlt={item?.excerpt?.image?.alt ?? ""}
              imageWidth={item?.excerpt?.image?.width ?? 0}
              imageHeight={item?.excerpt?.image?.height ?? 0}
              link={`/portfolio/${item?.category}/${item?.slug}`}
            />
          ))}
        </div>
        <div className={styles.actionButton}>
          <Button
            name={"View portfolio"}
            href={"/portfolio"}
            id={"portfolio-link"}
          />
        </div>
      </div>
    </div>
  );
}
