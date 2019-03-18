import React, { Component, MouseEvent as ReactMouseEvent } from 'react';
import cn from 'classnames';
import Card from '../Card';
import Dropdown from '../../Dropdown/Dropdown';
import Asset from '../../Asset';
import { AssetType } from '../../Asset/Asset';
import Icon from '../../Icon/Icon';
import TabFocusTrap from '../../TabFocusTrap';
import Tag, { TagType } from '../../Tag/Tag';
import { DropdownListItemProps } from '../../Dropdown/DropdownListItem/DropdownListItem';
import AssetCardSkeleton from './AssetCardSkeleton';
const styles = require('./AssetCard.css');

export type AssetState = 'archived' | 'changed' | 'draft' | 'published';

export type AssetCardProps = {
  src: string;
  title: string;
  extraClassNames?: string;
  isLoading?: boolean;
  dropdownListElements?: React.ReactElement;
  status?: AssetState;
  testId?: string;
  type?: AssetType;
} & typeof defaultProps;

export interface AssetCardState {
  isOpen: boolean;
}

const defaultProps = {
  isLoading: false,
  testId: 'cf-ui-asset-card',
};

export class AssetCard extends Component<AssetCardProps, AssetCardState> {
  static defaultProps = defaultProps;

  state = {
    isOpen: false,
  };

  renderDropdownListElements = (dropdownListElements: React.ReactElement) => (
    <Dropdown
      isOpen={this.state.isOpen}
      onClose={() => this.setState({ isOpen: false })}
      position="bottom-right"
      toggleElement={
        <button
          type="button"
          className={styles['AssetCard__header__dropdown-button']}
          onClick={() => this.setState(state => ({ isOpen: !state.isOpen }))}
        >
          <TabFocusTrap>
            <Icon icon="MoreHorizontalTrimmed" color="secondary" />
          </TabFocusTrap>
        </button>
      }
    >
      {dropdownListElements.props &&
        dropdownListElements.props.children &&
        React.Children.map(dropdownListElements.props.children, listItem => {
          return React.cloneElement(listItem, {
            children: listItem.props.children.map(
              (item: React.ReactElement<DropdownListItemProps>) => {
                if (!item || !item.props.onClick) {
                  return item;
                }
                return React.cloneElement(item, {
                  onClick: (e: ReactMouseEvent) => {
                    if (item.props.onClick) {
                      item.props.onClick(e);
                    }
                    this.setState({ isOpen: false });
                  },
                });
              },
            ),
          });
        })}
    </Dropdown>
  );

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
      extraClassNames,
      src,
      type,
      title,
      status,
      isLoading,
      dropdownListElements,
      testId,
      ...otherProps
    } = this.props;

    const classNames = cn(styles['AssetCard'], extraClassNames);
    return (
      <Card
        extraClassNames={classNames}
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
              {dropdownListElements &&
                this.renderDropdownListElements(dropdownListElements)}
            </div>
            <div className={styles['AssetCard__content']}>
              <Asset
                extraClassNames={styles['AssetCard__asset']}
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
