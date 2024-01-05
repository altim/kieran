import Link from "next/link";
import styles from "./page.module.scss";

export default function CaseStudiesHub() {
  return (
    <div className={styles.caseStudiesHub}>
      <div className={styles.caseStudiesHubInner}>
        <Link href={"/case-studies/case1"}>Case1</Link>
        <br />
        <Link href={"/case-studies/case2"}>Case2</Link>
        <br />
        <Link href={"/case-studies/case3"}>Case3</Link>
        <br />
        <Link href={"/case-studies/case4"}>Case4</Link>
        <br />
      </div>
    </div>
  );
}
