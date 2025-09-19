import React, { ComponentProps } from 'react';
import { Flex, Box } from '@contentful/f36-core';
import { type Density, DensityProvider } from '@contentful/f36-utils';
import { Heading, Paragraph } from '@contentful/f36-typography';
import { TextLink } from '@contentful/f36-text-link';
import { LockSimpleIcon } from '@contentful/f36-icons';
import {
  FormControl,
  TextInput,
  Textarea,
  Select,
  Checkbox,
  Radio,
} from '../src';

export default {
  title: 'Form Elements/FormControl',
  component: FormControl,
  argTypes: {
    className: { control: { disable: true } },
    testId: { control: { disable: true } },
  },
};

export const Basic = {
  render: (args: ComponentProps<typeof FormControl>) => {
    return (
      <>
        <FormControl {...args}>
          <FormControl.Label isRequired>Name</FormControl.Label>
          <TextInput maxLength={10} />
          <Flex justifyContent="space-between">
            <FormControl.HelpText>
              Please enter your first name
            </FormControl.HelpText>
            <FormControl.Counter />
          </Flex>

          {args.isInvalid && (
            <FormControl.ValidationMessage>Error</FormControl.ValidationMessage>
          )}
        </FormControl>

        <FormControl {...args}>
          <FormControl.Label>Description</FormControl.Label>
          <Textarea />
          <FormControl.HelpText>Tell me about yourself</FormControl.HelpText>
          {args.isInvalid && (
            <FormControl.ValidationMessage>Error</FormControl.ValidationMessage>
          )}
        </FormControl>

        <FormControl {...args}>
          <FormControl.Label>City</FormControl.Label>
          <Select defaultValue="">
            <Select.Option value="" isDisabled>
              Please, select your city
            </Select.Option>
            <Select.Option value="berlin">Berlin</Select.Option>
            <Select.Option value="san-francisco">San Francisco</Select.Option>
          </Select>
        </FormControl>

        <FormControl {...args}>
          <Checkbox defaultChecked={false}>
            I confirm everything that said above is true
          </Checkbox>
          {args.isInvalid && (
            <FormControl.ValidationMessage marginLeft="spacingL">
              Error
            </FormControl.ValidationMessage>
          )}
        </FormControl>
      </>
    );
  },
};

export const Invalid = {
  render: (args: ComponentProps<typeof FormControl>) => {
    return (
      <>
        <FormControl {...args} isInvalid>
          <FormControl.Label isRequired>Name</FormControl.Label>
          <TextInput maxLength={10} />
          <Flex justifyContent="space-between">
            <FormControl.HelpText>
              Please enter your first name
            </FormControl.HelpText>
            <FormControl.Counter />
          </Flex>

          {args.isInvalid && (
            <FormControl.ValidationMessage>Error</FormControl.ValidationMessage>
          )}
        </FormControl>

        <FormControl {...args}>
          <FormControl.Label>Description</FormControl.Label>
          <Textarea />
          <FormControl.HelpText>Tell me about yourself</FormControl.HelpText>
          {args.isInvalid && (
            <FormControl.ValidationMessage>Error</FormControl.ValidationMessage>
          )}
        </FormControl>

        <FormControl {...args}>
          <FormControl.Label>City</FormControl.Label>
          <Select defaultValue="">
            <Select.Option value="" isDisabled>
              Please, select your city
            </Select.Option>
            <Select.Option value="berlin">Berlin</Select.Option>
            <Select.Option value="san-francisco">San Francisco</Select.Option>
          </Select>
        </FormControl>

        <FormControl {...args}>
          <Checkbox defaultChecked={false}>
            I confirm everything that said above is true
          </Checkbox>
          {args.isInvalid && (
            <FormControl.ValidationMessage marginLeft="spacingL">
              Error
            </FormControl.ValidationMessage>
          )}
        </FormControl>
      </>
    );
  },
};

