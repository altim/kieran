import styles from "./Button.module.scss";
import ArrowRight from "./assets/arrow-right.png";
import Image from "next/image";
import Link from "next/link";
import classNames from "classnames";

type ButtonProps = {
  onClick?: () => void;
  id: string;
  name: string;
  href?: string;
  target?: string;
  className?: string;
  ariaLabel?: string;
};

export default function Button({
  name,
  onClick,
  href,
  target = "_self",
  className,
  ariaLabel = name,
  ...restProps
}: ButtonProps) {
  return href ? (
    <Link
      href={href}
      target={target}
      className={classNames(styles.link, className)}
    >
      <button
        onClick={onClick}
        className={styles.button}
        aria-label={ariaLabel}
        {...restProps}
      >
        {name}
        <svg
          height="25"
          viewBox="0 0 16 16"
          width="25"
          xmlns="http://www.w3.org/2000/svg"
        >
          <polygon
            fillRule="evenodd"
            points="10.586 9 2 9 2 7 10.586 7 7.293 3.707 8.707 2.293 14.414 8 8.707 13.707 7.293 12.293 10.586 9"
          />
        </svg>
      </button>
    </Link>
  ) : (
    <button onClick={onClick} className={classNames(styles.button, className)}>
      {name}
      <svg
        height="25"
        viewBox="0 0 16 16"
        width="25"
        xmlns="http://www.w3.org/2000/svg"
      >
        <polygon
          fillRule="evenodd"
          points="10.586 9 2 9 2 7 10.586 7 7.293 3.707 8.707 2.293 14.414 8 8.707 13.707 7.293 12.293 10.586 9"
        />
      </svg>
    </button>
  );
}
