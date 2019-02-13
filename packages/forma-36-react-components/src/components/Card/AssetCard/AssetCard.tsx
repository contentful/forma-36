import React, { Component } from 'react';
import cn from 'classnames';
import Card from '../Card';
import Dropdown from '../../Dropdown/Dropdown';
import Asset from '../../Asset';
import { AssetType } from '../../Asset/Asset';
import Icon from '../../Icon/Icon';
import TabFocusTrap from '../../TabFocusTrap';
import Tag from '../../Tag';
import AssetCardSkeleton from './AssetCardSkeleton';
const styles = require('./AssetCard.css');

interface AssetCardPropTypes {
  src: string;
  title: string;
  extraClassNames?: string;
  isLoading?: boolean;
  dropdownListElements?: React.ReactNode;
  status?: 'archived' | 'changed' | 'draft' | 'published';
  testId?: string;
  type?: AssetType;
}

interface AssetCardState {
  isOpen: boolean;
}

export class AssetCard extends Component<AssetCardPropTypes, AssetCardState> {
  static defaultProps = {
    extraClassNames: undefined,
    dropdownListElements: undefined,
    isLoading: false,
    status: undefined,
    type: undefined,
    testId: 'cf-ui-asset-card',
  };

  state = {
    isOpen: false,
  };

  renderDropdownListElements = dropdownListElements => (
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
      {dropdownListElements}
    </Dropdown>
  );

  renderStatus = status => {
    let label;
    let type;

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
