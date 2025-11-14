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
import { Slider } from '../Slider';
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

export interface AIChatLayoutHeader {
  /**
   * Unique identifier for the header state (when this changes, the header content will transition via the slider)
   */
  id: string;
  /**
   * Icon to display in the layout header
   */
  icon?: React.ReactNode;
  /**
   * Title for the layout header
   */
  title?: string;
  /**
   * Array of action buttons to display before the icon & title
   */
  buttonsLeft?: AIChatLayoutButton[];
  /**
   * Array of action buttons to display after the icon & title
   */
  buttonsRight?: AIChatLayoutButton[];
  /**
   * Array of fixed buttons that maintain their position outside the sliding area
   * These buttons will always be positioned at the end of the header
   */
  fixedButtonsRight?: AIChatLayoutButton[];
  /**
   * Direction for the header content transition animation
   * @default 'right'
   */
  slideDirection?: 'left' | 'right';
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
   * Current header configuration
   */
  header?: AIChatLayoutHeader;
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
    header,
    children,
    className,
    testId = 'cf-ui-ai-chat-layout',
    ...otherProps
  } = props;

  const currentIcon = header?.icon;
  const currentTitle = header?.title;

  const currentButtonsLeft = useMemo(
    () => header?.buttonsLeft ?? [],
    [header?.buttonsLeft],
  );
  const currentButtonsRight = useMemo(
    () => header?.buttonsRight ?? [],
    [header?.buttonsRight],
  );
  const currentFixedButtons = useMemo(
    () => header?.fixedButtonsRight ?? [],
    [header?.fixedButtonsRight],
  );

  const [isAnimatingOut, setIsAnimatingOut] = useState(false);
  const [shouldRender, setShouldRender] = useState(display !== 'closed');

  const hasLeftButtonGroup = currentButtonsLeft.length > 0;

  const styles = getStyles({
    display,
    variant,
    isAnimatingOut,
    hasLeftButtonGroup,
  });

  const renderButtonGroup = useCallback(
    (buttons: AIChatLayoutButton[], testIdSuffix: string) => {
      if (!buttons.length) return null;

      return (
        <Flex
          className={styles.buttonGroup}
          testId={`${testId}-${testIdSuffix}`}
        >
          {buttons.map((button, index) => {
            const delayIncrement = index * 30;
            const delay = button.display
              ? 200 + delayIncrement
              : delayIncrement;

            return (
              <IconButton
                key={`${testIdSuffix}-${index}`}
                variant="transparent"
                size="small"
                icon={button.icon}
                aria-label={button.ariaLabel}
                onClick={() => button.onClick()}
                testId={button.testId || `${testId}-${testIdSuffix}-${index}`}
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
      );
    },
    [styles, testId],
  );

  const renderHeaderContentForSlider = useCallback(
    (
      icon: React.ReactNode,
      title: string | undefined,
      buttonsLeft: AIChatLayoutButton[],
      buttonsRight: AIChatLayoutButton[],
    ) => {
      return (
        <>
          {renderButtonGroup(buttonsLeft, 'buttons-left')}

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

          {renderButtonGroup(buttonsRight, 'buttons-right')}
        </>
      );
    },
    [styles, testId, renderButtonGroup],
  );

  const headerSliderKey = header?.id;

  const headerSliderContent = useMemo(() => {
    if (!headerSliderKey) {
      return null;
    }

    return renderHeaderContentForSlider(
      currentIcon,
      currentTitle,
      currentButtonsLeft,
      currentButtonsRight,
    );
  }, [
    headerSliderKey,
    currentIcon,
    currentTitle,
    currentButtonsLeft,
    currentButtonsRight,
    renderHeaderContentForSlider,
  ]);

  const slideDirection = useMemo(() => {
    return header?.slideDirection ?? 'right';
  }, [header?.slideDirection]);

  useEffect(() => {
    if (display === 'closed') {
      if (shouldRender && !isAnimatingOut) {
        setIsAnimatingOut(true);

        const timer = setTimeout(() => {
          setShouldRender(false);
          setIsAnimatingOut(false);
        }, 200);

        return () => {
          clearTimeout(timer);
        };
      }
    } else {
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
          slideKey={headerSliderKey}
          direction={slideDirection}
          duration={300}
          style={{ flex: 1, display: 'flex', alignItems: 'center' }}
        >
          {headerSliderContent}
        </Slider>
        {currentFixedButtons.length > 0 &&
          renderButtonGroup(currentFixedButtons, 'fixed-buttons')}
      </Flex>

      <Collapse
        isExpanded={display !== 'collapsed'}
        className={styles.contentWrapper}
      >
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
 * The header content is controlled via the `header` prop which includes:
 * - Dynamic content that can transition via a slider (icon, title, buttonsLeft, buttonsRight)
 * - Fixed buttons that maintain position outside the sliding area (fixedButtonsRight)
 *
 * Use `display` to control the visibility and layout state, and `variant` to control the size when open.
 * The `onCollapsedClick` callback is called when the collapsed lozenge is clicked.
 */
export const AIChatLayout = forwardRef(_AIChatLayout);
