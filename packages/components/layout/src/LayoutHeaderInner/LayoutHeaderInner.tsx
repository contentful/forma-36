import React, {
  forwardRef,
  type Ref,
  type ReactElement,
  type ReactNode,
  useEffect,
} from 'react';
import { cx } from '@emotion/css';
import { Flex, type CommonProps } from '@contentful/f36-core';
import { BackButton, type BackButtonProps } from './BackButton';
import { Breadcrumb, type BreadcrumbProps } from './Breadcrumb';
import { HeaderTitle } from './HeaderTitle';
import { getLayoutHeaderInnerStyles } from './LayoutHeaderInner.styles';
import type { HeadingElement } from '@contentful/f36-typography';
import { useLayoutContext } from '../LayoutContext';

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

export type LayoutHeaderInnerProps = CommonProps &
  Variant & {
    /**
     * Optional JSX children to display as complementary actions (e.g. buttons) related to the current page/route.
     */
    actions?: ReactElement | ReactElement[];
    /**
     * The title of the element this header pertains to.
     */
    title: string;
    titleProps?: {
      as?: HeadingElement;
      size?: 'medium' | 'large';
    };
    metadata?: ReactNode;
  };

function LayoutHeaderInnerBase(
  {
    actions,
    backButtonProps,
    breadcrumbs,
    className,
    metadata,
    title,
    titleProps,
    withBackButton,
    testId = 'cf-ui-header',
    ...otherProps
  }: LayoutHeaderInnerProps,
  forwardedRef: Ref<HTMLDivElement>,
) {
  const variant = breadcrumbs ? 'breadcrumb' : 'title';
  const styles = getLayoutHeaderInnerStyles();

  const { setWithResponsiveHeader } = useLayoutContext();
  useEffect(() => {
    setWithResponsiveHeader(true);
  }, [setWithResponsiveHeader]);

  return (
    <Flex
      alignItems="center"
      gap="spacingM"
      className={cx(styles.root, className)}
      ref={forwardedRef}
      testId={testId}
      {...otherProps}
    >
      <Flex className={styles.wrapper}>
        <Flex alignItems="center">
          {withBackButton && <BackButton {...backButtonProps} />}
          <Flex flexWrap="wrap">
            {breadcrumbs && <Breadcrumb breadcrumbs={breadcrumbs} />}
            <HeaderTitle
              withBackButton={withBackButton}
              title={title}
              variant={variant}
              {...titleProps}
            />
          </Flex>
          {metadata && (
            <Flex
              flexShrink="0"
              alignItems="center"
              gap="spacing2Xs"
              marginLeft="spacing2Xs"
              alignSelf="flex-start"
            >
              {metadata}
            </Flex>
          )}
        </Flex>
      </Flex>
      <Flex className={styles.actions}>{actions}</Flex>
    </Flex>
  );
}

LayoutHeaderInnerBase.displayName = 'LayoutHeaderInner';

export const LayoutHeaderInner = forwardRef(LayoutHeaderInnerBase);
