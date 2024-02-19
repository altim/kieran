import { CaseStudyType, Category, ProjectType } from "@/data/data.types.ts";

export const categories: Category[] = [
  {
    slug: "branding",
    name: "Branding",
    featuredImage: "/assets/categories/featured-work.jpg",
    featuredImageSmall: "/assets/categories/featured-work-small.jpg",
  },
  {
    slug: "advertising-and-marketing",
    name: "Advertising & Marketing",
    featuredImage: "/assets/categories/category1.jpg",
    featuredImageSmall: "/assets/categories/category1-small.jpg",
  },
  {
    slug: "Digital",
    name: "Digital",
    featuredImage: "/assets/categories/category2.jpg",
    featuredImageSmall: "/assets/categories/category1-small.jpg",
  },
  {
    slug: "exhibition-spaces-and-display",
    name: "Exhibition Spaces & Display",
    featuredImage: "/assets/categories/category3.jpg",
    featuredImageSmall: "/assets/categories/category1-small.jpg",
  },
  {
    slug: "events",
    name: "Events",
    featuredImage: "/assets/categories/category3.jpg",
    featuredImageSmall: "/assets/categories/category1-small.jpg",
  },
  {
    slug: "packaging-and-merchandise",
    name: "Packaging & Merchandise",
    featuredImage: "/assets/categories/category3.jpg",
    featuredImageSmall: "/assets/categories/category1-small.jpg",
  },
];

export const projects: ProjectType[] = [
  {
    slug: "campo-libre",
    featuredImage: {
      src: "/assets/portfolio/campo-libre/campo-libre-2.jpg",
      alt: "Campo Libre",
      width: 920,
      height: 448,
    },

    title: "Campo Libre",
    subtitle: "Munich, Germany",
    category: "branding",
    paragraph:
      "“They’re on a mission to make better camping products”. Having immersed themselves in the Van Life movement for years, the founders of Campo Libre grew increasingly dissatisfied with the offerings in the camping market. The challenge was to create a camping brand target to a young adult  market with the mindset more akin to that of a skate, surf brand.",
    details: {
      date: "",
      location: "Munich, Germany",
      other: "",
    },
    images: [
      {
        src: "/assets/portfolio/campo-libre/campo-libre-3.jpg",
        alt: "Campo Libre",
        width: 448,
        height: 448,
        size: "double",
      },
      {
        src: "/assets/portfolio/campo-libre/campo-libre-4.jpg",
        alt: "Campo Libre",
        width: 448,
        height: 212,
        size: "wide",
      },
      {
        src: "/assets/portfolio/campo-libre/campo-libre-5.jpg",
        alt: "Campo Libre",
        width: 212,
        height: 212,
        size: "normal",
      },
      {
        src: "/assets/portfolio/campo-libre/campo-libre-6.jpg",
        alt: "Campo Libre",
        width: 212,
        height: 212,
        size: "normal",
      },
    ],
    relatedProjects: [],
    excerpt: {
      title: "Campo Libre",
      subtitle: "Munich Germany",
      text: "“They’re on a mission to make better camping products”. Having immersed themselves in the Van Life movement for years, the founders of Campo Libre grew increasingly dissatisfied with the offerings in the camping market. The challenge was to create a camping brand target to a young adult  market with the mindset more akin to that of a skate, surf brand.",
      image: {
        src: "/assets/portfolio/campo-libre/campo-libre-1.jpg",
        alt: "Campo Libre",
        width: 448,
        height: 448,
      },
    },
  },
];
