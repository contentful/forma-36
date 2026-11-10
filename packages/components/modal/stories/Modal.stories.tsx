import React, { useState, MouseEventHandler, useRef } from 'react';
import type { Meta, StoryObj, StoryFn } from '@storybook/react-vite';
import { Button } from '@contentful/f36-button';
import { Badge } from '@contentful/f36-badge';
import { Flex } from '@contentful/f36-core';
import tokens from '@contentful/f36-tokens';

import { type ModalProps } from '../src/Modal';
import { Modal } from '../src';

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

export const Basic: StoryObj<ModalProps> = (props) => {
  const [isShown, setShown] = useState(true);

  return (
    <div>
      <Button onClick={() => setShown(true)}>Open modal</Button>
      <Modal
        {...props}
        modalHeaderProps={{
          className: 'additional-modal-header-class',
          aria: {
            closeIconLabel: 'Custom close modal aria label',
          },
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

Basic.args = {
  title: 'Default modal',
  subtitle: 'Subtitle',
};

export const DisplayHeader = () => {
  const [isShown, setShown] = useState(true);
  const onClose = () => setShown(false);

  return (
    <div>
      <Button onClick={() => setShown(true)}>Open modal</Button>
      <Modal
        isShown={isShown}
        onClose={onClose}
        illustration={
          <div
            style={{
              width: '312px',
              height: '208px',
              backgroundColor: 'purple',
            }}
          />
        }
        title="Success"
        subtitle="You'r interaction was successfull"
      >
        <Flex justifyContent="center" gap={tokens.spacingXs}>
          <Button size="small" onClick={onClose} variant="secondary">
            Close
          </Button>
          <Button size="small" onClick={onClose} variant="positive">
            Confirm
          </Button>
        </Flex>
      </Modal>
    </div>
  );
};

export const WithCustomIds: StoryObj<ModalProps> = (props) => {
  const [isShown, setShown] = useState(true);

  return (
    <div>
      <Button onClick={() => setShown(true)}>Open modal</Button>
      <Modal
        {...props}
        modalHeaderProps={{
          className: 'additional-modal-header-class',
          titleId: 'custom-title',
          subtitleId: 'custom-subtitle',
          aria: {
            closeIconLabel: 'Custom close modal aria label',
          },
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

WithCustomIds.args = {
  title: 'Default modal',
  subtitle: 'Subtitle',
};

export const LongModal: StoryObj<ModalProps> = (props) => {
  const [isShown, setShown] = useState(true);

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

export const ControllerModal: StoryObj<ModalProps> = (props) => {
  const [isShown, setShown] = useState(true);
  const confirmRef = useRef(null);

  return (
    <div>
      <Button onClick={() => setShown(true)}>Show centered modal</Button>
      <Modal
        {...props}
        isShown={isShown}
        onClose={() => setShown(false)}
        initialFocusRef={confirmRef}
      >
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
            <Modal.Controls>
              <Button size="small" onClick={onClose} variant="secondary">
                Close
              </Button>
              <Button
                size="small"
                onClick={onClose}
                variant="positive"
                ref={confirmRef}
              >
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

export const ModalWithChildComponentInHeader: StoryFn<ModalProps> = (props) => {
  const [isShown, setShown] = useState(true);

  return (
    <div>
      <Button onClick={() => setShown(true)}>Open modal</Button>
      <Modal
        {...props}
        isShown={isShown}
        onClose={() => setShown(false)}
        size="fullWidth"
      >
        {({ onClose }) => (
          <>
            <Modal.Header title="With Child Component" onClose={onClose}>
              <Badge>Child Component</Badge>
            </Modal.Header>
            <Modal.Content>Modal content</Modal.Content>
          </>
        )}
      </Modal>
    </div>
  );
};
