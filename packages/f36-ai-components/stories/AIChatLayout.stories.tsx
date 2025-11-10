import { Box, Button, Icon, Text } from '@contentful/f36-components';
import * as icons from '@contentful/f36-icons';
import { action } from '@storybook/addon-actions';
import React, { useEffect, useState } from 'react';

import { AIChatHistory } from '../src/AIChatHistory/AIChatHistory';
import { AIChatInput } from '../src/AIChatInput/AIChatInput';
import { AIChatLayout } from '../src/AIChatLayout/AIChatLayout';
import { getStyles } from '../src/AIChatLayout/AIChatLayout.styles';
import { AIChatMessage } from '../src/AIChatMessage/AIChatMessage';
import { Slider } from '../src/Slider/Slider';

export default {
  component: AIChatLayout,
  title: 'Components/AIChatLayout',
  parameters: {
    docs: {
      source: {
        type: 'code',
      },
    },
  },
  argTypes: {
    variant: {
      control: 'select',
      options: ['normal', 'expanded'],
    },
    display: {
      control: 'select',
      options: ['closed', 'collapsed', 'open'],
    },
    buttons: {
      type: 'string',
      control: 'check',
      options: ['open', 'minimize', 'close', 'threads'],
    },
    icon: {
      type: 'string',
      control: 'select',
      options: ['', ...Object.keys(icons)],
    },
    content: {
      type: 'string',
    },
    children: { control: { disable: true } },
    onCollapsedClick: { control: { disable: true } },
    className: { control: { disable: true } },
    testId: { control: { disable: true } },
    style: { control: { disable: true } },
  },
};

export const Basic = ({
  buttons,
  icon,
  display: initialDisplay,
  content,
  ...args
}) => {
  const [display, setDisplay] = useState(initialDisplay);
  const [showButton, setShowButton] = useState(initialDisplay === 'closed');

  useEffect(() => {
    setDisplay(initialDisplay);
    setShowButton(initialDisplay === 'closed');
  }, [initialDisplay]);

  const onButtonClick = () => {
    setShowButton(false);
    setDisplay('collapsed');
  };

  const styles = getStyles({ display });

  const isCollapsed = display === 'collapsed';

  const availableButtons = [
    {
      id: 'threads',
      icon: (
        <icons.ClockCounterClockwiseIconIcon className={styles.buttonIcon} />
      ),
      onClick: action('view-threads'),
      display: !isCollapsed,
      ariaLabel: 'View threads',
      testId: 'view-threads',
    },
    {
      id: 'open',
      icon: <icons.CaretUpIcon className={styles.buttonIcon} />,
      onClick: () => {
        action('open-chat')();
        setDisplay('open');
      },
      display: isCollapsed,
      ariaLabel: 'Open chat',
      testId: 'open-button',
    },
    {
      id: 'minimize',
      icon: <icons.CaretDownIcon className={styles.buttonIcon} />,
      onClick: () => {
        action('minimize-chat')();
        setDisplay('collapsed');
      },
      display: !isCollapsed,
      ariaLabel: 'Minimize chat',
      testId: 'minimize-button',
    },
    {
      id: 'close',
      icon: <icons.XIcon className={styles.buttonIcon} />,
      onClick: () => {
        action('close-chat');
        setDisplay('closed');
        setShowButton(true);
      },
      display: !isCollapsed,
      ariaLabel: 'Close chat',
      testId: 'close-button',
    },
  ];

  return (
    <>
      <AIChatLayout
        {...args}
        display={display}
        onCollapsedClick={() => setDisplay('open')}
        icon={
          icon ? (
            <Icon as={icons[icon]} className={styles.aiGradientIcon} />
          ) : null
        }
        buttons={availableButtons.filter((button) =>
          buttons?.includes(button.id),
        )}
      >
        <Box style={{ padding: '20px' }}>
          <Text>{content}</Text>
        </Box>
      </AIChatLayout>
      {showButton && (
        <Button
          onClick={onButtonClick}
          style={{ position: 'absolute', top: '50%', left: '50%' }}
        >
          Show component
        </Button>
      )}
    </>
  );
};

Basic.args = {
  title: 'Translation Agent',
  icon: 'TranslateIcon',
  buttons: ['open', 'minimize', 'close', 'threads'],
  display: 'collapsed',
  content:
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
};

