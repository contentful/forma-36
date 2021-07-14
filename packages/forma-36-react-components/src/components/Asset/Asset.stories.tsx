import React from 'react';
import type { Meta, Story } from '@storybook/react/types-6-0';
import { Flex } from '@contentful/f36-core';
import { SectionHeading, Text } from '@contentful/f36-typography';
import { Asset, types } from './Asset';

import type { AssetProps } from './Asset';

export default {
  argTypes: {
    className: { control: { disable: true } },
    src: {
      control: 'text',
      defaultValue: 'https://via.placeholder.com/200x300',
    },
    status: {
      control: {
        type: 'select',
        options: ['archived', 'changed', 'draft', 'published'],
      },
    },
    testId: { control: { disable: true } },
    title: { control: 'text', defaultValue: 'Image of a cat' },
    type: {
      control: {
        type: 'select',
        options: Object.keys(types),
      },
      defaultValue: Object.keys(types)[0],
    },
  },
  component: Asset,
  parameters: {
    propTypes: Asset['__docgenInfo'],
  },
  title: 'Components/Asset',
} as Meta;

export const Default: Story<AssetProps> = (args) => {
  return <Asset {...args} />;
};

export const WithAnImage: Story<AssetProps> = (args) => {
  return <Asset {...args} />;
};

WithAnImage.args = {
  type: 'image',
};

export const WithAnArchivedImage: Story<AssetProps> = (args) => {
  return <Asset {...args} />;
};

WithAnArchivedImage.args = {
  status: 'archived',
  type: 'image',
};

export const overview: Story<AssetProps> = () => (
  <>
    <Flex flexDirection="column" marginBottom="spacingM">
      <Flex marginBottom="spacingS">
        <SectionHeading as="h3">Asset status overview</SectionHeading>
      </Flex>
      <Flex marginBottom="spacingS">
        <Flex flexDirection="column" marginRight="spacingS">
          <Text>published</Text>
          <Asset status="published" src="https://via.placeholder.com/200x300" />
        </Flex>
        <Flex flexDirection="column" marginRight="spacingS">
          <Text>draft</Text>
          <Asset status="draft" src="https://via.placeholder.com/200x300" />
        </Flex>
        <Flex flexDirection="column" marginRight="spacingS">
          <Text>changed</Text>
          <Asset status="changed" src="https://via.placeholder.com/200x300" />
        </Flex>
        <Flex flexDirection="column" marginRight="spacingS">
          <Text>archived</Text>
          <Asset status="archived" src="https://via.placeholder.com/200x300" />
        </Flex>
      </Flex>
    </Flex>
    <Flex flexDirection="column">
      <Flex marginBottom="spacingS">
        <SectionHeading as="h3">Asset types overview</SectionHeading>
      </Flex>
      <Flex marginBottom="spacingS">
        <Flex flexDirection="column" marginRight="spacingS">
          <Text>image</Text>
          <Asset type="image" src="https://via.placeholder.com/200x300" />
        </Flex>
        <Flex flexDirection="column" marginRight="spacingS">
          <Text>archive</Text>
          <Asset type="archive" src="https://via.placeholder.com/200x300" />
        </Flex>
        <Flex flexDirection="column" marginRight="spacingS">
          <Text>audio</Text>
          <Asset type="audio" src="https://via.placeholder.com/200x300" />
        </Flex>
        <Flex flexDirection="column" marginRight="spacingS">
          <Text>code</Text>
          <Asset type="code" src="https://via.placeholder.com/200x300" />
        </Flex>
        <Flex flexDirection="column" marginRight="spacingS">
          <Text>markup</Text>
          <Asset type="markup" src="https://via.placeholder.com/200x300" />
        </Flex>
        <Flex flexDirection="column" marginRight="spacingS">
          <Text>pdf</Text>
          <Asset type="pdf" src="https://via.placeholder.com/200x300" />
        </Flex>
        <Flex flexDirection="column" marginRight="spacingS">
          <Text>plaintext</Text>
          <Asset type="plaintext" src="https://via.placeholder.com/200x300" />
        </Flex>
        <Flex flexDirection="column" marginRight="spacingS">
          <Text>presentation</Text>
          <Asset
            type="presentation"
            src="https://via.placeholder.com/200x300"
          />
        </Flex>
        <Flex flexDirection="column" marginRight="spacingS">
          <Text>spreadsheet</Text>
          <Asset type="spreadsheet" src="https://via.placeholder.com/200x300" />
        </Flex>
        <Flex flexDirection="column" marginRight="spacingS">
          <Text>video</Text>
          <Asset type="video" src="https://via.placeholder.com/200x300" />
        </Flex>
      </Flex>
    </Flex>
  </>
);
