import React from 'react';

import { Button } from '../src/Button';
import { Icon } from '@contentful/f36-icon';
import { Flex, Stack } from '@contentful/f36-core';
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

        <Stack flexDirection="row" marginBottom="spacingM" spacing="spacingXs">
          <Button variant="primary" icon={icon && <Icon as={icons[icon]} />}>
            Primary
          </Button>

          <Button variant="secondary" icon={icon && <Icon as={icons[icon]} />}>
            Secondary
          </Button>

          <Button variant="positive" icon={icon && <Icon as={icons[icon]} />}>
            Positive
          </Button>

          <Button variant="negative" icon={icon && <Icon as={icons[icon]} />}>
            Negative
          </Button>

          <Button
            variant="transparent"
            icon={icon && <Icon as={icons[icon]} />}
          >
            Transparent
          </Button>
        </Stack>
      </Flex>
      <Flex flexDirection="column" marginBottom="spacingL">
        <SectionHeading as="h3" marginBottom="spacingS">
          Button sizes
        </SectionHeading>

        <Stack flexDirection="row" marginBottom="spacingM" spacing="spacingXs">
          <Button
            variant="primary"
            size="small"
            icon={<Icon as={icons.PlusIcon} />}
          >
            Small
          </Button>

          <Button
            variant="primary"
            size="medium"
            icon={<Icon as={icons.PlusIcon} />}
          >
            Medium (default)
          </Button>

          <Button
            variant="primary"
            size="large"
            icon={<Icon as={icons.PlusIcon} />}
          >
            Large
          </Button>
        </Stack>
      </Flex>

      <Flex flexDirection="column" marginBottom="spacingL">
        <SectionHeading as="h3" marginBottom="spacingS">
          Button active state
        </SectionHeading>

        <Stack marginBottom="spacingM" spacing="spacingXs">
          <Button variant="primary" isActive>
            Primary isActive
          </Button>

          <Button variant="secondary" isActive>
            Secondary isActive
          </Button>

          <Button variant="positive" isActive>
            Positive isActive
          </Button>

          <Button variant="negative" isActive>
            Negative isActive
          </Button>

          <Button variant="transparent" isActive>
            Transparent
          </Button>
        </Stack>
      </Flex>

      <Flex flexDirection="column" marginBottom="spacingL">
        <SectionHeading as="h3" marginBottom="spacingS">
          Button disabled
        </SectionHeading>

        <Stack spacing="spacingXs" marginBottom="spacingM">
          <Button variant="primary" isDisabled>
            Primary disabled
          </Button>

          <Button variant="secondary" isDisabled>
            Secondary disabled
          </Button>

          <Button variant="positive" isDisabled>
            Positive disabled
          </Button>

          <Button variant="negative" isDisabled>
            Negative disabled
          </Button>

          <Button variant="transparent" isDisabled>
            Transparent
          </Button>
        </Stack>
      </Flex>

      <Flex flexDirection="column" marginBottom="spacingL">
        <SectionHeading as="h3" marginBottom="spacingS">
          Button with icon on right side
        </SectionHeading>

        <Stack spacing="spacingXs" marginBottom="spacingM">
          <Button
            variant="primary"
            icon={<Icon as={icons.ChevronDownIcon} />}
            alignIcon="end"
          >
            Primary
          </Button>

          <Button
            variant="secondary"
            icon={<Icon as={icons.ChevronDownIcon} />}
            alignIcon="end"
          >
            Secondary
          </Button>

          <Button
            variant="positive"
            icon={<Icon as={icons.ChevronDownIcon} />}
            alignIcon="end"
          >
            Positive
          </Button>

          <Button
            variant="negative"
            icon={<Icon as={icons.ChevronDownIcon} />}
            alignIcon="end"
          >
            Negative
          </Button>

          <Button
            variant="transparent"
            icon={<Icon as={icons.ChevronDownIcon} />}
            alignIcon="end"
          >
            Transparent
          </Button>
        </Stack>
      </Flex>

      <Flex flexDirection="column" marginBottom="spacingL">
        <SectionHeading as="h3" marginBottom="spacingS">
          Button loading
        </SectionHeading>

        <Stack spacing="spacingXs" marginBottom="spacingM">
          <Button variant="primary" isLoading>
            Primary isLoading
          </Button>

          <Button variant="secondary" isLoading>
            Muted isLoading
          </Button>

          <Button variant="positive" isLoading>
            Positive isLoading
          </Button>

          <Button variant="negative" isLoading>
            Negative isLoading
          </Button>

          <Button variant="transparent" isLoading>
            Transparent
          </Button>
        </Stack>
      </Flex>

      <Flex flexDirection="column" marginBottom="spacingL">
        <SectionHeading as="h3" marginBottom="spacingS">
          Icon only button
        </SectionHeading>
        <Stack spacing="spacingXs" marginBottom="spacingM">
          <Button
            variant="transparent"
            icon={<Icon as={icons.CloseIcon} />}
            aria-label="Close"
          />

          <Button
            variant="transparent"
            icon={<Icon as={icons.MoreHorizontalIcon} />}
            aria-label="More"
          />

          <Button
            variant="secondary"
            icon={<Icon as={icons.DownloadIcon} />}
            aria-label="Download"
          />

          <Button
            variant="secondary"
            icon={<Icon as={icons.DownloadIcon} />}
            isLoading
          />

          <Button
            variant="positive"
            icon={<Icon as={icons.DragIcon} />}
            aria-label="Resize"
          />

          <Button
            variant="negative"
            icon={<Icon as={icons.DeleteIcon} />}
            aria-label="Delete"
          />

          <Button
            variant="primary"
            icon={<Icon as={icons.PlusIcon} />}
            aria-label="Add"
          />
        </Stack>
        <Stack spacing="spacingXs" marginBottom="spacingM">
          <Button
            variant="primary"
            icon={<Icon as={icons.PlusIcon} />}
            aria-label="Plus"
            size="small"
          />

          <Button
            variant="primary"
            icon={<Icon as={icons.PlusIcon} />}
            aria-label="Plus"
            size="medium"
          />

          <Button
            variant="primary"
            icon={<Icon as={icons.PlusIcon} />}
            aria-label="Plus"
            size="large"
          />
        </Stack>
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
