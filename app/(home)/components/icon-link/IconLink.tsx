import styles from "./IconLink.module.scss";
import Image from "next/image";
import Link from "next/link";

type IconLinkProps = {
  link: string;
  image: string;
  imageAlt: string;
  imageWidth: number;
  imageHeight: number;
  title: string;
  subtitle: string;
  target?: string;
};
export default function IconLink({
  link,
  image,
  imageAlt,
  imageWidth,
  imageHeight,
  title,
  subtitle,
  target = "_self",
}: IconLinkProps) {
  return (
    <Link href={link} target={target} className={styles.iconLink}>
      <Image
        src={image}
        alt={imageAlt}
        width={imageWidth}
        height={imageHeight}
      />
      <p className={styles.title}>{title}</p>
      <p className={styles.subtitle}>{subtitle}</p>
    </Link>
  );
}
