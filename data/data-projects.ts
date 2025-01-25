import { Category, ProjectType } from "@/data/data.types.ts";

export const categories: Category[] = [
  {
    slug: "advertising-and-marketing",
    name: "Advertising & Marketing",
    featuredImage: "/assets/categories/advertising-and-marketing-wide.jpg",
    featuredImageSmall: "/assets/categories/advertising-and-marketing.jpg",
  },
  {
    slug: "branding",
    name: "Branding",
    featuredImage: "/assets/categories/branding-wide.jpg",
    featuredImageSmall: "/assets/categories/branding.jpg",
  },
  {
    slug: "digital",
    name: "Digital",
    featuredImage: "/assets/categories/digital-wide.jpg",
    featuredImageSmall: "/assets/categories/digital.jpg",
  },
  {
    slug: "exhibition-and-display",
    name: "Exhibition & Display",
    featuredImage: "/assets/categories/exhibition-and-display-wide.jpg",
    featuredImageSmall: "/assets/categories/exhibition-and-display.jpg",
  },
  {
    slug: "events",
    name: "Events",
    featuredImage: "/assets/categories/events-wide.jpg",
    featuredImageSmall: "/assets/categories/events.jpg",
  },
  {
    slug: "packaging-and-merchandise",
    name: "Packaging & Merchandise",
    featuredImage: "/assets/categories/packaging-and-merchandise-wide.jpg",
    featuredImageSmall: "/assets/categories/packaging-and-merchandise.jpg",
  },
];

