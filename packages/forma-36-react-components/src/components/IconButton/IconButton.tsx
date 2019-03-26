import React, { Component, MouseEventHandler } from 'react';
import cn from 'classnames';
import Icon from '../Icon';
import { IconProps } from '../Icon/Icon';
import TabFocusTrap from '../TabFocusTrap';

const styles = require('./IconButton.css');

export interface IconButtonProps {
  label: string;
  href?: string;
  iconProps: IconProps;
  isDisabled?: boolean;
  onClick?: MouseEventHandler;
  buttonType?:
    | 'primary'
    | 'positive'
    | 'negative'
    | 'secondary'
    | 'muted'
    | 'white';
  hasDropdown?: boolean;
  className?: string;
  testId?: string;
}

const defaultProps = {
  isDisabled: false,
  testId: 'cf-ui-icon-button',
  buttonType: 'primary',
  hasDropdown: false,
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
      isDisabled,
      onClick,
      buttonType,
      hasDropdown,
      className,
      ...otherProps
    } = this.props;

    const classNames = cn(styles.IconButton, className, {
      [styles['IconButton--is-disabled']]: isDisabled,
      [styles[`IconButton--${buttonType}`]]: buttonType,
    });

    const elementProps = {
      className: classNames,
      onClick: !isDisabled ? onClick : undefined,
      'data-test-id': testId,
      ...otherProps,
    };

    const content = (
      <TabFocusTrap className={styles.IconButton__inner}>
        <Icon icon={iconProps.icon} className={styles.IconButton__icon} />

        <span className={styles.IconButton__label}>{label}</span>
        {hasDropdown && (
          <Icon
            icon="ChevronDown"
            color="secondary"
            className={styles.IconButton__dropdown}
          />
        )}
      </TabFocusTrap>
    );

    if (href) {
      if (isDisabled) {
        return <a {...elementProps}>{content}</a>;
      }
      return (
        <a {...elementProps} href={href}>
          content
        </a>
      );
    }

    return (
      <button {...elementProps} type="button" disabled={isDisabled}>
        {content}
      </button>
    );
  }
}

export default IconButton;
