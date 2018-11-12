import React from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';
import styles from './Tag.css';

class Tag extends React.Component {
  static propTypes = {
    extraClassNames: PropTypes.string,
    children: PropTypes.node.isRequired,
    tagType: PropTypes.oneOf([
      'primary',
      'positive',
      'negative',
      'warning',
      'secondary',
      'muted',
    ]),
    testId: PropTypes.string,
  };

  static defaultProps = {
    extraClassNames: undefined,
    tagType: 'primary',
    testId: 'cf-ui-tag',
  };

  render() {
    const {
      extraClassNames,
      children,
      tagType,
      testId,
      ...otherProps
    } = this.props;

    const classNames = cn(styles.Tag, extraClassNames, {
      [styles[`Tag--${tagType}`]]: tagType,
    });

    return (
      <div className={classNames} data-test-id={testId} {...otherProps}>
        {children}
      </div>
    );
  }
}

export default Tag;
