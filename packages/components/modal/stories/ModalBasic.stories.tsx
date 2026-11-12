import React, { useState } from 'react';
import type { Meta, StoryObj } from '@storybook/react-vite';
import { Button } from '@contentful/f36-button';
import type { ModalBasicProps } from '../src/ModalBasic/ModalBasic';
import { ModalBasic } from '../src';

export default {
  title: 'Components/Modal/ModalBasic',
  component: ModalBasic,
  parameters: {
    propTypes: [ModalBasic['__docgenInfo']],
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
    position: { control: { type: 'select', options: ['center', 'top'] } },
    size: {
      control: {
        type: 'select',
        options: [
          'small',
          'medium',
          'large',
          'fullWidth',
          'fullscreen',
          'zen',
          '200px',
          '1500px',
        ],
      },
    },
  },
} as Meta;

export const Basic: StoryObj<ModalBasicProps> = (props) => {
  const [isShown, setShown] = useState(true);

  return (
    <div>
      <Button onClick={() => setShown(true)}>Open modal</Button>
      <ModalBasic
        {...props}
        modalContentProps={{
          className: 'additional-modal-content-class',
        }}
        isShown={isShown}
        onClose={() => setShown(false)}
      >
        Modal content. It is centered by default.
      </ModalBasic>
    </div>
  );
};

Basic.args = {
  title: 'Default modal',
  subtitle: 'Subtitle',
};
