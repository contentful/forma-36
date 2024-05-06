import React from 'react';
import { css } from 'emotion';
import type { Meta, Story } from '@storybook/react/types-6-0';
import { Box } from '@contentful/f36-core';
import tokens from '@contentful/f36-tokens';

import { Layout } from '../src/CompoundLayout';
import { LayoutProps } from '../src';

interface StoryArgs {
  withHeader: boolean;
  withLeftSidebar: boolean;
  withRightSidebar: boolean;
}

export const Default: Story<Pick<LayoutProps, 'variant'> & StoryArgs> = ({
  variant,
  withHeader,
  withLeftSidebar,
  withRightSidebar,
}) => {
  return (
    <div
      style={{
        minWidth: '90vw',
        minHeight: '90vh',
        background: tokens.gray100,
        padding: tokens.spacingL,
      }}
    >
      <Layout
        variant={variant}
        header={withHeader && <Layout.Header>Header</Layout.Header>}
        leftSidebar={
          withLeftSidebar && (
            <Layout.Sidebar>
              <Box
                className={css({
                  backgroundColor: tokens.blue100,
                  color: tokens.blue600,
                  width: '100%',
                  height: '80vh',
                })}
              >
                Sidebar left content
              </Box>
            </Layout.Sidebar>
          )
        }
        rightSidebar={
          withRightSidebar && (
            <Layout.Sidebar>
              <Box
                className={css({
                  backgroundColor: tokens.blue100,
                  color: tokens.blue600,
                  width: '100%',
                  height: '80vh',
                })}
              >
                Sidebar right content
              </Box>
            </Layout.Sidebar>
          )
        }
      >
        <Layout.Body>
          <Box
            className={css({
              backgroundColor: tokens.red100,
              color: tokens.red600,
              width: '100%',
              height: '80vh',
            })}
          >
            Body content
          </Box>
        </Layout.Body>
      </Layout>
    </div>
  );
};

const meta: Meta<StoryArgs> = {
  component: Layout,
  title: 'Layout/Layout',
  args: {
    withHeader: true,
    withLeftSidebar: false,
    withRightSidebar: false,
  },
};

export default meta;
