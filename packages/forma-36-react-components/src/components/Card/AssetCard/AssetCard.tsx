import React, { Component, MouseEvent as ReactMouseEvent } from 'react';
import cn from 'classnames';
import Card from '../Card';
import Dropdown from '../../Dropdown/Dropdown';
import DropdownList from '../../Dropdown/DropdownList';
import DropdownListItem from '../../Dropdown/DropdownListItem';
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
  className?: string;
  isLoading?: boolean;
  dropdownListElements?: React.ReactElement;
  status?: AssetState;
  testId?: string;
  type?: AssetType;
} & typeof defaultProps;

export interface AssetCardState {
  isDropdownOpen: boolean;
}

const defaultProps = {
  isLoading: false,
  testId: 'cf-ui-asset-card',
};

export class AssetCard extends Component<AssetCardProps, AssetCardState> {
  static defaultProps = defaultProps;

  state = {
    isDropdownOpen: false,
  };

  renderDropdownListElements = (dropdownListElements: React.ReactElement) => {
    return (
      <Dropdown
        onClose={() => {
          this.setState({
            isDropdownOpen: false,
          });
        }}
        position="bottom-right"
        isOpen={this.state.isDropdownOpen}
        toggleElement={
          <button
            type="button"
            className={styles['AssetCard__header__dropdown-button']}
            onClick={() =>
              this.setState(state => ({
                isDropdownOpen: !state.isDropdownOpen,
              }))
            }
          >
            <TabFocusTrap>
              <Icon icon="MoreHorizontalTrimmed" color="secondary" />
            </TabFocusTrap>
          </button>
        }
      >
        {React.Children.map(dropdownListElements, listItems => {
          return React.Children.map(listItems, item => {
            // React.Children behaves differently if the object is a Fragment.
            const resolvedChildren =
              item.type === React.Fragment ? item.props.children : item;

            const enhancedChildren = React.Children.map(
              resolvedChildren,
              child =>
                React.cloneElement(child, {
                  onClick: (e: ReactMouseEvent) => {
                    if (child.props.onClick) {
                      child.props.onClick(e);
                    }
                    this.setState({ isDropdownOpen: false });
                  },
                }),
            );

            return enhancedChildren;
          });
        })}
      </Dropdown>
    );
  };

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
              {dropdownListElements &&
                this.renderDropdownListElements(dropdownListElements)}
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
