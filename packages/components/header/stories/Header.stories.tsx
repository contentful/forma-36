import React from 'react';
import type { Meta, Story } from '@storybook/react/types-6-0';
import { SectionHeading } from '@contentful/f36-typography';
import { Box, Flex } from '@contentful/f36-core';
import { Button } from '@contentful/f36-button';
import tokens from '@contentful/f36-tokens';
import { TextInput } from '@contentful/f36-forms';

import { Header, type HeaderProps } from '../src/Header';
import { action } from '@storybook/addon-actions';

import { MagnifyingGlassIcon } from '@contentful/f36-icons';

export default {
  component: Header,
  title: 'Layout/Header',
} as Meta;

export const Default: Story<HeaderProps> = (args) => (
  <Header
    actions={
      <Flex alignItems="center" gap={tokens.spacingS} justifyContent="flex-end">
        <Button variant="positive" size="small">
          Save
        </Button>
      </Flex>
    }
    {...args}
  />
);

Default.args = {
  backButtonProps: { onClick: action('back button click') },
  breadcrumbs: [
    {
      content: 'Content Types',
      url: '#',
    },
  ],
  title: 'Product',
};

export const WithFilters: Story<HeaderProps> = ({
  title = 'Content Types',
  ...args
}) => (
  <Header
    title={title}
    filters={
      <TextInput
        placeholder="Search"
        icon={<MagnifyingGlassIcon />}
        size="small"
      />
    }
    actions={
      <Flex alignItems="center" gap={tokens.spacingS} justifyContent="flex-end">
        <Button variant="positive" size="small">
          Save
        </Button>
      </Flex>
    }
    {...args}
  />
);

export const Overview: Story<HeaderProps> = () => (
  <>
    <Flex flexDirection="column" gap="spacingL">
      <Box>
        <SectionHeading marginBottom="spacingS">
          Breadcrumb variant
        </SectionHeading>

        <Header
          actions={
            <Button variant="primary" size="small">
              New Content type
            </Button>
          }
          backButtonProps={{ onClick: action }}
          title="Content type"
          withBackButton
        />
      </Box>

      <Box>
        <SectionHeading marginBottom="spacingS">Title variant</SectionHeading>

        <Header
          actions={
            <Button variant="primary" size="small">
              New entry
            </Button>
          }
          variant="title"
          title="All content"
        />
      </Box>
    </Flex>
  </>
);
