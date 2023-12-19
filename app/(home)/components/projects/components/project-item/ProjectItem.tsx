import styles from "./ProjectItem.module.scss";
import Link from "next/link";

type ProjectItemProps = {
  title: string;
  href: string;
};
export default function ProjectItem({ title, href }: ProjectItemProps) {
  return (
    <Link href={href} className={styles.projectItem}>
      {title}
    </Link>
  );
}
