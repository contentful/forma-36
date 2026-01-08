import { Caption, Flex } from '@contentful/f36-components';
import type { IconProps } from '@contentful/f36-icons';
import { cx } from 'emotion';
import React, { ComponentType } from 'react';
import { getStyles } from './AIChatSuggestionPill.styles';

export interface AIChatSuggestionPillProps {
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
  /**
   * Additional CSS class name
   */
  className?: string;
  /**
   * Test ID for testing purposes
   */
  testId?: string;
}

export const AIChatSuggestionPill = ({
  icon: IconComponent,
  text,
  onClick,
  isActive = false,
  className,
  testId = 'cf-ui-ai-chat-suggestion-pill',
}: AIChatSuggestionPillProps) => {
  const styles = getStyles({ isActive });

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
    >
      <Flex alignItems="center" gap="spacingXs">
        <IconComponent size="small" className={styles.suggestionIcon} />
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
