"use client";

import styles from "./Footer.module.scss";
import ArrowUp from "./assets/arrow-up.png";
import Image from "next/image";
import { usePathname } from "next/navigation";

export default function Footer() {
  const pathname = usePathname();

  const handleBackToTop = () => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  };

  const showFooterTop = !["/contact"].includes(pathname);

  return (
    <div className={styles.footer}>
      <div className={styles.footerInner}>
        {showFooterTop && (
          <div className={styles.footerTop}>
            <div className={styles.footerLeft}>
              <p>Interested in working together?</p>
              <p>
                Reach out <a href={"/contact"}>via contact page</a> or stay in
                touch via{" "}
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
        )}
      </div>
      <div className={styles.copyright}>
        <p>© All rights reserved. Kieran Hurley 2023</p>
      </div>
    </div>
  );
}
