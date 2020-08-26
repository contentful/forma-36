import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { text } from '@storybook/addon-knobs';
import Icon from '../Icon';

import Pill from './Pill';

storiesOf('Components/Pill', module)
  .addParameters({
    propTypes: Pill['__docgenInfo'],
  })
  .add('default', () => (
    <div>
      <Pill
        className={text('className', '')}
        label={text('label', 'johannes.bugiel@contentful.com')}
      />
    </div>
  ))
  .add('onDrag & onClose', () => (
    <>
      <div>
        <Pill
          className={text('className', '')}
          label={text('label', 'johannes.bugiel@contentful.com')}
          onClose={action('onClick')}
          onDrag={action('onDrag')}
        />
      </div>
      <div className="f36-margin-top--m">
        <Pill
          style={{ width: 200 }}
          className={text('className', '')}
          label={text('label', 'johannes.bugiel@contentful.com')}
          onClose={action('onClick')}
          onDrag={action('onDrag')}
        />
      </div>
    </>
  ))
  .add('Custom handle component', () => (
    <Pill
      className={text('className', '')}
      label={text('label', 'johannes.bugiel@contentful.com')}
      onDrag={action('onDrag')}
      dragHandleComponent={
        <Icon
          icon="ArrowUp"
          color="positive"
          style={{ padding: '0.375rem 0.625rem' }}
        />
      }
    />
  ));
