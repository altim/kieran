import Link from "next/link";
import styles from "./page.module.scss";
import { caseStudies } from "@/data/data.ts";
import { getCSCategoryBySlug } from "@/app/helpers/categoryHelpers.ts";

export default function CaseStudyHub() {
  const categories = caseStudies
    .map((item) => item.category)
    .filter((item2, i, cats) => cats.indexOf(item2) === i);

  console.log("caseStudies:", caseStudies);

  return (
    <div className={styles.caseStudyHub}>
      <div className={styles.caseStudyHubInner}>
        {categories.map((cat, index) => (
          <div key={index}>
            <Link href={`/case-studies/${cat}`}>
              {getCSCategoryBySlug(cat)?.name}
            </Link>
            <br />
          </div>
        ))}
      </div>
    </div>
  );
}