// New HeaderState Transition Story
export const HeaderStateTransition = () => {
  const [isHistoryMode, setIsHistoryMode] = useState(false);

  const styles = getStyles({ display: 'open' });

  // Define the default chat state
  const defaultHeaderState = {
    icon: <Icon as={icons.TranslateIcon} className={styles.aiGradientIcon} />,
    title: 'Translation Agent',
    buttons: [
      {
        icon: <icons.ClockIcon />,
        onClick: () => setIsHistoryMode(true),
        display: true,
        ariaLabel: 'View History',
        testId: 'history-button',
      },
    ],
  };

  // Define the history state
  const historyHeaderState = {
    icon: <icons.ClockCounterClockwiseIconIcon />,
    title: 'History',
    buttonsStart: [
      {
        icon: <icons.CaretLeftIcon />,
        onClick: () => setIsHistoryMode(false),
        display: true,
        ariaLabel: 'Back to Chat',
        testId: 'back-button',
      },
    ],
  };

  // Fixed close button that maintains position
  const closeButton = {
    icon: <icons.XIcon />,
    onClick: action('close-chat'),
    display: true,
    ariaLabel: 'Close',
    testId: 'close-button',
  };

  // Mock threads for history component
  const mockThreads = [
    {
      id: '1',
      title: 'Translate marketing copy',
      lastActivity: new Date('2024-11-09T14:30:00'),
      onThreadClick: action('thread-1-click'),
      status: 'completed',
      group: 'recent',
    },
    {
      id: '2',
      title: 'Help with Spanish grammar',
      lastActivity: new Date('2024-11-08T09:15:00'),
      onThreadClick: action('thread-2-click'),
      status: 'in-progress',
      group: 'recent',
    },
    {
      id: '3',
      title: 'Translate technical documentation',
      lastActivity: new Date('2024-11-07T16:45:00'),
      onThreadClick: action('thread-3-click'),
      status: 'completed',
      group: 'older',
    },
  ];

  const historyGroups = [
    {
      id: 'recent',
      label: 'Recent',
      icon: <icons.ClockIcon />,
      filter: (thread) => thread.group === 'recent',
    },
    {
      id: 'older',
      label: 'Older',
      icon: <icons.FileIcon />,
      filter: (thread) => thread.group === 'older',
    },
  ];

  return (
    <AIChatLayout
      display="open"
      variant="normal"
      headerState={isHistoryMode ? historyHeaderState : defaultHeaderState}
      fixedButton={closeButton}
      testId="chat-layout"
    >
      <Slider
        contentState={{
          id: isHistoryMode ? 'history' : 'chat',
          content: isHistoryMode ? (
            <div
              style={{
                width: '100%',
                height: '100%',
                display: 'flex',
                flexDirection: 'column',
                padding: '0px 10px',
              }}
            >
              <AIChatHistory
                threads={mockThreads}
                groups={
                  historyGroups as [
                    (typeof historyGroups)[0],
                    (typeof historyGroups)[1],
                  ]
                }
              />
            </div>
          ) : (
            <div
              style={{
                width: '100%',
                height: '100%',
                display: 'flex',
                flexDirection: 'column',
                overflow: 'hidden',
              }}
            >
              <div
                style={{
                  flex: 1,
                  overflowY: 'auto',
                  display: 'flex',
                  flexDirection: 'column',
                  padding: '8px',
                }}
              >
                <AIChatMessage
                  authorRole="user"
                  content="Can you help me translate this marketing copy from English to Spanish? I want to make sure the tone stays professional but friendly."
                />
                <AIChatMessage
                  authorRole="assistant"
                  content="I'd be happy to help you translate your marketing copy from English to Spanish while maintaining a professional yet friendly tone. Please share the text you'd like me to translate, and I'll ensure it captures the right nuance for your target audience.

Here are a few things I'll consider:
- **Cultural context** - Adapting expressions that work well in Spanish-speaking markets
- **Tone consistency** - Maintaining the balance between professionalism and friendliness
- **Marketing effectiveness** - Using persuasive language that resonates with Spanish speakers

Go ahead and paste your content!"
                />
                <AIChatMessage
                  authorRole="user"
                  content="Here's the text: 'Transform your business with our cutting-edge solutions. Join thousands of satisfied customers who trust us to deliver results.'"
                />
                <AIChatMessage
                  authorRole="assistant"
                  content="Here's a professional yet friendly Spanish translation:

**'Transforma tu negocio con nuestras soluciones innovadoras. Únete a miles de clientes satisfechos que confían en nosotros para obtener resultados.'**

Key translation choices:
- 'Transforma' (transform) - direct and action-oriented
- 'soluciones innovadoras' (innovative solutions) - sounds more natural than 'de vanguardia'
- 'Únete' (join) - friendly and inviting
- 'confían en nosotros' (trust us) - builds credibility

This version maintains the professional tone while feeling warm and approachable in Spanish."
                />
              </div>
              <div
                style={{
                  padding: '8px',
                }}
              >
                <AIChatInput
                  placeholder="Type your message here..."
                  onSubmit={(editor) =>
                    action('submit-message')(editor.getHTML())
                  }
                  onStop={() => action('stop-generation')()}
                  isStreaming={false}
                />
              </div>
            </div>
          ),
        }}
        direction={isHistoryMode ? 'left' : 'right'}
        duration={300}
      />
    </AIChatLayout>
  );
};

// New story to demonstrate button positioning
export const ButtonPositioning = () => {
  const styles = getStyles({ display: 'open' });

  const headerState = {
    icon: <Icon as={icons.TranslateIcon} className={styles.aiGradientIcon} />,
    title: 'Translation Agent',
    buttonsStart: [
      {
        icon: <icons.ArrowLeftIcon />,
        onClick: action('back'),
        display: true,
        ariaLabel: 'Back',
        testId: 'back-button',
      },
      {
        icon: <icons.ListIcon />,
        onClick: action('menu'),
        display: true,
        ariaLabel: 'Menu',
        testId: 'menu-button',
      },
    ],
    buttonsEnd: [
      {
        icon: <icons.ClockIcon />,
        onClick: action('history'),
        display: true,
        ariaLabel: 'View History',
        testId: 'history-button',
      },
      {
        icon: <icons.GearSixIcon />,
        onClick: action('settings'),
        display: true,
        ariaLabel: 'Settings',
        testId: 'settings-button',
      },
    ],
  };

  return (
    <AIChatLayout
      display="open"
      variant="normal"
      headerState={headerState}
      testId="chat-layout"
    >
      <div style={{ padding: '16px' }}>
        <Text as="h3">Button Positioning Demo</Text>
        <Text>
          This example shows buttons positioned before (back, menu) and after
          (history, settings) the icon & title. The layout is: [Back] [Menu]
          [Icon] [Title] [History] [Settings]
        </Text>
      </div>
    </AIChatLayout>
  );
};
