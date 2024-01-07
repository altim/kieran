import styles from "./CategoryLink.module.scss";
import Image from "next/image";
import Link from "next/link";
import {
  getCategoryBySlug,
  getCSCategoryBySlug,
} from "@/app/helpers/categoryHelpers.ts";

type CategoryLinkType = {
  category: string;
  categoryType: "project" | "caseStudy";
};
export default function CategoryLink({
  category,
  categoryType,
}: CategoryLinkType) {
  const currentCategory =
    categoryType === "project"
      ? getCategoryBySlug(category)
      : getCSCategoryBySlug(category);

  if (!currentCategory) return null;

  const categoryLink =
    categoryType === "project"
      ? `/portfolio/${currentCategory.slug}`
      : `/case-studies/${currentCategory.slug}`;

  return (
    <Link href={categoryLink} className={styles.categoryLink}>
      <Image
        src={currentCategory.featuredImage}
        alt={currentCategory.name}
        width={920}
        height={448}
        className={styles.image}
      />
      <div className={styles.overlay} />
      <p className={styles.title}>{currentCategory.name}</p>
    </Link>
  );
}
