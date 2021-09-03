import React from 'react';
import type { Meta, Story } from '@storybook/react/types-6-0';
import { Flex, Grid } from '@contentful/f36-core';
import { SectionHeading } from '@contentful/f36-typography';
import { Button } from '@contentful/f36-button';
import { StarIcon } from '@contentful/f36-icons';

import { Workbench } from '../src/Workbench';
// import type { WorkbenchProps } from '../src/Workbench';

export default {
  component: Workbench,
  title: 'Components/Workbench',
} as Meta;

interface Args {
  headerTitle: string;
  headerDescription: string;
}

export const Basic: Story<Args> = (args) => {
  /* eslint-disable no-console */
  return (
    <Workbench {...args}>
      <Workbench.Header
        title={args.headerTitle}
        description={args.headerDescription}
        icon={StarIcon}
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
  /* eslint-enable no-console */
};
Basic.args = {
  headerTitle: 'Page title',
  headerDescription: 'Page description',
};

export const HeaderOverview = () => {
  /* eslint-disable no-console */
  return (
    <Flex style={{ minWidth: '960px' }} flexDirection="column">
      <Grid rowGap="spacingL" rows="repeat(2, auto)">
        <span>
          <SectionHeading as="h3" marginBottom="spacingS">
            Minimal Header
          </SectionHeading>

          <Workbench.Header title="Page title" />
        </span>

        <span>
          <SectionHeading as="h3" marginBottom="spacingS">
            Header with description
          </SectionHeading>

          <Workbench.Header title="Page title" description="Page description" />
        </span>

        <span>
          <SectionHeading as="h3" marginBottom="spacingS">
            Header with icon
          </SectionHeading>

          <Workbench.Header title="Page title" icon={StarIcon} />
        </span>

        <span>
          <SectionHeading as="h3" marginBottom="spacingS">
            Header with back button
          </SectionHeading>

          <Workbench.Header
            title="Page title"
            onBack={() => console.log('back button clicked!')}
          />
        </span>

        <span>
          <SectionHeading as="h3" marginBottom="spacingS">
            Header with actions
          </SectionHeading>

          <Workbench.Header
            title="Page title"
            actions={
              <Button
                size="small"
                onClick={() => console.log('Workbench action clicked')}
              >
                Action
              </Button>
            }
          />
        </span>

        <span>
          <SectionHeading as="h3" marginBottom="spacingS">
            Header with all features
          </SectionHeading>

          <Workbench.Header
            title="Page title"
            description="Page description"
            icon={StarIcon}
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
        </span>
      </Grid>
    </Flex>
  );
  /* eslint-enable no-console */
};
