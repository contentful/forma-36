import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { Flex, Box } from '@contentful/f36-core';
import { SectionHeading } from '@contentful/f36-typography';
import { MenuItem } from '@contentful/f36-menu';
import * as icons from '@contentful/f36-icons';
import { Icon } from '@contentful/f36-icon';

import { AssetCard } from '../src';

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
} as Meta<typeof AssetCard>;

type Story = StoryObj<typeof AssetCard>;

const actions: React.ReactNodeArray = [
  <MenuItem key="copy">Copy</MenuItem>,
  <MenuItem key="delete">Delete</MenuItem>,
];

export const Default: Story = {
  args: {
    status: 'published',
    type: 'image',
    src: 'https://images.ctfassets.net/iq4lnigp6fgt/2EEEk92Kiz6KxREsjBLPAN/810d5a21650d91abad12e95da4cd3beb/2021-06_Everyone_is_Welcome_here_1_.png?fit=fill&f=top_left&w=200&h=300',
    title: 'Asset title',
  },
  render: (args) => {
    return <AssetCard {...args} icon={<Icon as={icons[args.icon]} />} />;
  },
};

export const WithLoadingState: Story = {
  args: {
    isLoading: true,
  },
  render: (args) => {
    return <AssetCard {...args} icon={<Icon as={icons[args.icon]} />} />;
  },
};

export const Overview: Story = {
  render: () => {
    return (
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
              src="https://images.ctfassets.net/iq4lnigp6fgt/2EEEk92Kiz6KxREsjBLPAN/810d5a21650d91abad12e95da4cd3beb/2021-06_Everyone_is_Welcome_here_1_.png?fit=fill&f=top_left&w=200&h=300"
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
              src="https://images.ctfassets.net/iq4lnigp6fgt/2EEEk92Kiz6KxREsjBLPAN/810d5a21650d91abad12e95da4cd3beb/2021-06_Everyone_is_Welcome_here_1_.png?fit=fill&f=top_left&w=200&h=300"
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
              src="https://images.ctfassets.net/iq4lnigp6fgt/2EEEk92Kiz6KxREsjBLPAN/810d5a21650d91abad12e95da4cd3beb/2021-06_Everyone_is_Welcome_here_1_.png?fit=fill&f=top_left&w=200&h=300"
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
              src="https://images.ctfassets.net/iq4lnigp6fgt/2EEEk92Kiz6KxREsjBLPAN/810d5a21650d91abad12e95da4cd3beb/2021-06_Everyone_is_Welcome_here_1_.png?fit=fill&f=top_left&w=200&h=300"
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
              src="https://images.ctfassets.net/iq4lnigp6fgt/2EEEk92Kiz6KxREsjBLPAN/810d5a21650d91abad12e95da4cd3beb/2021-06_Everyone_is_Welcome_here_1_.png?fit=fill&f=top_left&w=200&h=300"
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
              src="https://images.ctfassets.net/iq4lnigp6fgt/2EEEk92Kiz6KxREsjBLPAN/810d5a21650d91abad12e95da4cd3beb/2021-06_Everyone_is_Welcome_here_1_.png?fit=fill&f=top_left&w=200&h=300"
              title="Asset title"
              type="image"
            />
          </Flex>
        </Flex>
      </>
    );
  },
};

export const DifferentImageSizes: Story = {
  render: () => {
    return (
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
              src="https://images.ctfassets.net/iq4lnigp6fgt/2EEEk92Kiz6KxREsjBLPAN/810d5a21650d91abad12e95da4cd3beb/2021-06_Everyone_is_Welcome_here_1_.png?fit=fill&f=top_left&w=200&h=300"
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
              src="https://images.ctfassets.net/iq4lnigp6fgt/2EEEk92Kiz6KxREsjBLPAN/810d5a21650d91abad12e95da4cd3beb/2021-06_Everyone_is_Welcome_here_1_.png?fit=fill&f=top_left&w=200&h=600"
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
              src="https://images.ctfassets.net/iq4lnigp6fgt/2EEEk92Kiz6KxREsjBLPAN/810d5a21650d91abad12e95da4cd3beb/2021-06_Everyone_is_Welcome_here_1_.png?fit=fill&f=top_left&w=800&h=200"
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
              src="https://images.ctfassets.net/iq4lnigp6fgt/2EEEk92Kiz6KxREsjBLPAN/810d5a21650d91abad12e95da4cd3beb/2021-06_Everyone_is_Welcome_here_1_.png?fit=fill&f=top_left&w=200&h=300"
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
              src="https://images.ctfassets.net/iq4lnigp6fgt/2EEEk92Kiz6KxREsjBLPAN/810d5a21650d91abad12e95da4cd3beb/2021-06_Everyone_is_Welcome_here_1_.png?fit=fill&f=top_left&w=200&h=600"
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
              src="https://images.ctfassets.net/iq4lnigp6fgt/2EEEk92Kiz6KxREsjBLPAN/810d5a21650d91abad12e95da4cd3beb/2021-06_Everyone_is_Welcome_here_1_.png?fit=fill&f=top_left&w=800&h=200"
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
            src="https://images.ctfassets.net/iq4lnigp6fgt/2EEEk92Kiz6KxREsjBLPAN/810d5a21650d91abad12e95da4cd3beb/2021-06_Everyone_is_Welcome_here_1_.png?fit=fill&f=top_left&w=800&h=200"
            title="Asset title"
            type="image"
          />
        </Box>

        <Box style={{ width: '500px' }}>
          <AssetCard
            icon={<Icon as={icons.ClockIcon} />}
            src="https://images.ctfassets.net/iq4lnigp6fgt/2EEEk92Kiz6KxREsjBLPAN/810d5a21650d91abad12e95da4cd3beb/2021-06_Everyone_is_Welcome_here_1_.png?fit=fill&f=top_left&w=200&h=300"
            title="Asset title"
            type="image"
          />
        </Box>
      </>
    );
  },
};
