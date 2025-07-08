/* eslint-disable rulesdir/emotion-in-function */
import React from 'react';
import { css } from 'emotion';
import type { Meta, Story } from '@storybook/react/types-6-0';
import { Box } from '@contentful/f36-core';
import { Button, DisplayText } from '@contentful/f36-components';

import type { LayoutProps } from '../src';
import { Header } from '../../header/src/Header';
import { Layout } from '../src/CompoundLayout';
import { LayoutBody } from '../src/LayoutBody';

const NAVBAR_HEIGHT = 60;

export default {
  title: 'Layout/Layout',
  component: Layout,
  parameters: {
    propTypes: Layout['__docgenInfo'],
  },
} as Meta;

const ExampleWrapper = ({ withNavbar = true, children }) => (
  <div
    className={css({
      position: 'relative',
      flex: '1 1 auto',
      display: 'flex',
      justifyContent: 'center',
      minHeight: '300px',
      width: '100vw',
      height: '100vh',
      margin: '-1rem',
      backgroundColor: 'lavender',
      flexDirection: 'column',
    })}
  >
    {withNavbar && (
      <div
        className={css({
          width: '100vw',
          height: `${NAVBAR_HEIGHT}px`,
          backgroundColor: 'lavender',
        })}
      >
        Navbar
      </div>
    )}
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
        backgroundColor: 'cornflowerblue',
        width: '100%',
        height: '200px',
      })}
    >
      {content}
    </Box>
  </Layout.Sidebar>
);

export const basic: Story<LayoutProps> = () => {
  return (
    <ExampleWrapper withNavbar={false}>
      <Layout>
        <LayoutBody>
          <Box
            className={css({
              width: '100%',
              height: '1200px',
              backgroundColor: 'lavenderblush',
            })}
          >
            Content
          </Box>
        </LayoutBody>
      </Layout>
    </ExampleWrapper>
  );
};

export const withHeader: Story<LayoutProps> = () => {
  return (
    <ExampleWrapper>
      <Layout header={<LayoutHeaderComp />} offsetTop={NAVBAR_HEIGHT}>
        <Layout.Body>
          <Box
            className={css({
              width: '100%',
              height: '400px',
              backgroundColor: 'lavenderblush',
              marginBottom: '1rem',
            })}
          >
            Content
          </Box>
          <Box
            className={css({
              width: '100%',
              height: '240px',
              backgroundColor: 'blanchedalmond',
              marginBottom: '1rem',
            })}
          >
            Content
          </Box>
          <Box
            className={css({
              width: '100%',
              height: '400px',
              backgroundColor: 'aliceblue',
              marginBottom: '1rem',
            })}
          >
            Content
          </Box>
        </Layout.Body>
      </Layout>
    </ExampleWrapper>
  );
};
export const withLeftSidebar: Story<LayoutProps> = () => {
  return (
    <ExampleWrapper>
      <Layout
        leftSidebar={<LayoutSidebarComp content="Left Sidebar" />}
        offsetTop={NAVBAR_HEIGHT}
      >
        <Layout.Body>
          <Box
            className={css({
              width: '100%',
              height: '400px',
              backgroundColor: 'lavenderblush',
            })}
          >
            Content
          </Box>
        </Layout.Body>
      </Layout>
    </ExampleWrapper>
  );
};

export const withRightSidebar: Story<LayoutProps> = () => {
  return (
    <ExampleWrapper>
      <Layout
        rightSidebar={<LayoutSidebarComp content="Right Sidebar" />}
        offsetTop={NAVBAR_HEIGHT}
      >
        <Layout.Body>
          <Box
            className={css({
              width: '100%',
              height: '400px',
              backgroundColor: 'lavenderblush',
            })}
          >
            Content
          </Box>
        </Layout.Body>
      </Layout>
    </ExampleWrapper>
  );
};
export const withHeaderAndSidebars: Story<LayoutProps> = () => {
  return (
    <ExampleWrapper>
      <Layout
        offsetTop={NAVBAR_HEIGHT}
        header={<LayoutHeaderComp />}
        leftSidebar={<LayoutSidebarComp content="Left Sidebar" />}
        rightSidebar={<LayoutSidebarComp content="Right Sidebar" />}
      >
        <Layout.Body>
          <Box
            className={css({
              width: '100%',
              height: '1000px',
              backgroundColor: 'lavenderblush',
            })}
          >
            Content
          </Box>
        </Layout.Body>
      </Layout>
    </ExampleWrapper>
  );
};

