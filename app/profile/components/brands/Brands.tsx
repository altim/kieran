"use client";
import brands, { BrandType } from "./brands.ts";
import styles from "./Brands.module.scss";
import Image from "next/image";
import Button from "../../../components/button/Button";

export default function Brands() {
  return (
    <div className={styles.brands}>
      <div className={styles.brandsInner}>
        <h2>Some of the brands I have worked with.</h2>
        <div className={styles.brandsList}>
          {brands.map((item: BrandType) => (
            <div className={styles.brandItem} key={item.id}>
              <Image
                alt={item.name}
                src={item.image}
                width={156}
                height={123}
              />
            </div>
          ))}
        </div>
        <div className={styles.actionButton}>
          <Button name={"View portfolio"} href={"/portfolio"} />
        </div>
      </div>
    </div>
  );
}
