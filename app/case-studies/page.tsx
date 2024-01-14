import styles from "./page.module.scss";
import HeaderImage from "@/components/header-image/HeaderImage";
import { caseStudies } from "@/data/data.ts";
import CategoryItem from "@/components/category-item/CategoryItem.tsx";

export default function PortfolioCategory() {
  return (
    <>
      <HeaderImage
        src={"/assets/case-studies/header.jpg"}
        alt={"Case Studies"}
        width={920}
        height={448}
        backgroundColor={"gray"}
      />

      <div className={styles.pageTitle}>
        <div className={styles.pageTitleInner}>
          <h1>Case Studies</h1>
        </div>
      </div>
      <div className={styles.portfolioItemsList}>
        {caseStudies.map((project, index) => (
          <CategoryItem
            imageSrc={project.excerpt.image.src}
            imageAlt={project.excerpt.image.alt}
            imageWidth={project.excerpt.image.width}
            imageHeight={project.excerpt.image.height}
            link={`/case-studies/${project.slug}`}
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
