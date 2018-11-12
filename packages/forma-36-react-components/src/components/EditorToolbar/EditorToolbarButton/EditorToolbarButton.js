import React from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';
import styles from './EditorToolbarButton.css';
import IconButton from './../../IconButton/IconButton';
import Tooltip from './../../Tooltip/Tooltip';
import { iconName } from './../../Icon/constants';

class EditorToolbarButton extends React.Component {
  static propTypes = {
    extraClassNames: PropTypes.string,
    label: PropTypes.string.isRequired,
    testId: PropTypes.string,
    icon: PropTypes.oneOf(Object.keys(iconName)).isRequired,
    tooltip: PropTypes.string,
    iconButtonProps: PropTypes.object,
    isActive: PropTypes.bool,
    disabled: PropTypes.bool,
    onClick: PropTypes.func,
    withDropdown: PropTypes.bool,
  };

  static defaultProps = {
    extraClassNames: undefined,
    tooltip: undefined,
    testId: 'cf-ui-editor-toolbar-button',
    iconButtonProps: undefined,
    isActive: false,
    disabled: false,
    onClick: undefined,
    withDropdown: false,
  };

  render() {
    const {
      extraClassNames,
      label,
      testId,
      icon,
      tooltip,
      iconButtonProps,
      isActive,
      disabled,
      onClick,
      withDropdown,
      ...otherProps
    } = this.props;

    const classNames = cn(styles.EditorToolbarButton, extraClassNames, {
      [styles['EditorToolbarButton--is-active']]: isActive,
    });

    return (
      <React.Fragment>
        <Tooltip content={!disabled ? tooltip : undefined}>
          <IconButton
            {...{ iconProps: { icon } }}
            testId={testId}
            buttonType="secondary"
            label={label}
            extraClassNames={classNames}
            onClick={!disabled ? onClick : null}
            disabled={disabled}
            withDropdown={withDropdown}
            {...iconButtonProps}
            {...otherProps}
          />
        </Tooltip>
      </React.Fragment>
    );
  }
}

export default EditorToolbarButton;
