import React from 'react';

import Button, { ButtonProps } from './Button';
import Flex from '../Flex/Flex';
import SectionHeading from '../Typography/SectionHeading';
import Tag from '../Tag';
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
    className: { control: { disable: true } },
    testId: { control: { disable: true } },
    onClick: { control: { disable: true } },
    onBlur: { control: { disable: true } },
  },
};

interface Args extends ButtonProps {
  label?: string;
}

export const basic = ({ label, ...args }: Args) => (
  <Button {...args}>{label}</Button>
);
basic.args = {
  label: 'Button',
};

export const Overview = (args: ButtonProps) => (
  <>
    <Flex flexDirection="column" marginBottom="spacingL">
      <Flex marginBottom="spacingS">
        <SectionHeading element="h3">Button variants</SectionHeading>
      </Flex>
      <Flex flexDirection="row" marginBottom="spacingM">
        <Flex marginRight="spacingXs">
          <Button icon={args.icon} buttonType="primary">
            Primary
          </Button>
        </Flex>
        <Flex marginRight="spacingXs">
          <Button icon={args.icon} buttonType="muted">
            Muted
          </Button>
        </Flex>
        <Flex marginRight="spacingXs">
          <Button icon={args.icon} buttonType="positive">
            Positive
          </Button>
        </Flex>
        <Flex marginRight="spacingXs">
          <Button icon={args.icon} buttonType="negative">
            Negative
          </Button>
        </Flex>
      </Flex>
      <Flex marginBottom="spacingXs">
        <Tag tagType="warning">(deprecated)</Tag>
      </Flex>
      <Flex flexDirection="row" marginBottom="spacingM">
        <Flex marginRight="spacingXs">
          <Button icon={args.icon} buttonType="warning">
            Warning
          </Button>
        </Flex>
        <Flex marginRight="spacingXs">
          <Button icon={args.icon} buttonType="naked">
            Naked
          </Button>
        </Flex>
      </Flex>
    </Flex>

    <Flex flexDirection="column" marginBottom="spacingL">
      <Flex marginBottom="spacingS">
        <SectionHeading element="h3">Button sizes</SectionHeading>
      </Flex>
      <Flex flexDirection="row" marginBottom="spacingM">
        <Flex marginRight="spacingXs">
          <Button icon={args.icon} buttonType={args.buttonType} size="small">
            Small
          </Button>
        </Flex>
        <Flex marginRight="spacingXs">
          <Button icon={args.icon} buttonType={args.buttonType}>
            Medium (default)
          </Button>
        </Flex>
        <Flex marginRight="spacingXs">
          <Button icon={args.icon} buttonType={args.buttonType} size="large">
            Large
          </Button>
        </Flex>
      </Flex>
    </Flex>

    <Flex flexDirection="column" marginBottom="spacingL">
      <Flex marginBottom="spacingS">
        <SectionHeading element="h3">Button active state</SectionHeading>
      </Flex>
      <Flex flexDirection="row" marginBottom="spacingM">
        <Flex marginRight="spacingXs">
          <Button icon={args.icon} buttonType="primary" isActive>
            Primary isActive
          </Button>
        </Flex>
        <Flex marginRight="spacingXs">
          <Button icon={args.icon} buttonType="muted" isActive>
            Muted isActive
          </Button>
        </Flex>
        <Flex marginRight="spacingXs">
          <Button icon={args.icon} buttonType="positive" isActive>
            Posiitve isActive
          </Button>
        </Flex>
        <Flex marginRight="spacingXs">
          <Button icon={args.icon} buttonType="negative" isActive>
            Negative isActive
          </Button>
        </Flex>
      </Flex>
      <Flex marginBottom="spacingXs">
        <Tag tagType="warning">(deprecated)</Tag>
      </Flex>
      <Flex flexDirection="row" marginBottom="spacingM">
        <Flex marginRight="spacingXs">
          <Button icon={args.icon} buttonType="warning" isActive>
            Warning isActive
          </Button>
        </Flex>
        <Flex marginRight="spacingXs">
          <Button icon={args.icon} buttonType="naked" isActive>
            Naked isActive
          </Button>
        </Flex>
      </Flex>
    </Flex>

    <Flex flexDirection="column" marginBottom="spacingL">
      <Flex marginBottom="spacingS">
        <SectionHeading element="h3">Button disabled</SectionHeading>
      </Flex>
      <Flex flexDirection="row" marginBottom="spacingM">
        <Flex marginRight="spacingXs">
          <Button icon={args.icon} buttonType="primary" disabled>
            Primary disabled
          </Button>
        </Flex>
        <Flex marginRight="spacingXs">
          <Button icon={args.icon} buttonType="muted" disabled>
            Muted disabled
          </Button>
        </Flex>
        <Flex marginRight="spacingXs">
          <Button icon={args.icon} buttonType="positive" disabled>
            Posiitve disabled
          </Button>
        </Flex>
        <Flex marginRight="spacingXs">
          <Button icon={args.icon} buttonType="negative" disabled>
            Negative disabled
          </Button>
        </Flex>
      </Flex>
      <Flex marginBottom="spacingXs">
        <Tag tagType="warning">(deprecated)</Tag>
      </Flex>
      <Flex flexDirection="row" marginBottom="spacingM">
        <Flex marginRight="spacingXs">
          <Button icon={args.icon} buttonType="warning" disabled>
            Warning disabled
          </Button>
        </Flex>
        <Flex marginRight="spacingXs">
          <Button icon={args.icon} buttonType="naked" disabled>
            Naked disabled
          </Button>
        </Flex>
      </Flex>
    </Flex>

    <Flex flexDirection="column" marginBottom="spacingL">
      <Flex marginBottom="spacingS">
        <SectionHeading element="h3">Button with dropdown</SectionHeading>
      </Flex>
      <Flex flexDirection="row" marginBottom="spacingM">
        <Flex marginRight="spacingXs">
          <Button icon={args.icon} buttonType="primary" indicateDropdown>
            Primary with dropdown
          </Button>
        </Flex>
        <Flex marginRight="spacingXs">
          <Button icon={args.icon} buttonType="muted" indicateDropdown>
            Muted with dropdown
          </Button>
        </Flex>
        <Flex marginRight="spacingXs">
          <Button icon={args.icon} buttonType="positive" indicateDropdown>
            Posiitve with dropdown
          </Button>
        </Flex>
        <Flex marginRight="spacingXs">
          <Button icon={args.icon} buttonType="negative" indicateDropdown>
            Negative with dropdown
          </Button>
        </Flex>
      </Flex>
      <Flex marginBottom="spacingXs">
        <Tag tagType="warning">(deprecated)</Tag>
      </Flex>
      <Flex flexDirection="row" marginBottom="spacingM">
        <Flex marginRight="spacingXs">
          <Button icon={args.icon} buttonType="warning" indicateDropdown>
            Warning with dropdown
          </Button>
        </Flex>
        <Flex marginRight="spacingXs">
          <Button icon={args.icon} buttonType="naked" indicateDropdown>
            Naked with dropdown
          </Button>
        </Flex>
      </Flex>
    </Flex>

    <Flex flexDirection="column" marginBottom="spacingL">
      <Flex marginBottom="spacingS">
        <SectionHeading element="h3">Button loading</SectionHeading>
      </Flex>
      <Flex flexDirection="row" marginBottom="spacingM">
        <Flex marginRight="spacingXs">
          <Button icon={args.icon} buttonType="primary" loading>
            primary loading
          </Button>
        </Flex>
        <Flex marginRight="spacingXs">
          <Button icon={args.icon} buttonType="muted" loading>
            muted loading
          </Button>
        </Flex>
        <Flex marginRight="spacingXs">
          <Button icon={args.icon} buttonType="positive" loading>
            posiitve loading
          </Button>
        </Flex>
        <Flex marginRight="spacingXs">
          <Button icon={args.icon} buttonType="negative" loading>
            negative loading
          </Button>
        </Flex>
      </Flex>
      <Flex marginBottom="spacingXs">
        <Tag tagType="warning">(deprecated)</Tag>
      </Flex>
      <Flex flexDirection="row" marginBottom="spacingM">
        <Flex marginRight="spacingXs">
          <Button icon={args.icon} buttonType="warning" loading>
            warning loading
          </Button>
        </Flex>
        <Flex marginRight="spacingXs">
          <Button icon={args.icon} buttonType="naked" loading>
            naked loading
          </Button>
        </Flex>
      </Flex>
    </Flex>
  </>
);
