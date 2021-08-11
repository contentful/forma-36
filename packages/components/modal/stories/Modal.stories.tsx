import React from 'react';
import type { Meta, Story } from '@storybook/react/types-6-0';

import { Modal } from '../src/Modal';
import type { ModalProps } from '../src/Modal';

export default {
  component: Modal,
  parameters: {
    propTypes: Modal['__docgenInfo'],
  },
  title: 'Components/Modal',
} as Meta;

export const Default: Story<ModalProps> = (args) => {
  return <Modal {...args}>Modal</Modal>;
};
