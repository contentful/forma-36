import React, {
  type ElementType,
  forwardRef,
  type Ref,
  type ReactElement,
  type ReactNode,
} from 'react';
import { cx } from 'emotion';
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

const HEADER_DEFAULT_TAG = 'header';

type Variant =
  | {
      backButtonProps?: never;
      breadcrumbs?: never;
      variant: 'title';
      withBackButton?: never;
    }
  | {
      backButtonProps?: never;
      /**
       * An (optional) list of navigable links to prepend to the current title.
       */
      breadcrumbs?: BreadcrumbProps['breadcrumbs'];
      variant?: 'breadcrumb' | undefined;
      withBackButton?: false | never;
    }
  | {
      /**
       * Props to spread on the back button. You almost certainly want to pass
       * an `onClick` handler.
       */
      backButtonProps?: BackButtonProps;
      /**
       * An (optional) list of navigable links to prepend to the current title.
       */
      breadcrumbs?: BreadcrumbProps['breadcrumbs'];
      variant?: 'breadcrumb' | undefined;
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
    withBackButton,
    variant = 'breadcrumb',
    ...otherProps
  }: HeaderProps<E>,
  // eslint-disable-next-line @typescript-eslint/no-explicit-any -- polymorphic element
  forwardedRef: Ref<any>,
) {
  const styles = getHeaderStyles({ hasFilters: Boolean(filters), variant });
  return (
    <Flex
      alignItems="center"
      as={HEADER_DEFAULT_TAG}
      gap="spacingM"
      className={cx(styles.root, className)}
      ref={forwardedRef}
      {...otherProps}
    >
      <div className={styles.context}>
        <Flex alignItems="center" gap="spacingXs">
          {variant === 'title' ? (
            <HeaderTitle title={title} variant="title" />
          ) : (
            <>
              {withBackButton && <BackButton {...backButtonProps} />}
              {breadcrumbs && <Breadcrumb breadcrumbs={breadcrumbs} />}
              {title && <HeaderTitle title={title} variant="breadcrumb" />}
            </>
          )}

          {metadata && (
            <Flex alignItems="center" gap="spacing2Xs">
              {metadata}
            </Flex>
          )}
        </Flex>
      </div>
      <div className={styles.filters}>{filters}</div>
      <div className={styles.actions}>{actions}</div>
    </Flex>
  );
}

export const Header: PolymorphicComponent<
  ExpandProps<HeaderInternalProps>,
  typeof HEADER_DEFAULT_TAG
> = forwardRef(_Header);
