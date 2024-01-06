import Link from "next/link";
import styles from "./page.module.scss";
import { projects } from "@/data/data.ts";
import { getCategoryBySlug } from "@/app/helpers/categoryHelpers.ts";
export default function PortfolioHub() {
  const categories = projects
    .map((item) => item.category)
    .filter((item2, i, cats) => cats.indexOf(item2) === i);

  console.log("CATEGORIES:", categories);

  return (
    <div className={styles.portfolioHub}>
      <div className={styles.portfolioHubInner}>
        {categories.map((cat, index) => (
          <div key={index}>
            <Link href={`/portfolio/${cat}`}>
              {getCategoryBySlug(cat)?.name}
            </Link>
            <br />
          </div>
        ))}
      </div>
    </div>
  );
}
