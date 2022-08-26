import type { TextLinkProps } from '@contentful/f36-text-link';

export interface NotificationCta {
  label: string;
  textLinkProps: Partial<TextLinkProps>;
}

export type NotificationVariant =
  | 'positive'
  | 'negative'
  | 'warning'
  | 'primary';
