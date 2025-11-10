import { Button, Icon, Text } from '@contentful/f36-components';
import * as icons from '@contentful/f36-icons';
import { action } from '@storybook/addon-actions';
import React, { useEffect, useState } from 'react';

import { AIChatLayout } from '../src/AIChatLayout/AIChatLayout';
import { getStyles } from '../src/AIChatLayout/AIChatLayout.styles';
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
        <Text>{content}</Text>
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
    icon: <icons.ClockIcon />,
    title: 'AI Copilot History',
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
            <div style={{ padding: '16px' }}>
              <Text as="h3">History Content</Text>
              <Text>Previous conversations and interactions...</Text>
            </div>
          ) : (
            <div style={{ padding: '16px' }}>
              <Text as="h3">Chat Content</Text>
              <Text>Current conversation with the Translation Agent...</Text>
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
