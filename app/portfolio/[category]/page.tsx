import styles from "./page.module.scss";
import HeaderImage from "@/app/components/header-image/HeaderImage";
import PortfolioItem from "@/app/portfolio/[category]/components/portfolio-item/PortfolioItem";
import { projects } from "@/data/data.ts";
import Link from "next/link";
import { getCategoryBySlug } from "@/app/helpers/categoryHelpers.ts";

export default function PortfolioCategory({
  params,
}: {
  params: { category: string };
}) {
  const categoryProjects = projects.filter(
    (item) => item.category === params.category,
  );

  const currentCategory = getCategoryBySlug(params.category);

  if (!categoryProjects.length || !currentCategory) {
    return (
      <div className={styles.category404}>
        <div className={styles.category404Inner}>
          <h2>There are no projects in this category.</h2>
          <Link href={"/portfolio"}>Go back</Link>
        </div>
      </div>
    );
  }

  return (
    <>
      <HeaderImage
        src={currentCategory.featuredImage}
        alt={currentCategory.name}
        width={920}
        height={448}
        backgroundColor={"gray"}
      />

      <div className={styles.featuredWorkTitle}>
        <div className={styles.featuredTitleInner}>
          <h1>{currentCategory.name}</h1>
        </div>
      </div>
      <div className={styles.portfolioItemsList}>
        {categoryProjects.map((project, index) => (
          <PortfolioItem
            imageSrc={project.excerpt.image.src}
            imageAlt={project.excerpt.image.alt}
            imageWidth={project.excerpt.image.width}
            imageHeight={project.excerpt.image.height}
            link={`/portfolio/${currentCategory.slug}/${project.slug}`}
            reverse={index % 2 === 1}
            key={`portfolio-item-${index}`}
          >
            <h3>{project.excerpt.title}</h3>
            <h3>{project.excerpt.subtitle}</h3>
            <p>{project.excerpt.text}</p>
          </PortfolioItem>
        ))}
      </div>
    </>
  );
}
