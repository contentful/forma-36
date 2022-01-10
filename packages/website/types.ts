export interface FrontMatter {
  extra?: string;
  github?: string;
  intro?: string;
  section?: string;
  slug?: string;
  status?: 'stable' | 'deprecated' | 'alpha';
  title: string;
  type?: string;
  typescript?: string;
}
