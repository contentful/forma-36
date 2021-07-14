import React, { useState } from 'react';
import { storiesOf } from '@storybook/react';
import { Text } from '@contentful/f36-typography';

import { ModalLauncher } from './ModalLauncher';
import { Button } from '../../Button';
import { Modal } from '../Modal';

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
                    <Button
                      buttonType="positive"
                      onClick={() => {
                        onClose('The text is revealed!');
                      }}
                    >
                      Show text
                    </Button>
                    <Button buttonType="muted" onClick={() => onClose('')}>
                      Hide text
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
      {hiddenText.length > 0 && <Text>{hiddenText}</Text>}
    </React.Fragment>
  );
}

storiesOf('Components/Modal/ModalLauncher', module)
  .addParameters({
    propTypes: ModalLauncher['__docgenInfo'],
    component: ModalLauncher,
  })
  .add('default', () => <DefaultStory />);
