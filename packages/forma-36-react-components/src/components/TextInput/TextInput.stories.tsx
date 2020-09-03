import React from 'react';
import { storiesOf } from '@storybook/react';
import { text, boolean, select, number } from '@storybook/addon-knobs';
import { action } from '@storybook/addon-actions';

import TextInput from './TextInput';
import Button from './../Button';

storiesOf('Components/TextInput', module)
  .addParameters({
    propTypes: TextInput['__docgenInfo'],
    component: TextInput,
  })
  .add('default', () => (
    <TextInput
      error={boolean('error', false)}
      className={text('className', '')}
      disabled={boolean('disabled', false)}
      isReadOnly={boolean('isReadOnly', false)}
      withCopyButton={boolean('withCopyButton', false)}
      value={text('valiue', '123456')}
      maxLength={number('maxLength', 50)}
      width={select(
        'width',
        {
          'Full (default)': 'full',
          large: 'large',
          medium: 'medium',
          small: 'small',
        },
        'full',
      )}
      onChange={action('onChange')}
      onBlur={action('onBlur')}
      onCopy={action('onCopy')}
      onKeyPress={action('onKeyPress')}
      name="emailInput"
      id="emailInput"
      willBlurOnEsc={boolean('willBlurOnEsc', true)}
    />
  ))
  .add('Controlling focus via ref', () => {
    const textInputRef = React.createRef<HTMLInputElement>();

    return (
      <React.Fragment>
        <TextInput
          error={boolean('error', false)}
          className={text('className', '')}
          disabled={boolean('disabled', false)}
          isReadOnly={boolean('isReadOnly', false)}
          withCopyButton={boolean('withCopyButton', false)}
          value={text('value', '123456')}
          maxLength={number('maxLength', 50)}
          width={select(
            'width',
            {
              'Full (default)': 'full',
              large: 'large',
              medium: 'medium',
              small: 'small',
            },
            'full',
          )}
          onChange={action('onChange')}
          onBlur={action('onBlur')}
          onCopy={action('onCopy')}
          onKeyPress={action('onKeyPress')}
          name="emailInput"
          id="emailInput"
          inputRef={textInputRef}
          willBlurOnEsc={boolean('willBlurOnEsc', true)}
        />
        <Button
          onClick={() => (textInputRef.current as HTMLInputElement).focus()}
        >
          Focus TextInput with ref
        </Button>
      </React.Fragment>
    );
  });
