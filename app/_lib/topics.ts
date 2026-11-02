import accompaniments from "./accompaniments.json";

export type ServiceSection = {
  id: string;
  title: string;
  paragraphs: string[];
  paragraphIds?: string[];
  items: string[];
  itemIds: string[];
  subsections: { title: string; paragraphs: string[] }[];
};

export type Accompaniment = {
  slug: string;
  title: string;
  seoTitle: string;
  description: string;
  heading: string;
  intro: string[];
  cta: string;
  related: string[];
  sections: ServiceSection[];
};

export const topics: Accompaniment[] = accompaniments;
