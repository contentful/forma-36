import { Collapse, IconButton } from '@contentful/f36-components';
import { Box, Flex, type CommonProps } from '@contentful/f36-core';
import { cx } from 'emotion';
import React, {
  forwardRef,
  useCallback,
  useEffect,
  useMemo,
  useState,
  type Ref,
} from 'react';
import { Slider, type SliderContentState } from '../Slider';
import { getStyles } from './AIChatLayout.styles';
import { IconGradient } from './IconGradient';

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

export interface AIChatLayoutHeaderState {
  /**
   * Icon to display in the layout header
   */
  icon?: React.ReactNode;
  /**
   * Title for the layout header
   */
  title?: string;
  /**
   * Array of action buttons for this header state
   */
  buttons?: AIChatLayoutButton[];
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
   * Current header state configuration
   */
  headerState?: AIChatLayoutHeaderState;
  /**
   * Icon to display in the layout header (deprecated - use headerState.icon)
   * @deprecated Use headerState.icon instead
   */
  icon?: React.ReactNode;
  /**
   * Title for the layout (deprecated - use headerState.title)
   * @deprecated Use headerState.title instead
   */
  title?: string;
  /**
   * Array of action buttons (deprecated - use headerState.buttons)
   * @deprecated Use headerState.buttons instead
   */
  buttons?: AIChatLayoutButton[];
  /**
   * Button that should maintain its position (typically a close button)
   * This button will always be positioned at the end of the button group
   */
  fixedButton?: AIChatLayoutButton;
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
    headerState,
    // Deprecated props - maintain backward compatibility
    icon: deprecatedIcon,
    title: deprecatedTitle,
    buttons: deprecatedButtons = [],
    fixedButton,
    children,
    className,
    testId = 'cf-ui-ai-chat-layout',
    ...otherProps
  } = props;

  // Use headerState if provided, otherwise fall back to deprecated props
  const currentIcon = headerState?.icon ?? deprecatedIcon;
  const currentTitle = headerState?.title ?? deprecatedTitle;
  const currentButtons = headerState?.buttons ?? deprecatedButtons;

  const [isAnimatingOut, setIsAnimatingOut] = useState(false);
  const [shouldRender, setShouldRender] = useState(display !== 'closed');

  const styles = getStyles({
    display,
    variant,
    isAnimatingOut,
  });

  // Helper function to render header content
  const renderHeaderContent = useCallback(
    (
      icon: React.ReactNode,
      title: string | undefined,
      buttons: typeof currentButtons,
    ) => (
      <>
        {icon && (
          <>
            <Box className={styles.icon} testId={`${testId}-icon`}>
              {icon}
            </Box>
            <IconGradient />
          </>
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
                  key={`dynamic-${index}`}
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
      </>
    ),
    [styles, testId],
  );

  // Header content state for slider
  const headerSliderState = useMemo((): SliderContentState | undefined => {
    if (
      !headerState &&
      !currentIcon &&
      !currentTitle &&
      currentButtons.length === 0
    ) {
      return undefined;
    }

    // Create a unique ID based on the header content
    const id = `${currentTitle || 'header'}-${JSON.stringify(
      currentButtons?.map((b) => b.ariaLabel),
    )}`;

    return {
      id,
      content: renderHeaderContent(currentIcon, currentTitle, currentButtons),
    };
  }, [
    currentIcon,
    currentTitle,
    currentButtons,
    headerState,
    renderHeaderContent,
  ]);

  // Determine slide direction based on content change
  const slideDirection = useMemo(() => {
    if (!headerState || !headerState.title) return 'left';

    const currentTitle = headerState.title || '';
    const isEnteringHistory = currentTitle.includes('History');
    return isEnteringHistory ? 'left' : 'right';
  }, [headerState]);

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
  }, [display, shouldRender, isAnimatingOut]);

  if (!shouldRender) {
    return null;
  }

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
        <Slider
          contentState={headerSliderState}
          direction={slideDirection}
          duration={2000}
          containerStyle={{ flex: 1, display: 'flex', alignItems: 'center' }}
        />
        {/* Fixed button always visible outside the sliding area */}
        {fixedButton && (
          <IconButton
            variant="transparent"
            size="small"
            icon={fixedButton.icon}
            aria-label={fixedButton.ariaLabel}
            onClick={() => fixedButton.onClick()}
            testId={fixedButton.testId || `${testId}-fixed-button`}
            className={styles.buttonVisible}
            style={{
              ['--button-delay' as string]: '0ms',
            }}
          />
        )}
      </Flex>

      <Collapse isExpanded={display !== 'collapsed'}>
        <Box className={styles.content} testId={`${testId}-content`}>
          {children}
        </Box>
      </Collapse>
    </Flex>
  );
}

/**
 * AIChatLayout supports 4 layout states controlled by `display` and `variant` props:
 * 1. **Closed** (display='closed') - Component is completely hidden
 * 2. **Collapsed** (display='collapsed') - Compact lozenge with icon, title, and buttons (no content area)
 * 3. **Normal** (display='open', variant='normal') - Standard layout with header and content area (360px width)
 * 4. **Expanded** (display='open', variant='expanded') - Large layout with more space (480px width)
 *
 * The header content can be controlled via:
 * - `headerState` prop for dynamic content that can transition (icon, title, buttons)
 * - `fixedButton` prop for a button that maintains position (e.g., close button)
 * - Legacy props (`icon`, `title`, `buttons`) for backward compatibility
 *
 * Use `display` to control the visibility and layout state, and `variant` to control the size when open.
 * The `onCollapsedClick` callback is called when the collapsed lozenge is clicked.
 */
export const AIChatLayout = forwardRef(_AIChatLayout);
