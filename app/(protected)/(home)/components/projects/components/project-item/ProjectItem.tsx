import styles from "./ProjectItem.module.scss";
import Image from "next/image";
import Link from "next/link";

type RelatedProjectType = {
  title: string;
  imageSrc: string;
  imageAlt: string;
  imageWidth: number;
  imageHeight: number;
  link: string;
};
export default function ProjectItem({
  title,
  imageSrc,
  imageAlt,
  imageWidth,
  imageHeight,
  link,
}: RelatedProjectType) {
  return (
    <Link href={link} className={styles.project}>
      <Image
        src={imageSrc}
        alt={imageAlt}
        width={448}
        height={448}
        className={styles.image}
      />
      <div className={styles.overlay} />
      <p className={styles.title}>{title}</p>
    </Link>
  );
}
