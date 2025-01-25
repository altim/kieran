import styles from "./page.module.scss";
import { projects, categories } from "@/data/data-projects.ts";
import CategoryLink from "@/components/category-link/CategoryLink.tsx";
import HeaderImage from "@/components/header-image/HeaderImage.tsx";

export default function PortfolioHub() {
  // Filter categories that have projects and map them to an array of slugs
  const categoriesWithProjects = categories
    .filter((item) => {
      if (projects.find((project) => project.category === item.slug)) {
        return true;
      }
    })
    .map((item) => item.slug);

  return (
    <>
      <HeaderImage
        src={"/assets/portfolio/header.jpg"}
        alt={"Case Studies"}
        width={920}
        height={448}
        backgroundColor={"gray"}
      />

      <div className={styles.pageTitle}>
        <div className={styles.pageTitleInner}>
          <h1>My Projects</h1>
        </div>
      </div>
      <div className={styles.portfolioHub}>
        <div className={styles.portfolioHubInner}>
          {categoriesWithProjects.map((cat, index) => (
            <CategoryLink category={cat} key={index} />
          ))}
        </div>
      </div>
    </>
  );
}
