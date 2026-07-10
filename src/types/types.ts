export interface ProjectSection {
  subtitle: string;
  items: string[];
}

export interface PortfolioProject {
  id: string;
  title: string;
  overviewSummary: string;
  overviewDetailed?: string;
  sections: ProjectSection[];
  quote?: string;
  coverImages: string[];
  gallery: string[];
  price?: string;
}

export interface Service {
  id: string;
  number: string;
  title: string;
  description: string;
  iconName: string;
  image: string;
}