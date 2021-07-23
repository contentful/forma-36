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
  /**
   * Determines if the divider should be rendered between collapsed buttons
   * @default false
   */
  withDivider?: boolean;
  children: React.ReactElement[];
}

function _ButtonGroup(props: ButtonGroupProps, ref: React.Ref<HTMLDivElement>) {
  const {
    variant = 'collapse',
    withDivider,
    testId = 'cf-ui-button-group',
    children,
    className,
  } = props;
  const styles = getStyles(variant, withDivider);

  return (
    <Box
      as="div"
      data-test-id={testId}
      ref={ref}
      className={cx(styles.buttonGroup, className)}
    >
      {children.map((child, key) =>
        React.cloneElement(child, {
          key,
          className: cx(
            styles.groupContent,
            styles.withDivider,
            child.props.className,
          ),
        }),
      )}
    </Box>
  );
}

export const ButtonGroup = React.forwardRef(_ButtonGroup);
