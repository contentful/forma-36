import React from 'react';

import { Button } from '../src/Button';
import { Icon } from '@contentful/f36-icon';
import { Box, Flex } from '@contentful/f36-core';
import { SectionHeading } from '@contentful/f36-typography';
import * as icons from '@contentful/f36-icons';

export default {
  title: 'Components/Button',
  component: Button,
  parameters: {
    propTypes: Button['__docgenInfo'],
  },
  argTypes: {
    className: { control: { disable: true } },
    testId: { control: { disable: true } },
    icon: {
      control: {
        options: ['', ...Object.keys(icons)],
        type: 'select',
      },
    },
  },
};

export const basic = ({ icon, children, ...args }) => (
  <Button icon={icon && <Icon as={icons[icon]} />} {...args}>
    {children}
  </Button>
);

basic.args = {
  size: 'medium',
  variant: 'primary',
  children: 'Button CTA',
  icon: '',
};

export const Overview = ({ icon }) => {
  return (
    <>
      <Flex flexDirection="column" marginBottom="spacingL">
        <Box marginBottom="spacingS">
          <SectionHeading as="h3">Button variants</SectionHeading>
        </Box>
        <Flex flexDirection="row" marginBottom="spacingM">
          <Box marginRight="spacingXs">
            <Button variant="primary" icon={icon && <Icon as={icons[icon]} />}>
              Primary
            </Button>
          </Box>
          <Box marginRight="spacingXs">
            <Button
              variant="secondary"
              icon={icon && <Icon as={icons[icon]} />}
            >
              Secondary
            </Button>
          </Box>
          <Box marginRight="spacingXs">
            <Button variant="positive" icon={icon && <Icon as={icons[icon]} />}>
              Positive
            </Button>
          </Box>
          <Box marginRight="spacingXs">
            <Button variant="negative" icon={icon && <Icon as={icons[icon]} />}>
              Negative
            </Button>
          </Box>
          <Box marginRight="spacingXs">
            <Button
              variant="transparent"
              icon={icon && <Icon as={icons[icon]} />}
            >
              Transparent
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
            <Button
              variant="primary"
              size="small"
              icon={<Icon as={icons.Plus} />}
            >
              Small
            </Button>
          </Box>
          <Box marginRight="spacingXs">
            <Button
              variant="primary"
              size="medium"
              icon={<Icon as={icons.Plus} />}
            >
              Medium (default)
            </Button>
          </Box>
          <Box marginRight="spacingXs">
            <Button
              variant="primary"
              size="large"
              icon={<Icon as={icons.Plus} />}
            >
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
          <Box marginRight="spacingXs">
            <Button variant="transparent" isActive>
              Transparent
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
            <Button variant="primary" isDisabled>
              Primary disabled
            </Button>
          </Box>
          <Box marginRight="spacingXs">
            <Button variant="secondary" isDisabled>
              Secondary disabled
            </Button>
          </Box>
          <Box marginRight="spacingXs">
            <Button variant="positive" isDisabled>
              Positive disabled
            </Button>
          </Box>
          <Box marginRight="spacingXs">
            <Button variant="negative" isDisabled>
              Negative disabled
            </Button>
          </Box>
          <Box marginRight="spacingXs">
            <Button variant="transparent" isDisabled>
              Transparent
            </Button>
          </Box>
        </Flex>
      </Flex>

      <Flex flexDirection="column" marginBottom="spacingL">
        <Box marginBottom="spacingS">
          <SectionHeading as="h3">
            Button with icon on right side
          </SectionHeading>
        </Box>
        <Flex flexDirection="row" marginBottom="spacingM">
          <Box marginRight="spacingXs">
            <Button
              variant="primary"
              icon={<Icon as={icons.ChevronDown} />}
              alignIcon="end"
            >
              Primary
            </Button>
          </Box>
          <Box marginRight="spacingXs">
            <Button
              variant="secondary"
              icon={<Icon as={icons.ChevronDown} />}
              alignIcon="end"
            >
              Secondary
            </Button>
          </Box>
          <Box marginRight="spacingXs">
            <Button
              variant="positive"
              icon={<Icon as={icons.ChevronDown} />}
              alignIcon="end"
            >
              Positive
            </Button>
          </Box>
          <Box marginRight="spacingXs">
            <Button
              variant="negative"
              icon={<Icon as={icons.ChevronDown} />}
              alignIcon="end"
            >
              Negative
            </Button>
          </Box>
          <Box marginRight="spacingXs">
            <Button
              variant="transparent"
              icon={<Icon as={icons.ChevronDown} />}
              alignIcon="end"
            >
              Transparent
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
          <Box marginRight="spacingXs">
            <Button variant="transparent" isLoading>
              Transparent
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
              variant="transparent"
              icon={<Icon as={icons.Close} />}
              aria-label="Close"
            />
          </Box>
          <Box marginRight="spacingXs">
            <Button
              variant="transparent"
              icon={<Icon as={icons.MoreHorizontal} />}
              aria-label="More"
            />
          </Box>
          <Box marginRight="spacingXs">
            <Button
              variant="secondary"
              icon={<Icon as={icons.Download} />}
              aria-label="Download"
            />
          </Box>
          <Box marginRight="spacingXs">
            <Button
              variant="secondary"
              icon={<Icon as={icons.Download} />}
              isLoading
            />
          </Box>
          <Box marginRight="spacingXs">
            <Button
              variant="positive"
              icon={<Icon as={icons.Drag} />}
              aria-label="Resize"
            />
          </Box>
          <Box marginRight="spacingXs">
            <Button
              variant="negative"
              icon={<Icon as={icons.Delete} />}
              aria-label="Delete"
            />
          </Box>
          <Box marginRight="spacingXs">
            <Button
              variant="primary"
              icon={<Icon as={icons.Plus} />}
              aria-label="Add"
            />
          </Box>
        </Flex>
        <Flex flexDirection="row" marginBottom="spacingM">
          <Box marginRight="spacingXs">
            <Button
              variant="primary"
              icon={<Icon as={icons.Plus} />}
              aria-label="Plus"
              size="small"
            />
          </Box>
          <Box marginRight="spacingXs">
            <Button
              variant="primary"
              icon={<Icon as={icons.Plus} />}
              aria-label="Plus"
              size="medium"
            />
          </Box>
          <Box marginRight="spacingXs">
            <Button
              variant="primary"
              icon={<Icon as={icons.Plus} />}
              aria-label="Plus"
              size="large"
            />
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
          <Button as="a" href="https://contentful.com" isFullWidth>
            Full width link button
          </Button>
        </Flex>
        <Flex flexDirection="row" marginBottom="spacingS">
          <Button icon={<Icon as={icons.Download} />} isFullWidth>
            Full width button
          </Button>
        </Flex>
        <Flex flexDirection="row" marginBottom="spacingS">
          <Button icon={<Icon as={icons.Download} />} isFullWidth>
            Full width button
          </Button>
        </Flex>
      </Flex>
    </>
  );
};
