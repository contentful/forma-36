import React from 'react';
import { Flex } from '@contentful/f36-core';
import { SectionHeading } from '@contentful/f36-typography';
import { Badge } from '@contentful/f36-badge';
import * as icons from '@contentful/f36-icons';
import type { Story } from '@storybook/react';

import { Button, ButtonProps } from './Button';

export default {
  argTypes: {
    icon: {
      control: {
        options: Object.keys(icons),
        type: 'select',
      },
    },
    className: { control: { disable: true } },
    testId: { control: { disable: true } },
    onClick: { control: { disable: true } },
    onBlur: { control: { disable: true } },
  },
  component: Button,
  parameters: {
    propTypes: [Button['__docgenInfo']],
  },
  title: 'Components/Button',
};

type Args = ButtonProps & {
  icon: string;
  label?: string;
};

export const basic: Story<Args> = ({ icon, label, ...args }) => (
  <Button icon={icons[icon]} {...args}>
    {label}
  </Button>
);

basic.args = {
  label: 'Button',
};

export const Overview = (args) => {
  return (
    <>
      <Flex flexDirection="column" marginBottom="spacingL">
        <Flex marginBottom="spacingS">
          <SectionHeading as="h3">Button variants</SectionHeading>
        </Flex>
        <Flex flexDirection="row" marginBottom="spacingM">
          <Flex marginRight="spacingXs">
            <Button buttonType="primary" icon={icons[args.icon]}>
              Primary
            </Button>
          </Flex>
          <Flex marginRight="spacingXs">
            <Button buttonType="muted" icon={icons[args.icon]}>
              Muted
            </Button>
          </Flex>
          <Flex marginRight="spacingXs">
            <Button buttonType="positive" icon={icons[args.icon]}>
              Positive
            </Button>
          </Flex>
          <Flex marginRight="spacingXs">
            <Button buttonType="negative" icon={icons[args.icon]}>
              Negative
            </Button>
          </Flex>
        </Flex>
        <Flex marginBottom="spacingXs">
          <Badge variant="warning">(deprecated)</Badge>
        </Flex>
        <Flex flexDirection="row" marginBottom="spacingM">
          <Flex marginRight="spacingXs">
            <Button buttonType="warning" icon={icons[args.icon]}>
              Warning
            </Button>
          </Flex>
          <Flex marginRight="spacingXs">
            <Button buttonType="naked" icon={icons[args.icon]}>
              Naked
            </Button>
          </Flex>
        </Flex>
      </Flex>

      <Flex flexDirection="column" marginBottom="spacingL">
        <Flex marginBottom="spacingS">
          <SectionHeading as="h3">Button sizes</SectionHeading>
        </Flex>
        <Flex flexDirection="row" marginBottom="spacingM">
          <Flex marginRight="spacingXs">
            <Button
              buttonType={args.buttonType}
              icon={icons[args.icon]}
              size="small"
            >
              Small
            </Button>
          </Flex>
          <Flex marginRight="spacingXs">
            <Button buttonType={args.buttonType} icon={icons[args.icon]}>
              Medium (default)
            </Button>
          </Flex>
          <Flex marginRight="spacingXs">
            <Button
              buttonType={args.buttonType}
              icon={icons[args.icon]}
              size="large"
            >
              Large
            </Button>
          </Flex>
        </Flex>
      </Flex>

      <Flex flexDirection="column" marginBottom="spacingL">
        <Flex marginBottom="spacingS">
          <SectionHeading as="h3">Button active state</SectionHeading>
        </Flex>
        <Flex flexDirection="row" marginBottom="spacingM">
          <Flex marginRight="spacingXs">
            <Button buttonType="primary" icon={icons[args.icon]} isActive>
              Primary isActive
            </Button>
          </Flex>
          <Flex marginRight="spacingXs">
            <Button buttonType="muted" icon={icons[args.icon]} isActive>
              Muted isActive
            </Button>
          </Flex>
          <Flex marginRight="spacingXs">
            <Button buttonType="positive" icon={icons[args.icon]} isActive>
              Positive isActive
            </Button>
          </Flex>
          <Flex marginRight="spacingXs">
            <Button buttonType="negative" icon={icons[args.icon]} isActive>
              Negative isActive
            </Button>
          </Flex>
        </Flex>
        <Flex marginBottom="spacingXs">
          <Badge variant="warning">(deprecated)</Badge>
        </Flex>
        <Flex flexDirection="row" marginBottom="spacingM">
          <Flex marginRight="spacingXs">
            <Button buttonType="warning" icon={icons[args.icon]} isActive>
              Warning isActive
            </Button>
          </Flex>
          <Flex marginRight="spacingXs">
            <Button buttonType="naked" icon={icons[args.icon]} isActive>
              Naked isActive
            </Button>
          </Flex>
        </Flex>
      </Flex>

      <Flex flexDirection="column" marginBottom="spacingL">
        <Flex marginBottom="spacingS">
          <SectionHeading as="h3">Button disabled</SectionHeading>
        </Flex>
        <Flex flexDirection="row" marginBottom="spacingM">
          <Flex marginRight="spacingXs">
            <Button buttonType="primary" disabled icon={icons[args.icon]}>
              Primary disabled
            </Button>
          </Flex>
          <Flex marginRight="spacingXs">
            <Button buttonType="muted" disabled icon={icons[args.icon]}>
              Muted disabled
            </Button>
          </Flex>
          <Flex marginRight="spacingXs">
            <Button buttonType="positive" disabled icon={icons[args.icon]}>
              Positive disabled
            </Button>
          </Flex>
          <Flex marginRight="spacingXs">
            <Button buttonType="negative" disabled icon={icons[args.icon]}>
              Negative disabled
            </Button>
          </Flex>
        </Flex>
        <Flex marginBottom="spacingXs">
          <Badge variant="warning">(deprecated)</Badge>
        </Flex>
        <Flex flexDirection="row" marginBottom="spacingM">
          <Flex marginRight="spacingXs">
            <Button buttonType="warning" disabled icon={icons[args.icon]}>
              Warning disabled
            </Button>
          </Flex>
          <Flex marginRight="spacingXs">
            <Button buttonType="naked" disabled icon={icons[args.icon]}>
              Naked disabled
            </Button>
          </Flex>
        </Flex>
      </Flex>

      <Flex flexDirection="column" marginBottom="spacingL">
        <Flex marginBottom="spacingS">
          <SectionHeading as="h3">Button with dropdown</SectionHeading>
        </Flex>
        <Flex flexDirection="row" marginBottom="spacingM">
          <Flex marginRight="spacingXs">
            <Button buttonType="primary" indicateDropdown>
              Primary with dropdown
            </Button>
          </Flex>
          <Flex marginRight="spacingXs">
            <Button buttonType="muted" indicateDropdown>
              Muted with dropdown
            </Button>
          </Flex>
          <Flex marginRight="spacingXs">
            <Button buttonType="positive" indicateDropdown>
              Positive with dropdown
            </Button>
          </Flex>
          <Flex marginRight="spacingXs">
            <Button buttonType="negative" indicateDropdown>
              Negative with dropdown
            </Button>
          </Flex>
        </Flex>
        <Flex marginBottom="spacingXs">
          <Badge variant="warning">(deprecated)</Badge>
        </Flex>
        <Flex flexDirection="row" marginBottom="spacingM">
          <Flex marginRight="spacingXs">
            <Button buttonType="warning" indicateDropdown>
              Warning with dropdown
            </Button>
          </Flex>
          <Flex marginRight="spacingXs">
            <Button buttonType="naked" indicateDropdown>
              Naked with dropdown
            </Button>
          </Flex>
        </Flex>
      </Flex>

      <Flex flexDirection="column" marginBottom="spacingL">
        <Flex marginBottom="spacingS">
          <SectionHeading as="h3">Button loading</SectionHeading>
        </Flex>
        <Flex flexDirection="row" marginBottom="spacingM">
          <Flex marginRight="spacingXs">
            <Button buttonType="primary" loading>
              Primary loading
            </Button>
          </Flex>
          <Flex marginRight="spacingXs">
            <Button buttonType="muted" loading>
              Muted loading
            </Button>
          </Flex>
          <Flex marginRight="spacingXs">
            <Button buttonType="positive" loading>
              Positive loading
            </Button>
          </Flex>
          <Flex marginRight="spacingXs">
            <Button buttonType="negative" loading>
              Negative loading
            </Button>
          </Flex>
        </Flex>
        <Flex marginBottom="spacingXs">
          <Badge variant="warning">(deprecated)</Badge>
        </Flex>
        <Flex flexDirection="row" marginBottom="spacingM">
          <Flex marginRight="spacingXs">
            <Button buttonType="warning" loading>
              Warning loading
            </Button>
          </Flex>
          <Flex marginRight="spacingXs">
            <Button buttonType="naked" loading>
              Naked loading
            </Button>
          </Flex>
        </Flex>
      </Flex>

      <Flex flexDirection="column" marginBottom="spacingL">
        <Flex marginBottom="spacingS">
          <SectionHeading as="h3">Icon only button</SectionHeading>
        </Flex>
        <Flex flexDirection="row" marginBottom="spacingM">
          <Flex marginRight="spacingXs">
            <Button
              buttonType="muted"
              icon={icons.Download}
              aria-label="Download"
            />
          </Flex>
          <Flex marginRight="spacingXs">
            <Button buttonType="muted" icon={icons.Download} loading />
          </Flex>
          <Flex marginRight="spacingXs">
            <Button
              buttonType="positive"
              icon={icons.Drag}
              aria-label="Resize"
            />
          </Flex>
          <Flex marginRight="spacingXs">
            <Button
              buttonType="negative"
              icon={icons.Delete}
              aria-label="Delete"
            />
          </Flex>
          <Flex marginRight="spacingXs">
            <Button buttonType="warning" icon={icons.Edit} aria-label="Edit" />
          </Flex>
          <Flex marginRight="spacingXs">
            <Button buttonType="primary" icon={icons.Plus} aria-label="Add" />
          </Flex>
        </Flex>
      </Flex>

      <Flex flexDirection="column" marginBottom="spacingL">
        <Flex marginBottom="spacingS">
          <SectionHeading as="h3">Full width button</SectionHeading>
        </Flex>
        <Flex flexDirection="row" marginBottom="spacingS">
          <Button isFullWidth>Full width button</Button>
        </Flex>
        <Flex flexDirection="row" marginBottom="spacingS">
          <Button icon={icons.Download} isFullWidth>
            Full width button
          </Button>
        </Flex>
        <Flex flexDirection="row" marginBottom="spacingS">
          <Button icon={icons.Download} indicateDropdown isFullWidth>
            Full width button
          </Button>
        </Flex>
      </Flex>
    </>
  );
};
