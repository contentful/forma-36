import { cx } from 'emotion';
import React from 'react';
import { Box, Stack, type ExpandProps } from '@contentful/f36-core';
import getStyles from './ButtonGroup.styles';
import type { ButtonGroupProps } from './types';

function _ButtonGroup(
  props: ExpandProps<ButtonGroupProps>,
  ref: React.Ref<HTMLDivElement>,
) {
  const {
    variant = 'merged',
    withDivider,
    testId = 'cf-ui-button-group',
    children,
    className,
    spacing,
  } = props;
  const styles = getStyles({ withDivider });

  if (variant === 'spaced') {
    return (
      <Stack
        className={className}
        isInline
        flexDirection="row"
        testId={testId}
        ref={ref}
        spacing={spacing}
      >
        {children}
      </Stack>
    );
  }

  return (
    <Box
      testId={testId}
      ref={ref}
      className={cx(styles.buttonGroup, className)}
    >
      {React.Children.map(children, (child, key) => {
        if (!React.isValidElement(child)) {
          return null;
        }
        // Only pass className if child.props has className property
        const { className: childClassName, ...childProps }: any =
          child.props || {};
        return React.cloneElement(child, {
          ...childProps,
          key,
          className: cx(styles.groupContent, childClassName ?? ''),
        });
      })}
    </Box>
  );
}

_ButtonGroup.displayName = 'ButtonGroup';

export const ButtonGroup = React.forwardRef(_ButtonGroup);
