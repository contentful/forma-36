import type { ReactElement } from 'react';
import type { EntityStatus } from '@contentful/f36-core';
import type { HeadingElement } from '@contentful/f36-typography';

import type { BaseCardInternalProps } from '../BaseCard/BaseCard.types';

export type EntryCardSize = 'default' | 'small' | 'auto';

export type EntryCardInternalProps = Omit<
  BaseCardInternalProps,
  'header' | 'padding' | 'ref' | 'type' | 'title'
> & {
  /**
   * The title of the entry, it will be used as the value for the tooltip
   */
  title?: string;
  /**
   * The tag for the title of the entry.
   */
  titleTag?: HeadingElement;
  /**
   * The description of the entry
   */
  description?: string;
  /**
   * The content type of the entry
   */
  contentType?: string;
  /**
   * The publishing status of the entry
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
