import React, { useState, useRef } from 'react';
import type { Meta, StoryObj, StoryFn } from '@storybook/react-vite';
import { action } from 'storybook/actions';
import { Button } from '@contentful/f36-button';
import { Badge } from '@contentful/f36-badge';
import { CheckCircleIcon } from '@contentful/f36-icons';

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
  const { title, subtitle, ...otherProps } = props;

  return (
    <div>
      <Button onClick={() => setShown(true)}>Open modal</Button>
      <Modal
        {...otherProps}
        header={
          <Modal.Header
            title={title}
            subtitle={subtitle}
            className="additional-modal-header-class"
            aria={{
              closeIconLabel: 'Custom close modal aria label',
            }}
          />
        }

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

export const WithCustomIds: StoryObj<ModalProps> = (props) => {
  const [isShown, setShown] = useState(true);
  const { title, subtitle, ...otherProps } = props;
  return (
    <div>
      <Button onClick={() => setShown(true)}>Open modal</Button>
      <Modal
        {...otherProps}
        header={
          <Modal.Header
            title={title}
            subtitle={subtitle}
            titleId="custom-title-id"
            subtitleId="custom-subtitle-id"
            className="additional-modal-header-class"
            aria={{
              closeIconLabel: 'Custom close modal aria label',
            }}
          />
        }
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
  const { title, subtitle, ...otherProps } = props;
  return (
    <div>
      <Button onClick={() => setShown(true)}>
        Different behaviors for modal
      </Button>
      <Modal
        header={<Modal.Header title={title} subtitle={subtitle} />}
        isShown={isShown}
        onClose={() => setShown(false)}
        {...otherProps}
      >
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

export const ModalWithInitialFocus: StoryObj<ModalProps> = (props) => {
  const [isShown, setShown] = useState(true);
  const confirmRef = useRef(null);
  const handleClose = (source: string) => {
    action(`closed by ${source}`)();
    setShown(false);
  };

  return (
    <div>
      <Button onClick={() => setShown(true)}>Show centered modal</Button>
      <Modal
        {...props}
        onClose={() => handleClose('Modal (Esc / overlay / X-Button)')}
        header={<Modal.Header title={props.title} />}
        controls={
          <Modal.Controls>
            <Button
              size="small"
              onClick={() => handleClose('Close button')}
              variant="secondary"
            >
              Close
            </Button>
            <Button
              size="small"
              onClick={() => handleClose('Confirm button')}
              variant="positive"
              ref={confirmRef}
            >
              Confirm
            </Button>
          </Modal.Controls>
        }
        isShown={isShown}
        initialFocusRef={confirmRef}
      >
        Hello from controlled modal window
      </Modal>
    </div>
  );
};

ModalWithInitialFocus.args = {
  title: 'Confirm is focused',
};

export const ModalWithoutHeader: StoryFn<ModalProps> = (props) => {
  const [isShown, setShown] = useState(true);

  return (
    <div>
      <Button onClick={() => setShown(true)}>Open modal</Button>
      <Modal
        {...props}
        isShown={isShown}
        onClose={() => setShown(false)}
        aria={{ label: 'Modal without explicit header or title' }}
      >
        Modal content
      </Modal>
    </div>
  );
};

export const WithHeaderAndControlsSlots: StoryFn<ModalProps> = () => {
  const [isShown, setShown] = useState(true);
  const handleClose = () => setShown(false);

  return (
    <div>
      <Button onClick={() => setShown(true)}>Open modal</Button>
      <Modal
        isShown={isShown}
        onClose={handleClose}
        header={<Modal.Header title="Slot header" subtitle="Subtitle" />}
        controls={
          <Modal.Controls>
            <Button size="small" variant="secondary" onClick={handleClose}>
              Cancel
            </Button>
            <Button size="small" variant="positive" onClick={handleClose}>
              Confirm
            </Button>
          </Modal.Controls>
        }
      >
        The close button comes from the Modal, no onClose on the header.
      </Modal>
    </div>
  );
};

export const WithCustomHeaderContent: StoryFn<ModalProps> = () => {
  const [isShown, setShown] = useState(true);

  return (
    <div>
      <Button onClick={() => setShown(true)}>Open modal</Button>
      <Modal
        isShown={isShown}
        onClose={() => setShown(false)}
        header={
          <Modal.Header title="With badge">
            <Badge>Beta</Badge>
          </Modal.Header>
        }
      >
        Modal content
      </Modal>
    </div>
  );
};

export const WithDisplayHeader: StoryFn<ModalProps> = () => {
  const [isShown, setShown] = useState(true);

  return (
    <div>
      <Button onClick={() => setShown(true)}>Open modal</Button>
      <Modal
        isShown={isShown}
        onClose={() => setShown(false)}
        header={
          <Modal.DisplayHeader
            illustration={<CheckCircleIcon color="green" />}
            title="Successs"
          />
        }
        controls={
          <Modal.Controls justifyContent="center">
            <Button
              size="small"
              variant="positive"
              onClick={() => action('close')()}
            >
              Done
            </Button>
          </Modal.Controls>
        }
      >
        Your action was successfull
      </Modal>
    </div>
  );
};

export const NotDismissable: StoryFn<ModalProps> = () => {
  const [isShown, setShown] = useState(true);
  const close = () => setShown(false);

  return (
    <div>
      <Button onClick={() => setShown(true)}>Open modal</Button>
      <Modal
        isShown={isShown}
        onClose={close}
        isDismissable={false}
        header={<Modal.Header title="Not dismissable" />}
        controls={
          <Modal.Controls>
            <Button size="small" variant="primary" onClick={close}>
              Done
            </Button>
          </Modal.Controls>
        }
      >
        No close button; esc and overlay click do nothing.
      </Modal>
    </div>
  );
};
