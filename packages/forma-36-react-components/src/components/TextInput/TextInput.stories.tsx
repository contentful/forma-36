import React from 'react';
import { storiesOf } from '@storybook/react';
import { text, boolean, select, number } from '@storybook/addon-knobs';
import { action } from '@storybook/addon-actions';

import TextInput from './TextInput';
import Button from './../Button';

storiesOf('Components|TextInput', module)
  .add('default', () => (
    <TextInput
      error={boolean('Error', false)}
      extraClassNames={text('Extra Class Names', '')}
      disabled={boolean('Disabled', false)}
      withCopyButton={boolean('With Copy Button', false)}
      value={text('Value', '123456')}
      maxLength={number('Max Length Characters', 50)}
      width={select(
        'Width',
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
      name="emailInput"
      id="emailInput"
    />
  ))
  .add('Controlling focus via ref', () => {
    const textInputRef = React.createRef<HTMLInputElement>();

    return (
      <React.Fragment>
        <TextInput
          error={boolean('Error', false)}
          extraClassNames={text('Extra Class Names', '')}
          disabled={boolean('Disabled', false)}
          withCopyButton={boolean('With Copy Button', false)}
          value={text('Value', '123456')}
          maxLength={number('Max Length Characters', 50)}
          width={select(
            'Width',
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
          name="emailInput"
          id="emailInput"
          inputRef={textInputRef}
        />
        <Button onClick={() => textInputRef.current.focus()}>
          Focus TextInput with ref
        </Button>
      </React.Fragment>
    );
  });
