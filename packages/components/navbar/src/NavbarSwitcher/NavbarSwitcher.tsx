import React, { useMemo } from 'react';
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

type NavbarLoadingProps =
  | {
      isLoading?: true;
      environment?: never;
      space?: never;
    }
  | {
      isLoading?: false;
      environment?: string;
      space?: string;
    };

type NavbarSwitcherOwnProps = CommonProps &
  NavbarLoadingProps & {
    isCircle?: boolean;
    envVariant?: 'master' | 'non-master';
    isAlias?: boolean;
    ariaLabel?: string;
  };

export type NavbarSwitcherProps = PropsWithHTMLElement<
  NavbarSwitcherOwnProps,
  'button'
>;

type SwitcherLabelEnvVariantProps =
  | {
      type: 'environment';
      envVariant?: 'master' | 'non-master';
    }
  | {
      type: 'space';
      envVariant?: never;
    };

type SwitcherLabelProps = SwitcherLabelEnvVariantProps & {
  value: React.ReactNode;
  styles: ReturnType<typeof getNavbarSwitcherStyles>;
  type: 'space' | 'environment';
  envVariant?: 'master' | 'non-master';
};

const SwitcherLabel = ({
  value,
  styles,
  envVariant,
  type,
}: SwitcherLabelProps) => {
  const [start, middle, end] =
    typeof value === 'string' ? splitString(value) : [];
  const envColor = useMemo(() => {
    const isEnv = type === 'environment';
    const isMaster = envVariant === 'master';
    if (isEnv && isMaster) {
      return 'green600';
    }
    return 'gray600';
  }, [type, envVariant]);

  return start !== undefined ? (
    <Text fontColor={envColor}>
      <span>{start}</span>
      {middle && (
        <span className={styles.switcherSpaceNameTruncation}>{middle}</span>
      )}
      {end && <span>{end}</span>}
    </Text>
  ) : (
    <Text fontColor={envColor}>{value}</Text>
  );
};

function _NavbarSwitcher(
  props: ExpandProps<NavbarSwitcherProps>,
  ref: React.Ref<HTMLButtonElement>,
) {
  const {
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
  const styles = getNavbarSwitcherStyles();

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
        {isLoading ? (
          <NavbarSwitcherSkeleton estimatedWidth={148} />
        ) : (
          <Flex gap={tokens.spacing2Xs} alignItems="center">
            <SwitcherLabel type="space" value={space} styles={styles} />
            <CaretRightIcon size="tiny" color={tokens.gray400} />
            <SwitcherLabel
              envVariant={envVariant}
              type="environment"
              value={environment}
              styles={styles}
            />
          </Flex>
        )}
      </Flex>
    </Button>
  );
}

export const NavbarSwitcher = React.forwardRef(_NavbarSwitcher);
