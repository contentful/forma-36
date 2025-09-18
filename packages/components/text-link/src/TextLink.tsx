import React from 'react';
import { cx } from '@emotion/css';
import {
  Flex,
  type CommonProps,
  type PolymorphicProps,
  type PolymorphicComponent,
  type ExpandProps,
} from '@contentful/f36-core';

import { styles } from './TextLink.styles';
import { TextLinkVariant } from './types';
import type { IconProps } from '@contentful/f36-icon';

const TEXT_LINK_DEFAULT_TAG = 'a';

interface TextLinkInternalProps extends CommonProps {
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
  icon?: React.ReactElement<IconProps>;
  /**
   * Determines the icon position regarding the link text
   * @default start
   */
  alignIcon?: 'start' | 'end';
  /**
   * The element used for the root node.
   * @default a
   */
  as?: 'a' | 'button';
}

export type TextLinkProps<
  E extends React.ElementType = typeof TEXT_LINK_DEFAULT_TAG,
> = PolymorphicProps<TextLinkInternalProps, E, 'disabled'>;

type TextLinkElement = HTMLAnchorElement | HTMLButtonElement;

function TextLinkBase<
  E extends React.ElementType = typeof TEXT_LINK_DEFAULT_TAG,
>(props: TextLinkProps<E>, ref: React.Ref<TextLinkElement>) {
  const {
    children,
    className,
    testId = 'cf-ui-text-link',
    variant = 'primary',
    href,
    icon,
    alignIcon = 'start',
    isDisabled,
    as = TEXT_LINK_DEFAULT_TAG,
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

  const iconContent = (icon: React.ReactElement<IconProps>) => (
    <Flex as="span" alignSelf="center">
      {React.cloneElement(icon, {
        size: 'small',
        className: cx(icon.props.className, styles.textLinkIcon()),
      })}
    </Flex>
  );

  const commonContent = (
    <span className={styles.textLinkContent()}>
      {icon && alignIcon === 'start' && iconContent(icon)}
      {children && (
        <span
          className={styles.textLinkText({
            alignIcon: icon ? alignIcon : undefined,
          })}
        >
          {children}
        </span>
      )}
      {icon && alignIcon === 'end' && iconContent(icon)}
    </span>
  );

  if (as === 'button') {
    return (
      <button
        {...commonProps}
        disabled={isDisabled}
        type="button"
        ref={ref as React.Ref<HTMLButtonElement>}
      >
        {commonContent}
      </button>
    );
  }

  return (
    <a
      {...commonProps}
      ref={ref as React.Ref<HTMLAnchorElement>}
      href={href}
      {...(isDisabled ? { tabIndex: -1, 'aria-disabled': true } : {})}
    >
      {commonContent}
    </a>
  );
}

export const TextLink = React.forwardRef(TextLinkBase) as PolymorphicComponent<
  ExpandProps<TextLinkInternalProps>,
  typeof TEXT_LINK_DEFAULT_TAG,
  'disabled'
>;
