import React from 'react';
import { DisplayText, DisplayTextInternalProps } from '../src/DisplayText';

export default {
  title: 'Typography/DisplayText',
  component: DisplayText,
  parameters: {
    propTypes: [DisplayText['__docgenInfo']],
  },
  argTypes: {
    className: { control: { disable: true } },
    testId: { control: { disable: true } },
  },
};

export const Basic = (props: DisplayTextInternalProps) => (
  <DisplayText {...props} />
);

Basic.args = {
  children: 'Display text',
};

// export const Overview = ({ displayText, ...args }: Args) => (
//   <>
//     <Flex alignItems="center" marginBottom="spacingL">
//       <Flex marginRight="spacingS">
//         <Paragraph>48</Paragraph>
//       </Flex>
//       <DisplayText {...args} size="huge">
//         {displayText}
//       </DisplayText>
//     </Flex>

//     <Flex alignItems="center" marginBottom="spacingL">
//       <Flex marginRight="spacingS">
//         <Paragraph>36</Paragraph>
//       </Flex>
//       <DisplayText {...args} size="large">
//         {displayText}
//       </DisplayText>
//     </Flex>

//     <Flex alignItems="center">
//       <Flex marginRight="spacingS">
//         <Paragraph>28</Paragraph>
//       </Flex>
//       <DisplayText {...args} size="default">
//         {displayText}
//       </DisplayText>
//     </Flex>
//   </>
// );

// Overview.args = {
//   displayText: 'Display text',
// };
