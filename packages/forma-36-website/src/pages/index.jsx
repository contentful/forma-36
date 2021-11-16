import React from 'react';

import tokens from '@contentful/f36-tokens';
import { DisplayText, Paragraph, TextLink } from '@contentful/f36-components';

import tokensImg from './tokens.png';
import uiKitImg from './ui-kit.png';

import Masthead from './../components/Masthead';
import Section from './../components/Home/Section';
import Resources from './../components/Home/Resources';
import Resource from './../components/Home/Resource';

import Layout from '../components/Layout';

function IndexPage() {
  return (
    <Layout>
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
            title="Get the tokens"
            description="Design tokens for Forma 36 available as JSON, CSS, and SCSS"
            linkText="Get the tokens"
            linkHref="https://github.com/contentful/forma-36/tree/master/packages/forma-36-tokens"
            imageNode={
              <img src={tokensImg} alt="Illustration for design tokens" />
            }
          />
        </Resources>
      </Section>

      <Section isSecondary>
        <DisplayText>Forma 36 is open-source</DisplayText>
        <Paragraph>We appreciate your contributions</Paragraph>
        <Paragraph>
          Check our <TextLink href="/contributing">contribution guide</TextLink>{' '}
          and learn how to do it
        </Paragraph>
      </Section>
      <Section>
        <DisplayText>Give us feedback!</DisplayText>
        <Paragraph>
          Use one of the the templates on{' '}
          <TextLink
            href="https://github.com/contentful/forma-36/issues/new/choose"
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub
          </TextLink>
        </Paragraph>
        <Paragraph>
          or use this anonymous{' '}
          <TextLink
            href="https://forms.gle/qC7LLbiy4CcF5HPLA"
            target="_blank"
            rel="noopener noreferrer"
          >
            form
          </TextLink>{' '}
          to share your thougts and ideas with us.
        </Paragraph>
      </Section>
    </Layout>
  );
}

export default IndexPage;
