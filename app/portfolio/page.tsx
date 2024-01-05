import Link from "next/link";
import styles from "./page.module.scss";

export default function PortfolioHub() {
  return (
    <div className={styles.portfolioHub}>
      <div className={styles.portfolioHubInner}>
        <Link href={"/portfolio/featured"}>Featured Work</Link>
        <br />
        <Link href={"/portfolio/cat1"}>Category2</Link>
        <br />
        <Link href={"/portfolio/cat2"}>Category3</Link>
        <br />
        <Link href={"/portfolio/cat3"}>Category4</Link>
        <br />
      </div>
    </div>
  );
}
