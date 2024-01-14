type CaseStudyItemProps = {
  title: string;
  category: string;
  text: string;
  slug: string;
  image: {
    src: string;
    alt: string;
    width: number;
    height: number;
  };
};
export default function CaseStudyItem({
  title,
  category,
  text,
  slug,
  image,
}: CaseStudyItemProps) {
  return <h1>Case Study Item</h1>;
}
