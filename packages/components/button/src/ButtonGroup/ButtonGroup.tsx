import { cx } from 'emotion';
import React from 'react';
import { Box } from '@contentful/f36-core';
import getStyles from './ButtonGroup.styles';
import type { ButtonGroupProps } from './types';

function _ButtonGroup(props: ButtonGroupProps, ref: React.Ref<HTMLDivElement>) {
  const {
    variant = 'collapsed',
    withDivider,
    testId = 'cf-ui-button-group',
    children,
    className,
    spacing,
  } = props;
  const styles = getStyles({ variant, withDivider, spacing });

  return (
    <Box
      as="div"
      data-test-id={testId}
      ref={ref}
      className={cx(styles.buttonGroup, className)}
    >
      {React.Children.map(children, (child, key) => {
        if (!child) {
          return null;
        }
        return React.cloneElement(child, {
          key,
          className: cx(styles.groupContent, child.props.className),
        });
      })}
    </Box>
  );
}

export const ButtonGroup = React.forwardRef(_ButtonGroup);
