import React from 'react';
import tokens from '@contentful/f36-tokens';
import Image from 'next/image';
import Link from 'next/link';
import { DisplayText, Paragraph, TextLink } from '@contentful/f36-components';
import { Masthead } from '../components/Home/Masthead';
import { Section } from '../components/Home/Section';
import { Resources } from '../components/Home/Resources';
import { Resource } from '../components/Home/Resource';

import tokensImg from '../resources/images/tokens.png';
import uiKitImg from '../resources/images/ui-kit.png';

function Home() {
  return (
    <>
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
            title="New version of the UIKit is still in progress"
            description="Fresh UIKit will be released with version 4 of Forma 36"
            imageNode={
              <Image {...uiKitImg} alt="Illustration for Forma 36 UI Kit" />
            }
          />
          <Resource
            title="Get the tokens"
            description="Design tokens for Forma 36 available as JSON, CSS, and SCSS"
            linkText="Get the tokens"
            linkHref="https://github.com/contentful/forma-36/tree/master/packages/forma-36-tokens"
            imageNode={
              <Image {...tokensImg} alt="Illustration for design tokens" />
            }
          />
        </Resources>
      </Section>

      <Section isSecondary>
        <DisplayText>Forma 36 is open-source</DisplayText>
        <Paragraph>We appreciate your contributions</Paragraph>
        <Paragraph>
          Check our{' '}
          <Link href="/contributing" passHref>
            <TextLink href="/contributing">contribution guide</TextLink>
          </Link>{' '}
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
          to share your thoughts and ideas with us.
        </Paragraph>
      </Section>
    </>
  );
}

export default Home;
