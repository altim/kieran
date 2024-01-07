import styles from "./page.module.scss";
import { projects } from "@/data/data.ts";
import CategoryLink from "@/components/category-link/CategoryLink.tsx";

export default function PortfolioHub() {
  const categories = projects
    .map((item) => item.category)
    .filter((item2, i, cats) => cats.indexOf(item2) === i);

  return (
    <div className={styles.portfolioHub}>
      <div className={styles.portfolioHubInner}>
        {categories.map((cat, index) => (
          <CategoryLink category={cat} categoryType={"project"} key={index} />
        ))}
      </div>
    </div>
  );
}
