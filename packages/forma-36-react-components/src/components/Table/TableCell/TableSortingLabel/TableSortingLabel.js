import React from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';

import { iconName } from '../../../Icon/constants';
import Icon from '../../../Icon/Icon';
import { sortingDirections } from '../TableCell/TableCell';
import TabFocusTrap from '../../../TabFocusTrap';
import styles from './TableSortingLabel.css';

export default class TableSortingLabel extends React.Component {
  static propTypes = {
    extraClassNames: PropTypes.string,
    children: PropTypes.node.isRequired,
    direction: PropTypes.oneOf(Object.keys(sortingDirections)).isRequired,
    active: PropTypes.bool.isRequired,
  };

  static defaultProps = {
    extraClassNames: '',
  };

  renderIcon() {
    const { direction } = this.props;
    const classNames = cn(
      styles.TableSortingLabel__icon,
      styles[`TableSortingLabel__icon--${direction}`],
    );

    return (
      <Icon
        extraClassNames={classNames}
        icon={iconName.ArrowUp}
        color="muted"
      />
    );
  }

  render() {
    const { extraClassNames, children, active, ...otherProps } = this.props;

    return (
      <button
        className={cn(styles.TableSortingLabel__button, extraClassNames)}
        {...otherProps}
      >
        <TabFocusTrap extraClassNames={styles.TableSortingLabel__button__text}>
          {children}
          {active && this.renderIcon()}
        </TabFocusTrap>
      </button>
    );
  }
}
