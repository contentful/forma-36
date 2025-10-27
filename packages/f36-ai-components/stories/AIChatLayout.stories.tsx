import { Text } from '@contentful/f36-components';
import { Box } from '@contentful/f36-core';
import {
  CaretUpIcon,
  ChatIcon,
  ClockIcon,
  MinusIcon,
  TranslateIcon,
  XIcon,
} from '@contentful/f36-icons';
import { action } from '@storybook/addon-actions';
import type { Meta, Story } from '@storybook/react/types-6-0';
import React from 'react';

import {
  AIChatLayout,
  type AIChatLayoutProps,
} from '../src/AIChatLayout/AIChatLayout';
import { getStyles } from '../src/AIChatLayout/AIChatLayout.styles';

export default {
  component: AIChatLayout,
  title: 'Components/AIChatLayout',
  parameters: {
    docs: {
      description: {
        component: `
AIChatLayout supports 3 layout types with standard button behavior:
1. **Collapsed** - Compact lozenge with icon, title, and buttons (no children)
   - History button: Hidden (not available when collapsed)
   - Collapse/Uncollapse: Shows expand button
   - Close button: Hidden (not available when collapsed)

2. **Default (Normal)** - Standard layout with header and content area (360px width)
   - History button: Available
   - Collapse/Uncollapse: Shows collapse button
   - Close button: Available

3. **Expanded** - Large layout with more space (480px width)
   - History button: Available
   - Collapse/Uncollapse: Hidden (not available when expanded)
   - Close button: Available
        `,
      },
    },
  },
  argTypes: {
    type: {
      control: 'select',
      options: ['collapsed', 'normal', 'expanded'],
    },
  },
} as Meta;

// 1. Collapsed
export const Collapsed: Story<AIChatLayoutProps> = (args) => {
  const styles = getStyles();

  return (
    <AIChatLayout
      {...args}
      type="collapsed"
      icon={<TranslateIcon className={styles.aiGradientIcon} />}
      title="Translation Agent"
      buttons={[
        {
          icon: <CaretUpIcon className={styles.buttonIcon} />,
          onClick: (layout) => layout.onExpand?.(),
          display: (layout) => layout.type !== 'expanded',
          ariaLabel: 'Expand chat',
          testId: 'expand-button',
        },
      ]}
      onExpand={action('expand-from-collapsed')}
      onClose={action('close-from-collapsed')}
    >
      <Box>
        <Text>
          🚫 This content is completely HIDDEN when collapsed! Only the lozenge
          with icon, title, and buttons is visible.
        </Text>
        <Box as="ul" paddingLeft="spacingL">
          <Box as="li">
            <Text>This bullet point is hidden</Text>
          </Box>
          <Box as="li">
            <Text>This bullet point is also hidden</Text>
          </Box>
          <Box as="li">
            <Text>All children are hidden in collapsed mode</Text>
          </Box>
        </Box>
      </Box>
    </AIChatLayout>
  );
};

// 2. Default (Normal Layout)
export const Default: Story<AIChatLayoutProps> = (args) => {
  return (
    <AIChatLayout
      {...args}
      type="normal"
      icon={<ChatIcon />}
      title="AI Assistant"
      buttons={[
        // History button - only available when not collapsed
        {
          icon: <ClockIcon />,
          onClick: () => {
            /* Handle history */
          },
          display: (layout) => layout.type !== 'collapsed',
          ariaLabel: 'View history',
          testId: 'history-button',
        },
        // Collapse/Uncollapse button - only available when not expanded
        {
          icon: <MinusIcon />,
          onClick: (layout) => layout.onCollapse?.(),
          display: (layout) => layout.type !== 'expanded',
          ariaLabel: 'Collapse chat',
          testId: 'collapse-button',
        },
        // Close button - only available when not collapsed
        {
          icon: <XIcon />,
          onClick: (layout) => layout.onClose?.(),
          display: (layout) => layout.type !== 'collapsed',
          ariaLabel: 'Close chat',
          testId: 'close-button',
        },
      ]}
      onCollapse={action('collapse-requested')}
      onExpand={action('expand-requested')}
    >
      <Box>
        <Text marginBottom="spacingM">Normal layout (360px width)</Text>
        <Box as="ul" paddingLeft="spacingL">
          <Box as="li">
            <Text>Standard chat interface</Text>
          </Box>
          <Box as="li">
            <Text>Good for most use cases</Text>
          </Box>
          <Box as="li">
            <Text>Balanced size and content</Text>
          </Box>
          <Box as="li">
            <Text>Layout event handlers passed to child components</Text>
          </Box>
        </Box>
      </Box>
    </AIChatLayout>
  );
};

