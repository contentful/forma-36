import React, {
  type ElementType,
  forwardRef,
  type Ref,
  type ReactElement,
  type ReactNode,
} from 'react';
import { cx } from '@emotion/css';
import {
  Flex,
  type ExpandProps,
  type PolymorphicComponent,
  type PolymorphicProps,
} from '@contentful/f36-core';
import { BackButton, type BackButtonProps } from './BackButton';
import { Breadcrumb, type BreadcrumbProps } from './Breadcrumb';
import { getHeaderStyles } from './Header.styles';
import { HeaderTitle } from './HeaderTitle';
import { Segmentation } from './Segmentation';
import type { HeadingElement } from '@contentful/f36-typography';

const HEADER_DEFAULT_TAG = 'header';

type Variant =
  | {
      /**
       * An (optional) list of navigable links to prepend to the current title.
       */
      breadcrumbs?: BreadcrumbProps['breadcrumbs'];
      /**
       * Ensure that backbutton props can not be passed when `withBackButton` is false.
       * This is to prevent confusion, as the back button will not be rendered.
       */
      backButtonProps?: never;
      withBackButton?: false | never;
    }
  | {
      /**
       * An (optional) list of navigable links to prepend to the current title.
       */
      breadcrumbs?: BreadcrumbProps['breadcrumbs'];
      /**
       * Props to spread on the back button. You almost certainly want to pass
       * an `onClick` handler.
       */
      backButtonProps?: BackButtonProps;
      /**
       * If `true`, renders a leading back button within the header.
       */
      withBackButton: true;
    };

type HeaderInternalProps = Variant & {
  /**
   * Optional JSX children to display as complementary actions (e.g. buttons) related to the current page/route.
   */
  actions?: ReactElement | ReactElement[];
  /**
   * An (optional) element displayed in the center of the header, typically used to render refinement/search UI.
   */
  filters?: ReactElement;
  /**
   * The title of the element this header pertains to.
   */
  title?: ReactElement | string;
  titleProps?: {
    as?: HeadingElement;
    size?: 'medium' | 'large';
  };
  metadata?: ReactNode;
};

export type HeaderProps<E extends ElementType = typeof HEADER_DEFAULT_TAG> =
  PolymorphicProps<HeaderInternalProps, E>;

function _Header<E extends ElementType = typeof HEADER_DEFAULT_TAG>(
  {
    actions,
    as,
    backButtonProps,
    breadcrumbs,
    className,
    filters,
    metadata,
    title,
    titleProps,
    withBackButton,
    testId = 'cf-ui-header',
    ...otherProps
  }: HeaderProps<E>,
  forwardedRef: Ref<HTMLElement>,
) {
  const variant = breadcrumbs ? 'breadcrumb' : 'title';
  const styles = getHeaderStyles();

  return (
    <Flex
      alignItems="center"
      as={HEADER_DEFAULT_TAG}
      gap="spacingM"
      className={cx(styles.root, className)}
      ref={forwardedRef}
      testId={testId}
      {...otherProps}
    >
      <Flex className={styles.wrapper}>
        <Flex alignItems="center">
          {withBackButton && <BackButton {...backButtonProps} />}
          {breadcrumbs ? (
            <Segmentation>
              {breadcrumbs && <Breadcrumb breadcrumbs={breadcrumbs} />}
              {title && (
                <HeaderTitle
                  withBackButton={withBackButton}
                  title={title}
                  variant={variant}
                  {...titleProps}
                />
              )}
            </Segmentation>
          ) : (
            <HeaderTitle
              withBackButton={withBackButton}
              title={title}
              variant={variant}
              {...titleProps}
            />
          )}
          {metadata && (
            <Flex
              flexShrink="0"
              alignItems="center"
              gap="spacing2Xs"
              marginLeft="spacing2Xs"
            >
              {metadata}
            </Flex>
          )}
        </Flex>
      </Flex>
      <Flex className={styles.filters}>{filters}</Flex>
      <Flex className={styles.actions}>{actions}</Flex>
    </Flex>
  );
}

export const Header = forwardRef(_Header) as PolymorphicComponent<
  ExpandProps<HeaderInternalProps>,
  typeof HEADER_DEFAULT_TAG
>;
