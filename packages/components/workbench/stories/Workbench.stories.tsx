import React from 'react';
import type { Meta, Story } from '@storybook/react/types-6-0';
import { Button } from '@contentful/f36-button';

import { Workbench } from '../src/Workbench';
import type { WorkbenchProps } from '../src/Workbench';

export default {
  component: Workbench,
  title: 'Components/Workbench',
} as Meta;

export const Basic: Story<WorkbenchProps> = (args) => {
  return (
    <Workbench {...args}>
      <Workbench.Header
        title="Page title"
        description="Page description"
        onBack={() => console.log('back button clicked!')}
        actions={
          <Button
            size="small"
            onClick={() => console.log('Workbench action clicked')}
          >
            Action
          </Button>
        }
      />
      Workbench Content
    </Workbench>
  );
};
