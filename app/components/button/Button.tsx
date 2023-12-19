import styles from "./Button.module.scss";
import ArrowRight from "./assets/arrow-right.png";
import Image from "next/image";
import Link from "next/link";
import classNames from "classnames";

type ButtonProps = {
  onClick?: () => void;
  name: string;
  href?: string;
  target?: string;
  className?: string;
};

export default function Button({
  name,
  onClick,
  href,
  target = "_self",
  className,
}: ButtonProps) {
  return href ? (
    <Link
      href={href}
      target={target}
      className={classNames(styles.link, className)}
    >
      <button onClick={onClick} className={styles.button}>
        {name}
        <Image src={ArrowRight} alt={"arrow"} />
      </button>
    </Link>
  ) : (
    <button onClick={onClick} className={classNames(styles.button, className)}>
      {name}
      <Image src={ArrowRight} alt={"arrow"} />
    </button>
  );
}
