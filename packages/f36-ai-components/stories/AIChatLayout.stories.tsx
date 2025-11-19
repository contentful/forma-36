import { Box, Button, Icon, Text } from '@contentful/f36-components';
import * as icons from '@contentful/f36-icons';
import tokens from '@contentful/f36-tokens';
import { action } from '@storybook/addon-actions';
import React, { useEffect, useState } from 'react';

import { AIChatHistory } from '../src/AIChatHistory/AIChatHistory';
import { AIChatInput } from '../src/AIChatInput/AIChatInput';
import { AIChatLayout } from '../src/AIChatLayout/AIChatLayout';
import { getStyles } from '../src/AIChatLayout/AIChatLayout.styles';
import { getAIIconGradientStyles } from '../src/AIIconGradients/AIIconGradients.styles';
import { AIChatMessage } from '../src/AIChatMessage/AIChatMessage';
import { AIChatSidePanel } from '../src/AIChatSidePanel/AIChatSidePanel';
import { Slider } from '../src/Slider/Slider';
import {
  mockChatMessages,
  mockHistoryGroups,
  mockThreads,
} from './utils/mockData';

export default {
  component: AIChatLayout,
  title: 'Components/AIChat/AIChatLayout',
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
    buttonsRight: {
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
  },
};

export const Default = ({
  buttonsRight,
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
  const { primaryGradientIconStyle } = getAIIconGradientStyles();

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
    id: 'default-header',
    icon: icon ? (
      <Icon as={icons[icon]} className={primaryGradientIconStyle} />
    ) : undefined,
    title: args.title,
    slideDirection: 'right' as const,
    buttonsRight: availableButtons.filter((button) =>
      buttonsRight?.includes(button.id),
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

Default.args = {
  title: 'Translation Agent',
  icon: 'TranslateIcon',
  buttonsRight: ['open', 'minimize', 'close', 'threads'],
  display: 'collapsed',
  content:
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
};

export const WithChangableHeader = ({ icon, title, variant }) => {
  const [isHistoryMode, setIsHistoryMode] = useState(false);

  const { primaryGradientIconStyle } = getAIIconGradientStyles();

  const threadsWithActions = mockThreads.map((thread) => ({
    ...thread,
    onThreadClick: action(`thread-${thread.id}-click`),
  }));

  const closeButton = {
    icon: <icons.XIcon />,
    onClick: action('close-chat'),
    display: true,
    ariaLabel: 'Close',
    testId: 'close-button',
  };

  const defaultHeader = {
    id: 'default-header',
    icon: icon ? (
      <Icon as={icons[icon]} className={primaryGradientIconStyle} />
    ) : undefined,
    title: title,
    slideDirection: 'right' as const,
    buttonsRight: [
      {
        icon: <icons.ClockIcon />,
        onClick: () => setIsHistoryMode(true),
        display: true,
        ariaLabel: 'View History',
        testId: 'history-button',
      },
    ],
    fixedButtonsRight: [closeButton],
  };

  const historyHeader = {
    id: 'history-header',
    icon: <icons.ClockCounterClockwiseIconIcon />,
    title: 'History',
    slideDirection: 'left' as const,
    buttonsLeft: [
      {
        icon: <icons.CaretLeftIcon />,
        onClick: () => setIsHistoryMode(false),
        display: true,
        ariaLabel: 'Back to Chat',
        testId: 'back-button',
      },
    ],
    fixedButtonsRight: [closeButton],
  };

  return (
    <AIChatLayout
      display="open"
      variant={variant}
      header={isHistoryMode ? historyHeader : defaultHeader}
      testId="chat-layout"
    >
      <Slider
        slideKey={isHistoryMode ? 'history' : 'chat'}
        direction={isHistoryMode ? 'left' : 'right'}
        duration={300}
      >
        {isHistoryMode ? (
          <AIChatSidePanel>
            <AIChatHistory
              threads={threadsWithActions}
              groups={
                mockHistoryGroups as [
                  (typeof mockHistoryGroups)[0],
                  (typeof mockHistoryGroups)[1],
                ]
              }
            />
          </AIChatSidePanel>
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
                onSubmit={() => {}}
                onStop={() => {}}
                isStreaming={false}
              />
            </div>
          </div>
        )}
      </Slider>
    </AIChatLayout>
  );
};

WithChangableHeader.args = {
  title: 'Translation Agent',
  icon: 'TranslateIcon',
  variant: 'normal',
};

WithChangableHeader.argTypes = {
  variant: { control: { disable: true } },
  display: { control: { disable: true } },
  buttonsRight: { control: { disable: true } },
  content: { control: { disable: true } },
};
