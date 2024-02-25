import { Category, ProjectType } from "@/data/data.types.ts";

export const categories: Category[] = [
  {
    slug: "branding",
    name: "Branding",
    featuredImage: "/assets/categories/branding-wide.jpg",
    featuredImageSmall: "/assets/categories/branding.jpg",
  },
  {
    slug: "advertising-and-marketing",
    name: "Advertising & Marketing",
    featuredImage: "/assets/categories/advertising-and-marketing-wide.jpg",
    featuredImageSmall: "/assets/categories/advertising-and-marketing.jpg",
  },
  {
    slug: "digital",
    name: "Digital",
    featuredImage: "/assets/categories/digital-wide.jpg",
    featuredImageSmall: "/assets/categories/digital.jpg",
  },
  {
    slug: "exhibition-spaces-and-display",
    name: "Exhibition Spaces & Display",
    featuredImage: "/assets/categories/exhibition-spaces-and-display-wide.jpg",
    featuredImageSmall: "/assets/categories/exhibition-spaces-and-display.jpg",
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
      subtitle: "Munich, Germany",
      text: "“They’re on a mission to make better camping products”. Having immersed themselves in the Van Life movement for years, the founders of Campo Libre grew increasingly dissatisfied with the offerings in the camping market. The challenge was to create a camping brand target to a young adult  market with the mindset more akin to that of a skate, surf brand.",
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
    subtitle: "Bled, Slovenia",
    category: "branding",
    paragraph:
      "Following the launch of the HERO12 camera. GoPro invited a select group of athletes, advocates, and leading content creators to Bled, Slovenia. The purpose of the summit was to give hands-on product training and take part in some extreme activities in one of the world’s most spectacular playgrounds.",
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
      subtitle: "Bled, Slovenia",
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
    relatedProjects: ["campo-libre", "gopro-creator-summit"],
    excerpt: {
      title: "SimScale",
      subtitle: "Munich, Germany",
      text: "SimScale, established in Munich in 2012, is a pioneering engineering software startup. Its cloud-based platform revolutionizes the capabilities of engineers and designers globally by enabling robust Computational Fluid Dynamics (CFD), Finite Element Analysis (FEA), and thermal analysis. This groundbreaking technology dismantles numerous barriers that engineering firms encounter in realising their projects.",
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
      subtitle: "Sydney, Australia",
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
      date: "",
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
        src: "/assets/portfolio/bayer/bayer-4.jpg",
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
    relatedProjects: [],
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
    slug: "gopro-h12",
    featuredImage: {
      src: "/assets/portfolio/gopro-h12/gopro-h12-1.jpg",
      alt: "GoPro H12",
      width: 920,
      height: 448,
    },

    title: "GoPro HERO12",
    subtitle: "",
    category: "advertising-and-marketing",
    paragraph:
      "Drawing upon my extensive experience with the GoPro brand, I was entrusted with providing creative services to bolster the campaign for the HERO12 camera across the EMEA region. Tasked with leveraging various media opportunities and formats, I worked diligently to craft compelling narratives and visuals that showcased the camera's unparalleled capabilities.",
    details: {
      date: "",
      location: "",
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
    relatedProjects: [],
    excerpt: {
      title: "GoPro HERO12",
      subtitle: "",
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
    subtitle: "Munich, Germany",
    category: "advertising-and-marketing",
    paragraph:
      "Founded in Israel, SolarEdge is a global leader in smart energy technology. The company specializes in the development and manufacturing of innovative solar inverters, power optimizers, and monitoring platforms for photovoltaic (PV) systems. As the person responsible for aligning local EMEA campaigns with SolarEdge's head office vision, I undertook the crucial task of bridging the gap between global strategy and regional implementation.",
    details: {
      date: "",
      location: "Munich, Germany",
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
    relatedProjects: [],
    excerpt: {
      title: "SolarEdge",
      subtitle: "",
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
    slug: "out-of-home",
    featuredImage: {
      src: "/assets/portfolio/out-of-home/out-of-home-1.jpg",
      alt: "Out Of Home Advertising",
      width: 920,
      height: 448,
    },

    title: "Out Of Home Advertising (OOH)",
    subtitle: "",
    category: "advertising-and-marketing",
    paragraph:
      "This form of advertising typically includes billboards, transit ads (such as bus or subway ads), street furniture (like benches or kiosks), and other public displays. OOH advertising aims to capture the attention of passersby in high-traffic areas or locations where people gather, such as shopping centers or sports stadiums. It offers brands a way to reach a broad audience and increase brand visibility through eye-catching visuals and concise messaging.",
    details: {
      date: "",
      location: "",
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
      subtitle: "",
      text: "This form of advertising typically includes billboards, transit ads (such as bus or subway ads), street furniture (like benches or kiosks), and other public displays. OOH advertising aims to capture the attention of passersby in high-traffic areas or locations where people gather, such as shopping centers or sports stadiums. It offers brands a way to reach a broad audience and increase brand visibility through eye-catching visuals and concise messaging",
      image: {
        src: "/assets/portfolio/out-of-home/out-of-home-2.jpg",
        alt: "Out Of Home Advertising Project",
        width: 448,
        height: 448,
      },
    },
  },

  {
    slug: "fsp",
    featuredImage: {
      src: "/assets/portfolio/fsp/fsp-1.jpg",
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
      date: "",
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
    relatedProjects: [],
    excerpt: {
      title: "Fire Systems Products",
      subtitle: "",
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
    slug: "omni-bar",
    featuredImage: {
      src: "/assets/portfolio/omni-bar/omni-bar-1.jpg",
      alt: "Omni Bar",
      width: 920,
      height: 448,
    },

    title: "OMNI BAR",
    subtitle: "Hausham, Germany",
    category: "digital",
    paragraph:
      "The founders of OMNI Bar are resolute in their mission to challenge the status quo and revolutionise  the snacking habits of young people. With a commitment to offering organic, vegan, and low-sugar pocket food done right, they entrusted me with leveraging my expertise in health and lifestyle brands to enhance the OMNI Bar campaign. I diligently crafted compelling narratives and visuals that underscored OMNI Bar's profound connection with the lifestyles and values of their target demographic.",
    details: {
      date: "",
      location: "Hausham, Germany",
      other: "",
    },
    images: [
      {
        src: "/assets/portfolio/omni-bar/omni-bar-3.jpg",
        alt: "Fire Systems Products",
        width: 448,
        height: 448,
        size: "double",
      },
      {
        src: "/assets/portfolio/omni-bar/omni-bar-4.jpg",
        alt: "Fire Systems Products",
        width: 448,
        height: 212,
        size: "wide",
      },
      {
        src: "/assets/portfolio/omni-bar/omni-bar-5.jpg",
        alt: "Fire Systems Products",
        width: 212,
        height: 212,
        size: "normal",
      },
      {
        src: "/assets/portfolio/omni-bar/omni-bar-6.jpg",
        alt: "Fire Systems Products",
        width: 212,
        height: 212,
        size: "normal",
      },
    ],
    relatedProjects: [],
    excerpt: {
      title: "OMNI BAR",
      subtitle: "Hausham, Germany",
      text: "The founders of OMNI Bar are resolute in their mission to challenge the status quo and revolutionise  the snacking habits of young people. With a commitment to offering organic, vegan, and low-sugar pocket food done right, they entrusted me with leveraging my expertise in health and lifestyle brands to enhance the OMNI Bar campaign. I diligently crafted compelling narratives and visuals that underscored OMNI Bar's profound connection with the lifestyles and values of their target demographic.",
      image: {
        src: "/assets/portfolio/omni-bar/omni-bar-2.jpg",
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
    subtitle: "Munich, Germany",
    category: "digital",
    paragraph:
      "In addition to offering creative services across various channels, I was specifically assigned to develop social media content for Germany's inaugural world-class Rugby Tournament, OKTOBERFEST7s. From the months leading up to the event to the weeks preceding it, I meticulously crafted engaging posts, and provided live match day updates to captivate audiences and enhance the tournament experience.",
    details: {
      date: "",
      location: "Munich, Germany",
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
    relatedProjects: [],
    excerpt: {
      title: "OKTOBERFEST7s",
      subtitle: "Munich, Germany",
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
      date: "",
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
    relatedProjects: [],
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
    slug: "laax",
    featuredImage: {
      src: "/assets/portfolio/laax/laax-1.jpg",
      alt: "Flims Laax Falera Resort",
      width: 920,
      height: 448,
    },

    title: "Flims Laax Falera Resort",
    subtitle: "Switzerland",
    category: "exhibition-spaces-and-display",
    paragraph:
      "Bolstered by visionary management and exceptional facilities, Flims Laax Falera has solidified its position as a premier destination for snowboarders and skiers across Europe. Suitably, GoPro has proudly served as Laax's official camera partner for over a decade. GoPro maintains a strong visual presence throughout the resort via Gondola wrapping, billboard advertising, large format displays, print ads, and digital advertising.",
    details: {
      date: "",
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
        src: "/assets/portfolio/laax/laax-5.jpg",
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
    relatedProjects: [],
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
    category: "exhibition-spaces-and-display",
    paragraph:
      "GoPro has forged a lasting partnership with Austria's premier sports hub, Saalfelden Leogang. This collaboration includes a permanent container display strategically positioned to bolster brand awareness and offer educational resources. Whether it's the adrenaline-pumping UCI mountain biking events in summer or the exhilarating skiing and snowboarding activities in winter, the GoPro brand shines prominently across the resort. From Gondolas to billboards and digital displays, visitors encounter the GoPro brand at every turn.",
    details: {
      date: "",
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
    relatedProjects: [],
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
      alt: "GoPro X YAMAHA",
      width: 920,
      height: 448,
    },

    title: "GoPro X YAMAHA",
    subtitle: "Switzerland and Italy",
    category: "exhibition-spaces-and-display",
    paragraph:
      'GoPro was extended an exclusive opportunity to curate a captivating "shop in a shop" experience within Yamaha showrooms across Switzerland and select regions of Italy. The primary objective was to showcase GoPro\'s diverse camera range alongside specialized accessories tailored for motorcycle enthusiasts. The visual aesthetics of the displays were carefully crafted, featuring dynamic imagery of MotoGP legend Valentino Rossi, to underscore the synergy between the two iconic brands and resonate with the passionate motorcycle community.',
    details: {
      date: "",
      location: "Switzerland and Italy",
      other: "",
    },
    images: [
      {
        src: "/assets/portfolio/gopro-yamaha/gopro-yamaha-3.jpg",
        alt: "GoPro X YAMAHA",
        width: 448,
        height: 448,
        size: "double",
      },
      {
        src: "/assets/portfolio/gopro-yamaha/gopro-yamaha-4.jpg",
        alt: "GoPro X YAMAHA",
        width: 448,
        height: 212,
        size: "wide",
      },
      {
        src: "/assets/portfolio/gopro-yamaha/gopro-yamaha-5.jpg",
        alt: "GoPro X YAMAHA",
        width: 212,
        height: 212,
        size: "normal",
      },
      {
        src: "/assets/portfolio/gopro-yamaha/gopro-yamaha-6.jpg",
        alt: "GoPro X YAMAHA",
        width: 212,
        height: 212,
        size: "normal",
      },
    ],
    relatedProjects: [],
    excerpt: {
      title: "GoPro X YAMAHA",
      subtitle: "Switzerland and Italy",
      text: 'GoPro was extended an exclusive opportunity to curate a captivating "shop in a shop" experience within Yamaha showrooms across Switzerland and select regions of Italy. The primary objective was to showcase GoPro\'s diverse camera range alongside specialized accessories tailored for motorcycle enthusiasts. The visual aesthetics of the displays were carefully crafted, featuring dynamic imagery of MotoGP legend Valentino Rossi, to underscore the synergy between the two iconic brands and resonate with the passionate motorcycle community.',
      image: {
        src: "/assets/portfolio/gopro-yamaha/gopro-yamaha-2.jpg",
        alt: "GoPro X YAMAHA Project",
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
    subtitle: "Zurich, Switzerland",
    category: "exhibition-spaces-and-display",
    paragraph:
      'GoPro was extended an exclusive opportunity to curate a captivating "shop in a shop" experience within Yamaha showrooms across Switzerland and select regions of Italy. The primary objective was to showcase GoPro\'s diverse camera range alongside specialized accessories tailored for motorcycle enthusiasts. The visual aesthetics of the displays were carefully crafted, featuring dynamic imagery of MotoGP legend Valentino Rossi, to underscore the synergy between the two iconic brands and resonate with the passionate motorcycle community.',
    details: {
      date: "",
      location: "Zurich, Switzerland",
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
    relatedProjects: [],
    excerpt: {
      title: "GoPro California Zurich Airport",
      subtitle: "Zurich, Switzerland",
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
    slug: "cre8tors",
    featuredImage: {
      src: "/assets/portfolio/cre8tors/cre8tors-1.jpg",
      alt: "GoPro CRE8ORS",
      width: 920,
      height: 448,
    },

    title: "GoPro CRE8ORS",
    subtitle: "Innsbruck, Austria",
    category: "events",
    paragraph:
      "GoPro invented 6 prominent advocates from the EMEA region to participate in an exhilarating 800-mile, 8-day race culminating in Innsbruck, Austria, to commemorate the launch of the HERO8 camera. The event showcased the camera's capabilities through the thrilling journey of the participants. The culmination of the race was marked by a gala event held in an innovative Upcycling studio in Innsbruck, where participants and attendees celebrated the successful launch amidst a vibrant atmosphere of creativity and camaraderie.",
    details: {
      date: "",
      location: "Innsbruck, Austria",
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
    relatedProjects: [],
    excerpt: {
      title: "GoPro CRE8ORS",
      subtitle: "Innsbruck, Austria",
      text: "GoPro invented 6 prominent advocates from the EMEA region to participate in an exhilarating 800-mile, 8-day race culminating in Innsbruck, Austria, to commemorate the launch of the HERO8 camera. The event showcased the camera's capabilities through the thrilling journey of the participants. The culmination of the race was marked by a gala event held in an innovative Upcycling studio in Innsbruck, where participants and attendees celebrated the successful launch amidst a vibrant atmosphere of creativity and camaraderie.",
      image: {
        src: "/assets/portfolio/cre8tors/cre8tors-2.jpg",
        alt: "GoPro CRE8ORS Project",
        width: 448,
        height: 448,
      },
    },
  },

  {
    slug: "motogp",
    featuredImage: {
      src: "/assets/portfolio/motogp/motogp-1.jpg",
      alt: "GoPro British MotoGP",
      width: 920,
      height: 448,
    },

    title: "GoPro British MotoGP",
    subtitle: "Silverstone, UK",
    category: "events",
    paragraph:
      "As a partner of the MotoGP Championship, GoPro took pride in its role as the title sponsor of the British MotoGP event. This significant sponsorship ensured that GoPro's branding was prominently displayed both on the course and trackside, capturing the attention of enthusiasts and spectators alike. Furthermore, GoPro curated a luxurious VIP Lounge within the MotoGP Village, where I was entrusted with the responsibility of designing the visual assets for the space, including hospitality and activity branding.",
    details: {
      date: "",
      location: "Silverstone, UK",
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
    relatedProjects: [],
    excerpt: {
      title: "GoPro British MotoGP",
      subtitle: "Silverstone, UK",
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
    subtitle: "Dubrovnik, Croatia",
    category: "events",
    paragraph:
      "The Annual Distributor Summit serves as a pivotal gathering, uniting GoPro's department heads and esteemed distribution partners from the EMEA region each year. Carefully selected destinations are chosen to accommodate not only GoPro's activities but also to offer significant cultural experiences. As part of my role, I am entrusted with branding the event, aligning activities, apparel, and providing captivating visual assets that seamlessly integrate with the venue, ensuring a memorable and cohesive experience for all attendees.",
    details: {
      date: "",
      location: "Dubrovnik, Croatia",
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
    relatedProjects: [],
    excerpt: {
      title: "GoPro EMEA Distributors Summit",
      subtitle: "Dubrovnik, Croatia",
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
    subtitle: "Munich, Germany",
    category: "events",
    paragraph:
      "OKTOBERFEST7s marked Germany's inaugural world-class rugby tournament, setting a new standard in the sport. As a member of a dynamic team of marketing and media professionals, I played a pivotal role in providing essential marketing and media assets for the event. Staged in the iconic Olympiastadion, our team was further entrusted with the responsibility of branding the stadium and ensuring the prominent visibility of the OKTOBERFEST7s identity.",
    details: {
      date: "",
      location: "Munich, Germany",
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
      subtitle: "Munich, Germany",
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
    subtitle: "Munich, Germany",
    category: "packaging-and-merchandise",
    paragraph:
      "The challenge lay in crafting a memorable trophy to symbolize a prestigious award. After thorough research, the decision was made to immortalize the iconic GoPro Hero camera through a meticulously crafted metal 3D print. While this innovative and relatively new technology presented its obstacles, the team adeptly navigated through them, resulting in a stunning trophy that was enthusiastically received.",
    details: {
      date: "",
      location: "Munich, Germany",
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
    relatedProjects: [],
    excerpt: {
      title: "GoPro 3-D Printed Trophy",
      subtitle: "Munich, Germany",
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
    subtitle: "Munich, Germany",
    category: "packaging-and-merchandise",
    paragraph:
      "Delivering branded apparel solutions demands expertise in navigating the complexities of materials, suppliers, and budget constraints.",
    details: {
      date: "",
      location: "Munich, Germany",
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
    relatedProjects: [],
    excerpt: {
      title: "GoPro Apparel",
      subtitle: "Munich, Germany",
      text: "Delivering branded apparel solutions demands expertise in navigating the complexities of materials, suppliers, and budget constraints.",
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
      alt: "GoPro EMEA Distributors Summit",
      width: 920,
      height: 448,
    },

    title: "GoPro EMEA Distributors Summit",
    subtitle: "Dubrovnik, Croatia",
    category: "packaging-and-merchandise",
    paragraph:
      "The GoPro Million Dollar Challenge draws participants from across the globe to submit their captivating videos or photos. Winners are rewarded with a portion of the Million Dollar Prize pool. Additionally, to honor their outstanding contributions, winners are presented with a trophy commemorating their achievement.",
    details: {
      date: "",
      location: "Dubrovnik, Croatia",
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
    relatedProjects: [],
    excerpt: {
      title: "GoPro EMEA Distributors Summit",
      subtitle: "Dubrovnik, Croatia",
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
    subtitle: "Sydney, Australia",
    category: "packaging-and-merchandise",
    paragraph:
      "As the design lead for a comprehensive project, I spearheaded the rebranding of over 100 products for the Bayer Animal Health group across Australia and New Zealand. Throughout the project, I cultivated robust relationships with clients, production specialists, printers, and various vendors. These connections were instrumental in ensuring the successful execution of the project and maintaining the highest standards of quality and consistency across all branded materials.",
    details: {
      date: "",
      location: "Sydney, Australia",
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
    relatedProjects: [],
    excerpt: {
      title: "Bayer Animal Health",
      subtitle: "Sydney, Australia",
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
