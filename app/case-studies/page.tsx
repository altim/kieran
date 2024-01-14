import styles from "./page.module.scss";
import HeaderImage from "@/components/header-image/HeaderImage";
import { caseStudies } from "@/data/data-case-studies.ts";
import CaseStudyItem from "@/components/case-study-item/CaseStudyItem.tsx";

export default function CaseStudies() {
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
      <div className={styles.main}>
        <div className={styles.mainInner}>
          <div className={styles.caseStudiesList}>
            {caseStudies.map((caseStudy, index) => (
              <CaseStudyItem
                title={caseStudy.title}
                category={caseStudy.category}
                text={caseStudy.excerpt.text}
                slug={caseStudy.slug}
                image={caseStudy.featuredImage}
              />
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
