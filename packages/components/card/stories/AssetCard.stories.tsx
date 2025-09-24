import React from 'react';
import type { Meta, StoryObj } from '@storybook/react-vite';
import { Flex, Box } from '@contentful/f36-core';
import { SectionHeading } from '@contentful/f36-typography';
import { MenuItem } from '@contentful/f36-menu';
import * as icons from '@contentful/f36-icons';
import { Icon } from '@contentful/f36-icon';
import { Badge } from '@contentful/f36-badge';

import { AssetCard, type AssetCardProps } from '../src';

export default {
  argTypes: {
    actions: { control: { disable: true } },
    as: { control: { disable: true } },
    className: { control: { disable: true } },
    icon: {
      control: {
        options: Object.keys(icons),
        type: 'select',
      },
      defaultValue: icons.ClockIcon,
    },
    rel: { control: { disable: true } },
    style: { control: { disable: true } },
    testId: { control: { disable: true } },
  },
  component: AssetCard,
  parameters: {
    propTypes: AssetCard['__docgenInfo'],
  },
  title: 'Components/Card/AssetCard',
} as Meta;

// Cast the icon value to string, maybe there's a Storybook way to do this
type Args = AssetCardProps & { icon?: string };

export const Default: StoryObj<Args> = (args) => {
  return <AssetCard {...args} icon={<Icon as={icons[args.icon]} />} />;
};

Default.args = {
  status: 'published',
  type: 'image',
  src: 'https://images.ctfassets.net/iq4lnigp6fgt/72KhxI84kw1SE9gP8gDp7R/c5fa24bdc295a318018aea0ca46e2de8/forma-36-storybook-asset.png?fit=fill&f=top_left&w=200&h=300',
  title: 'Asset title',
};

const actions: React.ReactNode[] = [
  <MenuItem key="copy">Copy</MenuItem>,
  <MenuItem key="delete">Delete</MenuItem>,
];

export const WithLoadingState: StoryObj<AssetCardProps> = (args) => {
  return <AssetCard {...args} icon={<Icon as={icons[args.icon]} />} />;
};

WithLoadingState.args = {
  isLoading: true,
};

export const WithCustomBadge: StoryObj<AssetCardProps> = {
  render: () => {
    return (
      <AssetCard
        src="https://images.ctfassets.net/iq4lnigp6fgt/72KhxI84kw1SE9gP8gDp7R/c5fa24bdc295a318018aea0ca46e2de8/forma-36-storybook-asset.png?fit=fill&f=top_left&w=200&h=300"
        title="Asset title"
        type="image"
        badge={<Badge variant={'positive'}>active</Badge>}
      />
    );
  },
};

export const Overview: StoryObj<AssetCardProps> = {
  render: () => (
    <>
      <SectionHeading as="h3" marginBottom="spacingS">
        Default
      </SectionHeading>

      <Flex flexWrap="wrap">
        <Flex flexDirection="column" marginRight="spacingM">
          <SectionHeading as="h3" marginBottom="spacingS">
            Default
          </SectionHeading>

          <AssetCard
            icon={<Icon as={icons.ClockIcon} />}
            src="https://images.ctfassets.net/iq4lnigp6fgt/72KhxI84kw1SE9gP8gDp7R/c5fa24bdc295a318018aea0ca46e2de8/forma-36-storybook-asset.png?fit=fill&f=top_left&w=200&h=300"
            title="Asset title"
            type="image"
          />
        </Flex>

        <Flex flexDirection="column" marginRight="spacingM">
          <SectionHeading as="h3" marginBottom="spacingS">
            Hover
          </SectionHeading>

          <AssetCard
            actions={actions}
            isHovered
            src="https://images.ctfassets.net/iq4lnigp6fgt/72KhxI84kw1SE9gP8gDp7R/c5fa24bdc295a318018aea0ca46e2de8/forma-36-storybook-asset.png?fit=fill&f=top_left&w=200&h=300"
            title="Asset title"
            type="image"
          />
        </Flex>

        <Flex flexDirection="column" marginRight="spacingM">
          <SectionHeading as="h3" marginBottom="spacingS">
            Selected
          </SectionHeading>

          <AssetCard
            isSelected
            src="https://images.ctfassets.net/iq4lnigp6fgt/72KhxI84kw1SE9gP8gDp7R/c5fa24bdc295a318018aea0ca46e2de8/forma-36-storybook-asset.png?fit=fill&f=top_left&w=200&h=300"
            title="Asset title"
            type="image"
          />
        </Flex>
      </Flex>

      <SectionHeading as="h3" marginBottom="spacingS" marginTop="spacingL">
        Small
      </SectionHeading>

      <Flex flexWrap="wrap">
        <Flex flexDirection="column" marginRight="spacingM">
          <SectionHeading as="h3" marginBottom="spacingS">
            Default
          </SectionHeading>

          <AssetCard
            icon={<Icon as={icons.ClockIcon} />}
            size="small"
            src="https://images.ctfassets.net/iq4lnigp6fgt/72KhxI84kw1SE9gP8gDp7R/c5fa24bdc295a318018aea0ca46e2de8/forma-36-storybook-asset.png?fit=fill&f=top_left&w=200&h=300"
            title="Asset title"
            type="image"
          />
        </Flex>

        <Flex flexDirection="column" marginRight="spacingM">
          <SectionHeading as="h3" marginBottom="spacingS">
            Hover
          </SectionHeading>

          <AssetCard
            actions={actions}
            isHovered
            size="small"
            src="https://images.ctfassets.net/iq4lnigp6fgt/72KhxI84kw1SE9gP8gDp7R/c5fa24bdc295a318018aea0ca46e2de8/forma-36-storybook-asset.png?fit=fill&f=top_left&w=200&h=300"
            title="Asset title"
            type="image"
          />
        </Flex>

        <Flex flexDirection="column" marginRight="spacingM">
          <SectionHeading as="h3" marginBottom="spacingS">
            Selected
          </SectionHeading>

          <AssetCard
            isSelected
            size="small"
            src="https://images.ctfassets.net/iq4lnigp6fgt/72KhxI84kw1SE9gP8gDp7R/c5fa24bdc295a318018aea0ca46e2de8/forma-36-storybook-asset.png?fit=fill&f=top_left&w=200&h=300"
            title="Asset title"
            type="image"
          />
        </Flex>
      </Flex>
    </>
  ),
};

