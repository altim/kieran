import { Category } from "@/data/data.types.ts";
import { categories } from "@/data/data-projects.ts";

export const getCategoryBySlug = (slug: Category["slug"]) => {
  return categories.find((item) => item.slug === slug);
};
