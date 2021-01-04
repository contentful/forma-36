import React, { useState } from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { text, boolean, select } from '@storybook/addon-knobs';

import ModalConfirm from './ModalConfirm';
import Button from '../../Button';
import TextInput from '../../TextInput';

function DefaultStory() {
  const [isShown, setShown] = useState(true);
  return (
    <div>
      <Button buttonType="negative" onClick={() => setShown(true)}>
        Delete something
      </Button>
      <ModalConfirm
        isShown={isShown}
        title={text('title', ModalConfirm.defaultProps.title)}
        intent={select(
          'intent',
          ['negative', 'positive', 'primary'],
          ModalConfirm.defaultProps.intent,
        )}
        secondaryIntent={select('secondaryIntent', [
          'negative',
          'positive',
          'primary',
          'muted',
        ])}
        size={select(
          'size',
          ['small', 'medium', 'large', '300px', '1500px'],
          ModalConfirm.defaultProps.size,
        )}
        shouldCloseOnEscapePress={boolean(
          'shouldCloseOnEscapePress',
          ModalConfirm.defaultProps.shouldCloseOnEscapePress,
        )}
        shouldCloseOnOverlayClick={boolean(
          'shouldCloseOnOverlayClick',
          ModalConfirm.defaultProps.shouldCloseOnOverlayClick,
        )}
        confirmLabel={text(
          'confirmLabel',
          ModalConfirm.defaultProps.confirmLabel,
        )}
        secondaryLabel={text('secondaryLabel')}
        cancelLabel={text('cancelLabel', ModalConfirm.defaultProps.cancelLabel)}
        isConfirmDisabled={boolean(
          'isConfirmDisabled',
          ModalConfirm.defaultProps.isConfirmDisabled,
        )}
        isSecondaryDisabled={boolean('secondaryDisabled')}
        isConfirmLoading={boolean(
          'isConfirmLoading',
          ModalConfirm.defaultProps.isConfirmLoading,
        )}
        isSecondaryLoading={boolean('isSecondaryLoading')}
        testId={text('testId', ModalConfirm.defaultProps.testId)}
        confirmTestId={text(
          'confirmTestId',
          ModalConfirm.defaultProps.confirmTestId,
        )}
        secondaryTestId={text(
          'secondaryTestId',
          ModalConfirm.defaultProps.secondaryTestId,
        )}
        cancelTestId={text(
          'cancelTextId',
          ModalConfirm.defaultProps.cancelTestId,
        )}
        onCancel={() => {
          setShown(false);
          action('onCancel')();
        }}
        onConfirm={() => {
          setShown(false);
          action('onConfirm')();
        }}
        onSecondary={() => {
          setShown(false);
          action('onSecondary')();
        }}
      >
        <p>You are about to delete SOMETHING. Think twice!</p>
      </ModalConfirm>
    </div>
  );
}

function ComplexStory() {
  const [isShown, setShown] = useState(true);
  const [isLoading, setLoading] = useState(false);
  const [repeat, setRepeat] = useState('');

  return (
    <div>
      <Button buttonType="negative" onClick={() => setShown(true)}>
        Delete something
      </Button>
      <ModalConfirm
        isShown={isShown}
        intent="negative"
        isConfirmDisabled={repeat !== 'unlock'}
        isConfirmLoading={isLoading}
        onCancel={() => {
          setShown(false);
          action('onCancel')();
        }}
        onConfirm={() => {
          setLoading(true);
          setTimeout(() => {
            setLoading(false);
            setShown(false);
            setRepeat('');
          }, 1500);
          action('onConfirm')();
        }}
      >
        <p>
          Type <strong>unlock</strong> to allow confirming this modal
        </p>
        <TextInput
          value={repeat}
          onChange={(e) => setRepeat((e.target as HTMLInputElement).value)}
        />
      </ModalConfirm>
    </div>
  );
}

storiesOf('Components/Modal/ModalConfirm', module)
  .addParameters({
    propTypes: ModalConfirm['__docgenInfo'],
    component: ModalConfirm,
  })
  .add('default', () => <DefaultStory />)
  .add('complex example', () => <ComplexStory />);
