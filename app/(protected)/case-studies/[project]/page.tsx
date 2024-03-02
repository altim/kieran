import HeaderImage from "@/components/header-image/HeaderImage";
import styles from "./page.module.scss";
import { projects } from "@/data/data-projects.ts";
import { CaseStudyType } from "@/data/data.types.ts";
import { notFound } from "next/navigation";
import Image from "next/image";
import classNames from "classnames";
import { caseStudies } from "@/data/data-case-studies.ts";
import { isPortfolioItem } from "@/helpers/postHelper.ts";
import ProjectItem from "@/app/(protected)/(home)/components/projects/components/project-item/ProjectItem.tsx";

// export async function generateStaticParams() {
//   return projects.map((item) => ({
//     slug: item.slug,
//   }));
// }

export default function PortfolioItem({
  params,
}: {
  params: { project: string };
}) {
  const project = caseStudies.find(
    (item: CaseStudyType) => item.slug === params.project,
  );

  const relatedProjects = project?.relatedProjects?.map(
    (relatedProjectSlug) => {
      return (
        projects.find(
          (projectItem) => projectItem.slug === relatedProjectSlug,
        ) ??
        caseStudies.find((caseStudy) => caseStudy.slug === relatedProjectSlug)
      );
    },
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
                  [styles.imgWide]: item.size === "wide",
                  [styles.imgDouble]: item.size === "double",
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

          {relatedProjects && relatedProjects.length > 0 && (
            <div className={styles.relatedProjects}>
              <h3>Related Projects</h3>
              <div className={styles.relatedProjectsList}>
                {relatedProjects.map((item, index) => (
                  <ProjectItem
                    key={`related-project-${index}`}
                    title={item?.title ?? ""}
                    imageSrc={item?.excerpt.image.src ?? ""}
                    imageAlt={item?.excerpt.image.alt ?? ""}
                    imageWidth={item?.excerpt.image.width ?? 0}
                    imageHeight={item?.excerpt.image.height ?? 0}
                    link={
                      isPortfolioItem(item?.slug!)
                        ? `/portfolio/${item?.category}/${item?.slug}`
                        : `/case-studies/${item?.slug}`
                    }
                  />
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
}
