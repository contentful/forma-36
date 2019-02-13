import React, { SyntheticEvent, Component } from 'react';
import cn from 'classnames';
import Icon from '../Icon';
import { IconProps } from '../Icon/Icon';
import TabFocusTrap from '../TabFocusTrap';

const styles = require('./IconButton.css');

export interface IconButtonProps {
  label: string;
  href?: string;
  iconProps?: IconProps;
  testId?: string;
  disabled?: boolean;
  onClick?: (e: SyntheticEvent) => void;
  buttonType?:
    | 'primary'
    | 'positive'
    | 'negative'
    | 'secondary'
    | 'muted'
    | 'white';
  withDropdown?: boolean;
  extraClassNames?: string;
}

export class IconButton extends Component<IconButtonProps> {
  static defaultProps = {
    href: undefined,
    disabled: false,
    testId: 'cf-ui-icon-button',
    onClick: undefined,
    buttonType: 'primary',
    withDropdown: false,
    extraClassNames: undefined,
  };

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
      extraClassNames,
      ...otherProps
    } = this.props;

    const classNames = cn(styles.IconButton, extraClassNames, {
      [styles['IconButton--disabled']]: disabled,
      [styles[`IconButton--${buttonType}`]]: buttonType,
    });

    const elementProps = {
      className: classNames,
      onClick: !disabled ? onClick : null,
      'data-test-id': testId,
      ...otherProps,
    };

    const content = (
      <TabFocusTrap extraClassNames={styles.IconButton__inner}>
        <Icon
          {...{
            ...iconProps,
            extraClassNames: styles.IconButton__icon,
          }}
        />
        <span className={styles.IconButton__label}>{label}</span>
        {withDropdown && (
          <Icon
            icon="ChevronDown"
            color="secondary"
            extraClassNames={styles.IconButton__dropdown}
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
