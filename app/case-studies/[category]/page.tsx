import styles from "./page.module.scss";
import HeaderImage from "@/components/header-image/HeaderImage";
import { caseStudies } from "@/data/data.ts";
import Link from "next/link";
import { getCSCategoryBySlug } from "@/helpers/categoryHelpers.ts";
import CategoryItem from "@/components/category-item/CategoryItem.tsx";

export default function PortfolioCategory({
  params,
}: {
  params: { category: string };
}) {
  const categoryProjects = caseStudies.filter(
    (item) => item.category === params.category,
  );

  const currentCategory = getCSCategoryBySlug(params.category);

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

      <div className={styles.categoryTitle}>
        <div className={styles.categoryTitleInner}>
          <h1>{currentCategory.name}</h1>
        </div>
      </div>
      <div className={styles.portfolioItemsList}>
        {categoryProjects.map((project, index) => (
          <CategoryItem
            imageSrc={project.excerpt.image.src}
            imageAlt={project.excerpt.image.alt}
            imageWidth={project.excerpt.image.width}
            imageHeight={project.excerpt.image.height}
            link={`/case-studies/${currentCategory.slug}/${project.slug}`}
            reverse={index % 2 === 1}
            key={`portfolio-item-${index}`}
          >
            <h3>{project.excerpt.title}</h3>
            <h3>{project.excerpt.subtitle}</h3>
            <p>{project.excerpt.text}</p>
          </CategoryItem>
        ))}
      </div>
    </>
  );
}
