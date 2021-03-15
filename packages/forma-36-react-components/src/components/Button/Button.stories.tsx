import React from 'react';
import { Flex } from '@contentful/f36-layout';

import { Button, ButtonProps } from './Button';
import { SectionHeading } from '../Typography';
import { Badge } from '@contentful/f36-badge';
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

type Args = ButtonProps & {
  label?: string;
};

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
        <Badge variant="warning">(deprecated)</Badge>
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
            Positive isActive
          </Button>
        </Flex>
        <Flex marginRight="spacingXs">
          <Button icon={args.icon} buttonType="negative" isActive>
            Negative isActive
          </Button>
        </Flex>
      </Flex>
      <Flex marginBottom="spacingXs">
        <Badge variant="warning">(deprecated)</Badge>
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
            Positive disabled
          </Button>
        </Flex>
        <Flex marginRight="spacingXs">
          <Button icon={args.icon} buttonType="negative" disabled>
            Negative disabled
          </Button>
        </Flex>
      </Flex>
      <Flex marginBottom="spacingXs">
        <Badge variant="warning">(deprecated)</Badge>
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
            Positive with dropdown
          </Button>
        </Flex>
        <Flex marginRight="spacingXs">
          <Button icon={args.icon} buttonType="negative" indicateDropdown>
            Negative with dropdown
          </Button>
        </Flex>
      </Flex>
      <Flex marginBottom="spacingXs">
        <Badge variant="warning">(deprecated)</Badge>
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
            Primary loading
          </Button>
        </Flex>
        <Flex marginRight="spacingXs">
          <Button icon={args.icon} buttonType="muted" loading>
            Muted loading
          </Button>
        </Flex>
        <Flex marginRight="spacingXs">
          <Button icon={args.icon} buttonType="positive" loading>
            Positive loading
          </Button>
        </Flex>
        <Flex marginRight="spacingXs">
          <Button icon={args.icon} buttonType="negative" loading>
            Negative loading
          </Button>
        </Flex>
      </Flex>
      <Flex marginBottom="spacingXs">
        <Badge variant="warning">(deprecated)</Badge>
      </Flex>
      <Flex flexDirection="row" marginBottom="spacingM">
        <Flex marginRight="spacingXs">
          <Button icon={args.icon} buttonType="warning" loading>
            Warning loading
          </Button>
        </Flex>
        <Flex marginRight="spacingXs">
          <Button icon={args.icon} buttonType="naked" loading>
            Naked loading
          </Button>
        </Flex>
      </Flex>
    </Flex>

    <Flex flexDirection="column" marginBottom="spacingL">
      <Flex marginBottom="spacingS">
        <SectionHeading element="h3">Icon only button</SectionHeading>
      </Flex>
      <Flex flexDirection="row" marginBottom="spacingM">
        <Flex marginRight="spacingXs">
          <Button buttonType="muted" icon="Download" aria-label="Download" />
        </Flex>
        <Flex marginRight="spacingXs">
          <Button buttonType="muted" icon={args.icon} loading />
        </Flex>
        <Flex marginRight="spacingXs">
          <Button buttonType="positive" icon="Drag" aria-label="Resize" />
        </Flex>
        <Flex marginRight="spacingXs">
          <Button buttonType="negative" icon="Delete" aria-label="Delete" />
        </Flex>
        <Flex marginRight="spacingXs">
          <Button buttonType="warning" icon="Edit" aria-label="Edit" />
        </Flex>
        <Flex marginRight="spacingXs">
          <Button buttonType="primary" icon="Plus" aria-label="Add" />
        </Flex>
      </Flex>
    </Flex>

    <Flex flexDirection="column" marginBottom="spacingL">
      <Flex marginBottom="spacingS">
        <SectionHeading element="h3">Full width button</SectionHeading>
      </Flex>
      <Flex flexDirection="row" marginBottom="spacingS">
        <Button isFullWidth>Full width button</Button>
      </Flex>
      <Flex flexDirection="row" marginBottom="spacingS">
        <Button icon="Star" isFullWidth>
          Full width button
        </Button>
      </Flex>
      <Flex flexDirection="row" marginBottom="spacingS">
        <Button icon="Star" indicateDropdown isFullWidth>
          Full width button
        </Button>
      </Flex>
    </Flex>
  </>
);
