import React from 'react';
import { SectionHeading } from '@contentful/f36-typography';
import { Checkbox, CheckboxProps } from '../src';

export default {
  title: 'Form Elements/Checkbox',
  component: Checkbox,
  parameters: {
    propTypes: [Checkbox['__docgenInfo']],
  },
  argTypes: {
    className: { control: { disable: true } },
    testId: { control: { disable: true } },
  },
};

export const basic = (args: CheckboxProps) => <Checkbox {...args} />;

basic.args = {
  id: 'Checkbox',
  name: 'some name',
};

export const overview = () => (
  <>
    <SectionHeading marginTop="spacingM" marginBottom="spacingS" as="h3">
      Checkbox default
    </SectionHeading>
    <Checkbox id="Checkbox" label="some label text" name="some-name" />

    <SectionHeading as="h3" marginTop="spacingM" marginBottom="spacingS">
      Checkbox checked
    </SectionHeading>
    <Checkbox
      id="Checkbox"
      isChecked
      label="some label text"
      name="some-name"
    />

    <SectionHeading as="h3" marginBottom="spacingS" marginTop="spacingM">
      Checkbox indeterminate
    </SectionHeading>
    <Checkbox
      id="Checkbox"
      isIndeterminate
      label="multiple selection"
      name="some-name"
    />

    <SectionHeading marginBottom="spacingS" marginTop="spacingM" as="h3">
      Checkbox disabled
    </SectionHeading>
    <Checkbox
      id="Checkbox"
      isDisabled
      label="some label text"
      name="some-name"
    />

    <SectionHeading as="h3" marginBottom="spacingS" marginTop="spacingM">
      Checkbox disabled indeterminate
    </SectionHeading>
    <Checkbox
      id="Checkbox"
      isDisabled
      isIndeterminate
      label="multiple selection"
      name="some-name"
    />

    <SectionHeading as="h3" marginBottom="spacingS" marginTop="spacingM">
      Checkbox disabled checked
    </SectionHeading>
    <Checkbox
      id="Checkbox"
      isDisabled
      isChecked
      label="some label text"
      name="some-name"
    />
  </>
);