// 3. Expanded
export const Expanded: Story<AIChatLayoutProps> = (args) => {
  return (
    <AIChatLayout
      {...args}
      type="expanded"
      icon={<ChatIcon />}
      title="AI Assistant - Expanded"
      buttons={[
        // History button - only available when not collapsed
        {
          icon: <ClockIcon />,
          onClick: () => {
            /* Handle history */
          },
          display: (layout) => layout.type !== 'collapsed',
          ariaLabel: 'View history',
          testId: 'history-button',
        },
        // Collapse/Uncollapse button - only available when not expanded (hidden in expanded)
        {
          icon: <MinusIcon />,
          onClick: (layout) => layout.onCollapse?.(),
          display: (layout) => layout.type !== 'expanded',
          ariaLabel: 'Collapse chat',
          testId: 'collapse-button',
        },
        // Close button - only available when not collapsed
        {
          icon: <XIcon />,
          onClick: (layout) => layout.onClose?.(),
          display: (layout) => layout.type !== 'collapsed',
          ariaLabel: 'Close chat',
          testId: 'close-button',
        },
      ]}
      onCollapse={action('collapse-from-expanded')}
    >
      <Box>
        <Text marginBottom="spacingM">Expanded layout (480px width)</Text>
        <Box as="ul" paddingLeft="spacingL">
          <Box as="li">
            <Text>Large chat interface</Text>
          </Box>
          <Box as="li">
            <Text>More room for conversation history</Text>
          </Box>
          <Box as="li">
            <Text>Better visibility of chat messages</Text>
          </Box>
          <Box as="li">
            <Text>Enhanced user experience for complex interactions</Text>
          </Box>
          <Box as="li">
            <Text>Layout event handlers passed to child components</Text>
          </Box>
        </Box>
      </Box>
    </AIChatLayout>
  );
};

// 4. With Default Handlers (no event handlers provided)
export const WithDefaultHandlers: Story<AIChatLayoutProps> = (args) => {
  return (
    <AIChatLayout
      {...args}
      type="normal"
      icon={<ChatIcon />}
      title="AI Assistant - Default Behavior"
      buttons={[
        // History button - only available when not collapsed
        {
          icon: <ClockIcon />,
          onClick: () => {
            /* Handle history */
          },
          display: (layout) => layout.type !== 'collapsed',
          ariaLabel: 'View history',
          testId: 'history-button',
        },
        // Collapse/Uncollapse button - only available when not expanded
        {
          icon: <MinusIcon />,
          onClick: (layout) => layout.onCollapse?.(),
          display: (layout) => layout.type !== 'expanded',
          ariaLabel: 'Collapse chat',
          testId: 'collapse-button',
        },
        // Close button - only available when not collapsed
        {
          icon: <XIcon />,
          onClick: (layout) => layout.onClose?.(),
          display: (layout) => layout.type !== 'collapsed',
          ariaLabel: 'Close chat',
          testId: 'close-button',
        },
      ]}
      // No event handlers provided - will use defaults
    >
      <Box>
        <Text marginBottom="spacingM">
          Default handlers demo (no props provided)
        </Text>
        <Box as="ul" paddingLeft="spacingL">
          <Box as="li">
            <Text>Click collapse/close to see default behavior</Text>
          </Box>
          <Box as="li">
            <Text>
              Layout will change to &apos;collapsed&apos; automatically
            </Text>
          </Box>
          <Box as="li">
            <Text>Uses internal state management</Text>
          </Box>
        </Box>
      </Box>
    </AIChatLayout>
  );
};
