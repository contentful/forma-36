export interface FrontMatter {
  github?: string;
  section?: string;
  slug?: string;
  status?: 'stable' | 'deprecated' | 'alpha';
  title: string;
  type?: string;
  typescript?: string;
  storybook?: string;
}
