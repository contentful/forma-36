import React from 'react';
import { css } from 'emotion';
import type { Meta, Story } from '@storybook/react/types-6-0';
import { Box, Flex } from '@contentful/f36-core';
import { Button } from '@contentful/f36-button';
import tokens from '@contentful/f36-tokens';
import { MagnifyingGlassIcon, CopySimpleIcon } from '@contentful/f36-icons';
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
      backgroundColor: 'burlywood',
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
        When a back button is present, backButtonProps are also required to be
        set to enable onClick behavior. The back button is rendered as a Button
        component with the `secondary` variant and `small` size. The title
        property is semantically the title of the entire page and represented as
        `h1`per default.
      </Note>
    </Box>
    <Header
      backButtonProps={{ onClick: action }}
      withBackButton
      title="Product"
    />
  </ExampleWrapper>
);

export const withTitleOverwrites: Story<HeaderProps> = () => (
  <ExampleWrapper>
    <Box marginBottom="spacingM">
      <Note>
        The title default properties can be overwritten via the `titleProps`
        property. It accepts `as` and `size` properties, which are passed to the
        underlying typography component. The `as` property defines the HTML tag
        used for the title, and the `size` property defines the font size. The
        default `as` is `h1`, and the default `size` is `large`.
      </Note>
    </Box>
    <Header
      backButtonProps={{ onClick: action }}
      withBackButton
      title="Product"
      titleProps={{ as: 'h2', size: 'medium' }} // Overwriting the default title properties
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
        <>
          <Button variant="secondary" size="small">
            Cancel
          </Button>
          <Button variant="primary" size="small">
            Save
          </Button>
        </>
      }
      title="Product"
    />
  </ExampleWrapper>
);

export const withMetadata: Story<HeaderProps> = () => (
  <ExampleWrapper>
    <Box marginBottom="spacingM">
      <Note>Metadata area gets rendered after the title area</Note>
    </Box>
    <Header
      title="Entry ID: 1234567890"
      metadata={
        <>
          <Button
            variant="transparent"
            startIcon={<CopySimpleIcon />}
            size="small"
          >
            Copy ID
          </Button>
        </>
      }
      actions={
        <>
          <Button variant="secondary" size="small">
            Cancel
          </Button>
          <Button variant="primary" size="small">
            Save
          </Button>
        </>
      }
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
        <TextInput
          placeholder="Search"
          icon={<MagnifyingGlassIcon />}
          size="small"
        />
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
