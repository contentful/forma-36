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
  icon?: React.ReactElement;
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

function _TextLink<E extends React.ElementType = typeof TEXT_LINK_DEFAULT_TAG>(
  props: TextLinkProps<E>,
  ref: React.Ref<any>,
) {
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

  const iconContent = icon ? (
    <Flex as="span" alignSelf="center">
      {React.cloneElement(icon, {
        className: cx(icon.props.className, styles.textLinkIcon()),
        size: 'small',
      })}
    </Flex>
  ) : null;

  const commonContent = (
    <span className={styles.textLinkContent()}>
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
    </span>
  );

  if (as === 'button') {
    return (
      <button {...commonProps} disabled={isDisabled} type="button">
        {commonContent}
      </button>
    );
  }

  return (
    <a
      {...commonProps}
      onClick={
        isDisabled
          ? (e) => {
              e.preventDefault();
            }
          : commonProps.onClick
      }
      href={href}
      {...(isDisabled ? { tabIndex: -1 } : {})}
    >
      {commonContent}
    </a>
  );
}

_TextLink.displayName = 'TextLink';

export const TextLink: PolymorphicComponent<
  ExpandProps<TextLinkInternalProps>,
  typeof TEXT_LINK_DEFAULT_TAG,
  'disabled'
> = React.forwardRef(_TextLink);
