import React from 'react';
import cn from 'classnames';
import PropTypes from 'prop-types';
import styles from './ListItem.css';
import List from '../List/List';

export class ListItem extends React.Component {
  static propTypes = {
    extraClassNames: PropTypes.string,
    children: PropTypes.node.isRequired,
    testId: PropTypes.string,
  };

  static defaultProps = {
    extraClassNames: undefined,
    testId: 'cf-ui-list-item',
  };

  render() {
    const { extraClassNames, children, testId, ...otherProps } = this.props;

    const classNames = cn(styles.ListItem, extraClassNames, {
      [styles['ListItem--nested-list']]: this.props.children.type === List,
    });

    return (
      <li className={classNames} data-test-id={testId} {...otherProps}>
        {children}
      </li>
    );
  }
}

export default ListItem;
