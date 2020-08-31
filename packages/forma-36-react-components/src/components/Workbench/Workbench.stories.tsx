import React from 'react';
import { storiesOf } from '@storybook/react';
import { text, select } from '@storybook/addon-knobs';
import tokens from '@contentful/forma-36-tokens';

import Workbench from './Workbench';
import Icon from '../Icon';
import Button from '../Button';

storiesOf('(alpha)/Workbench', module)
  .addParameters({
    propTypes: Workbench['__docgenInfo'],
    component: Workbench,
  })
  .add('default', () => (
    <Workbench className={text('className', '')} testId={text('testId')}>
      <Workbench.Header
        title={'Page title'}
        description="Lorem Ipsum dolor sit amet."
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
        <div
          style={{ height: '2000px', backgroundColor: tokens.colorBlueBase }}
        >
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
      <Workbench.Sidebar position="left">
        <div style={{ height: '2000px', backgroundColor: tokens.colorRedBase }}>
          left sidebar
        </div>
      </Workbench.Sidebar>
      <Workbench.Content
        type={select(
          'Workbench.Content -> type',
          ['default', 'text', 'full'],
          'default',
        )}
      >
        <div
          style={{ height: '2000px', backgroundColor: tokens.colorBlueBase }}
        >
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
        type={select(
          'Workbench.Content -> type',
          ['default', 'text', 'full'],
          'default',
        )}
      >
        <div
          style={{ height: '2000px', backgroundColor: tokens.colorBlueBase }}
        >
          Workbench
        </div>
      </Workbench.Content>
      <Workbench.Sidebar position="right">
        <div style={{ height: '2000px', backgroundColor: tokens.colorRedBase }}>
          right sidebar
        </div>
      </Workbench.Sidebar>
    </Workbench>
  ))
  .add('with left and right sidebar', () => (
    <Workbench className={text('className', '')} testId={text('testId')}>
      <Workbench.Header
        title={'Page title'}
        icon={<Icon icon="ArrowDown" />}
        actions={<Button buttonType="muted">Click</Button>}
      />
      <Workbench.Sidebar position="left">
        <div style={{ height: '2000px', backgroundColor: tokens.colorRedBase }}>
          left sidebar
        </div>
      </Workbench.Sidebar>
      <Workbench.Content
        type={select(
          'Workbench.Content -> type',
          ['default', 'text', 'full'],
          'default',
        )}
      >
        <div
          style={{ height: '2000px', backgroundColor: tokens.colorBlueBase }}
        >
          Workbench
        </div>
      </Workbench.Content>
      <Workbench.Sidebar position="right">
        <div style={{ height: '2000px', backgroundColor: tokens.colorRedBase }}>
          right sidebar
        </div>
      </Workbench.Sidebar>
    </Workbench>
  ))
  .add('with back button', () => (
    <Workbench className={text('className', '')} testId={text('testId')}>
      <Workbench.Header
        onBack={() => {}}
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
        <div
          style={{ height: '2000px', backgroundColor: tokens.colorBlueBase }}
        >
          Workbench
        </div>
      </Workbench.Content>
    </Workbench>
  ));
