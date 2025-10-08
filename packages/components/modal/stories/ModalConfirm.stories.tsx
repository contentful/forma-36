import React, { useState } from 'react';
import type { StoryObj, Meta } from '@storybook/react-vite';
import { action } from 'storybook/actions';
import { Paragraph, Text } from '@contentful/f36-typography';
import {
  ModalConfirm,
  type ModalConfirmProps,
} from '../src/ModalConfirm/ModalConfirm';
import { Button } from '@contentful/f36-button';
import { TextInput } from '@contentful/f36-forms';

export default {
  title: 'Components/Modal/ModalConfirm',
  component: ModalConfirm,
  parameters: {
    propTypes: [ModalConfirm['__docgenInfo']],
  },
  decorators: [
    (Story) => (
      <div style={{ width: '1200px', height: '800px' }}>{Story()}</div>
    ),
  ],
  argTypes: {
    children: { control: { disable: true } },
    className: { control: { disable: true } },
    testId: { control: { disable: true } },
    size: {
      control: {
        type: 'select',
        options: ['small', 'medium', 'large', '300px', '1500px'],
      },
    },
    intent: {
      control: {
        type: 'select',
        options: ['negative', 'positive', 'primary'],
      },
    },
    secondaryIntent: {
      control: {
        type: 'select',
        options: [
          'negative',
          'positive',
          'primary',
          'transparent',
          'secondary',
        ],
      },
    },
  },
} as Meta;

function SimpleDemo(props: ModalConfirmProps) {
  const [isShown, setShown] = useState(true);
  return (
    <div>
      <Button variant="negative" onClick={() => setShown(true)}>
        Delete something
      </Button>
      <ModalConfirm
        {...props}
        isShown={isShown}
        onCancel={() => {
          setShown(false);
          action('onCancel')();
        }}
        onConfirm={() => {
          setShown(false);
          action('onConfirm')();
        }}
      >
        <Text>You are about to delete SOMETHING. Think twice!</Text>
      </ModalConfirm>
    </div>
  );
}

export const Basic: StoryObj<ModalConfirmProps> = {
  render: (props) => {
    return <SimpleDemo {...props} />;
  },
};

export function ComplexStory(props: ModalConfirmProps) {
  const [isShown, setShown] = useState(true);
  const [isLoading, setLoading] = useState(false);
  const [repeat, setRepeat] = useState('');

  return (
    <div>
      <Button variant="negative" onClick={() => setShown(true)}>
        Delete something
      </Button>
      <ModalConfirm
        {...props}
        isShown={isShown}
        isConfirmDisabled={repeat !== 'unlock'}
        isConfirmLoading={isLoading}
        onCancel={() => {
          setShown(false);
          action('onCancel')();
        }}
        onConfirm={() => {
          setLoading(true);
          setTimeout(() => {
            setLoading(false);
            setShown(false);
            setRepeat('');
          }, 1500);
          action('onConfirm')();
        }}
      >
        <Paragraph>
          Type <strong>unlock</strong> to allow confirming this modal
        </Paragraph>
        <TextInput
          value={repeat}
          onChange={(e) => setRepeat((e.target as HTMLInputElement).value)}
        />
      </ModalConfirm>
    </div>
  );
}
