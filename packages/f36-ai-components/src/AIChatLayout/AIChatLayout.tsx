import { Collapse, IconButton } from '@contentful/f36-components';
import { Box, Flex, type CommonProps } from '@contentful/f36-core';
import { cx } from 'emotion';
import React, { forwardRef, type Ref } from 'react';
import { getStyles } from './AIChatLayout.styles';

/**
 * AIChatLayout - A flexible layout component for AI chat interfaces
 *
 * Supports 3 layout types controlled by type and isOpen props:
 * 1. Closed (isOpen=false) - Compact lozenge with icon, title, and buttons (no children)
 * 2. Normal (isOpen=true, type='normal') - Standard layout with header and content area (360px width)
 * 3. Expanded (isOpen=true, type='expanded') - Large layout with more space (480px width)
 *
 * The isOpen prop controls whether the layout shows the full interface or just the compact lozenge.
 * The type prop determines the size when isOpen=true.
 */

export type AIChatLayoutType = 'collapsed' | 'normal' | 'expanded';

export interface AIChatLayoutButton {
  /**
   * Icon component for the button (React element)
   */
  icon: React.ReactElement;
  /**
   * Click handler for the button
   */
  onClick: () => void;
  /**
   * Whether the button should be displayed
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
   * Layout type defining the visual state when open
   * - 'normal': Standard layout with header and content area (360px width)
   * - 'expanded': Large layout with more space (480px width)
   * @default 'normal'
   */
  type?: 'normal' | 'expanded';
  /**
   * Whether the layout is open or closed
   * - true: Shows the full layout with content area (normal or expanded based on type)
   * - false: Shows only a compact lozenge (collapsed state)
   * @default true
   */
  isOpen?: boolean;
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
   * Main content area (hidden when isOpen is false)
   */
  children?: React.ReactNode;
  /**
   * Test ID for the component
   */
  testId?: string;
}

function _AIChatLayout(props: AIChatLayoutProps, ref: Ref<HTMLDivElement>) {
  const {
    type = 'normal',
    isOpen = true,
    icon,
    title,
    buttons = [],
    children,
    className,
    testId = 'cf-ai-chat-layout',
    ...otherProps
  } = props;

  // Determine effective type for styling - 'collapsed' when closed, otherwise use the type prop
  const effectiveType: AIChatLayoutType = isOpen ? type : 'collapsed';

  const styles = getStyles({ type: effectiveType, isOpen });

  // Render all buttons but control visibility with CSS

  const header = (
    <Flex
      className={styles.header}
      alignItems="center"
      testId={`${testId}-header`}
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
                aria-label={button.ariaLabel || `Action button ${index + 1}`}
                onClick={() => button.onClick()}
                testId={button.testId || `${testId}-button-${index}`}
                className={
                  button.display ? styles.buttonVisible : styles.buttonHidden
                }
                style={
                  {
                    '--button-delay': `${delay}ms`,
                  } as React.CSSProperties
                }
              />
            );
          })}
        </Flex>
      )}
    </Flex>
  );

  return (
    <Flex
      ref={ref}
      className={cx(styles.root, className)}
      testId={testId}
      {...otherProps}
    >
      {header}

      {/* Content area - only for non-collapsed layouts */}
      <Collapse isExpanded={isOpen}>
        <Box className={styles.content} testId={`${testId}-content`}>
          {children}
        </Box>
      </Collapse>
    </Flex>
  );
}

export const AIChatLayout = forwardRef(_AIChatLayout);
