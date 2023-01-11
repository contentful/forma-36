import React from 'react';
import type { Meta, Story } from '@storybook/react/types-6-0';
import { Flex } from '@contentful/f36-core';
import { SectionHeading } from '@contentful/f36-typography';
import { MenuItem } from '@contentful/f36-menu';
import * as icons from '@contentful/f36-icons';

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
  title: 'Containers/AssetCard',
} as Meta;

export const basic: Story<AssetCardProps> = (args) => {
  return (
    <Flex flexDirection="column" marginBottom="spacingL">
      <SectionHeading as="h3" marginBottom="spacingS">
        Default
      </SectionHeading>
      <AssetCard {...args} size="default" />

      <SectionHeading as="h3" marginBottom="spacingS" marginTop="spacingM">
        Small
      </SectionHeading>
      <AssetCard {...args} size="small" />
    </Flex>
  );
};

basic.args = {
  actions: [
    <MenuItem key="copy">Copy</MenuItem>,
    <MenuItem key="delete">Delete</MenuItem>,
  ],
  icon: <icons.ClockIcon />,
  status: 'published',
  type: 'image',
  src: 'https://images.ctfassets.net/iq4lnigp6fgt/2EEEk92Kiz6KxREsjBLPAN/810d5a21650d91abad12e95da4cd3beb/2021-06_Everyone_is_Welcome_here_1_.png?fit=fill&f=top_left&w=200&h=300',
  title: 'Asset title',
};

// const actions: React.ReactNodeArray = [
//   <MenuItem key="copy">Copy</MenuItem>,
//   <MenuItem key="delete">Delete</MenuItem>,
// ];

// export const Overview: Story<Args> = () => {
//   return (
//     <>
//       <SectionHeading as="h3" marginBottom="spacingS">
//         Default
//       </SectionHeading>

//       <Flex flexWrap="wrap">
//         <Flex flexDirection="column" marginRight="spacingM">
//           <SectionHeading as="h3" marginBottom="spacingS">
//             Default
//           </SectionHeading>

//           <AssetCard
//             icon={<Icon as={icons.ClockIcon} />}
//             src="https://images.ctfassets.net/iq4lnigp6fgt/2EEEk92Kiz6KxREsjBLPAN/810d5a21650d91abad12e95da4cd3beb/2021-06_Everyone_is_Welcome_here_1_.png?fit=fill&f=top_left&w=200&h=300"
//             title="Asset title"
//             type="image"
//           />
//         </Flex>

//         <Flex flexDirection="column" marginRight="spacingM">
//           <SectionHeading as="h3" marginBottom="spacingS">
//             Hover
//           </SectionHeading>

//           <AssetCard
//             actions={actions}
//             isHovered
//             src="https://images.ctfassets.net/iq4lnigp6fgt/2EEEk92Kiz6KxREsjBLPAN/810d5a21650d91abad12e95da4cd3beb/2021-06_Everyone_is_Welcome_here_1_.png?fit=fill&f=top_left&w=200&h=300"
//             title="Asset title"
//             type="image"
//           />
//         </Flex>

//         <Flex flexDirection="column" marginRight="spacingM">
//           <SectionHeading as="h3" marginBottom="spacingS">
//             Selected
//           </SectionHeading>

//           <AssetCard
//             isSelected
//             src="https://images.ctfassets.net/iq4lnigp6fgt/2EEEk92Kiz6KxREsjBLPAN/810d5a21650d91abad12e95da4cd3beb/2021-06_Everyone_is_Welcome_here_1_.png?fit=fill&f=top_left&w=200&h=300"
//             title="Asset title"
//             type="image"
//           />
//         </Flex>
//       </Flex>

//       <SectionHeading as="h3" marginBottom="spacingS" marginTop="spacingL">
//         Small
//       </SectionHeading>

//       <Flex flexWrap="wrap">
//         <Flex flexDirection="column" marginRight="spacingM">
//           <SectionHeading as="h3" marginBottom="spacingS">
//             Default
//           </SectionHeading>

//           <AssetCard
//             icon={<Icon as={icons.ClockIcon} />}
//             size="small"
//             src="https://images.ctfassets.net/iq4lnigp6fgt/2EEEk92Kiz6KxREsjBLPAN/810d5a21650d91abad12e95da4cd3beb/2021-06_Everyone_is_Welcome_here_1_.png?fit=fill&f=top_left&w=200&h=300"
//             title="Asset title"
//             type="image"
//           />
//         </Flex>

//         <Flex flexDirection="column" marginRight="spacingM">
//           <SectionHeading as="h3" marginBottom="spacingS">
//             Hover
//           </SectionHeading>

//           <AssetCard
//             actions={actions}
//             isHovered
//             size="small"
//             src="https://images.ctfassets.net/iq4lnigp6fgt/2EEEk92Kiz6KxREsjBLPAN/810d5a21650d91abad12e95da4cd3beb/2021-06_Everyone_is_Welcome_here_1_.png?fit=fill&f=top_left&w=200&h=300"
//             title="Asset title"
//             type="image"
//           />
//         </Flex>

//         <Flex flexDirection="column" marginRight="spacingM">
//           <SectionHeading as="h3" marginBottom="spacingS">
//             Selected
//           </SectionHeading>

//           <AssetCard
//             isSelected
//             size="small"
//             src="https://images.ctfassets.net/iq4lnigp6fgt/2EEEk92Kiz6KxREsjBLPAN/810d5a21650d91abad12e95da4cd3beb/2021-06_Everyone_is_Welcome_here_1_.png?fit=fill&f=top_left&w=200&h=300"
//             title="Asset title"
//             type="image"
//           />
//         </Flex>
//       </Flex>
//     </>
//   );
// };

