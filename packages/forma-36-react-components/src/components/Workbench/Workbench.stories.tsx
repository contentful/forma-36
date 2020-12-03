import React from 'react';
import { select } from '@storybook/addon-knobs';
import tokens from '@contentful/forma-36-tokens';

import Workbench, { WorkbenchProps } from './Workbench';
import Icon from '../Icon';
import Button from '../Button';
import notes from './README.mdx';

export default {
  title: 'components/Workbench',
  component: Workbench,
  parameters: {
    propTypes: Workbench['__docgenInfo'],
    notes,
  },
  argTypes: {
    children: { control: { disable: true } },
    className: { control: { disable: true } },
    testId: { control: { disable: true } },
  },
};

export const basic = (args: WorkbenchProps) => (
  <div>
    <Workbench>
      <Workbench.Header
        title={args['header title']}
        description={args['header description']}
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
          {args['workbench content']}
        </div>
      </Workbench.Content>
    </Workbench>
  </div>
);

export const withLeftSidebar = (args: WorkbenchProps) => (
  <Workbench>
    <Workbench.Header
      title={args['header title']}
      icon={<Icon icon="ArrowDown" />}
      actions={<Button buttonType="muted">Click</Button>}
    />
    <Workbench.Sidebar position="left">
      <div style={{ height: '2000px', backgroundColor: tokens.colorRedBase }}>
        {args['left sidebar']}
      </div>
    </Workbench.Sidebar>
    <Workbench.Content
      type={select(
        'Workbench.Content -> type',
        ['default', 'text', 'full'],
        'default',
      )}
    >
      <div style={{ height: '2000px', backgroundColor: tokens.colorBlueBase }}>
        {args['workbench content']}
      </div>
    </Workbench.Content>
  </Workbench>
);

export const withRightSidebar = (args: WorkbenchProps) => (
  <Workbench>
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
      <div style={{ height: '2000px', backgroundColor: tokens.colorBlueBase }}>
        {args['workbench content']}
      </div>
    </Workbench.Content>
    <Workbench.Sidebar position="right">
      <div style={{ height: '2000px', backgroundColor: tokens.colorRedBase }}>
        {args['right sidebar']}
      </div>
    </Workbench.Sidebar>
  </Workbench>
);

export const withLeftAndRightSidebar = (args: WorkbenchProps) => (
  <Workbench>
    <Workbench.Header
      title={'Page title'}
      icon={<Icon icon="ArrowDown" />}
      actions={<Button buttonType="muted">Click</Button>}
    />
    <Workbench.Sidebar position="left">
      <div style={{ height: '2000px', backgroundColor: tokens.colorRedBase }}>
        {args['left sidebar']}
      </div>
    </Workbench.Sidebar>
    <Workbench.Content
      type={select(
        'Workbench.Content -> type',
        ['default', 'text', 'full'],
        'default',
      )}
    >
      <div style={{ height: '2000px', backgroundColor: tokens.colorBlueBase }}>
        {args['workbench content']}
      </div>
    </Workbench.Content>
    <Workbench.Sidebar position="right">
      <div style={{ height: '2000px', backgroundColor: tokens.colorRedBase }}>
        {args['right sidebar']}
      </div>
    </Workbench.Sidebar>
  </Workbench>
);

export const withBackButton = (args: WorkbenchProps) => (
  <Workbench>
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
      <div style={{ height: '2000px', backgroundColor: tokens.colorBlueBase }}>
        {args['workbench content']}
      </div>
    </Workbench.Content>
  </Workbench>
);

basic.args = {
  ['header title']: 'Page title',
  ['header description']: 'Lorem Ipsum dolor sit amet.',
  ['workbench content']: 'Workbench',
  ['left sidebar']: 'left sidebar',
  ['right sidebar']: 'right sidebar',
};

withLeftSidebar.args = {
  ...basic.args,
};

withRightSidebar.args = {
  ...basic.args,
};

withLeftAndRightSidebar.args = {
  ...basic.args,
};

withBackButton.args = {
  ...basic.args,
};
