import { Category, ProjectType } from "@/data/data.types.ts";

export const categories: Category[] = [
  {
    slug: "featured",
    name: "Featured Work",
    featuredImage: "/assets/categories/featuredWork.jpg",
  },
  {
    slug: "cat1",
    name: "Category1",
    featuredImage: "/assets/categories/category1.jpg",
  },
  {
    slug: "cat2",
    name: "Category2",
    featuredImage: "/assets/categories/category2.jpg",
  },
  {
    slug: "cat3",
    name: "Category3",
    featuredImage: "/assets/categories/category3.jpg",
  },
];

export const caseStudyCategories: Category[] = [
  {
    slug: "case1",
    name: "Case1",
    featuredImage: "/assets/categories-case-study/case1.jpg",
  },
  {
    slug: "case2",
    name: "Case2",
    featuredImage: "/assets/categories-case-study/case2.jpg",
  },
  {
    slug: "case3",
    name: "Case3",
    featuredImage: "/assets/categories-case-study/case3.jpg",
  },
  {
    slug: "case4",
    name: "Case4",
    featuredImage: "/assets/categories-case-study/case4.jpg",
  },
];

export const projects: ProjectType[] = [
  {
    slug: "gopro",
    featuredImage: {
      src: "/assets/portfolio/project1/featured.jpg",
      alt: "Featured Image",
      width: 920,
      height: 448,
    },

    title: "GoPro",
    subtitle: "OOH / Experiential",
    category: "featured",
    paragraphs: [
      {
        title: "",
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam consequat faucibus hendrerit. Quisque a tellus sollicitudin quam congue volutpat a non nulla. Aenean sollicitudin malesuada lacus, sit amet vestibulum ipsum condimentum vel. Curabitur vitae nunc accumsan, euismod justo vel, ornare dolor. Cras nec orci sapien. Ut ornare et est et aliquam. Nulla at hendrerit velit. Donec sed interdum augue. Suspendisse turpis orci, pretium vel porta quis, vehicula ac erat. Etiam feugiat ac sem eget fermentum. Mauris eget augue at enim condimentum pellentesque. Integer luctus, lectus id dignissim lobortis, risus quam sodales ex, vel cursus ante massa quis massa. Vestibulum ultricies aliquet purus, nec rutrum arcu scelerisque nec. Phasellus vestibulum est a consequat rhoncus.",
      },
    ],
    details: {
      date: "01-01-2024",
      location: "Munich",
      other: "Lorem ipsum",
    },
    images: [
      {
        src: "/assets/portfolio/project1/project1-image1.jpg",
        alt: "Portfolio Item Image",
        width: 448,
        height: 448,
        size: "double",
      },
      {
        src: "/assets/portfolio/project1/project1-image2.jpg",
        alt: "Portfolio Item Image",
        width: 448,
        height: 212,
        size: "wide",
      },
      {
        src: "/assets/portfolio/project1/project1-image1.jpg",
        alt: "Portfolio Item Image",
        width: 212,
        height: 212,
        size: "normal",
      },
      {
        src: "/assets/portfolio/project1/project1-image1.jpg",
        alt: "Portfolio Item Image",
        width: 212,
        height: 212,
        size: "normal",
      },
    ],
    relatedProjects: ["gopro", "gopro2"],
    excerpt: {
      title: "GoPro HERO8 Black",
      subtitle: "Milan, Italy",
      text: "Full Tram wrap featuring Italian MotoGP legend Valentino Rossi and GoPro HERO8. As yellow was the primary colour for the GoPro HERO8 campaign, it made sense to run the Tram on Milan’s historic Yellow Line and feature GoPro‘s most followed athlete and icon of Italian sport Valentino Rossi #valeyellow46.",
      image: {
        src: "/assets/portfolio/project1/excerpt.jpg",
        alt: "GoPro",
        width: 448,
        height: 448,
      },
    },
  },

  {
    slug: "gopro2",
    featuredImage: {
      src: "/assets/portfolio/project1/featured.jpg",
      alt: "Featured Image",
      width: 920,
      height: 448,
    },

    title: "GoPro 2",
    subtitle: "OOH / Experiential",
    category: "featured",
    paragraphs: [
      {
        title: "",
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam consequat faucibus hendrerit. Quisque a tellus sollicitudin quam congue volutpat a non nulla. Aenean sollicitudin malesuada lacus, sit amet vestibulum ipsum condimentum vel. Curabitur vitae nunc accumsan, euismod justo vel, ornare dolor. Cras nec orci sapien. Ut ornare et est et aliquam. Nulla at hendrerit velit. Donec sed interdum augue. Suspendisse turpis orci, pretium vel porta quis, vehicula ac erat. Etiam feugiat ac sem eget fermentum. Mauris eget augue at enim condimentum pellentesque. Integer luctus, lectus id dignissim lobortis, risus quam sodales ex, vel cursus ante massa quis massa. Vestibulum ultricies aliquet purus, nec rutrum arcu scelerisque nec. Phasellus vestibulum est a consequat rhoncus.",
      },
    ],
    details: {
      date: "01-01-2024",
      location: "Munich",
      other: "Lorem ipsum",
    },
    images: [
      {
        src: "/assets/portfolio/project1/project1-image1.jpg",
        alt: "Portfolio Item Image",
        width: 448,
        height: 448,
        size: "normal",
      },
      {
        src: "/assets/portfolio/project1/project1-image1.jpg",
        alt: "Portfolio Item Image",
        width: 448,
        height: 448,
        size: "normal",
      },
      {
        src: "/assets/portfolio/project1/project1-image2.jpg",
        alt: "Portfolio Item Image",
        width: 920,
        height: 448,
        size: "wide",
      },
    ],
    relatedProjects: ["gopro", "gopro2"],
    excerpt: {
      title: "GoPro HERO8 Black",
      subtitle: "Milan, Italy",
      text: "Full Tram wrap featuring Italian MotoGP legend Valentino Rossi and GoPro HERO8. As yellow was the primary colour for the GoPro HERO8 campaign, it made sense to run the Tram on Milan’s historic Yellow Line and feature GoPro‘s most followed athlete and icon of Italian sport Valentino Rossi #valeyellow46.",
      image: {
        src: "/assets/portfolio/project1/excerpt.jpg",
        alt: "GoPro",
        width: 448,
        height: 448,
      },
    },
  },

  {
    slug: "gopro3",
    featuredImage: {
      src: "/assets/portfolio/project1/featured.jpg",
      alt: "Featured Image",
      width: 920,
      height: 448,
    },

    title: "GoPro 3",
    subtitle: "OOH / Experiential",
    category: "featured",
    paragraphs: [
      {
        title: "",
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam consequat faucibus hendrerit. Quisque a tellus sollicitudin quam congue volutpat a non nulla. Aenean sollicitudin malesuada lacus, sit amet vestibulum ipsum condimentum vel. Curabitur vitae nunc accumsan, euismod justo vel, ornare dolor. Cras nec orci sapien. Ut ornare et est et aliquam. Nulla at hendrerit velit. Donec sed interdum augue. Suspendisse turpis orci, pretium vel porta quis, vehicula ac erat. Etiam feugiat ac sem eget fermentum. Mauris eget augue at enim condimentum pellentesque. Integer luctus, lectus id dignissim lobortis, risus quam sodales ex, vel cursus ante massa quis massa. Vestibulum ultricies aliquet purus, nec rutrum arcu scelerisque nec. Phasellus vestibulum est a consequat rhoncus.",
      },
    ],
    details: {
      date: "01-01-2024",
      location: "Munich",
      other: "Lorem ipsum",
    },
    images: [
      {
        src: "/assets/portfolio/project1/project1-image1.jpg",
        alt: "Portfolio Item Image",
        width: 448,
        height: 448,
        size: "normal",
      },
      {
        src: "/assets/portfolio/project1/project1-image1.jpg",
        alt: "Portfolio Item Image",
        width: 448,
        height: 448,
        size: "wide",
      },
      {
        src: "/assets/portfolio/project1/project1-image2.jpg",
        alt: "Portfolio Item Image",
        width: 920,
        height: 448,
        size: "wide",
      },
    ],
    relatedProjects: ["gopro", "gopro2"],
    excerpt: {
      title: "GoPro HERO8 Black",
      subtitle: "Milan, Italy",
      text: "Full Tram wrap featuring Italian MotoGP legend Valentino Rossi and GoPro HERO8. As yellow was the primary colour for the GoPro HERO8 campaign, it made sense to run the Tram on Milan’s historic Yellow Line and feature GoPro‘s most followed athlete and icon of Italian sport Valentino Rossi #valeyellow46.",
      image: {
        src: "/assets/portfolio/project1/excerpt.jpg",
        alt: "GoPro",
        width: 448,
        height: 448,
      },
    },
  },

  {
    slug: "gopro4",
    featuredImage: {
      src: "/assets/portfolio/project1/featured.jpg",
      alt: "Featured Image",
      width: 920,
      height: 448,
    },

    title: "GoPro 4",
    subtitle: "OOH / Experiential",
    category: "cat1",
    paragraphs: [
      {
        title: "",
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam consequat faucibus hendrerit. Quisque a tellus sollicitudin quam congue volutpat a non nulla. Aenean sollicitudin malesuada lacus, sit amet vestibulum ipsum condimentum vel. Curabitur vitae nunc accumsan, euismod justo vel, ornare dolor. Cras nec orci sapien. Ut ornare et est et aliquam. Nulla at hendrerit velit. Donec sed interdum augue. Suspendisse turpis orci, pretium vel porta quis, vehicula ac erat. Etiam feugiat ac sem eget fermentum. Mauris eget augue at enim condimentum pellentesque. Integer luctus, lectus id dignissim lobortis, risus quam sodales ex, vel cursus ante massa quis massa. Vestibulum ultricies aliquet purus, nec rutrum arcu scelerisque nec. Phasellus vestibulum est a consequat rhoncus.",
      },
    ],
    details: {
      date: "01-01-2024",
      location: "Munich",
      other: "Lorem ipsum",
    },
    images: [
      {
        src: "/assets/portfolio/project1/project1-image1.jpg",
        alt: "Portfolio Item Image",
        width: 448,
        height: 448,
        size: "normal",
      },
      {
        src: "/assets/portfolio/project1/project1-image1.jpg",
        alt: "Portfolio Item Image",
        width: 448,
        height: 448,
        size: "normal",
      },
      {
        src: "/assets/portfolio/project1/project1-image2.jpg",
        alt: "Portfolio Item Image",
        width: 920,
        height: 448,
        size: "wide",
      },
    ],
    relatedProjects: ["gopro", "gopro2"],
    excerpt: {
      title: "GoPro HERO8 Black",
      subtitle: "Milan, Italy",
      text: "Full Tram wrap featuring Italian MotoGP legend Valentino Rossi and GoPro HERO8. As yellow was the primary colour for the GoPro HERO8 campaign, it made sense to run the Tram on Milan’s historic Yellow Line and feature GoPro‘s most followed athlete and icon of Italian sport Valentino Rossi #valeyellow46.",
      image: {
        src: "/assets/portfolio/project1/excerpt.jpg",
        alt: "GoPro",
        width: 448,
        height: 448,
      },
    },
  },

  {
    slug: "gopro5",
    featuredImage: {
      src: "/assets/portfolio/project1/featured.jpg",
      alt: "Featured Image",
      width: 920,
      height: 448,
    },

    title: "GoPro 5",
    subtitle: "OOH / Experiential",
    category: "cat2",
    paragraphs: [
      {
        title: "",
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam consequat faucibus hendrerit. Quisque a tellus sollicitudin quam congue volutpat a non nulla. Aenean sollicitudin malesuada lacus, sit amet vestibulum ipsum condimentum vel. Curabitur vitae nunc accumsan, euismod justo vel, ornare dolor. Cras nec orci sapien. Ut ornare et est et aliquam. Nulla at hendrerit velit. Donec sed interdum augue. Suspendisse turpis orci, pretium vel porta quis, vehicula ac erat. Etiam feugiat ac sem eget fermentum. Mauris eget augue at enim condimentum pellentesque. Integer luctus, lectus id dignissim lobortis, risus quam sodales ex, vel cursus ante massa quis massa. Vestibulum ultricies aliquet purus, nec rutrum arcu scelerisque nec. Phasellus vestibulum est a consequat rhoncus.",
      },
    ],
    details: {
      date: "01-01-2024",
      location: "Munich",
      other: "Lorem ipsum",
    },
    images: [
      {
        src: "/assets/portfolio/project1/project1-image1.jpg",
        alt: "Portfolio Item Image",
        width: 448,
        height: 448,
        size: "normal",
      },
      {
        src: "/assets/portfolio/project1/project1-image1.jpg",
        alt: "Portfolio Item Image",
        width: 448,
        height: 448,
        size: "normal",
      },
      {
        src: "/assets/portfolio/project1/project1-image2.jpg",
        alt: "Portfolio Item Image",
        width: 920,
        height: 448,
        size: "wide",
      },
    ],
    relatedProjects: ["gopro", "gopro2"],
    excerpt: {
      title: "GoPro HERO8 Black",
      subtitle: "Milan, Italy",
      text: "Full Tram wrap featuring Italian MotoGP legend Valentino Rossi and GoPro HERO8. As yellow was the primary colour for the GoPro HERO8 campaign, it made sense to run the Tram on Milan’s historic Yellow Line and feature GoPro‘s most followed athlete and icon of Italian sport Valentino Rossi #valeyellow46.",
      image: {
        src: "/assets/portfolio/project1/excerpt.jpg",
        alt: "GoPro",
        width: 448,
        height: 448,
      },
    },
  },

  {
    slug: "gopro6",
    featuredImage: {
      src: "/assets/portfolio/project1/featured.jpg",
      alt: "Featured Image",
      width: 920,
      height: 448,
    },

    title: "GoPro 6",
    subtitle: "OOH / Experiential",
    category: "cat3",
    paragraphs: [
      {
        title: "",
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam consequat faucibus hendrerit. Quisque a tellus sollicitudin quam congue volutpat a non nulla. Aenean sollicitudin malesuada lacus, sit amet vestibulum ipsum condimentum vel. Curabitur vitae nunc accumsan, euismod justo vel, ornare dolor. Cras nec orci sapien. Ut ornare et est et aliquam. Nulla at hendrerit velit. Donec sed interdum augue. Suspendisse turpis orci, pretium vel porta quis, vehicula ac erat. Etiam feugiat ac sem eget fermentum. Mauris eget augue at enim condimentum pellentesque. Integer luctus, lectus id dignissim lobortis, risus quam sodales ex, vel cursus ante massa quis massa. Vestibulum ultricies aliquet purus, nec rutrum arcu scelerisque nec. Phasellus vestibulum est a consequat rhoncus.",
      },
    ],
    details: {
      date: "01-01-2024",
      location: "Munich",
      other: "Lorem ipsum",
    },
    images: [
      {
        src: "/assets/portfolio/project1/project1-image1.jpg",
        alt: "Portfolio Item Image",
        width: 448,
        height: 448,
        size: "normal",
      },
      {
        src: "/assets/portfolio/project1/project1-image1.jpg",
        alt: "Portfolio Item Image",
        width: 448,
        height: 448,
        size: "normal",
      },
      {
        src: "/assets/portfolio/project1/project1-image2.jpg",
        alt: "Portfolio Item Image",
        width: 920,
        height: 448,
        size: "wide",
      },
    ],
    relatedProjects: ["gopro", "gopro2"],
    excerpt: {
      title: "GoPro HERO8 Black",
      subtitle: "Milan, Italy",
      text: "Full Tram wrap featuring Italian MotoGP legend Valentino Rossi and GoPro HERO8. As yellow was the primary colour for the GoPro HERO8 campaign, it made sense to run the Tram on Milan’s historic Yellow Line and feature GoPro‘s most followed athlete and icon of Italian sport Valentino Rossi #valeyellow46.",
      image: {
        src: "/assets/portfolio/project1/excerpt.jpg",
        alt: "GoPro",
        width: 448,
        height: 448,
      },
    },
  },
];

