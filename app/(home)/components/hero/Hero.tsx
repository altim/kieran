import styles from "./Hero.module.scss";
import Image from "next/image";
import IconLink from "@/app/(home)/components/icon-link/IconLink";

export default function Hero() {
  return (
    <div className={styles.hero}>
      <div className={styles.blueRibbon} />
      <div className={styles.heroInner}>
        <Image
          src={`/assets/home/kieran-hurley.jpg`}
          alt={"Kieran Hurley"}
          width={298}
          height={298}
          className={styles.heroImage}
          loading={"eager"}
        />
        <h1 className={styles.title}>
          Kieran
          <br />
          Hurley
        </h1>
        <h2 className={styles.description}>
          I am committed to creating meaningful and targeted ways of connecting
          people with products and services.
        </h2>
        <div className={styles.links}>
          <IconLink
            link={"tel:+4915227888481"}
            image={"/assets/home/phone.png"}
            imageAlt={"Phone"}
            imageWidth={51}
            imageHeight={51}
            title={"Phone"}
            subtitle={"+49 (0) 15227888481"}
          />
          <IconLink
            link={"mailto:kieranhurley@me.com"}
            image={"/assets/home/mail.png"}
            imageAlt={"Email"}
            imageWidth={66}
            imageHeight={66}
            title={"Email"}
            subtitle={"kieranhurley@me.com"}
          />
          <IconLink
            link={
              "https://www.google.com/maps/place/Munich,+Germany/@48.1548812,11.4592643,12z/data=!3m1!4b1!4m6!3m5!1s0x479e75f9a38c5fd9:0x10cb84a7db1987d!8m2!3d48.1351253!4d11.5819805!16s%2Fm%2F02h6_6p?entry=ttu"
            }
            image={"/assets/home/map.png"}
            imageAlt={"Location"}
            imageWidth={54}
            imageHeight={54}
            title={"Location"}
            subtitle={"Munich, Germany"}
            target={"_blank"}
          />

          <IconLink
            link={"https://www.linkedin.com/in/kieran-hurley-44919b5a/"}
            image={"/assets/home/linkedin.png"}
            imageAlt={"LinkedIn"}
            imageWidth={42}
            imageHeight={42}
            title={"LinkedIn"}
            subtitle={"Click here to stay in touch"}
            target={"_blank"}
          />
        </div>
      </div>
    </div>
  );
}
