import React from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';
import styles from './DropdownList.css';

class DropdownList extends React.Component {
  static propTypes = {
    extraClassNames: PropTypes.string,
    children: PropTypes.node.isRequired,
    testId: PropTypes.string,
    border: PropTypes.oneOf(['top', 'bottom']),
    maxHeight: PropTypes.number,
  };

  static defaultProps = {
    extraClassNames: undefined,
    testId: 'cf-ui-dropdown-list',
    border: undefined,
    maxHeight: undefined,
  };

  render() {
    const {
      extraClassNames,
      border,
      maxHeight,
      testId,
      children,
      ...otherProps
    } = this.props;

    const classNames = cn(styles.DropdownList, extraClassNames, {
      [styles[`DropdownList--border-${border}`]]: border,
    });

    return (
      <ul
        data-test-id={testId}
        style={{
          maxHeight: maxHeight || 'auto',
          overflowY: maxHeight ? 'auto' : 'visible',
        }}
        className={classNames}
        {...otherProps}
      >
        {children}
      </ul>
    );
  }
}

export default DropdownList;
