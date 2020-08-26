import React from 'react';
import { storiesOf } from '@storybook/react';
import { text, boolean, select, number } from '@storybook/addon-knobs';
import { action } from '@storybook/addon-actions';

import Textarea from './Textarea';
import Button from './../Button';

storiesOf('Components/TextArea', module)
  .addParameters({
    propTypes: Textarea['__docgenInfo'],
  })
  .add('default', () => (
    <Textarea
      className={text('className', '')}
      name="someInput"
      id="someInput"
      error={boolean('error', false)}
      maxLength={number('maxLength', 50)}
      required={boolean('required', false)}
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
      disabled={boolean('disabled', false)}
      value={text('value', '123456')}
      rows={number('rows', 2)}
      willBlurOnEsc={boolean('willBlurOnEsc', true)}
    />
  ))
  .add('Controlling focus via ref', () => {
    const textareaRef = React.createRef<HTMLTextAreaElement>();

    return (
      <React.Fragment>
        <Textarea
          className={text('className', '')}
          name="someInput"
          id="someInput"
          error={boolean('error', false)}
          maxLength={number('maxLength', 50)}
          required={boolean('required', false)}
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
          disabled={boolean('disabled', false)}
          value={text('value', '123456')}
          rows={number('rows', 2)}
          willBlurOnEsc={boolean('willBlurOnEsc', true)}
          textareaRef={textareaRef}
        />
        <Button
          onClick={() => (textareaRef.current as HTMLTextAreaElement).focus()}
        >
          Focus Textarea with ref
        </Button>
      </React.Fragment>
    );
  });
