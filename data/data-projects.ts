import { Category, ProjectType } from "@/data/data.types.ts";

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
      subtitle: "Munich, Germany",
      text: "“They’re on a mission to make better camping products”. Having immersed themselves in the Van Life movement for years, the founders of Campo Libre grew increasingly dissatisfied with the offerings in the camping market. The challenge was to create a camping brand target to a young adult  market with the mindset more akin to that of a skate, surf brand.",
      image: {
        src: "/assets/portfolio/campo-libre/campo-libre-1.jpg",
        alt: "Campo Libre",
        width: 448,
        height: 448,
      },
    },
  },

  {
    slug: "gopro-creator-summit",
    featuredImage: {
      src: "/assets/portfolio/gp-slovenia/gp-slovenia-4.jpg",
      alt: "GP Slovenia",
      width: 920,
      height: 448,
    },

    title: "GoPro Creator Summit",
    subtitle: "Bled, Slovenia",
    category: "branding",
    paragraph:
      "Following the launch of the HERO12 camera. GoPro invited a select group of athletes, advocates, and leading content creators to Bled, Slovenia. The purpose of the summit was to give hands-on product training and take part in some extreme activities in one of the world’s most spectacular playgrounds.",
    details: {
      date: "",
      location: "Bled, Slovenia",
      other: "",
    },
    images: [
      {
        src: "/assets/portfolio/gp-slovenia/gp-slovenia-3.jpg",
        alt: "GP Slovenia",
        width: 448,
        height: 448,
        size: "double",
      },
      {
        src: "/assets/portfolio/gp-slovenia/gp-slovenia-2.jpg",
        alt: "GP Slovenia",
        width: 448,
        height: 212,
        size: "wide",
      },
      {
        src: "/assets/portfolio/gp-slovenia/gp-slovenia-5.jpg",
        alt: "GP Slovenia",
        width: 212,
        height: 212,
        size: "normal",
      },
      {
        src: "/assets/portfolio/gp-slovenia/gp-slovenia-6.jpg",
        alt: "GP Slovenia",
        width: 212,
        height: 212,
        size: "normal",
      },
    ],
    relatedProjects: [],
    excerpt: {
      title: "GoPro Creator Summit",
      subtitle: "Bled, Slovenia",
      text: "Following the launch of the HERO12 camera. GoPro invited a select group of athletes, advocates, and leading content creators to Bled, Slovenia. The purpose of the summit was to give hands-on product training and take part in some extreme activities in one of the world’s most spectacular playgrounds.",
      image: {
        src: "/assets/portfolio/gp-slovenia/gp-slovenia-1.jpg",
        alt: "GP Slovenia",
        width: 448,
        height: 448,
      },
    },
  },

  {
    slug: "simscale",
    featuredImage: {
      src: "/assets/portfolio/simscale/simscale-1.jpg",
      alt: "SimScale",
      width: 920,
      height: 448,
    },

    title: "SimScale",
    subtitle: "Munich, Germany",
    category: "branding",
    paragraph:
      "SimScale, established in Munich in 2012, is a pioneering engineering software startup. Its cloud-based platform revolutionizes the capabilities of engineers and designers globally by enabling robust Computational Fluid Dynamics (CFD), Finite Element Analysis (FEA), and thermal analysis. This groundbreaking technology dismantles numerous barriers that engineering firms encounter in realising their projects.",
    details: {
      date: "",
      location: "Munich, Germany",
      other: "",
    },
    images: [
      {
        src: "/assets/portfolio/simscale/simscale-3.jpg",
        alt: "SimScale",
        width: 448,
        height: 448,
        size: "double",
      },
      {
        src: "/assets/portfolio/simscale/simscale-4.jpg",
        alt: "SimScale",
        width: 448,
        height: 212,
        size: "wide",
      },
      {
        src: "/assets/portfolio/simscale/simscale-5.jpg",
        alt: "SimScale",
        width: 212,
        height: 212,
        size: "normal",
      },
      {
        src: "/assets/portfolio/simscale/simscale-6.jpg",
        alt: "SimScale",
        width: 212,
        height: 212,
        size: "normal",
      },
    ],
    relatedProjects: [],
    excerpt: {
      title: "SimScale",
      subtitle: "Munich, Germany",
      text: "SimScale, established in Munich in 2012, is a pioneering engineering software startup. Its cloud-based platform revolutionizes the capabilities of engineers and designers globally by enabling robust Computational Fluid Dynamics (CFD), Finite Element Analysis (FEA), and thermal analysis. This groundbreaking technology dismantles numerous barriers that engineering firms encounter in realising their projects.",
      image: {
        src: "/assets/portfolio/simscale/simscale-2.jpg",
        alt: "SimScale",
        width: 448,
        height: 448,
      },
    },
  },

  {
    slug: "quince",
    featuredImage: {
      src: "/assets/portfolio/quince/quince-1.jpg",
      alt: "Quince",
      width: 920,
      height: 448,
    },

    title: "Quince",
    subtitle: "Sydney, Australia",
    category: "branding",
    paragraph:
      "Quince Café has opened its doors in two of Sydney's premier shopping destinations, Westfield Bondi Junction and Eastgardens. I was entrusted  to craft a brand that exudes simplicity and elegance, embodying the essence of superior quality produce and service within a relaxed and inviting atmosphere.",
    details: {
      date: "",
      location: "Sydney, Australia",
      other: "",
    },
    images: [
      {
        src: "/assets/portfolio/quince/quince-3.jpg",
        alt: "SimScale",
        width: 448,
        height: 448,
        size: "double",
      },
      {
        src: "/assets/portfolio/quince/quince-4.jpg",
        alt: "SimScale",
        width: 448,
        height: 212,
        size: "wide",
      },
      {
        src: "/assets/portfolio/quince/quince-5.jpg",
        alt: "SimScale",
        width: 212,
        height: 212,
        size: "normal",
      },
      {
        src: "/assets/portfolio/quince/quince-6.jpg",
        alt: "SimScale",
        width: 212,
        height: 212,
        size: "normal",
      },
    ],
    relatedProjects: [],
    excerpt: {
      title: "Quince",
      subtitle: "Sydney, Australia",
      text: "Quince Café has opened its doors in two of Sydney's premier shopping destinations, Westfield Bondi Junction and Eastgardens. I was entrusted  to craft a brand that exudes simplicity and elegance, embodying the essence of superior quality produce and service within a relaxed and inviting atmosphere.",
      image: {
        src: "/assets/portfolio/quince/quince-2.jpg",
        alt: "SimScale",
        width: 448,
        height: 448,
      },
    },
  },
];
