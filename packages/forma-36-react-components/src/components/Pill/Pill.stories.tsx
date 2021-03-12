import React from 'react';
import { action } from '@storybook/addon-actions';
import { Icon } from '../Icon';

import { Pill, PillProps } from './Pill';
import notes from './README.mdx';
import { SectionHeading } from '../Typography';
import { Flex } from '../Flex';

export default {
  title: 'Components/Pill',
  component: Pill,
  parameters: {
    propTypes: [Pill['__docgenInfo']],
    notes,
  },
  argTypes: {
    label: { control: { type: 'text' } },
    className: { control: { disable: true } },
    testId: { control: { disable: true } },
    onClose: { control: { disable: true } },
    onDrag: { control: { disable: true } },
    dragHandleComponent: { control: { disable: true } },
    state: { control: { disable: true } },
  },
};

export const basic = (args: PillProps) => <Pill label={args.label} />;

export const onDragAndOnClose = (args: PillProps) => (
  <>
    <div>
      <Pill label={args.label} onClose={args.onClose} onDrag={args.onDrag} />
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

export const PillStates = (args: PillProps) => (
  <>
    <div>
      <Flex marginBottom="spacingXs">
        <SectionHeading element="h3">Idle state</SectionHeading>
      </Flex>
      <Pill
        label={args.label}
        onClose={args.onClose}
        onDrag={args.onDrag}
        state="idle"
      />
    </div>
    <div className="f36-margin-top--m">
      <Flex marginBottom="spacingXs">
        <SectionHeading element="h3">Active state</SectionHeading>
      </Flex>
      <Pill
        label={args.label}
        onClose={args.onClose}
        onDrag={args.onDrag}
        state="active"
      />
    </div>
    <div className="f36-margin-top--m">
      <Flex marginBottom="spacingXs">
        <SectionHeading element="h3">Deleted state</SectionHeading>
      </Flex>
      <Pill
        label={args.label}
        onClose={args.onClose}
        onDrag={args.onDrag}
        state="deleted"
      />
    </div>
  </>
);

basic.args = { label: 'example.user@contentful.com' };

onDragAndOnClose.args = {
  label: 'example.user@contentful.com ',
  onClose: action('clicked'),
  onDrag: action('dragged'),
};

CustomHandleComponent.args = {
  label: 'example.user@contentful.com',
  onClose: action('clicked'),
  onDrag: action('dragged'),
};

PillStates.args = {
  label: 'example.user@contentful.com',
  onClose: action('clicked'),
  onDrag: action('dragged'),
};
