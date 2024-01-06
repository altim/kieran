import HeaderImage from "@/app/components/header-image/HeaderImage";
import styles from "./page.module.scss";
import { projects } from "@/data/data.ts";
import { ProjectType } from "@/data/data.types.ts";
import { notFound } from "next/navigation";
import Image from "next/image";
import classNames from "classnames";
import ProjectItem from "@/app/(home)/components/projects/components/project-item/ProjectItem.tsx";

export async function generateStaticParams() {
  return projects.map((item) => ({
    slug: item.slug,
  }));
}

export default function PortfolioItem({
  params,
}: {
  params: { slug: string };
}) {
  const project = projects.find(
    (item: ProjectType) => item.slug === params.slug,
  );

  const relatedProjects = projects.filter(
    (item) => project?.relatedProjects.includes(item.slug),
  );

  if (!project) {
    notFound();
  }

  return (
    <>
      <HeaderImage
        src={project.featuredImage.src}
        alt={project.featuredImage.alt}
        width={project.featuredImage.width}
        height={project.featuredImage.height}
        backgroundColor={"white"}
      />
      <div className={styles.projectTitle}>
        <div className={styles.projectTitleInner}>
          <h1>{project.title}</h1>
          <h2>{project.subtitle}</h2>
        </div>
      </div>

      <div className={styles.main}>
        <div className={styles.mainInner}>
          <div className={styles.paragraphsList}>
            {project.paragraphs.map((item, index) => (
              <div className={styles.paragraph} key={`paragraph-${index}`}>
                <h4>{item.title}</h4>
                <p>{item.text}</p>
              </div>
            ))}
          </div>

          <div className={styles.imageList}>
            {project.images.map((item, index) => (
              <div
                key={`image-${index}`}
                className={classNames({
                  [styles.imgFullWidth]: item.size === "fullWidth",
                })}
              >
                <Image
                  src={item.src}
                  alt={item.alt}
                  width={item.width}
                  height={item.height}
                />
              </div>
            ))}
          </div>

          <div className={styles.relatedProjects}>
            <h3>Related Projects</h3>
            <div className={styles.relatedProjectsList}>
              {relatedProjects.map((item, index) => (
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
          </div>
        </div>
      </div>
    </>
  );
}
