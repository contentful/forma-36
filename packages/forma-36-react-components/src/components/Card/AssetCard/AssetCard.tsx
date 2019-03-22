import React, { Component } from 'react';
import cn from 'classnames';
import Card from '../Card';
import CardActions from './../CardActions';
import Asset from '../../Asset';
import { AssetType } from '../../Asset/Asset';
import Tag, { TagType } from '../../Tag/Tag';
import AssetCardSkeleton from './AssetCardSkeleton';
const styles = require('./AssetCard.css');

export type AssetState = 'archived' | 'changed' | 'draft' | 'published';

export type AssetCardProps = {
  src: string;
  title: string;
  className?: string;
  isLoading?: boolean;
  dropdownListElements?: React.ReactElement;
  status?: AssetState;
  testId?: string;
  type?: AssetType;
} & typeof defaultProps;

const defaultProps = {
  isLoading: false,
  testId: 'cf-ui-asset-card',
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

  render() {
    const {
      className,
      src,
      type,
      title,
      status,
      isLoading,
      dropdownListElements,
      testId,
      ...otherProps
    } = this.props;

    const classNames = cn(styles['AssetCard'], className);
    return (
      <Card
        className={classNames}
        title={title}
        testId={testId}
        {...otherProps}
      >
        {isLoading ? (
          <AssetCardSkeleton />
        ) : (
          <div className={styles['AssetCard__inner-wrapper']}>
            <div className={styles['AssetCard__header']}>
              {status && this.renderStatus(status)}
              {dropdownListElements && (
                <CardActions className={styles['AssetCard__actions']}>
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
              />
            </div>
          </div>
        )}
      </Card>
    );
  }
}

export default AssetCard;
