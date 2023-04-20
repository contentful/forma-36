import React from 'react';

import { Flex } from '@contentful/f36-core';
import { MissingContent } from '../src';

export default {
  title: 'Utilities/MissingContent',
  component: MissingContent,
  parameters: {
    propTypes: MissingContent['__docgenInfo'],
  },
  argTypes: {
    className: { control: { disable: true } },
    testId: { control: { disable: true } },
  },
};

export const Basic = () => {
  return (
    <div>
      <Flex flexDirection="row">
        Description: <MissingContent title="No description provided" />
      </Flex>
      <Flex flexDirection="row">
        Missing: <MissingContent testId="missing-entry-1234" />
      </Flex>
    </div>
  );
};
