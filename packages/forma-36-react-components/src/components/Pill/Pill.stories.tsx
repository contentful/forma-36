import React from 'react';
import { SectionHeading } from '@contentful/f36-typography';
import { action } from '@storybook/addon-actions';
import { Flex } from '@contentful/f36-core';
import { ThumbUp } from '@contentful/f36-icons';

import { Pill, PillProps } from './Pill';

export default {
  title: 'Components/Pill',
  component: Pill,
  parameters: {
    propTypes: [Pill['__docgenInfo']],
  },
  argTypes: {
    label: { control: { type: 'text' } },
    className: { control: { disable: true } },
    testId: { control: { disable: true } },
    onClose: { control: { disable: true } },
    onDrag: { control: { disable: true } },
    dragHandleComponent: { control: { disable: true } },
    variant: { control: { disable: true } },
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
      <ThumbUp variant="primary" style={{ padding: '0.375rem 0.625rem' }} />
    }
  />
);

export const PillVariants = (args: PillProps) => (
  <>
    <div>
      <Flex marginBottom="spacingXs">
        <SectionHeading as="h3">Idle</SectionHeading>
      </Flex>
      <Pill
        label={args.label}
        onClose={args.onClose}
        onDrag={args.onDrag}
        variant="idle"
      />
    </div>
    <div className="f36-margin-top--m">
      <Flex marginBottom="spacingXs">
        <SectionHeading as="h3">Active</SectionHeading>
      </Flex>
      <Pill
        label={args.label}
        onClose={args.onClose}
        onDrag={args.onDrag}
        variant="active"
      />
    </div>
    <div className="f36-margin-top--m">
      <Flex marginBottom="spacingXs">
        <SectionHeading as="h3">Deleted</SectionHeading>
      </Flex>
      <Pill
        label={args.label}
        onClose={args.onClose}
        onDrag={args.onDrag}
        variant="deleted"
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

PillVariants.args = {
  label: 'example.user@contentful.com',
  onClose: action('clicked'),
  onDrag: action('dragged'),
};