// export const DifferentImageSizes: Story<Args> = () => {
//   return (
//     <>
//       <SectionHeading as="h3" marginBottom="spacingS">
//         Default
//       </SectionHeading>

//       <Flex flexWrap="wrap">
//         <Flex flexDirection="column" marginRight="spacingM">
//           <SectionHeading as="h3" marginBottom="spacingS">
//             200x300
//           </SectionHeading>

//           <AssetCard
//             icon={<Icon as={icons.ClockIcon} />}
//             src="https://images.ctfassets.net/iq4lnigp6fgt/2EEEk92Kiz6KxREsjBLPAN/810d5a21650d91abad12e95da4cd3beb/2021-06_Everyone_is_Welcome_here_1_.png?fit=fill&f=top_left&w=200&h=300"
//             title="Asset title"
//             type="image"
//           />
//         </Flex>

//         <Flex flexDirection="column" marginRight="spacingM">
//           <SectionHeading as="h3" marginBottom="spacingS">
//             200x600
//           </SectionHeading>

//           <AssetCard
//             icon={<Icon as={icons.ClockIcon} />}
//             src="https://images.ctfassets.net/iq4lnigp6fgt/2EEEk92Kiz6KxREsjBLPAN/810d5a21650d91abad12e95da4cd3beb/2021-06_Everyone_is_Welcome_here_1_.png?fit=fill&f=top_left&w=200&h=600"
//             title="Asset title"
//             type="image"
//           />
//         </Flex>

//         <Flex flexDirection="column" marginRight="spacingM">
//           <SectionHeading as="h3" marginBottom="spacingS">
//             800x200
//           </SectionHeading>

//           <AssetCard
//             icon={<Icon as={icons.ClockIcon} />}
//             src="https://images.ctfassets.net/iq4lnigp6fgt/2EEEk92Kiz6KxREsjBLPAN/810d5a21650d91abad12e95da4cd3beb/2021-06_Everyone_is_Welcome_here_1_.png?fit=fill&f=top_left&w=800&h=200"
//             title="Asset title"
//             type="image"
//           />
//         </Flex>
//       </Flex>

//       <SectionHeading as="h3" marginBottom="spacingS" marginTop="spacingL">
//         Small
//       </SectionHeading>

//       <Flex flexWrap="wrap">
//         <Flex flexDirection="column" marginRight="spacingM">
//           <SectionHeading as="h3" marginBottom="spacingS">
//             200x300
//           </SectionHeading>

//           <AssetCard
//             icon={<Icon as={icons.ClockIcon} />}
//             size="small"
//             src="https://images.ctfassets.net/iq4lnigp6fgt/2EEEk92Kiz6KxREsjBLPAN/810d5a21650d91abad12e95da4cd3beb/2021-06_Everyone_is_Welcome_here_1_.png?fit=fill&f=top_left&w=200&h=300"
//             title="Asset title"
//             type="image"
//           />
//         </Flex>

//         <Flex flexDirection="column" marginRight="spacingM">
//           <SectionHeading as="h3" marginBottom="spacingS">
//             200x600
//           </SectionHeading>

//           <AssetCard
//             actions={actions}
//             size="small"
//             src="https://images.ctfassets.net/iq4lnigp6fgt/2EEEk92Kiz6KxREsjBLPAN/810d5a21650d91abad12e95da4cd3beb/2021-06_Everyone_is_Welcome_here_1_.png?fit=fill&f=top_left&w=200&h=600"
//             title="Asset title"
//             type="image"
//           />
//         </Flex>

//         <Flex flexDirection="column" marginRight="spacingM">
//           <SectionHeading as="h3" marginBottom="spacingS">
//             800x200
//           </SectionHeading>

//           <AssetCard
//             size="small"
//             src="https://images.ctfassets.net/iq4lnigp6fgt/2EEEk92Kiz6KxREsjBLPAN/810d5a21650d91abad12e95da4cd3beb/2021-06_Everyone_is_Welcome_here_1_.png?fit=fill&f=top_left&w=800&h=200"
//             title="Asset title"
//             type="image"
//           />
//         </Flex>
//       </Flex>

//       <SectionHeading as="h3" marginBottom="spacingS" marginTop="spacingL">
//         Wrapped in container
//       </SectionHeading>

//       <Box style={{ width: '500px' }} marginBottom="spacingS">
//         <AssetCard
//           icon={<Icon as={icons.ClockIcon} />}
//           src="https://images.ctfassets.net/iq4lnigp6fgt/2EEEk92Kiz6KxREsjBLPAN/810d5a21650d91abad12e95da4cd3beb/2021-06_Everyone_is_Welcome_here_1_.png?fit=fill&f=top_left&w=800&h=200"
//           title="Asset title"
//           type="image"
//         />
//       </Box>

//       <Box style={{ width: '500px' }}>
//         <AssetCard
//           icon={<Icon as={icons.ClockIcon} />}
//           src="https://images.ctfassets.net/iq4lnigp6fgt/2EEEk92Kiz6KxREsjBLPAN/810d5a21650d91abad12e95da4cd3beb/2021-06_Everyone_is_Welcome_here_1_.png?fit=fill&f=top_left&w=200&h=300"
//           title="Asset title"
//           type="image"
//         />
//       </Box>
//     </>
//   );
// };
