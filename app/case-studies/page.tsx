import styles from "./page.module.scss";
import { caseStudies } from "@/data/data.ts";
import CategoryLink from "@/app/(home)/components/category-link/CategoryLink.tsx";

export default function CaseStudyHub() {
  const categories = caseStudies
    .map((item) => item.category)
    .filter((item2, i, cats) => cats.indexOf(item2) === i);

  return (
    <div className={styles.caseStudyHub}>
      <div className={styles.caseStudyHubInner}>
        {categories.map((cat, index) => (
          <CategoryLink category={cat} categoryType={"caseStudy"} key={index} />
        ))}
      </div>
    </div>
  );
}
