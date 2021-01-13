import React from 'react';
import cn from 'classnames';
import { IconProps } from '../Icon';
import Button from '../Button';

import styles from './IconButton.css';

export interface IconButtonProps extends React.HTMLAttributes<HTMLElement> {
  /**
   * It controls the size button
   * 'trimmed' to be removed in v4, don't use
   */
  size?: 'small' | 'large' | 'trimmed';
  /**
   * It used to controls which icon to render and it accepts all props that you could pass in the Icon component.
   *
   * But the color prop won't work, since its value gets overwritten by the buttonType prop of the IconButton
   */
  iconProps: IconProps;
  /**
   * It controls the color of the button
   */
  buttonType?:
    | 'primary'
    | 'positive'
    | 'negative'
    | 'secondary'
    | 'muted'
    | 'white';
  /**
   * It renders a label with the icon, making it look like the naked button
   */
  label?: string;
  /**
   * It should be used when the button works as a link
   */
  href?: string;
  /**
   * If true, it will render the Chevron icon to indicate that the button opens a dropdown
   */
  withDropdown?: boolean;
  /**
   * It puts the button in disabled state
   */
  disabled?: boolean;
  /**
   * Class names to be appended to the className prop of the Accordion wrapper
   */
  className?: string;
  /**
   * An ID used for testing purposes applied as a data attribute (data-test-id)
   */
  testId?: string;
}

export const IconButton = ({
  size = 'trimmed',
  buttonType = 'primary',
  className,
  disabled = false,
  href,
  iconProps,
  label,
  onClick,
  testId = 'cf-ui-icon-button',
  withDropdown = false,
  ...otherProps
}: IconButtonProps) => {
  const classNames = cn(
    styles.IconButton,
    className,
    [styles[`IconButton--${buttonType}`]],
    {
      [styles['IconButton--disabled']]: disabled,
      [styles[`IconButton--deprecated`]]: size === 'trimmed',
    },
  );

  const elementProps = {
    className: classNames,
    onClick: !disabled ? onClick : undefined,
    'data-testid': testId,
    ...otherProps,
  };

  return (
    <Button
      {...elementProps}
      className={classNames}
      innerWrapperClassName={styles[`IconButton--${size}`]}
      indicateDropdown={withDropdown}
      aria-label={label}
      icon={iconProps.icon}
      iconProps={{
        icon: iconProps.icon, // duplicated to make typescript happy
        className: cn(styles.IconButton__icon, iconProps.className),
        ...iconProps,
      }}
      size={size}
      href={href}
      buttonType="muted"
      disabled={disabled}
    />
  );
};

export default IconButton;
