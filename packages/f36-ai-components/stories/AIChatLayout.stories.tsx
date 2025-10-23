import { Icon, Text } from '@contentful/f36-components';
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
AIChatLayout supports 3 layout states controlled by \`isOpen\` and \`type\` props:
1. **Closed** (isOpen=false) - Compact lozenge with icon, title, and buttons (no children)

2. **Normal** (isOpen=true, type='normal') - Standard layout with header and content area (360px width)

3. **Expanded** (isOpen=true, type='expanded') - Large layout with more space (480px width)

Use \`isOpen\` to control whether the layout is open or closed, and \`type\` to control the size when open.
The \`onChange\` callback is called when the open state should change.
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
    onOpen: { control: { disable: true } },
    className: { control: { disable: true } },
    testId: { control: { disable: true } },
    style: { control: { disable: true } },
  },
};

export const Basic = ({
  buttons,
  icon,
  isOpen: initialIsOpen,
  content,
  ...args
}) => {
  const [isOpen, setIsOpen] = useState(initialIsOpen);

  useEffect(() => {
    setIsOpen(initialIsOpen);
  }, [initialIsOpen]);

  const styles = getStyles({ isOpen });

  const availableButtons = [
    {
      id: 'threads',
      icon: (
        <icons.ClockCounterClockwiseIconIcon className={styles.buttonIcon} />
      ),
      onClick: action('view-threads'),
      display: isOpen === true,
      ariaLabel: 'View threads',
      testId: 'view-threads',
    },
    {
      id: 'open',
      icon: <icons.CaretUpIcon className={styles.buttonIcon} />,
      onClick: () => {
        action('open-chat')();
        setIsOpen(true);
      },
      display: isOpen === false,
      ariaLabel: 'Open chat',
      testId: 'open-button',
    },
    {
      id: 'minimize',
      icon: <icons.CaretDownIcon className={styles.buttonIcon} />,
      onClick: () => {
        action('minimize-chat')();
        setIsOpen(false);
      },
      display: isOpen === true,
      ariaLabel: 'Minimize chat',
      testId: 'minimize-button',
    },
    {
      id: 'close',
      icon: <icons.XIcon className={styles.buttonIcon} />,
      onClick: action('close-chat'),
      display: isOpen === true,
      ariaLabel: 'Close chat',
      testId: 'close-button',
    },
  ];

  return (
    <AIChatLayout
      {...args}
      isOpen={isOpen}
      onCollapsedClick={() => setIsOpen(true)}
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
  );
};

Basic.args = {
  title: 'Translation Agent',
  icon: 'TranslateIcon',
  buttons: ['open', 'minimize', 'close', 'threads'],
  isOpen: false,
  content:
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
};
