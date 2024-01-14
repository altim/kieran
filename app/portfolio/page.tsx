import styles from "./page.module.scss";
import { projects } from "@/data/data-projects.ts";
import CategoryLink from "@/components/category-link/CategoryLink.tsx";
import HeaderImage from "@/components/header-image/HeaderImage.tsx";

export default function PortfolioHub() {
  const categories = projects
    .map((item) => item.category)
    .filter((item2, i, cats) => cats.indexOf(item2) === i);

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
          <h1>My Projects</h1>
        </div>
      </div>
      <div className={styles.portfolioHub}>
        <div className={styles.portfolioHubInner}>
          {categories.map((cat, index) => (
            <CategoryLink category={cat} categoryType={"project"} key={index} />
          ))}
        </div>
      </div>
    </>
  );
}
