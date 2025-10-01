import React, { ComponentProps } from 'react';
import { action } from 'storybook/actions';
import { Flex } from '@contentful/f36-core';
import { type Density, DensityProvider } from '@contentful/f36-utils';
import { Heading, SectionHeading } from '@contentful/f36-typography';
import { Note } from '@contentful/f36-note';
import { Select } from '../src';

export default {
  title: 'Form Elements/Select',
  component: Select,
};

export const Basic = {
  render: (args: ComponentProps<typeof Select>) => (
    <Select
      id="optionSelect"
      name="optionSelect"
      {...args}
      defaultValue="optionTwo"
    >
      <Select.Option value="optionOne">Option 1</Select.Option>
      <Select.Option value="optionTwo">Option 2</Select.Option>
      <Select.Option value="optionThree" isDisabled>
        Disabled option
      </Select.Option>
    </Select>
  ),

  args: {
    size: 'medium',
  },
};

export const Overview = (args: ComponentProps<typeof Select>) => {
  const [controlledValue, setControlledValue] = React.useState('optionTwo');
  const handleOnChange = (event) => {
    setControlledValue(event.target.value);
    action('onChange')(event);
  };

  return (
    <Flex flexDirection="column">
      <SectionHeading as="h3" marginBottom="spacingS">
        Select controlled input
      </SectionHeading>

      <Flex marginBottom="spacingL">
        <Select
          {...args}
          id="optionSelect-2"
          name="optionSelect-2"
          value={controlledValue}
          onChange={handleOnChange}
        >
          <Select.Option value="optionOne">Option 1</Select.Option>
          <Select.Option value="optionTwo">Option 2</Select.Option>
          <Select.Option value="optionThree" isDisabled>
            Disabled option
          </Select.Option>
        </Select>
      </Flex>

      <SectionHeading as="h3" marginBottom="spacingS">
        Select small
      </SectionHeading>

      <Flex marginBottom="spacingL">
        <Select
          {...args}
          id="optionSelect-1"
          name="optionSelect-1"
          size="small"
          defaultValue="optionTwo"
        >
          <Select.Option value="optionOne">Option 1</Select.Option>
          <Select.Option value="optionTwo">Option 2</Select.Option>
          <Select.Option value="optionThree" isDisabled>
            Disabled option
          </Select.Option>
        </Select>
      </Flex>

      <SectionHeading as="h3" marginBottom="spacingS">
        Select default
      </SectionHeading>

      <Flex marginBottom="spacingL">
        <Select
          {...args}
          id="optionSelect-2"
          name="optionSelect-2"
          defaultValue="optionTwo"
        >
          <Select.Option value="optionOne">Option 1</Select.Option>
          <Select.Option value="optionTwo">Option 2</Select.Option>
          <Select.Option value="optionThree" isDisabled>
            Disabled option
          </Select.Option>
        </Select>
      </Flex>

      <SectionHeading as="h3" marginBottom="spacingS">
        Select disabled small
      </SectionHeading>

      <Flex marginBottom="spacingL">
        <Select
          {...args}
          id="optionSelect-6"
          name="optionSelect-6"
          size="small"
          isDisabled
          defaultValue="optionTwo"
        >
          <Select.Option value="optionOne">Option 1</Select.Option>
          <Select.Option value="optionTwo">Option 2</Select.Option>
          <Select.Option value="optionThree" isDisabled>
            Disabled option
          </Select.Option>
        </Select>
      </Flex>

      <SectionHeading as="h3" marginBottom="spacingS">
        Select disabled
      </SectionHeading>

      <Flex marginBottom="spacingL">
        <Select
          {...args}
          id="optionSelect-3"
          name="optionSelect-3"
          isDisabled
          defaultValue="optionTwo"
        >
          <Select.Option value="optionOne">Option 1</Select.Option>
          <Select.Option value="optionTwo">Option 2</Select.Option>
          <Select.Option value="optionThree" isDisabled>
            Disabled option
          </Select.Option>
        </Select>
      </Flex>

      <SectionHeading as="h3" marginBottom="spacingS">
        Select invalid small
      </SectionHeading>

      <Flex marginBottom="spacingL">
        <Select
          {...args}
          id="optionSelect-4"
          name="optionSelect-4"
          size="small"
          isInvalid
          defaultValue="optionTwo"
        >
          <Select.Option value="optionOne">Option 1</Select.Option>
          <Select.Option value="optionTwo">Option 2</Select.Option>
          <Select.Option value="optionThree" isDisabled>
            Disabled option
          </Select.Option>
        </Select>
      </Flex>

      <SectionHeading as="h3" marginBottom="spacingS">
        Select invalid
      </SectionHeading>

      <Flex marginBottom="spacingL">
        <Select
          {...args}
          id="optionSelect-5"
          name="optionSelect-5"
          isInvalid
          defaultValue="optionTwo"
        >
          <Select.Option value="optionOne">Option 1</Select.Option>
          <Select.Option value="optionTwo">Option 2</Select.Option>
          <Select.Option value="optionThree" isDisabled>
            Disabled option
          </Select.Option>
        </Select>
      </Flex>
    </Flex>
  );
};

export const WithDensitySupport = {
  render: (props: ComponentProps<typeof Select>) => {
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
      <Flex gap="spacingM" flexDirection="column">
        <Note variant="warning">
          High-density support solely available for the default size (
          <code>medium</code>)
        </Note>

        <Flex gap="spacing2Xl">
          {Densities.map((density) => {
            return (
              <Flex
                key={density.name}
                flexDirection="column"
                style={{ width: '230px' }}
              >
                <Heading>{density.name}</Heading>
                <DensityProvider value={density.density as Density}>
                  <Select
                    id="optionSelect"
                    name="optionSelect"
                    size="medium"
                    {...props}
                    defaultValue="optionTwo"
                  >
                    <Select.Option value="optionOne">Option 1</Select.Option>
                    <Select.Option value="optionTwo">
                      The quick brown fox jumps over the lazy dog like an
                      over-motivated frog
                    </Select.Option>
                  </Select>
                </DensityProvider>
              </Flex>
            );
          })}
        </Flex>
      </Flex>
    );
  },
};
