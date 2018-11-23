import React from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';
import styles from './AssetCard.css';
import CardLoading from '../CardLoading';
import Dropdown from '../../Dropdown/Dropdown';
import Asset from '../../Asset';
import Icon from '../../Icon/Icon';
import TabFocusTrap from '../../TabFocusTrap';
import Tag from '../../Tag';

class AssetCard extends React.Component {
  static propTypes = {
    extraClassNames: PropTypes.string,
    src: PropTypes.string,
    isLoading: PropTypes.bool,
    type: PropTypes.string,
    title: PropTypes.string,
    dropdownListElements: PropTypes.node,
    status: PropTypes.oneOf(['archived', 'changed', 'draft', 'published']),
    testId: PropTypes.string,
  };

  static defaultProps = {
    extraClassNames: undefined,
    dropdownListElements: undefined,
    isLoading: false,
    src: undefined,
    title: undefined,
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
          className={styles['AssetCard__header__dropdown-button']}
          onClick={() => this.setState({ isOpen: !this.state.isOpen })}
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

    const classNames = cn(styles.AssetCard, extraClassNames);

    return (
      <CardLoading
        isLoading={isLoading}
        extraClassNames={classNames}
        title={title}
        testId={testId}
        {...otherProps}
      >
        <div>
          <div className={styles.AssetCard__header}>
            {status && this.renderStatus(status)}
            {dropdownListElements &&
              this.renderDropdownListElements(dropdownListElements)}
          </div>
          <div className={styles.AssetCard__content}>
            <Asset
              extraClassNames={styles.AssetCard__asset}
              src={src}
              title={title}
              type={type}
            />
          </div>
        </div>
      </CardLoading>
    );
  }
}

export default AssetCard;