export const withHeaderAndLongSidebars: Story<LayoutProps> = () => {
  return (
    <ExampleWrapper>
      <Layout
        offsetTop={NAVBAR_HEIGHT}
        header={<LayoutHeaderComp />}
        leftSidebar={
          <Layout.Sidebar>
            <Box
              className={css({
                backgroundColor: 'violet',
                width: '100%',
                height: '200px',
                marginBottom: '1rem',
              })}
            >
              Sidebar Content
            </Box>
            <Box
              className={css({
                backgroundColor: 'springgreen',
                width: '100%',
                height: '400px',
                marginBottom: '1rem',
              })}
            >
              Sidebar Content
            </Box>
            <Box
              className={css({
                backgroundColor: 'lightcoral',
                width: '100%',
                height: '200px',
                marginBottom: '1rem',
              })}
            >
              Sidebar Content
            </Box>
            <Box
              className={css({
                backgroundColor: 'indianred',
                width: '100%',
                height: '400px',
                marginBottom: '1rem',
              })}
            >
              Sidebar Content
            </Box>
          </Layout.Sidebar>
        }
        rightSidebar={<LayoutSidebarComp content="Right Sidebar" />}
      >
        <Layout.Body>
          <Box
            className={css({
              width: '100%',
              height: '100px',
              backgroundColor: 'lavenderblush',
            })}
          >
            Content
          </Box>
        </Layout.Body>
      </Layout>
    </ExampleWrapper>
  );
};
export const withLongContentAndLongSidebars: Story<LayoutProps> = () => {
  return (
    <ExampleWrapper>
      <Layout
        offsetTop={NAVBAR_HEIGHT}
        rightSidebar={
          <Layout.Sidebar>
            <Box
              className={css({
                backgroundColor: 'violet',
                width: '100%',
                height: '200px',
                marginBottom: '1rem',
              })}
            >
              Sidebar Content
            </Box>
            <Box
              className={css({
                backgroundColor: 'springgreen',
                width: '100%',
                height: '400px',
                marginBottom: '1rem',
              })}
            >
              Sidebar Content
            </Box>
            <Box
              className={css({
                backgroundColor: 'lightcoral',
                width: '100%',
                height: '200px',
                marginBottom: '1rem',
              })}
            >
              Sidebar Content
            </Box>
            <Box
              className={css({
                backgroundColor: 'indianred',
                width: '100%',
                height: '400px',
                marginBottom: '1rem',
              })}
            >
              Sidebar Content
            </Box>
          </Layout.Sidebar>
        }
      >
        <Layout.Body>
          <Box
            className={css({
              backgroundColor: 'violet',
              width: '100%',
              height: '200px',
              marginBottom: '1rem',
            })}
          >
            Body Content
          </Box>
          <Box
            className={css({
              backgroundColor: 'springgreen',
              width: '100%',
              height: '400px',
              marginBottom: '1rem',
            })}
          >
            Body Content
          </Box>
          <Box
            className={css({
              backgroundColor: 'lightcoral',
              width: '100%',
              height: '200px',
              marginBottom: '1rem',
            })}
          >
            Body Content
          </Box>
          <Box
            className={css({
              backgroundColor: 'indianred',
              width: '100%',
              height: '400px',
              marginBottom: '1rem',
            })}
          >
            Body Content
          </Box>
        </Layout.Body>
      </Layout>
    </ExampleWrapper>
  );
};

export const variantFullscreen: Story<LayoutProps> = () => {
  return (
    <ExampleWrapper>
      <Layout
        offsetTop={NAVBAR_HEIGHT}
        header={<LayoutHeaderComp />}
        leftSidebar={<LayoutSidebarComp content="Left Sidebar" />}
        rightSidebar={<LayoutSidebarComp content="Right Sidebar" />}
        variant="fullscreen"
      >
        <Layout.Body>
          <Box
            className={css({
              width: '100%',
              height: '100px',
              backgroundColor: 'lavenderblush',
            })}
          >
            Content
          </Box>
        </Layout.Body>
      </Layout>
    </ExampleWrapper>
  );
};
export const variantNarrow: Story<LayoutProps> = () => {
  return (
    <ExampleWrapper>
      <Layout variant="narrow" offsetTop={NAVBAR_HEIGHT}>
        <Layout.Body>
          <Box
            className={css({
              width: '100%',
              height: '100px',
              backgroundColor: 'lavenderblush',
            })}
          >
            Content
          </Box>
        </Layout.Body>
      </Layout>
    </ExampleWrapper>
  );
};

export const variantNarrowWithSidebar: Story<LayoutProps> = () => {
  return (
    <ExampleWrapper>
      <Layout
        variant="narrow"
        leftSidebar={<LayoutSidebarComp content="Left Sidebar" />}
        header={<LayoutHeaderComp />}
        offsetTop={NAVBAR_HEIGHT}
      >
        <Layout.Body>
          <Box
            className={css({
              width: '100%',
              height: '900px',
              backgroundColor: 'lavenderblush',
            })}
          >
            Content
          </Box>
        </Layout.Body>
      </Layout>
    </ExampleWrapper>
  );
};

export const variantNarrowWithRightSidebar: Story<LayoutProps> = () => {
  return (
    <ExampleWrapper>
      <Layout
        offsetTop={NAVBAR_HEIGHT}
        variant="narrow"
        rightSidebar={
          <Layout.Sidebar>
            <Box
              className={css({
                backgroundColor: 'violet',
                width: '100%',
                height: '200px',
                marginBottom: '1rem',
              })}
            >
              Sidebar Content
            </Box>
            <Box
              className={css({
                backgroundColor: 'springgreen',
                width: '100%',
                height: '400px',
                marginBottom: '1rem',
              })}
            >
              Sidebar Content
            </Box>
            <Box
              className={css({
                backgroundColor: 'lightcoral',
                width: '100%',
                height: '200px',
                marginBottom: '1rem',
              })}
            >
              Sidebar Content
            </Box>
            <Box
              className={css({
                backgroundColor: 'indianred',
                width: '100%',
                height: '400px',
                marginBottom: '1rem',
              })}
            >
              Sidebar Content
            </Box>
          </Layout.Sidebar>
        }
        header={<LayoutHeaderComp />}
      >
        <Layout.Body>
          <Box
            className={css({
              width: '100%',
              height: '900px',
              backgroundColor: 'lavenderblush',
            })}
          >
            Content
          </Box>
        </Layout.Body>
      </Layout>
    </ExampleWrapper>
  );
};
