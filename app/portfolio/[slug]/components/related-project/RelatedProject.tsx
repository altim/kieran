import styles from "./RelatedProject.module.scss";
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
export default function RelatedProject({
  title,
  imageSrc,
  imageAlt,
  imageWidth,
  imageHeight,
  link,
}: RelatedProjectType) {
  return (
    <Link href={link} className={styles.relatedProject}>
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