export const WithCheckboxGroup = {
  render: (args: ComponentProps<typeof FormControl>) => {
    return (
      <>
        <FormControl as="fieldset" {...args}>
          <FormControl.Label as="legend" marginBottom="none">
            Select your ingredients
          </FormControl.Label>
          <Paragraph>No extra costs</Paragraph>

          <Checkbox.Group name="ingredients">
            <Checkbox
              value="pickled-onions"
              helpText="Red onion sliced paper-thin, pickled in lime and gentle sea salt"
            >
              Pickled onions
            </Checkbox>
            <Checkbox
              value="pepper-jam"
              helpText="Slow roasted red bell peppers with olive oil, garlic and sumac"
            >
              Pepper jam
            </Checkbox>
            <Checkbox
              value="double-fried-fries"
              helpText="Local grown organic potatoes fried in peanut oil"
            >
              Double-fried fries
            </Checkbox>
          </Checkbox.Group>
          {args.isInvalid && (
            <FormControl.ValidationMessage>Error</FormControl.ValidationMessage>
          )}
        </FormControl>

        <FormControl as="fieldset" {...args}>
          <FormControl.Label as="legend">Burger patty</FormControl.Label>
          <Radio.Group name="burger-patty">
            <Radio
              value="beef"
              helpText="Grass-fed cows from Erdhof Hohenzollerdamm"
            >
              Beef
            </Radio>
            <Radio
              value="beyond-meat"
              helpText="Pea protein, beetroot and magic"
            >
              Beyond meat (vegan)
            </Radio>
          </Radio.Group>
          {args.isInvalid && (
            <FormControl.ValidationMessage>Error</FormControl.ValidationMessage>
          )}
        </FormControl>

        <FormControl as="fieldset" {...args}>
          <FormControl.Label as="legend">Condiments</FormControl.Label>
          <Checkbox.Group name="condiments">
            <Checkbox value="ketchup">Ketchup</Checkbox>
            <Checkbox value="mustard">Mustard</Checkbox>
            <Checkbox value="mayo">Mayo</Checkbox>
          </Checkbox.Group>
          {args.isInvalid && (
            <FormControl.ValidationMessage>Error</FormControl.ValidationMessage>
          )}
        </FormControl>
      </>
    );
  },
};

export const WithCharactersCount = {
  render: (args: ComponentProps<typeof FormControl>) => {
    return (
      <>
        <FormControl {...args}>
          <FormControl.Label isRequired>Name</FormControl.Label>
          <TextInput defaultValue="test" maxLength={10} />
          <Flex justifyContent="space-between">
            <FormControl.HelpText>
              Please enter your first name
            </FormControl.HelpText>
            <FormControl.Counter />
          </Flex>

          {args.isInvalid && (
            <FormControl.ValidationMessage>Error</FormControl.ValidationMessage>
          )}
        </FormControl>
        <FormControl {...args}>
          <FormControl.Label isRequired>Name</FormControl.Label>
          <Textarea defaultValue="Some text" maxLength={50} />
          <Flex justifyContent="space-between">
            <FormControl.HelpText>
              Please enter your first name
            </FormControl.HelpText>
            <FormControl.Counter />
          </Flex>

          {args.isInvalid && (
            <FormControl.ValidationMessage>Error</FormControl.ValidationMessage>
          )}
        </FormControl>
      </>
    );
  },
};

export const WithCustomLogic = (args: ComponentProps<typeof FormControl>) => {
  const [isDisabled, setIsDisabled] = React.useState(true);
  return (
    <FormControl {...args} isDisabled={isDisabled}>
      <Flex justifyContent="space-between" alignItems="center">
        <FormControl.Label isRequired>Name</FormControl.Label>
        <Box marginBottom="spacingS">
          <TextLink
            as="button"
            icon={<LockSimpleIcon />}
            onClick={() => {
              setIsDisabled((prevState) => !prevState);
            }}
          >
            {isDisabled ? 'Unlock to edit' : 'Lock'}
          </TextLink>
        </Box>
      </Flex>
      <TextInput aria-label="input" isDisabled={isDisabled} />
      <FormControl.HelpText>Please enter your first name</FormControl.HelpText>
      {args.isInvalid && (
        <FormControl.ValidationMessage>Error</FormControl.ValidationMessage>
      )}
    </FormControl>
  );
};

export const WithDensitySupport = {
  render: (props: ComponentProps<typeof FormControl>) => {
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
                <FormControl {...props} isInvalid isRequired>
                  <FormControl.Label>Select Value</FormControl.Label>
                  <Checkbox value="ketchup">Ketchup</Checkbox>
                  <FormControl.HelpText>
                    Please Select a value
                  </FormControl.HelpText>
                  <FormControl.ValidationMessage>
                    Error
                  </FormControl.ValidationMessage>
                </FormControl>
              </DensityProvider>
            </Flex>
          );
        })}
      </Flex>
    );
  },
};
