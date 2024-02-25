import { projects } from "@/data/data-projects.ts";
import { caseStudies } from "@/data/data-case-studies.ts";

export const isPortfolioItem = (slug: string) => {
  return projects.find((item) => item.slug === slug);
};

export const isCaseStudyItem = (slug: string) => {
  return caseStudies.find((item) => item.slug === slug);
};
