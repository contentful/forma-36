import React from 'react';
import cn from 'classnames';
import Icon, { IconProps } from '../Icon';
import TabFocusTrap from '../TabFocusTrap';

import styles from './IconButton.css';

export interface IconButtonProps extends React.HTMLAttributes<HTMLElement> {
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
}

const defaultProps: Partial<IconButtonProps> = {
  disabled: false,
  testId: 'cf-ui-icon-button',
  buttonType: 'primary',
  withDropdown: false,
};

export const IconButton = (props: IconButtonProps) => {
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
  } = props;

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
};

IconButton.defaultProps = defaultProps;

export default IconButton;
