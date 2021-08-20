import React from 'react';
import { cx } from 'emotion';
import {
  Flex,
  CommonProps,
  PolymorphicComponentWithRef,
  PolymorphicComponentProps,
  PolymorphicComponent,
} from '@contentful/f36-core';
import { styles } from './TextLink.styles';
import { TextLinkVariant } from './types';

const DEFAULT_TAG = 'a';

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

type ElementPropsToOmit = 'type' | 'disabled';
export type TextLinkProps<
  E extends React.ElementType = typeof DEFAULT_TAG
> = PolymorphicComponentProps<E, TextLinkInternalProps, ElementPropsToOmit>;

const TextLink: PolymorphicComponentWithRef<
  TextLinkInternalProps,
  typeof DEFAULT_TAG
> = (props, ref) => {
  const {
    children,
    className,
    testId = 'cf-ui-text-link',
    variant = 'primary',
    href,
    icon,
    alignIcon = 'start',
    isDisabled,
    as = DEFAULT_TAG,
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
      {React.cloneElement(icon, {
        className: cx(icon.props.className, styles.textLinkIcon()),
        size: 'small',
      })}
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
};

const _TextLink: PolymorphicComponent<
  TextLinkInternalProps,
  typeof DEFAULT_TAG,
  'disabled'
> = React.forwardRef(TextLink);
export { _TextLink as TextLink };
