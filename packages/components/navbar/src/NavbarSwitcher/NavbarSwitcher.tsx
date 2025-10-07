import React from 'react';
import {
  getNavbarIconColor,
  getNavbarSwitcherStyles,
} from './NavbarSwitcher.styles';
import { Button } from '@contentful/f36-button';
import {
  Flex,
  type CommonProps,
  type PropsWithHTMLElement,
  type ExpandProps,
} from '@contentful/f36-core';
import { cx } from '@emotion/css';
import { NavbarEnvVariant } from './NavbarEnvVariant';
import { NavbarSwitcherSkeleton } from './NavbarSwitcherSkeleton';
import { CaretRightIcon } from '@contentful/f36-icons';
import { Text } from '@contentful/f36-typography';

export type EnvVariant = 'master' | 'non-master' | 'trial';

type NavbarLoadingProps =
  | {
      isLoading?: true;
      children?: React.ReactNode;
      environment?: never;
      space?: never;
    }
  | {
      isLoading?: false;
      children?: never;
      environment?: string;
      space?: string;
    };

type NavbarSwitcherOwnProps = CommonProps &
  NavbarLoadingProps & {
    envVariant?: EnvVariant;
    isAlias?: boolean;
    ariaLabel?: string;
  };

export type NavbarSwitcherProps = PropsWithHTMLElement<
  NavbarSwitcherOwnProps,
  'button'
>;

function NavbarSwitcherBase(
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
    space,
    environment,
    isLoading,
    ...otherProps
  } = props;
  const styles = getNavbarSwitcherStyles(envVariant);

  return (
    <Button
      {...otherProps}
      aria-label={ariaLabel}
      className={cx(
        styles.navbarSwitcher({ showSpaceEnv: !isLoading && !children }),
        className,
      )}
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
        className={styles.switcherWrapper({
          showSpaceEnv: !isLoading && !children,
        })}
      >
        {isLoading ? (
          <NavbarSwitcherSkeleton estimatedWidth={148} />
        ) : (
          <>
            {children ? (
              <Text className={styles.switcherLabel}>{children}</Text>
            ) : (
              <Flex className={styles.switcherLabelWrapper}>
                <Text className={styles.switcherLabel}>{space}</Text>
                {environment && (
                  <>
                    <Flex className={styles.switcherCaret}>
                      <CaretRightIcon
                        size="tiny"
                        color={getNavbarIconColor(envVariant)}
                      />
                    </Flex>
                    <Text className={styles.switcherLabel}>{environment}</Text>
                  </>
                )}
              </Flex>
            )}
          </>
        )}
      </Flex>
    </Button>
  );
}

NavbarSwitcherBase.displayName = 'NavbarSwitcher';
export const NavbarSwitcher = React.forwardRef(NavbarSwitcherBase);
