import React from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';
import styles from './EditorToolbarDivider.css';

export class EditorToolbarDivider extends React.Component {
  static propTypes = {
    testId: PropTypes.string,
    extraClassNames: PropTypes.string,
  };

  static defaultProps = {
    testId: 'cf-editor-toolbar-divider',
    extraClassNames: undefined,
  };

  render() {
    const { extraClassNames, testId, ...otherProps } = this.props;

    const classNames = cn(styles.EditorToolbarDivider, extraClassNames);

    return (
      <span data-test-id={testId} className={classNames} {...otherProps} />
    );
  }
}

export default EditorToolbarDivider;
