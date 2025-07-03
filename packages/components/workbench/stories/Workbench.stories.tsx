import React, { ReactNode } from 'react';
import type { Meta, Story } from '@storybook/react/types-6-0';
import { action } from '@storybook/addon-actions';
import tokens from '@contentful/f36-tokens';
import { Flex, Grid } from '@contentful/f36-core';
import {
  Heading,
  Subheading,
  Paragraph,
  SectionHeading,
} from '@contentful/f36-typography';
import { Button } from '@contentful/f36-button';
import { InfoIcon, StarIcon } from '@contentful/f36-icons';

import { Workbench } from '../src/CompoundWorkbench';
import type { WorkbenchContentProps } from '../src/WorkbenchContent';

export default {
  title: 'Components/Workbench',
  component: Workbench,
  subcomponents: {
    WorkbenchHeader: Workbench.Header,
    WorkbenchContent: Workbench.Content,
    WorkbenchSidebar: Workbench.Sidebar,
  },
  argTypes: {
    ['Content Type']: {
      control: {
        options: ['default', 'text', 'full'],
        type: 'select',
      },
    },
  },
  decorators: [
    (Story) => (
      <div style={{ minHeight: '200px' }}>
        <Story />
      </div>
    ),
  ],
} as Meta;

interface Args {
  ['Header Title']: string;
  ['Header Description']: ReactNode;
  ['Content Type']: WorkbenchContentProps['type'];
}

export const Basic: Story<Args> = (args) => {
  return (
    <Workbench {...args}>
      <Workbench.Header
        title={args['Header Title']}
        description={args['Header Description']}
        icon={StarIcon}
      />
      <Workbench.Content type={args['Content Type']}>
        <Subheading>Page Content</Subheading>
        <Paragraph>
          This is where all the main content of your page goes
        </Paragraph>
        <Paragraph>
          It’s possible to use any combination of Forma 36 Component and HTML
          element in here
        </Paragraph>
        <div style={{ height: '1000px', backgroundColor: tokens.blue400 }} />
      </Workbench.Content>
    </Workbench>
  );
};
Basic.args = {
  ['Header Title']: 'Page title',
  ['Header Description']: 'Page description',
  ['Content Type']: 'default',
};

export const WithAllHeaderFeatures: Story<Args> = (args) => {
  return (
    <Workbench {...args}>
      <Workbench.Header
        title={args['Header Title']}
        description={args['Header Description']}
        icon={StarIcon}
        onBack={action('back button clicked!')}
        actions={
          <Button size="small" onClick={action('Workbench action clicked')}>
            Action
          </Button>
        }
      />
      <Workbench.Content type={args['Content Type']}>
        <Subheading>Page Content</Subheading>
        <Paragraph>
          This is where all the main content of your page goes
        </Paragraph>
        <Paragraph>
          It’s possible to use any combination of Forma 36 Component and HTML
          element in here
        </Paragraph>
        <div style={{ height: '1000px', backgroundColor: tokens.blue400 }} />
      </Workbench.Content>
    </Workbench>
  );
};
WithAllHeaderFeatures.args = {
  ['Header Title']: 'Page title',
  ['Header Description']: 'Page description',
  ['Content Type']: 'default',
};

export const WithLeftSidebar: Story<Args> = (args) => {
  return (
    <Workbench {...args}>
      <Workbench.Header
        title={args['Header Title']}
        description={args['Header Description']}
        icon={StarIcon}
      />
      <Workbench.Sidebar position="left">
        <Subheading>Left Sidebar Content</Subheading>
        <Paragraph>
          It’s possible to use any combination of Forma 36 Component and HTML
          element in here
        </Paragraph>
      </Workbench.Sidebar>

      <Workbench.Content type={args['Content Type']}>
        <Subheading>Page Content</Subheading>
        <Paragraph>
          This is where all the main content of your page goes
        </Paragraph>
        <Paragraph>
          It’s possible to use any combination of Forma 36 Component and HTML
          element in here
        </Paragraph>
      </Workbench.Content>
    </Workbench>
  );
};
WithLeftSidebar.args = {
  ['Header Title']: 'Page title',
  ['Header Description']: 'Page description',
  ['Content Type']: 'default',
};

