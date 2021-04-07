import React, { Fragment } from 'react';
import type { Meta, Story } from '@storybook/react/types-6-0';
import { SectionHeading } from '@contentful/f36-typography';

import { Datepicker } from '../src/';

export default {
  title: 'Form Elements/Datepicker',
  component: Datepicker,
  parameters: {
    propTypes: [Datepicker['__docgenInfo']],
  },
  argTypes: {
    className: { control: { disable: true } },
    testId: { control: { disable: true } },
    style: { control: { disable: true } },
  },
} as Meta;

export const Default: Story = (args) => {
  return <Datepicker {...args} />;
};

Default.args = {
  isOpen: undefined,
};

export const Overview: Story = () => {
  return (
    <Fragment>
      <SectionHeading as="h3" marginBottom="spacingS">
        Default
      </SectionHeading>
      <Datepicker marginBottom="spacingS" />

      <SectionHeading as="h3" marginBottom="spacingS">
        Open
      </SectionHeading>
      <Datepicker isOpen />
    </Fragment>
  );
};
