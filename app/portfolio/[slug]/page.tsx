import HeaderImage from "@/app/components/header-image/HeaderImage";
import styles from "./page.module.scss";
import { portfolioItems, PortfolioItemsType } from "./data";
import { notFound } from "next/navigation";
import Image from "next/image";
import classNames from "classnames";
import ProjectItem from "@/app/(home)/components/projects/components/project-item/ProjectItem.tsx";

export async function generateStaticParams() {
  return portfolioItems.map((item) => ({
    slug: item.slug,
  }));
}

export default function PortfolioItem({
  params,
}: {
  params: { slug: string };
}) {
  const portfolioItem = portfolioItems.find(
    (item: PortfolioItemsType) => item.slug === params.slug,
  );

  const relatedProjects = portfolioItems.filter(
    (item) => portfolioItem?.relatedProjects.includes(item.slug),
  );

  if (!portfolioItem) {
    notFound();
  }

  return (
    <>
      <HeaderImage
        src={portfolioItem.featuredImage.src}
        alt={portfolioItem.featuredImage.alt}
        width={portfolioItem.featuredImage.width}
        height={portfolioItem.featuredImage.height}
        backgroundColor={"white"}
      />
      <div className={styles.portfolioItemTitle}>
        <div className={styles.portfolioItemTitleInner}>
          <h1>{portfolioItem.title}</h1>
          <h2>{portfolioItem.subtitle}</h2>
        </div>
      </div>

      <div className={styles.main}>
        <div className={styles.mainInner}>
          <div className={styles.paragraphsList}>
            {portfolioItem.paragraphs.map((item, index) => (
              <div className={styles.paragraph} key={`paragraph-${index}`}>
                <h4>{item.title}</h4>
                <p>{item.text}</p>
              </div>
            ))}
          </div>

          <div className={styles.imageList}>
            {portfolioItem.images.map((item, index) => (
              <div
                key={`image-${index}`}
                className={classNames({
                  [styles.imgFullWidth]: item.size === "fullWidth",
                })}
              >
                <Image
                  src={item.src}
                  alt={item.alt}
                  width={item.width}
                  height={item.height}
                />
              </div>
            ))}
          </div>

          <div className={styles.relatedProjects}>
            <h3>Related Projects</h3>
            <div className={styles.relatedProjectsList}>
              {relatedProjects.map((item, index) => (
                <ProjectItem
                  key={`related-project-${index}`}
                  title={item.title}
                  imageSrc={item.featuredImage.src}
                  imageAlt={item.featuredImage.alt}
                  imageWidth={item.featuredImage.width}
                  imageHeight={item.featuredImage.height}
                  link={`/portfolio/${item.slug}`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
