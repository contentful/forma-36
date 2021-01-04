import React from 'react';

import Spinner, { SpinnerProps } from './Spinner';
import SectionHeading from '../Typography/SectionHeading';
import Flex from '../Flex/Flex';
import Subheading from '../Typography/Subheading';
import tokens from '@contentful/forma-36-tokens';

export default {
  title: 'Components/Spinner',
  component: Spinner,
  parameters: {
    propTypes: Spinner['__docgenInfo'],
  },
};

export const Default = (args: SpinnerProps) => {
  return <Spinner {...args} />;
};
Default.args = {
  color: 'primary',
  size: 'large',
};

export const WithText = (args: SpinnerProps) => {
  return (
    <>
      Loading <Spinner {...args} />
    </>
  );
};

export const overview = () => {
  return (
    <>
      <Flex marginBottom="spacingS">
        <SectionHeading element="h3">Spinner color overview</SectionHeading>
      </Flex>
      <Flex marginBottom="spacingM">
        Loading <Spinner color="default" />
      </Flex>
      <Flex marginBottom="spacingS">
        <SectionHeading element="h3">Spinner color overview</SectionHeading>
      </Flex>
      <Flex marginBottom="spacingM">
        Loading <Spinner color="primary" />
      </Flex>
      <Flex marginBottom="spacingS">
        <SectionHeading element="h3">Spinner color overview</SectionHeading>
      </Flex>
      <Flex
        marginBottom="spacingM"
        padding="spacingL"
        style={{ backgroundColor: tokens.colorContrastDark }}
      >
        <Subheading style={{ color: tokens.colorWhite }}>Loading</Subheading>{' '}
        <Spinner color="white" />
      </Flex>
    </>
  );
};
