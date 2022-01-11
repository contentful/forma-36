export interface FrontMatter {
  github?: string;
  description?: string;
  section?: string;
  slug?: string;
  status?: 'stable' | 'deprecated' | 'alpha';
  title: string;
  type?: string;
  typescript?: string;
}
