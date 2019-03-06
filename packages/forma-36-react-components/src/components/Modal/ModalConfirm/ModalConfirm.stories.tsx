import React from 'react';
import { storiesOf, StoryDecorator } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { text, boolean, select } from '@storybook/addon-knobs';
import { StateDecorator, Store } from '@sambego/storybook-state';

import ModalConfirm from './ModalConfirm';
import Modal from '../Modal';
import Button from '../../Button';
import TextInput from '../../TextInput';

const store = new Store({
  isShown: false,
  isLoading: false,
  isDisabled: true,
  repeat: '',
});

storiesOf('Components|Modal/ModalConfirm', module)
  .addDecorator(StateDecorator(store) as StoryDecorator)
  .add('default', () => (
    <div>
      <Button
        buttonType="negative"
        onClick={() => store.set({ isShown: true })}
      >
        Delete something
      </Button>
      <ModalConfirm
        isShown={store.state.isShown}
        title={text('title', ModalConfirm.defaultProps.title)}
        intent={select(
          'intent',
          ['negative', 'positive', 'primary'],
          ModalConfirm.defaultProps.intent,
        )}
        size={select(
          'size',
          [
            Modal.Sizes.SMALL,
            Modal.Sizes.MEDIUM,
            Modal.Sizes.LARGE,
            '300px',
            '1500px',
          ],
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
        cancelLabel={text('cancelLabel', ModalConfirm.defaultProps.cancelLabel)}
        isConfirmDisabled={boolean(
          'isConfirmDisabled',
          ModalConfirm.defaultProps.isConfirmDisabled,
        )}
        isConfirmLoading={boolean(
          'isConfirmLoading',
          ModalConfirm.defaultProps.isConfirmLoading,
        )}
        testId={text('testId', ModalConfirm.defaultProps.testId)}
        confirmTestId={text(
          'confirmTestId',
          ModalConfirm.defaultProps.confirmTestId,
        )}
        cancelTestId={text(
          'cancelTextId',
          ModalConfirm.defaultProps.cancelTestId,
        )}
        onCancel={() => {
          store.set({ isShown: false });
          action('onCancel')();
        }}
        onConfirm={() => {
          store.set({ isShown: false });
          action('onConfirm')();
        }}
      >
        <p>You are about to delete SOMETHING. Think twice!</p>
      </ModalConfirm>
    </div>
  ))
  .add('complex example', () => (
    <div>
      <Button
        buttonType="negative"
        onClick={() => store.set({ isShown: true })}
      >
        Delete something
      </Button>
      <ModalConfirm
        isShown={store.state.isShown}
        intent="negative"
        isConfirmDisabled={store.state.repeat !== 'unlock'}
        isConfirmLoading={store.state.isLoading}
        onCancel={() => {
          store.set({ isShown: false });
          action('onCancel')();
        }}
        onConfirm={() => {
          store.set({ isLoading: true });
          setTimeout(() => {
            store.set({ isLoading: false, isShown: false, repeat: '' });
          }, 1500);
          action('onConfirm')();
        }}
      >
        <p>
          Type <strong>unlock</strong> to allow confirming this modal
        </p>
        <TextInput
          value={store.state.repeat}
          onChange={e => store.set({ repeat: e.target.value })}
        />
      </ModalConfirm>
    </div>
  ));
