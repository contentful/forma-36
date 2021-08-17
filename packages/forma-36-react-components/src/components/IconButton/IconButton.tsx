import React from 'react';
import cn from 'classnames';
import { TabFocusTrap } from '@contentful/f36-utils';
import { Icon } from '@contentful/f36-icon';
import type { IconProps } from '@contentful/f36-icon';
import { ChevronDownIcon } from '@contentful/f36-icons';

import styles from './IconButton.css';

export interface IconButtonProps
  extends React.HTMLAttributes<HTMLAnchorElement | HTMLButtonElement> {
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
  /**
   * Used to make the decision of either rendering as a <a> or as a <button> tag
   */
  href?: string;
  /**
   * Used with href to specify target attribute value
   */
  target?: React.AnchorHTMLAttributes<HTMLAnchorElement>['target'];
  /**
   * Used with href to define a relationship between a linked resource and the current document
   */
  rel?: string;
}

export const IconButton = ({
  buttonType = 'primary',
  className,
  disabled = false,
  href,
  iconProps,
  label,
  onClick,
  testId = 'cf-ui-icon-button',
  withDropdown = false,
  target,
  rel,
  ...otherProps
}: IconButtonProps) => {
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
      {label && <span className={styles.IconButton__label}>{label}</span>}
      {withDropdown && (
        <ChevronDownIcon
          className={styles.IconButton__dropdown}
          variant="secondary"
        />
      )}
    </TabFocusTrap>
  );

  if (href) {
    if (disabled) {
      return <a {...elementProps}>{content}</a>;
    }
    return (
      <a {...elementProps} href={href} target={target} rel={rel}>
        {content}
      </a>
    );
  }

  return (
    <button {...elementProps} type="button" disabled={disabled}>
      {content}
    </button>
  );
};
