import { CaseStudyType, Category, ProjectType } from "@/data/data.types.ts";

export const caseStudies: CaseStudyType[] = [
  {
    title: "Rossi rides the rails in Milano",
    subtitle: "Subtitle",
    category: "Out of Home",

    slug: "rossi-milan",
    featuredImage: {
      src: "/assets/case-studies/rossi/featured.jpg",
      alt: "Rossi rides the rails in Milano",
      width: 920,
      height: 448,
    },

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
    relatedProjects: ["rossi-milan", "scandinavian-way"],
    excerpt: {
      title: "Rosi rides the rails in Milano",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat.",
    },
  },

  {
    title: "The Scandinavian Way",
    subtitle: "Subtitle",
    category: "Branding",

    slug: "scandinavian-way",
    featuredImage: {
      src: "/assets/case-studies/scandinavian-way/scandinavian-way.jpg",
      alt: "Featured Image",
      width: 920,
      height: 448,
    },

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
    relatedProjects: ["rossi-milan", "scandinavian-way"],
    excerpt: {
      title: "The Scandinavian Way",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat.",
    },
  },

  {
    title: "Inspired by The Silver Spoon",
    subtitle: "Subtitle",
    category: "Exhibition & Events",

    slug: "silver-spoon",
    featuredImage: {
      src: "/assets/case-studies/silver-spoon/silver-spoon.jpg",
      alt: "Silver Spoon",
      width: 920,
      height: 448,
    },

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
    relatedProjects: ["rossi-milan", "scandinavian-way"],
    excerpt: {
      title: "Inspired by the Silver Spoon",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat.",
    },
  },

  {
    title: "Inspired by The Silver Spoon 2",
    subtitle: "Subtitle",
    category: "Exhibition & Events",

    slug: "silver-spoon-2",
    featuredImage: {
      src: "/assets/case-studies/silver-spoon-2/silver-spoon.jpg",
      alt: "Silver Spoon 2",
      width: 920,
      height: 448,
    },

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
    relatedProjects: ["rossi-milan", "scandinavian-way"],
    excerpt: {
      title: "Inspired by the Silver Spoon 2",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat.",
    },
  },
];
