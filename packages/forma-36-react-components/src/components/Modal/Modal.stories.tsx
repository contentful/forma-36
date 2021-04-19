import React, { useState, MouseEventHandler } from 'react';
import type { Meta, Story } from '@storybook/react/types-6-0';

import { Modal, ModalProps } from './Modal';
import { Button } from '../Button';

function fillArray(value: string, len: number) {
  if (len === 0) return [];
  let a = [value];
  while (a.length * 2 <= len) a = a.concat(a);
  if (a.length < len) a = a.concat(a.slice(0, len - a.length));
  return a;
}

export default {
  title: 'Components/Modal',
  component: Modal,
  parameters: {
    propTypes: [Modal['__docgenInfo']],
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
    position: { control: { type: 'select', options: ['center', 'top'] } },
    size: {
      control: {
        type: 'select',
        options: [
          'small',
          'medium',
          'large',
          'fullWidth',
          'zen',
          '200px',
          '1500px',
        ],
      },
    },
  },
} as Meta;

export const Default: Story<ModalProps> = (props) => {
  const [isShown, setShown] = useState(false);

  return (
    <div>
      <Button onClick={() => setShown(true)}>Open modal</Button>
      <Modal
        {...props}
        modalHeaderProps={{
          className: 'additional-modal-header-class',
        }}
        modalContentProps={{
          className: 'additional-modal-content-class',
        }}
        isShown={isShown}
        onClose={() => setShown(false)}
      >
        Modal content. It is centered by default.
      </Modal>
    </div>
  );
};

Default.args = {
  title: 'Default modal',
};

export const LongModal: Story<ModalProps> = (props) => {
  const [isShown, setShown] = useState(false);

  return (
    <div>
      <Button onClick={() => setShown(true)}>
        Different behaviors for modal
      </Button>
      <Modal {...props} isShown={isShown} onClose={() => setShown(false)}>
        <div style={{ marginBottom: 10 }}>
          Toggle <code>allowHeightOverflow</code> to see different behaviours
        </div>
        {fillArray('', 1000).map((item, index) => (
          // eslint-disable-next-line
          <div key={index}>Line #{index}</div>
        ))}
      </Modal>
    </div>
  );
};

LongModal.args = {
  title: 'A really long modal',
  allowHeightOverflow: false,
};

export const ControllerModal: Story<ModalProps> = (props) => {
  const [isShown, setShown] = useState(false);

  return (
    <div>
      <Button onClick={() => setShown(true)}>Show centered modal</Button>
      <Modal {...props} isShown={isShown} onClose={() => setShown(false)}>
        {({
          title,
          onClose,
        }: {
          title: string;
          onClose: MouseEventHandler;
        }) => (
          <React.Fragment>
            <Modal.Header title={title} onClose={onClose} />
            <Modal.Content>Hello from controlled modal window</Modal.Content>
            <Modal.Controls position="right">
              <Button onClick={onClose} buttonType="muted">
                Close
              </Button>
              <Button onClick={onClose} buttonType="positive">
                Confirm
              </Button>
            </Modal.Controls>
          </React.Fragment>
        )}
      </Modal>
    </div>
  );
};

ControllerModal.args = {
  title: 'Centered modal',
};
