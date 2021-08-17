import { TextLinkProps } from '@contentful/f36-text-link';

export interface NotificationCta {
  label: string;
  textLinkProps: Partial<TextLinkProps<'button'>>;
}

export type NotificationVariant = 'positive' | 'negative' | 'warning';
