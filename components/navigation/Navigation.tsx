"use client";
import styles from "./Navigation.module.scss";
import { useState } from "react";
import { usePathname } from "next/navigation";
import classNames from "classnames";

const menu = [
  {
    name: "Profile",
    url: "/profile",
  },
  {
    name: "Portfolio",
    url: "/portfolio",
  },
  {
    name: "Case Studies",
    url: "/case-studies",
  },
  {
    name: "Contact",
    url: "/contact",
  },
];

export default function Navigation() {
  const [showMobileMenu, setShowMobileMenu] = useState(false);
  const pathname = usePathname();

  console.log("pathname:", pathname);

  const toggleMobileMenu = () => {
    setShowMobileMenu(!showMobileMenu);
  };

  return (
    <>
      <div className={styles.navigation}>
        <div className={styles.navigationInner}>
          <a href={"/"}>
            <h1>hurleydesign.me</h1>
          </a>

          <div className={styles.menu}>
            {menu.map((item) => (
              <a
                key={item.name}
                href={item.url}
                className={classNames({
                  [styles.selectedMenuItem]: item.url === pathname,
                })}
              >
                {item.name}
              </a>
            ))}
          </div>

          <div className={styles.mobileMenuBtn}>
            {!showMobileMenu && (
              <button onClick={toggleMobileMenu}>
                <svg
                  className="feather feather-menu"
                  fill="none"
                  height="24"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                  width="24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <line x1="3" x2="21" y1="12" y2="12" />
                  <line x1="3" x2="21" y1="6" y2="6" />
                  <line x1="3" x2="21" y1="18" y2="18" />
                </svg>
              </button>
            )}
          </div>
        </div>
      </div>
      <div className={styles.navigationBottom} />

      <div
        className={classNames(styles.mobileMenuOverlay, {
          [styles.mobileMenuOpen]: showMobileMenu,
        })}
      >
        <div className={styles.mobileOverlayHeader}>
          <button onClick={toggleMobileMenu}>
            <svg
              fill="none"
              height="24"
              viewBox="0 0 24 24"
              width="24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M6.2253 4.81108C5.83477 4.42056 5.20161 4.42056 4.81108 4.81108C4.42056 5.20161 4.42056 5.83477 4.81108 6.2253L10.5858 12L4.81114 17.7747C4.42062 18.1652 4.42062 18.7984 4.81114 19.1889C5.20167 19.5794 5.83483 19.5794 6.22535 19.1889L12 13.4142L17.7747 19.1889C18.1652 19.5794 18.7984 19.5794 19.1889 19.1889C19.5794 18.7984 19.5794 18.1652 19.1889 17.7747L13.4142 12L19.189 6.2253C19.5795 5.83477 19.5795 5.20161 19.189 4.81108C18.7985 4.42056 18.1653 4.42056 17.7748 4.81108L12 10.5858L6.2253 4.81108Z"
                fill="currentColor"
              />
            </svg>
          </button>
        </div>
        <div className={styles.mobileOverlayMain}>
          <h3>
            Kieran
            <br />
            Hurley
          </h3>
          {menu.map((item) => (
            <a
              key={item.name}
              href={item.url}
              className={classNames({
                [styles.selectedMobileMenuItem]: item.url === pathname,
              })}
            >
              {item.name}
            </a>
          ))}
        </div>
      </div>
    </>
  );
}
