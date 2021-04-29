import React from 'react';

import { Button } from '../src/Button';
import { Box, Flex } from '@contentful/f36-core';
import { SectionHeading } from '@contentful/f36-typography';
import * as icons from '@contentful/f36-icons';
import type { Story } from '@storybook/react';

export default {
  title: 'Component/Button',
  component: Button,
  parameters: {
    propTypes: Button['__docgenInfo'],
  },
  argTypes: {
    classNames: { control: { disable: true } },
    testId: { control: { disable: true } },
    icon: {
      control: {
        options: Object.keys(icons),
        type: 'select',
      },
    },
  },
};

export const basic: Story<any> = ({ icon, children, ...args }) => (
  <Button icon={icons[icon]} {...args}>
    {children}
  </Button>
);

basic.args = {
  size: 'medium',
  variant: 'primary',
  children: 'Button CTA',
};

export const Overview = (args) => {
  return (
    <>
      <Flex flexDirection="column" marginBottom="spacingL">
        <Box marginBottom="spacingS">
          <SectionHeading as="h3">Button variants</SectionHeading>
        </Box>
        <Flex flexDirection="row" marginBottom="spacingM">
          <Box marginRight="spacingXs">
            <Button variant="primary" icon={icons[args.icon]}>
              Primary
            </Button>
          </Box>
          <Box marginRight="spacingXs">
            <Button variant="secondary" icon={icons[args.icon]}>
              Secondary
            </Button>
          </Box>
          <Box marginRight="spacingXs">
            <Button variant="positive" icon={icons[args.icon]}>
              Positive
            </Button>
          </Box>
          <Box marginRight="spacingXs">
            <Button variant="negative" icon={icons[args.icon]}>
              Negative
            </Button>
          </Box>
          <Box marginRight="spacingXs">
            <Button disabled variant="primary">
              Disabled
            </Button>
          </Box>
        </Flex>
      </Flex>

      <Flex flexDirection="column" marginBottom="spacingL">
        <Box marginBottom="spacingS">
          <SectionHeading as="h3">Button sizes</SectionHeading>
        </Box>
        <Flex flexDirection="row" marginBottom="spacingM">
          <Box marginRight="spacingXs">
            <Button variant="primary" size="small">
              Small
            </Button>
          </Box>
          <Box marginRight="spacingXs">
            <Button variant="primary" size="medium">
              Medium (default)
            </Button>
          </Box>
          <Box marginRight="spacingXs">
            <Button variant="primary" size="large">
              Large
            </Button>
          </Box>
        </Flex>
      </Flex>

      <Flex flexDirection="column" marginBottom="spacingL">
        <Box marginBottom="spacingS">
          <SectionHeading as="h3">Button active state</SectionHeading>
        </Box>
        <Flex flexDirection="row" marginBottom="spacingM">
          <Box marginRight="spacingXs">
            <Button variant="primary" isActive>
              Primary isActive
            </Button>
          </Box>
          <Box marginRight="spacingXs">
            <Button variant="secondary" isActive>
              Secondary isActive
            </Button>
          </Box>
          <Box marginRight="spacingXs">
            <Button variant="positive" isActive>
              Positive isActive
            </Button>
          </Box>
          <Box marginRight="spacingXs">
            <Button variant="negative" isActive>
              Negative isActive
            </Button>
          </Box>
        </Flex>
      </Flex>

      <Flex flexDirection="column" marginBottom="spacingL">
        <Box marginBottom="spacingS">
          <SectionHeading as="h3">Button disabled</SectionHeading>
        </Box>
        <Flex flexDirection="row" marginBottom="spacingM">
          <Box marginRight="spacingXs">
            <Button variant="primary" disabled>
              Primary disabled
            </Button>
          </Box>
          <Box marginRight="spacingXs">
            <Button variant="secondary" disabled>
              Secondary disabled
            </Button>
          </Box>
          <Box marginRight="spacingXs">
            <Button variant="positive" disabled>
              Positive disabled
            </Button>
          </Box>
          <Box marginRight="spacingXs">
            <Button variant="negative" disabled>
              Negative disabled
            </Button>
          </Box>
        </Flex>
      </Flex>

      <Flex flexDirection="column" marginBottom="spacingL">
        <Box marginBottom="spacingS">
          <SectionHeading as="h3">Button with dropdown</SectionHeading>
        </Box>
        <Flex flexDirection="row" marginBottom="spacingM">
          <Box marginRight="spacingXs">
            <Button variant="primary" isDropdown>
              Primary with dropdown
            </Button>
          </Box>
          <Box marginRight="spacingXs">
            <Button variant="secondary" isDropdown>
              Secondary with dropdown
            </Button>
          </Box>
          <Box marginRight="spacingXs">
            <Button variant="positive" isDropdown>
              Positive with dropdown
            </Button>
          </Box>
          <Box marginRight="spacingXs">
            <Button variant="negative" isDropdown>
              Negative with dropdown
            </Button>
          </Box>
        </Flex>
      </Flex>

      <Flex flexDirection="column" marginBottom="spacingL">
        <Box marginBottom="spacingS">
          <SectionHeading as="h3">Button loading</SectionHeading>
        </Box>
        <Flex flexDirection="row" marginBottom="spacingM">
          <Box marginRight="spacingXs">
            <Button variant="primary" isLoading>
              Primary isLoading
            </Button>
          </Box>
          <Box marginRight="spacingXs">
            <Button variant="secondary" isLoading>
              Muted isLoading
            </Button>
          </Box>
          <Box marginRight="spacingXs">
            <Button variant="positive" isLoading>
              Positive isLoading
            </Button>
          </Box>
          <Box marginRight="spacingXs">
            <Button variant="negative" isLoading>
              Negative isLoading
            </Button>
          </Box>
        </Flex>
      </Flex>

      <Flex flexDirection="column" marginBottom="spacingL">
        <Box marginBottom="spacingS">
          <SectionHeading as="h3">Icon only button</SectionHeading>
        </Box>
        <Flex flexDirection="row" marginBottom="spacingM">
          <Box marginRight="spacingXs">
            <Button
              variant="secondary"
              icon={icons.Download}
              aria-label="Download"
            />
          </Box>
          <Box marginRight="spacingXs">
            <Button variant="secondary" icon={icons.Download} isLoading />
          </Box>
          <Box marginRight="spacingXs">
            <Button variant="positive" icon={icons.Drag} aria-label="Resize" />
          </Box>
          <Box marginRight="spacingXs">
            <Button
              variant="negative"
              icon={icons.Delete}
              aria-label="Delete"
            />
          </Box>
          <Box marginRight="spacingXs">
            <Button variant="primary" icon={icons.Plus} aria-label="Add" />
          </Box>
        </Flex>
      </Flex>

      <Flex flexDirection="column" marginBottom="spacingL">
        <Box marginBottom="spacingS">
          <SectionHeading as="h3">Full width button</SectionHeading>
        </Box>
        <Flex flexDirection="row" marginBottom="spacingS">
          <Button isFullWidth>Full width button</Button>
        </Flex>
        <Flex flexDirection="row" marginBottom="spacingS">
          <Button href="https://contentful.com" isFullWidth>
            Full width link button
          </Button>
        </Flex>
        <Flex flexDirection="row" marginBottom="spacingS">
          <Button icon={icons.Download} isFullWidth>
            Full width button
          </Button>
        </Flex>
        <Flex flexDirection="row" marginBottom="spacingS">
          <Button icon={icons.Download} isDropdown isFullWidth>
            Full width button
          </Button>
        </Flex>
      </Flex>
    </>
  );
};
