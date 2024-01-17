import styles from "./CaseStudyItem.module.scss";
import Link from "next/link";

type CaseStudyItemProps = {
  title: string;
  category: string;
  text: string;
  slug: string;
  image: {
    src: string;
    alt: string;
    width: number;
    height: number;
  };
};
export default function CaseStudyItem({
  title,
  category,
  text,
  slug,
  image,
}: CaseStudyItemProps) {
  return (
    <div>
      <Link className={styles.caseStudyItem} href={`/case-studies/${slug}`}>
        <div className={styles.caseStudyItemInner}>
          <div className={styles.imageWrapper}>
            <img
              src={image.src}
              alt={image.src}
              width={image.width}
              height={image.height}
              className={styles.image}
            />
          </div>
          <div className={styles.leftSide}>
            <p className={styles.category}>{category}</p>
            <h2 className={styles.caseStudyTitle}>A Case Study_</h2>
            <h2 className={styles.title}>{title}</h2>
          </div>
          <div className={styles.rightSide}>
            <p className={styles.text}>{text}</p>
          </div>
        </div>
      </Link>
    </div>
  );
}
