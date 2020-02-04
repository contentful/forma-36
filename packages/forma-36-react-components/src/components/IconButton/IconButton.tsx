import React, { Component } from 'react';
import cn from 'classnames';
import Icon from '../Icon';
import { IconProps } from '../Icon/Icon';
import TabFocusTrap from '../TabFocusTrap';

import styles from './IconButton.css';

export type IconButtonProps = {
  label: string;
  href?: string;
  iconProps: IconProps;
  disabled?: boolean;
  buttonType?:
    | 'primary'
    | 'positive'
    | 'negative'
    | 'secondary'
    | 'muted'
    | 'white';
  withDropdown?: boolean;
  className?: string;
  testId?: string;
} & React.HTMLAttributes<HTMLElement>;

const defaultProps = {
  disabled: false,
  testId: 'cf-ui-icon-button',
  buttonType: 'primary',
  withDropdown: false,
};

export class IconButton extends Component<
  IconButtonProps & typeof defaultProps
> {
  static defaultProps = defaultProps;

  render() {
    const {
      label,
      iconProps,
      href,
      testId,
      disabled,
      onClick,
      buttonType,
      withDropdown,
      className,
      ...otherProps
    } = this.props;

    const classNames = cn(styles.IconButton, className, {
      [styles['IconButton--disabled']]: disabled,
      [styles[`IconButton--${buttonType}`]]: buttonType,
    });

    const elementProps = {
      className: classNames,
      onClick: !disabled ? onClick : undefined,
      'data-test-id': testId,
      ...otherProps,
    };

    const content = (
      <TabFocusTrap className={styles.IconButton__inner}>
        <Icon
          {...iconProps}
          className={cn(styles.IconButton__icon, iconProps.className)}
        />
        <span className={styles.IconButton__label}>{label}</span>
        {withDropdown && (
          <Icon
            icon="ChevronDown"
            color="secondary"
            className={styles.IconButton__dropdown}
          />
        )}
      </TabFocusTrap>
    );

    if (href) {
      if (disabled) {
        return <a {...elementProps}>{content}</a>;
      }
      return (
        <a {...elementProps} href={href}>
          content
        </a>
      );
    }

    return (
      <button {...elementProps} type="button" disabled={disabled}>
        {content}
      </button>
    );
  }
}

export default IconButton;
