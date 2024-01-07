import { Category } from "@/data/data.types.ts";
import { categories, caseStudyCategories } from "@/data/data.ts";

export const getCategoryBySlug = (slug: Category["slug"]) => {
  return categories.find((item) => item.slug === slug);
};

export const getCSCategoryBySlug = (slug: Category["slug"]) => {
  return caseStudyCategories.find((item) => item.slug === slug);
};
