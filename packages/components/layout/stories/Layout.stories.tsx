/* eslint-disable rulesdir/emotion-in-function */
import React from 'react';
import { css } from 'emotion';
import { Box } from '@contentful/f36-core';
import tokens from '@contentful/f36-tokens';
import type { Meta, Story } from '@storybook/react/types-6-0';
import { Layout } from '../src/CompoundLayout';
import { Button, DisplayText, Header } from '@contentful/f36-components';
import { LayoutProps } from '../src';

export default {
  title: 'Layout/Layout',
  component: Layout,
  parameters: {
    propTypes: Layout['__docgenInfo'],
  },
} as Meta;

const ExampleWrapper = ({ children }) => (
  <div
    className={css({
      position: 'relative',
      flex: '1 1 auto',
      display: 'flex',
      justifyContent: 'center',
      minHeight: '300px',
      width: '100vw',
      margin: '-1rem',
    })}
  >
    {children}
  </div>
);

const LayoutHeaderComp = () => (
  <Layout.Header>
    <Header
      className={css({ padding: '0', backgroundColor: 'white' })}
      title={<DisplayText marginBottom="none">Headline</DisplayText>}
      actions={<Button variant="primary">Button</Button>}
    />
  </Layout.Header>
);

const LayoutSidebarComp = ({ content }) => (
  <Layout.Sidebar>
    <Box
      className={css({
        backgroundColor: tokens.blue100,
        color: tokens.blue600,
        width: '100%',
        height: '200px',
      })}
    >
      {content}
    </Box>
  </Layout.Sidebar>
);

export const withHeader: Story<LayoutProps> = (args) => {
  return (
    <ExampleWrapper>
      <Layout header={<LayoutHeaderComp />} {...args}>
        <Box
          className={css({
            width: '100%',
            height: '400px',
            backgroundColor: 'lavenderblush',
          })}
        >
          Content
        </Box>
      </Layout>
    </ExampleWrapper>
  );
};
export const withLeftSidebar: Story<LayoutProps> = () => {
  return (
    <ExampleWrapper>
      <Layout leftSidebar={<LayoutSidebarComp content="Left Sidebar" />}>
        <Box
          className={css({
            width: '100%',
            height: '400px',
            backgroundColor: 'lavenderblush',
          })}
        >
          Content
        </Box>
      </Layout>
    </ExampleWrapper>
  );
};

export const withRightSidebar: Story<LayoutProps> = () => {
  return (
    <ExampleWrapper>
      <Layout rightSidebar={<LayoutSidebarComp content="Right Sidebar" />}>
        <Box
          className={css({
            width: '100%',
            height: '100px',
            backgroundColor: 'lavenderblush',
          })}
        >
          Content
        </Box>
      </Layout>
    </ExampleWrapper>
  );
};
export const withHeaderAndSidebars: Story<LayoutProps> = () => {
  return (
    <ExampleWrapper>
      <Layout
        header={<LayoutHeaderComp />}
        leftSidebar={<LayoutSidebarComp content="Left Sidebar" />}
        rightSidebar={<LayoutSidebarComp content="Right Sidebar" />}
      >
        <Box
          className={css({
            width: '100%',
            height: '100px',
            backgroundColor: 'lavenderblush',
          })}
        >
          Content
        </Box>
      </Layout>
    </ExampleWrapper>
  );
};
export const variantFullscreen: Story<LayoutProps> = () => {
  return (
    <ExampleWrapper>
      <Layout
        header={<LayoutHeaderComp />}
        leftSidebar={<LayoutSidebarComp content="Left Sidebar" />}
        rightSidebar={<LayoutSidebarComp content="Right Sidebar" />}
        variant="fullscreen"
      >
        <Box
          className={css({
            width: '100%',
            height: '100px',
            backgroundColor: 'lavenderblush',
          })}
        >
          Content
        </Box>
      </Layout>
    </ExampleWrapper>
  );
};
export const variantNarrow: Story<LayoutProps> = () => {
  return (
    <ExampleWrapper>
      <Layout
        header={<LayoutHeaderComp />}
        leftSidebar={<LayoutSidebarComp content="Left Sidebar" />}
        rightSidebar={<LayoutSidebarComp content="Right Sidebar" />}
        variant="narrow"
      >
        <Box
          className={css({
            width: '100%',
            height: '100px',
            backgroundColor: 'lavenderblush',
          })}
        >
          Content
        </Box>
      </Layout>
    </ExampleWrapper>
  );
};
