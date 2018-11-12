import React from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';
import styles from './EditorToolbar.css';

class EditorToolbar extends React.Component {
  static propTypes = {
    extraClassNames: PropTypes.string,
    children: PropTypes.node.isRequired,
    testId: PropTypes.string,
  };

  static defaultProps = {
    extraClassNames: undefined,
    testId: 'cf-ui-editor-toolbar',
  };

  render() {
    const { extraClassNames, children, testId, ...otherProps } = this.props;

    const classNames = cn(styles.EditorToolbar, extraClassNames);

    return (
      <div className={classNames} {...otherProps} data-test-id={testId}>
        {children}
      </div>
    );
  }
}

export default EditorToolbar;
