import React, { useState } from 'react';
import type { Meta, Story } from '@storybook/react/types-6-0';
import { action } from '@storybook/addon-actions';
import { Paragraph } from '@contentful/f36-typography';
import { ModalConfirm, ModalConfirmProps } from './ModalConfirm';
import { Button } from '../../Button';

import { TextInput } from '../../TextInput';

export default {
  title: 'Components/Modal/ModalConfirm',
  component: ModalConfirm,
  parameters: {
    propTypes: [ModalConfirm['__docgenInfo']],
  },
  decorators: [
    // eslint-disable-next-line react/display-name
    (storyFn) => (
      <div style={{ width: '1200px', height: '800px' }}>{storyFn()}</div>
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
        options: ['negative', 'positive', 'primary', 'muted'],
      },
    },
  },
} as Meta;

function SimpleDemo(props: ModalConfirmProps) {
  const [isShown, setShown] = useState(true);
  return (
    <div>
      <Button buttonType="negative" onClick={() => setShown(true)}>
        Delete something
      </Button>
      <ModalConfirm
        isShown={isShown}
        {...props}
        onCancel={() => {
          setShown(false);
          action('onCancel')();
        }}
        onConfirm={() => {
          setShown(false);
          action('onConfirm')();
        }}
        onSecondary={() => {
          setShown(false);
          action('onSecondary')();
        }}
      >
        <div>You are about to delete SOMETHING. Think twice!</div>
      </ModalConfirm>
    </div>
  );
}

export const Default: Story<ModalConfirmProps> = (props) => {
  return <SimpleDemo {...props} />;
};

export const RightButtons: Story<ModalConfirmProps> = (props) => {
  return <SimpleDemo {...props} />;
};

RightButtons.args = {
  modalControlsProps: {
    position: 'right',
  },
};

export function ComplexStory(props: ModalConfirmProps) {
  const [isShown, setShown] = useState(true);
  const [isLoading, setLoading] = useState(false);
  const [repeat, setRepeat] = useState('');

  return (
    <div>
      <Button buttonType="negative" onClick={() => setShown(true)}>
        Delete something
      </Button>
      <ModalConfirm
        isShown={isShown}
        intent="negative"
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
        {...props}
      >
        <Paragraph marginBottom="spacingM">
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
