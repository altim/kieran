import styles from "./PortfolioItem.module.scss";
import Image from "next/image";
import Button from "@/app/components/button/Button";
import classNames from "classnames";
import { ReactNode } from "react";

type PortfolioItemProps = {
  reverse?: boolean;
  imageSrc: string;
  imageAlt: string;
  imageWidth: number;
  imageHeight: number;
  link: string;
  children: ReactNode;
};
export default function PorfolioItem({
  reverse = false,
  imageSrc,
  imageAlt,
  imageWidth,
  imageHeight,
  link,
  children,
}: PortfolioItemProps) {
  return (
    <div className={styles.portfolioItem}>
      <div
        className={classNames(styles.portfolioItemInner, {
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
            <Button name={"View Project"} href={link} />
          </div>
        </div>
      </div>
    </div>
  );
}
