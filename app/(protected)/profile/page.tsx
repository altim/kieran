import styles from "./page.module.scss";
import Image from "next/image";
import Button from "@/components/button/Button";
import Link from "next/link";
import Brands from "@/app/(protected)/profile/components/brands/Brands.tsx";
import { generalData } from "@/data/data-general.ts";

export default function About() {
  return (
    <>
      <div className={styles.profileTop}>
        <div className={styles.profileTopInner}>
          <div className={styles.blueRectangle} />
          <div className={styles.profileTopText}>
            <h4>Profile</h4>
            <h1>About me</h1>
            <p>
              I am committed to creating nuanced and targeted ways of connecting
              people with products and services.
            </p>
          </div>
          <div className={styles.profileTopRightSide}>
            <Image
              src={"/assets/home/kieran-hurley.jpg"}
              alt={"Kieran Hurley"}
              width={298}
              height={298}
              className={styles.profileImage}
              loading="eager"
            />
            <Link
              href={"https://www.linkedin.com/in/kieran-hurley-44919b5a/"}
              target={"_blank"}
              className={styles.socialIcon}
            >
              <Image
                src={"/assets/profile/linkedin.png"}
                alt={"LinkedIn"}
                width={30}
                height={30}
              />
            </Link>
            <Button
              name={"CV/Resume"}
              id={"cv-download"}
              href={generalData?.cvLink}
              className={styles.actionButton}
              ariaLabel={"Download resume"}
              target={"_blank"}
            />
          </div>
        </div>
      </div>
      <div className={styles.main}>
        <div className={styles.mainInner}>
          <p>
            As a multidisciplinary Art Director and Creative Services
            Professional based in Munich, Germany, I bring a wealth of
            experience collaborating with a diverse range of clients. From
            innovative technical start-ups to esteemed global brands spanning
            Australia, the UK, and Europe, I've consistently delivered
            exceptional results.
          </p>
          <p>
            My expertise lies in crafting compelling advertising and marketing
            campaigns, drawing upon a rich skill set encompassing graphic
            design, photography, copywriting, and digital media. I excel at
            translating intricate concepts into accessible visual language,
            ensuring effective communication.
          </p>
          <p>
            I am committed to creating meaningful and targeted ways of
            connecting people with products and services.
          </p>
          <h3>Interests</h3>
          <p>
            Snowboarding, Road Cycling, Mountain Biking, Travel, Watersports,
            Outdoor/Hiking, Photography, Cinema, Art, Music, Technology and
            Design.
          </p>
          <h3>Memberships and Associations</h3>
          <p>AGDA – Australian Graphic Design Association</p>
          <p>DAV – Deutsche Alpenverein (German Alpine Club)</p>
          <p>Bronte Surf Life Saving Club</p>
          <p>Bondi Icebergs Swimming Club</p>
          <p>BRAT Bondi Running and Triathlon Club</p>
        </div>
      </div>

      <Brands />
    </>
  );
}