export const DifferentImageSizes: StoryObj<Args> = {
  render: () => (
    <>
      <SectionHeading as="h3" marginBottom="spacingS">
        Default
      </SectionHeading>

      <Flex flexWrap="wrap">
        <Flex flexDirection="column" marginRight="spacingM">
          <SectionHeading as="h3" marginBottom="spacingS">
            200x300
          </SectionHeading>

          <AssetCard
            icon={<Icon as={icons.ClockIcon} />}
            src="https://images.ctfassets.net/iq4lnigp6fgt/72KhxI84kw1SE9gP8gDp7R/c5fa24bdc295a318018aea0ca46e2de8/forma-36-storybook-asset.png?fit=fill&f=top_left&w=200&h=300"
            title="Asset title"
            type="image"
          />
        </Flex>

        <Flex flexDirection="column" marginRight="spacingM">
          <SectionHeading as="h3" marginBottom="spacingS">
            200x600
          </SectionHeading>

          <AssetCard
            icon={<Icon as={icons.ClockIcon} />}
            src="https://images.ctfassets.net/iq4lnigp6fgt/72KhxI84kw1SE9gP8gDp7R/c5fa24bdc295a318018aea0ca46e2de8/forma-36-storybook-asset.png?fit=fill&f=top_left&w=200&h=600"
            title="Asset title"
            type="image"
          />
        </Flex>

        <Flex flexDirection="column" marginRight="spacingM">
          <SectionHeading as="h3" marginBottom="spacingS">
            800x200
          </SectionHeading>

          <AssetCard
            icon={<Icon as={icons.ClockIcon} />}
            src="https://images.ctfassets.net/iq4lnigp6fgt/72KhxI84kw1SE9gP8gDp7R/c5fa24bdc295a318018aea0ca46e2de8/forma-36-storybook-asset.png?fit=fill&f=top_left&w=800&h=200"
            title="Asset title"
            type="image"
          />
        </Flex>
      </Flex>

      <SectionHeading as="h3" marginBottom="spacingS" marginTop="spacingL">
        Small
      </SectionHeading>

      <Flex flexWrap="wrap">
        <Flex flexDirection="column" marginRight="spacingM">
          <SectionHeading as="h3" marginBottom="spacingS">
            200x300
          </SectionHeading>

          <AssetCard
            icon={<Icon as={icons.ClockIcon} />}
            size="small"
            src="https://images.ctfassets.net/iq4lnigp6fgt/72KhxI84kw1SE9gP8gDp7R/c5fa24bdc295a318018aea0ca46e2de8/forma-36-storybook-asset.png?fit=fill&f=top_left&w=200&h=300"
            title="Asset title"
            type="image"
          />
        </Flex>

        <Flex flexDirection="column" marginRight="spacingM">
          <SectionHeading as="h3" marginBottom="spacingS">
            200x600
          </SectionHeading>

          <AssetCard
            actions={actions}
            size="small"
            src="https://images.ctfassets.net/iq4lnigp6fgt/72KhxI84kw1SE9gP8gDp7R/c5fa24bdc295a318018aea0ca46e2de8/forma-36-storybook-asset.png?fit=fill&f=top_left&w=200&h=600"
            title="Asset title"
            type="image"
          />
        </Flex>

        <Flex flexDirection="column" marginRight="spacingM">
          <SectionHeading as="h3" marginBottom="spacingS">
            800x200
          </SectionHeading>

          <AssetCard
            size="small"
            src="https://images.ctfassets.net/iq4lnigp6fgt/72KhxI84kw1SE9gP8gDp7R/c5fa24bdc295a318018aea0ca46e2de8/forma-36-storybook-asset.png?fit=fill&f=top_left&w=800&h=200"
            title="Asset title"
            type="image"
          />
        </Flex>
      </Flex>

      <SectionHeading as="h3" marginBottom="spacingS" marginTop="spacingL">
        Wrapped in container
      </SectionHeading>

      <Box style={{ width: '500px' }} marginBottom="spacingS">
        <AssetCard
          icon={<Icon as={icons.ClockIcon} />}
          src="https://images.ctfassets.net/iq4lnigp6fgt/72KhxI84kw1SE9gP8gDp7R/c5fa24bdc295a318018aea0ca46e2de8/forma-36-storybook-asset.png?fit=fill&f=top_left&w=800&h=200"
          title="Asset title"
          type="image"
        />
      </Box>

      <Box style={{ width: '500px' }}>
        <AssetCard
          icon={<Icon as={icons.ClockIcon} />}
          src="https://images.ctfassets.net/iq4lnigp6fgt/72KhxI84kw1SE9gP8gDp7R/c5fa24bdc295a318018aea0ca46e2de8/forma-36-storybook-asset.png?fit=fill&f=top_left&w=200&h=300"
          title="Asset title"
          type="image"
        />
      </Box>
    </>
  ),
};
