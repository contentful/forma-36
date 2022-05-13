import React from 'react';
import type { Meta, Story } from '@storybook/react/types-6-0';
import { SectionHeading } from '@contentful/f36-typography';
import { action } from '@storybook/addon-actions';
import { Box, Flex } from '@contentful/f36-core';
import { InfoCircleIcon } from '@contentful/f36-icons';

import { Pill, PillInternalProps } from '../src/Pill';

export default {
  title: 'Components/Pill',
  component: Pill,
  parameters: {
    propTypes: Pill['__docgenInfo'],
  },
  argTypes: {
    label: { control: { type: 'text' } },
    className: { control: { disable: true } },
    useLabelAsTitle: { control: 'boolean' },
    testId: { control: { disable: true } },
    onClose: { control: { disable: true } },
    onDrag: { control: { disable: true } },
    dragHandleComponent: { control: { disable: true } },
    variant: { control: { disable: true } },
  },
} as Meta;

export const basic: Story<PillInternalProps> = (args) => (
  <Pill label={args.label} useLabelAsTitle={args.useLabelAsTitle} />
);

basic.args = { label: 'example.user@contentful.com' };

export const Overview: Story<PillInternalProps> = (args) => (
  <>
    <Flex flexDirection="column" marginBottom="spacingL">
      <SectionHeading as="h3" marginBottom="spacingS">
        Pill variants
      </SectionHeading>

      <Flex flexDirection="row" marginBottom="spacingM">
        <Box marginRight="spacingXs">
          <Pill
            label="Idle"
            variant="idle"
            useLabelAsTitle={args.useLabelAsTitle}
          />
        </Box>
        <Box marginRight="spacingXs">
          <Pill
            label="Active"
            variant="active"
            useLabelAsTitle={args.useLabelAsTitle}
          />
        </Box>
        <Box marginRight="spacingXs">
          <Pill
            label="Deleted"
            variant="deleted"
            useLabelAsTitle={args.useLabelAsTitle}
          />
        </Box>
      </Flex>
    </Flex>
    <Flex flexDirection="column" marginBottom="spacingL">
      <SectionHeading as="h3" marginBottom="spacingS">
        Close
      </SectionHeading>

      <Flex flexDirection="row" marginBottom="spacingM">
        <Box marginRight="spacingXs">
          <Pill
            label="Idle"
            variant="idle"
            onClose={args.onClose}
            useLabelAsTitle={args.useLabelAsTitle}
          />
        </Box>
        <Box marginRight="spacingXs">
          <Pill
            label="Active"
            variant="active"
            onClose={args.onClose}
            useLabelAsTitle={args.useLabelAsTitle}
          />
        </Box>
        <Box marginRight="spacingXs">
          <Pill
            label="Deleted"
            variant="deleted"
            onClose={args.onClose}
            useLabelAsTitle={args.useLabelAsTitle}
          />
        </Box>
      </Flex>
    </Flex>
    <Flex flexDirection="column" marginBottom="spacingL">
      <SectionHeading as="h3" marginBottom="spacingS">
        Draggable
      </SectionHeading>

      <Flex flexDirection="row" marginBottom="spacingM">
        <Box marginRight="spacingXs">
          <Pill
            label="Idle"
            variant="idle"
            onDrag={args.onDrag}
            useLabelAsTitle={args.useLabelAsTitle}
          />
        </Box>
        <Box marginRight="spacingXs">
          <Pill
            label="Active"
            variant="active"
            onDrag={args.onDrag}
            useLabelAsTitle={args.useLabelAsTitle}
          />
        </Box>
        <Box marginRight="spacingXs">
          <Pill
            label="Deleted"
            variant="deleted"
            onDrag={args.onDrag}
            useLabelAsTitle={args.useLabelAsTitle}
          />
        </Box>
      </Flex>
    </Flex>
    <Flex flexDirection="column" marginBottom="spacingL">
      <SectionHeading as="h3" marginBottom="spacingS">
        Draggable + close
      </SectionHeading>

      <Flex flexDirection="row" marginBottom="spacingM">
        <Box marginRight="spacingXs">
          <Pill
            label="Idle"
            variant="idle"
            onDrag={args.onDrag}
            onClose={args.onClose}
            useLabelAsTitle={args.useLabelAsTitle}
          />
        </Box>
        <Box marginRight="spacingXs">
          <Pill
            label="Active"
            variant="active"
            onDrag={args.onDrag}
            onClose={args.onClose}
            useLabelAsTitle={args.useLabelAsTitle}
          />
        </Box>
        <Box marginRight="spacingXs">
          <Pill
            label="Deleted"
            variant="deleted"
            onDrag={args.onDrag}
            onClose={args.onClose}
            useLabelAsTitle={args.useLabelAsTitle}
          />
        </Box>
      </Flex>
    </Flex>
    <Flex flexDirection="column" marginBottom="spacingL">
      <SectionHeading as="h3" marginBottom="spacingS">
        Custom drag handle component
      </SectionHeading>

      <Flex flexDirection="row" marginBottom="spacingM">
        <Box marginRight="spacingXs">
          <Pill
            label="Idle"
            variant="idle"
            onDrag={args.onDrag}
            dragHandleComponent={args.dragHandleComponent}
            useLabelAsTitle={args.useLabelAsTitle}
          />
        </Box>
        <Box marginRight="spacingXs">
          <Pill
            label="Active"
            variant="active"
            onDrag={args.onDrag}
            dragHandleComponent={args.dragHandleComponent}
            useLabelAsTitle={args.useLabelAsTitle}
          />
        </Box>
        <Box marginRight="spacingXs">
          <Pill
            label="Deleted"
            variant="deleted"
            onDrag={args.onDrag}
            dragHandleComponent={args.dragHandleComponent}
            useLabelAsTitle={args.useLabelAsTitle}
          />
        </Box>
      </Flex>
    </Flex>
    <Flex flexDirection="column" marginBottom="spacingL">
      <SectionHeading as="h3" marginBottom="spacingS">
        Custom drag handle + close
      </SectionHeading>

      <Flex flexDirection="row" marginBottom="spacingM">
        <Box marginRight="spacingXs">
          <Pill
            label="Idle"
            variant="idle"
            onDrag={args.onDrag}
            dragHandleComponent={args.dragHandleComponent}
            useLabelAsTitle={args.useLabelAsTitle}
            onClose={args.onClose}
          />
        </Box>
        <Box marginRight="spacingXs">
          <Pill
            label="Active"
            variant="active"
            onDrag={args.onDrag}
            dragHandleComponent={args.dragHandleComponent}
            useLabelAsTitle={args.useLabelAsTitle}
            onClose={args.onClose}
          />
        </Box>
        <Box marginRight="spacingXs">
          <Pill
            label="Deleted"
            variant="deleted"
            onDrag={args.onDrag}
            dragHandleComponent={args.dragHandleComponent}
            useLabelAsTitle={args.useLabelAsTitle}
            onClose={args.onClose}
          />
        </Box>
      </Flex>
    </Flex>
  </>
);

Overview.args = {
  label: 'example.user@contentful.com',
  onClose: action('clicked'),
  onDrag: action('dragged'),
  dragHandleComponent: (
    <InfoCircleIcon
      aria-label="Drag handler"
      variant="muted"
      style={{ padding: '0.375rem 0.625rem', paddingRight: 0 }}
    />
  ),
};
