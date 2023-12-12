import React, { Fragment } from 'react';
import { SectionHeading } from '@contentful/f36-typography';
import type { Meta, Story } from '@storybook/react/types-6-0';

import * as icons from '../src/v5';
import type { IconProps } from '../src';

export default {
  argTypes: {
    as: { control: { disable: true } },
    className: { control: { disable: true } },
    style: { control: { disable: true } },
    testId: { control: { disable: true } },
  },
  component: icons.ArrowCounterClockwiseIcon,
  parameters: {
    propTypes: [icons.ArrowCounterClockwiseIcon['__docgenInfo']],
  },
  title: 'Components/Icons/new',
} as Meta;

export const Overview: Story<IconProps> = () => {
  return (
    <Fragment>
      <SectionHeading as="h3" marginRight="spacingS" marginBottom="spacingS">
        Forma 36 v5 icon proposal
      </SectionHeading>

      <icons.ArrowCounterClockwiseIcon />
      <icons.ArrowCounterClockwiseIcon isActive />
      <icons.ArrowCounterClockwiseIcon size="small" />
      <icons.ArrowCounterClockwiseIcon isActive size="small" />
    </Fragment>
  );
};
