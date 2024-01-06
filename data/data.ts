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

export const projects: ProjectType[] = [
  {
    slug: "gopro",
    featuredImage: {
      src: "/assets/portfolio/portfolio-item/featured-1.jpg",
      alt: "Featured Image",
      width: 920,
      height: 448,
    },

    title: "GoPro",
    subtitle: "OOH / Experiential",
    category: "featured",
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
        src: "/assets/portfolio/portfolio-item/portfolio-item-image1.jpg",
        alt: "Portfolio Item Image",
        width: 448,
        height: 448,
        size: "normal",
      },
      {
        src: "/assets/portfolio/portfolio-item/portfolio-item-image1.jpg",
        alt: "Portfolio Item Image",
        width: 448,
        height: 448,
        size: "normal",
      },
      {
        src: "/assets/portfolio/portfolio-item/portfolio-item-image2.jpg",
        alt: "Portfolio Item Image",
        width: 920,
        height: 448,
        size: "fullWidth",
      },
    ],
    relatedProjects: ["gopro", "gopro2"],
    excerpt: {
      title: "GoPro HERO8 Black",
      subtitle: "Milan, Italy",
      text: "Full Tram wrap featuring Italian MotoGP legend Valentino Rossi and GoPro HERO8. As yellow was the primary colour for the GoPro HERO8 campaign, it made sense to run the Tram on Milan’s historic Yellow Line and feature GoPro‘s most followed athlete and icon of Italian sport Valentino Rossi #valeyellow46.",
      image: {
        src: "/assets/portfolio/portfolio-item/excerpt.jpg",
        alt: "GoPro",
        width: 448,
        height: 448,
      },
    },
  },

  {
    slug: "gopro2",
    featuredImage: {
      src: "/assets/portfolio/portfolio-item/featured-1.jpg",
      alt: "Featured Image",
      width: 920,
      height: 448,
    },

    title: "GoPro 2",
    subtitle: "OOH / Experiential",
    category: "featured",
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
        src: "/assets/portfolio/portfolio-item/portfolio-item-image1.jpg",
        alt: "Portfolio Item Image",
        width: 448,
        height: 448,
        size: "normal",
      },
      {
        src: "/assets/portfolio/portfolio-item/portfolio-item-image1.jpg",
        alt: "Portfolio Item Image",
        width: 448,
        height: 448,
        size: "normal",
      },
      {
        src: "/assets/portfolio/portfolio-item/portfolio-item-image2.jpg",
        alt: "Portfolio Item Image",
        width: 920,
        height: 448,
        size: "fullWidth",
      },
    ],
    relatedProjects: ["gopro", "gopro2"],
    excerpt: {
      title: "GoPro HERO8 Black",
      subtitle: "Milan, Italy",
      text: "Full Tram wrap featuring Italian MotoGP legend Valentino Rossi and GoPro HERO8. As yellow was the primary colour for the GoPro HERO8 campaign, it made sense to run the Tram on Milan’s historic Yellow Line and feature GoPro‘s most followed athlete and icon of Italian sport Valentino Rossi #valeyellow46.",
      image: {
        src: "/assets/portfolio/portfolio-item/excerpt.jpg",
        alt: "GoPro",
        width: 448,
        height: 448,
      },
    },
  },

  {
    slug: "gopro3",
    featuredImage: {
      src: "/assets/portfolio/portfolio-item/featured-1.jpg",
      alt: "Featured Image",
      width: 920,
      height: 448,
    },

    title: "GoPro 3",
    subtitle: "OOH / Experiential",
    category: "featured",
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
        src: "/assets/portfolio/portfolio-item/portfolio-item-image1.jpg",
        alt: "Portfolio Item Image",
        width: 448,
        height: 448,
        size: "normal",
      },
      {
        src: "/assets/portfolio/portfolio-item/portfolio-item-image1.jpg",
        alt: "Portfolio Item Image",
        width: 448,
        height: 448,
        size: "normal",
      },
      {
        src: "/assets/portfolio/portfolio-item/portfolio-item-image2.jpg",
        alt: "Portfolio Item Image",
        width: 920,
        height: 448,
        size: "fullWidth",
      },
    ],
    relatedProjects: ["gopro", "gopro2"],
    excerpt: {
      title: "GoPro HERO8 Black",
      subtitle: "Milan, Italy",
      text: "Full Tram wrap featuring Italian MotoGP legend Valentino Rossi and GoPro HERO8. As yellow was the primary colour for the GoPro HERO8 campaign, it made sense to run the Tram on Milan’s historic Yellow Line and feature GoPro‘s most followed athlete and icon of Italian sport Valentino Rossi #valeyellow46.",
      image: {
        src: "/assets/portfolio/portfolio-item/excerpt.jpg",
        alt: "GoPro",
        width: 448,
        height: 448,
      },
    },
  },

  {
    slug: "gopro4",
    featuredImage: {
      src: "/assets/portfolio/portfolio-item/featured-1.jpg",
      alt: "Featured Image",
      width: 920,
      height: 448,
    },

    title: "GoPro 4",
    subtitle: "OOH / Experiential",
    category: "cat1",
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
        src: "/assets/portfolio/portfolio-item/portfolio-item-image1.jpg",
        alt: "Portfolio Item Image",
        width: 448,
        height: 448,
        size: "normal",
      },
      {
        src: "/assets/portfolio/portfolio-item/portfolio-item-image1.jpg",
        alt: "Portfolio Item Image",
        width: 448,
        height: 448,
        size: "normal",
      },
      {
        src: "/assets/portfolio/portfolio-item/portfolio-item-image2.jpg",
        alt: "Portfolio Item Image",
        width: 920,
        height: 448,
        size: "fullWidth",
      },
    ],
    relatedProjects: ["gopro", "gopro2"],
    excerpt: {
      title: "GoPro HERO8 Black",
      subtitle: "Milan, Italy",
      text: "Full Tram wrap featuring Italian MotoGP legend Valentino Rossi and GoPro HERO8. As yellow was the primary colour for the GoPro HERO8 campaign, it made sense to run the Tram on Milan’s historic Yellow Line and feature GoPro‘s most followed athlete and icon of Italian sport Valentino Rossi #valeyellow46.",
      image: {
        src: "/assets/portfolio/portfolio-item/excerpt.jpg",
        alt: "GoPro",
        width: 448,
        height: 448,
      },
    },
  },

  {
    slug: "gopro5",
    featuredImage: {
      src: "/assets/portfolio/portfolio-item/featured-1.jpg",
      alt: "Featured Image",
      width: 920,
      height: 448,
    },

    title: "GoPro 5",
    subtitle: "OOH / Experiential",
    category: "cat2",
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
        src: "/assets/portfolio/portfolio-item/portfolio-item-image1.jpg",
        alt: "Portfolio Item Image",
        width: 448,
        height: 448,
        size: "normal",
      },
      {
        src: "/assets/portfolio/portfolio-item/portfolio-item-image1.jpg",
        alt: "Portfolio Item Image",
        width: 448,
        height: 448,
        size: "normal",
      },
      {
        src: "/assets/portfolio/portfolio-item/portfolio-item-image2.jpg",
        alt: "Portfolio Item Image",
        width: 920,
        height: 448,
        size: "fullWidth",
      },
    ],
    relatedProjects: ["gopro", "gopro2"],
    excerpt: {
      title: "GoPro HERO8 Black",
      subtitle: "Milan, Italy",
      text: "Full Tram wrap featuring Italian MotoGP legend Valentino Rossi and GoPro HERO8. As yellow was the primary colour for the GoPro HERO8 campaign, it made sense to run the Tram on Milan’s historic Yellow Line and feature GoPro‘s most followed athlete and icon of Italian sport Valentino Rossi #valeyellow46.",
      image: {
        src: "/assets/portfolio/portfolio-item/excerpt.jpg",
        alt: "GoPro",
        width: 448,
        height: 448,
      },
    },
  },

  {
    slug: "gopro6",
    featuredImage: {
      src: "/assets/portfolio/portfolio-item/featured-1.jpg",
      alt: "Featured Image",
      width: 920,
      height: 448,
    },

    title: "GoPro 6",
    subtitle: "OOH / Experiential",
    category: "cat3",
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
        src: "/assets/portfolio/portfolio-item/portfolio-item-image1.jpg",
        alt: "Portfolio Item Image",
        width: 448,
        height: 448,
        size: "normal",
      },
      {
        src: "/assets/portfolio/portfolio-item/portfolio-item-image1.jpg",
        alt: "Portfolio Item Image",
        width: 448,
        height: 448,
        size: "normal",
      },
      {
        src: "/assets/portfolio/portfolio-item/portfolio-item-image2.jpg",
        alt: "Portfolio Item Image",
        width: 920,
        height: 448,
        size: "fullWidth",
      },
    ],
    relatedProjects: ["gopro", "gopro2"],
    excerpt: {
      title: "GoPro HERO8 Black",
      subtitle: "Milan, Italy",
      text: "Full Tram wrap featuring Italian MotoGP legend Valentino Rossi and GoPro HERO8. As yellow was the primary colour for the GoPro HERO8 campaign, it made sense to run the Tram on Milan’s historic Yellow Line and feature GoPro‘s most followed athlete and icon of Italian sport Valentino Rossi #valeyellow46.",
      image: {
        src: "/assets/portfolio/portfolio-item/excerpt.jpg",
        alt: "GoPro",
        width: 448,
        height: 448,
      },
    },
  },
];