export const WithRightSidebar: Story<Args> = (args) => {
  return (
    <Workbench {...args}>
      <Workbench.Header
        title={args['Header Title']}
        description={args['Header Description']}
        icon={StarIcon}
      />
      <Workbench.Content type={args['Content Type']}>
        <Subheading>Page Content</Subheading>
        <Paragraph>
          This is where all the main content of your page goes
        </Paragraph>
        <Paragraph>
          It’s possible to use any combination of Forma 36 Component and HTML
          element in here
        </Paragraph>
      </Workbench.Content>

      <Workbench.Sidebar position="right">
        <Subheading>Left Sidebar Content</Subheading>
        <Paragraph>
          It’s possible to use any combination of Forma 36 Component and HTML
          element in here
        </Paragraph>
      </Workbench.Sidebar>
    </Workbench>
  );
};
WithRightSidebar.args = {
  ['Header Title']: 'Page title',
  ['Header Description']: 'Page description',
  ['Content Type']: 'default',
};

export const WithBothSidebars: Story<Args> = (args) => {
  return (
    <Workbench {...args}>
      <Workbench.Header
        title={args['Header Title']}
        description={args['Header Description']}
        icon={StarIcon}
      />
      <Workbench.Sidebar position="left">
        <Subheading>Left Sidebar Content</Subheading>
        <Paragraph>
          It’s possible to use any combination of Forma 36 Component and HTML
          element in here
        </Paragraph>
      </Workbench.Sidebar>

      <Workbench.Content type={args['Content Type']}>
        <Subheading>Page Content</Subheading>
        <Paragraph>
          This is where all the main content of your page goes
        </Paragraph>
        <Paragraph>
          It’s possible to use any combination of Forma 36 Component and HTML
          element in here
        </Paragraph>
      </Workbench.Content>

      <Workbench.Sidebar position="right">
        <Subheading>Right Sidebar Content</Subheading>
        <Paragraph>
          It’s possible to use any combination of Forma 36 Component and HTML
          element in here
        </Paragraph>
      </Workbench.Sidebar>
    </Workbench>
  );
};
WithBothSidebars.args = {
  ['Header Title']: 'Page title',
  ['Header Description']: 'Page description',
  ['Content Type']: 'default',
};

export const HeaderOverview = () => {
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
            onBack={action('back button clicked!')}
          />
        </span>

        <span>
          <SectionHeading as="h3" marginBottom="spacingS">
            Header with actions
          </SectionHeading>

          <Workbench.Header
            title="Page title"
            actions={
              <Button size="small" onClick={action('Workbench action clicked')}>
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
            onBack={action('back button clicked!')}
            actions={
              <Button size="small" onClick={action('Workbench action clicked')}>
                Action
              </Button>
            }
          />
        </span>

        <span>
          <SectionHeading as="h3" marginBottom="spacingS">
            Header with custom title element
          </SectionHeading>

          <Workbench.Header
            title={
              <Flex alignItems="center" gap="spacingXs">
                <Heading marginBottom="none">Page title</Heading> <InfoIcon />
              </Flex>
            }
          />
        </span>

        <span>
          <SectionHeading as="h3" marginBottom="spacingS">
            Header with custom description element
          </SectionHeading>

          <Workbench.Header
            title="Page title"
            description={<InfoIcon variant="muted" />}
          />
        </span>

        <span>
          <SectionHeading as="h3" marginBottom="spacingS">
            Header with custom icon element
          </SectionHeading>

          <Workbench.Header
            icon={<StarIcon size="medium" variant="positive" />}
            title="Page title"
          />
        </span>
      </Grid>
    </Flex>
  );
};
