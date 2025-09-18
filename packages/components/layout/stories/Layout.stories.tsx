import React from 'react';
import { css } from '@emotion/css';
import type { StoryFn, Meta } from '@storybook/react-vite';
import { Box } from '@contentful/f36-core';
import { Button } from '@contentful/f36-components';
import { action } from 'storybook/actions';
import type { LayoutProps } from '../src';
import { Header } from '../../header/src/Header';
import { Layout } from '../src/CompoundLayout';

const NAVBAR_HEIGHT = 60;

export default {
  title: 'Layout/Layout',
  component: Layout,
  parameters: {
    propTypes: (Layout as any)?.__docgenInfo,
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
      title="Headline"
      actions={
        <Button variant="primary" size="small">
          Button
        </Button>
      }
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

export const Basic: StoryFn<LayoutProps> = () => {
  return (
    <ExampleWrapper withNavbar={false}>
      <Layout>
        <Layout.Body>
          <Box
            className={css({
              width: '100%',
              height: '1200px',
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

export const WithHeader: StoryFn<LayoutProps> = () => {
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

export const WithFullHeader: StoryFn<LayoutProps> = () => {
  return (
    <ExampleWrapper>
      <Layout
        header={
          <Layout.Header>
            <Header
              className={css({ padding: '0', backgroundColor: 'white' })}
              title="Headline"
              breadcrumbs={[{ content: 'Content Types', url: '#' }]}
              backButtonProps={{ onClick: action }}
              withBackButton
              actions={
                <Button variant="primary" size="small">
                  Button
                </Button>
              }
            />
          </Layout.Header>
        }
        offsetTop={NAVBAR_HEIGHT}
        leftSidebar={<LayoutSidebarComp content="Left Sidebar" />}
      >
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

export const WithLeftSidebar: StoryFn<LayoutProps> = () => {
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

export const WithRightSidebar: StoryFn<LayoutProps> = () => {
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
export const WithHeaderAndSidebars: StoryFn<LayoutProps> = () => {
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

export const WithHeaderAndLongSidebars: StoryFn<LayoutProps> = () => {
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
export const WithLongContentAndLongSidebars: StoryFn<LayoutProps> = () => {
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

export const VariantFullscreen: StoryFn<LayoutProps> = () => {
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
export const VariantNarrow: StoryFn<LayoutProps> = () => {
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

export const VariantNarrowWithSidebar: StoryFn<LayoutProps> = () => {
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

export const VariantNarrowWithRightSidebar: StoryFn<LayoutProps> = () => {
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
