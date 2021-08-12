import React, { useState, useEffect, useCallback } from 'react';
import { storiesOf } from '@storybook/react';
import { Paragraph } from '@contentful/f36-typography';

import { ModalLauncher } from '../src/ModalLauncher/ModalLauncher';
import { Button } from '@contentful/f36-button';
import { Modal } from '../src/Modal';

function DefaultStory() {
  const [hiddenText, setHiddenText] = useState('');

  return (
    <React.Fragment>
      <Button
        onClick={() => {
          ModalLauncher.open<string>(({ isShown, onClose }) => (
            <Modal
              title="Reveal hidden text"
              isShown={isShown}
              onClose={() => onClose(hiddenText)}
            >
              {() => (
                <React.Fragment>
                  <Modal.Header title="Reveal hidden text" />
                  <Modal.Content>
                    Are you want to reveal the hidden text?
                  </Modal.Content>
                  <Modal.Controls>
                    <Button variant="transparent" onClick={() => onClose('')}>
                      Hide text
                    </Button>
                    <Button
                      variant="positive"
                      onClick={() => {
                        onClose('The text is revealed!');
                      }}
                    >
                      Show text
                    </Button>
                  </Modal.Controls>
                </React.Fragment>
              )}
            </Modal>
          )).then((text) => {
            setHiddenText(text);
          });
        }}
      >
        Trigger ModalLauncher
      </Button>
      {hiddenText.length > 0 && <Paragraph>{hiddenText}</Paragraph>}
    </React.Fragment>
  );
}

function CloseAllStory() {
  const openModal = useCallback((content) => {
    ModalLauncher.open(({ isShown, onClose }) => (
      <Modal title={content} isShown={isShown} onClose={() => onClose()}>
        <Modal.Content>{content}</Modal.Content>
        <Modal.Controls>
          <Button buttonType="primary" onClick={() => openModal(`New modal`)}>
            Open modal
          </Button>
          <Button
            buttonType="muted"
            onClick={() => {
              onClose();
            }}
          >
            Close one modal
          </Button>
          <Button buttonType="muted" onClick={ModalLauncher.closeAll}>
            Close all
          </Button>
        </Modal.Controls>
      </Modal>
    ));
  }, []);

  useEffect(() => {
    openModal(`Modal one`);
  }, [openModal]);

  return (
    <React.Fragment>
      <Button onClick={() => openModal(`New modal`)}>Open modal</Button>
    </React.Fragment>
  );
}

storiesOf('Components/Modal/ModalLauncher', module)
  .addParameters({
    propTypes: ModalLauncher['__docgenInfo'],
    component: ModalLauncher,
  })
  .add('default', () => <DefaultStory />)
  .add('closeAll method', () => <CloseAllStory />);
