export type PortfolioItemsType = {
  slug: string;
  featuredImage: {
    src: string;
    alt: string;
    width: number;
    height: number;
  };
  title: string;
  subtitle: string;
  paragraphs: ParagraphType[];
  images: ImageType[];
  relatedProjects: string[];
};

type ParagraphType = {
  title: string;
  text: string;
};

type ImageType = {
  src: string;
  alt: string;
  width: number;
  height: number;
  size: "normal" | "fullWidth";
};

export const portfolioItems: PortfolioItemsType[] = [
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
  },
];
