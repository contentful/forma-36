import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { text } from '@storybook/addon-knobs';
import Icon from '../Icon';

import Pill, {PillProps} from './Pill';
import notes from './README.md';


export default {
  title: 'Components/Pill',
  component: Pill,
  parameters: {
    propTypes: [Pill['__docgenInfo']],
    notes,
  },
  argTypes: {
    label: { control: { type: 'text'} },
    className: { control: { disable: true } },
    testId: { control: { disable: true } },
    onClose:{ control: { disable: true } },
    onDrag:{ control: { disable: true } },
    dragHandleComponent: { control: { disable: true } },
  },
};

export const basic = (args: PillProps) => (
  <Pill
      label={args.label}
    />
);

export const onDragAndOnClose = (args: PillProps) => (
  <>
    <div>
      <Pill
        label={args.label}
        onClose={args.onClose}
        onDrag={args.onDrag}
      />
    </div>
    <div className="f36-margin-top--m">
      <Pill
        style={{ width: 200 }}
        label={args.label}
        onClose={args.onClose}
        onDrag={args.onDrag}
      />
    </div>
  </>
);

export const CustomHandleComponent = (args: PillProps) => (
  <Pill
    label={args.label}
    onDrag={args.onDrag}
    dragHandleComponent={
      <Icon
        icon="ThumbUp"
        color="primary"
        style={{ padding: '0.375rem 0.625rem' }}
      />
    }
  />
);

basic.args = { label: 'mike.mitchell@contentful.com' };

onDragAndOnClose.args = {
  label: 'guilherme.santos@contentful.com ',
  onClose: action('clicked'),
  onDrag: action('dragged'),
};

CustomHandleComponent.args = {
  label: 'moe.shaaban@contentful.com',
  onClose: action('clicked'),
  onDrag: action('dragged'),
};