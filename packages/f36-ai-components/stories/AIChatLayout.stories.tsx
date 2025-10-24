import { Button, Icon, Text } from '@contentful/f36-components';
import * as icons from '@contentful/f36-icons';
import { action } from '@storybook/addon-actions';
import React, { useEffect, useState } from 'react';

import { AIChatLayout } from '../src/AIChatLayout/AIChatLayout';
import { getStyles } from '../src/AIChatLayout/AIChatLayout.styles';

export default {
  component: AIChatLayout,
  title: 'Components/AIChatLayout',
  parameters: {
    docs: {
      description: {
        component: `
AIChatLayout supports 4 layout states controlled by \`display\` and \`type\` props:
1. **Closed** (display='closed') - Component is completely hidden

2. **Collapsed** (display='collapsed') - Compact lozenge with icon, title, and buttons (no content area)

3. **Normal** (display='open', type='normal') - Standard layout with header and content area (360px width)

4. **Expanded** (display='open', type='expanded') - Large layout with more space (480px width)

Use \`display\` to control the visibility and layout state, and \`type\` to control the size when open.
The \`onCollapsedClick\` callback is called when the collapsed lozenge is clicked.
        `,
      },
      source: {
        type: 'code',
      },
    },
  },
  argTypes: {
    type: {
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

  useEffect(() => {
    setDisplay(initialDisplay);
  }, [initialDisplay]);

  const styles = getStyles({ display });

  const availableButtons = [
    {
      id: 'threads',
      icon: (
        <icons.ClockCounterClockwiseIconIcon className={styles.buttonIcon} />
      ),
      onClick: action('view-threads'),
      display: display === 'open',
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
      display: display === 'collapsed',
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
      display: display === 'open',
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
      display: display === 'open',
      ariaLabel: 'Close chat',
      testId: 'close-button',
    },
  ];

  const [showButton, setShowButton] = useState(false);

  const onButtonClick = () => {
    setShowButton(false);
    setDisplay('collapsed');
  };

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
      {showButton && <Button onClick={onButtonClick}>Show component</Button>}
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
