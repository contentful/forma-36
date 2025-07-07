import React from 'react';
import { css } from 'emotion';
import type { Meta, Story } from '@storybook/react/types-6-0';
import { Box, Flex } from '@contentful/f36-core';
import { Button } from '@contentful/f36-button';
import tokens from '@contentful/f36-tokens';
import { MagnifyingGlassIcon } from '@contentful/f36-icons';
import { TextInput } from '@contentful/f36-forms';

import { Header, type HeaderProps } from '../src/Header';
import { action } from '@storybook/addon-actions';
import { Note } from '@contentful/f36-components';

const ExampleWrapper = ({ children }) => (
  <div
    className={css({
      position: 'relative',
      flex: '1 1 auto',
      display: 'flex',
      justifyContent: 'flex-start',
      padding: '1rem',
      width: '1024px',
      height: '250px',
      margin: '-1rem',
      flexDirection: 'column',
    })}
  >
    {children}
  </div>
);

export default {
  component: Header,
  title: 'Layout/Header',
} as Meta;

export const Default: Story<HeaderProps> = (args) => (
  <ExampleWrapper>
    <Box marginBottom="spacingM">
      <Note>
        The title property is semantically the title of the entire page and
        represented as `h1`
      </Note>
    </Box>
    <Header {...args} />
  </ExampleWrapper>
);

Default.args = {
  title: 'Product',
};

export const withBreadcrumbs: Story<HeaderProps> = (args) => (
  <ExampleWrapper>
    <Box marginBottom="spacingM">
      <Note>
        The breadcrumbs are rendered as a Segmentation component, which allows
        for custom styling and layout. The title property is semantically the
        title of the entire page and represented as `h1`, but displayed in a
        smaller font size when breadcrumbs are present.
      </Note>
    </Box>
    <Header {...args} />
  </ExampleWrapper>
);

withBreadcrumbs.args = {
  breadcrumbs: [
    {
      content: 'Content Types',
      url: '#',
    },
  ],
  title: 'Product',
};

export const withBackButton: Story<HeaderProps> = () => (
  <ExampleWrapper>
    <Box marginBottom="spacingM">
      <Note>
        The title property is semantically the title of the entire page and
        represented as `h1`, but displayed in a smaller font size when
        breadcrumbs are present.
      </Note>
    </Box>
    <Header
      backButtonProps={{ onClick: action }}
      withBackButton
      title="Product"
    />
  </ExampleWrapper>
);

export const withBackButtonAndBreadcrumbs: Story<HeaderProps> = () => (
  <ExampleWrapper>
    <Box marginBottom="spacingM">
      <Note>
        The combination of breadcrumb with a back button is mostly the default
        when breadcrumbs are present. The title property is semantically the
        title of the entire page and represented as `h1`, but displayed in a
        smaller font size when breadcrumbs are present.
      </Note>
    </Box>
    <Header
      backButtonProps={{ onClick: action }}
      withBackButton
      breadcrumbs={[
        {
          content: 'Content Types',
          url: '#',
        },
      ]}
      title="Product"
    />
  </ExampleWrapper>
);

export const withActions: Story<HeaderProps> = () => (
  <ExampleWrapper>
    <Box marginBottom="spacingM">
      <Note>
        The header title property is presenting the title of the current page
        and is represented as `h1`
      </Note>
    </Box>
    <Header
      actions={
        <Flex
          alignItems="center"
          gap={tokens.spacingS}
          justifyContent="flex-end"
        >
          <Button variant="secondary" size="small">
            Cancel
          </Button>
          <Button variant="primary" size="small">
            Save
          </Button>
        </Flex>
      }
      title="Product"
    />
  </ExampleWrapper>
);

export const WithFilters: Story<HeaderProps> = ({
  title = 'Content Types',
  ...args
}) => (
  <ExampleWrapper>
    <Box marginBottom="spacingM">
      <Note>
        The header title property is presenting the title of the current page
        and is represented as `h1`
      </Note>
    </Box>
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
  </ExampleWrapper>
);
