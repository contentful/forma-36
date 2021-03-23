import React, { useCallback } from 'react';
import cn from 'classnames';
import type { MouseEventHandler } from 'react';
import { EntityStatusBadge } from '@contentful/f36-badge';
import type { EntityStatus, PickUnion } from '@contentful/f36-core';

import { Icon } from '../../Icon';
import { CardActions, CardDragHandle, CardDragHandleProps } from '../../Card';
import {
  SkeletonBodyText,
  SkeletonContainer,
  SkeletonImage,
} from '../../Skeleton';
import styles from './EntityListItem.css';

type EntityListItemStatus = PickUnion<
  EntityStatus,
  'archived' | 'changed' | 'draft' | 'published'
>;

export interface EntityListItemProps {
  /**
   * The title of the entity
   */
  title: string;
  /**
   * The description of the entity
   */
  description?: string;
  /**
   * The content type of the entity
   */
  contentType?: string;
  /**
   * The publish status of the entry
   */
  status?: EntityListItemStatus;
  /**
   * A boolean used to render the Thumbnail or not
   */
  withThumbnail?: boolean;
  /**
   * The URL of the entity's preview thumbnail. Use 46px x 46px images for best results
   */
  thumbnailUrl?: string;
  /**
   * The alt text for the thumbnail
   */
  thumbnailAltText?: string;
  /**
   * The DropdownList elements used to render actions for the component
   */
  dropdownListElements?: React.ReactElement;
  /**
   * Renders a drag handle for the component for use in drag and drop contexts
   */
  withDragHandle?: boolean;
  /**
   * Applies styling for when the component is actively being dragged by the user
   */
  isDragActive?: boolean;
  /**
   * Prop to pass a custom CardDragHandle component to for use in drag and drop contexts
   */
  cardDragHandleComponent?: React.ReactNode;
  /**
   * Props to pass down to the default CardDragHandle component (does not work with cardDragHandleComponent prop)
   */
  cardDragHandleProps?: Partial<CardDragHandleProps>;
  /**
   * An entity can either be an Entry, an Asset or a Release. This prop will apply styling based on if the entity is an asset, a release or an entry
   *
   * Note: 'entry' and 'asset' are @deprecated but supported in v1.x for backwards compatibility
   */
  entityType?: 'Entry' | 'Asset' | 'entry' | 'asset' | 'Release';
  /**
   * Loading state for the component - when true will display loading feedback to the user
   */
  isLoading?: boolean;
  /**
   * The action to be performed on click of the EntryCard
   */
  onClick?: MouseEventHandler;
  /**
   * The href for the component. Will render the card as an `a` element for native browser link handling
   */
  href?: string;
  /**
   * Class names to be appended to the className prop of the component
   */
  className?: string;
  /**
   * An ID used for testing purposes applied as a data attribute (data-test-id)
   */
  testId?: string;
  /**
   * A boolean used to disable the CardActions
   */
  isActionsDisabled?: boolean;
}

export function EntityListItem({
  className,
  testId = 'cf-ui-entity-list-item',
  title,
  description,
  contentType,
  entityType = 'entry',
  withThumbnail = true,
  thumbnailUrl,
  thumbnailAltText,
  status,
  dropdownListElements,
  withDragHandle,
  isDragActive,
  isLoading,
  onClick,
  href,
  cardDragHandleProps,
  cardDragHandleComponent,
  isActionsDisabled = false,
  ...otherProps
}: EntityListItemProps): React.ReactElement {
  const renderIcon = useCallback(() => {
    const iconMap = {
      asset: 'Asset',
      entry: 'Entry',
      release: 'Release',
    };
    const icon = entityType ? iconMap[entityType.toLowerCase()] : 'Entry';

    return <Icon icon={icon} color="muted" />;
  }, [entityType]);

  const renderThumbnail = useCallback(() => {
    return (
      <img
        src={thumbnailUrl}
        className={styles['EntityListItem__thumbnail']}
        alt={thumbnailAltText}
      />
    );
  }, [thumbnailAltText, thumbnailUrl]);

  const renderStatus = useCallback((status: EntityListItemProps['status']) => {
    return (
      <div className={styles['EntityListItem__status']}>
        <EntityStatusBadge entityStatus={status} />
      </div>
    );
  }, []);

  const renderLoadingCard = useCallback(() => {
    return (
      <article className={styles['EntityListItem__inner']}>
        <SkeletonContainer clipId="f36-entity-list-item-skeleton">
          <SkeletonImage height={46} width={46} />
          <SkeletonBodyText numberOfLines={2} lineHeight={18} offsetLeft={54} />
        </SkeletonContainer>
      </article>
    );
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

  const classNames = cn(styles.EntityListItem, className, {
    [styles['EntityListItem--drag-active']]: isDragActive,
    [styles['EntityListItem--is-interactive']]: onClick || href,
  });

  const Element = onClick ? 'a' : 'article';

  // archived assets will not be available on the CDN, resulting in a broken image src
  const isArchived = status === 'archived';
  const asIcon = isArchived || !thumbnailUrl;

  return (
    <li {...otherProps} className={classNames} data-test-id={testId}>
      {renderCardDragHandle()}
      {isLoading ? (
        renderLoadingCard()
      ) : (
        <Element
          className={styles['EntityListItem__inner']}
          onClick={onClick}
          href={href}
          tabIndex={onClick && 0}
          target={onClick && href ? '_blank' : undefined}
        >
          <div tabIndex={-1} className={styles['EntityListItem__focus-trap']}>
            {withThumbnail && (
              <figure className={styles['EntityListItem__media']}>
                {asIcon ? renderIcon() : renderThumbnail()}
              </figure>
            )}

            <div className={styles['EntityListItem__content']}>
              <div className={styles['EntityListItem__heading']}>
                <h1 className={styles['EntityListItem__title']}>{title}</h1>

                {contentType && (
                  <div className={styles['EntityListItem__content-type']}>
                    ({contentType})
                  </div>
                )}
              </div>
              {description && (
                <p className={styles['EntityListItem__description']}>
                  {description}
                </p>
              )}
            </div>

            <div className={styles['EntityListItem__meta']}>
              {status && renderStatus(status)}

              {dropdownListElements && (
                <CardActions
                  className={styles['EntityListItem__actions']}
                  isDisabled={isActionsDisabled}
                  iconButtonProps={{
                    onClick: (e) => e.stopPropagation,
                  }}
                >
                  {dropdownListElements}
                </CardActions>
              )}
            </div>
          </div>
        </Element>
      )}
    </li>
  );
}
