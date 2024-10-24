import React from 'react';
import { getNavbarSwitcherStyles } from './NavbarSwitcher.styles';
import { Button } from '@contentful/f36-button';
import {
  Flex,
  type CommonProps,
  type PropsWithHTMLElement,
  type ExpandProps,
  Box,
} from '@contentful/f36-core';
import { cx } from 'emotion';
import { NavbarEnvVariant } from './NavbarEnvVariant';
import { NavbarSwitcherSkeleton } from './NavbarSwitcherSkeleton';
import { CaretRightIcon } from '@contentful/f36-icons';
import { Text } from '@contentful/f36-typography';
import tokens from '@contentful/f36-tokens';

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

function splitString(
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

export type EnvVariant = 'master' | 'non-master';

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
    isCircle?: boolean;
    envVariant?: EnvVariant;
    isAlias?: boolean;
    ariaLabel?: string;
  };

export type NavbarSwitcherProps = PropsWithHTMLElement<
  NavbarSwitcherOwnProps,
  'button'
>;

type SwitcherLabelProps = {
  value: React.ReactNode;
  styles: ReturnType<typeof getNavbarSwitcherStyles>;
  envVariant?: EnvVariant;
};

const SwitcherLabel = ({ value, styles }: SwitcherLabelProps) => {
  const [start, middle, end] =
    typeof value === 'string' ? splitString(value) : [];

  return start !== undefined ? (
    <Text className={styles.text}>
      <span>{start}</span>
      {middle && (
        <span className={styles.switcherSpaceNameTruncation}>{middle}</span>
      )}
      {end && <span>{end}</span>}
    </Text>
  ) : (
    <Text className={styles.text}>{value}</Text>
  );
};

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
    space,
    environment,
    isLoading,
    ...otherProps
  } = props;
  const isMaster = envVariant === 'master';
  const styles = getNavbarSwitcherStyles({ isMaster });

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
        alignItems="center"
        className={styles.switcherSpaceName}
        flexDirection="row"
      >
        {isLoading ? (
          <NavbarSwitcherSkeleton estimatedWidth={148} />
        ) : (
          <>
            {children ? (
              <Text className={styles.text}>{children}</Text>
            ) : (
              <Flex gap={tokens.spacingXs}>
                <Box className={styles.innerRectangle} />

                <Flex
                  className={styles.innerSpaceEnv}
                  gap={tokens.spacing2Xs}
                  alignItems="center"
                >
                  <SwitcherLabel value={space} styles={styles} />

                  {environment && (
                    <>
                      <CaretRightIcon
                        size="tiny"
                        color={isMaster ? tokens.green700 : tokens.orange700}
                      />
                      <SwitcherLabel
                        envVariant={envVariant}
                        value={environment}
                        styles={styles}
                      />
                    </>
                  )}
                </Flex>
              </Flex>
            )}
          </>
        )}
      </Flex>
    </Button>
  );
}

export const NavbarSwitcher = React.forwardRef(_NavbarSwitcher);
