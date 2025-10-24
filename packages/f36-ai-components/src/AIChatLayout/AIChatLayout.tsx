import { Collapse, IconButton } from '@contentful/f36-components';
import { Box, Flex, type CommonProps } from '@contentful/f36-core';
import { cx } from 'emotion';
import React, { forwardRef, useEffect, useState, type Ref } from 'react';
import { getStyles } from './AIChatLayout.styles';

/**
 * AIChatLayout - A flexible layout component for AI chat interfaces
 *
 * Supports 4 layout states controlled by the display and variant props:
 * 1. Closed (display='closed') - Component is completely hidden
 * 2. Collapsed (display='collapsed') - Compact lozenge with icon, title, and buttons (no content area)
 * 3. Normal (display='open', variant='normal') - Standard copilot layout with header and content area
 * 4. Expanded (display='open', variant='expanded') - Large layout with more space for artifacts
 */

export type AIChatLayoutDisplay = 'closed' | 'collapsed' | 'open';
export type AIChatLayoutVariant = 'normal' | 'expanded';

export interface AIChatLayoutButton {
  /**
   * Icon component for the button
   */
  icon: React.ReactElement;
  /**
   * Click handler for the button
   */
  onClick: () => void;
  /**
   * Whether the button should be displayed (use this to enable animations when the button appears/disappears)
   */
  display: boolean;
  /**
   * Optional aria label for accessibility
   */
  ariaLabel?: string;
  /**
   * Optional test id for the button
   */
  testId?: string;
}

export interface AIChatLayoutProps extends CommonProps {
  /**
   * Layout variant defining the visual state when open
   * - 'normal': Standard copilot layout
   * - 'expanded': Larger layout for artifacts
   * @default 'normal'
   */
  variant?: 'normal' | 'expanded';
  /**
   * Display state of the layout
   * - 'closed': Component is completely hidden
   * - 'collapsed': Shows only a compact lozenge with header (no content area)
   * - 'open': Shows the full layout with content area
   * @default 'open'
   */
  display?: AIChatLayoutDisplay;
  /**
   * Callback function called when the collapsed lozenge is clicked
   */
  onCollapsedClick?: () => void;
  /**
   * Icon to display in the layout header
   */
  icon?: React.ReactNode;
  /**
   * Title for the layout
   */
  title?: string;
  /**
   * Array of action buttons
   */
  buttons?: AIChatLayoutButton[];
  /**
   * Main content area (hidden when display is 'collapsed' or 'closed')
   */
  children?: React.ReactNode;
  /**
   * Test ID for the component
   */
  testId?: string;
}

function _AIChatLayout(props: AIChatLayoutProps, ref: Ref<HTMLDivElement>) {
  const {
    variant = 'normal',
    display = 'open',
    onCollapsedClick: onOpen = () => {},
    icon,
    title,
    buttons = [],
    children,
    className,
    testId = 'cf-ui-ai-chat-layout',
    ...otherProps
  } = props;

  const [isAnimatingOut, setIsAnimatingOut] = useState(false);
  const [shouldRender, setShouldRender] = useState(display !== 'closed');

  // Handle the slide-out animation when display becomes 'closed'
  useEffect(() => {
    if (display === 'closed') {
      if (shouldRender && !isAnimatingOut) {
        setIsAnimatingOut(true);
        // Hide the component after animation completes (200ms)
        const timer = setTimeout(() => {
          setShouldRender(false);
          setIsAnimatingOut(false);
        }, 200);

        // Return cleanup function to clear timer if component unmounts or effect re-runs
        return () => {
          clearTimeout(timer);
        };
      }
    } else {
      // Show the component when it should be visible again
      if (!shouldRender) {
        setShouldRender(true);
      }
      if (isAnimatingOut) {
        setIsAnimatingOut(false);
      }
    }
  }, [display, shouldRender]);

  if (!shouldRender) {
    return null;
  }

  const styles = getStyles({ display, variant, isAnimatingOut });

  return (
    <Flex
      ref={ref}
      className={cx(styles.root, className)}
      testId={testId}
      {...otherProps}
    >
      <Flex
        className={styles.header}
        testId={`${testId}-header`}
        onClick={display === 'collapsed' ? onOpen : undefined}
      >
        {icon && (
          <Box className={styles.icon} testId={`${testId}-icon`}>
            {icon}
          </Box>
        )}

        {title && (
          <Box className={styles.title} testId={`${testId}-title`}>
            {title}
          </Box>
        )}

        {buttons.length > 0 && (
          <Flex className={styles.buttonGroup} testId={`${testId}-buttons`}>
            {buttons.map((button, index) => {
              const delayIncrement = index * 30;
              const delay = button.display
                ? 200 + delayIncrement
                : delayIncrement;

              return (
                <IconButton
                  key={index}
                  variant="transparent"
                  size="small"
                  icon={button.icon}
                  aria-label={button.ariaLabel}
                  onClick={() => button.onClick()}
                  testId={button.testId || `${testId}-button-${index}`}
                  className={
                    button.display ? styles.buttonVisible : styles.buttonHidden
                  }
                  style={{ ['--button-delay' as string]: `${delay}ms` }}
                  aria-hidden={!button.display}
                  tabIndex={button.display ? null : -1}
                />
              );
            })}
          </Flex>
        )}
      </Flex>

      <Collapse isExpanded={display !== 'collapsed'}>
        <Box className={styles.content} testId={`${testId}-content`}>
          {children}
        </Box>
      </Collapse>

      <svg xmlns="http://www.w3.org/2000/svg" width={0} height={0}>
        <defs>
          <linearGradient
            id="icon-gradient"
            gradientTransform="rotate(46.64 .5 .5)"
            gradientUnits="objectBoundingBox"
          >
            <stop offset="19.41%" stopColor="#1872E5" />
            <stop offset="38.04%" stopColor="#8C2EEA" />
            <stop offset="56.68%" stopColor="#E65325" />
            <stop offset="75.31%" stopColor="#EAAF09" />
          </linearGradient>
        </defs>
      </svg>
    </Flex>
  );
}

export const AIChatLayout = forwardRef(_AIChatLayout);
