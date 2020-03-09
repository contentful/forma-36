import React, { Component, MouseEventHandler } from 'react';
import cn from 'classnames';
import IconButton, { IconButtonProps } from '../../IconButton';
import Tooltip from '../../Tooltip';
import { IconType } from '../../Icon';
import styles from './EditorToolbarButton.css';

export type EditorToolbarButtonProps = {
  label: string;
  icon: IconType;
  tooltip?: string;
  iconButtonProps?: Partial<IconButtonProps>;
  isActive?: boolean;
  disabled?: boolean;
  onClick?: MouseEventHandler;
  withDropdown?: boolean;
  className?: string;
  testId?: string;
} & typeof defaultProps;

const defaultProps = {
  testId: 'cf-ui-editor-toolbar-button',
  isActive: false,
  disabled: false,
  withDropdown: false,
};

export class EditorToolbarButton extends Component<EditorToolbarButtonProps> {
  static defaultProps = defaultProps;

  render() {
    const {
      className,
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

    const classNames = cn(styles['EditorToolbarButton'], className, {
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
            className={classNames}
            onClick={!disabled ? onClick : () => {}}
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
