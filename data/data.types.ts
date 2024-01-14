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
  category: Category["slug"];
  paragraphs: ParagraphType[];
  details?: {
    date: string;
    location: string;
    other: string;
  };
  images: ImageType[];
  relatedProjects: string[];
  excerpt: {
    title: string;
    subtitle: string;
    text: string;
    image: Omit<ImageType, "size">;
  };
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
  size: "normal" | "wide" | "double";
};

export type Category = {
  name: string;
  slug: string;
  featuredImage: string;
  featuredImageSmall: string;
};
