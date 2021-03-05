export type BadgeVariant =
  | 'primary'
  | 'primary-filled'
  | 'positive'
  | 'negative'
  | 'warning'
  | 'secondary'
  | 'muted';

export type EntityStatus =
  | 'published'
  | 'draft'
  | 'archived'
  | 'changed'
  | 'deleted'
  | 'new';

export interface BadgeProps {
  variant?: BadgeVariant;
  style?: React.CSSProperties;
  className?: string;
  testId?: string;
  children: React.ReactNode;
  entityStatusType?: EntityStatus;
}
