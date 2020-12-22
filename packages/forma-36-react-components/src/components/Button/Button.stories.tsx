import React from 'react';

import Button, { ButtonProps, buttonTypes } from './Button';
import Flex from '../Flex/Flex';
import SectionHeading from '../Typography/SectionHeading';
import { iconName } from '../Icon/constants';

import notes from './README.mdx';

export default {
  title: 'Components/Button',
  component: Button,
  parameters: {
    propTypes: [Button['__docgenInfo']],
    notes,
  },
  argTypes: {
    icon: { control: { type: 'select', options: iconName } },
    buttonType: { control: { type: 'select', options: buttonTypes } },
    size: {
      control: { type: 'select', options: [undefined, 'small', 'large'] },
    },
    className: { control: { disable: true } },
    testId: { control: { disable: true } },
    onClick: { control: { disable: true } },
    onBlur: { control: { disable: true } },
    loading: { control: { disable: true } },
  },
};

export const basic = (args: ButtonProps) => (
  <Button buttonType={args.buttonType} size={args.size}>
    {args['Button Text']}
  </Button>
);

export const typesOverview = (args: ButtonProps) => (
  <>
    <Flex flexDirection="column">
      <Flex marginBottom="spacingS">
        <SectionHeading element="h3">Button variants</SectionHeading>
        <br />
      </Flex>
      <Flex flexDirection="row" marginBottom="spacingM">
        <Button buttonType="primary">primary</Button>
        <Button buttonType="positive">posiitve</Button>
        <Button buttonType="warning">warning</Button>
        <Button buttonType="negative">negative</Button>
        <Button buttonType="muted">muted</Button>
        <Button buttonType="naked">naked</Button>
      </Flex>
    </Flex>
    <Flex flexDirection="column">
      <Flex marginBottom="spacingS">
        <SectionHeading element="h3">Button sizes</SectionHeading>
      </Flex>
      <Flex flexDirection="row" marginBottom="spacingM">
        <Button buttonType={args.buttonType} size="small">
          small
        </Button>
        <Button buttonType={args.buttonType}>default size</Button>
        <Button buttonType={args.buttonType} size="large">
          large
        </Button>
      </Flex>
    </Flex>
    <Flex flexDirection="column">
      <Flex marginBottom="spacingS">
        <SectionHeading element="h3">Button active state</SectionHeading>
      </Flex>
      <Flex flexDirection="row" marginBottom="spacingM">
        <Button buttonType="primary" isActive>
          primary isActive
        </Button>
        <Button buttonType="positive" isActive>
          posiitve isActive
        </Button>
        <Button buttonType="warning" isActive>
          warning isActive
        </Button>
        <Button buttonType="negative" isActive>
          negative isActive
        </Button>
        <Button buttonType="muted" isActive>
          muted isActive
        </Button>
        <Button buttonType="naked" isActive>
          naked isActive
        </Button>
      </Flex>
    </Flex>

    <Flex flexDirection="column">
      <Flex marginBottom="spacingS">
        <SectionHeading element="h3">Button disabled</SectionHeading>
      </Flex>
      <Flex flexDirection="row" marginBottom="spacingM">
        <Button buttonType="primary" disabled>
          primary disabled
        </Button>
        <Button buttonType="positive" disabled>
          posiitve disabled
        </Button>
        <Button buttonType="warning" disabled>
          warning disabled
        </Button>
        <Button buttonType="negative" disabled>
          negative disabled
        </Button>
        <Button buttonType="muted" disabled>
          muted disabled
        </Button>
        <Button buttonType="naked" disabled>
          naked disabled
        </Button>
      </Flex>
    </Flex>
    <Flex flexDirection="column">
      <Flex marginBottom="spacingS">
        <SectionHeading element="h3">Button with dropdown</SectionHeading>
      </Flex>
      <Flex flexDirection="row" marginBottom="spacingM">
        <Button buttonType="primary" indicateDropdown>
          primary with dropdown
        </Button>
        <Button buttonType="positive" indicateDropdown>
          posiitve with dropdown
        </Button>
        <Button buttonType="warning" indicateDropdown>
          warning with dropdown
        </Button>
        <Button buttonType="negative" indicateDropdown>
          negative with dropdown
        </Button>
        <Button buttonType="muted" indicateDropdown>
          muted with dropdown
        </Button>
        <Button buttonType="naked" indicateDropdown>
          naked with dropdown
        </Button>
      </Flex>
    </Flex>

    <Flex flexDirection="column">
      <Flex marginBottom="spacingS">
        <SectionHeading element="h3">Button loading</SectionHeading>
      </Flex>
      <Flex flexDirection="row" marginBottom="spacingM">
        <Button buttonType="primary" loading>
          primary loading
        </Button>
        <Button buttonType="positive" loading>
          posiitve loading
        </Button>
        <Button buttonType="warning" loading>
          warning loading
        </Button>
        <Button buttonType="negative" loading>
          negative loading
        </Button>
        <Button buttonType="muted" loading>
          muted loading
        </Button>
        <Button buttonType="naked" loading>
          naked loading
        </Button>
      </Flex>
    </Flex>
  </>
);

basic.args = {
  buttonType: 'positive',
  'Button Text': 'Embed entry',
};