// ------------------------------------------------------------ CASE STUDIES -----------------------------------------------------------

export const caseStudies: ProjectType[] = [
  {
    slug: "gopro",
    featuredImage: {
      src: "/assets/portfolio/project1/featured.jpg",
      alt: "Case 1",
      width: 920,
      height: 448,
    },

    title: "GoPro - Case Study",
    subtitle: "OOH / Experiential",
    category: "case1",
    paragraphs: [
      {
        title: "Problem",
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam consequat faucibus hendrerit. Quisque a tellus sollicitudin quam congue volutpat a non nulla. Aenean sollicitudin malesuada lacus, sit amet vestibulum ipsum condimentum vel. Curabitur vitae nunc accumsan, euismod justo vel, ornare dolor. Cras nec orci sapien. Ut ornare et est et aliquam. Nulla at hendrerit velit. Donec sed interdum augue. Suspendisse turpis orci, pretium vel porta quis, vehicula ac erat. Etiam feugiat ac sem eget fermentum. Mauris eget augue at enim condimentum pellentesque. Integer luctus, lectus id dignissim lobortis, risus quam sodales ex, vel cursus ante massa quis massa. Vestibulum ultricies aliquet purus, nec rutrum arcu scelerisque nec. Phasellus vestibulum est a consequat rhoncus.",
      },
      {
        title: "Solution",
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam consequat faucibus hendrerit. Quisque a tellus sollicitudin quam congue volutpat a non nulla. Aenean sollicitudin malesuada lacus, sit amet vestibulum ipsum condimentum vel. Curabitur vitae nunc accumsan, euismod justo vel, ornare dolor. Cras nec orci sapien. Ut ornare et est et aliquam. Nulla at hendrerit velit. Donec sed interdum augue. Suspendisse turpis orci, pretium vel porta quis, vehicula ac erat. Etiam feugiat ac sem eget fermentum. Mauris eget augue at enim condimentum pellentesque. Integer luctus, lectus id dignissim lobortis, risus quam sodales ex, vel cursus ante massa quis massa. Vestibulum ultricies aliquet purus, nec rutrum arcu scelerisque nec. Phasellus vestibulum est a consequat rhoncus.",
      },
      {
        title: "My Role",
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam consequat faucibus hendrerit. Quisque a tellus sollicitudin quam congue volutpat a non nulla. Aenean sollicitudin malesuada lacus, sit amet vestibulum ipsum condimentum vel. Curabitur vitae nunc accumsan, euismod justo vel, ornare dolor. Cras nec orci sapien. Ut ornare et est et aliquam. Nulla at hendrerit velit. Donec sed interdum augue. Suspendisse turpis orci, pretium vel porta quis, vehicula ac erat. Etiam feugiat ac sem eget fermentum. Mauris eget augue at enim condimentum pellentesque. Integer luctus, lectus id dignissim lobortis, risus quam sodales ex, vel cursus ante massa quis massa. Vestibulum ultricies aliquet purus, nec rutrum arcu scelerisque nec. Phasellus vestibulum est a consequat rhoncus.",
      },
    ],
    images: [
      {
        src: "/assets/portfolio/project1/project1-image1.jpg",
        alt: "Portfolio Item Image",
        width: 448,
        height: 448,
        size: "normal",
      },
      {
        src: "/assets/portfolio/project1/project1-image1.jpg",
        alt: "Portfolio Item Image",
        width: 448,
        height: 448,
        size: "normal",
      },
      {
        src: "/assets/portfolio/project1/project1-image2.jpg",
        alt: "Portfolio Item Image",
        width: 920,
        height: 448,
        size: "wide",
      },
    ],
    relatedProjects: ["gopro", "gopro2"],
    excerpt: {
      title: "GoPro HERO8 Black",
      subtitle: "Milan, Italy",
      text: "Full Tram wrap featuring Italian MotoGP legend Valentino Rossi and GoPro HERO8. As yellow was the primary colour for the GoPro HERO8 campaign, it made sense to run the Tram on Milan’s historic Yellow Line and feature GoPro‘s most followed athlete and icon of Italian sport Valentino Rossi #valeyellow46.",
      image: {
        src: "/assets/portfolio/project1/excerpt.jpg",
        alt: "GoPro",
        width: 448,
        height: 448,
      },
    },
  },

  {
    slug: "gopro2",
    featuredImage: {
      src: "/assets/portfolio/project1/featured.jpg",
      alt: "Featured Image",
      width: 920,
      height: 448,
    },

    title: "GoPro 2 - Case Study",
    subtitle: "OOH / Experiential",
    category: "case2",
    paragraphs: [
      {
        title: "Problem",
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam consequat faucibus hendrerit. Quisque a tellus sollicitudin quam congue volutpat a non nulla. Aenean sollicitudin malesuada lacus, sit amet vestibulum ipsum condimentum vel. Curabitur vitae nunc accumsan, euismod justo vel, ornare dolor. Cras nec orci sapien. Ut ornare et est et aliquam. Nulla at hendrerit velit. Donec sed interdum augue. Suspendisse turpis orci, pretium vel porta quis, vehicula ac erat. Etiam feugiat ac sem eget fermentum. Mauris eget augue at enim condimentum pellentesque. Integer luctus, lectus id dignissim lobortis, risus quam sodales ex, vel cursus ante massa quis massa. Vestibulum ultricies aliquet purus, nec rutrum arcu scelerisque nec. Phasellus vestibulum est a consequat rhoncus.",
      },
      {
        title: "Solution",
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam consequat faucibus hendrerit. Quisque a tellus sollicitudin quam congue volutpat a non nulla. Aenean sollicitudin malesuada lacus, sit amet vestibulum ipsum condimentum vel. Curabitur vitae nunc accumsan, euismod justo vel, ornare dolor. Cras nec orci sapien. Ut ornare et est et aliquam. Nulla at hendrerit velit. Donec sed interdum augue. Suspendisse turpis orci, pretium vel porta quis, vehicula ac erat. Etiam feugiat ac sem eget fermentum. Mauris eget augue at enim condimentum pellentesque. Integer luctus, lectus id dignissim lobortis, risus quam sodales ex, vel cursus ante massa quis massa. Vestibulum ultricies aliquet purus, nec rutrum arcu scelerisque nec. Phasellus vestibulum est a consequat rhoncus.",
      },
      {
        title: "My Role",
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam consequat faucibus hendrerit. Quisque a tellus sollicitudin quam congue volutpat a non nulla. Aenean sollicitudin malesuada lacus, sit amet vestibulum ipsum condimentum vel. Curabitur vitae nunc accumsan, euismod justo vel, ornare dolor. Cras nec orci sapien. Ut ornare et est et aliquam. Nulla at hendrerit velit. Donec sed interdum augue. Suspendisse turpis orci, pretium vel porta quis, vehicula ac erat. Etiam feugiat ac sem eget fermentum. Mauris eget augue at enim condimentum pellentesque. Integer luctus, lectus id dignissim lobortis, risus quam sodales ex, vel cursus ante massa quis massa. Vestibulum ultricies aliquet purus, nec rutrum arcu scelerisque nec. Phasellus vestibulum est a consequat rhoncus.",
      },
    ],
    images: [
      {
        src: "/assets/portfolio/project1/project1-image1.jpg",
        alt: "Portfolio Item Image",
        width: 448,
        height: 448,
        size: "normal",
      },
      {
        src: "/assets/portfolio/project1/project1-image1.jpg",
        alt: "Portfolio Item Image",
        width: 448,
        height: 448,
        size: "normal",
      },
      {
        src: "/assets/portfolio/project1/project1-image2.jpg",
        alt: "Portfolio Item Image",
        width: 920,
        height: 448,
        size: "wide",
      },
    ],
    relatedProjects: ["gopro", "gopro2"],
    excerpt: {
      title: "GoPro HERO8 Black",
      subtitle: "Milan, Italy",
      text: "Full Tram wrap featuring Italian MotoGP legend Valentino Rossi and GoPro HERO8. As yellow was the primary colour for the GoPro HERO8 campaign, it made sense to run the Tram on Milan’s historic Yellow Line and feature GoPro‘s most followed athlete and icon of Italian sport Valentino Rossi #valeyellow46.",
      image: {
        src: "/assets/portfolio/project1/excerpt.jpg",
        alt: "GoPro",
        width: 448,
        height: 448,
      },
    },
  },

  {
    slug: "gopro3",
    featuredImage: {
      src: "/assets/portfolio/project1/featured.jpg",
      alt: "Featured Image",
      width: 920,
      height: 448,
    },

    title: "GoPro 3 - Case Study",
    subtitle: "OOH / Experiential",
    category: "case3",
    paragraphs: [
      {
        title: "Problem",
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam consequat faucibus hendrerit. Quisque a tellus sollicitudin quam congue volutpat a non nulla. Aenean sollicitudin malesuada lacus, sit amet vestibulum ipsum condimentum vel. Curabitur vitae nunc accumsan, euismod justo vel, ornare dolor. Cras nec orci sapien. Ut ornare et est et aliquam. Nulla at hendrerit velit. Donec sed interdum augue. Suspendisse turpis orci, pretium vel porta quis, vehicula ac erat. Etiam feugiat ac sem eget fermentum. Mauris eget augue at enim condimentum pellentesque. Integer luctus, lectus id dignissim lobortis, risus quam sodales ex, vel cursus ante massa quis massa. Vestibulum ultricies aliquet purus, nec rutrum arcu scelerisque nec. Phasellus vestibulum est a consequat rhoncus.",
      },
      {
        title: "Solution",
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam consequat faucibus hendrerit. Quisque a tellus sollicitudin quam congue volutpat a non nulla. Aenean sollicitudin malesuada lacus, sit amet vestibulum ipsum condimentum vel. Curabitur vitae nunc accumsan, euismod justo vel, ornare dolor. Cras nec orci sapien. Ut ornare et est et aliquam. Nulla at hendrerit velit. Donec sed interdum augue. Suspendisse turpis orci, pretium vel porta quis, vehicula ac erat. Etiam feugiat ac sem eget fermentum. Mauris eget augue at enim condimentum pellentesque. Integer luctus, lectus id dignissim lobortis, risus quam sodales ex, vel cursus ante massa quis massa. Vestibulum ultricies aliquet purus, nec rutrum arcu scelerisque nec. Phasellus vestibulum est a consequat rhoncus.",
      },
      {
        title: "My Role",
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam consequat faucibus hendrerit. Quisque a tellus sollicitudin quam congue volutpat a non nulla. Aenean sollicitudin malesuada lacus, sit amet vestibulum ipsum condimentum vel. Curabitur vitae nunc accumsan, euismod justo vel, ornare dolor. Cras nec orci sapien. Ut ornare et est et aliquam. Nulla at hendrerit velit. Donec sed interdum augue. Suspendisse turpis orci, pretium vel porta quis, vehicula ac erat. Etiam feugiat ac sem eget fermentum. Mauris eget augue at enim condimentum pellentesque. Integer luctus, lectus id dignissim lobortis, risus quam sodales ex, vel cursus ante massa quis massa. Vestibulum ultricies aliquet purus, nec rutrum arcu scelerisque nec. Phasellus vestibulum est a consequat rhoncus.",
      },
    ],
    images: [
      {
        src: "/assets/portfolio/project1/project1-image1.jpg",
        alt: "Portfolio Item Image",
        width: 448,
        height: 448,
        size: "normal",
      },
      {
        src: "/assets/portfolio/project1/project1-image1.jpg",
        alt: "Portfolio Item Image",
        width: 448,
        height: 448,
        size: "normal",
      },
      {
        src: "/assets/portfolio/project1/project1-image2.jpg",
        alt: "Portfolio Item Image",
        width: 920,
        height: 448,
        size: "wide",
      },
    ],
    relatedProjects: ["gopro", "gopro2"],
    excerpt: {
      title: "GoPro HERO8 Black",
      subtitle: "Milan, Italy",
      text: "Full Tram wrap featuring Italian MotoGP legend Valentino Rossi and GoPro HERO8. As yellow was the primary colour for the GoPro HERO8 campaign, it made sense to run the Tram on Milan’s historic Yellow Line and feature GoPro‘s most followed athlete and icon of Italian sport Valentino Rossi #valeyellow46.",
      image: {
        src: "/assets/portfolio/project1/excerpt.jpg",
        alt: "GoPro",
        width: 448,
        height: 448,
      },
    },
  },

  {
    slug: "gopro4",
    featuredImage: {
      src: "/assets/portfolio/project1/featured.jpg",
      alt: "Featured Image",
      width: 920,
      height: 448,
    },

    title: "GoPro 4 - Case Study",
    subtitle: "OOH / Experiential",
    category: "case4",
    paragraphs: [
      {
        title: "Problem",
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam consequat faucibus hendrerit. Quisque a tellus sollicitudin quam congue volutpat a non nulla. Aenean sollicitudin malesuada lacus, sit amet vestibulum ipsum condimentum vel. Curabitur vitae nunc accumsan, euismod justo vel, ornare dolor. Cras nec orci sapien. Ut ornare et est et aliquam. Nulla at hendrerit velit. Donec sed interdum augue. Suspendisse turpis orci, pretium vel porta quis, vehicula ac erat. Etiam feugiat ac sem eget fermentum. Mauris eget augue at enim condimentum pellentesque. Integer luctus, lectus id dignissim lobortis, risus quam sodales ex, vel cursus ante massa quis massa. Vestibulum ultricies aliquet purus, nec rutrum arcu scelerisque nec. Phasellus vestibulum est a consequat rhoncus.",
      },
      {
        title: "Solution",
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam consequat faucibus hendrerit. Quisque a tellus sollicitudin quam congue volutpat a non nulla. Aenean sollicitudin malesuada lacus, sit amet vestibulum ipsum condimentum vel. Curabitur vitae nunc accumsan, euismod justo vel, ornare dolor. Cras nec orci sapien. Ut ornare et est et aliquam. Nulla at hendrerit velit. Donec sed interdum augue. Suspendisse turpis orci, pretium vel porta quis, vehicula ac erat. Etiam feugiat ac sem eget fermentum. Mauris eget augue at enim condimentum pellentesque. Integer luctus, lectus id dignissim lobortis, risus quam sodales ex, vel cursus ante massa quis massa. Vestibulum ultricies aliquet purus, nec rutrum arcu scelerisque nec. Phasellus vestibulum est a consequat rhoncus.",
      },
      {
        title: "My Role",
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam consequat faucibus hendrerit. Quisque a tellus sollicitudin quam congue volutpat a non nulla. Aenean sollicitudin malesuada lacus, sit amet vestibulum ipsum condimentum vel. Curabitur vitae nunc accumsan, euismod justo vel, ornare dolor. Cras nec orci sapien. Ut ornare et est et aliquam. Nulla at hendrerit velit. Donec sed interdum augue. Suspendisse turpis orci, pretium vel porta quis, vehicula ac erat. Etiam feugiat ac sem eget fermentum. Mauris eget augue at enim condimentum pellentesque. Integer luctus, lectus id dignissim lobortis, risus quam sodales ex, vel cursus ante massa quis massa. Vestibulum ultricies aliquet purus, nec rutrum arcu scelerisque nec. Phasellus vestibulum est a consequat rhoncus.",
      },
    ],
    images: [
      {
        src: "/assets/portfolio/project1/project1-image1.jpg",
        alt: "Portfolio Item Image",
        width: 448,
        height: 448,
        size: "normal",
      },
      {
        src: "/assets/portfolio/project1/project1-image1.jpg",
        alt: "Portfolio Item Image",
        width: 448,
        height: 448,
        size: "normal",
      },
      {
        src: "/assets/portfolio/project1/project1-image2.jpg",
        alt: "Portfolio Item Image",
        width: 920,
        height: 448,
        size: "wide",
      },
    ],
    relatedProjects: ["gopro", "gopro2"],
    excerpt: {
      title: "GoPro HERO8 Black",
      subtitle: "Milan, Italy",
      text: "Full Tram wrap featuring Italian MotoGP legend Valentino Rossi and GoPro HERO8. As yellow was the primary colour for the GoPro HERO8 campaign, it made sense to run the Tram on Milan’s historic Yellow Line and feature GoPro‘s most followed athlete and icon of Italian sport Valentino Rossi #valeyellow46.",
      image: {
        src: "/assets/portfolio/project1/excerpt.jpg",
        alt: "GoPro",
        width: 448,
        height: 448,
      },
    },
  },

  {
    slug: "gopro5",
    featuredImage: {
      src: "/assets/portfolio/project1/featured.jpg",
      alt: "Featured Image",
      width: 920,
      height: 448,
    },

    title: "GoPro 5 - Case Study",
    subtitle: "OOH / Experiential",
    category: "case1",
    paragraphs: [
      {
        title: "Problem",
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam consequat faucibus hendrerit. Quisque a tellus sollicitudin quam congue volutpat a non nulla. Aenean sollicitudin malesuada lacus, sit amet vestibulum ipsum condimentum vel. Curabitur vitae nunc accumsan, euismod justo vel, ornare dolor. Cras nec orci sapien. Ut ornare et est et aliquam. Nulla at hendrerit velit. Donec sed interdum augue. Suspendisse turpis orci, pretium vel porta quis, vehicula ac erat. Etiam feugiat ac sem eget fermentum. Mauris eget augue at enim condimentum pellentesque. Integer luctus, lectus id dignissim lobortis, risus quam sodales ex, vel cursus ante massa quis massa. Vestibulum ultricies aliquet purus, nec rutrum arcu scelerisque nec. Phasellus vestibulum est a consequat rhoncus.",
      },
      {
        title: "Solution",
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam consequat faucibus hendrerit. Quisque a tellus sollicitudin quam congue volutpat a non nulla. Aenean sollicitudin malesuada lacus, sit amet vestibulum ipsum condimentum vel. Curabitur vitae nunc accumsan, euismod justo vel, ornare dolor. Cras nec orci sapien. Ut ornare et est et aliquam. Nulla at hendrerit velit. Donec sed interdum augue. Suspendisse turpis orci, pretium vel porta quis, vehicula ac erat. Etiam feugiat ac sem eget fermentum. Mauris eget augue at enim condimentum pellentesque. Integer luctus, lectus id dignissim lobortis, risus quam sodales ex, vel cursus ante massa quis massa. Vestibulum ultricies aliquet purus, nec rutrum arcu scelerisque nec. Phasellus vestibulum est a consequat rhoncus.",
      },
      {
        title: "My Role",
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam consequat faucibus hendrerit. Quisque a tellus sollicitudin quam congue volutpat a non nulla. Aenean sollicitudin malesuada lacus, sit amet vestibulum ipsum condimentum vel. Curabitur vitae nunc accumsan, euismod justo vel, ornare dolor. Cras nec orci sapien. Ut ornare et est et aliquam. Nulla at hendrerit velit. Donec sed interdum augue. Suspendisse turpis orci, pretium vel porta quis, vehicula ac erat. Etiam feugiat ac sem eget fermentum. Mauris eget augue at enim condimentum pellentesque. Integer luctus, lectus id dignissim lobortis, risus quam sodales ex, vel cursus ante massa quis massa. Vestibulum ultricies aliquet purus, nec rutrum arcu scelerisque nec. Phasellus vestibulum est a consequat rhoncus.",
      },
    ],
    images: [
      {
        src: "/assets/portfolio/project1/project1-image1.jpg",
        alt: "Portfolio Item Image",
        width: 448,
        height: 448,
        size: "normal",
      },
      {
        src: "/assets/portfolio/project1/project1-image1.jpg",
        alt: "Portfolio Item Image",
        width: 448,
        height: 448,
        size: "normal",
      },
      {
        src: "/assets/portfolio/project1/project1-image2.jpg",
        alt: "Portfolio Item Image",
        width: 920,
        height: 448,
        size: "wide",
      },
    ],
    relatedProjects: ["gopro", "gopro2"],
    excerpt: {
      title: "GoPro HERO8 Black",
      subtitle: "Milan, Italy",
      text: "Full Tram wrap featuring Italian MotoGP legend Valentino Rossi and GoPro HERO8. As yellow was the primary colour for the GoPro HERO8 campaign, it made sense to run the Tram on Milan’s historic Yellow Line and feature GoPro‘s most followed athlete and icon of Italian sport Valentino Rossi #valeyellow46.",
      image: {
        src: "/assets/portfolio/project1/excerpt.jpg",
        alt: "GoPro",
        width: 448,
        height: 448,
      },
    },
  },

  {
    slug: "gopro6",
    featuredImage: {
      src: "/assets/portfolio/project1/featured.jpg",
      alt: "Featured Image",
      width: 920,
      height: 448,
    },

    title: "GoPro 6 - Case Study",
    subtitle: "OOH / Experiential",
    category: "case2",
    paragraphs: [
      {
        title: "Problem",
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam consequat faucibus hendrerit. Quisque a tellus sollicitudin quam congue volutpat a non nulla. Aenean sollicitudin malesuada lacus, sit amet vestibulum ipsum condimentum vel. Curabitur vitae nunc accumsan, euismod justo vel, ornare dolor. Cras nec orci sapien. Ut ornare et est et aliquam. Nulla at hendrerit velit. Donec sed interdum augue. Suspendisse turpis orci, pretium vel porta quis, vehicula ac erat. Etiam feugiat ac sem eget fermentum. Mauris eget augue at enim condimentum pellentesque. Integer luctus, lectus id dignissim lobortis, risus quam sodales ex, vel cursus ante massa quis massa. Vestibulum ultricies aliquet purus, nec rutrum arcu scelerisque nec. Phasellus vestibulum est a consequat rhoncus.",
      },
      {
        title: "Solution",
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam consequat faucibus hendrerit. Quisque a tellus sollicitudin quam congue volutpat a non nulla. Aenean sollicitudin malesuada lacus, sit amet vestibulum ipsum condimentum vel. Curabitur vitae nunc accumsan, euismod justo vel, ornare dolor. Cras nec orci sapien. Ut ornare et est et aliquam. Nulla at hendrerit velit. Donec sed interdum augue. Suspendisse turpis orci, pretium vel porta quis, vehicula ac erat. Etiam feugiat ac sem eget fermentum. Mauris eget augue at enim condimentum pellentesque. Integer luctus, lectus id dignissim lobortis, risus quam sodales ex, vel cursus ante massa quis massa. Vestibulum ultricies aliquet purus, nec rutrum arcu scelerisque nec. Phasellus vestibulum est a consequat rhoncus.",
      },
      {
        title: "My Role",
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam consequat faucibus hendrerit. Quisque a tellus sollicitudin quam congue volutpat a non nulla. Aenean sollicitudin malesuada lacus, sit amet vestibulum ipsum condimentum vel. Curabitur vitae nunc accumsan, euismod justo vel, ornare dolor. Cras nec orci sapien. Ut ornare et est et aliquam. Nulla at hendrerit velit. Donec sed interdum augue. Suspendisse turpis orci, pretium vel porta quis, vehicula ac erat. Etiam feugiat ac sem eget fermentum. Mauris eget augue at enim condimentum pellentesque. Integer luctus, lectus id dignissim lobortis, risus quam sodales ex, vel cursus ante massa quis massa. Vestibulum ultricies aliquet purus, nec rutrum arcu scelerisque nec. Phasellus vestibulum est a consequat rhoncus.",
      },
    ],
    images: [
      {
        src: "/assets/portfolio/project1/project1-image1.jpg",
        alt: "Portfolio Item Image",
        width: 448,
        height: 448,
        size: "normal",
      },
      {
        src: "/assets/portfolio/project1/project1-image1.jpg",
        alt: "Portfolio Item Image",
        width: 448,
        height: 448,
        size: "normal",
      },
      {
        src: "/assets/portfolio/project1/project1-image2.jpg",
        alt: "Portfolio Item Image",
        width: 920,
        height: 448,
        size: "wide",
      },
    ],
    relatedProjects: ["gopro", "gopro2"],
    excerpt: {
      title: "GoPro HERO8 Black",
      subtitle: "Milan, Italy",
      text: "Full Tram wrap featuring Italian MotoGP legend Valentino Rossi and GoPro HERO8. As yellow was the primary colour for the GoPro HERO8 campaign, it made sense to run the Tram on Milan’s historic Yellow Line and feature GoPro‘s most followed athlete and icon of Italian sport Valentino Rossi #valeyellow46.",
      image: {
        src: "/assets/portfolio/project1/excerpt.jpg",
        alt: "GoPro",
        width: 448,
        height: 448,
      },
    },
  },
];
