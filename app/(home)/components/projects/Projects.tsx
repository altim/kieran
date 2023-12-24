import styles from "./Projects.module.scss";
import ProjectItem from "@/app/(home)/components/projects/components/project-item/ProjectItem";
import Button from "@/app/components/button/Button";
import RelatedProject from "@/app/portfolio/[slug]/components/related-project/RelatedProject.tsx";
import {
  portfolioItems,
  PortfolioItemsType,
} from "@/app/portfolio/[slug]/data.ts";
import { notFound } from "next/navigation";
export default function Projects() {
  const recentProjects = portfolioItems.slice(0, 4);

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
              link={`/portfolio/${item.slug}`}
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
