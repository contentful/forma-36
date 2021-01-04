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

export const overview = (args: ButtonProps) => (
  <>
    <Flex flexDirection="column">
      <Flex marginBottom="spacingS">
        <SectionHeading element="h3">Button variants</SectionHeading>
      </Flex>
      <Flex flexDirection="row" marginBottom="spacingM">
        <Flex marginRight="spacingXs">
          <Button buttonType="primary">primary</Button>
        </Flex>
        <Flex marginRight="spacingXs">
          <Button buttonType="positive">posiitve</Button>
        </Flex>
        <Flex marginRight="spacingXs">
          <Button buttonType="warning">warning</Button>
        </Flex>
        <Flex marginRight="spacingXs">
          <Button buttonType="negative">negative</Button>
        </Flex>
        <Flex marginRight="spacingXs">
          <Button buttonType="muted">muted</Button>
        </Flex>
        <Flex marginRight="spacingXs">
          <Button buttonType="naked">naked</Button>
        </Flex>
      </Flex>
    </Flex>
    <Flex flexDirection="column">
      <Flex marginBottom="spacingS">
        <SectionHeading element="h3">Button sizes</SectionHeading>
      </Flex>
      <Flex flexDirection="row" marginBottom="spacingM">
        <Flex marginRight="spacingXs">
          <Button buttonType={args.buttonType} size="small">
            small
          </Button>
        </Flex>
        <Flex marginRight="spacingXs">
          <Button buttonType={args.buttonType}>default size</Button>
        </Flex>
        <Flex marginRight="spacingXs">
          <Button buttonType={args.buttonType} size="large">
            large
          </Button>
        </Flex>
      </Flex>
    </Flex>
    <Flex flexDirection="column">
      <Flex marginBottom="spacingS">
        <SectionHeading element="h3">Button active state</SectionHeading>
      </Flex>
      <Flex flexDirection="row" marginBottom="spacingM">
        <Flex marginRight="spacingXs">
          <Button buttonType="primary" isActive>
            primary isActive
          </Button>
        </Flex>
        <Flex marginRight="spacingXs">
          <Button buttonType="positive" isActive>
            posiitve isActive
          </Button>
        </Flex>
        <Flex marginRight="spacingXs">
          <Button buttonType="warning" isActive>
            warning isActive
          </Button>
        </Flex>
        <Flex marginRight="spacingXs">
          <Button buttonType="negative" isActive>
            negative isActive
          </Button>
        </Flex>
        <Flex marginRight="spacingXs">
          <Button buttonType="muted" isActive>
            muted isActive
          </Button>
        </Flex>
        <Flex marginRight="spacingXs">
          <Button buttonType="naked" isActive>
            naked isActive
          </Button>
        </Flex>
      </Flex>
    </Flex>

    <Flex flexDirection="column">
      <Flex marginBottom="spacingS">
        <SectionHeading element="h3">Button disabled</SectionHeading>
      </Flex>
      <Flex flexDirection="row" marginBottom="spacingM">
        <Flex marginRight="spacingXs">
          <Button buttonType="primary" disabled>
            primary disabled
          </Button>
        </Flex>
        <Flex marginRight="spacingXs">
          <Button buttonType="positive" disabled>
            posiitve disabled
          </Button>
        </Flex>
        <Flex marginRight="spacingXs">
          <Button buttonType="warning" disabled>
            warning disabled
          </Button>
        </Flex>
        <Flex marginRight="spacingXs">
          <Button buttonType="negative" disabled>
            negative disabled
          </Button>
        </Flex>
        <Flex marginRight="spacingXs">
          <Button buttonType="muted" disabled>
            muted disabled
          </Button>
        </Flex>
        <Flex marginRight="spacingXs">
          <Button buttonType="naked" disabled>
            naked disabled
          </Button>
        </Flex>
      </Flex>
    </Flex>
    <Flex flexDirection="column">
      <Flex marginBottom="spacingS">
        <SectionHeading element="h3">Button with dropdown</SectionHeading>
      </Flex>
      <Flex flexDirection="row" marginBottom="spacingM">
        <Flex marginRight="spacingXs">
          <Button buttonType="primary" indicateDropdown>
            primary with dropdown
          </Button>
        </Flex>
        <Flex marginRight="spacingXs">
          <Button buttonType="positive" indicateDropdown>
            posiitve with dropdown
          </Button>
        </Flex>
        <Flex marginRight="spacingXs">
          <Button buttonType="warning" indicateDropdown>
            warning with dropdown
          </Button>
        </Flex>
        <Flex marginRight="spacingXs">
          <Button buttonType="negative" indicateDropdown>
            negative with dropdown
          </Button>
        </Flex>
        <Flex marginRight="spacingXs">
          <Button buttonType="muted" indicateDropdown>
            muted with dropdown
          </Button>
        </Flex>
        <Flex marginRight="spacingXs">
          <Button buttonType="naked" indicateDropdown>
            naked with dropdown
          </Button>
        </Flex>
      </Flex>
    </Flex>

    <Flex flexDirection="column">
      <Flex marginBottom="spacingS">
        <SectionHeading element="h3">Button loading</SectionHeading>
      </Flex>
      <Flex flexDirection="row" marginBottom="spacingM">
        <Flex marginRight="spacingXs">
          <Button buttonType="primary" loading>
            primary loading
          </Button>
        </Flex>
        <Flex marginRight="spacingXs">
          <Button buttonType="positive" loading>
            posiitve loading
          </Button>
        </Flex>
        <Flex marginRight="spacingXs">
          <Button buttonType="warning" loading>
            warning loading
          </Button>
        </Flex>
        <Flex marginRight="spacingXs">
          <Button buttonType="negative" loading>
            negative loading
          </Button>
        </Flex>
        <Flex marginRight="spacingXs">
          <Button buttonType="muted" loading>
            muted loading
          </Button>
        </Flex>
        <Flex marginRight="spacingXs">
          <Button buttonType="naked" loading>
            naked loading
          </Button>
        </Flex>
      </Flex>
    </Flex>
  </>
);

basic.args = {
  buttonType: 'positive',
  'Button Text': 'Embed entry',
};
