import React, { useCallback } from 'react';
import cn from 'classnames';
import type { MouseEventHandler } from 'react';
import { TabFocusTrap } from '@contentful/f36-utils';
import type { IconComponent } from '@contentful/f36-icon';

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
  href?: JSX.IntrinsicElements['a']['href'];
  target?: JSX.IntrinsicElements['a']['target'];
  rel?: JSX.IntrinsicElements['a']['rel'];
  disabled?: boolean;
  testId?: string;
  onClick?: MouseEventHandler<HTMLAnchorElement | HTMLButtonElement>;
  className?: string;
  icon?: IconComponent;
  text?: string;
  iconPosition?: IconPositionType;
}

/**
 *
 * @deprecated This component is deprecated, please use TextLink from '@contentful/f36-text-link'
 */
export function TextLink({
  children,
  className,
  disabled = false,
  href,
  icon,
  iconPosition = 'left',
  linkType = 'primary',
  onClick,
  testId = 'cf-ui-text-link',
  text,
  ...otherProps
}: TextLinkProps): React.ReactElement {
  const renderIcon = useCallback(
    (Component: TextLinkProps['icon'], linkType: TextLinkType) => {
      if (!Component) return undefined;

      return (
        <div
          className={
            iconPosition === 'right'
              ? styles['TextLink__icon-wrapper--right']
              : styles['TextLink__icon-wrapper']
          }
        >
          <Component className={styles.TextLink__icon} variant={linkType} />
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
