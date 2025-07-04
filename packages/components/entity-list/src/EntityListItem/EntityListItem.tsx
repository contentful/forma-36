import React, { type MouseEventHandler } from 'react';
import { cx } from 'emotion';
import tokens from '@contentful/f36-tokens';
import { EntityStatusBadge } from '@contentful/f36-badge';
import {
  Flex,
  Box,
  type CommonProps,
  type EntityStatus,
  type PickUnion,
} from '@contentful/f36-core';
import {
  ImageSquareIcon,
  EntryIcon,
  ReleaseIcon,
  DotsThreeIcon,
  FileIcon,
  PaintBrushIcon,
} from '@contentful/f36-icons';
import { Icon } from '@contentful/f36-icon';
import { Text } from '@contentful/f36-typography';
import { DragHandle, type DragHandleProps } from '@contentful/f36-drag-handle';
import { Button } from '@contentful/f36-button';
import { Menu } from '@contentful/f36-menu';
import { Skeleton } from '@contentful/f36-skeleton';

import { getEntityListItemStyles } from './EntityListItem.styles';

type EntityListItemStatus = PickUnion<
  EntityStatus,
  'archived' | 'changed' | 'draft' | 'published'
>;

const ICON_MAP = {
  asset: ImageSquareIcon,
  entry: EntryIcon,
  release: ReleaseIcon,
  page: FileIcon,
  experience: PaintBrushIcon,
};

export interface EntityListItemProps extends CommonProps {
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
   * Menu elements rendered as actions in Menu
   */
  actions?: React.ReactNodeArray;
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
  cardDragHandleProps?: Partial<DragHandleProps>;
  /**
   * An entity can either be an Entry, an Asset or a Release. This prop will apply styling based on if the entity is an asset, a release or an entry
   *
   * Note: 'entry' and 'asset' are @deprecated but supported in v1.x for backwards compatibility
   */
  entityType?:
    | 'Entry'
    | 'Asset'
    | 'entry'
    | 'asset'
    | 'Release'
    | 'Page'
    | 'Experience'
    | 'experience';
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
   * A boolean used to disable the CardActions
   */
  isActionsDisabled?: boolean;
}

export const EntityListItem = ({
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
  actions,
  withDragHandle,
  isDragActive,
  isLoading,
  onClick,
  href,
  cardDragHandleProps,
  cardDragHandleComponent,
  isActionsDisabled = false,
  ...otherProps
}: EntityListItemProps): React.ReactElement => {
  const styles = getEntityListItemStyles();

  const renderCardDragHandle = () => {
    if (cardDragHandleComponent) {
      return cardDragHandleComponent;
    } else if (withDragHandle) {
      return (
        <DragHandle
          className={styles.dragHandle}
          isActive={isDragActive}
          label="Reorder entry"
          {...cardDragHandleProps}
        />
      );
    }
  };

  let Element: React.ElementType = 'article';
  let isClickable = false;
  if (href || onClick) {
    Element = href ? 'a' : 'button';
    isClickable = true;
  }

  // archived assets will not be available on the CDN, resulting in a broken image src
  const isArchived = status === 'archived';
  const asIcon = isArchived || !thumbnailUrl;

  return (
    <li
      {...otherProps}
      className={cx(styles.root({ isDragActive }), className)}
      data-test-id={testId}
    >
      {renderCardDragHandle()}
      {isLoading ? (
        <article className={styles.card(false)}>
          <Skeleton.Container
            svgHeight={46}
            clipId="f36-entity-list-item-skeleton"
          >
            <Skeleton.Image height={46} width={46} />
            <Skeleton.BodyText
              numberOfLines={2}
              lineHeight={18}
              offsetLeft={54}
            />
          </Skeleton.Container>
        </article>
      ) : (
        <>
          <Element
            className={styles.card(isClickable)}
            onClick={onClick}
            href={href}
            {...(href ? { target: '_blank' } : {})}
            {...(Element === 'button' ? { type: 'button' } : {})}
          >
            {withThumbnail && (
              <figure className={styles.media}>
                {asIcon ? (
                  <Icon
                    as={ICON_MAP[entityType.toLowerCase()]}
                    color={tokens.gray600}
                    data-test-id={`thumbnail-icon-${entityType.toLowerCase()}`}
                  />
                ) : (
                  <img
                    src={thumbnailUrl}
                    className={styles.thumbnail}
                    alt={thumbnailAltText}
                  />
                )}
              </figure>
            )}

            <div className={styles.content}>
              <Flex>
                <Text
                  as="h3"
                  lineHeight="lineHeightM"
                  fontColor="gray900"
                  fontWeight="fontWeightDemiBold"
                  isTruncated
                >
                  {title}
                </Text>

                {contentType && (
                  <Text
                    as="span"
                    lineHeight="lineHeightM"
                    fontColor="gray600"
                    className={styles.contentType}
                    isTruncated
                  >
                    ({contentType})
                  </Text>
                )}
              </Flex>
              <Flex marginTop="spacing2Xs">
                {entityType && (
                  <Text
                    lineHeight="lineHeightM"
                    fontColor="gray600"
                    className={styles.entityType}
                  >
                    {entityType}
                  </Text>
                )}
                {description && (
                  <Text
                    as="p"
                    lineHeight="lineHeightM"
                    fontColor="gray900"
                    isTruncated
                    className={styles.description}
                  >
                    {description}
                  </Text>
                )}
              </Flex>
            </div>

            <Flex
              className={styles.meta}
              alignItems="flex-start"
              paddingLeft="spacingXs"
            >
              {status && (
                <Box marginRight={actions ? 'spacingXs' : 'none'}>
                  <EntityStatusBadge entityStatus={status} />
                </Box>
              )}
            </Flex>
          </Element>
          {actions && (
            <Menu>
              <Menu.Trigger>
                <Button
                  isDisabled={isActionsDisabled}
                  startIcon={<DotsThreeIcon />}
                  variant="transparent"
                  aria-label="Actions"
                  size="small"
                  className={styles.menuTrigger}
                />
              </Menu.Trigger>
              <Menu.List>{actions}</Menu.List>
            </Menu>
          )}
        </>
      )}
    </li>
  );
};

EntityListItem.displayName = 'EntityListItem';
