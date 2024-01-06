export type ProjectType = {
  slug: string;
  featuredImage: {
    src: string;
    alt: string;
    width: number;
    height: number;
  };
  title: string;
  subtitle: string;
  category: {
    name: string;
    slug: string;
  };
  paragraphs: ParagraphType[];
  images: ImageType[];
  relatedProjects: string[];
};

export type ParagraphType = {
  title: string;
  text: string;
};

export type ImageType = {
  src: string;
  alt: string;
  width: number;
  height: number;
  size: "normal" | "fullWidth";
};