export const projects: ProjectType[] = [
  {
    slug: "motogp-aragon",
    featuredImage: {
      src: "/assets/portfolio/motogp-aragon/motogp-aragon-1.jpg",
      alt: "MotoGP Aragon",
      width: 920,
      height: 448,
    },

    title: "MotoGP Aragon",
    subtitle: "Spain",
    category: "events",
    paragraph:
      "GoPro is the official camera partner of the MotoGP Championship and served as the title sponsor for the Aragon race at the historic MotorLand Circuit. This three-day event brought together key GoPro personnel, distributors, and business partners from the EMEA region. The project involved updating and realigning GoPro's MotoGP branding materials and collaborating with DORNA to create the GoPro VIP Lounge and an exclusive viewing experience. Additional elements included designing the event's welcome packs and daily menus. The GoPro Event Truck was also on-site, showcasing the brand and engaging directly with attendees.",
    details: {
      date: "2024",
      location: "Spain",
      other: "",
    },
    images: [
      {
        src: "/assets/portfolio/motogp-aragon/motogp-aragon-2.jpg",
        alt: "Motogp Aragon",
        width: 448,
        height: 448,
        size: "double",
      },
      {
        src: "/assets/portfolio/motogp-aragon/motogp-aragon-3.jpg",
        alt: "Motogp Aragon",
        width: 448,
        height: 212,
        size: "wide",
      },
      {
        src: "/assets/portfolio/motogp-aragon/motogp-aragon-4.jpg",
        alt: "Motogp Aragon",
        width: 212,
        height: 212,
        size: "normal",
      },
      {
        src: "/assets/portfolio/motogp-aragon/motogp-aragon-5.jpg",
        alt: "Motogp Aragon",
        width: 212,
        height: 212,
        size: "normal",
      },
    ],
    relatedProjects: ["gopro-creator-summit", "quince"],
    excerpt: {
      title: "MotoGP Aragon",
      subtitle: "Spain",
      text: "GoPro is the official camera partner of the MotoGP Championship and served as the title sponsor for the Aragon race at the historic MotorLand Circuit. This three-day event brought together key GoPro personnel, distributors, and business partners from the EMEA region.",
      image: {
        src: "/assets/portfolio/motogp-aragon/motogp-aragon-2.jpg",
        alt: "MotoGP Aragon",
        width: 448,
        height: 448,
      },
    },
  },

  {
    slug: "campo-libre",
    featuredImage: {
      src: "/assets/portfolio/campo-libre/campo-libre-2.jpg",
      alt: "Campo Libre",
      width: 920,
      height: 448,
    },

    title: "Campo Libre",
    subtitle: "Germany",
    category: "branding",
    paragraph:
      "“They’re on a mission to make better camping products”. Having immersed themselves in the Van Life movement for years, the founders of Campo Libre grew increasingly dissatisfied with the offerings in the camping market. The challenge was to create logo and style for brand that would resonante with a young adult market with the mindset more akin to that of a skate, surf brand.",
    details: {
      date: "2021",
      location: "Germany",
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
        src: "/assets/portfolio/campo-libre/campo-libre-7.jpg",
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
    relatedProjects: ["gopro-creator-summit", "quince"],
    excerpt: {
      title: "Campo Libre",
      subtitle: "Germany",
      text: "“They’re on a mission to make better camping products”. Having immersed themselves in the Van Life movement for years, the founders of Campo Libre grew increasingly dissatisfied with the offerings in the camping market. The challenge was to create logo and style for brand that would resonante with a young adult market with the mindset more akin to that of a skate, surf brand.",
      image: {
        src: "/assets/portfolio/campo-libre/campo-libre-1.jpg",
        alt: "Campo Libre Project",
        width: 448,
        height: 448,
      },
    },
  },

  {
    slug: "gopro-creator-summit",
    featuredImage: {
      src: "/assets/portfolio/gp-slovenia/gp-slovenia-8.jpg",
      alt: "GP Slovenia",
      width: 920,
      height: 448,
    },

    title: "GoPro Creator Summit",
    subtitle: "Slovenia",
    category: "branding",
    paragraph:
      "Following the launch of the HERO12 camera. GoPro invited a select group of athletes, advocates, and leading content creators to Bled, Slovenia. The purpose of the summit was to give hands-on product training and take part in some extreme activities in one of the world’s most spectacular playgrounds.\n Check out the " +
      "<a target='_blank' href='https://youtu.be/gKZm-OWqclU?si=MKR5CCr5qczZc6ym'>recap video</a>",
    details: {
      date: "2023",
      location: "Slovenia",
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
        src: "/assets/portfolio/gp-slovenia/gp-slovenia-4.jpg",
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
    relatedProjects: ["campo-libre", "suiss-creator"],
    excerpt: {
      title: "GoPro Creator Summit",
      subtitle: "Slovenia",
      text: "Following the launch of the HERO12 camera. GoPro invited a select group of athletes, advocates, and leading content creators to Bled, Slovenia. The purpose of the summit was to give hands-on product training and take part in some extreme activities in one of the world’s most spectacular playgrounds.",
      image: {
        src: "/assets/portfolio/gp-slovenia/gp-slovenia-1.jpg",
        alt: "GP Slovenia Project",
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
    subtitle: "Germany",
    category: "branding",
    paragraph:
      'SimScale, established in Munich in 2012, is a pioneering engineering software startup. Its cloud-based platform revolutionizes the capabilities of engineers and designers globally by enabling robust Computational Fluid Dynamics (CFD), Finite Element Analysis (FEA), and thermal analysis. This groundbreaking technology dismantles numerous barriers that engineering firms encounter in realising their projects. I was engaged to create a SimScale visual language and "way of doing things" across all channels of communication for a global audience.',
    details: {
      date: "2017",
      location: "Germany",
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
    relatedProjects: ["torvac", "solar-edge"],
    excerpt: {
      title: "SimScale",
      subtitle: "Germany",
      text: 'SimScale, established in Munich in 2012, is a pioneering engineering software startup. Its cloud-based platform revolutionizes the capabilities of engineers and designers globally by enabling robust Computational Fluid Dynamics (CFD), Finite Element Analysis (FEA), and thermal analysis. This groundbreaking technology dismantles numerous barriers that engineering firms encounter in realising their projects. I was engaged to create a SimScale visual language and "way of doing things" across all channels of communication for a global audience.',
      image: {
        src: "/assets/portfolio/simscale/simscale-2.jpg",
        alt: "SimScale Project",
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
    subtitle: "Australia",
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
        alt: "Quince",
        width: 448,
        height: 448,
        size: "double",
      },
      {
        src: "/assets/portfolio/quince/quince-4.jpg",
        alt: "Quince",
        width: 448,
        height: 212,
        size: "wide",
      },
      {
        src: "/assets/portfolio/quince/quince-5.jpg",
        alt: "Quince",
        width: 212,
        height: 212,
        size: "normal",
      },
      {
        src: "/assets/portfolio/quince/quince-6.jpg",
        alt: "Quince",
        width: 212,
        height: 212,
        size: "normal",
      },
    ],
    relatedProjects: ["campo-libre", "gopro-creator-summit"],
    excerpt: {
      title: "Quince",
      subtitle: "Australia",
      text: "Quince Café has opened its doors in two of Sydney's premier shopping destinations, Westfield Bondi Junction and Eastgardens. I was entrusted  to craft a brand that exudes simplicity and elegance, embodying the essence of superior quality produce and service within a relaxed and inviting atmosphere.",
      image: {
        src: "/assets/portfolio/quince/quince-2.jpg",
        alt: "Quince Project",
        width: 448,
        height: 448,
      },
    },
  },

  {
    slug: "gopro-h12",
    featuredImage: {
      src: "/assets/portfolio/gopro-h12/gopro-h12-1.jpg",
      alt: "GoPro H12",
      width: 920,
      height: 448,
    },

    title: "GoPro HERO12",
    subtitle: "EMEA",
    category: "advertising-and-marketing",
    paragraph:
      "Drawing upon my extensive experience with the GoPro brand, I was entrusted with providing creative services to bolster the campaign for the HERO12 camera across the EMEA region. Tasked with leveraging various media opportunities and formats, I worked diligently to craft compelling narratives and visuals that showcased the camera's unparalleled capabilities.",
    details: {
      date: "2018",
      location: "EMEA",
      other: "",
    },
    images: [
      {
        src: "/assets/portfolio/gopro-h12/gopro-h12-3.jpg",
        alt: "GoPro HERO12",
        width: 448,
        height: 448,
        size: "double",
      },
      {
        src: "/assets/portfolio/gopro-h12/gopro-h12-4.jpg",
        alt: "GoPro HERO12",
        width: 448,
        height: 212,
        size: "wide",
      },
      {
        src: "/assets/portfolio/gopro-h12/gopro-h12-5.jpg",
        alt: "GoPro HERO12",
        width: 212,
        height: 212,
        size: "normal",
      },
      {
        src: "/assets/portfolio/gopro-h12/gopro-h12-6.jpg",
        alt: "GoPro HERO12",
        width: 212,
        height: 212,
        size: "normal",
      },
    ],
    relatedProjects: ["bayer", "solar-edge"],
    excerpt: {
      title: "GoPro HERO12",
      subtitle: "EMEA",
      text: "Drawing upon my extensive experience with the GoPro brand, I was entrusted with providing creative services to bolster the campaign for the HERO12 camera across the EMEA region. Tasked with leveraging various media opportunities and formats, I worked diligently to craft compelling narratives and visuals that showcased the camera's unparalleled capabilities.",
      image: {
        src: "/assets/portfolio/gopro-h12/gopro-h12-2.jpg",
        alt: "GoPro HERO12 Project",
        width: 448,
        height: 448,
      },
    },
  },

  {
    slug: "solar-edge",
    featuredImage: {
      src: "/assets/portfolio/solar-edge/solar-edge-1.jpg",
      alt: "SolarEdge",
      width: 920,
      height: 448,
    },

    title: "SolarEdge",
    subtitle: "EMEA",
    category: "advertising-and-marketing",
    paragraph:
      "Founded in Israel, SolarEdge is a global leader in smart energy technology. The company specializes in the development and manufacturing of innovative solar inverters, power optimizers, and monitoring platforms for photovoltaic (PV) systems. As the person responsible for aligning local EMEA campaigns with SolarEdge's head office vision, I undertook the crucial task of bridging the gap between global strategy and regional implementation.",
    details: {
      date: "2018",
      location: "EMEA",
      other: "",
    },
    images: [
      {
        src: "/assets/portfolio/solar-edge/solar-edge-3.jpg",
        alt: "SolarEdge",
        width: 448,
        height: 448,
        size: "double",
      },
      {
        src: "/assets/portfolio/solar-edge/solar-edge-4.jpg",
        alt: "SolarEdge",
        width: 448,
        height: 212,
        size: "wide",
      },
      {
        src: "/assets/portfolio/solar-edge/solar-edge-5.jpg",
        alt: "SolarEdge",
        width: 212,
        height: 212,
        size: "normal",
      },
      {
        src: "/assets/portfolio/solar-edge/solar-edge-6.jpg",
        alt: "SolarEdge",
        width: 212,
        height: 212,
        size: "normal",
      },
    ],
    relatedProjects: ["gopro-h12", "torvac"],
    excerpt: {
      title: "SolarEdge",
      subtitle: "EMEA",
      text: "Founded in Israel, SolarEdge is a global leader in smart energy technology. The company specializes in the development and manufacturing of innovative solar inverters, power optimizers, and monitoring platforms for photovoltaic (PV) systems. As the person responsible for aligning local EMEA campaigns with SolarEdge's head office vision, I undertook the crucial task of bridging the gap between global strategy and regional implementation.",
      image: {
        src: "/assets/portfolio/solar-edge/solar-edge-2.jpg",
        alt: "SolarEdge Project",
        width: 448,
        height: 448,
      },
    },
  },

  {
    slug: "bayer",
    featuredImage: {
      src: "/assets/portfolio/bayer/bayer-1.jpg",
      alt: "Bayer",
      width: 920,
      height: 448,
    },

    title: "Bayer Animal Health",
    subtitle: "Australia",
    category: "advertising-and-marketing",
    paragraph:
      "As a key member of a dynamic team, I contributed to introducing innovative advertising concepts and campaigns to a traditionally conservative market deeply rooted in product-based advertising traditions. Through strategic thinking and creative prowess, we challenged the status quo, injecting fresh perspectives and engaging narratives into the market landscape.",
    details: {
      date: "2012",
      location: "Australia",
      other: "",
    },
    images: [
      {
        src: "/assets/portfolio/bayer/bayer-3.jpg",
        alt: "Bayer",
        width: 448,
        height: 448,
        size: "double",
      },
      {
        src: "/assets/portfolio/bayer/bayer-7.jpg",
        alt: "Bayer",
        width: 448,
        height: 212,
        size: "wide",
      },
      {
        src: "/assets/portfolio/bayer/bayer-5.jpg",
        alt: "Bayer",
        width: 212,
        height: 212,
        size: "normal",
      },
      {
        src: "/assets/portfolio/bayer/bayer-6.jpg",
        alt: "Bayer",
        width: 212,
        height: 212,
        size: "normal",
      },
    ],
    relatedProjects: ["gopro-h12", "solar-edge"],
    excerpt: {
      title: "Bayer",
      subtitle: "Australia",
      text: "As a key member of a dynamic team, I contributed to introducing innovative advertising concepts and campaigns to a traditionally conservative market deeply rooted in product-based advertising traditions. Through strategic thinking and creative prowess, we challenged the status quo, injecting fresh perspectives and engaging narratives into the market landscape.",
      image: {
        src: "/assets/portfolio/bayer/bayer-2.jpg",
        alt: "Bayer Project",
        width: 448,
        height: 448,
      },
    },
  },

  {
    slug: "out-of-home",
    featuredImage: {
      src: "/assets/portfolio/out-of-home/out-of-home-1.jpg",
      alt: "Out Of Home Advertising",
      width: 920,
      height: 448,
    },

    title: "Out Of Home Advertising",
    subtitle: "EMEA",
    category: "advertising-and-marketing",
    paragraph:
      "OOH typically includes billboards, transit ads (such as bus or subway ads), street furniture (like benches or kiosks), and other public displays. I have produced advertisements to drive brand awareness in high-traffic areas or locations, such as airports, ski resorts, sports stadiums and transport networks through out the EMEA region.",
    details: {
      date: "",
      location: "EMEA",
      other: "",
    },
    images: [
      {
        src: "/assets/portfolio/out-of-home/out-of-home-3.jpg",
        alt: "Out Of Home Advertising",
        width: 448,
        height: 448,
        size: "double",
      },
      {
        src: "/assets/portfolio/out-of-home/out-of-home-4.jpg",
        alt: "Out Of Home Advertising",
        width: 448,
        height: 212,
        size: "wide",
      },
      {
        src: "/assets/portfolio/out-of-home/out-of-home-5.jpg",
        alt: "Out Of Home Advertising",
        width: 212,
        height: 212,
        size: "normal",
      },
      {
        src: "/assets/portfolio/out-of-home/out-of-home-6.jpg",
        alt: "Out Of Home Advertising",
        width: 212,
        height: 212,
        size: "normal",
      },
    ],
    relatedProjects: [],
    excerpt: {
      title: "Out Of Home Advertising",
      subtitle: "EMEA",
      text: "OOH typically includes billboards, transit ads (such as bus or subway ads), street furniture (like benches or kiosks), and other public displays. I have produced advertisements to drive brand awareness in high-traffic areas or locations, such as airports, ski resorts, sports stadiums and transport networks through out the EMEA region.",
      image: {
        src: "/assets/portfolio/out-of-home/out-of-home-2.jpg",
        alt: "Out Of Home Advertising Project",
        width: 448,
        height: 448,
      },
    },
  },

  {
    slug: "torvac",
    featuredImage: {
      src: "/assets/portfolio/torvac/torvac-1.jpg",
      alt: "Torvac Solutions",
      width: 920,
      height: 448,
    },

    title: "Torvac Solutions",
    subtitle: "Australia",
    category: "digital",
    paragraph:
      "Torvac Solutions is a boutique fire protection company dedicated to safeguarding some of Australia's most cherished assets with state-of-the-art protection systems. I have been entrusted with the responsibility of designing and maintaining their corporate website, as well as orchestrating regular MailChimp campaigns and crafting engaging social media posts.",
    details: {
      date: "2024",
      location: "Australia",
      other: "",
    },
    images: [
      {
        src: "/assets/portfolio/torvac/torvac-3.jpg",
        alt: "Torvac Solutions",
        width: 448,
        height: 448,
        size: "double",
      },
      {
        src: "/assets/portfolio/torvac/torvac-4.jpg",
        alt: "Torvac Solutions",
        width: 448,
        height: 212,
        size: "wide",
      },
      {
        src: "/assets/portfolio/torvac/torvac-5.jpg",
        alt: "Torvac Solutions",
        width: 212,
        height: 212,
        size: "normal",
      },
      {
        src: "/assets/portfolio/torvac/torvac-6.jpg",
        alt: "Torvac Solutions",
        width: 212,
        height: 212,
        size: "normal",
      },
    ],
    relatedProjects: ["fsp", "solar-edge"],
    excerpt: {
      title: "Torvac Solutions",
      subtitle: "Australia",
      text: "Torvac Solutions is a boutique fire protection company dedicated to safeguarding some of Australia's most cherished assets with state-of-the-art protection systems. I have been entrusted with the responsibility of designing and maintaining their corporate website, as well as orchestrating regular MailChimp campaigns and crafting engaging social media posts.",
      image: {
        src: "/assets/portfolio/torvac/torvac-2.jpg",
        alt: "Torvac Solutions Project",
        width: 448,
        height: 448,
      },
    },
  },

  {
    slug: "omni-bar",
    featuredImage: {
      src: "/assets/portfolio/omni-bar/omni-bar-1.jpg",
      alt: "Omni Bar",
      width: 920,
      height: 448,
    },

    title: "OMNI BAR",
    subtitle: "Germany",
    category: "digital",
    paragraph:
      "The founders of OMNI Bar are resolute in their mission to challenge the status quo and revolutionise  the snacking habits of young people. With a commitment to offering organic, vegan, and low-sugar pocket food done right, they entrusted me with leveraging my expertise in health and lifestyle brands to enhance the OMNI Bar campaign. I diligently crafted compelling narratives and visuals that underscored OMNI Bar's profound connection with the lifestyles and values of their target demographic.",
    details: {
      date: "2021",
      location: "Germany",
      other: "",
    },
    images: [
      {
        src: "/assets/portfolio/omni-bar/omni-bar-3.jpg",
        alt: "Omni bar",
        width: 448,
        height: 448,
        size: "double",
      },
      {
        src: "/assets/portfolio/omni-bar/omni-bar-4.jpg",
        alt: "Omni bar",
        width: 448,
        height: 212,
        size: "wide",
      },
      {
        src: "/assets/portfolio/omni-bar/omni-bar-5.jpg",
        alt: "Omni bar",
        width: 212,
        height: 212,
        size: "normal",
      },
      {
        src: "/assets/portfolio/omni-bar/omni-bar-6.jpg",
        alt: "Omni bar",
        width: 212,
        height: 212,
        size: "normal",
      },
    ],
    relatedProjects: ["gopro-h12", "rugby"],
    excerpt: {
      title: "OMNI BAR",
      subtitle: "Germany",
      text: "The founders of OMNI Bar are resolute in their mission to challenge the status quo and revolutionise  the snacking habits of young people. With a commitment to offering organic, vegan, and low-sugar pocket food done right, they entrusted me with leveraging my expertise in health and lifestyle brands to enhance the OMNI Bar campaign. I diligently crafted compelling narratives and visuals that underscored OMNI Bar's profound connection with the lifestyles and values of their target demographic.",
      image: {
        src: "/assets/portfolio/omni-bar/omni-bar-2.jpg",
        alt: "Omni bar Project",
        width: 448,
        height: 448,
      },
    },
  },

  {
    slug: "fsp",
    featuredImage: {
      src: "/assets/portfolio/fsp/fsp-7.jpg",
      alt: "Fire Systems Products",
      width: 920,
      height: 448,
    },

    title: "Fire Systems Products",
    subtitle: "Australia",
    category: "digital",
    paragraph:
      "Having spearheaded the creation of the Fire System Products brand and meticulously crafted its style guide, I was subsequently entrusted with the task of conceptualizing and executing their digital marketing communication strategy. This encompassed the design and development of an informative product website as well as the seamless execution of regular MailChimp campaigns aimed at engaging our target audience effectively.",
    details: {
      date: "2024",
      location: "Australia",
      other: "",
    },
    images: [
      {
        src: "/assets/portfolio/fsp/fsp-3.jpg",
        alt: "Fire Systems Products",
        width: 448,
        height: 448,
        size: "double",
      },
      {
        src: "/assets/portfolio/fsp/fsp-4.jpg",
        alt: "Fire Systems Products",
        width: 448,
        height: 212,
        size: "wide",
      },
      {
        src: "/assets/portfolio/fsp/fsp-5.jpg",
        alt: "Fire Systems Products",
        width: 212,
        height: 212,
        size: "normal",
      },
      {
        src: "/assets/portfolio/fsp/fsp-6.jpg",
        alt: "Fire Systems Products",
        width: 212,
        height: 212,
        size: "normal",
      },
    ],
    relatedProjects: ["torvac", "solar-edge"],
    excerpt: {
      title: "Fire Systems Products",
      subtitle: "Australia",
      text: "Having spearheaded the creation of the Fire System Products brand and meticulously crafted its style guide, I was subsequently entrusted with the task of conceptualizing and executing their digital marketing communication strategy. This encompassed the design and development of an informative product website as well as the seamless execution of regular MailChimp campaigns aimed at engaging our target audience effectively.",
      image: {
        src: "/assets/portfolio/fsp/fsp-2.jpg",
        alt: "Fire Systems Products Project",
        width: 448,
        height: 448,
      },
    },
  },

  {
    slug: "rugby",
    featuredImage: {
      src: "/assets/portfolio/rugby/rugby-1.jpg",
      alt: "OKTOBERFEST7s",
      width: 920,
      height: 448,
    },

    title: "OKTOBERFEST7s",
    subtitle: "Germany",
    category: "digital",
    paragraph:
      "In addition to offering creative services across various channels, I was specifically assigned to develop social media content for Germany's inaugural world-class Rugby Tournament, OKTOBERFEST7s. From the months leading up to the event to the weeks preceding it, I meticulously crafted engaging posts, and provided live match day updates to captivate audiences and enhance the tournament experience.",
    details: {
      date: "2017 & 2019",
      location: "Germany",
      other: "",
    },
    images: [
      {
        src: "/assets/portfolio/rugby/rugby-3.jpg",
        alt: "OKTOBERFEST7s",
        width: 448,
        height: 448,
        size: "double",
      },
      {
        src: "/assets/portfolio/rugby/rugby-4.jpg",
        alt: "OKTOBERFEST7s",
        width: 448,
        height: 212,
        size: "wide",
      },
      {
        src: "/assets/portfolio/rugby/rugby-5.jpg",
        alt: "OKTOBERFEST7s",
        width: 212,
        height: 212,
        size: "normal",
      },
      {
        src: "/assets/portfolio/rugby/rugby-6.jpg",
        alt: "OKTOBERFEST7s",
        width: 212,
        height: 212,
        size: "normal",
      },
    ],
    relatedProjects: ["omni-bar", "gopro-h12"],
    excerpt: {
      title: "OKTOBERFEST7s",
      subtitle: "Germany",
      text: "In addition to offering creative services across various channels, I was specifically assigned to develop social media content for Germany's inaugural world-class Rugby Tournament, OKTOBERFEST7s. From the months leading up to the event to the weeks preceding it, I meticulously crafted engaging posts, and provided live match day updates to captivate audiences and enhance the tournament experience.",
      image: {
        src: "/assets/portfolio/rugby/rugby-2.jpg",
        alt: "OKTOBERFEST7s Project",
        width: 448,
        height: 448,
      },
    },
  },

  {
    slug: "laax",
    featuredImage: {
      src: "/assets/portfolio/laax/laax-1.jpg",
      alt: "Flims Laax Falera Resort",
      width: 920,
      height: 448,
    },

    title: "Flims Laax Falera Resort",
    subtitle: "Switzerland",
    category: "exhibition-and-display",
    paragraph:
      "Bolstered by visionary management and exceptional facilities, Flims Laax Falera has solidified its position as a premier destination for snowboarders and skiers across Europe. Suitably, GoPro has proudly served as Laax's official camera partner for over a decade. GoPro maintains a strong visual presence throughout the resort via Gondola wrapping, billboard advertising, large format displays, print ads, and digital advertising.",
    details: {
      date: "2024",
      location: "Switzerland",
      other: "",
    },
    images: [
      {
        src: "/assets/portfolio/laax/laax-3.jpg",
        alt: "Flims Laax Falera Resort",
        width: 448,
        height: 448,
        size: "double",
      },
      {
        src: "/assets/portfolio/laax/laax-4.jpg",
        alt: "Flims Laax Falera Resort",
        width: 448,
        height: 212,
        size: "wide",
      },
      {
        src: "/assets/portfolio/laax/laax-7.jpg",
        alt: "Flims Laax Falera Resort",
        width: 212,
        height: 212,
        size: "normal",
      },
      {
        src: "/assets/portfolio/laax/laax-6.jpg",
        alt: "Flims Laax Falera Resort",
        width: 212,
        height: 212,
        size: "normal",
      },
    ],
    relatedProjects: ["leogang", "gopro-h12"],
    excerpt: {
      title: "Flims Laax Falera Resort",
      subtitle: "Switzerland",
      text: "Bolstered by visionary management and exceptional facilities, Flims Laax Falera has solidified its position as a premier destination for snowboarders and skiers across Europe. Suitably, GoPro has proudly served as Laax's official camera partner for over a decade. GoPro maintains a strong visual presence throughout the resort via Gondola wrapping, billboard advertising, large format displays, print ads, and digital advertising.",
      image: {
        src: "/assets/portfolio/laax/laax-2.jpg",
        alt: "Flims Laax Falera Resort Project",
        width: 448,
        height: 448,
      },
    },
  },

  {
    slug: "leogang",
    featuredImage: {
      src: "/assets/portfolio/leogang/leogang-1.jpg",
      alt: "Saalfelden Leogang",
      width: 920,
      height: 448,
    },

    title: "Saalfelden Leogang",
    subtitle: "Austria",
    category: "exhibition-and-display",
    paragraph:
      "GoPro has forged a lasting partnership with Austria's premier sports hub, Saalfelden Leogang. This collaboration includes a permanent container display strategically positioned to bolster brand awareness and offer educational resources. Whether it's the adrenaline-pumping UCI mountain biking events in summer or the exhilarating skiing and snowboarding activities in winter, the GoPro brand shines prominently across the resort. From Gondolas to billboards and digital displays, visitors encounter the GoPro brand at every turn.",
    details: {
      date: "2024",
      location: "Austria",
      other: "",
    },
    images: [
      {
        src: "/assets/portfolio/leogang/leogang-3.jpg",
        alt: "Saalfelden Leogang",
        width: 448,
        height: 448,
        size: "double",
      },
      {
        src: "/assets/portfolio/leogang/leogang-4.jpg",
        alt: "Saalfelden Leogang",
        width: 448,
        height: 212,
        size: "wide",
      },
      {
        src: "/assets/portfolio/leogang/leogang-5.jpg",
        alt: "Saalfelden Leogang",
        width: 212,
        height: 212,
        size: "normal",
      },
      {
        src: "/assets/portfolio/leogang/leogang-6.jpg",
        alt: "Saalfelden Leogang",
        width: 212,
        height: 212,
        size: "normal",
      },
    ],
    relatedProjects: ["laax", "gopro-h12"],
    excerpt: {
      title: "Saalfelden Leogang",
      subtitle: "Austria",
      text: "GoPro has forged a lasting partnership with Austria's premier sports hub, Saalfelden Leogang. This collaboration includes a permanent container display strategically positioned to bolster brand awareness and offer educational resources. Whether it's the adrenaline-pumping UCI mountain biking events in summer or the exhilarating skiing and snowboarding activities in winter, the GoPro brand shines prominently across the resort. From Gondolas to billboards and digital displays, visitors encounter the GoPro brand at every turn.",
      image: {
        src: "/assets/portfolio/leogang/leogang-2.jpg",
        alt: "Saalfelden Leogang Project",
        width: 448,
        height: 448,
      },
    },
  },

  {
    slug: "gopro-x-yamaha",
    featuredImage: {
      src: "/assets/portfolio/gopro-yamaha/gopro-yamaha-1.jpg",
      alt: "GoPro X Yamaha",
      width: 920,
      height: 448,
    },

    title: "GoPro X Yamaha",
    subtitle: "Switzerland and Italy",
    category: "exhibition-and-display",
    paragraph:
      'GoPro was extended an exclusive opportunity to curate a captivating "shop in a shop" experience within Yamaha showrooms across Switzerland and select regions of Italy. The primary objective was to showcase GoPro\'s diverse camera range alongside specialized accessories tailored for motorcycle enthusiasts. The visual aesthetics of the displays were carefully crafted, featuring dynamic imagery of MotoGP legend Valentino Rossi, to underscore the synergy between the two iconic brands and resonate with the passionate motorcycle community.',
    details: {
      date: "2020",
      location: "Switzerland and Italy",
      other: "",
    },
    images: [
      {
        src: "/assets/portfolio/gopro-yamaha/gopro-yamaha-3.jpg",
        alt: "GoPro X Yamaha",
        width: 448,
        height: 448,
        size: "double",
      },
      {
        src: "/assets/portfolio/gopro-yamaha/gopro-yamaha-4.jpg",
        alt: "GoPro X Yamaha",
        width: 448,
        height: 212,
        size: "wide",
      },
      {
        src: "/assets/portfolio/gopro-yamaha/gopro-yamaha-5.jpg",
        alt: "GoPro X Yamaha",
        width: 212,
        height: 212,
        size: "normal",
      },
      {
        src: "/assets/portfolio/gopro-yamaha/gopro-yamaha-6.jpg",
        alt: "GoPro X Yamaha",
        width: 212,
        height: 212,
        size: "normal",
      },
    ],
    relatedProjects: ["zurich-airport", "leogang"],
    excerpt: {
      title: "GoPro X Yamaha",
      subtitle: "Switzerland and Italy",
      text: 'GoPro was extended an exclusive opportunity to curate a captivating "shop in a shop" experience within Yamaha showrooms across Switzerland and select regions of Italy. The primary objective was to showcase GoPro\'s diverse camera range alongside specialized accessories tailored for motorcycle enthusiasts. The visual aesthetics of the displays were carefully crafted, featuring dynamic imagery of MotoGP legend Valentino Rossi, to underscore the synergy between the two iconic brands and resonate with the passionate motorcycle community.',
      image: {
        src: "/assets/portfolio/gopro-yamaha/gopro-yamaha-2.jpg",
        alt: "GoPro X Yamaha Project",
        width: 448,
        height: 448,
      },
    },
  },

  {
    slug: "zurich-airport",
    featuredImage: {
      src: "/assets/portfolio/zurich-airport/zurich-airport-1.jpg",
      alt: "GoPro California Zurich Airport",
      width: 920,
      height: 448,
    },

    title: "GoPro California Zurich Airport",
    subtitle: "Switzerland",
    category: "exhibition-and-display",
    paragraph:
      "GoPro received the prestigious invitation to showcase California's essence through a display at Zurich Airport. As a lifestyle company rooted in California's vibrant culture, GoPro was uniquely positioned to undertake this endeavor. The exhibit featured captivating images of California's iconic beach culture, all captured on GoPro cameras, alongside the showcased cameras and accessories utilized to create these stunning visuals. This presentation effectively encapsulated the spirit of California and highlighted GoPro's role in capturing and celebrating life's exhilarating moments.",
    details: {
      date: "2020",
      location: "Switzerland",
      other: "",
    },
    images: [
      {
        src: "/assets/portfolio/zurich-airport/zurich-airport-3.jpg",
        alt: "GoPro California Zurich Airport",
        width: 448,
        height: 448,
        size: "double",
      },
      {
        src: "/assets/portfolio/zurich-airport/zurich-airport-4.jpg",
        alt: "GoPro California Zurich Airport",
        width: 448,
        height: 212,
        size: "wide",
      },
      {
        src: "/assets/portfolio/zurich-airport/zurich-airport-5.jpg",
        alt: "GoPro California Zurich Airport",
        width: 212,
        height: 212,
        size: "normal",
      },
      {
        src: "/assets/portfolio/zurich-airport/zurich-airport-6.jpg",
        alt: "GoPro California Zurich Airport",
        width: 212,
        height: 212,
        size: "normal",
      },
    ],
    relatedProjects: ["leogang", "gopro-h12"],
    excerpt: {
      title: "GoPro California Zurich Airport",
      subtitle: "Switzerland",
      text: "GoPro received the prestigious invitation to showcase California's essence through a display at Zurich Airport. As a lifestyle company rooted in California's vibrant culture, GoPro was uniquely positioned to undertake this endeavor. The exhibit featured captivating images of California's iconic beach culture, all captured on GoPro cameras, alongside the showcased cameras and accessories utilized to create these stunning visuals. This presentation effectively encapsulated the spirit of California and highlighted GoPro's role in capturing and celebrating life's exhilarating moments.",
      image: {
        src: "/assets/portfolio/zurich-airport/zurich-airport-2.jpg",
        alt: "GoPro California Zurich Airport Project",
        width: 448,
        height: 448,
      },
    },
  },

  {
    slug: "cre8tors-project",
    featuredImage: {
      src: "/assets/portfolio/cre8tors/cre8tors-1.jpg",
      alt: "GoPro CRE8ORS",
      width: 920,
      height: 448,
    },

    title: "GoPro CRE8ORS",
    subtitle: "Austria",
    category: "events",
    paragraph:
      "GoPro invited 16 prominent advocates from the EMEA region to participate in an exhilarating 800-mile, race to Innsbruck, Austria, to commemorate the launch of the HERO8 camera. The event showcased the camera's capabilities through the thrilling journey of the participants. The culmination of the race was marked by a gala event held in an innovative Upcycling studio in Innsbruck. The participants screened their journey edits to panel of judges and celebrated the successful launch amidst a vibrant atmosphere of creativity and camaraderie.\n Watch the " +
      "<a target='_blank' href='https://youtu.be/j7SgXD3XwbM?si=i2gaG3eHJ8veX_rm'>Winning Edit</a>",
    details: {
      date: "2019",
      location: "Austria",
      other: "",
    },
    images: [
      {
        src: "/assets/portfolio/cre8tors/cre8tors-3.jpg",
        alt: "GoPro CRE8ORS",
        width: 448,
        height: 448,
        size: "double",
      },
      {
        src: "/assets/portfolio/cre8tors/cre8tors-4.jpg",
        alt: "GoPro CRE8ORS",
        width: 448,
        height: 212,
        size: "wide",
      },
      {
        src: "/assets/portfolio/cre8tors/cre8tors-5.jpg",
        alt: "GoPro CRE8ORS",
        width: 212,
        height: 212,
        size: "normal",
      },
      {
        src: "/assets/portfolio/cre8tors/cre8tors-6.jpg",
        alt: "GoPro CRE8ORS",
        width: 212,
        height: 212,
        size: "normal",
      },
    ],
    relatedProjects: ["gopro-creator-summit", "gp-distributors-summit"],
    excerpt: {
      title: "GoPro CRE8ORS",
      subtitle: "Austria",
      text: "GoPro invited 16 prominent advocates from the EMEA region to participate in an exhilarating 800-mile, race to Innsbruck, Austria, to commemorate the launch of the HERO8 camera. The event showcased the camera's capabilities through the thrilling journey of the participants. The culmination of the race was marked by a gala event held in an innovative Upcycling studio in Innsbruck. The participants screened their journey edits to panel of judges and celebrated the successful launch amidst a vibrant atmosphere of creativity and camaraderie.",
      image: {
        src: "/assets/portfolio/cre8tors/cre8tors-2.jpg",
        alt: "GoPro CRE8ORS Project",
        width: 448,
        height: 448,
      },
    },
  },

  {
    slug: "motogp-project",
    featuredImage: {
      src: "/assets/portfolio/motogp/motogp-1.jpg",
      alt: "GoPro British MotoGP",
      width: 920,
      height: 448,
    },

    title: "GoPro British MotoGP",
    subtitle: "England",
    category: "events",
    paragraph:
      "As a partner of the MotoGP Championship, GoPro took pride in its role as the title sponsor of the British MotoGP event. This significant sponsorship ensured that GoPro's branding was prominently displayed both on the course and trackside, capturing the attention of enthusiasts and spectators alike. Furthermore, GoPro curated a luxurious VIP Lounge within the MotoGP Village, where I was entrusted with the responsibility of designing the visual assets for the space, including hospitality and activity branding.",
    details: {
      date: "2018 & 2019",
      location: "England",
      other: "",
    },
    images: [
      {
        src: "/assets/portfolio/motogp/motogp-3.jpg",
        alt: "GoPro British MotoGP",
        width: 448,
        height: 448,
        size: "double",
      },
      {
        src: "/assets/portfolio/motogp/motogp-4.jpg",
        alt: "GoPro British MotoGP",
        width: 448,
        height: 212,
        size: "wide",
      },
      {
        src: "/assets/portfolio/motogp/motogp-5.jpg",
        alt: "GoPro British MotoGP",
        width: 212,
        height: 212,
        size: "normal",
      },
      {
        src: "/assets/portfolio/motogp/motogp-6.jpg",
        alt: "GoPro British MotoGP",
        width: 212,
        height: 212,
        size: "normal",
      },
    ],
    relatedProjects: ["gp-distributors-summit", "gopro-x-yamaha"],
    excerpt: {
      title: "GoPro British MotoGP",
      subtitle: "England",
      text: "As a partner of the MotoGP Championship, GoPro took pride in its role as the title sponsor of the British MotoGP event. This significant sponsorship ensured that GoPro's branding was prominently displayed both on the course and trackside, capturing the attention of enthusiasts and spectators alike. Furthermore, GoPro curated a luxurious VIP Lounge within the MotoGP Village, where I was entrusted with the responsibility of designing the visual assets for the space, including hospitality and activity branding.",
      image: {
        src: "/assets/portfolio/motogp/motogp-2.jpg",
        alt: "GoPro British MotoGP Project",
        width: 448,
        height: 448,
      },
    },
  },

  {
    slug: "gp-distributors-summit",
    featuredImage: {
      src: "/assets/portfolio/gp-distributors-summit/gp-distributors-summit-1.jpg",
      alt: "GoPro EMEA Distributors Summit",
      width: 920,
      height: 448,
    },

    title: "GoPro EMEA Distributors Summit",
    subtitle: "Croatia",
    category: "events",
    paragraph:
      "The Annual Distributor Summit serves as a pivotal gathering, uniting GoPro's department heads and esteemed distribution partners from the EMEA region each year. Carefully selected destinations are chosen to accommodate not only GoPro's activities but also to offer significant cultural experiences. As part of my role, I am entrusted with branding the event, aligning activities, apparel, and providing captivating visual assets that seamlessly integrate with the venue, ensuring a memorable and cohesive experience for all attendees.",
    details: {
      date: "2019",
      location: "Croatia",
      other: "",
    },
    images: [
      {
        src: "/assets/portfolio/gp-distributors-summit/gp-distributors-summit-3.jpg",
        alt: "GoPro EMEA Distributors Summit",
        width: 448,
        height: 448,
        size: "double",
      },
      {
        src: "/assets/portfolio/gp-distributors-summit/gp-distributors-summit-4.jpg",
        alt: "GoPro EMEA Distributors Summit",
        width: 448,
        height: 212,
        size: "wide",
      },
      {
        src: "/assets/portfolio/gp-distributors-summit/gp-distributors-summit-5.jpg",
        alt: "GoPro EMEA Distributors Summit",
        width: 212,
        height: 212,
        size: "normal",
      },
      {
        src: "/assets/portfolio/gp-distributors-summit/gp-distributors-summit-6.jpg",
        alt: "GoPro EMEA Distributors Summit",
        width: 212,
        height: 212,
        size: "normal",
      },
    ],
    relatedProjects: ["motogp-project", "cre8tors-project"],
    excerpt: {
      title: "GoPro EMEA Distributors Summit",
      subtitle: "Croatia",
      text: "The Annual Distributor Summit serves as a pivotal gathering, uniting GoPro's department heads and esteemed distribution partners from the EMEA region each year. Carefully selected destinations are chosen to accommodate not only GoPro's activities but also to offer significant cultural experiences. As part of my role, I am entrusted with branding the event, aligning activities, apparel, and providing captivating visual assets that seamlessly integrate with the venue, ensuring a memorable and cohesive experience for all attendees.",
      image: {
        src: "/assets/portfolio/gp-distributors-summit/gp-distributors-summit-2.jpg",
        alt: "GoPro EMEA Distributors Summit Project",
        width: 448,
        height: 448,
      },
    },
  },

  {
    slug: "oktoberfest7s",
    featuredImage: {
      src: "/assets/portfolio/oktoberfest7s/oktoberfest7s-1.jpg",
      alt: "OKTOBERFEST7s",
      width: 920,
      height: 448,
    },

    title: "OKTOBERFEST7s",
    subtitle: "Germany",
    category: "events",
    paragraph:
      "OKTOBERFEST7s marked Germany's inaugural world-class rugby tournament, setting a new standard in the sport. As a member of a dynamic team of marketing and media professionals, I played a pivotal role in providing essential marketing and media assets for the event. Staged in the iconic Olympiastadion, our team was further entrusted with the responsibility of branding the stadium and ensuring the prominent visibility of the OKTOBERFEST7s identity.",
    details: {
      date: "2017, 2019",
      location: "Germany",
      other: "",
    },
    images: [
      {
        src: "/assets/portfolio/oktoberfest7s/oktoberfest7s-3.jpg",
        alt: "OKTOBERFEST7s",
        width: 448,
        height: 448,
        size: "double",
      },
      {
        src: "/assets/portfolio/oktoberfest7s/oktoberfest7s-4.jpg",
        alt: "OKTOBERFEST7s",
        width: 448,
        height: 212,
        size: "wide",
      },
      {
        src: "/assets/portfolio/oktoberfest7s/oktoberfest7s-5.jpg",
        alt: "OKTOBERFEST7s",
        width: 212,
        height: 212,
        size: "normal",
      },
      {
        src: "/assets/portfolio/oktoberfest7s/oktoberfest7s-6.jpg",
        alt: "OKTOBERFEST7s",
        width: 212,
        height: 212,
        size: "normal",
      },
    ],
    relatedProjects: [],
    excerpt: {
      title: "OKTOBERFEST7s",
      subtitle: "Germany",
      text: "OKTOBERFEST7s marked Germany's inaugural world-class rugby tournament, setting a new standard in the sport. As a member of a dynamic team of marketing and media professionals, I played a pivotal role in providing essential marketing and media assets for the event. Staged in the iconic Olympiastadion, our team was further entrusted with the responsibility of branding the stadium and ensuring the prominent visibility of the OKTOBERFEST7s identity.",
      image: {
        src: "/assets/portfolio/oktoberfest7s/oktoberfest7s-2.jpg",
        alt: "OKTOBERFEST7s Project",
        width: 448,
        height: 448,
      },
    },
  },

  {
    slug: "gopro-3d-printed-trophy",
    featuredImage: {
      src: "/assets/portfolio/gp-3d-trophy/gp-3d-trophy-1.jpg",
      alt: "GoPro 3-D Printed Trophy",
      width: 920,
      height: 448,
    },

    title: "GoPro 3-D Printed Trophy",
    subtitle: "Germany",
    category: "packaging-and-merchandise",
    paragraph:
      "The challenge lay in crafting a memorable trophy to symbolize a prestigious award. After thorough research, the decision was made to immortalize the iconic GoPro Hero camera through a meticulously crafted metal 3D print. While this innovative and relatively new technology presented its obstacles, the team adeptly navigated through them, resulting in a stunning trophy that was enthusiastically received.",
    details: {
      date: "2019",
      location: "Germany",
      other: "",
    },
    images: [
      {
        src: "/assets/portfolio/gp-3d-trophy/gp-3d-trophy-3.jpg",
        alt: "GoPro 3-D Printed Trophy",
        width: 448,
        height: 448,
        size: "double",
      },
      {
        src: "/assets/portfolio/gp-3d-trophy/gp-3d-trophy-4.jpg",
        alt: "GoPro 3-D Printed Trophy",
        width: 448,
        height: 212,
        size: "wide",
      },
      {
        src: "/assets/portfolio/gp-3d-trophy/gp-3d-trophy-5.jpg",
        alt: "GoPro 3-D Printed Trophy",
        width: 212,
        height: 212,
        size: "normal",
      },
      {
        src: "/assets/portfolio/gp-3d-trophy/gp-3d-trophy-6.jpg",
        alt: "GoPro 3-D Printed Trophy",
        width: 212,
        height: 212,
        size: "normal",
      },
    ],
    relatedProjects: ["gp-distributors-summit", "mcd-award"],
    excerpt: {
      title: "GoPro 3-D Printed Trophy",
      subtitle: "Germany",
      text: "The challenge lay in crafting a memorable trophy to symbolize a prestigious award. After thorough research, the decision was made to immortalize the iconic GoPro Hero camera through a meticulously crafted metal 3D print. While this innovative and relatively new technology presented its obstacles, the team adeptly navigated through them, resulting in a stunning trophy that was enthusiastically received.",
      image: {
        src: "/assets/portfolio/gp-3d-trophy/gp-3d-trophy-2.jpg",
        alt: "GoPro 3-D Printed Trophy Project",
        width: 448,
        height: 448,
      },
    },
  },

  {
    slug: "apparel",
    featuredImage: {
      src: "/assets/portfolio/apparel/apparel-1.jpg",
      alt: "GoPro Apparel",
      width: 920,
      height: 448,
    },

    title: "GoPro Apparel",
    subtitle: "EMEA",
    category: "packaging-and-merchandise",
    paragraph:
      "Delivering branded apparel solutions demands expertise in navigating the complexities of materials, suppliers, and budget constraints. I have been entrusted to develope a range of organic team apparel in sync with GoPro’s commitment to use more ethical and responsible materials across the business.",
    details: {
      date: "2024",
      location: "EMEA",
      other: "",
    },
    images: [
      {
        src: "/assets/portfolio/apparel/apparel-3.jpg",
        alt: "GoPro Apparel",
        width: 448,
        height: 448,
        size: "double",
      },
      {
        src: "/assets/portfolio/apparel/apparel-4.jpg",
        alt: "GoPro Apparel",
        width: 448,
        height: 212,
        size: "wide",
      },
      {
        src: "/assets/portfolio/apparel/apparel-5.jpg",
        alt: "GoPro Apparel",
        width: 212,
        height: 212,
        size: "normal",
      },
      {
        src: "/assets/portfolio/apparel/apparel-6.jpg",
        alt: "GoPro Apparel",
        width: 212,
        height: 212,
        size: "normal",
      },
    ],
    relatedProjects: ["gp-distributors-summit", "gopro-h12"],
    excerpt: {
      title: "GoPro Apparel",
      subtitle: "EMEA",
      text: "Delivering branded apparel solutions demands expertise in navigating the complexities of materials, suppliers, and budget constraints. I have been entrusted to develope a range of organic team apparel in sync with GoPro’s commitment to use more ethical and responsible materials across the business.",
      image: {
        src: "/assets/portfolio/apparel/apparel-2.jpg",
        alt: "GoPro Apparel Project",
        width: 448,
        height: 448,
      },
    },
  },

  {
    slug: "mcd-award",
    featuredImage: {
      src: "/assets/portfolio/mcd-award/mcd-award-1.jpg",
      alt: "GoPro Million Dollar Challenge",
      width: 920,
      height: 448,
    },

    title: "GoPro Million Dollar Challenge",
    subtitle: "Worldwide",
    category: "packaging-and-merchandise",
    paragraph:
      "The GoPro Million Dollar Challenge draws participants from across the globe to submit their captivating videos or photos. Winners are rewarded with a portion of the Million Dollar Prize pool. Additionally, to honor their outstanding contributions, winners are presented with a trophy commemorating their achievement.",
    details: {
      date: "2020",
      location: "Worldwide",
      other: "",
    },
    images: [
      {
        src: "/assets/portfolio/mcd-award/mcd-award-3.jpg",
        alt: "GoPro EMEA Distributors Summit",
        width: 448,
        height: 448,
        size: "double",
      },
      {
        src: "/assets/portfolio/mcd-award/mcd-award-4.jpg",
        alt: "GoPro EMEA Distributors Summit",
        width: 448,
        height: 212,
        size: "wide",
      },
      {
        src: "/assets/portfolio/mcd-award/mcd-award-5.jpg",
        alt: "GoPro EMEA Distributors Summit",
        width: 212,
        height: 212,
        size: "normal",
      },
      {
        src: "/assets/portfolio/mcd-award/mcd-award-6.jpg",
        alt: "GoPro EMEA Distributors Summit",
        width: 212,
        height: 212,
        size: "normal",
      },
    ],
    relatedProjects: ["gopro-3d-printed-trophy", "cre8tors-project"],
    excerpt: {
      title: "GoPro Million Dollar Challenge",
      subtitle: "Worldwide",
      text: "The GoPro Million Dollar Challenge draws participants from across the globe to submit their captivating videos or photos. Winners are rewarded with a portion of the Million Dollar Prize pool. Additionally, to honor their outstanding contributions, winners are presented with a trophy commemorating their achievement.",
      image: {
        src: "/assets/portfolio/mcd-award/mcd-award-2.jpg",
        alt: "GoPro EMEA Distributors Summit Project",
        width: 448,
        height: 448,
      },
    },
  },

  {
    slug: "bayer-project",
    featuredImage: {
      src: "/assets/portfolio/bayer-project/bayer-1.jpg",
      alt: "Bayer Animal Health",
      width: 920,
      height: 448,
    },

    title: "Bayer Animal Health",
    subtitle: "Australia",
    category: "packaging-and-merchandise",
    paragraph:
      "As the design lead for a comprehensive project, I spearheaded the rebranding of over 100 products for the Bayer Animal Health group across Australia and New Zealand. Throughout the project, I cultivated robust relationships with clients, production specialists, printers, and various vendors. These connections were instrumental in ensuring the successful execution of the project and maintaining the highest standards of quality and consistency across all branded materials.",
    details: {
      date: "2021",
      location: "Australia",
      other: "",
    },
    images: [
      {
        src: "/assets/portfolio/bayer-project/bayer-3.jpg",
        alt: "Bayer Animal Health",
        width: 448,
        height: 448,
        size: "double",
      },
      {
        src: "/assets/portfolio/bayer-project/bayer-4.jpg",
        alt: "Bayer Animal Health",
        width: 448,
        height: 212,
        size: "wide",
      },
      {
        src: "/assets/portfolio/bayer-project/bayer-5.jpg",
        alt: "Bayer Animal Health",
        width: 212,
        height: 212,
        size: "normal",
      },
      {
        src: "/assets/portfolio/bayer-project/bayer-6.jpg",
        alt: "Bayer Animal Health",
        width: 212,
        height: 212,
        size: "normal",
      },
    ],
    relatedProjects: ["gopro-3d-printed-trophy", "apparel"],
    excerpt: {
      title: "Bayer Animal Health",
      subtitle: "Australia",
      text: "As the design lead for a comprehensive project, I spearheaded the rebranding of over 100 products for the Bayer Animal Health group across Australia and New Zealand. Throughout the project, I cultivated robust relationships with clients, production specialists, printers, and various vendors. These connections were instrumental in ensuring the successful execution of the project and maintaining the highest standards of quality and consistency across all branded materials.",
      image: {
        src: "/assets/portfolio/bayer-project/bayer-2.jpg",
        alt: "Bayer Animal Health Project",
        width: 448,
        height: 448,
      },
    },
  },
];
