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
import { Subheading } from '@contentful/f36-typography';
import { BackButton, type BackButtonProps } from './BackButton';
import { Breadcrumb, type BreadcrumbProps } from './Breadcrumb';
import { Segmentation } from './Segmentation';
import { getHeaderStyles } from './Header.styles';

const HEADER_DEFAULT_TAG = 'header';

type WithBackButtonOrNot =
  | {
      backButtonProps?: BackButtonProps;
      /**
       * If `true`, renders a leading back button within the header.
       */
      withBackButton: true;
    }
  | {
      backButtonProps?: never;
      withBackButton?: false | never;
    };

type HeaderInternalProps = WithBackButtonOrNot & {
  /**
   * Optional JSX children to display as complementary actions (e.g. buttons) related to the current page/route.
   */
  actions?: ReactElement | ReactElement[];
  /**
   * An (optional) list of navigable links to prepend to the current title.
   */
  breadcrumbs?: BreadcrumbProps['breadcrumbs'];
  /**
   * An (optional) element displayed in the center of the header, typically used to render refinement/search UI.
   */
  filters?: ReactElement;
  /**
   * The title of the element this header pertains to.
   */
  title?: string;
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
    ...otherProps
  }: HeaderProps<E>,
  // eslint-disable-next-line @typescript-eslint/no-explicit-any -- polymorphic element
  forwardedRef: Ref<any>,
) {
  const styles = getHeaderStyles();
  return (
    <Flex
      alignItems="center"
      as={HEADER_DEFAULT_TAG}
      gap="spacingM"
      className={cx(styles.root(Boolean(filters)), className)}
      ref={forwardedRef}
      {...otherProps}
    >
      <div className={styles.context}>
        <Flex alignItems="center" gap="spacingXs">
          <Segmentation>
            {withBackButton && <BackButton {...backButtonProps} />}
            {breadcrumbs && <Breadcrumb breadcrumbs={breadcrumbs} />}
            {title && <Subheading className={styles.title}>{title}</Subheading>}
          </Segmentation>
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
