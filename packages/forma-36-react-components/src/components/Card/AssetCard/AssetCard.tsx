import React, { useCallback } from 'react';
import cn from 'classnames';
import { EntityStatusBadge } from '@contentful/f36-badge';
import type { IconComponent } from '@contentful/f36-icon';
import { Asset } from '@contentful/f36-asset';
import type { AssetType, AssetProps } from '@contentful/f36-asset';

import { Card, BaseCardProps } from '../Card';
import { CardActions } from '../CardActions/CardActions';
import { AssetCardSkeleton } from './AssetCardSkeleton';
import {
  CardDragHandle,
  CardDragHandleProps,
} from '../CardDragHandle/CardDragHandle';
import styles from './AssetCard.css';

export interface AssetCardProps extends BaseCardProps {
  /**
   * The source of the asset (will also render a thumbnail if the AssetCard's type is set to image)
   */
  src: string;
  /**
   * The title of the asset
   */
  title: string;
  /**
   * Loading state for the AssetCard - when true will display loading feedback to the user
   */
  isLoading?: boolean;
  /**
   * The DropdownList elements used to render an actions dropdown for the AssetCard
   */
  dropdownListElements?: React.ReactElement;
  /**
   * The publish status of the asset
   */
  status?: AssetProps['status'];
  /**
   * An icon for the status of the entry
   */
  statusIcon?: IconComponent;
  /**
   * The type of asset being represented
   */
  type?: AssetType;
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
   * Renders a small variant of the card which accommodates a 150x150px image
   */
  size?: 'small' | 'default';
}

export function AssetCard({
  className,
  src,
  type,
  title,
  status,
  statusIcon,
  isLoading = false,
  dropdownListElements,
  isDragActive,
  size = 'default',
  testId = 'cf-ui-asset-card',
  cardDragHandleProps,
  cardDragHandleComponent,
  withDragHandle,
  ...otherProps
}: AssetCardProps): React.ReactElement {
  const renderStatus = useCallback(
    (status: AssetCardProps['status'], Icon: AssetCardProps['statusIcon']) => {
      return (
        <>
          {Icon ? (
            <Icon className={styles['AssetCard__icon']} variant="muted" />
          ) : null}
          <EntityStatusBadge entityStatus={status} />
        </>
      );
    },
    [],
  );

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
    styles.AssetCard,
    {
      [styles['AssetCard--drag-active']]: isDragActive,
      [styles[`AssetCard--size-${size}`]]: size,
    },
    className,
  );

  return (
    <Card
      className={classNames}
      padding="none"
      testId={testId}
      title={title}
      {...otherProps}
    >
      {isLoading ? (
        <AssetCardSkeleton size={size} />
      ) : (
        <React.Fragment>
          {renderCardDragHandle()}
          <div className={styles['AssetCard__wrapper']}>
            <div className={styles['AssetCard__header']}>
              {status && renderStatus(status, statusIcon)}
              {dropdownListElements && (
                <CardActions
                  className={styles['AssetCard__actions']}
                  iconButtonProps={{
                    onClick: (e) => e.stopPropagation,
                  }}
                >
                  {dropdownListElements}
                </CardActions>
              )}
            </div>
            <div className={styles['AssetCard__content']}>
              <Asset
                className={styles['AssetCard__asset']}
                src={src}
                status={status}
                title={title}
                type={type}
              />
            </div>
          </div>
        </React.Fragment>
      )}
    </Card>
  );
}
