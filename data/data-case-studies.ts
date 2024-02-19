import { CaseStudyType, Category, ProjectType } from "@/data/data.types.ts";

export const caseStudies: CaseStudyType[] = [
  {
    title: "GoPro British MotoGP",
    subtitle: "Silverstone",
    category: "Branding",

    slug: "motogp",
    featuredImage: {
      src: "/assets/case-studies/motogp/motogp-1.jpg",
      alt: "MotoGP",
      width: 920,
      height: 448,
    },

    paragraphs: [
      {
        title: "Brief",
        text: "GoPro has enjoyed a longstanding partnership with the MotoGP circuit, culminating in its role as the Title Sponsor for the British MotoGP at Silverstone. This prestigious event not only showcased thrilling races but also served as a prime occasion for GoPro to engage with EMEA distribution partners, brand athletes, and advocates track-side. Collaborating closely with both the GoPro Events Team and DORNA, the event organizers, our mission encompassed not only on-course and event branding but also the creation of the exclusive GoPro VIP Lounge, curated guest swag, and tailored print assets for hospitality purposes.\n",
      },
      {
        title: "Solution",
        text: "Remaining faithful to the GoPro corporate color palette across all assets, we introduced a carbon pattern to provide them with an additional dimension. Additionally, the printed assets were varnished to enhance the carbon effect, paying tribute to the intricate parts of racing bikes. This concept seamlessly complements the GoPro winners' trophy, crafted from bike components. The imagery prominently features GoPro athlete Valentino Rossi, arguably the most recognizable racer in MotoGP history. The result is a strong, consistent, and relevant representation of the brand's association with the exhilarating world of motorcycle racing.\n",
      },
      {
        title: "My Role",
        text: "As the Art Director and Design Lead for the EMEA region, I held the responsibility of delivering assets to the event team in a timely manner. I provided creative direction and vision, particularly focusing on incorporating the carbon aspects into the design concept. Additionally, I supervised junior graphic designers in creating the event assets and actively participated in the approval process.",
      },
    ],
    images: [
      {
        src: "/assets/case-studies/motogp/motogp-1.jpg",
        alt: "MotoGP",
        width: 920,
        height: 448,
        size: "wide",
      },
      {
        src: "/assets/case-studies/motogp/motogp-2.jpg",
        alt: "MotoGP",
        width: 448,
        height: 448,
        size: "normal",
      },
      {
        src: "/assets/case-studies/motogp/motogp-3.jpg",
        alt: "MotoGP",
        width: 448,
        height: 448,
        size: "normal",
      },
      {
        src: "/assets/case-studies/motogp/motogp-4.jpg",
        alt: "MotoGP",
        width: 920,
        height: 448,
        size: "wide",
      },
    ],
    relatedProjects: [],
    excerpt: {
      title: "GoPro British MotoGP, Silverstone",
      text: "GoPro has enjoyed a longstanding partnership with the MotoGP circuit, culminating in its role as the Title Sponsor for the British MotoGP at Silverstone.",
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
