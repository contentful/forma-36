import React from 'react';
import type { Meta, Story } from '@storybook/react/types-6-0';

import { Asset, types } from './Asset';
import Flex from '../Flex/Flex';
import SectionHeading from '../Typography/SectionHeading';
import Paragraph from '../Typography/Paragraph';

import type { AssetProps } from './Asset';
import notes from './README.mdx';

export default {
  argTypes: {
    className: { control: { disable: true } },
    src: { control: 'text', defaultValue: 'https://placekitten.com/200/300' },
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
    notes,
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
        <SectionHeading element="h3">Asset status overview</SectionHeading>
      </Flex>
      <Flex marginBottom="spacingS">
        <Flex flexDirection="column" marginRight="spacingS">
          <Paragraph>published</Paragraph>
          <Asset status="published" src="https://placekitten.com/200/300" />
        </Flex>
        <Flex flexDirection="column" marginRight="spacingS">
          <Paragraph>draft</Paragraph>
          <Asset status="draft" src="https://placekitten.com/200/300" />
        </Flex>
        <Flex flexDirection="column" marginRight="spacingS">
          <Paragraph>changed</Paragraph>
          <Asset status="changed" src="https://placekitten.com/200/300" />
        </Flex>
        <Flex flexDirection="column" marginRight="spacingS">
          <Paragraph>archived</Paragraph>
          <Asset status="archived" src="https://placekitten.com/200/300" />
        </Flex>
      </Flex>
    </Flex>
    <Flex flexDirection="column">
      <Flex marginBottom="spacingS">
        <SectionHeading element="h3">Asset types overview</SectionHeading>
      </Flex>
      <Flex marginBottom="spacingS">
        <Flex flexDirection="column" marginRight="spacingS">
          <Paragraph>image</Paragraph>
          <Asset type="image" src="https://placekitten.com/200/300" />
        </Flex>
        <Flex flexDirection="column" marginRight="spacingS">
          <Paragraph>archive</Paragraph>
          <Asset type="archive" src="https://placekitten.com/200/300" />
        </Flex>
        <Flex flexDirection="column" marginRight="spacingS">
          <Paragraph>audio</Paragraph>
          <Asset type="audio" src="https://placekitten.com/200/300" />
        </Flex>
        <Flex flexDirection="column" marginRight="spacingS">
          <Paragraph>code</Paragraph>
          <Asset type="code" src="https://placekitten.com/200/300" />
        </Flex>
        <Flex flexDirection="column" marginRight="spacingS">
          <Paragraph>markup</Paragraph>
          <Asset type="markup" src="https://placekitten.com/200/300" />
        </Flex>
        <Flex flexDirection="column" marginRight="spacingS">
          <Paragraph>pdf</Paragraph>
          <Asset type="pdf" src="https://placekitten.com/200/300" />
        </Flex>
        <Flex flexDirection="column" marginRight="spacingS">
          <Paragraph>plaintext</Paragraph>
          <Asset type="plaintext" src="https://placekitten.com/200/300" />
        </Flex>
        <Flex flexDirection="column" marginRight="spacingS">
          <Paragraph>presentation</Paragraph>
          <Asset type="presentation" src="https://placekitten.com/200/300" />
        </Flex>
        <Flex flexDirection="column" marginRight="spacingS">
          <Paragraph>spreadsheet</Paragraph>
          <Asset type="spreadsheet" src="https://placekitten.com/200/300" />
        </Flex>
        <Flex flexDirection="column" marginRight="spacingS">
          <Paragraph>video</Paragraph>
          <Asset type="video" src="https://placekitten.com/200/300" />
        </Flex>
      </Flex>
    </Flex>
  </>
);
