import React, { useCallback } from 'react';
import cn from 'classnames';
import truncate from 'truncate';
import { EntityStatusBadge } from '@contentful/f36-badge';
import type { EntityStatus, PickUnion } from '@contentful/f36-core';
import type { IconComponent } from '@contentful/f36-icon';

import { Card, BaseCardProps, CardProps } from '../Card';
import { CardActions } from '../CardActions/CardActions';
import { EntryCardSkeleton } from './EntryCardSkeleton';
import {
  CardDragHandle,
  CardDragHandleProps,
} from '../CardDragHandle/CardDragHandle';
import styles from './EntryCard.css';

type EntryCardStatus = PickUnion<
  EntityStatus,
  'deleted' | 'archived' | 'changed' | 'draft' | 'published'
>;

export type EntryCardSize = 'default' | 'small' | 'auto';

export interface EntryCardProps extends BaseCardProps {
  /**
   * The title of the entry
   */
  title?: string;
  /**
   * The description of the entry
   */
  description?: string;
  /**
   * The content type of the entry
   */
  contentType?: React.ReactNode;
  /**
   * The publish status of the entry
   */
  status?: EntryCardStatus;
  /**
   * An icon for the status of the entry
   */
  statusIcon?: IconComponent;
  /**
   * The thumbnail of the entry
   */
  thumbnailElement?: React.ReactNode;
  /**
   * Loading state for the EntryCard - when true will display loading feedback to the user
   */
  loading?: boolean;
  /**
   * The action to be performed on click of the EntryCard
   */
  onClick?: CardProps['onClick'];
  /**
   * The DropdownList elements used to render an actions dropdown for the EntryCard
   */
  dropdownListElements?: React.ReactElement;
  /**
   * Prop to pass a custom CardDragHandle component to for use in drag and drop contexts
   */
  cardDragHandleComponent?: React.ReactNode;
  /**
   * Renders a default drag handle for the component for use in drag and drop contexts
   */
  withDragHandle?: boolean;
  /**
   * Props to pass down to the default CardDragHandle component (does not work with cardDragHandleComponent prop)
   */
  cardDragHandleProps?: Partial<CardDragHandleProps>;
  /**
   * Applies styling for when the component is actively being dragged by the user
   */
  isDragActive?: boolean;
  /**
   * Changes the height of the component. When small will also ensure thumbnail and description aren't rendered
   */
  size?: EntryCardSize;
}

export function EntryCard({
  className,
  title = 'Untitled',
  onClick,
  description,
  contentType,
  status,
  statusIcon: StatusIcon,
  thumbnailElement,
  loading,
  dropdownListElements,
  isDragActive,
  size = 'default',
  testId = 'cf-ui-entry-card',
  cardDragHandleComponent,
  cardDragHandleProps,
  withDragHandle,
  ...otherProps
}: EntryCardProps): React.ReactElement {
  const renderTitle = useCallback((_size: EntryCardSize, title?: string) => {
    if (!title) {
      return;
    }

    const truncatedTitle = truncate(title, 255, {});

    return (
      <h1
        title={title.length > 255 ? title : ''}
        className={styles.EntryCard__title}
        data-test-id="title"
      >
        {truncatedTitle}
      </h1>
    );
  }, []);

  const renderDescription = useCallback(
    (size: EntryCardSize, description?: string) => {
      if (!description || size === 'small') {
        return;
      }

      const truncatedDescription = truncate(description, 95, {});

      return (
        <p className={styles.EntryCard__description}>{truncatedDescription}</p>
      );
    },
    [],
  );

  const renderThumbnail = useCallback(
    (size: EntryCardSize, thumbnailElement?: React.ReactNode) => {
      if (!thumbnailElement || size === 'small') {
        return;
      }

      return (
        <figure className={styles.EntryCard__thumbnail}>
          {thumbnailElement}
        </figure>
      );
    },
    [],
  );

  const renderStatus = useCallback((status: EntryCardProps['status']) => {
    return <EntityStatusBadge entityStatus={status} />;
  }, []);

  const renderCardDragHandle = useCallback(() => {
    if (cardDragHandleComponent) {
      return cardDragHandleComponent;
    } else if (withDragHandle) {
      return (
        <CardDragHandle isDragActive={isDragActive} {...cardDragHandleProps}>
          Reorder entry
        </CardDragHandle>
      );
    }
  }, [
    cardDragHandleComponent,
    cardDragHandleProps,
    isDragActive,
    withDragHandle,
  ]);

  const classNames = cn(
    styles.EntryCard,
    styles[`EntryCard--size-${size}`],
    {
      [styles['EntryCard--drag-active']]: isDragActive,
    },
    className,
  );

  return (
    <Card
      className={classNames}
      onClick={!loading ? onClick : undefined}
      padding="none"
      data-test-id={testId}
      {...otherProps}
    >
      {loading ? (
        <div
          className={cn(
            styles.EntryCard__wrapper,
            styles['EntryCard__skeleton-wrapper'],
          )}
        >
          <EntryCardSkeleton />
        </div>
      ) : (
        <React.Fragment>
          {renderCardDragHandle()}
          <div className={styles.EntryCard__wrapper}>
            <React.Fragment>
              <div className={styles.EntryCard__header}>
                <div
                  className={styles['EntryCard__content-type']}
                  data-test-id="content-type"
                >
                  {contentType}
                </div>
                {StatusIcon && (
                  <StatusIcon
                    className={styles['EntryCard__icon']}
                    variant="muted"
                  />
                )}
                {status && renderStatus(status)}
                {dropdownListElements && (
                  <CardActions
                    className={styles['EntryCard__actions']}
                    iconButtonProps={{
                      onClick: (e) => e.stopPropagation,
                    }}
                  >
                    {dropdownListElements}
                  </CardActions>
                )}
              </div>
              <div className={styles.EntryCard__content}>
                <div className={styles.EntryCard__body}>
                  {renderTitle(size, title)}
                  {renderDescription(size, description)}
                </div>
                {renderThumbnail(size, thumbnailElement)}
              </div>
            </React.Fragment>
          </div>
        </React.Fragment>
      )}
    </Card>
  );
}
