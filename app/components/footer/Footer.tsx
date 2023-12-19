"use client";

import styles from "./Footer.module.scss";
import ArrowUp from "./assets/arrow-up.png";
import Image from "next/image";

export default function Footer() {
  const handleBackToTop = () => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  };
  return (
    <div className={styles.footer}>
      <div className={styles.footerInner}>
        <div className={styles.footerLeft}>
          <p>Interested in working together?</p>
          <p>
            Reach out <a href={"/contacts"}>here</a> or stay in touch via{" "}
            <a
              href={"https://www.linkedin.com/in/kieran-hurley-44919b5a/"}
              target={"_blank"}
            >
              LinkedIn
            </a>
          </p>
        </div>
        <div className={styles.backToTop} onClick={handleBackToTop}>
          <Image src={ArrowUp} alt={"Back to top"} />
        </div>
      </div>
      <div className={styles.copyright}>
        <p>© All rights reserved. Kieran Hurley 2023</p>
      </div>
    </div>
  );
}
