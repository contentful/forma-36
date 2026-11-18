import React from 'react';
import { Button, Modal, ModalHeader } from '@contentful/f36-components';

export function TitleProps({ isShown, onClose }) {
  return (
    <Modal
      isShown={isShown}
      onClose={onClose}
      header={<Modal.Header
        title="Create entry"
        subtitle={subtitle}
        testId="header"
        className={className} />}>
      <p>Body</p>
    </Modal>
  );
}

export function PureRenderFunction({ isShown, onClose }) {
  return (
    <Modal
      isShown={isShown}
      onClose={onClose}
      header={<Modal.Header title="Delete entry" />}
      controls={<Modal.Controls>
        <Button onClick={onClose}>Cancel</Button>
      </Modal.Controls>}
      modalContentProps={{
        testId: "content",
        className: styles.content
      }}>
      <p>Body</p>
    </Modal>
  );
}

export function BlockReturnFragment({ isShown, onClose }) {
  return (
    <Modal
      isShown={isShown}
      onClose={() => onClose(false)}
      header={<Modal.Header title="Title" />}>Body</Modal>
  );
}

export function DifferentOnClose({ isShown, onClose, onCancel }) {
  return (
    <Modal
      isShown={isShown}
      onClose={onClose}
      header={<Modal.Header title="Title" onClose={() => void onCancel()} />}>Body</Modal>
  );
}

export function FormRoot({ isShown, onClose }) {
  return (
    <Modal isShown={isShown} onClose={onClose}>
      {() => (
        <form>
          <Modal.Header title="Title" />
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
  return (<Modal isShown={isShown} onClose={onClose} header={<Modal.Header title="Title" />}>Body</Modal>);
}

export function ComputedHeaderProps({ isShown, onClose, k, v }) {
  return (
    <Modal
      isShown={isShown}
      onClose={onClose}
      header={<Modal.Header title="Title" {...{ [k]: v }} />}>
      <p>Body</p>
    </Modal>
  );
}

export function RenderFunctionHeaderAndTitle({ isShown, onClose }) {
  return (
    <Modal
      isShown={isShown}
      onClose={onClose}
      title="Outer"
      header={<Modal.Header title="Inner" />}>Body</Modal>
  );
}
