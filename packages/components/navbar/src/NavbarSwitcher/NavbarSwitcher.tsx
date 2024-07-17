import React, { type ReactNode } from 'react';
import { getNavbarSwitcherStyles } from './NavbarSwitcher.styles';
import { Button } from '@contentful/f36-button';
import {
  Flex,
  type CommonProps,
  type PropsWithHTMLElement,
  type ExpandProps,
} from '@contentful/f36-core';
import { cx } from 'emotion';
import { NavbarEnvVariant } from './NavbarEnvVariant';

type TruncateOptions = {
  /**
   * Number of characters to keep at the start of the string
   * @default 5
   */
  start?: number;
  /**
   * Number of characters to keep at the end of the string
   * @default 6
   */
  end?: number;
};

function splitSpaceName(
  string: string,
  {
    start: startLength = 5,
    end: endLength = 6,
  }: TruncateOptions | undefined = {},
) {
  if (string.length <= startLength + endLength) {
    return [string, undefined, undefined];
  }

  const start = startLength > 0 ? string.slice(0, startLength) : '';
  const end = endLength > 0 ? string.slice(-endLength) : '';
  const remainder = string.slice(startLength, string.length - endLength);

  return [start, remainder, end];
}

type NavbarSwitcherOwnProps = CommonProps & {
  children: ReactNode;
  isCircle?: boolean;
  envVariant?: 'master' | 'non-master';
  isAlias?: boolean;
  ariaLabel?: string;
};

export type NavbarSwitcherProps = PropsWithHTMLElement<
  NavbarSwitcherOwnProps,
  'button'
>;

function _NavbarSwitcher(
  props: ExpandProps<NavbarSwitcherProps>,
  ref: React.Ref<HTMLButtonElement>,
) {
  const {
    children,
    className,
    envVariant,
    isAlias,
    testId = 'cf-ui-navbar-switcher',
    ariaLabel = 'Space and Environment Navigation',
    ...otherProps
  } = props;
  const styles = getNavbarSwitcherStyles();
  const [start, middle, end] =
    typeof children === 'string' ? splitSpaceName(children) : [];

  return (
    <Button
      {...otherProps}
      aria-label={ariaLabel}
      className={cx(styles.navbarSwitcher, className)}
      endIcon={
        envVariant && (
          <NavbarEnvVariant
            envVariant={envVariant}
            isAlias={isAlias}
            className={styles.switcherEnvIcon}
          />
        )
      }
      ref={ref}
      testId={testId}
      variant="transparent"
    >
      <Flex
        alignItems="center"
        className={styles.switcherSpaceName}
        flexDirection="row"
      >
        {start !== undefined ? (
          <>
            <span>{start}</span>
            {middle && (
              <span className={styles.switcherSpaceNameTruncation}>
                {middle}
              </span>
            )}
            {end && <span>{end}</span>}
          </>
        ) : (
          children
        )}
      </Flex>
    </Button>
  );
}

export const NavbarSwitcher = React.forwardRef(_NavbarSwitcher);
