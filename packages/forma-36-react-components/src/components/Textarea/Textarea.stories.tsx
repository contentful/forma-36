import React from 'react';
import { storiesOf } from '@storybook/react';
import { text, boolean, select, number } from '@storybook/addon-knobs';
import { action } from '@storybook/addon-actions';

import Textarea from './Textarea';
import Button from './../Button';
import SectionHeading from '../Typography/SectionHeading';
import Flex from '../Flex/Flex';

storiesOf('Components/TextArea', module)
  .addParameters({
    propTypes: Textarea['__docgenInfo'],
    component: Textarea,
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
  })
  .add('overview', () => (
    <>
      <Flex marginBottom="spacingS">
        <SectionHeading element="h3">Textarea default</SectionHeading>
      </Flex>
      <Flex marginBottom="spacingS">
        <Textarea name="someInput" id="someInput" value="123456" rows={2} />
      </Flex>
      <Flex marginBottom="spacingS">
        <SectionHeading element="h3">Textarea small width</SectionHeading>
      </Flex>
      <Flex marginBottom="spacingS">
        <Textarea
          name="someInput"
          id="someInput"
          error={boolean('error', false)}
          width="small"
          value="123456"
          rows={2}
        />
      </Flex>
      <Flex marginBottom="spacingS">
        <SectionHeading element="h3">Textarea medium width</SectionHeading>
      </Flex>
      <Flex marginBottom="spacingS">
        <Textarea
          name="someInput"
          id="someInput"
          width="medium"
          value="123456"
          rows={2}
        />
      </Flex>
      <Flex marginBottom="spacingS">
        <SectionHeading element="h3">Textarea large width</SectionHeading>
      </Flex>
      <Flex marginBottom="spacingS">
        <Textarea
          name="someInput"
          id="someInput"
          width="large"
          value="123456"
          rows={2}
        />
      </Flex>
      <Flex marginBottom="spacingS">
        <SectionHeading element="h3">Textarea with error</SectionHeading>
      </Flex>
      <Flex marginBottom="spacingS">
        <Textarea
          name="someInput"
          id="someInput"
          error
          value="123456"
          rows={2}
        />
      </Flex>
      <Flex marginBottom="spacingS">
        <SectionHeading element="h3">Textarea disabled</SectionHeading>
      </Flex>
      <Flex marginBottom="spacingS">
        <Textarea
          name="someInput"
          id="someInput"
          disabled
          value="123456"
          rows={2}
        />
      </Flex>
    </>
  ));
