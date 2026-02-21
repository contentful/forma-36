import { Collapse } from '@contentful/f36-components';
import { Box, type CommonProps } from '@contentful/f36-core';
import {
  CaretDownIcon,
  CaretRightIcon,
  SparkleFilledIcon,
} from '@contentful/f36-icons';
import { cx } from '@emotion/css';
import React, { forwardRef, useEffect, useState, type Ref } from 'react';
import { getStyles } from './AIChatReasoning.styles';

export interface AIChatReasoningProps extends CommonProps {
  /**
   * Content to be rendered when expanded
   */
  children?: React.ReactNode;
  /**
   * Custom label text to display. Defaults to "Processing..."
   * @default Processing...
   */
  label?: string;
  /**
   * Whether the component is controlled (expanded state managed externally)
   * @default false
   */
  isExpanded?: boolean;
  /**
   * Whether the sparkle icon and ellipsis should animate
   * @default true
   */
  shouldAnimate?: boolean;
  /**
   * Callback called when the expand/collapse state changes
   */
  onToggle?: (isExpanded: boolean) => void;
}

function AIChatReasoningBase(
  props: AIChatReasoningProps,
  ref: Ref<HTMLDivElement>,
) {
  const {
    children,
    label = 'Processing...',
    isExpanded = false,
    shouldAnimate = true,
    onToggle = () => {},
    testId = 'cf-ui-ai-chat-reasoning',
    ...otherProps
  } = props;

  const [internalExpanded, setInternalExpanded] = useState(isExpanded);
  const [childrenKey, setChildrenKey] = useState(0);

  useEffect(() => {
    setInternalExpanded(isExpanded);
  }, [isExpanded]);

  useEffect(() => {
    if (internalExpanded) {
      setChildrenKey((prev) => prev + 1);
    }
  }, [children, internalExpanded]);

  const handleToggle = () => {
    const newExpanded = !internalExpanded;
    setInternalExpanded(newExpanded);
    onToggle?.(newExpanded);
  };

  const shouldAnimateDots = shouldAnimate && label.includes('...');
  const formattedLabel = shouldAnimateDots
    ? label.replace(/\.\.\.$/, '')
    : label;

  const styles = getStyles({
    shouldAnimate,
    isExpanded: internalExpanded,
    testId,
  });

  return (
    <Box
      ref={ref}
      className={styles.root}
      data-test-id={testId}
      {...otherProps}
    >
      <button
        className={styles.header}
        onClick={handleToggle}
        aria-expanded={internalExpanded}
        aria-controls={`${testId}-content`}
        data-test-id={`${testId}-header`}
        type="button"
      >
        <Box className={styles.iconContainer} data-test-id={`${testId}-icon`}>
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
              ? internalExpanded
                ? styles.labelWithStaticDots
                : styles.labelWithAnimatedDots
              : styles.label
          }
          data-test-id={`${testId}-label`}
        >
          {formattedLabel}
        </Box>
      </button>

      <Collapse key={childrenKey} isExpanded={internalExpanded}>
        <Box
          className={styles.content}
          data-test-id={`${testId}-content`}
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
 */
export const AIChatReasoning = forwardRef(AIChatReasoningBase);
