import React, { Component, MouseEventHandler } from 'react';
import cn from 'classnames';
import IconButton, { IconButtonProps } from '../../IconButton/IconButton';
import Tooltip from '../../Tooltip/Tooltip';
import { IconType } from '../../Icon/Icon';
import styles from './EditorToolbarButton.css';

export type EditorToolbarButtonProps = {
  label: string;
  icon: IconType;
  tooltip?: string;
  iconButtonProps?: Partial<IconButtonProps>;
  isActive?: boolean;
  isDisabled?: boolean;
  onClick?: MouseEventHandler;
  hasDropdown?: boolean;
  className?: string;
  testId?: string;
} & typeof defaultProps;

const defaultProps = {
  testId: 'cf-ui-editor-toolbar-button',
  isActive: false,
  isDisabled: false,
  hasDropdown: false,
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
      isDisabled,
      onClick,
      hasDropdown,
      ...otherProps
    } = this.props;

    const classNames = cn(styles['EditorToolbarButton'], className, {
      [styles['EditorToolbarButton--is-active']]: isActive,
    });

    return (
      <React.Fragment>
        <Tooltip content={!isDisabled ? tooltip : undefined}>
          <IconButton
            {...{ iconProps: { icon } }}
            testId={testId}
            buttonType="secondary"
            label={label}
            className={classNames}
            onClick={!isDisabled ? onClick : () => {}}
            isDisabled={isDisabled}
            hasDropdown={hasDropdown}
            {...iconButtonProps}
            {...otherProps}
          />
        </Tooltip>
      </React.Fragment>
    );
  }
}

export default EditorToolbarButton;
