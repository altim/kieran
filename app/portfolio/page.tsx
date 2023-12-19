import styles from "./page.module.scss";
import HeaderImage from "@/app/components/header-image/HeaderImage";
import PorfolioItem from "@/app/portfolio/components/portfolio-item/PortfolioItem";

export default function Portfolio() {
  return (
    <>
      <HeaderImage
        src={"/assets/portfolio/portfolio-page-header-image.jpg"}
        alt={"Project"}
        width={920}
        height={448}
        backgroundColor={"gray"}
      />

      <div className={styles.featuredWorkTitle}>
        <div className={styles.featuredTitleInner}>
          <h1>Featured Work</h1>
        </div>
      </div>
      <div className={styles.portfolioItemsList}>
        <PorfolioItem
          imageSrc={"/assets/portfolio/portfolio-item.jpg"}
          imageAlt={"Portfolio Item"}
          imageWidth={448}
          imageHeight={448}
          link={"/portfolio/gopro"}
        >
          <h3>GoPro HERO8 Black</h3>
          <h3>Milan, Italy</h3>
          <p>
            Full Tram wrap featuring Italian MotoGP legend Valentino Rossi and
            GoPro HERO8. As yellow was the primary colour for the GoPro HERO8
            campaign, it made sense to run the Tram on Milan’s historic Yellow
            Line and feature GoPro ‘s most followed athlete and icon of Italian
            sport Valentino Rossi #valeyellow46.
          </p>
          <p>Installation by IGP Decaux.</p>
        </PorfolioItem>
        <PorfolioItem
          imageSrc={"/assets/portfolio/portfolio-item.jpg"}
          imageAlt={"Portfolio Item"}
          imageWidth={448}
          imageHeight={448}
          link={"/portfolio/gopro2"}
          reverse
        >
          <h3>GoPro HERO8 Black</h3>
          <h3>Milan, Italy</h3>
          <p>
            Full Tram wrap featuring Italian MotoGP legend Valentino Rossi and
            GoPro HERO8. As yellow was the primary colour for the GoPro HERO8
            campaign, it made sense to run the Tram on Milan’s historic Yellow
            Line and feature GoPro ‘s most followed athlete and icon of Italian
            sport Valentino Rossi #valeyellow46.
          </p>
          <p>Installation by IGP Decaux.</p>
        </PorfolioItem>
        <PorfolioItem
          imageSrc={"/assets/portfolio/portfolio-item.jpg"}
          imageAlt={"Portfolio Item"}
          imageWidth={448}
          imageHeight={448}
          link={"/portfolio/gopro3"}
        >
          <h3>GoPro HERO8 Black</h3>
          <h3>Milan, Italy</h3>
          <p>
            Full Tram wrap featuring Italian MotoGP legend Valentino Rossi and
            GoPro HERO8. As yellow was the primary colour for the GoPro HERO8
            campaign, it made sense to run the Tram on Milan’s historic Yellow
            Line and feature GoPro ‘s most followed athlete and icon of Italian
            sport Valentino Rossi #valeyellow46.
          </p>
          <p>Installation by IGP Decaux.</p>
        </PorfolioItem>
      </div>
    </>
  );
}
