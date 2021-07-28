import React, { HTMLProps } from 'react';
import { cx } from 'emotion';
import { Flex, CommonProps } from '@contentful/f36-core';
import { styles } from './TextLink.styles';
import { TextLinkVariant } from './types';
import { Icon, IconComponent } from '@contentful/f36-icon';

export interface TextLinkProps
  extends Omit<HTMLProps<HTMLButtonElement & HTMLAnchorElement>, 'type'>,
    CommonProps {
  children?: React.ReactNode;
  /**
   * Determines style variation of TextLink component
   * @default primary
   */
  variant?: TextLinkVariant;
  /**
   * Disabled interaction and applies disabled styles
   * @default false
   */
  isDisabled?: boolean;
  /**
   * Expects any of the icon components
   */
  icon?: IconComponent;
  /**
   * Determines the icon position regarding the link text
   * @default start
   */
  alignIcon?: 'start' | 'end';
}

function TextLink(
  props: TextLinkProps,
  ref: React.Ref<HTMLButtonElement & HTMLAnchorElement>,
) {
  const {
    children,
    className,
    testId,
    variant = 'primary',
    href,
    icon,
    alignIcon,
    isDisabled,
    ...otherProps
  } = props;

  const commonProps = {
    ref,
    className: cx(
      styles.textLink({
        variant,
        isDisabled,
      }),
      props.className,
    ),
    ['data-test-id']: testId,
    ...otherProps,
  };

  const iconContent = icon ? (
    <Flex as="span">
      <Icon className={styles.textLinkIcon} as={icon} />
    </Flex>
  ) : null;

  const commonContent = (
    <>
      {icon && alignIcon === 'start' && iconContent}
      {children && (
        <span
          className={styles.textLinkText({
            alignIcon: icon ? alignIcon : undefined,
          })}
        >
          {children}
        </span>
      )}
      {icon && alignIcon === 'end' && iconContent}
    </>
  );

  if (href) {
    return (
      <a {...commonProps} href={href}>
        {commonContent}
      </a>
    );
  }

  return (
    <button {...commonProps} disabled={isDisabled} type="button">
      {commonContent}
    </button>
  );
}

/**
 * TODO: Add description of component here.
 */
const _TextLink = React.forwardRef(TextLink);
export { _TextLink as TextLink };
