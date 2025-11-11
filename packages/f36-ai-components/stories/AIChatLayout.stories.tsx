import { Box, Button, Icon, Text } from '@contentful/f36-components';
import * as icons from '@contentful/f36-icons';
import tokens from '@contentful/f36-tokens';
import { action } from '@storybook/addon-actions';
import React, { useEffect, useState } from 'react';

import { AIChatHistory } from '../src/AIChatHistory/AIChatHistory';
import { AIChatInput } from '../src/AIChatInput/AIChatInput';
import { AIChatLayout } from '../src/AIChatLayout/AIChatLayout';
import { getStyles } from '../src/AIChatLayout/AIChatLayout.styles';
import { AIChatMessage } from '../src/AIChatMessage/AIChatMessage';
import { Slider } from '../src/Slider/Slider';
import {
  mockChatMessages,
  mockHistoryGroups,
  mockThreads,
} from './utils/mockData';

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
    buttonsEnd: {
      type: 'string',
      control: 'check',
      options: ['open', 'minimize', 'close', 'threads'],
    },
    icon: {
      type: 'string',
      control: 'select',
      options: ['', ...Object.keys(icons)],
    },
    title: {
      type: 'string',
      control: 'text',
    },
    content: {
      type: 'string',
    },
    children: { control: { disable: true } },
    onCollapsedClick: { control: { disable: true } },
    className: { control: { disable: true } },
    testId: { control: { disable: true } },
    style: { control: { disable: true } },
    header: { control: { disable: true } },
    fixedButton: { control: { disable: true } },
  },
};

export const Basic = ({
  buttonsEnd,
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

  const header = {
    icon: icon ? (
      <Icon as={icons[icon]} className={styles.aiGradientIcon} />
    ) : undefined,
    title: args.title,
    buttonsEnd: availableButtons.filter((button) =>
      buttonsEnd?.includes(button.id),
    ),
  };

  return (
    <>
      <AIChatLayout
        {...args}
        display={display}
        onCollapsedClick={() => setDisplay('open')}
        header={header}
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
  buttonsEnd: ['open', 'minimize', 'close', 'threads'],
  display: 'collapsed',
  content:
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
};

// New Header Transition Story
export const HeaderTransition = () => {
  const [isHistoryMode, setIsHistoryMode] = useState(false);

  const styles = getStyles({ display: 'open' });

  // Define the default chat state
  const defaultHeader = {
    icon: <Icon as={icons.TranslateIcon} className={styles.aiGradientIcon} />,
    title: 'Translation Agent',
    buttonsEnd: [
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
  const historyHeader = {
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
  // Using imported mock data

  return (
    <AIChatLayout
      display="open"
      variant="normal"
      header={isHistoryMode ? historyHeader : defaultHeader}
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
                  mockHistoryGroups as [
                    (typeof mockHistoryGroups)[0],
                    (typeof mockHistoryGroups)[1],
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
                  padding: tokens.spacingXs,
                }}
              >
                {mockChatMessages.map((message, index) => (
                  <AIChatMessage
                    key={index}
                    authorRole={message.authorRole}
                    content={message.content}
                  />
                ))}
              </div>
              <div
                style={{
                  padding: tokens.spacingXs,
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

  const header = {
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
      header={header}
      testId="chat-layout"
    >
      <div style={{ padding: tokens.spacingM }}>
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
