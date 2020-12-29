import React, { useCallback } from 'react';
import cn from 'classnames';
import type { MouseEventHandler } from 'react';

import Icon, { IconType } from '../Icon';
import TabFocusTrap from '../TabFocusTrap';
import styles from './TextLink.css';

export type TextLinkType =
  | 'primary'
  | 'positive'
  | 'negative'
  | 'secondary'
  | 'muted'
  | 'white';

export const textLinkColor = [
  'primary',
  'positive',
  'negative',
  'secondary',
  'muted',
  'white',
];

type IconPositionType = 'right' | 'left';

export interface TextLinkProps {
  children?: React.ReactNode;
  linkType?: TextLinkType;
  href?: React.AnchorHTMLAttributes<HTMLAnchorElement>['href'];
  target?: React.AnchorHTMLAttributes<HTMLAnchorElement>['target'];
  rel?: React.AnchorHTMLAttributes<HTMLInputElement>['rel'];
  disabled?: boolean;
  testId?: string;
  onClick?: MouseEventHandler<HTMLAnchorElement | HTMLButtonElement>;
  className?: string;
  icon?: IconType;
  text?: string;
  iconPosition?: IconPositionType;
}

export function TextLink({
  children,
  className,
  disabled,
  href,
  icon,
  iconPosition,
  linkType,
  onClick,
  testId,
  text,
  ...otherProps
}: TextLinkProps): React.ReactElement {
  const renderIcon = useCallback(
    (icon: IconType, linkType: TextLinkType) => {
      if (!icon) return undefined;

      return (
        <div
          className={
            iconPosition === 'right'
              ? styles['TextLink__icon-wrapper--right']
              : styles['TextLink__icon-wrapper']
          }
        >
          <Icon
            icon={icon}
            color={linkType}
            className={styles.TextLink__icon}
          />
        </div>
      );
    },
    [iconPosition],
  );

  const classNames = cn(styles.TextLink, className, {
    [styles[`TextLink--${linkType}`]]: linkType,
    [styles['TextLink--disabled']]: disabled,
  });

  const content = (
    <TabFocusTrap>
      {
        icon && iconPosition === 'left' && renderIcon(icon, linkType!) // eslint-disable-line @typescript-eslint/no-non-null-assertion
      }
      {text || children}
      {
        icon && iconPosition === 'right' && renderIcon(icon, linkType!) // eslint-disable-line @typescript-eslint/no-non-null-assertion
      }
    </TabFocusTrap>
  );

  if (href) {
    return (
      <a
        className={classNames}
        data-test-id={testId}
        onClick={
          disabled
            ? (e) => {
                e.preventDefault();
              }
            : onClick
        }
        href={href}
        {...otherProps}
      >
        {content}
      </a>
    );
  }

  return (
    <button
      type="button"
      className={classNames}
      data-test-id={testId}
      onClick={!disabled ? onClick : () => {}}
      disabled={disabled}
      {...otherProps}
    >
      {content}
    </button>
  );
}

TextLink.defaultProps = {
  linkType: 'primary',
  testId: 'cf-ui-text-link',
  disabled: false,
  iconPosition: 'left',
};

export default TextLink;
