import React from 'react';
import type { Meta } from '@storybook/react/types-6-0';
import { SectionHeading } from '@contentful/f36-typography';
import { Flex, Stack } from '@contentful/f36-core';
import { Icon } from '@contentful/f36-icon';
import * as icons from '@contentful/f36-icons';

import { IconButton } from '../src/IconButton';

export default {
  title: 'Components/Button/IconButton',
  component: IconButton,
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
} as Meta;

export const basic = ({ icon, 'aria-label': ariaLabel, ...props }) => (
  <IconButton
    icon={icon && <Icon as={icons[icon]} />}
    aria-label={ariaLabel}
    {...props}
  />
);

basic.args = {
  icon: 'PlusIcon',
  'aria-label': 'Label',
};

export const Overview = () => (
  <>
    <Flex flexDirection="column" marginBottom="spacingL">
      <SectionHeading as="h3" marginBottom="spacingS">
        Variants
      </SectionHeading>

      <Stack spacing="spacingXs" marginBottom="spacingM">
        <IconButton
          variant="transparent"
          icon={<Icon as={icons.CloseIcon} />}
          aria-label="Close"
        />

        <IconButton
          variant="transparent"
          icon={<Icon as={icons.MoreHorizontalIcon} />}
          aria-label="More"
        />

        <IconButton
          variant="secondary"
          icon={<Icon as={icons.DownloadIcon} />}
          aria-label="Download"
        />

        <IconButton
          variant="secondary"
          icon={<Icon as={icons.DownloadIcon} />}
          aria-label="Loading"
          isLoading
        />

        <IconButton
          variant="positive"
          icon={<Icon as={icons.DragIcon} />}
          aria-label="Resize"
        />

        <IconButton
          variant="negative"
          icon={<Icon as={icons.DeleteIcon} />}
          aria-label="Delete"
        />

        <IconButton
          variant="primary"
          icon={<Icon as={icons.PlusIcon} />}
          aria-label="Add"
        />
      </Stack>
      <Stack spacing="spacingXs" marginBottom="spacingM">
        <IconButton
          variant="primary"
          icon={<Icon as={icons.PlusIcon} />}
          aria-label="Plus"
          size="small"
        />

        <IconButton
          variant="primary"
          icon={<Icon as={icons.PlusIcon} />}
          aria-label="Plus"
          size="medium"
        />

        <IconButton
          variant="primary"
          icon={<Icon as={icons.PlusIcon} />}
          aria-label="Plus"
          size="large"
        />
      </Stack>
    </Flex>
  </>
);
