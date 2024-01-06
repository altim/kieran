import styles from "./page.module.scss";
import HeaderImage from "@/app/components/header-image/HeaderImage";
import PortfolioItem from "@/app/portfolio/[category]/components/portfolio-item/PortfolioItem";
import { projects } from "@/data/data.ts";
import { ProjectType } from "@/data/data.types.ts";
import Link from "next/link";
import Button from "@/app/components/button/Button.tsx";

export default function PortfolioCategory({
  params,
}: {
  params: { category: string };
}) {
  const categoryProjects = projects.filter(
    (item) => item.category === params.category,
  );

  if (!categoryProjects.length) {
    return (
      <div className={styles.category404}>
        <div className={styles.category404Inner}>
          <h2>There are no projects in this category.</h2>
          <Link href={"/portfolio"}>Go back</Link>
        </div>
      </div>
    );
  }
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
        <PortfolioItem
          imageSrc={"/assets/portfolio/portfolio-item.jpg"}
          imageAlt={"Portfolio Item"}
          imageWidth={448}
          imageHeight={448}
          link={"/portfolio/featured/gopro"}
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
        </PortfolioItem>
        <PortfolioItem
          imageSrc={"/assets/portfolio/portfolio-item.jpg"}
          imageAlt={"Portfolio Item"}
          imageWidth={448}
          imageHeight={448}
          link={"/portfolio/featured/gopro2"}
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
        </PortfolioItem>
        <PortfolioItem
          imageSrc={"/assets/portfolio/portfolio-item.jpg"}
          imageAlt={"Portfolio Item"}
          imageWidth={448}
          imageHeight={448}
          link={"/portfolio/featured/gopro3"}
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
        </PortfolioItem>
      </div>
    </>
  );
}
