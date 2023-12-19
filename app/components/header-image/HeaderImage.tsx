import styles from "./HeaderImage.module.scss";
import Image from "next/image";
import classNames from "classnames";

type HeaderImageProps = {
  src: string;
  alt: string;
  width: number;
  height: number;
  backgroundColor: "white" | "gray";
};
export default function HeaderImage({
  src,
  alt,
  width,
  height,
  backgroundColor,
}: HeaderImageProps) {
  return (
    <div
      className={classNames(styles.headerImage, {
        [styles.whiteBgd]: backgroundColor === "white",
        [styles.grayBgd]: backgroundColor === "gray",
      })}
    >
      <div className={styles.headerImageInner}>
        <div className={styles.blueRectangle} />
      </div>
      <div className={styles.headerImage}>
        <Image src={src} alt={alt} width={width} height={height} />
      </div>
    </div>
  );
}
