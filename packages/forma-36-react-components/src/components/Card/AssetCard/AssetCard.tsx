import React, { Component } from 'react';
import cn from 'classnames';
import Card from '../Card';
import CardActions from './../CardActions';
import Asset from '../../Asset';
import { AssetType } from '../../Asset/Asset';
import Tag, { TagType } from '../../Tag/Tag';
import AssetCardSkeleton from './AssetCardSkeleton';
import CardDragHandle, {
  CardDragHandlePropTypes,
} from '../CardDragHandle/CardDragHandle';
const styles = require('./AssetCard.css');

export type AssetState = 'archived' | 'changed' | 'draft' | 'published';

export type AssetCardProps = {
  /**
   * The source of the asset (will also render a thumbnail if the AssetCard's type is set to image)
   */
  src: string;
  /**
   * The title of the asset
   */
  title: string;
  /**
   * Class names to be appended to the className prop of the component
   */
  className?: string;
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
  status?: AssetState;
  /**
   * An ID used for testing purposes applied as a data attribute (data-test-id)
   */
  testId?: string;
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
  cardDragHandleProps?: Partial<CardDragHandlePropTypes>;
  /**
   * Applies styling for when the component is actively being dragged by the user
   */
  isDragActive?: boolean;
  /**
   * Renders a small variant of the card which accommodates a 150x150px image
   */
  size?: 'small' | 'default';
} & typeof defaultProps;

const defaultProps = {
  isLoading: false,
  testId: 'cf-ui-asset-card',
  size: 'default',
};

export class AssetCard extends Component<AssetCardProps> {
  static defaultProps = defaultProps;

  renderStatus = (status: AssetState) => {
    let label;
    let type: TagType | null = null;

    switch (status) {
      case 'archived':
        label = 'archived';
        type = 'negative';
        break;

      case 'changed':
        label = 'changed';
        type = 'primary';
        break;

      case 'published':
        label = 'published';
        type = 'positive';
        break;

      default:
        label = 'draft';
        type = 'warning';
    }

    return (
      <Tag tagType={type} style={{ marginLeft: 'auto' }}>
        {label}
      </Tag>
    );
  };

  renderCardDragHandle() {
    const {
      cardDragHandleComponent,
      isDragActive,
      cardDragHandleProps,
      withDragHandle,
    } = this.props;

    if (cardDragHandleComponent) {
      return cardDragHandleComponent;
    } else if (withDragHandle) {
      return (
        <CardDragHandle isDragActive={isDragActive} {...cardDragHandleProps}>
          Reorder entry
        </CardDragHandle>
      );
    }
  }

  render() {
    const {
      className,
      src,
      type,
      title,
      status,
      isLoading,
      dropdownListElements,
      isDragActive,
      testId,
      size,
      cardDragHandleProps,
      cardDragHandleComponent,
      withDragHandle,
      ...otherProps
    } = this.props;

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
        title={title}
        testId={testId}
        {...otherProps}
      >
        {isLoading ? (
          <AssetCardSkeleton size={size} />
        ) : (
          <React.Fragment>
            {this.renderCardDragHandle()}
            <div className={styles['AssetCard__wrapper']}>
              <div className={styles['AssetCard__header']}>
                {status && this.renderStatus(status)}
                {dropdownListElements && (
                  <CardActions
                    className={styles['AssetCard__actions']}
                    iconButtonProps={{
                      onClick: e => e.stopPropagation,
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
                  title={title}
                  type={type}
                  status={status}
                />
              </div>
            </div>
          </React.Fragment>
        )}
      </Card>
    );
  }
}

export default AssetCard;
