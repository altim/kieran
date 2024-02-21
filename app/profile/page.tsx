import styles from "./page.module.scss";
import Image from "next/image";
import Button from "@/components/button/Button";
import Link from "next/link";
import Brands from "@/app/profile/components/brands/Brands.tsx";

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
              href={"/cv"}
              className={styles.actionButton}
              ariaLabel={"Download resume"}
            />
          </div>
        </div>
      </div>
      <div className={styles.main}>
        <div className={styles.mainInner}>
          <p>
            I am a multidisciplinary art director and creative services
            professional based in Munich, Germany. I have worked with a range of
            clients, from technical start-ups to globally recognised brands in
            Australia, UK, and Europe.
          </p>
          <p>
            With profound knowledge and experience in producing advertising and
            marketing campaigns. My skillset is founded in graphic design,
            photography, copywriting, and digital media. My expertise lies in
            turning complex topics into simple visual language. I am committed
            to creating nuanced and targeted ways of connecting people with
            products and services through meaningful, strategic design and
            experiences.
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
