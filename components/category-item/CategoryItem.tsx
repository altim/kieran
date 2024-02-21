import styles from "./CategoryItem.module.scss";
import Image from "next/image";
import Button from "@/components/button/Button";
import classNames from "classnames";
import { ReactNode } from "react";

type CategoryItemProps = {
  projectSlug: string;
  reverse?: boolean;
  imageSrc: string;
  imageAlt: string;
  imageWidth: number;
  imageHeight: number;
  link: string;
  children: ReactNode;
};
export default function CategoryItem({
  projectSlug,
  reverse = false,
  imageSrc,
  imageAlt,
  imageWidth,
  imageHeight,
  link,
  children,
}: CategoryItemProps) {
  return (
    <div className={styles.categoryItem}>
      <div
        className={classNames(styles.categoryItemInner, {
          [styles.reverse]: reverse,
        })}
      >
        <div>
          <Image
            src={imageSrc}
            alt={imageAlt}
            width={imageWidth}
            height={imageHeight}
            className={styles.image}
          />
        </div>

        <div className={styles.content}>
          <div>{children}</div>
          <div className={classNames(styles.actionButton)}>
            <Button
              name={"View Project"}
              href={link}
              id={`link-to-${projectSlug}`}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
