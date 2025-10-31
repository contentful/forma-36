import { Collapse } from '@contentful/f36-components';
import { Box, type CommonProps } from '@contentful/f36-core';
import {
  CaretDownIcon,
  CaretRightIcon,
  SparkleFilledIcon,
} from '@contentful/f36-icons';
import { cx } from 'emotion';
import React, { forwardRef, useState, type Ref } from 'react';
import { getStyles } from './AIChatReasoning.styles';

export interface AIChatReasoningProps extends CommonProps {
  /**
   * Content to be rendered when expanded
   */
  children?: React.ReactNode;
  /**
   * Custom label text to display. Defaults to "Processing..."
   * @default "Processing...
   */
  label?: string;
  /**
   * Whether the component is initially expanded
   * @default false
   */
  defaultExpanded?: boolean; // todo: remove
  /**
   * Whether the component is controlled (expanded state managed externally)
   */
  isExpanded?: boolean;
  /**
   * Whether the sparkle icon should animate
   * @default true
   */
  shouldAnimateIcon?: boolean;
  /**
   * Callback called when the expand/collapse state changes
   */
  onToggle?: (isExpanded: boolean) => void;
  /**
   * Test ID for the component
   */
  testId?: string;
}

function _AIChatReasoning(
  props: AIChatReasoningProps,
  ref: Ref<HTMLDivElement>,
) {
  const {
    children,
    label = 'Processing...',
    defaultExpanded = false,
    isExpanded: controlledExpanded,
    shouldAnimateIcon = true,
    onToggle,
    className,
    testId = 'cf-ui-ai-chat-reasoning',
    ...otherProps
  } = props;

  // Handle both controlled and uncontrolled state
  const [internalExpanded, setInternalExpanded] = useState(defaultExpanded);
  const isControlled = controlledExpanded !== undefined;
  const isExpanded = isControlled ? controlledExpanded : internalExpanded;

  const handleToggle = () => {
    const newExpanded = !isExpanded;

    if (!isControlled) {
      setInternalExpanded(newExpanded);
    }

    onToggle?.(newExpanded);
  };

  const shouldAnimateDots = label.includes('...');
  const formattedLabel = shouldAnimateDots
    ? label.replace(/\.\.\.$/, '')
    : label;

  const styles = getStyles({ shouldAnimateIcon, isExpanded, testId });

  return (
    <Box ref={ref} className={styles.root} data-testid={testId} {...otherProps}>
      <button
        className={styles.header}
        onClick={handleToggle}
        aria-expanded={isExpanded}
        aria-controls={`${testId}-content`}
        data-testid={`${testId}-header`}
        type="button"
      >
        <Box className={styles.iconContainer} data-testid={`${testId}-icon`}>
          <Box className={styles.collapsedIcon} id={`${testId}-collapsed-icon`}>
            <SparkleFilledIcon />
          </Box>
          <Box
            className={cx(styles.collapsedIcon, styles.hoverIcon)}
            id={`${testId}-hover-icon`}
          >
            <CaretRightIcon />
          </Box>
          <Box className={styles.expandedIcon} id={`${testId}-expanded-icon`}>
            <CaretDownIcon />
          </Box>
        </Box>

        <Box
          className={
            shouldAnimateDots
              ? isExpanded
                ? styles.labelWithStaticDots
                : styles.labelWithAnimatedDots
              : styles.label
          }
          data-testid={`${testId}-label`}
        >
          {formattedLabel}
        </Box>
      </button>

      <Collapse isExpanded={isExpanded}>
        <Box
          className={styles.content}
          data-testid={`${testId}-content`}
          id={`${testId}-content`}
        >
          {children}
        </Box>
      </Collapse>
    </Box>
  );
}

/**
 * AIChatReasoning is a collapsible component that defaults to closed with a "Processing..." label and animated sparkle icon.
 * When clicked, it expands to reveal its children content.
 *
 * The sparkle icon animates with a pulse effect when collapsed to indicate background processing,
 * and stops animating when expanded.
 *
 * The component supports both controlled and uncontrolled usage patterns.
 */
export const AIChatReasoning = forwardRef(_AIChatReasoning);
