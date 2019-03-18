import React, { useState, MouseEventHandler } from 'react';
import { storiesOf } from '@storybook/react';
import { text, boolean, select } from '@storybook/addon-knobs';

import Modal from './Modal';
import Button from '../../Button/Button';

function fillArray(value: string, len: number) {
  if (len === 0) return [];
  let a = [value];
  while (a.length * 2 <= len) a = a.concat(a);
  if (a.length < len) a = a.concat(a.slice(0, len - a.length));
  return a;
}

function DefaultStory() {
  const [isShown, setShown] = useState(false);
  return (
    <div>
      <Button
        onClick={() => {
          setShown(true);
        }}
      >
        Open modal
      </Button>
      <Modal
        title={text('title', 'Default modal')}
        shouldCloseOnEscapePress={boolean(
          'shouldCloseOnEscapePress',
          Modal.defaultProps.shouldCloseOnEscapePress,
        )}
        shouldCloseOnOverlayClick={boolean(
          'shouldCloseOnOverlayClick',
          Modal.defaultProps.shouldCloseOnOverlayClick,
        )}
        size={select(
          'size',
          [
            Modal.Sizes.SMALL,
            Modal.Sizes.MEDIUM,
            Modal.Sizes.LARGE,
            '200px',
            '1500px',
          ],
          Modal.defaultProps.size,
        )}
        position={select(
          'position',
          [Modal.Positions.CENTER, Modal.Positions.TOP],
          Modal.defaultProps.position,
        )}
        topOffset={text(
          'topOffset (if position is top)',
          Modal.defaultProps.topOffset,
        )}
        allowHeightOverflow={boolean(
          'allowHeightOverflow (applicable if modal is long)',
          Modal.defaultProps.allowHeightOverflow,
        )}
        testId={text('testId', Modal.defaultProps.testId)}
        className={text('className', '')}
        isShown={isShown}
        onClose={() => {
          setShown(false);
        }}
      >
        Modal content. It is centered by default.
      </Modal>
    </div>
  );
}

function LongModalStory() {
  const [isShown, setShown] = useState(false);
  return (
    <div>
      <Button onClick={() => setShown(true)}>
        Different behaviors for modal
      </Button>
      <Modal
        title="A really long modal"
        allowHeightOverflow={boolean('allowHeightOverflow', false)}
        isShown={isShown}
        onClose={() => setShown(false)}
      >
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
}

function ControllerModalStory() {
  const [isShown, setShown] = useState(false);
  return (
    <div>
      <Button onClick={() => setShown(true)}>Show centered modal</Button>
      <Modal
        title="Centered modal"
        isShown={isShown}
        onClose={() => setShown(false)}
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
              <Button onClick={onClose} buttonType="positive">
                Confirm
              </Button>
              <Button onClick={onClose} buttonType="muted">
                Close
              </Button>
            </Modal.Controls>
          </React.Fragment>
        )}
      </Modal>
    </div>
  );
}

storiesOf('Components|Modal', module)
  .addParameters({
    propTypes: Modal['__docgenInfo'],
  })
  .add('default', () => <DefaultStory />)
  .add('long', () => <LongModalStory />)
  .add('controlled', () => <ControllerModalStory />);
