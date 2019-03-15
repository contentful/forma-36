import React from 'react';
import { storiesOf } from '@storybook/react';
import { text, select } from '@storybook/addon-knobs';

import Tooltip from './Tooltip';
import TextLink from '../TextLink';

storiesOf('Components|Tooltip', module)
  .addParameters({
    propTypes: Tooltip['__docgenInfo'],
  })
  .add('default', () => (
    <div>
      <Tooltip
        place={select(
          'place',
          {
            Top: 'top',
            Bottom: 'bottom',
            Left: 'left',
            Right: 'right',
          },
          'top',
        )}
        id="tip1"
        targetWrapperClassName={text(
          'targetWrapperClassName',
          'target-wrapper',
        )}
        content={text('content', 'Hi I am a Tooltip')}
      >
        <TextLink>Hover me</TextLink>
      </Tooltip>
    </div>
  ))
  .add('with HTML', () => (
    <div style={{ fontSize: 14 }}>
      Lorem Ipsum dolor sit amet &nbsp;
      <Tooltip
        place={select(
          'place',
          {
            Top: 'top',
            Bottom: 'bottom',
            Left: 'left',
            Right: 'right',
          },
          'top',
        )}
        id="tip1"
        content={
          <div>
            I have some <div style={{ color: 'red' }}>HTML</div> in me
          </div>
        }
      >
        <TextLink>Hover me</TextLink>.
      </Tooltip>
      &nbsp; Lorem Ipsum dolor sit amet.
    </div>
  ));
