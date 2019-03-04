import React from 'react';
import cn from 'classnames';
import PropTypes from 'prop-types';
import styles from './List.css';

export class List extends React.Component {
  static propTypes = {
    extraClassNames: PropTypes.string,
    children: PropTypes.node.isRequired,
    testId: PropTypes.string,
  };

  static defaultProps = {
    extraClassNames: undefined,
    testId: 'cf-ui-list',
  };

  render() {
    const { extraClassNames, children, testId, ...otherProps } = this.props;

    const classNames = cn(styles.List, extraClassNames);

    return (
      <ul className={classNames} data-test-id={testId} {...otherProps}>
        {children}
      </ul>
    );
  }
}

export default List;
