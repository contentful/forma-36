import React from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';
import styles from './FieldGroup.css';

class FieldGroup extends React.Component {
  static propTypes = {
    extraClassNames: PropTypes.string,
    children: PropTypes.node.isRequired,
    row: PropTypes.bool,
  };

  static defaultProps = {
    extraClassNames: undefined,
    row: false,
  };

  render() {
    const { extraClassNames, children, row, ...otherProps } = this.props;

    const classNames = cn(styles.FieldGroup, styles.extraClassNames, {
      [styles['FieldGroup--row']]: row,
    });

    return (
      <div className={classNames} {...otherProps}>
        {React.Children.map(children, child => (
          <div className={styles.FieldGroup__item}>{child}</div>
        ))}
      </div>
    );
  }
}

export default FieldGroup;
