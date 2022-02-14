import type { ReactElement } from 'react';
import type { EntityStatus } from '@contentful/f36-core';

import type { BaseCardInternalProps } from '../BaseCard/BaseCard.types';

export type EntryCardSize = 'default' | 'small' | 'auto';

export type EntryCardInternalProps = Omit<
  BaseCardInternalProps,
  'badge' | 'header' | 'padding' | 'ref' | 'type' | 'title'
> & {
  /**
   * The title of the entry, it will be used as the value for the tooltip
   */
  title?: string;
  /**
   * The description of the entry
   */
  description?: string;
  /**
   * The content type of the entry
   */
  contentType?: string;
  /**
   * The publish status of the entry
   */
  status?: EntityStatus;
  /**
   * The thumbnail of the entry
   */
  thumbnailElement?: ReactElement;
  /**
   * Changes the height of the component. When small will also ensure thumbnail and description aren't rendered
   */
  size?: EntryCardSize;
};
