import React from 'react';
import type { Meta, Story } from '@storybook/react/types-6-0';
import tokens from '@contentful/f36-tokens';
import { SectionHeading } from '@contentful/f36-typography';
import { action } from '@storybook/addon-actions';
import { Box, Flex } from '@contentful/f36-core';
import { InfoIcon } from '@contentful/f36-icons';
import { css } from '@emotion/css';

import { Pill, type PillInternalProps } from '../src/Pill';

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

export const basic: Story<PillInternalProps> = (args) => (
  <Pill label={args.label} isDraggable={args.isDraggable} />
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
          <Pill label="Idle" variant="idle" />
        </Box>
        <Box marginRight="spacingXs">
          <Pill label="Active" variant="active" />
        </Box>
        <Box marginRight="spacingXs">
          <Pill label="Deleted" variant="deleted" />
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
            closeButtonAriaLabel="Remove"
          />
        </Box>
        <Box marginRight="spacingXs">
          <Pill label="Active" variant="active" onClose={args.onClose} />
        </Box>
        <Box marginRight="spacingXs">
          <Pill label="Deleted" variant="deleted" onClose={args.onClose} />
        </Box>
      </Flex>
    </Flex>
    <Flex flexDirection="column" marginBottom="spacingL">
      <SectionHeading as="h3" marginBottom="spacingS">
        Draggable
      </SectionHeading>

      <Flex flexDirection="row" marginBottom="spacingM">
        <Box marginRight="spacingXs">
          <Pill label="Idle" variant="idle" onDrag={args.onDrag} />
        </Box>
        <Box marginRight="spacingXs">
          <Pill label="Active" variant="active" onDrag={args.onDrag} />
        </Box>
        <Box marginRight="spacingXs">
          <Pill label="Deleted" variant="deleted" onDrag={args.onDrag} />
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
          />
        </Box>
        <Box marginRight="spacingXs">
          <Pill
            label="Active"
            variant="active"
            onDrag={args.onDrag}
            onClose={args.onClose}
          />
        </Box>
        <Box marginRight="spacingXs">
          <Pill
            label="Deleted"
            variant="deleted"
            onDrag={args.onDrag}
            onClose={args.onClose}
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
          />
        </Box>
        <Box marginRight="spacingXs">
          <Pill
            label="Active"
            variant="active"
            onDrag={args.onDrag}
            dragHandleComponent={args.dragHandleComponent}
          />
        </Box>
        <Box marginRight="spacingXs">
          <Pill
            label="Deleted"
            variant="deleted"
            onDrag={args.onDrag}
            dragHandleComponent={args.dragHandleComponent}
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
            onClose={args.onClose}
          />
        </Box>
        <Box marginRight="spacingXs">
          <Pill
            label="Active"
            variant="active"
            onDrag={args.onDrag}
            dragHandleComponent={args.dragHandleComponent}
            onClose={args.onClose}
          />
        </Box>
        <Box marginRight="spacingXs">
          <Pill
            label="Deleted"
            variant="deleted"
            onDrag={args.onDrag}
            dragHandleComponent={args.dragHandleComponent}
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
    <InfoIcon
      aria-label="Drag handler"
      color={tokens.gray600}
      style={{ padding: '0.375rem 0.625rem', paddingRight: 0 }}
    />
  ),
};

export const InSmallContainer: Story<PillInternalProps> = (args) => {
  const styles = {
    pill: css({
      maxWidth: 200,
    }),
  };
  const onDrag = args.isDraggable ? args.onDrag : undefined;
  return (
    <>
      <Flex flexDirection="column" marginBottom="spacingL">
        <SectionHeading as="h3" marginBottom="spacingS">
          Pill with very long text in a small container
        </SectionHeading>
        <Flex flexDirection="row" marginBottom="spacingM">
          <Box marginRight="spacingXs">
            <Pill
              isDraggable={args.isDraggable}
              label={args.label}
              className={styles.pill}
              onDrag={onDrag}
              onClose={args.onClose}
            />
          </Box>
          <Box>
            <Pill
              isDraggable={args.isDraggable}
              label={args.label}
              className={styles.pill}
              onDrag={onDrag}
              onClose={args.onClose}
            />
          </Box>
        </Flex>
      </Flex>
    </>
  );
};

InSmallContainer.args = {
  label: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris ac libero at dui auctor  convallis eget non dolor. Integer sodales, lacus et tempus faucibus, elit elit condimentum metus, a 
    dignissim velit ipsum vel nisl`,
};
