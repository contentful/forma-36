import React from 'react';
import { Button, Modal, ModalHeader } from '@contentful/f36-components';

export function TitleProps({ isShown, onClose }) {
  return (
    <Modal
      isShown={isShown}
      onClose={onClose}
      title="Create entry"
      subtitle={subtitle}
      modalHeaderProps={{ testId: 'header', className }}>
      <p>Body</p>
    </Modal>
  );
}

export function PureRenderFunction({ isShown, onClose }) {
  return (
    <Modal isShown={isShown} onClose={onClose}>
      {() => (
        <>
          <Modal.Header title="Delete entry" onClose={onClose} />
          <Modal.Content testId="content" className={styles.content}>
            <p>Body</p>
          </Modal.Content>
          <Modal.Controls>
            <Button onClick={onClose}>Cancel</Button>
          </Modal.Controls>
        </>
      )}
    </Modal>
  );
}

export function BlockReturnFragment({ isShown, onClose }) {
  return (
    <Modal isShown={isShown} onClose={() => onClose(false)}>
      {() => {
        return (
          <React.Fragment>
            <Modal.Header title="Title" onClose={() => onClose(false)} />
            <Modal.Content>Body</Modal.Content>
          </React.Fragment>
        );
      }}
    </Modal>
  );
}

export function DifferentOnClose({ isShown, onClose, onCancel }) {
  return (
    <Modal isShown={isShown} onClose={onClose}>
      {() => (
        <>
          <Modal.Header title="Title" onClose={() => void onCancel()} />
          <Modal.Content>Body</Modal.Content>
        </>
      )}
    </Modal>
  );
}

export function FormRoot({ isShown, onClose }) {
  return (
    <Modal isShown={isShown} onClose={onClose}>
      {() => (
        <form>
          <Modal.Header title="Title" onClose={onClose} />
          <Modal.Content>Body</Modal.Content>
          <Modal.Controls>
            <Button type="submit">Save</Button>
          </Modal.Controls>
        </form>
      )}
    </Modal>
  );
}

export function RenderFunctionParams({ isShown, onClose }) {
  return (
    <Modal isShown={isShown} onClose={onClose} title="Title">
      {({ title }) => (
        <>
          <Modal.Header title={title} />
          <Modal.Content>Body</Modal.Content>
        </>
      )}
    </Modal>
  );
}

export function MixedSiblings({ isShown, onClose }) {
  return (
    <Modal isShown={isShown} onClose={onClose}>
      {() => (
        <>
          <Modal.Header title="Title" />
          <CustomBody />
        </>
      )}
    </Modal>
  );
}

export function SpreadProps(props) {
  return (
    <Modal {...props} title="Title">
      <p>Body</p>
    </Modal>
  );
}

export function NamedHeader({ isShown, onClose }) {
  return (
    <Modal isShown={isShown} onClose={onClose}>
      {() => (
        <>
          <ModalHeader title="Title" />
        </>
      )}
    </Modal>
  );
}

export function RenderFunctionWithTitle({ isShown, onClose }) {
  return (
    <Modal isShown={isShown} onClose={onClose} title="Title">
      {() => (
        <>
          <Modal.Content>Body</Modal.Content>
        </>
      )}
    </Modal>
  );
}

export function ComputedHeaderProps({ isShown, onClose, k, v }) {
  return (
    <Modal
      isShown={isShown}
      onClose={onClose}
      title="Title"
      modalHeaderProps={{ [k]: v }}
    >
      <p>Body</p>
    </Modal>
  );
}

export function RenderFunctionHeaderAndTitle({ isShown, onClose }) {
  return (
    <Modal isShown={isShown} onClose={onClose} title="Outer">
      {() => (
        <>
          <Modal.Header title="Inner" />
          <Modal.Content>Body</Modal.Content>
        </>
      )}
    </Modal>
  );
}

export function HeaderOnCloseDiffersOnlyInString({ isShown, log }) {
  return (
    <Modal isShown={isShown} onClose={() => log('ab')}>
      <Modal.Header title="Title" onClose={() => log('a b')} />
      <Modal.Content>Body</Modal.Content>
    </Modal>
  );
}
