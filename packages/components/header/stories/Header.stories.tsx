import React from 'react';
import type { Meta, Story } from '@storybook/react/types-6-0';

import { Header, type HeaderProps } from '../src/Header';
import { Box, Flex } from '@contentful/f36-core';
import { Button } from '@contentful/f36-button';
import tokens from '@contentful/f36-tokens';
import { action } from '@storybook/addon-actions';
import { CopyIcon, SearchIcon } from '@contentful/f36-icons';
import { TextInput } from '@contentful/f36-forms';

export default {
  component: Header,
  title: 'Layout/Header',
} as Meta;

export const Default: Story<HeaderProps> = ({
  title = 'Product',
  withBackButton: _wbb,
  ...args
}) => (
  <Box style={{ minWidth: '1000px' }}>
    <Header
      withBackButton={true}
      backButtonProps={{ onClick: action('back button click') }}
      breadcrumbs={[
        {
          content: 'Content Types',
          url: '#',
        },
      ]}
      title={title}
      actions={
        <Flex
          alignItems="center"
          gap={tokens.spacingS}
          justifyContent="flex-end"
        >
          <Button variant="secondary" size="small" startIcon={<CopyIcon />}>
            Copy ID
          </Button>
          <Button variant="positive" size="small">
            Save
          </Button>
        </Flex>
      }
      {...args}
    />
  </Box>
);

export const WithFilters: Story<HeaderProps> = ({
  title = 'Content Types',
  ...args
}) => (
  <Box style={{ minWidth: '1000px' }}>
    <Header
      title={title}
      filters={
        <TextInput placeholder="Search" icon={<SearchIcon />} size="small" />
      }
      actions={
        <Flex
          alignItems="center"
          gap={tokens.spacingS}
          justifyContent="flex-end"
        >
          <Button variant="positive" size="small">
            Save
          </Button>
        </Flex>
      }
      {...args}
    />
  </Box>
);
