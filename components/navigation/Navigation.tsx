import styles from "./Navigation.module.scss";

export default function Navigation() {
  return (
    <>
      <div className={styles.navigation}>
        <div className={styles.navigationInner}>
          <a href={"/"}>
            <h1>hurleydesign.me</h1>
          </a>

          <div className={styles.menu}>
            <a href={"/profile"}>Profile</a>
            <a href={"/portfolio"}>Portfolio</a>
            <a href={"/case-studies"}>Case Studies</a>
            <a href={"/contact"}>Contact</a>
          </div>
        </div>
      </div>
      <div className={styles.navigationBottom} />
    </>
  );
}
