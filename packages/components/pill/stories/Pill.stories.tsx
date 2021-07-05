import React from 'react';
import type { Meta, Story } from '@storybook/react/types-6-0';
import { SectionHeading } from '@contentful/f36-typography';
import { action } from '@storybook/addon-actions';
import { Flex } from '@contentful/f36-core';
import { ThumbUp } from '@contentful/f36-icons';

import { Pill, PillProps } from '../src/Pill';

export default {
  title: 'Components/Pill',
  component: Pill,
  parameters: {
    propTypes: Pill['__docgenInfo'],
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
} as Meta;

export const basic: Story<PillProps> = (args: PillProps) => (
  <Pill label={args.label} />
);

basic.args = { label: 'example.user@contentful.com' };

export const onDragAndOnClose: Story<PillProps> = (args: PillProps) => (
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

onDragAndOnClose.args = {
  label: 'example.user@contentful.com ',
  onClose: action('clicked'),
  onDrag: action('dragged'),
};

export const customHandleComponent: Story<PillProps> = (args: PillProps) => (
  <Pill
    label={args.label}
    onDrag={args.onDrag}
    dragHandleComponent={
      <ThumbUp variant="primary" style={{ padding: '0.375rem 0.625rem' }} />
    }
  />
);

customHandleComponent.args = {
  label: 'example.user@contentful.com',
  onClose: action('clicked'),
  onDrag: action('dragged'),
};

export const PillVariants: Story<PillProps> = (args: PillProps) => (
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

PillVariants.args = {
  label: 'example.user@contentful.com',
  onClose: action('clicked'),
  onDrag: action('dragged'),
};
