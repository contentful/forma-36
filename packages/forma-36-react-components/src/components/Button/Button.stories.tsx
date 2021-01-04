import React from 'react';

import Button, { ButtonProps } from './Button';
import Flex from '../Flex/Flex';
import SectionHeading from '../Typography/SectionHeading';
import Paragraph from '../Typography/Paragraph';
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
    loading: { control: { disable: true } },
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
        <Paragraph>(deprecated)</Paragraph>
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
            small
          </Button>
        </Flex>
        <Flex marginRight="spacingXs">
          <Button icon={args.icon} buttonType={args.buttonType}>
            default size
          </Button>
        </Flex>
        <Flex marginRight="spacingXs">
          <Button icon={args.icon} buttonType={args.buttonType} size="large">
            large
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
            primary isActive
          </Button>
        </Flex>
        <Flex marginRight="spacingXs">
          <Button icon={args.icon} buttonType="muted" isActive>
            muted isActive
          </Button>
        </Flex>
        <Flex marginRight="spacingXs">
          <Button icon={args.icon} buttonType="positive" isActive>
            posiitve isActive
          </Button>
        </Flex>
        <Flex marginRight="spacingXs">
          <Button icon={args.icon} buttonType="negative" isActive>
            negative isActive
          </Button>
        </Flex>
      </Flex>
      <Flex marginBottom="spacingXs">
        <Paragraph>(deprecated)</Paragraph>
      </Flex>
      <Flex flexDirection="row" marginBottom="spacingM">
        <Flex marginRight="spacingXs">
          <Button icon={args.icon} buttonType="warning" isActive>
            warning isActive
          </Button>
        </Flex>
        <Flex marginRight="spacingXs">
          <Button icon={args.icon} buttonType="naked" isActive>
            naked isActive
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
            primary disabled
          </Button>
        </Flex>
        <Flex marginRight="spacingXs">
          <Button icon={args.icon} buttonType="muted" disabled>
            muted disabled
          </Button>
        </Flex>
        <Flex marginRight="spacingXs">
          <Button icon={args.icon} buttonType="positive" disabled>
            posiitve disabled
          </Button>
        </Flex>
        <Flex marginRight="spacingXs">
          <Button icon={args.icon} buttonType="negative" disabled>
            negative disabled
          </Button>
        </Flex>
      </Flex>
      <Flex marginBottom="spacingXs">
        <Paragraph>(deprecated)</Paragraph>
      </Flex>
      <Flex flexDirection="row" marginBottom="spacingM">
        <Flex marginRight="spacingXs">
          <Button icon={args.icon} buttonType="warning" disabled>
            warning disabled
          </Button>
        </Flex>
        <Flex marginRight="spacingXs">
          <Button icon={args.icon} buttonType="naked" disabled>
            naked disabled
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
            primary with dropdown
          </Button>
        </Flex>
        <Flex marginRight="spacingXs">
          <Button icon={args.icon} buttonType="muted" indicateDropdown>
            muted with dropdown
          </Button>
        </Flex>
        <Flex marginRight="spacingXs">
          <Button icon={args.icon} buttonType="positive" indicateDropdown>
            posiitve with dropdown
          </Button>
        </Flex>
        <Flex marginRight="spacingXs">
          <Button icon={args.icon} buttonType="negative" indicateDropdown>
            negative with dropdown
          </Button>
        </Flex>
      </Flex>
      <Flex marginBottom="spacingXs">
        <Paragraph>(deprecated)</Paragraph>
      </Flex>
      <Flex flexDirection="row" marginBottom="spacingM">
        <Flex marginRight="spacingXs">
          <Button icon={args.icon} buttonType="warning" indicateDropdown>
            warning with dropdown
          </Button>
        </Flex>
        <Flex marginRight="spacingXs">
          <Button icon={args.icon} buttonType="naked" indicateDropdown>
            naked with dropdown
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
        <Paragraph>(deprecated)</Paragraph>
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
