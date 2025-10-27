import { IconButton } from '@contentful/f36-components';
import { Box, Flex, type CommonProps } from '@contentful/f36-core';
import { cx } from 'emotion';
import React, { forwardRef, useState, type Ref } from 'react';
import { getStyles } from './AIChatLayout.styles';

/**
 * AIChatLayout - A flexible layout component for AI chat interfaces
 *
 * Supports 3 layout types with standard button behavior:
 * 1. Collapsed - Compact lozenge with icon, title, and buttons (no children)
 *    - History: Hidden (not available when collapsed)
 *    - Collapse/Uncollapse: Shows expand button
 *    - Close: Hidden (not available when collapsed)
 * 2. Normal - Standard layout with header and content area (360px width)
 *    - History: Available
 *    - Collapse/Uncollapse: Shows collapse button
 *    - Close: Available
 * 3. Expanded - Large layout with more space (480px width)
 *    - History: Available
 *    - Collapse/Uncollapse: Hidden (not available when expanded)
 *    - Close: Available
 *
 * Default event handlers provide automatic layout state management:
 * - onCollapse: Changes layout to 'collapsed'
 * - onExpand: Changes layout to 'normal' from collapsed, or 'expanded' from normal
 * - onClose: Changes layout to 'collapsed'
 *
 * Layout event handlers (onCollapse, onExpand, onClose) are passed down to child components.
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
  onClick: (layout: AIChatLayoutProps) => void;
  /**
   * Whether the button should be displayed
   * Can be a boolean, or function that returns a boolean
   */
  display: boolean | ((layout: AIChatLayoutProps) => boolean);
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
   * Layout type defining the visual state
   * - 'collapsed': Shows only a compact lozenge with icon, title, and buttons (no children)
   * - 'normal': Standard layout with header and content area (360px width)
   * - 'expanded': Large layout with more space (480px width)
   * @default 'normal'
   */
  type?: AIChatLayoutType;
  /**
   * Icon to display in the layout header
   */
  icon?: React.ReactNode;
  /**
   * Title for the layout
   * Can be a string or function that takes the layout props and returns a string
   */
  title?: string | ((layout: AIChatLayoutProps) => string);
  /**
   * Array of action buttons
   */
  buttons?: AIChatLayoutButton[];
  /**
   * Main content area (hidden when type is 'collapsed')
   */
  children?: React.ReactNode;
  /**
   * Test ID for the component
   */
  testId?: string;
  /**
   * Event handlers for layout interactions
   */
  onCollapse?: () => void;
  onExpand?: () => void;
  onClose?: () => void;
}

function _AIChatLayout(props: AIChatLayoutProps, ref: Ref<HTMLDivElement>) {
  const [currentType, setCurrentType] = useState<AIChatLayoutType>(
    props.type || 'normal',
  );

  const {
    icon,
    title,
    buttons = [],
    children,
    className,
    testId = 'cf-ai-chat-layout',
    // Default handlers that affect the type state
    onCollapse = () => setCurrentType('collapsed'),
    onExpand = () =>
      setCurrentType(currentType === 'collapsed' ? 'normal' : 'expanded'),
    onClose = () => setCurrentType('collapsed'),
    ...otherProps
  } = props;

  // Use current type from state if not explicitly controlled
  const effectiveType = props.type !== undefined ? props.type : currentType;

  const styles = getStyles({ type: effectiveType });

  // Resolve title if it's a function
  const resolvedTitle = typeof title === 'function' ? title(props) : title;

  // Layout object with resolved handlers to pass to button onClick
  const layoutWithHandlers = {
    ...props,
    type: effectiveType,
    onCollapse,
    onExpand,
    onClose,
  };

  // Filter and render visible buttons
  const visibleButtons = buttons.filter((button) => {
    const display =
      typeof button.display === 'function'
        ? button.display(layoutWithHandlers)
        : button.display;
    return display !== false;
  });

  // Event handlers object to pass to children
  const eventHandlers = {
    onCollapse,
    onExpand,
    onClose,
  };

  // Clone children and pass event handlers if children are React elements
  const childrenWithHandlers =
    children && effectiveType !== 'collapsed'
      ? React.Children.map(children, (child) => {
          if (React.isValidElement(child) && typeof child.type === 'function') {
            return React.cloneElement(child, { ...eventHandlers });
          }
          return child;
        })
      : null;

  // If collapsed, render as a compact lozenge without content area
  if (effectiveType === 'collapsed') {
    return (
      <Flex
        ref={ref}
        className={cx(styles.root, className)}
        testId={testId}
        alignItems="center"
        {...otherProps}
      >
        {icon && (
          <Box className={styles.icon} testId={`${testId}-icon`}>
            {icon}
          </Box>
        )}

        {resolvedTitle && (
          <Box className={styles.title} testId={`${testId}-title`}>
            {resolvedTitle}
          </Box>
        )}

        {visibleButtons.length > 0 && (
          <Flex className={styles.buttonGroup} testId={`${testId}-buttons`}>
            {visibleButtons.map((button, index) => (
              <IconButton
                key={index}
                variant="transparent"
                size="small"
                icon={button.icon}
                aria-label={button.ariaLabel || `Action button ${index + 1}`}
                onClick={() => button.onClick(layoutWithHandlers)}
                testId={button.testId || `${testId}-button-${index}`}
              />
            ))}
          </Flex>
        )}
      </Flex>
    );
  }

  return (
    <Flex
      ref={ref}
      className={cx(styles.root, className)}
      testId={testId}
      flexDirection="column"
      {...otherProps}
    >
      {/* Header with icon, title, and buttons */}
      <Flex className={styles.header} testId={`${testId}-header`}>
        {icon && (
          <Box className={styles.icon} testId={`${testId}-icon`}>
            {icon}
          </Box>
        )}

        {resolvedTitle && (
          <Box className={styles.title} testId={`${testId}-title`}>
            {resolvedTitle}
          </Box>
        )}

        {visibleButtons.length > 0 && (
          <Flex className={styles.buttonGroup} testId={`${testId}-buttons`}>
            {visibleButtons.map((button, index) => (
              <IconButton
                key={index}
                variant="transparent"
                size="small"
                icon={button.icon}
                aria-label={button.ariaLabel || `Action button ${index + 1}`}
                onClick={() => button.onClick(layoutWithHandlers)}
                testId={button.testId || `${testId}-button-${index}`}
              />
            ))}
          </Flex>
        )}
      </Flex>

      {/* Content area - only for non-collapsed layouts */}
      <Box className={styles.content} testId={`${testId}-content`}>
        {childrenWithHandlers}
      </Box>
    </Flex>
  );
}

export const AIChatLayout = forwardRef(_AIChatLayout);
