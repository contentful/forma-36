import React from 'react';
import { storiesOf } from '@storybook/react';
import { text, select } from '@storybook/addon-knobs';
import { host } from 'storybook-host';
import { withInfo } from '@storybook/addon-info';
import Tooltip from './Tooltip';
import TextLink from '../TextLink';

storiesOf('Components|Tooltip', module)
  .addDecorator(
    host({
      align: 'center middle',
      cropMarks: false,
    }),
  )
  .add(
    'default',
    withInfo()(() => (
      <div>
        <Tooltip
          place={select(
            'Initial place',
            {
              Top: 'top',
              Bottom: 'bottom',
              Left: 'left',
              Right: 'right',
            },
            'top',
          )}
          id="tip1"
          targetWrapperClassName={text('Wrapper class name', 'target-wrapper')}
          content={text('Tooltip Text', "Hi I'm a Tooltip")}
        >
          <TextLink>Hover me</TextLink>
        </Tooltip>
      </div>
    )),
  )
  .add(
    'with HTML',
    withInfo()(() => (
      <div style={{ fontSize: 14 }}>
        Lorem Ipsum dolor sit amet &nbsp;
        <Tooltip
          place={select(
            'Initial place',
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
    )),
  );
