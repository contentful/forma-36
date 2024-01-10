import React, { useState } from 'react';
import { SectionHeading } from '@contentful/f36-typography';
import { Flex } from '@contentful/f36-core';
import { Checkbox, CheckboxProps } from '../src';
import { type Density } from '@contentful/f36-utils';
import { DensityContainer } from '../../density-container';

export default {
  title: 'Form Elements/Checkbox',
  component: Checkbox,
  argTypes: {
    className: { control: { disable: true } },
    testId: { control: { disable: true } },
  },
};

export const Basic = (args: CheckboxProps) => {
  const [optionOne, setOptionOne] = useState(false);
  const [optionTwo, setOptionTwo] = useState(false);

  return (
    <Flex flexDirection="column">
      <Checkbox
        {...args}
        id="Checkbox1"
        isChecked={optionOne}
        value="yes"
        onChange={(e) => setOptionOne((e.target as HTMLInputElement).checked)}
      />
      <Checkbox
        {...args}
        id="Checkbox2"
        value="no"
        isChecked={optionTwo}
        onChange={(e) => setOptionTwo((e.target as HTMLInputElement).checked)}
      />
    </Flex>
  );
};

Basic.args = {
  children: 'some label text',
  name: 'some name',
};

export const CheckboxWithCustomLabel = (args: CheckboxProps) => {
  const [optionOne, setOptionOne] = useState(false);
  const [optionTwo, setOptionTwo] = useState(false);

  return (
    <Flex flexDirection="column">
      <Checkbox
        {...args}
        id="Checkbox1"
        isChecked={optionOne}
        value="yes"
        onChange={(e) => setOptionOne((e.target as HTMLInputElement).checked)}
      >
        Forma 36 checkbox label
      </Checkbox>
      <Flex alignItems="center" gap="spacingXs">
        <Checkbox
          {...args}
          id="Checkbox2"
          value="no"
          isChecked={optionTwo}
          onChange={(e) => setOptionTwo((e.target as HTMLInputElement).checked)}
        />
        <div>A custom label</div>
      </Flex>
    </Flex>
  );
};
export const Indeterminate = () => {
  const [checkedItems, setCheckedItems] = React.useState([false, false]);

  const allChecked = checkedItems.every(Boolean);
  const isIndeterminate = checkedItems.some(Boolean) && !allChecked;

  return (
    <>
      <Checkbox
        isChecked={allChecked}
        isIndeterminate={isIndeterminate}
        onChange={(e) => setCheckedItems([e.target.checked, e.target.checked])}
      >
        Parent Checkbox
      </Checkbox>
      <Flex flexDirection="column" paddingLeft="spacingL">
        <Checkbox
          isChecked={checkedItems[0]}
          onChange={(e) => setCheckedItems([e.target.checked, checkedItems[1]])}
        >
          Child Checkbox 1
        </Checkbox>
        <Checkbox
          isChecked={checkedItems[1]}
          onChange={(e) => setCheckedItems([checkedItems[0], e.target.checked])}
        >
          Child Checkbox 2
        </Checkbox>
      </Flex>
    </>
  );
};

const DensitySupport = () => {
  const Densities = [
    {
      name: 'Low density',
      density: 'low',
    },
    {
      name: 'High density',
      density: 'high',
    },
  ];

  return (
    <>
      <SectionHeading as="h3" marginBottom="spacingS" marginTop="spacingM">
        Density Support
      </SectionHeading>
      <Flex gap="spacingS">
        {Densities.map((density) => {
          return (
            <DensityContainer
              key={density.name}
              density={density.density as Density}
            >
              <Checkbox name={density.name}>{density.name}</Checkbox>
            </DensityContainer>
          );
        })}
      </Flex>
    </>
  );
};

export const overview = () => (
  <>
    <SectionHeading as="h3" marginBottom="spacingS" marginTop="spacingM">
      Checkbox default
    </SectionHeading>

    <Checkbox name="someOption1" value="yes" id="termsCheckbox1">
      Option 1
    </Checkbox>

    <SectionHeading as="h3" marginBottom="spacingS" marginTop="spacingM">
      Checkbox checked
    </SectionHeading>

    <Checkbox name="someOption2" isChecked value="yes" id="termsCheckbox2">
      Option 1
    </Checkbox>

    <SectionHeading as="h3" marginBottom="spacingS" marginTop="spacingM">
      Checkbox indeterminate
    </SectionHeading>

    <Checkbox
      name="someOption3"
      isIndeterminate
      value="yes"
      id="termsCheckbox3"
    >
      Option 1
    </Checkbox>

    <SectionHeading as="h3" marginBottom="spacingS" marginTop="spacingM">
      Checkbox disabled
    </SectionHeading>

    <Checkbox isDisabled name="someOption4" value="no" id="termsCheckbox4">
      Option 2
    </Checkbox>

    <SectionHeading as="h3" marginBottom="spacingS" marginTop="spacingM">
      Checkbox disabled checked
    </SectionHeading>

    <Checkbox
      isDisabled
      isChecked
      name="someOption5"
      value="no"
      id="termsCheckbox5"
    >
      Option 2
    </Checkbox>

    <SectionHeading as="h3" marginBottom="spacingS" marginTop="spacingM">
      Checkbox disabled indeterminate
    </SectionHeading>

    <Checkbox
      name="someOption6"
      isIndeterminate
      isDisabled
      value="yes"
      id="termsCheckbox6"
    >
      Option 1
    </Checkbox>

    <DensitySupport />
  </>
);
