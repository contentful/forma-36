export interface FrontMatter {
  github?: string;
  section?: string;
  slug?: string;
  status?: 'stable' | 'deprecated' | 'alpha' | 'beta';
  title: string;
  type?: string;
  typescript?: string;
  storybook?: string;
}
