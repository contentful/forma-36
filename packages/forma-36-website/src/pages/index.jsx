import React from 'react';

import tokens from '@contentful/f36-tokens';
import { DisplayText, Paragraph, Button } from '@contentful/f36-components';

import componentsImg from './components.png';
import fcssImg from './fcss.png';
import tokensImg from './tokens.png';
import uiKitImg from './ui-kit.png';

import Masthead from './../components/Masthead';
import Section from './../components/Home/Section';
import Resources from './../components/Home/Resources';
import Resource from './../components/Home/Resource';

import Layout from '../components/Layout';

const IndexPage = () => (
  <Layout pageContext={{ frontmatter: { type: 'home' } }}>
    <Masthead
      title="Tools and guidance for digital teams"
      description="Forma 36 is an open-source design system by Contentful created with the intent to reduce the overhead of creating UI by providing tools and guidance for digital teams building and extending Contentful products."
      hasLogo
    />
    <Section>
      <DisplayText>Resources for designers and developers</DisplayText>
      <Paragraph
        style={{
          fontSize: tokens.fontSizeL,
          marginBottom: tokens.spacing3Xl,
        }}
      >
        Everything you need to get started building for Contentful
      </Paragraph>
      <Resources>
        <Resource
          title="Prototype in Figma with Forma 36 components"
          description="Copy the F36 UI Kit to Figma, publish it as a Team library and start prototyping. You need a Figma account to do this."
          linkText="Copy F36 UI Kit to Figma"
          linkHref="https://www.figma.com/file/xkNH4KddWvI5Zrkbi6CYZJ/F36-UI-Kit/duplicate"
          imageNode={
            <img src={uiKitImg} alt="Illustration for Forma 36 UI Kit" />
          }
        />
        <Resource
          title="Get started with our React components"
          description="Build your application or extension using the Forma 36 React component library"
          linkText="View all components in Storybook"
          linkHref="https://f36-storybook.contentful.com/"
          imageNode={
            <img
              src={componentsImg}
              alt="Illustration for React component library"
            />
          }
        />
        <Resource
          title="Get the tokens"
          description="Design tokens for Forma 36 available as JSON, CSS, and SCSS"
          linkText="Get the tokens"
          linkHref="https://github.com/contentful/forma-36/tree/master/packages/forma-36-tokens"
          imageNode={
            <img src={tokensImg} alt="Illustration for design tokens" />
          }
        />
        <Resource
          title="Forma 36 FCSS"
          description="CSS utlity classes for spacing, colors, and more"
          linkText="Get FCSS"
          linkHref="https://github.com/contentful/forma-36/tree/master/packages/forma-36-fcss"
          imageNode={
            <img src={fcssImg} alt="Illustration for CSS utility classes" />
          }
        />
      </Resources>
    </Section>

    <Section isSecondary>
      <DisplayText>Get started</DisplayText>
      <Paragraph
        style={{ fontSize: tokens.fontSizeL, marginBottom: tokens.spacingM }}
      >
        You can use our Codesandbox template to start using Forma 36 right away
      </Paragraph>

      <iframe
        src="https://codesandbox.io/embed/forma-36-template-v3-x-x-stxbz?fontsize=14&hidenavigation=1&theme=dark"
        style={{
          width: '100%',
          maxWidth: '960px',
          height: '500px',
          border: 0,
          borderRadius: '4px',
          overflow: 'hidden',
        }}
        title="Forma 36 Template (v3.x.x) "
        allow="accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr; xr-spatial-tracking"
        sandbox="allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"
      ></iframe>
    </Section>

    <Section isSecondary>
      <DisplayText>Forma 36 is open-source</DisplayText>
      <Paragraph
        style={{
          fontSize: tokens.fontSizeL,
          maxWidth: '28rem',
          marginLeft: 'auto',
          marginRight: 'auto',
        }}
      >
        We appreciate your contributions. For more details about how to
        contribute to a package, see the README of the corresponding package on
        GitHub
      </Paragraph>
      <Button
        href="https://github.com/contentful/forma-36"
        target="_blank"
        rel="noopener"
      >
        View on GitHub
      </Button>
    </Section>
  </Layout>
);

export default IndexPage;
