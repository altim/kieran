"use client";
import dataBrands, { BrandType } from "../../../../../data/data-brands.ts";
import styles from "./Brands.module.scss";
import Image from "next/image";
import Button from "@/components/button/Button.tsx";

export default function Brands() {
  return (
    <div className={styles.brands}>
      <div className={styles.brandsInner}>
        <h2>Some of the brands I have worked with.</h2>
        <div className={styles.brandsList}>
          {dataBrands.map((item: BrandType) => (
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
          <Button
            name={"View portfolio"}
            href={"/portfolio"}
            id={"portfolio-link"}
          />
        </div>
      </div>
    </div>
  );
}
