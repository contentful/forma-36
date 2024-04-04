import React from 'react';

import { Button } from '../src/Button';
import { Icon } from '@contentful/f36-icon';
import { Flex, Stack } from '@contentful/f36-core';
import { SectionHeading } from '@contentful/f36-typography';
import * as icons from '@contentful/f36-icons';
import { css } from 'emotion';
import tokens from '@contentful/f36-tokens';

export default {
  title: 'Components/Button',
  component: Button,
  parameters: {
    propTypes: Button['__docgenInfo'],
  },
  argTypes: {
    className: { control: { disable: true } },
    testId: { control: { disable: true } },
    startIcon: {
      control: {
        options: ['', ...Object.keys(icons)],
        type: 'select',
      },
    },
    endIcon: {
      control: {
        options: ['', ...Object.keys(icons)],
        type: 'select',
      },
    },
  },
};

export const basic = ({ startIcon, endIcon, children, ...args }) => (
  <Button
    {...args}
    startIcon={startIcon && <Icon as={icons[startIcon]} />}
    endIcon={endIcon && <Icon as={icons[endIcon]} />}
  >
    {children}
  </Button>
);

basic.args = {
  size: 'medium',
  variant: 'primary',
  children: 'Button CTA',
};

export const Overview = ({ startIcon, endIcon }) => {
  return (
    <>
      <Flex flexDirection="column" marginBottom="spacingL">
        <SectionHeading as="h3" marginBottom="spacingS">
          Button variants
        </SectionHeading>

        <Stack flexDirection="row" marginBottom="spacingM" spacing="spacingXs">
          <Button
            variant="primary"
            startIcon={startIcon && <Icon as={icons[startIcon]} />}
            endIcon={endIcon && <Icon as={icons[endIcon]} />}
          >
            Primary
          </Button>

          <Button
            variant="secondary"
            startIcon={startIcon && <Icon as={icons[startIcon]} />}
            endIcon={endIcon && <Icon as={icons[endIcon]} />}
          >
            Secondary
          </Button>

          <Button
            variant="positive"
            startIcon={startIcon && <Icon as={icons[startIcon]} />}
            endIcon={endIcon && <Icon as={icons[endIcon]} />}
          >
            Positive
          </Button>

          <Button
            variant="negative"
            startIcon={startIcon && <Icon as={icons[startIcon]} />}
            endIcon={endIcon && <Icon as={icons[endIcon]} />}
          >
            Negative
          </Button>

          <Button
            variant="transparent"
            startIcon={startIcon && <Icon as={icons[startIcon]} />}
            endIcon={endIcon && <Icon as={icons[endIcon]} />}
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
            startIcon={<Icon as={icons.PlusIcon} />}
          >
            Small
          </Button>

          <Button
            variant="primary"
            size="medium"
            startIcon={<Icon as={icons.PlusIcon} />}
          >
            Medium (default)
          </Button>

          <Button
            variant="primary"
            size="medium"
            startIcon={<Icon as={icons.PlusIcon} />}
          >
            Medium (default) button with really long content
          </Button>

          <Button
            variant="primary"
            size="large"
            startIcon={<Icon as={icons.PlusIcon} />}
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
            endIcon={<Icon as={icons.ChevronDownIcon} />}
          >
            Primary
          </Button>

          <Button
            variant="secondary"
            endIcon={<Icon as={icons.ChevronDownIcon} />}
          >
            Secondary
          </Button>

          <Button
            variant="positive"
            endIcon={<Icon as={icons.ChevronDownIcon} />}
          >
            Positive
          </Button>

          <Button
            variant="negative"
            endIcon={<Icon as={icons.ChevronDownIcon} />}
          >
            Negative
          </Button>

          <Button
            variant="transparent"
            endIcon={<Icon as={icons.ChevronDownIcon} />}
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
            Secondary isLoading
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
            startIcon={<Icon as={icons.CloseIcon} />}
            aria-label="Close"
          />

          <Button
            variant="transparent"
            startIcon={<Icon as={icons.MoreHorizontalIcon} />}
            aria-label="More"
          />

          <Button
            variant="secondary"
            startIcon={<Icon as={icons.DownloadIcon} />}
            aria-label="Download"
          />

          <Button
            variant="secondary"
            startIcon={<Icon as={icons.DownloadIcon} />}
            isLoading
          />

          <Button
            variant="positive"
            startIcon={<Icon as={icons.DragIcon} />}
            aria-label="Resize"
          />

          <Button
            variant="negative"
            startIcon={<Icon as={icons.DeleteIcon} />}
            aria-label="Delete"
          />

          <Button
            variant="primary"
            startIcon={<Icon as={icons.PlusIcon} />}
            aria-label="Add"
          />
        </Stack>
        <Stack spacing="spacingXs" marginBottom="spacingM">
          <Button
            variant="primary"
            startIcon={<Icon as={icons.PlusIcon} />}
            aria-label="Plus"
            size="small"
          />

          <Button
            variant="primary"
            startIcon={<Icon as={icons.PlusIcon} />}
            aria-label="Plus"
            size="medium"
          />

          <Button
            variant="primary"
            startIcon={<Icon as={icons.PlusIcon} />}
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
          <Button startIcon={<Icon as={icons.DownloadIcon} />} isFullWidth>
            Full width button
          </Button>
        </Flex>
        <Flex flexDirection="row" marginBottom="spacingS">
          <Button startIcon={<Icon as={icons.DownloadIcon} />} isFullWidth>
            Full width button
          </Button>
        </Flex>
      </Flex>
      <Flex flexDirection="column" marginBottom="spacingL">
        <SectionHeading as="h3" marginBottom="spacingS">
          Button as link
        </SectionHeading>
        <Flex flexDirection="row" marginBottom="spacingS">
          <Button as="a" href="#">
            As a-tag with href property
          </Button>
        </Flex>
      </Flex>

      <Flex flexDirection="column" marginBottom="spacingL">
        <SectionHeading as="h3" marginBottom="spacingS">
          On backgrounds
        </SectionHeading>

        <div
          className={css({
            background: tokens.gray100,
            padding: tokens.spacingXs,
          })}
        >
          <Stack
            flexDirection="row"
            marginBottom="spacingM"
            spacing="spacingXs"
          >
            <Button
              variant="primary"
              startIcon={startIcon && <Icon as={icons[startIcon]} />}
              endIcon={endIcon && <Icon as={icons[endIcon]} />}
            >
              Primary
            </Button>

            <Button
              variant="secondary"
              startIcon={startIcon && <Icon as={icons[startIcon]} />}
              endIcon={endIcon && <Icon as={icons[endIcon]} />}
            >
              Secondary
            </Button>

            <Button
              variant="positive"
              startIcon={startIcon && <Icon as={icons[startIcon]} />}
              endIcon={endIcon && <Icon as={icons[endIcon]} />}
            >
              Positive
            </Button>

            <Button
              variant="negative"
              startIcon={startIcon && <Icon as={icons[startIcon]} />}
              endIcon={endIcon && <Icon as={icons[endIcon]} />}
            >
              Negative
            </Button>

            <Button
              variant="transparent"
              startIcon={startIcon && <Icon as={icons[startIcon]} />}
              endIcon={endIcon && <Icon as={icons[endIcon]} />}
            >
              Transparent
            </Button>
          </Stack>

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

          <Stack marginBottom="spacingM" spacing="spacingXs">
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
        </div>

        <div
          className={css({
            background: tokens.gray900,
            padding: tokens.spacingXs,
          })}
        >
          <Stack
            flexDirection="row"
            marginBottom="spacingM"
            spacing="spacingXs"
          >
            <Button
              variant="primary"
              startIcon={startIcon && <Icon as={icons[startIcon]} />}
              endIcon={endIcon && <Icon as={icons[endIcon]} />}
            >
              Primary
            </Button>

            <Button
              variant="secondary"
              startIcon={startIcon && <Icon as={icons[startIcon]} />}
              endIcon={endIcon && <Icon as={icons[endIcon]} />}
            >
              Secondary
            </Button>

            <Button
              variant="positive"
              startIcon={startIcon && <Icon as={icons[startIcon]} />}
              endIcon={endIcon && <Icon as={icons[endIcon]} />}
            >
              Positive
            </Button>

            <Button
              variant="negative"
              startIcon={startIcon && <Icon as={icons[startIcon]} />}
              endIcon={endIcon && <Icon as={icons[endIcon]} />}
            >
              Negative
            </Button>

            <Button
              variant="transparent"
              startIcon={startIcon && <Icon as={icons[startIcon]} />}
              endIcon={endIcon && <Icon as={icons[endIcon]} />}
            >
              Transparent
            </Button>
          </Stack>

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
        </div>
      </Flex>
    </>
  );
};
