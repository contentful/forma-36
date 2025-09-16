import React from 'react';
import type { StoryFn, StoryObj, Meta } from '@storybook/react-vite';
import { Flex } from '@contentful/f36-core';
import { SectionHeading, Text } from '@contentful/f36-typography';
import { Asset } from '../src/Asset';
import { types } from '../src/types';

import type { AssetProps } from '../src/Asset';

export default {
  argTypes: {
    className: { control: { disable: true } },
    src: {
      control: 'text',
      defaultValue:
        'https://images.ctfassets.net/iq4lnigp6fgt/72KhxI84kw1SE9gP8gDp7R/c5fa24bdc295a318018aea0ca46e2de8/forma-36-storybook-asset.png?fit=fill&f=top_left&w=200&h=300',
    },
    status: {
      control: {
        type: 'select',
        options: ['archived', 'changed', 'draft', 'published'],
      },
    },
    testId: { control: { disable: true } },
    title: { control: 'text', defaultValue: 'Everyone is welcome here' },
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

export const Basic: StoryObj<AssetProps> = {
  render: (args) => {
    return <Asset {...args} />;
  },
};

export const WithAnImage: StoryObj<AssetProps> = {
  render: (args) => {
    return <Asset {...args} />;
  },

  args: {
    type: 'image',
  },
};

export const Overview: StoryFn<AssetProps> = () => (
  <>
    <Flex flexDirection="column" marginBottom="spacingM">
      <SectionHeading as="h3" marginBottom="spacingS">
        Asset status overview
      </SectionHeading>

      <Flex marginBottom="spacingS">
        <Flex flexDirection="column" marginRight="spacingS">
          <Text as="p">published</Text>
          <Asset
            status="published"
            src="https://images.ctfassets.net/iq4lnigp6fgt/72KhxI84kw1SE9gP8gDp7R/c5fa24bdc295a318018aea0ca46e2de8/forma-36-storybook-asset.png?fit=fill&f=top_left&w=200&h=300"
          />
        </Flex>
        <Flex flexDirection="column" marginRight="spacingS">
          <Text as="p">draft</Text>
          <Asset
            status="draft"
            src="https://images.ctfassets.net/iq4lnigp6fgt/72KhxI84kw1SE9gP8gDp7R/c5fa24bdc295a318018aea0ca46e2de8/forma-36-storybook-asset.png?fit=fill&f=top_left&w=200&h=300"
          />
        </Flex>
        <Flex flexDirection="column" marginRight="spacingS">
          <Text as="p">changed</Text>
          <Asset
            status="changed"
            src="https://images.ctfassets.net/iq4lnigp6fgt/72KhxI84kw1SE9gP8gDp7R/c5fa24bdc295a318018aea0ca46e2de8/forma-36-storybook-asset.png?fit=fill&f=top_left&w=200&h=300"
          />
        </Flex>
        <Flex flexDirection="column" marginRight="spacingS">
          <Text as="p">archived (should not show image)</Text>
          <Asset
            status="archived"
            src="https://images.ctfassets.net/iq4lnigp6fgt/72KhxI84kw1SE9gP8gDp7R/c5fa24bdc295a318018aea0ca46e2de8/forma-36-storybook-asset.png?fit=fill&f=top_left&w=200&h=300"
          />
        </Flex>
      </Flex>
    </Flex>
    <Flex flexDirection="column">
      <SectionHeading as="h3" marginBottom="spacingS">
        Asset types overview
      </SectionHeading>

      <Flex marginBottom="spacingS">
        <Flex flexDirection="column" marginRight="spacingS">
          <Text as="p">image</Text>
          <Asset
            type="image"
            src="https://images.ctfassets.net/iq4lnigp6fgt/72KhxI84kw1SE9gP8gDp7R/c5fa24bdc295a318018aea0ca46e2de8/forma-36-storybook-asset.png?fit=fill&f=top_left&w=200&h=300"
          />
        </Flex>
        <Flex flexDirection="column" marginRight="spacingS">
          <Text as="p">archive</Text>
          <Asset
            type="archive"
            src="https://images.ctfassets.net/iq4lnigp6fgt/72KhxI84kw1SE9gP8gDp7R/c5fa24bdc295a318018aea0ca46e2de8/forma-36-storybook-asset.png?fit=fill&f=top_left&w=200&h=300"
          />
        </Flex>
        <Flex flexDirection="column" marginRight="spacingS">
          <Text as="p">audio</Text>
          <Asset
            type="audio"
            src="https://images.ctfassets.net/iq4lnigp6fgt/72KhxI84kw1SE9gP8gDp7R/c5fa24bdc295a318018aea0ca46e2de8/forma-36-storybook-asset.png?fit=fill&f=top_left&w=200&h=300"
          />
        </Flex>
        <Flex flexDirection="column" marginRight="spacingS">
          <Text as="p">code</Text>
          <Asset
            type="code"
            src="https://images.ctfassets.net/iq4lnigp6fgt/72KhxI84kw1SE9gP8gDp7R/c5fa24bdc295a318018aea0ca46e2de8/forma-36-storybook-asset.png?fit=fill&f=top_left&w=200&h=300"
          />
        </Flex>
        <Flex flexDirection="column" marginRight="spacingS">
          <Text as="p">markup</Text>
          <Asset
            type="markup"
            src="https://images.ctfassets.net/iq4lnigp6fgt/72KhxI84kw1SE9gP8gDp7R/c5fa24bdc295a318018aea0ca46e2de8/forma-36-storybook-asset.png?fit=fill&f=top_left&w=200&h=300"
          />
        </Flex>
        <Flex flexDirection="column" marginRight="spacingS">
          <Text as="p">pdf</Text>
          <Asset
            type="pdf"
            src="https://images.ctfassets.net/iq4lnigp6fgt/72KhxI84kw1SE9gP8gDp7R/c5fa24bdc295a318018aea0ca46e2de8/forma-36-storybook-asset.png?fit=fill&f=top_left&w=200&h=300"
          />
        </Flex>
        <Flex flexDirection="column" marginRight="spacingS">
          <Text as="p">plaintext</Text>
          <Asset
            type="plaintext"
            src="https://images.ctfassets.net/iq4lnigp6fgt/72KhxI84kw1SE9gP8gDp7R/c5fa24bdc295a318018aea0ca46e2de8/forma-36-storybook-asset.png?fit=fill&f=top_left&w=200&h=300"
          />
        </Flex>
        <Flex flexDirection="column" marginRight="spacingS">
          <Text as="p">presentation</Text>
          <Asset
            type="presentation"
            src="https://images.ctfassets.net/iq4lnigp6fgt/72KhxI84kw1SE9gP8gDp7R/c5fa24bdc295a318018aea0ca46e2de8/forma-36-storybook-asset.png?fit=fill&f=top_left&w=200&h=300"
          />
        </Flex>
        <Flex flexDirection="column" marginRight="spacingS">
          <Text as="p">spreadsheet</Text>
          <Asset
            type="spreadsheet"
            src="https://images.ctfassets.net/iq4lnigp6fgt/72KhxI84kw1SE9gP8gDp7R/c5fa24bdc295a318018aea0ca46e2de8/forma-36-storybook-asset.png?fit=fill&f=top_left&w=200&h=300"
          />
        </Flex>
        <Flex flexDirection="column" marginRight="spacingS">
          <Text as="p">video</Text>
          <Asset
            type="video"
            src="https://images.ctfassets.net/iq4lnigp6fgt/72KhxI84kw1SE9gP8gDp7R/c5fa24bdc295a318018aea0ca46e2de8/forma-36-storybook-asset.png?fit=fill&f=top_left&w=200&h=300"
          />
        </Flex>
      </Flex>
    </Flex>
  </>
);
