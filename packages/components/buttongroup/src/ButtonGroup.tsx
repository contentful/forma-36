import { cx } from 'emotion';
import React from 'react';
import { CommonProps, Box } from '@contentful/f36-core';
import getStyles from './ButtonGroup.styles';
import type { ButtonGroupVariants } from './types';

export interface ButtonGroupProps extends CommonProps {
  /**
   * Determines how the Button Group will display the buttons
   * @default collapse
   */
  variant?: ButtonGroupVariants;
  children: React.ReactElement[];
}

function _ButtonGroup(props: ButtonGroupProps, ref: React.Ref<HTMLDivElement>) {
  const {
    variant = 'collapse',
    testId = 'cf-ui-button-group',
    children,
    className,
  } = props;
  const styles = getStyles(variant);

  return (
    <Box
      as="div"
      data-test-id={testId}
      ref={ref}
      className={cx(styles.buttonGroup, className)}
    >
      {children.map((child) =>
        React.cloneElement(child, {
          className: cx(styles.groupContent, child.props.className),
        }),
      )}
    </Box>
  );
}

export const ButtonGroup = React.forwardRef(_ButtonGroup);
