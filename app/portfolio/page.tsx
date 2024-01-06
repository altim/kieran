import Link from "next/link";
import styles from "./page.module.scss";
import { projects } from "@/data/data.ts";
export default function PortfolioHub() {
  const categories = projects
    .map((item) => item.category)
    .filter((item2, i, cats) => cats.indexOf(item2) === i);

  return (
    <div className={styles.portfolioHub}>
      <div className={styles.portfolioHubInner}>
        {categories.map((cat) => (
          <>
            <Link href={`/portfolio/${cat.slug}`}>{cat.name}</Link>
            <br />
          </>
        ))}
      </div>
    </div>
  );
}
