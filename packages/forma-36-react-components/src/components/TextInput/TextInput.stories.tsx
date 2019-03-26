import React from 'react';
import { storiesOf } from '@storybook/react';
import { text, boolean, select, number } from '@storybook/addon-knobs';
import { action } from '@storybook/addon-actions';

import TextInput from './TextInput';
import Button from './../Button';

storiesOf('Components|TextInput', module)
  .addParameters({
    propTypes: TextInput['__docgenInfo'],
  })
  .add('default', () => (
    <TextInput
      hasError={boolean('hasError', false)}
      className={text('className', '')}
      isDisabled={boolean('isDisabled', false)}
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
      name="emailInput"
      id="emailInput"
    />
  ))
  .add('Controlling focus via ref', () => {
    const textInputRef = React.createRef<HTMLInputElement>();

    return (
      <React.Fragment>
        <TextInput
          hasError={boolean('hasError', false)}
          className={text('className', '')}
          isDisabled={boolean('isDisabled', false)}
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
          name="emailInput"
          id="emailInput"
          inputRef={textInputRef}
        />
        <Button
          onClick={() => (textInputRef.current as HTMLInputElement).focus()}
        >
          Focus TextInput with ref
        </Button>
      </React.Fragment>
    );
  });
