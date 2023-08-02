import React from 'react';
import { css } from 'emotion';
import type { Meta, Story } from '@storybook/react/types-6-0';
import { Box, Flex } from '@contentful/f36-core';
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
    <div style={{ minWidth: '50vw' }}>
      <Layout
        variant={variant}
        header={
          withHeader && (
            <Layout.Header>
              <Flex
                justifyContent={'center'}
                alignItems={'center'}
                className={css({
                  backgroundColor: tokens.blue900,
                  color: tokens.gray100,
                  width: '100%',
                  height: '50px',
                })}
              >
                Header
              </Flex>
            </Layout.Header>
          )
        }
        leftSidebar={
          withLeftSidebar && (
            <Layout.Sidebar>
              <Box
                className={css({
                  backgroundColor: tokens.blue100,
                  color: tokens.blue600,
                  width: '100%',
                  height: '600px',
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
                  height: '600px',
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
              width: '100%',
              minHeight: '600px',
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
