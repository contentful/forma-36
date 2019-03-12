import React, { Component, SyntheticEvent } from 'react';
import cn from 'classnames';
import IconButton, { IconButtonProps } from '../../IconButton/IconButton';
import Tooltip from '../../Tooltip/Tooltip';
import { IconType } from '../../Icon/Icon';
import styles from './EditorToolbarButton.css';

export interface EditorToolbarButtonProps {
  extraClassNames?: string;
  label: string;
  testId?: string;
  icon: IconType;
  tooltip?: string;
  iconButtonProps?: Partial<IconButtonProps>;
  isActive?: boolean;
  disabled?: boolean;
  onClick?: (e: SyntheticEvent) => void;
  withDropdown?: boolean;
}

export class EditorToolbarButton extends Component<EditorToolbarButtonProps> {
  static defaultProps = {
    testId: 'cf-ui-editor-toolbar-button',
    isActive: false,
    disabled: false,
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

    const classNames = cn(styles['EditorToolbarButton'], extraClassNames, {
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
