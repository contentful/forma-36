import { Caption, Flex } from '@contentful/f36-components';
import { type CommonProps } from '@contentful/f36-core';
import type { IconProps } from '@contentful/f36-icons';
import { cx } from 'emotion';
import React, { ComponentType, useEffect, useRef, useState } from 'react';
import { getStyles } from './AIChatSuggestionPill.styles';

export interface AIChatSuggestionPillProps extends CommonProps {
  /**
   * The icon component to display in the pill
   */
  icon: ComponentType<IconProps>;
  /**
   * The text content to display in the pill
   */
  text: string;
  /**
   * Callback when the pill is clicked
   */
  onClick?: () => void;
  /**
   * Whether the pill is in an active state
   * @default false
   */
  isActive?: boolean;
}

export const AIChatSuggestionPill = ({
  icon: IconComponent,
  text,
  onClick,
  isActive = false,
  className,
  testId = 'cf-ui-ai-chat-suggestion-pill',
  ...otherProps
}: AIChatSuggestionPillProps) => {
  const [isTransitioning, setIsTransitioning] = useState(false);
  const currentIconRef = useRef(IconComponent);
  const styles = getStyles({ isActive, isTransitioning });

  useEffect(() => {
    if (currentIconRef.current !== IconComponent) {
      setIsTransitioning(true);
      const timer = setTimeout(() => {
        currentIconRef.current = IconComponent;
        setIsTransitioning(false);
      }, 200);
      return () => clearTimeout(timer);
    }
  }, [IconComponent]);

  const DisplayIcon = currentIconRef.current;

  const handleKeyDown = (event: React.KeyboardEvent) => {
    if (event.key === 'Enter' || event.key === ' ') {
      event.preventDefault();
      onClick?.();
    }
  };

  return (
    <button
      type="button"
      className={cx(styles.suggestionPill, className)}
      onClick={onClick}
      onKeyDown={handleKeyDown}
      data-test-id={testId}
      {...otherProps}
    >
      <Flex alignItems="center" gap="spacingXs">
        <DisplayIcon
          size="small"
          className={styles.suggestionIcon}
          isActive={false}
        />
        <Caption
          fontWeight="fontWeightMedium"
          className={styles.suggestionText}
        >
          {text}
        </Caption>
      </Flex>
    </button>
  );
};
