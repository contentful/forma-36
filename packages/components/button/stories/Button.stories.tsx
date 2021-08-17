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
        <SectionHeading as="h3" marginBottom="spacingS">
          Button variants
        </SectionHeading>

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
        <SectionHeading as="h3" marginBottom="spacingS">
          Button sizes
        </SectionHeading>

        <Flex flexDirection="row" marginBottom="spacingM">
          <Box marginRight="spacingXs">
            <Button
              variant="primary"
              size="small"
              icon={<Icon as={icons.PlusIcon} />}
            >
              Small
            </Button>
          </Box>
          <Box marginRight="spacingXs">
            <Button
              variant="primary"
              size="medium"
              icon={<Icon as={icons.PlusIcon} />}
            >
              Medium (default)
            </Button>
          </Box>
          <Box marginRight="spacingXs">
            <Button
              variant="primary"
              size="large"
              icon={<Icon as={icons.PlusIcon} />}
            >
              Large
            </Button>
          </Box>
        </Flex>
      </Flex>

      <Flex flexDirection="column" marginBottom="spacingL">
        <SectionHeading as="h3" marginBottom="spacingS">
          Button active state
        </SectionHeading>

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
        <SectionHeading as="h3" marginBottom="spacingS">
          Button disabled
        </SectionHeading>

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
        <SectionHeading as="h3" marginBottom="spacingS">
          Button with icon on right side
        </SectionHeading>

        <Flex flexDirection="row" marginBottom="spacingM">
          <Box marginRight="spacingXs">
            <Button
              variant="primary"
              icon={<Icon as={icons.ChevronDownIcon} />}
              alignIcon="end"
            >
              Primary
            </Button>
          </Box>
          <Box marginRight="spacingXs">
            <Button
              variant="secondary"
              icon={<Icon as={icons.ChevronDownIcon} />}
              alignIcon="end"
            >
              Secondary
            </Button>
          </Box>
          <Box marginRight="spacingXs">
            <Button
              variant="positive"
              icon={<Icon as={icons.ChevronDownIcon} />}
              alignIcon="end"
            >
              Positive
            </Button>
          </Box>
          <Box marginRight="spacingXs">
            <Button
              variant="negative"
              icon={<Icon as={icons.ChevronDownIcon} />}
              alignIcon="end"
            >
              Negative
            </Button>
          </Box>
          <Box marginRight="spacingXs">
            <Button
              variant="transparent"
              icon={<Icon as={icons.ChevronDownIcon} />}
              alignIcon="end"
            >
              Transparent
            </Button>
          </Box>
        </Flex>
      </Flex>

      <Flex flexDirection="column" marginBottom="spacingL">
        <SectionHeading as="h3" marginBottom="spacingS">
          Button loading
        </SectionHeading>

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
        <SectionHeading as="h3" marginBottom="spacingS">
          Icon only button
        </SectionHeading>

        <Flex flexDirection="row" marginBottom="spacingM">
          <Box marginRight="spacingXs">
            <Button
              variant="transparent"
              icon={<Icon as={icons.CloseIcon} />}
              aria-label="Close"
            />
          </Box>
          <Box marginRight="spacingXs">
            <Button
              variant="transparent"
              icon={<Icon as={icons.MoreHorizontalIcon} />}
              aria-label="More"
            />
          </Box>
          <Box marginRight="spacingXs">
            <Button
              variant="secondary"
              icon={<Icon as={icons.DownloadIcon} />}
              aria-label="Download"
            />
          </Box>
          <Box marginRight="spacingXs">
            <Button
              variant="secondary"
              icon={<Icon as={icons.DownloadIcon} />}
              isLoading
            />
          </Box>
          <Box marginRight="spacingXs">
            <Button
              variant="positive"
              icon={<Icon as={icons.DragIcon} />}
              aria-label="Resize"
            />
          </Box>
          <Box marginRight="spacingXs">
            <Button
              variant="negative"
              icon={<Icon as={icons.DeleteIcon} />}
              aria-label="Delete"
            />
          </Box>
          <Box marginRight="spacingXs">
            <Button
              variant="primary"
              icon={<Icon as={icons.PlusIcon} />}
              aria-label="Add"
            />
          </Box>
        </Flex>
        <Flex flexDirection="row" marginBottom="spacingM">
          <Box marginRight="spacingXs">
            <Button
              variant="primary"
              icon={<Icon as={icons.PlusIcon} />}
              aria-label="Plus"
              size="small"
            />
          </Box>
          <Box marginRight="spacingXs">
            <Button
              variant="primary"
              icon={<Icon as={icons.PlusIcon} />}
              aria-label="Plus"
              size="medium"
            />
          </Box>
          <Box marginRight="spacingXs">
            <Button
              variant="primary"
              icon={<Icon as={icons.PlusIcon} />}
              aria-label="Plus"
              size="large"
            />
          </Box>
        </Flex>
      </Flex>

      <Flex flexDirection="column" marginBottom="spacingL">
        <SectionHeading as="h3" marginBottom="spacingS">
          Full width button
        </SectionHeading>

        <Flex flexDirection="row" marginBottom="spacingS">
          <Button isFullWidth>Full width button</Button>
        </Flex>
        <Flex flexDirection="row" marginBottom="spacingS">
          <Button as="a" href="https://contentful.com" isFullWidth>
            Full width link button
          </Button>
        </Flex>
        <Flex flexDirection="row" marginBottom="spacingS">
          <Button icon={<Icon as={icons.DownloadIcon} />} isFullWidth>
            Full width button
          </Button>
        </Flex>
        <Flex flexDirection="row" marginBottom="spacingS">
          <Button icon={<Icon as={icons.DownloadIcon} />} isFullWidth>
            Full width button
          </Button>
        </Flex>
      </Flex>
    </>
  );
};
