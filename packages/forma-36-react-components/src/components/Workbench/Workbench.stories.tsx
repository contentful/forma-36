import React from 'react';
import { storiesOf } from '@storybook/react';
import { text, select } from '@storybook/addon-knobs';

import Workbench from './Workbench';
import Icon from '../Icon';
import Button from '../Button';

storiesOf('(alpha)|Workbench', module)
  .addParameters({
    propTypes: Workbench['__docgenInfo'],
  })
  .add('default', () => (
    <Workbench className={text('className', '')} testId={text('testId')}>
      <Workbench.Header
        title={'Page title'}
        icon={<Icon icon="ArrowDown" />}
        actions={<Button buttonType="muted">Click</Button>}
      />
      <Workbench.Content
        type={select(
          'Workbench.Content -> type',
          ['default', 'text', 'full'],
          'default',
        )}
      >
        <div style={{ height: '2000px', backgroundColor: 'blue' }}>
          Workbench
        </div>
      </Workbench.Content>
    </Workbench>
  ))
  .add('with left sidebar', () => (
    <Workbench className={text('className', '')} testId={text('testId')}>
      <Workbench.Header
        title={'Page title'}
        icon={<Icon icon="ArrowDown" />}
        actions={<Button buttonType="muted">Click</Button>}
      />
      <Workbench.Content
        leftSidebar={
          <div style={{ height: '2000px', backgroundColor: 'red' }}>
            left sidebar
          </div>
        }
        type={select(
          'Workbench.Content -> type',
          ['default', 'text', 'full'],
          'default',
        )}
      >
        <div style={{ height: '2000px', backgroundColor: 'blue' }}>
          Workbench
        </div>
      </Workbench.Content>
    </Workbench>
  ))
  .add('with right sidebar', () => (
    <Workbench className={text('className', '')} testId={text('testId')}>
      <Workbench.Header
        title={'Page title'}
        icon={<Icon icon="ArrowDown" />}
        actions={<Button buttonType="muted">Click</Button>}
      />
      <Workbench.Content
        rightSidebar={
          <div style={{ height: '2000px', backgroundColor: 'red' }}>
            right sidebar
          </div>
        }
        type={select(
          'Workbench.Content -> type',
          ['default', 'text', 'full'],
          'default',
        )}
      >
        <div style={{ height: '2000px', backgroundColor: 'blue' }}>
          Workbench
        </div>
      </Workbench.Content>
    </Workbench>
  ))
  .add('with left and right sidebar', () => (
    <Workbench className={text('className', '')} testId={text('testId')}>
      <Workbench.Header
        title={'Page title'}
        icon={<Icon icon="ArrowDown" />}
        actions={<Button buttonType="muted">Click</Button>}
      />
      <Workbench.Content
        leftSidebar={
          <div style={{ height: '2000px', backgroundColor: 'red' }}>
            left sidebar
          </div>
        }
        rightSidebar={
          <div style={{ height: '2000px', backgroundColor: 'red' }}>
            right sidebar
          </div>
        }
        type={select(
          'Workbench.Content -> type',
          ['default', 'text', 'full'],
          'default',
        )}
      >
        <div style={{ height: '2000px', backgroundColor: 'blue' }}>
          Workbench
        </div>
      </Workbench.Content>
    </Workbench>
  ));
