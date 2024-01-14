import styles from "./CategoryLink.module.scss";
import Image from "next/image";
import Link from "next/link";
import { getCategoryBySlug } from "@/helpers/categoryHelpers.ts";

type CategoryLinkType = {
  category: string;
};
export default function CategoryLink({ category }: CategoryLinkType) {
  const currentCategory = getCategoryBySlug(category);

  if (!currentCategory) return null;

  const categoryLink = `/portfolio/${currentCategory.slug}`;

  return (
    <Link href={categoryLink} className={styles.categoryLink}>
      <Image
        src={currentCategory.featuredImageSmall}
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
